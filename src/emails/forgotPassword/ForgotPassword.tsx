import React, { FunctionComponent } from 'react';
import { FormattedMessage as Message, FormattedHTMLMessage as HTMLMessage } from 'react-intl';

import { Userbar, Header, Content, Footer } from 'components/layout';
import { Table } from 'components/table';
import { Code } from 'components/blocks';

import styles from './styles';
import messages from './messages.intl.json';

interface Props {
    username: string;
    link: string;
    code: string;
}

const ForgotPassword: FunctionComponent<Props> = ({ username, link, code }) => (
    <div>
        <Userbar />

        <Header username={username} title={
            <HTMLMessage {...messages.forgot_the_password_image} />
        } />

        <Content>
            <Table>
                <tr>
                    <td>
                        <div style={styles.paragraph}>
                            <Message {...messages.shit_happens} />
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Code code={code} link={link} color="lightViolet" label={
                            <HTMLMessage {...messages.continue_image} />
                        } />
                    </td>
                </tr>
            </Table>
        </Content>

        <Footer />
    </div>
);

export default ForgotPassword;
