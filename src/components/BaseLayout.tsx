import React, { FunctionComponent } from 'react';

import styles from './styles';

import { Table } from 'components/table';

const BaseLayout: FunctionComponent = ({ children }) => (
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
