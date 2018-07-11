// https://github.com/michael-ciniawsky/postcss-load-config

const replaceTagSelectorMap = require('postcss-mpvue-wxss/lib/wxmlTagMap')

module.exports = {
  "plugins": {
    "postcss-mpvue-wxss": {
      // cleanSelector: ['*'],
      remToRpx: 1,
      replaceTagSelector: Object.assign(replaceTagSelectorMap, {
        '*': 'view, text' // 将覆盖前面的 * 选择器被清理规则
      })
    },
    "postcss-pxtorem": {
      "rootValue": 1,
      "propList": ["*"],
      "selectorBlackList": ["weui-"]
    }
  }
}
