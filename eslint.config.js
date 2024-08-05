const js = require('@eslint/js');
const sonarjs = require('eslint-plugin-sonarjs');
const globals = require('globals');
const ts = require('@typescript-eslint/eslint-plugin');
const tsParser = require('@typescript-eslint/parser');
const eslintReact = require('eslint-plugin-react');
const eslintReactHooks = require('eslint-plugin-react-hooks');
const eslintReactRefresh = require('eslint-plugin-react-refresh');
const eslintPluginUnicorn = require('eslint-plugin-unicorn');

/** @type {import('eslint').Linter.FlatConfig[]} */
module.exports = [
    {
        plugins: {
            '@typescript-eslint': ts,
            'react': eslintReact,
            'react-hooks': eslintReactHooks,
            'react-refresh': eslintReactRefresh,
            'sonarjs': sonarjs,
            'unicorn': eslintPluginUnicorn,
        },
        ignores: ['bundle', 'node_modules', 'eslint.config.js'],
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.es2024,
            },
            parser: tsParser,
            parserOptions: {
                project: ['tsconfig.json'],
            },
        },
        files: ['**/*.{ts,tsx}'],
        rules: {
            ...eslintReact.configs.recommended.rules,
            ...eslintReactHooks.configs.recommended.rules,
            ...ts.configs.recommended.rules,
            'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
            'react/jsx-curly-brace-presence': ['warn', { props: 'never', children: 'never' }],
            'react/function-component-definition': ['warn', { namedComponents: 'arrow-function' }],
            'react/self-closing-comp': ['error', { component: true, html: true }],
            'react/boolean-prop-naming': 'error',
            'react/destructuring-assignment': 'error',
            'react/jsx-handler-names': 'error',
            'react/jsx-pascal-case': 'error',
            'react-hooks/exhaustive-deps':'off',
            'unicorn/prefer-query-selector': 'error',
            'prefer-const': 'error',
            'max-lines': ['warn', { max: 100, "skipBlankLines": true, "skipComments": true }],
            'eqeqeq': 'error',
            'no-console': 'warn',
            'camelcase': 'error',
            'comma-dangle': 'error',
            'semi': 'error',
            'no-multiple-empty-lines': 'error',
            'prefer-arrow-callback': 'error',
            'quotes': ['error', "double"],
            'jsx-quotes': ['error', 'prefer-double'],
            'array-callback-return': 'error',
            'no-unmodified-loop-condition': 'error',
            'id-length': ["error", { "max": 20 }],
            'new-cap': 'error',
            "no-unused-vars": "off",
            '@typescript-eslint/no-unused-vars': ['warn'],
        },
    },
];
