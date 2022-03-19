const path = require('path')
const fse = require('fs-extra')
const { componentTemplate, styleTemplate } = require('../template')
const { capitalizeFirstLetter, isValidString } = require('../utils')
const { success, error } = require('../utils/log')
const prettier = require('../utils/prettier')

async function generate({ name, path: compPath, withFolder, withStyle, styleType, isQuick, ...rest }) {
  let resolvedPath = `${path.resolve(process.cwd(), compPath, capitalizeFirstLetter(name))}`
  filePath = `${resolvedPath}/${withFolder ? '' : '.js'}`
  const isExist = fse.pathExistsSync(filePath)
  if(isExist) {
    error('Failed: 组件名称已存在！')
    return
  }
  const comp = prettier.js(componentTemplate({ name, withFolder, withStyle, styleType, ...rest }))
  let style
  if(withStyle) style = prettier.style(styleTemplate(name), styleType)

  if(withFolder) {
    await fse.outputFile(`${resolvedPath}/index.js`, comp)
    withStyle && await fse.outputFile(`${resolvedPath}/index.module.${styleType}`, style)
  } else {
    await fse.outputFile(`${resolvedPath}.js`, comp)
    withStyle && await fse.outputFile(`${resolvedPath}.module.${styleType}`, style)
  }

  success(`Success: ${isQuick ? '已为您快捷生成组件模版！' : '组件模版已生成！'}`)
}

function quickGenerate(name, compPath) {
  generate({
    name: isValidString(name) ? name.trim() : `comp_${Date.now()}`,
    path: isValidString(compPath) ? compPath.trim() : path.resolve(process.cwd(), './src'),
    type: 'function',
    withStyle: true,
    styleType: 'less',
    widthRouter: false,
    withFolder: true,
    isQuick: true,
  })
}

module.exports = {
  generate,
  quickGenerate
}