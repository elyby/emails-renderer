import React from 'react';
import { FormattedMessage as Message, FormattedHTMLMessage as HTMLMessage } from 'react-intl';

import { Table } from 'components/table';

import styles from './styles';
import messages from './messages.intl.json';
import logoImg from './images/logo.png';

export default function Footer() {
    return (
        <Table style={styles.footer}>
            <tr>
                <td rowSpan={2} style={styles.footerText}>
                    <Message {...messages.footer} values={{
                        serviceLink: (
                            <a href="https://account.ely.by" style={styles.footerLink}>
                                <Message {...messages.service_name} />
                            </a>
                        ),
                    }} />
                </td>
                <td style={styles.footerLogo}>
                    <a href="http://ely.by">
                        <img src={logoImg} alt="Ely.by" width="128" height="58" />
                    </a>
                </td>
            </tr>
            <tr>
                <td style={styles.footerLogoSubtitle}>
                    <a href="http://ely.by">
                        <HTMLMessage {...messages.alternativeMinecraftServices} />
                    </a>
                </td>
            </tr>
        </Table>
    );
}
