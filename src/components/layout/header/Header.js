import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage as Message } from 'react-intl';

import { Table } from 'components/table';

import styles from './styles';
import messages from './messages.intl.json';

export default function Userbar({username, title}) {
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
}

Userbar.propTypes = {
    username: PropTypes.string,
    title: PropTypes.node
};
