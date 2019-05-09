const path = require('path');

module.exports = function(input) {
    this.cacheable && this.cacheable();

    const moduleId = this.context
        .replace(path.join(this.rootContext, 'src'), '')
        .replace(/^\/|\/$/g, '')
        .replace(/\//g, '.');

    const json = JSON.parse(input);
    const result = JSON.stringify(Object.keys(json).reduce((translations, key) => {
        const value = json[key];
        const id = `${moduleId}.${key}`;
        if (typeof value === 'object') {
            translations[key] = {
                ...value,
                id,
            };
        } else {
            translations[key] = {
                id,
                defaultMessage: value,
            };
        }

        return translations;
    }, {}));

    return `
        import { defineMessages } from 'react-intl';
        export default defineMessages(${result});
    `;
};
