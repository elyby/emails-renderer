#!/usr/bin/env node

/* eslint-env node */
/* eslint-disable no-console */

const os = require('os');
const fs = require('fs');
const path = require('path');
const glob = require('glob');
const sortKeys = require('sort-keys');

const DEFAULT_LOCALE = 'en';
const INDEX_FILE_NAME = 'index';

const ROOT_PATH = path.resolve(__dirname, '../../src');
const LANG_DIR = path.join(ROOT_PATH, 'i18n');
const MESSAGES_PATTERN = path.join(ROOT_PATH, '**/*.intl.json');
const TARGET_FILE = path.join(LANG_DIR, `${DEFAULT_LOCALE}.json`);

const messages = glob.sync(MESSAGES_PATTERN)
    .map((filename) => [filename, JSON.parse(fs.readFileSync(filename, 'utf8'))])
    .reduce((collection, [filename, descriptors]) => {
        const prefix = path.dirname(filename)
            .replace(ROOT_PATH, '')
            .replace(/^\/|\/$/g, '')
            .replace(/\//g, '.');
        for (const id in descriptors) {
            // noinspection JSUnfilteredForInLoop
            const key = `${prefix}.${id}`;
            // noinspection JSUnfilteredForInLoop
            const descriptor = descriptors[id];
            if (typeof descriptor === 'object') {
                const { defaultMessage } = descriptor;
                collection[key] = defaultMessage;
            } else {
                collection[key] = descriptor;
            }
        }

        return collection;
    }, {});

fs.writeFileSync(TARGET_FILE, JSON.stringify(sortKeys(messages), null, 4) + os.EOL);
const messagesIds = Object.keys(messages);
glob.sync(path.join(LANG_DIR, `!(${DEFAULT_LOCALE}|${INDEX_FILE_NAME}).json`))
    .map((filename) => [filename, JSON.parse(fs.readFileSync(filename, 'utf8'))])
    .forEach(([filename, translatedMessages]) => {
        const translatedMessagesIds = Object.keys(translatedMessages);
        messagesIds.filter((id) => !translatedMessagesIds.includes(id)).forEach((newKey) => {
            translatedMessages[newKey] = messages[newKey];
        });
        translatedMessagesIds.filter((id) => !messagesIds.includes(id)).forEach((removedKey) => {
            Reflect.deleteProperty(translatedMessages, removedKey);
        });

        fs.writeFileSync(filename, JSON.stringify(sortKeys(translatedMessages), null, 4) + os.EOL);
    });
