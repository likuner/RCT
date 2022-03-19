const chalk = require('chalk')

function logging(fn, words) {
  console.log(fn(words))
}

function info(words) {
  logging(chalk.blue, words)
}

function success(words) {
  logging(chalk.green, words)
}

function error(words) {
  logging(chalk.red, words)
}

function warn(words) {
  logging(chalk.yellow, words)
}

module.exports = {
  info,
  success,
  error,
  warn
}
