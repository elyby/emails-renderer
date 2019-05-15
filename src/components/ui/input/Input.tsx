import React, { CSSProperties, FunctionComponent } from 'react';

import { Colors } from 'components/ui/colors';

import styles from './styles';

interface Props {
    value: string;
    color?: Colors;
    style?: CSSProperties;
}

const Input: FunctionComponent<Props> = ({ value, style, color = 'green' }) => (
    <div style={{
        ...styles.input,
        ...styles[color],
        ...style,
    }}>
        {value}
    </div>
);

export default Input;
