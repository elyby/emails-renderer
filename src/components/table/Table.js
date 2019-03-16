import React from 'react';

import styles from './styles';

export default function Table(props) {
    return (
        <table cellPadding="0" cellSpacing="0" style={{
            ...styles.table,
            ...props.style
        }}>
            <tbody>
                {props.children}
            </tbody>
        </table>
    );
}
