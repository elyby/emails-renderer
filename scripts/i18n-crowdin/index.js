/* eslint-env node */
/* eslint-disable no-console */

const fs = require('fs');
const path = require('path');

const CrowdinApi = require('crowdin-api');
const MultiProgress = require('multi-progress');
const ch = require('chalk');
const iso639 = require('iso-639-1');
const prompt = require('prompt');
const glob = require('glob');

const API_KEY = process.env.CROWDIN_API_KEY;
if (!API_KEY) {
    console.error(ch.red('To use this script, please specify CROWDIN_API_KEY env variable with valid API key.'));
    console.info(ch.yellow('You can obtain this key here https://translate.ely.by/project/elyby/settings#api'));
    process.exit(126);
}

const PROJECT_ID = 'elyby';
const CROWDIN_FILE_PATH = 'accounts/emails.json';
const SOURCE_LANG = 'en';
const LANG_DIR = path.resolve(`${__dirname}/../../src/i18n`);
const INDEX_FILE_NAME = 'index.json';
const MIN_RELEASE_PROGRESS = 80; // Minimal ready percent before translation can be published

const crowdin = new CrowdinApi({ apiKey: API_KEY, projectName: PROJECT_ID });
const progressBar = new MultiProgress();

/**
 * Locales that has been verified by core team members
 */
const RELEASED_LOCALES = ['be', 'fr', 'id', 'pt', 'ru', 'uk', 'vi', 'zh'];

/**
 * Array of Crowdin locales to our internal locales representation
 */
const LOCALES_MAP = {
    'pt-BR': 'pt',
    'zh-CN': 'zh',
};

/**
 * This array allows us to customise native languages names, because ISO-639-1 sometimes is strange
 */
const NATIVE_NAMES_MAP = {
    be: 'Беларуская',
    id: 'Bahasa Indonesia',
    lt: 'Lietuvių',
    pl: 'Polski',
    pt: 'Português do Brasil',
    sr: 'Српски',
    ro: 'Română',
    zh: '简体中文',
};

/**
 * This arrays allows us to override Crowdin English languages names
 */
const ENGLISH_NAMES_MAP = {
    pt: 'Portuguese, Brazilian',
    sr: 'Serbian',
    zh: 'Simplified Chinese',
};

/**
 * Converts Crowdin's language code to our internal value
 *
 * @param {string} code
 * @return {string}
 */
function toInternalLocale(code) {
    return LOCALES_MAP[code] || code;
}

/**
 * Форматирует входящий объект с переводами в итоговую строку в том формате, в каком они
 * хранятся в самом приложении
 *
 * @param {object} translates
 * @return {string}
 */
function serializeToFormattedJson(translates) {
    return JSON.stringify(sortByKeys(translates), null, 4) + '\n'; // eslint-disable-line prefer-template
}

/**
 * http://stackoverflow.com/a/29622653/5184751
 *
 * @param {object} object
 * @return {object}
 */
function sortByKeys(object) {
    return Object.keys(object).sort().reduce((result, key) => {
        result[key] = object[key];
        return result;
    }, {});
}

async function pullLocales() {
    const { languages } = await crowdin.projectInfo();
    return languages;
}

function findFile(root, path) {
    const [nodeToSearch, ...rest] = path.split('/');
    for (const node of root) {
        if (node.name !== nodeToSearch) {
            continue;
        }

        if (rest.length === 0) {
            return node;
        }

        return findFile(node.files, rest.join('/'));
    }

    return null;
}

