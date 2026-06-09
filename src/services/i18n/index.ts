/* eslint-disable @typescript-eslint/no-var-requires */

import { addLocaleData } from 'react-intl';

export function loadLocale(locale: string): any {
    const { default: messages } = require(`!extended-translations-loader!i18n/${locale}.json`);

    let localeData;
    try {
        localeData = require(`./locale-data/${locale}.js`).default;
    } catch {
        localeData = require(`react-intl/locale-data/${locale}.js`);
    }

    addLocaleData(localeData);

    return messages;
}
