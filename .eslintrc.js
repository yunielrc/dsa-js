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
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
  },
  plugins: [
    'jest',
    'security',
  ],
};
