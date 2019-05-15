import { Color, Colors, colors } from 'components/ui/colors';
import { CSSProperties } from 'react';

function generateColor({ base }: Color): CSSProperties {
    return {
        backgroundColor: base,
    };
}

interface Styles {
    [key: string]: CSSProperties;
}

const styles: Styles = {
    button: {
        padding: '0 13px',
        lineHeight: '50px',
        display: 'inline-block',
    },
};

Object.keys(colors).forEach((colorName) => {
    // TS has error when trying to recognize keys types, so we cast it manually
    styles[colorName] = generateColor(colors[colorName as any as Colors]);
});

export default styles;
