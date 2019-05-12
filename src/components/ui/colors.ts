export type Colors =
    | 'green'
    | 'blue'
    | 'darkBlue'
    | 'violet'
    | 'lightViolet'
    | 'orange'
    | 'red'
    ;

export interface Color {
    base: string;
    light: string;
    dark: string;
}

export const green: Color = {
    base: '#207e5c',
    light: '#379070',
    dark: '#1a6449',
};
export const blue: Color = {
    base: '#5b9aa9',
    light: '#71a6b2',
    dark: '#568297',
};
export const darkBlue: Color = {
    base: '#28555b',
    light: '#3e6164',
    dark: '#233d49',
};
export const violet: Color = {
    base: '#6b5b8c',
    light: '#816795',
    dark: '#66437a',
};
export const lightViolet: Color = {
    base: '#8b5d79',
    light: '#a16982',
    dark: '#864567',
};
export const orange: Color = {
    base: '#dd8650',
    light: '#f39259',
    dark: '#d86e3e',
};
export const red: Color = {
    base: '#e66c69',
    light: '#e15457',
    dark: '#fc7872',
};

type ColorsMap = { [key in Colors]: Color };

export const colors: ColorsMap = {
    green,
    blue,
    darkBlue,
    violet,
    lightViolet,
    orange,
    red,
};
