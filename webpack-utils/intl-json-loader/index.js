const path = require('path');

module.exports = function(input) {
    this.cacheable && this.cacheable();

    const moduleId = this.context
        .replace(path.join(this.rootContext, 'src'), '')
        .replace(/^\/|\/$/g, '')
        .replace(/\//g, '.');

    const json = JSON.parse(input);
    const result = JSON.stringify(Object.keys(json).reduce((translations, key) => {
        translations[key] = {
            id: `${moduleId}.${key}`,
            defaultMessage: json[key],
        };

        return translations;
    }, {}));

    return `
        import { defineMessages } from 'react-intl';
        export default defineMessages(${result})
    `;
};
