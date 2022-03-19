// 字符串首字母大写
function capitalizeFirstLetter(str) {
  const trimStr = str.trim()
  return `${trimStr.charAt(0).toUpperCase()}${trimStr.slice(1)}`
}

// 是否有效的字符串
function isValidString(str) {
  return !!str && !!str.trim()
}

module.exports = {
  capitalizeFirstLetter,
  isValidString
}