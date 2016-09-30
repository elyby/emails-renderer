import { Table } from 'components/table';
import { FormattedMessage as Message } from 'react-intl';

import { BitmapText } from 'components/text';

import styles from './styles';

import messages from './messages.intl.json';

export default function Footer() {
    return (
        <Table style={styles.footer}>
            <tr>
                <td style={styles.footerText}>
                    <Message {...messages.footer} values={{
                        serviceLink:
                            <a href="https://account.ely.by" style={styles.footerLink}>
                                <Message {...messages.service_name} />
                            </a>
                    }} />
                </td>
                <td style={styles.footerLogo}>
                    <a href="http://ely.by">
                        <BitmapText message={messages.footer_logo_alt} style={{
                            verticalAlign: 'middle'
                        }} />
                    </a>
                </td>
            </tr>
        </Table>
    );
}
