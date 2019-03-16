import React from 'react';

import styles from './styles';

import { Table } from 'components/table';

export default function BaseLayout(props) {
    return (
        <Table style={styles.body}>
            <tr>
                <td>
                    &nbsp;
                </td>
                <td style={styles.container}>
                    {props.children}
                </td>
                <td>
                    &nbsp;
                </td>
            </tr>
        </Table>
    );
}
