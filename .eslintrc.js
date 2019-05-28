module.exports = {
    extends: [
        'plugin:@elyby/base',
        'plugin:@elyby/react',
        'plugin:@elyby/typescript',
    ],

    env: {
        browser: true,
        commonjs: true,
        es6: true,
    },

    globals: {
        __webpack_public_path__: true,
    },
};
