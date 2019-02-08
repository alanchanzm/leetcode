module.exports = {
  extends: 'airbnb-base',
  globals: {
    test: true,
    expect: true,
  },
  rules: {
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    'arrow-parens': ['error', 'as-needed'],
    'comma-dangle': 0,
    'no-use-before-define': ['error', { functions: false }],
    'no-param-reassign': 0,
    'no-bitwise': 0,
    'no-continue': 0,
  },
};
