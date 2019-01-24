module.exports = {
  extends: 'airbnb-base',
  globals: {
    test: true,
    expect: true,
  },
  rules: {
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    'arrow-parens': ['error', 'as-needed'],
    'comma-dangle': 'off',
    'no-use-before-define': ['error', { functions: false }],
    'no-param-reassign': 'off',
  },
};
