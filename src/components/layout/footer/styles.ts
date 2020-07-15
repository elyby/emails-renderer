import { CSSProperties } from 'react';

import { green } from 'components/ui/colors';

const footerLogoBaseStyles: CSSProperties = {
    padding: '0 30px',
    textAlign: 'center',
};

const styles: Record<string, CSSProperties> = {
    footer: {
        borderTop: `10px solid ${green.base}`,
        background: '#DDD8CE',
        height: '135px',
    },
    footerText: {
        verticalAlign: 'middle',
        paddingLeft: '30px',
        fontSize: '13px',
        color: '#7A7A7A',
    },
    footerLink: {
        color: '#7A7A7A',
        textDecoration: 'none',
        borderBottom: '1px dashed #7A7A7A',
    },
    footerLogo: {
        ...footerLogoBaseStyles,
        verticalAlign: 'bottom',
    },
    footerLogoSubtitle: {
        ...footerLogoBaseStyles,
        verticalAlign: 'top',
    },
};

export default styles;
