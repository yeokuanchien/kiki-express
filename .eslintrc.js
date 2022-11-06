module.exports = {
  env: {
    es6: true,
    browser: true,
    commonjs: true,
    es2021: true,
    jest: true,
  },
  extends: ['prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'prettier/prettier': 'error',
  },
  plugins: ['prettier'],
};
