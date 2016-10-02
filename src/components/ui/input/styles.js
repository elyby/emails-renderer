import { colors } from 'components/ui/colors';

/**
 * @param {Color} color
 * @return {{backgroundColor: *}}
 */
function generateColor(color) {
    return {
        borderColor: color.color,
        color: color.dark
    };
}

const styles = {
    input: {
        backgroundColor: '#fff',
        padding: '0 30px',
        lineHeight: '50px',
        fontSize: '18px',
        display: 'inline-block',
        border: '3px solid transparent',
        color: '#444'
    }
};

Object.values(colors).forEach((color) => {
    styles[color] = generateColor(color);
});

export default styles;
