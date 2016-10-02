import { PropTypes } from 'react';

import { FormattedMessage as Message } from 'react-intl';

import { Userbar, Header, Content, Footer } from 'components/layout';
import { Table } from 'components/table';
import { blue } from 'components/ui/colors';
import { BitmapText } from 'components/text';
import { Code } from 'components/blocks';

import styles from './styles';
import messages from './messages.intl.json';

import violetManImage from './images/violetMan.png';
import orangeManImage from './images/orangeMan.png';
import darkBlueManImage from './images/darkBlueMan.png';

export default function Register({username, link, code}) {
    return (
        <div>
            <Userbar />

            <Header username={username} title={
                <BitmapText message={messages.welcome_image} />
            } />

            <Content>
                <Table>
                    <tr>
                        <td>
                            <div style={styles.paragraph}>
                                <Message {...messages.we_glad_to_see_you} />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Code code={code} link={link} color={blue} label={
                                <BitmapText message={messages.confirm_email_image} />
                            } />
                        </td>
                    </tr>
                    <tr>
                        <td style={{
                            ...styles.contentCenterCell,
                            ...styles.whatsNextText
                        }}>
                            <BitmapText message={messages.whats_next_image} />
                        </td>
                    </tr>
                    <tr>
                        <td style={styles.todoItem}>
                            <Table>
                                <tr>
                                    <td style={styles.todoItemIcon}>
                                        <img src={violetManImage} style={{
                                            width: '25px',
                                            verticalAlign: 'middle'
                                        }} />
                                    </td>
                                    <td style={styles.todoItemContent}>
                                        <BitmapText message={messages.choose_you_skin_image} />
                                        <div style={{
                                            ...styles.paragraph,
                                            ...styles.todoItemText
                                        }}>
                                            <Message {...messages.choose_you_skin_text} />
                                        </div>
                                    </td>
                                </tr>
                            </Table>
                        </td>
                    </tr>
                    <tr>
                        <td style={styles.todoItem}>
                            <Table>
                                <tr>
                                    <td style={styles.todoItemIcon}>
                                        <img src={orangeManImage} style={{
                                            width: '25px',
                                            verticalAlign: 'middle'
                                        }} />
                                    </td>
                                    <td style={styles.todoItemContent}>
                                        <BitmapText message={messages.install_our_patch_image} />
                                        <div style={{
                                            ...styles.paragraph,
                                            ...styles.todoItemText
                                        }}>
                                            <Message {...messages.install_our_patch_text} />
                                        </div>
                                    </td>
                                </tr>
                            </Table>
                        </td>
                    </tr>
                    <tr>
                        <td style={styles.todoItem}>
                            <Table>
                                <tr>
                                    <td style={styles.todoItemIcon}>
                                        <img src={darkBlueManImage} style={{
                                            width: '25px',
                                            verticalAlign: 'middle'
                                        }} />
                                    </td>
                                    <td style={styles.todoItemContent}>
                                        <BitmapText message={messages.use_tlauncher_image} />
                                        <div style={{
                                            ...styles.paragraph,
                                            ...styles.todoItemText
                                        }}>
                                            <Message {...messages.use_tlauncher_text} />
                                        </div>
                                    </td>
                                </tr>
                            </Table>
                        </td>
                    </tr>
                </Table>
            </Content>

            <Footer />
        </div>
    );
}

Register.propTypes = {
    username: PropTypes.string,
    link: PropTypes.string,
    code: PropTypes.string
};
