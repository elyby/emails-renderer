import React, { CSSProperties, ComponentType } from 'react';

import styles from './styles';

interface Props {
    style?: CSSProperties;
}

const Table: ComponentType<Props> = ({ children, style }) => (
    <table cellPadding="0" cellSpacing="0" style={{
        ...styles.table,
        ...style,
    }}>
        <tbody>
            {children}
        </tbody>
    </table>
);

export default Table;
