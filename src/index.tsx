// NOTE: we are requiring with require(), to enable dynamic dependencies
// depending on ENV, where App is running in.
// This allows us better support of hmr and reduces bundle size

const React = require('react');

/* global process: false */
// eslint-disable-next-line no-negated-condition
if (process.env.NODE_ENV !== 'production') {
    const ReactDOM = require('react-dom');
    const DevApp = require('devTools').default;

    ReactDOM.render(
        <DevApp />,
        document.getElementById('app'),
    );
} else {
    const ReactDOMServer = require('react-dom/server');
    const { Html } = require('components');
    const App = require('App').default;

    module.exports = {
        default(props: {
            type: string;
            payload: {
                locale: string;
                [key: string]: string;
            };
            assetsHost?: string;
        }) {
            if (props.assetsHost) {
                // noinspection JSUnresolvedVariable
                __webpack_public_path__ = props.assetsHost.replace(/\/*$/, '/'); // eslint-disable-line

                Reflect.deleteProperty(props, 'assetsHost');
            }

            return ReactDOMServer.renderToStaticMarkup(
                <Html>
                    <App {...props} />
                </Html>
            );
        }
    };
}