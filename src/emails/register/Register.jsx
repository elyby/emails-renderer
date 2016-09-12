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
                        <div style={styles.welcomeUsername}>Привет, {username}</div>
                        <img src={welcomeImage} alt="Добро пожаловать на Ely.by" style={{
                            width: '374px',
                            verticalAlign: 'middle'
                        }} />
                    </td>
                </tr>
            </Table>

            <div style={styles.content}>
                <Table>
                    <tr>
                        <td>
                            <div style={styles.paragraph}>Мы рады видеть тебя в рядах пользователей проекта Ely.by. Ты уже почти у цели, осталось лишь подтвердить свой E‑mail адрес. Чтобы сделать это, пожалуйста, нажми на кнопку, которая расположена ниже.</div>
                        </td>
                    </tr>
                    <tr>
                        <td style={{
                            ...styles.contentCenterCell,
                            ...styles.confirmEmailCell
                        }}>
                            <a href={link}>
                                <Button style={styles.confirmEmailButton}>
                                    <img src={confirmEmailImage} alt="Подтвердить E-mail" style={{
                                        width: '147px',
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
                            или
                        </td>
                    </tr>
                    <tr>
                        <td style={{
                            ...styles.contentCenterCell,
                            ...styles.codeLabelCell
                        }}>
                            Укажи этот код в поле ввода на сайте:
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
                            <img src={whatsNextImage} alt="Что дальше?" style={{
                                width: '168px',
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
                                        <img src={chooseYouSkin} style={{
                                            width: '179px',
                                            verticalAlign: 'middle'
                                        }} />
                                        <div style={{
                                            ...styles.paragraph,
                                            ...styles.todoItemText
                                        }}>В каталоге скинов Ely.by ты сможешь найти множество разнообразных скинов, каждый из которых готов к тому, чтобы быть надетым.</div>
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
                                        <img src={installOurPatch} style={{
                                            width: '252px',
                                            verticalAlign: 'middle'
                                        }} />
                                        <div style={{
                                            ...styles.paragraph,
                                            ...styles.todoItemText
                                        }}>Для того, чтобы система скинов Ely.by работала, тебе нужно установить наш патч. Найти его можно в разделе загрузок на сайте.</div>
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
                                        <img src={useTLauncher} style={{
                                            width: '209px',
                                            verticalAlign: 'middle'
                                        }} />
                                        <div style={{
                                            ...styles.paragraph,
                                            ...styles.todoItemText
                                        }}>Всё гораздо проще, когда ты используешь правильный инструмент для своей задачи. TLauncher является лучшим альтернативным лаунчером для Minecraft, который также имеет встроенную поддержку Ely.by.</div>
                                    </td>
                                </tr>
                            </Table>
                        </td>
                    </tr>
                </Table>
            </div>

            <Table style={styles.footer}>
                <tr>
                    <td style={styles.footerText}>Ты получил это письмо, т.к. этот E-mail был указан при регистрации на сервисе Аккаунты Ely.by. Если это был не ты, то просто удали это письмо.</td>
                    <td style={styles.footerLogo}>
                        <a href="http://ely.by">
                            <img src={footerLogoImage} style={{
                                width: '177px',
                                verticalAlign: 'middle'
                            }} />
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
