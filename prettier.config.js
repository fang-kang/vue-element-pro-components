module.exports = {
  printWidth: 100, // 单行长度
  tabWidth: 2, // 缩进长度
  useTabs: false, // 使用空格代替tab缩进
  semi: false, // 句末使用分号
  singleQuote: true, // 使用单引号
  quoteProps: 'as-needed', // 仅在必需时为对象的key添加引号
  jsxSingleQuote: true, // jsx中使用单引号
  bracketSpacing: true, // 在对象前后添加空格-eg: { foo: bar }
  jsxBracketSameLine: false, // 多属性html标签的‘>’折行放置
  arrowParens: 'always', // 单参数箭头函数参数周围使用圆括号-eg: (x) => x
  proseWrap: 'preserve', //  使用默认的折行标准
  htmlWhitespaceSensitivity: 'strict',
  endOfLine: 'lf', // 结束行形式
  trailingComma: 'none', // 多行时不加末尾行逗号
  embeddedLanguageFormatting: 'auto', // 对引用代码进行格式化
  requirePragma: false, // 无需顶部注释即可格式化
  insertPragma: false, // 在已被preitter格式化的文件顶部加上标注
  vueIndentScriptAndStyle: false // 不对vue中的script及style标签缩进
}
