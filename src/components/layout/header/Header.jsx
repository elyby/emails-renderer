import { Table } from 'components/table';
import { FormattedMessage as Message } from 'react-intl';
import { PropTypes } from 'react';

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
