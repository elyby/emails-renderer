import 'babel-polyfill';

import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';

import App from 'App';

const isCli = typeof window === 'undefined';

if (isCli) {
    module.exports = {
        default: (props) =>
            ReactDOMServer.renderToStaticMarkup(<App {...props} />)
    };
} else {
    ReactDOM.render(
        <App type="register" payload={{locale: 'ru'}} debug />,
        document.getElementById('app')
    );
}
