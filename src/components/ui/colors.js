export class Color {

    constructor(name, base, light, dark) {
        this._name = name;
        this._base = base;
        this._light = light;
        this._dark = dark;
    }

    get name() {
        return this._name;
    }

    get color() {
        return this._base;
    }

    get light() {
        return this._light;
    }

    get dark() {
        return this._dark;
    }

    toString() {
        return this.name;
    }

}

export const green = new Color('green', '#207e5c', '#379070', '#1a6449');
export const blue = new Color('blue', '#5b9aa9', '#71a6b2', '#568297');
export const darkBlue = new Color('darkBlue', '#28555b', '#3e6164', '#233d49');
export const violet = new Color('violet', '#6b5b8c', '#816795', '#66437a');
export const lightViolet = new Color('lightViolet', '#8b5d79', '#a16982', '#864567');
export const orange = new Color('orange', '#dd8650', '#f39259', '#d86e3e');
export const red = new Color('red', '#e66c69', '#e15457', '#fc7872');

export const colors = {
    green,
    blue,
    darkBlue,
    violet,
    lightViolet,
    orange,
    red
};
