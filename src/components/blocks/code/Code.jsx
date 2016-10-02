import { PropTypes } from 'react';

import { FormattedMessage as Message } from 'react-intl';

import { colors, green } from 'components/ui/colors';
import { Button, Input } from 'components/ui';

import styles from './styles';

import messages from './messages.intl.json';

export default function Code({code, link, label, color = green}) {
    return (
        <div style={styles.codeWrapper}>
            <div>
                <a href={link}>
                    <Button style={styles.confirmEmailButton} color={color} label={label} />
                </a>
            </div>
            <div style={styles.or}>
                <Message {...messages.or} />
            </div>
            <div style={styles.codeLabel}>
                <Message {...messages.pass_code_in_field} />
            </div>
            <div style={styles.code}>
                <Input value={code} color={color} />
            </div>
        </div>
    );
}

Code.propTypes = {
    code: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    label: PropTypes.node.isRequired,
    color: PropTypes.oneOf(Object.values(colors))
};
