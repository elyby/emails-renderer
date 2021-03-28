/* eslint-disable @typescript-eslint/no-var-requires */

import React, { ComponentType } from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';

import { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE } from 'params';

import { Html, BaseLayout } from 'components';

interface Params {
    type: string;
    payload: {
        locale: string;
    } & Record<string, any>;
}

const App: ComponentType<Params> = ({ type, payload: { locale, ...params } }) => {
    if (!locale || SUPPORTED_LANGUAGES.indexOf(locale) === -1) {
        locale = DEFAULT_LANGUAGE;
    }

    const { default: messages } = require(`!extended-translations-loader!i18n/${locale}.json`);
    const localeData = require(`react-intl/locale-data/${locale}.js`);
    addLocaleData(localeData);

    const { default: Email } = require(`emails/${type}/index`);

    return (
        <Html lang={locale}>
            <IntlProvider locale={locale} messages={messages}>
                <BaseLayout>
                    <Email {...params} />
                </BaseLayout>
            </IntlProvider>
        </Html>
    );
};

export default App;
