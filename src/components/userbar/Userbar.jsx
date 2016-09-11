import { Table } from 'components/table';

import styles from './styles';

import logoImage from './logo.png';

export default function Userbar() {
    return (
        <Table style={styles.userbar}>
            <tr>
                <td style={styles.marginColumn} />
                <td style={styles.logoColumn}>
                    <div style={styles.logo}>
                        {/* TODO: здесь нужно динамически сформировать название, т.к. может быть Ёly.by */}
                        <img src={logoImage} style={{
                            width: '65px',
                            verticalAlign: 'middle'
                        }} />
                    </div>
                </td>
                <td>&nbsp;</td>
            </tr>
        </Table>
    );
}
