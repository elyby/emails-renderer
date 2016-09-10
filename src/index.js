import 'babel-polyfill';

// NOTE: we are requiring with require(), to enable dynamic dependencies
// depending on ENV, where App is running in.
// This allows us better support of hmr and reduces bundle size

/* global process: false */
// eslint-disable-next-line no-negated-condition
if (process.env.NODE_ENV !== 'production') {
    const ReactDOM = require('react-dom');
    const DevApp = require('devTools').default;

    ReactDOM.render(
        <DevApp />,
        document.getElementById('app')
    );
} else {
    const ReactDOMServer = require('react-dom/server');
    const App = require('App').default;

    module.exports = {
        default(props) {
            return ReactDOMServer.renderToStaticMarkup(<App {...props} />);
        }
    };
}
