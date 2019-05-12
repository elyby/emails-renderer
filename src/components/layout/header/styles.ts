import background from './background.jpg';
import { CSSProperties } from 'react';

const styles: { [key: string]: CSSProperties } = {
    headerImage: {
        height: '200px',
        backgroundImage: `url(${background})`,
    },
    headerTextContainer: {
        color: '#fff',
        textAlign: 'center',
        verticalAlign: 'middle',
    },
    welcomeUsername: {
        fontSize: '20px',
    },
};

export default styles;
