import { PropTypes } from 'react';

import { FormattedMessage as Message } from 'react-intl';

import { Userbar } from 'components';

import styles from './styles';
import messages from './messages.intl.json';

export default function Register({username}) {
    return (
        <div>
            <Userbar />
            <Message {...messages.you_registered_as} values={{username}} />
        </div>
    );
}

Register.propTypes = {
    username: PropTypes.string
};
