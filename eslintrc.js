module.exports = {
    env: {
        node: true,
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:prettier/recommended',
        'eslint:recommended',
        'plugin:@angular-eslint/recommended',
    ],
    rules: {
        'prettier/prettier': ['error'],
    },
    parserOptions: {
        sourceType: 'module',
    },
    overrides: [
        {
            files: '*.ts',
            parser: '@typescript-eslint/parser',
            parserOptions: {
                project: 'tsconfig.json',
            },
            plugins: ['@typescript-eslint'],
            overrides: [
                {
                    files: ['./src/**/*.ts'],
                    extends: [
                        'eslint:recommended',
                        'plugin:@typescript-eslint/recommended',
                        'plugin:@typescript-eslint/eslint-recommended',
                        'plugin:prettier/recommended',
                    ],
                    rules: {
                        'no-plusplus': 'off',
                        'no-underscore-dangle': 'off',
                        'import/prefer-default-export': 'off',
                        'prettier/prettier': 'warn',
                    },
                },
            ],
        },
    ],
};
