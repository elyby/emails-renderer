import { PropTypes } from 'react';

import { FormattedMessage as Message } from 'react-intl';

import { Userbar } from 'components/userbar';
import { Table } from 'components/table';
import { Button } from 'components/button';
import { Input } from 'components/input';

import styles from './styles';
import messages from './messages.intl.json';

import welcomeImage from './images/welcome.png';
import confirmEmailImage from './images/confirmEmail.png';
import whatsNextImage from './images/whatsNext.png';
import violetManImage from './images/violetMan.png';
import chooseYouSkin from './images/chooseYouSkin.png';
import orangeManImage from './images/orangeMan.png';
import installOurPatch from './images/installOurPatch.png';
import darkBlueManImage from './images/darkBlueMan.png';
import useTLauncher from './images/useTlauncher.png';
import footerLogoImage from './images/footerLogo.png';

export default function Register({username, link, code}) {
    return (
        <div>
            <Userbar />
            <Table style={styles.headerImage}>
                <tr>
                    <td style={styles.headerTextContainer}>
                        <div style={styles.welcomeUsername}>
                            <Message {...messages.hello_username} values={{username}} />
                        </div>
                        {/* TODO: картинка и её alt */}
                        <Message {...messages.welcome_image}>{(message) =>
                            <img src={welcomeImage} alt={message} style={{
                                width: '374px',
                                verticalAlign: 'middle'
                            }}/>
                        }</Message>
                    </td>
                </tr>
            </Table>

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
                                    {/* TODO: текст и картинка */}
                                    <Message {...messages.confirm_email_image}>{(message) =>
                                        <img src={confirmEmailImage} alt={message} style={{
                                            width: '147px',
                                            verticalAlign: 'middle'
                                        }} />
                                    }</Message>
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
                            {/* TODO: текст и картинка */}
                            <Message {...messages.whats_next_image}>{(message) =>
                                <img src={whatsNextImage} alt={message} style={{
                                    width: '168px',
                                    verticalAlign: 'middle'
                                }} />
                            }</Message>
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
                                        {/* TODO: текст и картинка */}
                                        <Message {...messages.choose_you_skin_image}>{(message) =>
                                            <img src={chooseYouSkin} alt={message} style={{
                                                width: '179px',
                                                verticalAlign: 'middle'
                                            }} />
                                        }</Message>
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
                                        {/* TODO: текст и картинка */}
                                        <Message {...messages.install_our_patch_image}>{(message) =>
                                            <img src={installOurPatch} alt={message} style={{
                                                width: '252px',
                                                verticalAlign: 'middle'
                                            }} />
                                        }</Message>
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
                                        {/* TODO: текст и картинка */}
                                        <Message {...messages.use_tlauncher_image}>{(message) =>
                                            <img src={useTLauncher} alt={message} style={{
                                                width: '209px',
                                                verticalAlign: 'middle'
                                            }} />
                                        }</Message>
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

            <Table style={styles.footer}>
                <tr>
                    <td style={styles.footerText}>
                        <Message {...messages.footer} />
                    </td>
                    <td style={styles.footerLogo}>
                        <a href="http://ely.by">
                            {/* TODO: текст и картинка */}
                            <Message {...messages.footer_logo_alt}>{(message) =>
                                <img src={footerLogoImage} alt={message} style={{
                                    width: '177px',
                                    verticalAlign: 'middle'
                                }} />
                            }</Message>
                        </a>
                    </td>
                </tr>
            </Table>
        </div>
    );
}

Register.propTypes = {
    username: PropTypes.string,
    link: PropTypes.string,
    code: PropTypes.string
};
