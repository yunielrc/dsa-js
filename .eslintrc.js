module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
    'jest/globals': true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:security/recommended',
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    babelOptions: {
      configFile: './.babel-eslintrc.json',
    },
    ecmaVersion: 12,
  },
  rules: {
    'no-plusplus': 'off',
  },
  plugins: [
    'jest',
    'security',
    '@babel',
  ],
};
