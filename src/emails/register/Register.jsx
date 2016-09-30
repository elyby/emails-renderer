import { PropTypes } from 'react';

import { FormattedMessage as Message } from 'react-intl';

import { Userbar } from 'components/userbar';
import { Table } from 'components/table';
import { Header } from 'components/header';
import { Footer } from 'components/footer';
import { Button } from 'components/button';
import { Input } from 'components/input';
import { BitmapText } from 'components/text';

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
                <BitmapText message={messages.welcome_image} style={{
                    verticalAlign: 'middle'
                }} />
            } />

            <div style={styles.content}>
                <Table>
                    <tr>
                        <td>
                            <div style={styles.paragraph}>
                                <Message {...messages.we_glad_to_see_you} />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td style={{
                            ...styles.contentCenterCell,
                            ...styles.confirmEmailCell
                        }}>
                            <a href={link}>
                                <Button style={styles.confirmEmailButton}>
                                    <BitmapText message={messages.confirm_email_image} style={{
                                        verticalAlign: 'middle'
                                    }} />
                                </Button>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td style={{
                            ...styles.contentCenterCell,
                            ...styles.orCell,
                        }}>
                            <Message {...messages.or} />
                        </td>
                    </tr>
                    <tr>
                        <td style={{
                            ...styles.contentCenterCell,
                            ...styles.codeLabelCell
                        }}>
                            <Message {...messages.pass_code_in_field} />
                        </td>
                    </tr>
                    <tr>
                        <td style={{
                            ...styles.contentCenterCell,
                            ...styles.codeCell
                        }}>
                            <Input>{code}</Input>
                        </td>
                    </tr>
                    <tr>
                        <td style={{
                            ...styles.contentCenterCell,
                            ...styles.whatsNextText
                        }}>
                            <BitmapText message={messages.whats_next_image} style={{
                                verticalAlign: 'middle'
                            }} />
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
                                        <BitmapText message={messages.choose_you_skin_image} style={{
                                            verticalAlign: 'middle'
                                        }} />
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
                                        <BitmapText message={messages.install_our_patch_image} style={{
                                            verticalAlign: 'middle'
                                        }} />
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
                                        <BitmapText message={messages.use_tlauncher_image} style={{
                                            verticalAlign: 'middle'
                                        }} />
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
            </div>

            <Footer />
        </div>
    );
}

Register.propTypes = {
    username: PropTypes.string,
    link: PropTypes.string,
    code: PropTypes.string
};
