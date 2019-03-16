import React from 'react';

import { Table } from 'components/table';

import styles from './styles';
import logoImage from './logo.png';

export default function Userbar() {
    return (
        <Table style={styles.userbar}>
            <tr>
                <td style={styles.marginColumn} />
                <td style={styles.logoColumn}>
                    <a href="http://ely.by" style={styles.logo}>
                        {/* TODO: здесь нужно динамически сформировать название, т.к. может быть Ёly.by */}
                        <img src={logoImage} alt="Ely.by" style={{
                            width: '65px',
                            verticalAlign: 'middle'
                        }} />
                    </a>
                </td>
                <td>&nbsp;</td>
            </tr>
        </Table>
    );
}
