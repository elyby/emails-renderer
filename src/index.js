import 'babel-polyfill';

import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';

import App from 'App';

/* global process: false */
if (process.env.NODE_ENV !== 'production') {
    const DevApp = require('devTools').default;

    ReactDOM.render(
        <DevApp />,
        document.getElementById('app')
    );
}

export default function(props) {
    return ReactDOMServer.renderToStaticMarkup(<App {...props} />);
}
