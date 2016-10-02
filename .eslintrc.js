module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true
  },
  'plugins': [
    'react'
  ],
  'extends': [
    'eslint-config-airbnb-base',
    'eslint:recommended',
    'plugin:react/all'
  ],
  settings: {
    'import/resolver': 'webpack',
    'import/extensions': '.js',
  },
  rules: {
    semi: ['error', 'always'],
    'max-len': ['error', 150, 2],
    'comma-dangle': ["error", "never"],
    'no-console': 'warn',
    'react/sort-comp': 'error',
    'react/no-set-state': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-no-bind': ['error', {
      'allowArrowFunctions': true
    }],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-indent': ['error', 2],
    'react/forbid-component-props': 'off',
    'react/jsx-sort-props': 'off',
    'react/forbid-prop-types': 'warn',
    'react/require-optimization': 'off',
    'react/jsx-no-literals': 'warn',
    "import/no-extraneous-dependencies": 'warn'
  }
}
