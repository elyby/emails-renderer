import React, { FunctionComponent } from 'react';

import { Table } from 'components/table';

import styles from './styles';
import logoImage from './logo.png';

const Userbar: FunctionComponent = () => {
    return (
        <Table style={styles.userbar}>
            <tr>
                <td style={styles.marginColumn} />
                <td style={styles.logoColumn}>
                    <a href="http://ely.by" style={styles.logo}>
                        <img src={logoImage} alt="Ely.by" style={styles.logoImage} />
                    </a>
                </td>
                <td>&nbsp;</td>
            </tr>
        </Table>
    );
};

export default Userbar;
