const prettier = require('prettier')
const prettierEslint = require('prettier-eslint')

function js(code) {
  return prettierEslint({
    text: code,
    eslintConfig: {
      extends: ['airbnb'],
      rules: {
        'import/no-unresolved': 0,
        'import/extensions': 0,
        'arrow-parens': 'off',
        'implicit-arrow-linebreak': 0,
        'import/newline-after-import': 0,
        'global-require': 0
      },
    },
    logLevel: 'error',
    prettierOptions: {
      parser: 'babel',
      trailingComma: 'none',
      semi: true,
      singleQuote: true,
    },
    fallbackPrettierOptions: {
      singleQuote: false,
    },
  });
}

function style(code, parser) {
  return prettier.format(code, { parser });
}

module.exports = {
  js,
  style
}