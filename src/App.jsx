import { PropTypes } from 'react';

import { IntlProvider, addLocaleData } from 'react-intl';

import beLocaleData from 'react-intl/locale-data/be';
import enLocaleData from 'react-intl/locale-data/en';
import ruLocaleData from 'react-intl/locale-data/ru';
import ptLocaleData from 'react-intl/locale-data/pt';
import ukLocaleData from 'react-intl/locale-data/uk';

addLocaleData(beLocaleData);
addLocaleData(enLocaleData);
addLocaleData(ruLocaleData);
addLocaleData(ptLocaleData);
addLocaleData(ukLocaleData);

import { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE } from './constants';

import BaseLayout from 'components/BaseLayout';

export default function App({type, payload = {}}) {
    let {locale} = payload;

    if (!locale || SUPPORTED_LANGUAGES.indexOf(locale) === -1) {
        locale = DEFAULT_LANGUAGE;
    }

    const messages = require(`i18n/${locale}.json`);
    const Email = require(`emails/${type}/index`).default;

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
        locale: PropTypes.string
    })
};
