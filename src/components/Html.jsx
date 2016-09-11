export default function Html(props) {
    return (
        <html>
            <head>
                <meta name="viewport" content="width=device-width" />
                <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
            </head>
            <body style={{
                margin: 0
            }}>
                {props.children}
            </body>
        </html>
    );
}
