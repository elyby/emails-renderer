import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import { IntlProvider } from 'react-intl';

ReactDOM.render(
    <IntlProvider locale="en" messages={{}}>
        <div>Hello world</div>
    </IntlProvider>,
    document.getElementById('app')
);
