module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2018,
        ecmaFeatures: {
            jsx: true,
        },
        project: './tsconfig.json',
    },

    settings: {
        react: {
            version: 'detect',
        },
    },

    env: {
        "browser": true,
        "commonjs": true,
        "es6": true
    },

    plugins: [
        '@typescript-eslint',
    ],

    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
    ],

    globals: {
        __webpack_public_path__: true,
    },

    // @see: http://eslint.org/docs/rules/
    rules: {
        // possible errors (including eslint:recommended)
        "valid-jsdoc": ["warn", {
            "requireParamDescription": false,
            "requireReturn": false,
            "requireReturnDescription": false,
            "prefer": {
                "returns": "return"
            },
            "preferType": {
                "String": "string",
                "Object": "object",
                "Number": "number",
                "Function": "function"
            }
        }],

        // best practice
        "block-scoped-var": "error",
        "curly": "error",
        "default-case": "error",
        "dot-location": ["error", "property"],
        "dot-notation": "error",
        "eqeqeq": ["error", "smart"],
        "no-alert": "error",
        "no-caller": "error",
        "no-case-declarations": "error",
        "no-div-regex": "error",
        "no-else-return": "error",
        "no-empty-pattern": "error",
        "no-eq-null": "error",
        "no-eval": "error",
        "no-extend-native": "error",
        "no-extra-bind": "warn",
        "no-fallthrough": "error",
        "no-floating-decimal": "warn",
        "no-implied-eval": "error",
        "no-invalid-this": "off",
        "no-labels": "error",
        "no-lone-blocks": "warn",
        "no-loop-func": "error",
        "no-multi-spaces": "error",
        "no-multi-str": "error",
        "no-native-reassign": "error",
        "no-new-wrappers": "warn",
        "no-new": "warn",
        "no-octal-escape": "warn",
        "no-octal": "error",
        "no-proto": "error",
        "no-redeclare": "warn",
        "no-script-url": "error",
        "no-self-compare": "error",
        "no-sequences": "error",
        "no-throw-literal": "error",
        "no-unused-expressions": ["warn", {"allowShortCircuit": true, "allowTernary": true}],
        "no-useless-call": "warn",
        "no-useless-concat": "warn",
        "no-void": "error",
        "no-with": "error",
        "radix": "error",
        "wrap-iife": "error",
        "yoda": "warn",
        "no-constant-condition": "error",

        // strict mode
        "strict": ["warn", "never"], // babel все сделает за нас

        // variables
        "no-catch-shadow": "off",
        "no-delete-var": "error",
        "no-label-var": "error",
        "no-shadow-restricted-names": "error",
        "no-shadow": "off",
        "no-undef-init": "error",
        "no-undef": "error",
        "no-use-before-define": ["warn", "nofunc"],

        // CommonJS
        "no-mixed-requires": "warn",
        "no-path-concat": "warn",

        // stylistic
        "array-bracket-spacing": "off", // disable because we want spaces on destructured arrays
        "block-spacing": ["error", "never"],
        "brace-style": ["error", "1tbs", {"allowSingleLine": true}],
        "comma-spacing": "error",
        "comma-style": "error",
        "comma-dangle": ["warn", "only-multiline"],
        "computed-property-spacing": "error",
        "consistent-this": ["error", "that"],
        "camelcase": "warn",
        "eol-last": "warn",
        "id-length": ["error", {"min": 2, "exceptions": ["x", "y", "i", "$"]}],
        "indent": ["error", 4, {"SwitchCase": 1}],
        "jsx-quotes": "error",
        "key-spacing": ["error", {"mode": "minimum"}],
        "linebreak-style": "error",
        "max-depth": "error",
        "new-cap": "error",
        "new-parens": "error",
        "no-array-constructor": "warn",
        "no-bitwise": "warn",
        "no-lonely-if": "error",
        "no-negated-condition": "warn",
        "no-nested-ternary": "error",
        "no-new-object": "error",
        "no-spaced-func": "error",
        "no-trailing-spaces": "warn",
        "no-unneeded-ternary": "warn",
        "one-var": ["error", "never"],
        "operator-assignment": ["warn", "always"],
        "operator-linebreak": ["error", "before"],
        "padded-blocks": ["warn", "never"],
        "quote-props": ["warn", "as-needed"],
        "quotes": ["warn", "single"],
        "semi": "error",
        "semi-spacing": "error",
        "keyword-spacing": "warn",
        "space-before-blocks": "error",
        "space-before-function-paren": ["error", "never"],
        "space-in-parens": "warn",
        "space-infix-ops": "error",
        "space-unary-ops": "error",
        "spaced-comment": "warn",

        // es6
        "arrow-body-style": "warn",
        "arrow-parens": "error",
        "arrow-spacing": "error",
        "constructor-super": "error",
        "generator-star-spacing": "warn",
        "no-class-assign": "error",
        "no-const-assign": "error",
        "no-dupe-class-members": "error",
        "no-this-before-super": "error",
        "no-var": "warn",
        "object-shorthand": "warn",
        "prefer-arrow-callback": "warn",
        "prefer-const": "warn",
        "prefer-reflect": "warn",
        "prefer-spread": "warn",
        "prefer-template": "warn",
        "require-yield": "error",

        // react
        "react/display-name": "warn",
        "react/forbid-prop-types": "warn",
        "react/jsx-boolean-value": "warn",
        'react/jsx-closing-bracket-location': ['warn', {
            selfClosing: 'after-props',
            // We want to keep bracket in the next case:
            // <Component simpleProp="123" objectProp={{
            //     param: 'value',
            // }}>
            //
            // But put it on the next line if props are chopped down:
            // <Component
            //     simpleProp="123"
            //     objectProp={{
            //         param: 'value',
            //     ]}
            // >
            //
            // So until we'll find the solution, let's disable this rule.
            nonEmpty: false,
        }],
        "react/jsx-curly-spacing": "warn",
        "react/jsx-handler-names": ["warn", {"eventHandlerPrefix": "on", "eventHandlerPropPrefix": "on"}],
        "react/jsx-indent-props": "warn",
        "react/jsx-key": "warn",
        'react/jsx-max-props-per-line': 'off',
        "react/jsx-no-bind": ['error', {
            allowArrowFunctions: true,
        }],
        "react/jsx-no-duplicate-props": "warn",
        "react/jsx-no-literals": "off",
        "react/jsx-no-undef": "warn",
        "react/jsx-pascal-case": "warn",
        "react/jsx-uses-react": "warn",
        "react/jsx-uses-vars": "warn",
        "react/jsx-no-comment-textnodes": "warn",
        "react/jsx-wrap-multilines": "warn",
        "react/no-deprecated": "warn",
        "react/no-did-mount-set-state": "warn",
        "react/no-did-update-set-state": "warn",
        "react/no-direct-mutation-state": "warn",
        "react/require-render-return": "warn",
        "react/no-is-mounted": "warn",
        "react/no-multi-comp": "warn",
        "react/no-string-refs": "warn",
        "react/no-unknown-property": "warn",
        "react/prefer-es6-class": "warn",
        "react/prop-types": "off", // disable in favor of typescript
        "react/react-in-jsx-scope": "off",
        "react/self-closing-comp": "warn",
        "react/sort-comp": ["warn", {"order": ["lifecycle", "render", "everything-else"]}],

        // TypeScript
        '@typescript-eslint/array-type': ['error', 'generic'],
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
    },
};
