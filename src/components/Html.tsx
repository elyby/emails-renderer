import React, { ComponentType } from 'react';
import { getLangDir } from 'rtl-detect';

interface Props {
    lang: string;
}

const Html: ComponentType<Props> = ({ lang, children }) => (
    <html lang={lang} dir={getLangDir(lang)}>
        <head>
            <meta name="viewport" content="width=device-width" />
            <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        </head>
        <body style={{ margin: 0 }}>
            {children}
        </body>
    </html>
);

export default Html;
