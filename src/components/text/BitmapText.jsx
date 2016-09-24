import { PropTypes } from 'react';

import { FormattedMessage as Message } from 'react-intl';

export function BitmapText(props) {
    const parts = props.message.id.split('.');

    if (parts[0] !== 'emails') {
        throw new Error('Only src/emails subdirectories supported for now');
    }

    if (parts.length !== 3) {
        throw new Error('The message.id must be contain 3 parts separated by dots');
    }

    let src;
    let size;
    try {
        src = require(`emails/${parts[1]}/images/${props.intl.locale}/${parts[2]}.png`);
        // TODO: we can improve this loader in future by adding an option to disable file emitting
        // because this thing is handled by url-loader
        size = require(`image-size!emails/${parts[1]}/images/${props.intl.locale}/${parts[2]}.png`);
    } catch (err) { // fallback to default locale
        src = require(`emails/${parts[1]}/images/${props.intl.defaultLocale}/${parts[2]}.png`);
        size = require(`image-size!emails/${parts[1]}/images/${props.intl.defaultLocale}/${parts[2]}.png`);
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
