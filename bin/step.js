const inquirer = require('inquirer')
const { isValidString } = require('../utils')

async function step({ name = '', path = '' } = {}) {
  const answer = await inquirer.prompt( getQuestions(name, path) )
  return {
    name: name.trim(),
    path: path.trim(),
    ...answer
  }
}

function getQuestions(name, path) {
  const quesList = [...questions]
  !isValidString(path) && quesList.unshift(questionPath)
  !isValidString(name) && quesList.unshift(questionName)
  return quesList
}

const questionName = {
  name: 'name',
  type: 'input',
  message: '请输入组件名称：',
  filter(str) {
    return str.trim()
  },
  validate(str) {
    return isValidString(str)
  }
}

const questionPath = {
  name: 'path',
  type: 'input',
  message: '请输入组件存放的路径：',
  filter(str) {
    return str.trim()
  },
  validate(str) {
    return isValidString(str)
  }
}

const questions = [
  {
    name: 'type',
    type: 'list',
    message: '请选择组件类型：',
    choices: ['function', 'class']
  },
  {
    name: 'withStyle',
    type: 'confirm',
    message: '是否需要样式文件：',
    default: true
  },
  {
    name: 'styleType',
    type: 'list',
    message: '请选择样式文件类型：',
    choices: ['less', 'scss'],
    when(answer){
      return answer.withStyle
    }
  },
  {
    name: 'withRouter',
    type: 'confirm',
    message: '是否需要路由：',
    default: true
  },
  {
    name: 'withFolder',
    type: 'confirm',
    message: '是否以文件夹形式创建：',
    default: true
  }
]


module.exports = {
  step
}