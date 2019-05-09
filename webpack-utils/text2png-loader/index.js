/* eslint-env node */

const { getOptions } = require('loader-utils');
const text2png = require('text2png');

module.exports = function() {
    this.cacheable && this.cacheable();

    const { text, ...options } = getOptions(this);
    if (!text) {
        this.emitError('The text param is required');
        return '';
    }

    return text2png(text, options);
};
