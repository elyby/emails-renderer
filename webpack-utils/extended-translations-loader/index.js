/* eslint-env node */

const fs = require('fs');
const path = require('path');
const glob = require('glob');
const { stringify } = require('qs');

const localFontPath = path.join(__dirname, 'RobotoCondensed-Regular.ttf');
const localFontName = 'RobotoCondensed';
const scale = 2;

module.exports = async function(content) {
    this.cacheable && this.cacheable();

    const callback = this.async();

    const ROOT_PATH = path.join(this.rootContext, 'src');
    const localeName = path.basename(this.resourcePath, `.${this.resourcePath.split('.').pop()}`);

    const renderText2Png = (key, { text, size, color }) => new Promise((resolve, reject) => {
        if (!text || !size || !color) {
            reject(new Error('text, size and color params are required'));
            return;
        }

        const fileName = `${key.replace(/\./g, '_')}_${localeName}.png`;
        const args = {
            localFontPath,
            localFontName,
            text,
            color,
            font: `${size * scale}px RobotoCondensed`, // eslint-disable-line generator-star-spacing
        };
        const renderTextRequest = `text2png-loader?${stringify(args)}!`;
        const emitFileRequest = `image-size-loader?name=assets${path.sep}${fileName}?[hash]!${renderTextRequest}`;
        this.loadModule(emitFileRequest, (err, module) => {
            if (err) {
                reject(err);
                return;
            }

            global.__webpack_public_path__ = ''; // eslint-disable-line camelcase
            const { src, width, height } = this.exec(module, fileName);
            Reflect.deleteProperty(global, '__webpack_public_path__');

            const targetWidth = Math.ceil(width / scale);
            const targetHeight = Math.ceil(height / scale);

            resolve(`<img src="${src}" alt="${text}" width="${targetWidth}" height="${targetHeight}" style="vertical-align: middle" />`);
        });
    });

    const examine = (key, value) => new Promise((resolve, reject) => {
        const pathParts = key.split('.');
        const id = pathParts.pop();
        const pattern = path.join(ROOT_PATH, pathParts.join('/'), '*.intl.json');
        // glob always uses linux separators
        glob(pattern.replace(/\\/g, '/'), (err, matches) => {
            if (err) {
                reject(err);
                return;
            }

            if (matches.length === 0) {
                this.emitWarning(`Unable to find corresponding intl file for ${key} key`);
                resolve(value);
                return;
            }

            for (const path of matches) {
                const json = JSON.parse(fs.readFileSync(path));
                const descriptor = json[id];
                if (!descriptor) {
                    continue;
                }

                this.addDependency(path);

                if (typeof descriptor === 'string') {
                    resolve(value);
                    continue;
                }

                if (typeof descriptor !== 'object') {
                    this.emitWarning('Unknown value type');
                    continue;
                }

                const { type } = descriptor;
                if (type !== 'text2png') {
                    this.emitWarning(`Unsupported object key type "${type}"`);
                    continue;
                }

                renderText2Png(key, {
                    ...descriptor,
                    text: value,
                }).then(resolve).catch(reject);

                return;
            }

            resolve(value);
        });
    });

    const json = JSON.parse(content);
    const result = JSON.stringify(await Object.keys(json).reduce(async (translationsPromise, key) => {
        const translations = await translationsPromise;
        translations[key] = await examine(key, json[key]);

        return translations;
    }, Promise.resolve({}))).replace(/(<img src=\\")(assets)/g, '$1" + __webpack_public_path__ + "$2');

    callback(null, `
        import { defineMessages } from 'react-intl';
        export default defineMessages(${result});
    `);
};
