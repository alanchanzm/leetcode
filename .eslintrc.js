module.exports = {
  extends: 'airbnb-base',
  globals: {
    test: true,
    expect: true,
  },
  rules: {
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
  },
};
