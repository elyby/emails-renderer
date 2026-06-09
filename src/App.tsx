/* eslint-disable @typescript-eslint/no-var-requires */

import React, { ComponentType } from 'react';
import { IntlProvider } from 'react-intl';

import { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE } from 'params';

import { Html, BaseLayout } from 'components';
import { loadLocale } from 'services/i18n';

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

    const messages = loadLocale(locale);

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
