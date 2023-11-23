// module.exports = {
//     "env": {
//         "browser": true,
//         "es2021": true
//     },
//     "extends": [
//         "standard-with-typescript",
//         "plugin:react/recommended"
//     ],
//     "overrides": [
//         {
//             "env": {
//                 "node": true
//             },
//             "files": [
//                 ".eslintrc.{js,cjs}"
//             ],
//             "parserOptions": {
//                 "sourceType": "script"
//             }
//         }
//     ],
//     "parserOptions": {
//         "ecmaVersion": "latest",
//         "sourceType": "module"
//     },
//     "plugins": [
//         "react"
//     ],
//     "rules": {
//     }
// }
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react-hooks/recommended', 'airbnb'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-unused-vars': 'off', // 在ts文件里只使用 @typescript-eslint/no-unused-vars
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react-hooks'],
  rules: {
    indent: ['error', 2, { ignoredNodes: ['TemplateLiteral *'], SwitchCase: 1 }],
    'react/jsx-wrap-multilines': ['error', { declaration: false, assignment: false }],
    'operator-linebreak': ['error', 'after', { overrides: { '?': 'before', ':': 'before' } }],
    'react-hooks/exhaustive-deps': 'off',
    'jsx-a11y/control-has-associated-label': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'no-unused-expressions': 'off',
    'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
    'no-empty': ['error', { allowEmptyCatch: true }],
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'implicit-arrow-linebreak': 'off',
    'operator-linebreak': [
      'error',
      'after',
      {
        overrides: {
          '?': 'before',
          ':': 'before',
        },
      },
    ],
    'no-param-reassign': ['error', { props: false }],
    'class-methods-use-this': 'off',
    'object-curly-newline': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx'] }],
    'react/jsx-key': 'error',
    'jsx-a11y/click-events-have-key-events': 'off',
    '@typescript-eslint/triple-slash-reference': [
      'error',
      { path: 'always', types: 'always', lib: 'always' },
    ],
    'import/prefer-default-export': ['off', { target: 'any' }],
    'no-alert': 'error',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'no-unused-vars': 'warn',
    '@typescript-eslint/no-unused-vars': ['warn'],
    'react/function-component-definition': 'off',
    'linebreak-style': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'warn',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: 'block-like', next: '*' },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'import/no-extraneous-dependencies': [
      0,
      {
        devDependencies: true,
        peerDependencies: true,
      },
    ],
    // "no-underscore-dangle": ["error", { "enforceInMethodNames": true }]
  },
  globals: {
    normalIDType: true,
    CallbackFunctionVariadic: true,
    BusinessBandType: true,
  },
};
