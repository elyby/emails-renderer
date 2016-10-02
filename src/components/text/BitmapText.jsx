import { PropTypes } from 'react';

import { FormattedMessage as Message } from 'react-intl';

export function BitmapText(props) {
    const parts = props.message.id.split('.');

    if (parts[0] !== 'emails' && parts[0] !== 'components') {
        throw new Error('Only src/emails and src/components subdirectories supported for now');
    }

    const fileName = parts.pop();
    const componentPath = parts.slice(1).join('/');

    let src;
    let size;
    try {
        try {
            src = require(`emails/${componentPath}/images/${props.intl.locale}/${fileName}.png`);
            // TODO: we can improve this loader in future by adding an option to disable file emitting
            // because this thing is handled by url-loader
            size = require(`image-size!emails/${componentPath}/images/${props.intl.locale}/${fileName}.png`);
        } catch (err) { // fallback to default locale
            src = require(`emails/${componentPath}/images/${props.intl.defaultLocale}/${fileName}.png`);
            size = require(`image-size!emails/${componentPath}/images/${props.intl.defaultLocale}/${fileName}.png`);
        }
    } catch (err) { // try components
        try {
            src = require(`components/${componentPath}/images/${props.intl.locale}/${fileName}.png`);
            size = require(`image-size!components/${componentPath}/images/${props.intl.locale}/${fileName}.png`);
        } catch (err) { // fallback to default locale
            src = require(`components/${componentPath}/images/${props.intl.defaultLocale}/${fileName}.png`);
            size = require(`image-size!components/${componentPath}/images/${props.intl.defaultLocale}/${fileName}.png`);
        }
    }

    const width = props.retina ? size.width / 2 : size.width;
    const height = props.retina ? size.height / 2 : size.height;

    return (
        <Message {...props.message}>{(message) =>
            <img src={src} alt={message} style={{
                width: `${width}px`,
                height: `${height}px`,
                ...props.style
            }}/>
        }</Message>
    );
}

BitmapText.propTypes = {
    message: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
            id: PropTypes.string
        })
    ]).isRequired,
    style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    retina: PropTypes.bool
};

BitmapText.defaultProps = {
    retina: true,
    style: {}
};

import { injectIntl, intlShape } from 'react-intl';

BitmapText.propTypes.intl = intlShape;

export default injectIntl(BitmapText);
