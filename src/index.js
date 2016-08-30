import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';

import { IntlProvider } from 'react-intl';

import Register from 'emails/register';

const isCli = typeof window === 'undefined';

const App = ({type, payload = {}}) => (
    <IntlProvider locale="en" messages={{}}>
        {isCli
            ? (
                <Register {...payload} />
            ) : (
                <div>
                    Hello world
                    <Register {...payload} />
                </div>
            )
        }
    </IntlProvider>
);

if (isCli) {
    module.exports = {
        default: (props) =>
            ReactDOMServer.renderToStaticMarkup(<App {...props} />)
    };
} else {
    ReactDOM.render(<App />, document.getElementById('app'));
}