async function pull() {
    console.log('Pulling locales list...');
    const locales = await pullLocales();
    const checkingProgressBar = progressBar.newBar('| Pulling locales info   :bar :percent | :current/:total', {
        total: locales.length,
        incomplete: '\u2591',
        complete: '\u2588',
        width: locales.length,
    });
    // Add prefix 'c' to current and total to prevent filling thees placeholders with real values
    const downloadingProgressBar = progressBar.newBar('| Downloading translates :bar :percent | :cCurrent/:cTotal', {
        total: 100,
        incomplete: '\u2591',
        complete: '\u2588',
        width: locales.length,
    });
    let downloadingTotal = 0;
    let downloadingReady = 0;
    const results = await Promise.all(locales.map(async (locale) => {
        const { files } = await crowdin.languageStatus(locale.code);
        checkingProgressBar.tick();
        const fileInfo = findFile(files, CROWDIN_FILE_PATH);
        if (fileInfo === null) {
            throw new Error('Unable to find translation file. Please check the CROWDIN_FILE_PATH param.');
        }

        const progress = fileInfo.words_approved / fileInfo.words * 100;
        if (!RELEASED_LOCALES.includes(toInternalLocale(locale.code)) && progress < MIN_RELEASE_PROGRESS) {
            return null;
        }

        downloadingProgressBar.update(downloadingReady / ++downloadingTotal, {
            cCurrent: downloadingReady,
            cTotal: downloadingTotal,
        });

        const translatesFilePath = await crowdin.exportFile(CROWDIN_FILE_PATH, locale.code);

        downloadingProgressBar.update(++downloadingReady / downloadingTotal, {
            cCurrent: downloadingReady,
            cTotal: downloadingTotal,
        });

        return {
            locale,
            progress,
            translatesFilePath,
        };
    }));

    console.log('Locales are downloaded. Writing them to file system.');

    const indexFileEntries = {
        en: {
            code: 'en',
            name: 'English',
            englishName: 'English',
            progress: 100,
            isReleased: true,
        },
    };
    await Promise.all(results.map((result) => new Promise((resolve, reject) => {
        if (result === null) {
            resolve();
            return;
        }

        const { locale: { code, name }, progress, translatesFilePath } = result;
        const ourCode = toInternalLocale(code);

        indexFileEntries[ourCode] = {
            code: ourCode,
            name: NATIVE_NAMES_MAP[ourCode] || iso639.getNativeName(ourCode),
            englishName: ENGLISH_NAMES_MAP[ourCode] || name,
            progress: parseFloat(progress.toFixed(1)),
            isReleased: RELEASED_LOCALES.includes(ourCode),
        };

        fs.copyFile(translatesFilePath, path.join(LANG_DIR, `${ourCode}.json`), 0, (err) => {
            err ? reject(err) : resolve();
        });
    })));

    console.log('Writing an index file.');

    fs.writeFileSync(path.join(LANG_DIR, INDEX_FILE_NAME), serializeToFormattedJson(indexFileEntries));

    console.log(ch.green('The index file was successfully written'));

    console.log('Removing untranslated locales');

    const pattern = path.join(LANG_DIR, `!(${Object.keys(indexFileEntries).join('|')}|index).json`);
    glob.sync(pattern.replace(/\\/g, '/')).map((filename) => fs.unlinkSync(filename));

    console.log(ch.green('Untranslated locales successfully removed'));
}

function push() {
    return new Promise((resolve, reject) => {
        prompt.start();
        prompt.get({
            properties: {
                disapprove: {
                    description: 'Disapprove changed lines? [Y/n]',
                    pattern: /^y|n$/i,
                    message: 'Please enter "y" or "n"',
                    default: 'y',
                    before: (value) => value.toLowerCase() === 'y',
                },
            },
        }, async (err, { disapprove }) => {
            if (err) {
                reject(err);
                return;
            }

            console.log(`Publishing ${ch.bold(SOURCE_LANG)} translates file...`);

            await crowdin.updateFile({
                [CROWDIN_FILE_PATH]: path.join(LANG_DIR, `${SOURCE_LANG}.json`),
            }, {
                // eslint-disable-next-line camelcase
                update_option: disapprove ? 'update_as_unapproved' : 'update_without_changes',
            });

            console.log(ch.green('Success'));

            resolve();
        });
    });
}

try {
    const action = process.argv[2];
    switch (action) {
        case 'pull':
            pull();
            break;
        case 'push':
            push();
            break;
        default:
            console.error(`Unknown action ${action}`);
    }
} catch (exception) {
    console.error(exception);
}
