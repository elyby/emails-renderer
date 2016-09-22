import { PropTypes } from 'react';

import { FormattedMessage as Message } from 'react-intl';

import { Userbar } from 'components/userbar';
import { Table } from 'components/table';
import { Button } from 'components/button';
import { Input } from 'components/input';
import { BitmapText } from 'components/text';

import styles from './styles';
import messages from './messages.intl.json';

import violetManImage from './images/violetMan.png';
import orangeManImage from './images/orangeMan.png';
import darkBlueManImage from './images/darkBlueMan.png';

import confirmEmailImage from './images/ru/confirmEmail.png';
import whatsNextImage from './images/ru/whatsNext.png';
import chooseYouSkin from './images/ru/chooseYouSkin.png';
import installOurPatch from './images/ru/installOurPatch.png';
import useTLauncher from './images/ru/useTlauncher.png';
import footerLogoImage from './images/ru/footerLogo.png';

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

                        <BitmapText message={messages.welcome_image} />
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
                                            // width: '104px',
                                            // width: '144px',
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
                                    // width: '202px',
                                    // width: '154px',
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
                                                // width: '159px',
                                                // width: '176px',
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
                                                // width: '264px',
                                                // width: '271px',
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
                                                // width: '138px',
                                                // width: '260px',
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
                        <Message {...messages.footer} values={{
                            serviceLink:
                                <a href="https://account.ely.by" style={styles.footerLink}>
                                    <Message {...messages.service_name} />
                                </a>
                        }} />
                    </td>
                    <td style={styles.footerLogo}>
                        <a href="http://ely.by">
                            {/* TODO: текст и картинка */}
                            <Message {...messages.footer_logo_alt}>{(message) =>
                                <img src={footerLogoImage} alt={message} style={{
                                    width: '177px',
                                    // width: '139px',
                                    // width: '175px',
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
