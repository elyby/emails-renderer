import { PropTypes } from 'react';

import { IntlProvider, addLocaleData } from 'react-intl';

import beLocaleData from 'react-intl/locale-data/be';
import elLocaleData from 'react-intl/locale-data/el';
import enLocaleData from 'react-intl/locale-data/en';
import filLocaleData from 'react-intl/locale-data/fil';
import idLocaleData from 'react-intl/locale-data/id';
import plLocaleData from 'react-intl/locale-data/pl';
import roLocaleData from 'react-intl/locale-data/ro';
import ruLocaleData from 'react-intl/locale-data/ru';
import slLocaleData from 'react-intl/locale-data/sl';
import ptLocaleData from 'react-intl/locale-data/pt';
import ukLocaleData from 'react-intl/locale-data/uk';
import viLocaleData from 'react-intl/locale-data/vi';

addLocaleData(beLocaleData);
addLocaleData(elLocaleData);
addLocaleData(enLocaleData);
addLocaleData(filLocaleData);
addLocaleData(idLocaleData);
addLocaleData(plLocaleData);
addLocaleData(roLocaleData);
addLocaleData(ruLocaleData);
addLocaleData(slLocaleData);
addLocaleData(ptLocaleData);
addLocaleData(ukLocaleData);
addLocaleData(viLocaleData);

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
