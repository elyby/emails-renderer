import React, { FunctionComponent } from 'react';

const Html: FunctionComponent = ({ children }) => {
    return (
        <html>
            <head>
                <meta name="viewport" content="width=device-width" />
                <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
            </head>
            <body style={{
                margin: 0
            }}>
                {children}
            </body>
        </html>
    );
};

export default Html;
