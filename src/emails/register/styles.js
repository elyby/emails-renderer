import background from './images/headerBackground.jpg';

export default {
    headerImage: {
        height: '200px',
        backgroundImage: `url(${background})`
    },
    headerTextContainer: {
        color: '#fff',
        textAlign: 'center',
        verticalAlign: 'middle'
    },
    welcomeUsername: {
        fontSize: '20px'
    },

    content: {
        background: '#fff',
        padding: '50px',
        borderBottom: '10px solid #207E5C'
    },

    contentCenterCell: {
        textAlign: 'center'
    },

    paragraph: {
        fontSize: '16px',
        lineHeight: '125%'
    },

    confirmEmailCell: {
        paddingTop: '20px'
    },
    confirmEmailButton: {
        paddingLeft: '50px',
        paddingRight: '50px'
    },

    orCell: {
        fontSize: '12px',
        paddingTop: '5px'
    },

    codeLabelCell: {
        paddingTop: '1px'
    },
    codeCell: {
        paddingTop: '5px'
    },

    whatsNextText: {
        paddingTop: '30px'
    },

    todoItem: {
        paddingTop: '30px'
    },
    todoItemIcon: {
        width: '46px',
        verticalAlign: 'top'
    },
    todoItemContent: {
        verticalAlign: 'top'
    },
    todoItemText: {
        paddingTop: '3px'
    },

    footer: {
        background: '#DDD8CE',
        height: '135px'
    },
    footerText: {
        verticalAlign: 'middle',
        paddingLeft: '30px',
        fontSize: '13px',
        color: '#7A7A7A'
    },
    footerLink: {
        color: '#7A7A7A',
        textDecoration: 'none',
        borderBottom: '1px dashed #7A7A7A'
    },
    footerLogo: {
        verticalAlign: 'middle',
        padding: '0 30px'
    }
};
