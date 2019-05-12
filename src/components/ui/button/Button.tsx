import React, { CSSProperties, FunctionComponent, ReactElement } from 'react';

import { Colors, green } from 'components/ui/colors';

import styles from './styles';

interface Props {
    label: ReactElement;
    style?: CSSProperties;
    color?: Colors;
}

const Button: FunctionComponent<Props> = ({ label, style, color = 'green' }) => {

    return (
        <div style={{
            ...styles.button,
            ...styles[color],
            ...style,
        }}>
            {label}
        </div>
    );
};

export default Button;
