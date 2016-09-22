import { PropTypes } from 'react';

import { FormattedMessage as Message } from 'react-intl';

export default function BitmapText(props) {
    const src = require(`emails/register/images/ru/welcome.png`);
    // TODO: we can improve this loader in future by adding an option to disable file emitting
    // because this thing is handled by url-loader
    const size = require(`image-size!emails/register/images/ru/welcome.png`);

    const width = props.retina ? size.width / 2 : size.width;
    const height = props.retina ? size.height / 2 : size.height;

    return (
        <Message {...props.message}>{(message) =>
            <img src={src} alt={message} style={{
                width: `${width}px`,
                height: `${height}px`,
                verticalAlign: 'middle'
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
    retina: PropTypes.bool
};

BitmapText.defaultProps = {
    retina: true
};
