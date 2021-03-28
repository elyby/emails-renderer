import React, { ComponentType } from 'react';
import { FormattedMessage as Message, FormattedHTMLMessage as HTMLMessage } from 'react-intl';

import { Table } from 'components/table';

import styles from './styles';
import messages from './messages.intl.json';
import logoImg from './images/logo.png';

const Footer: ComponentType = () => (
    <Table style={styles.footer}>
        <tr>
            <td style={styles.paddingColumn}>&nbsp;</td>
            <td style={styles.footerText}>
                <Message {...messages.footer} values={{
                    serviceLink: (
                        <a href="https://account.ely.by" style={styles.footerLink}>
                            <Message {...messages.service_name} />
                        </a>
                    ),
                }} />
            </td>
            <td style={styles.paddingColumn}>&nbsp;</td>
            <td style={styles.footerLogo}>
                <a href="https://ely.by">
                    <img src={logoImg} alt="Ely.by" width="128" height="58" />
                    <br />
                    <HTMLMessage {...messages.alternativeMinecraftServices} />
                </a>
            </td>
            <td style={styles.paddingColumn}>&nbsp;</td>
        </tr>
    </Table>
);

export default Footer;
