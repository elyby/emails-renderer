import styles from './styles';

import { Table } from './';

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
                <Table style={styles.body}>
                    <tr>
                        <td>
                            &nbsp;
                        </td>
                        <td style={styles.container}>
                            {props.children}
                        </td>
                        <td>
                            &nbsp;
                        </td>
                    </tr>
                </Table>
            </body>
        </html>
    );
}
