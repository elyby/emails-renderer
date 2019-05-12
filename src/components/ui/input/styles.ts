import { CSSProperties } from 'react';
import { Color, Colors, colors } from 'components/ui/colors';

const styles: { [key: string]: CSSProperties } = {
    input: {
        backgroundColor: '#fff',
        padding: '0 30px',
        lineHeight: '50px',
        fontSize: '18px',
        display: 'inline-block',
        border: '3px solid transparent',
        color: '#444',
    },
};

function generateColor({ base, dark }: Color): CSSProperties {
    return {
        borderColor: base,
        color: dark,
    };
}

Object.keys(colors).forEach((color) => {
    // TS has error when trying to recognize keys types, so we cast it manually
    styles[color] = generateColor(colors[color as any as Colors]);
});

export default styles;
