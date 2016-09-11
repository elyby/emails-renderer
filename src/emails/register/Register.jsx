import { PropTypes } from 'react';

import { FormattedMessage as Message } from 'react-intl';

import { Html, Userbar } from './../../components';

import styles from './styles';
import messages from './messages.intl.json';

export default function Register({username}) {
    return (
        <Html>
            <Userbar />
            <Message {...messages.you_registered_as} values={{username}} />
        </Html>
    );
}

Register.propTypes = {
    username: PropTypes.string
};
