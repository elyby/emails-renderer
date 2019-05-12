import React, { FunctionComponent, ReactElement } from 'react';
import { FormattedMessage as Message } from 'react-intl';

import { Table } from 'components/table';

import styles from './styles';
import messages from './messages.intl.json';

interface Props {
    username: string;
    title: ReactElement;
}

const Userbar: FunctionComponent<Props> = ({ username, title }) => {
    return (
        <Table style={styles.headerImage}>
            <tr>
                <td style={styles.headerTextContainer}>
                    <div style={styles.welcomeUsername}>
                        <Message {...messages.hello_username} values={{username}} />
                    </div>

                    {title}
                </td>
            </tr>
        </Table>
    );
};

export default Userbar;
