import React, { ComponentType } from 'react';

import styles from './styles';

import { Table } from 'components/table';

const BaseLayout: ComponentType = ({ children }) => (
    <Table style={styles.body}>
        <tr>
            <td>
                &nbsp;
            </td>
            <td style={styles.container}>
                {children}
            </td>
            <td>
                &nbsp;
            </td>
        </tr>
    </Table>
);

export default BaseLayout;
