#!/usr/bin/env node
const { program } = require('commander')
const packageJson = require('../package.json')
const { step } = require('./step')
const { generate, quickGenerate } = require('./generate')

program
  .name('rct')
  .version(packageJson.version)
  .description('React component template generator')
  // .command('rct')
  .option('-n, --name <name>', 'input a component name')
  .option('-p, --path <path>', 'input a component path')
  .option('-y, --yes', 'generate a component quickly')

program.parse()

const { name, path, yes } = program.opts()

if(yes) {
  quickGenerate(name, path)
  return
}

step({ name, path }).then(params => {
  generate(params)
})


