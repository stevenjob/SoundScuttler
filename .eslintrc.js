module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb'
  ],
  env: {
    browser: true
  },
  settings: {
    'import/resolver': 'webpack'
  },
  rules: {
    semi: ['error', 'always'],
    'max-len': ['error', 150, 2],
    'comma-dangle': ["error", "never"]
  }
}
