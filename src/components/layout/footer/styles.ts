import { CSSProperties } from 'react';

import { green } from 'components/ui/colors';

const styles: Record<string, CSSProperties> = {
    footer: {
        borderTop: `10px solid ${green.base}`,
        background: '#DDD8CE',
        height: '135px',
    },
    paddingColumn: {
        width: '30px',
    },
    footerText: {
        verticalAlign: 'middle',
        fontSize: '13px',
        color: '#7A7A7A',
    },
    footerLink: {
        color: '#7A7A7A',
        textDecoration: 'none',
        borderBottom: '1px dashed #7A7A7A',
    },
    footerLogo: {
        textAlign: 'center',
    },
};

export default styles;
