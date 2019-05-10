import React from 'react';
import PropTypes from 'prop-types';

import { IntlProvider, addLocaleData } from 'react-intl';

import { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE } from './params';

import BaseLayout from 'components/BaseLayout';

export default function App({type, payload = {}}) {
    let { locale } = payload;

    if (!locale || SUPPORTED_LANGUAGES.indexOf(locale) === -1) {
        locale = DEFAULT_LANGUAGE;
    }

    const { default: messages } = require(`!extended-translations-loader!i18n/${locale}.json`);
    const localeData = require(`react-intl/locale-data/${locale}.js`);
    addLocaleData(localeData);

    const { default: Email } = require(`emails/${type}/index`);

    return (
        <IntlProvider locale={locale} messages={messages}>
            <BaseLayout>
                <Email {...payload} />
            </BaseLayout>
        </IntlProvider>
    );
}

App.propTypes = {
    type: PropTypes.string.isRequired,
    payload: PropTypes.shape({
        locale: PropTypes.string,
    }),
};
