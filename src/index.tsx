/* eslint-disable spaced-comment */
import React from 'react';

/// #if !PRODUCTION

import ReactDOM from 'react-dom';
import DevApp from 'devTools';

ReactDOM.render(<DevApp />, document.getElementById('app'));

/// #else

import ReactDOMServer from 'react-dom/server';
import { Html } from 'components';
import App from 'App';

interface Props {
    type: string;
    payload: {
        locale: string;
        [key: string]: string;
    };
    assetsHost?: string;
}

export default ({ assetsHost, ...props }: Props) => {
    if (assetsHost) {
        // eslint-disable-next-line camelcase,@typescript-eslint/camelcase
        __webpack_public_path__ = assetsHost.replace(/\/*$/, '/');
    }

    return ReactDOMServer.renderToStaticMarkup(
        <Html>
            <App {...props} />
        </Html>
    );
};

/// #endif
