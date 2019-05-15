import React, { FunctionComponent } from 'react';
import { FormattedMessage as Message, FormattedHTMLMessage as HTMLMessage } from 'react-intl';

import { Userbar, Header, Content, Footer } from 'components/layout';
import { Table } from 'components/table';
import { Code } from 'components/blocks';

import styles from './styles';
import messages from './messages.intl.json';

import violetManImage from './images/violetMan.png';
import orangeManImage from './images/orangeMan.png';
import darkBlueManImage from './images/darkBlueMan.png';

interface Props {
    username: string;
    link: string;
    code: string;
}

const Register: FunctionComponent<Props> = ({ username, link, code }) => (
    <div>
        <Userbar />

        <Header username={username} title={
            <HTMLMessage {...messages.welcome_image} />
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
                        <Code code={code} link={link} color="blue" label={
                            <HTMLMessage {...messages.confirm_email_image} />
                        } />
                    </td>
                </tr>
                <tr>
                    <td style={{
                        ...styles.contentCenterCell,
                        ...styles.whatsNextText,
                    }}>
                        <HTMLMessage {...messages.whats_next_image} />
                    </td>
                </tr>
                <tr>
                    <td style={styles.todoItem}>
                        <Table>
                            <tr>
                                <td style={styles.todoItemIcon}>
                                    <img src={violetManImage} style={styles.todoItemIconImage} />
                                </td>
                                <td style={styles.todoItemContent}>
                                    <HTMLMessage {...messages.choose_you_skin_image} />
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
                                    <img src={orangeManImage} style={styles.todoItemIconImage} />
                                </td>
                                <td style={styles.todoItemContent}>
                                    <HTMLMessage {...messages.install_our_patch_image} />
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
                                    <img src={darkBlueManImage} style={styles.todoItemIconImage} />
                                </td>
                                <td style={styles.todoItemContent}>
                                    <HTMLMessage {...messages.useTLLauncher} />
                                    <div style={{
                                        ...styles.paragraph,
                                        ...styles.todoItemText
                                    }}>
                                        <Message {...messages.useTLLauncherText} />
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

export default Register;
