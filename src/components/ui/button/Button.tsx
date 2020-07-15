import React, { CSSProperties, FunctionComponent, ReactElement } from 'react';

import { Colors } from 'components/ui/colors';

import styles from './styles';

interface Props {
    label: ReactElement;
    style?: CSSProperties;
    color?: Colors;
}

const Button: FunctionComponent<Props> = ({ label, style, color = 'green' }) => (
    <div style={{
        ...styles.button,
        ...styles[color],
        ...style,
    }}>
        {/* Some email clients don't apply a line-height rule until some text appears inside.
            Add a zero-width space to ensure that text is always present, even if a <img> is passed */}
        &#8203;
        {label}
    </div>
);

export default Button;
