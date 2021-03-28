import React, { ComponentType } from 'react';

import styles from './styles';

const Content: ComponentType = ({ children }) => (
    <div style={styles.content}>
        {children}
    </div>
);

export default Content;
