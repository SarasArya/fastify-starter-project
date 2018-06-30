module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: ['eslint:recommended', 'prettier'],
  plugins: ['import'],
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    indent: ['off', 'tab'],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'no-console': 'warn',
  },
};
