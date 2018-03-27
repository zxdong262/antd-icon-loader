/**
 * replace antd icon font resource
 */
var loaderUtils = require('loader-utils')

module.exports = exports.default = function (source) {
  this.cacheable()
  var options = Object.assign(
    {},
    loaderUtils.getOptions(this), // it is safe to pass null to Object.assign()
  )
  if (!options.path) {
    throw new Error('path option is required for antd-icon-loader')
  }
  var version = options.version || ''
  var path = options.path
  return source
    .replace(/'[^']+\.eot'/, `'${path}/iconfont.eot?t=${version}'`)
    .replace(/'[^']+\.eot\?#iefix'/, `'${path}/iconfont.eot?t=${version}#iefix'`)
    .replace(/'[^']+\.woff'/, `'${path}/iconfont.woff?t=${version}'`)
    .replace(/'[^']+\.ttf'/, `'${path}/iconfont.ttf?t=${version}'`)
    .replace(/'[^']+\.svg#iconfont'/, `'${path}/iconfont.svg?t=${version}#iconfont'`)
}
