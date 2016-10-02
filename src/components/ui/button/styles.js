import { colors } from 'components/ui/colors';

/**
 * @param {Color} color
 * @return {{backgroundColor: *}}
 */
function generateColor(color) {
    return {
        backgroundColor: color.color
    };
}

const styles = {
    button: {
        padding: '0 13px',
        lineHeight: '50px',
        display: 'inline-block'
    }
};

Object.values(colors).forEach((color) => {
    styles[color] = generateColor(color);
});

export default styles;
