import React, { FunctionComponent } from 'react';

import styles from './styles';

const Content: FunctionComponent = ({ children }) => {
    return (
        <div style={styles.content}>
            {children}
        </div>
    );
};

export default Content;
