module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:prettier/recommended',
    '@nuxtjs/eslint-config-typescript'
  ],
  plugins: [
    'prettier',
  ],
  rules: {
      'indent': ['error', 4],
      'space-before-function-paren': ['error', 'never'],
      'vue/html-self-closing': [ 'error', {
          'html': {
              'void': 'always',
              'normal': 'never',
          }
      }],
      'vue/html-indent': ['error', 4],
      'vue/singleline-html-element-content-newline': 'off'
  }
}
