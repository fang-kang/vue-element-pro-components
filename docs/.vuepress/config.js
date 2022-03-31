const pkg = require('../../package.json')
const aliasConfig = require('../../config/alias')
const nav = require('./setting/nav')
const sidebar = require('./setting/sidebar')
const head = require('./setting/head')

const setAlias = (config) => {
  const { alias } = aliasConfig
  Object.keys(alias).forEach((key) => {
    config.resolve.alias.set(key, alias[key])
  })
}

module.exports = {
  title: pkg.name,
  description: '基于Vue2.0 & ElementUI 的 后台业务通用表格表单组件',
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  head,
  base: '/vue-element-pro-components/',
  smoothScroll: true,
  theme: 'reco',
  themeConfig: {
    repo: 'fang-kang/vue-element-pro-components',
    logo: '/logo.png',
    subSidebar: 'auto',
    nav,
    sidebar,
    sidebarDepth: 3,
    lastUpdated: '最后更新',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'master',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '帮助我们改善此页面！'
  },
  plugins: [
    // 回到顶部
    '@vuepress/back-to-top',
    '@vuepress/search',
    'demo-container',
    // 放大
    ['@vuepress/medium-zoom', { selector: 'img' }],
    [
      'vuepress-plugin-nuggets-style-copy',
      {
        copyText: '复制代码',
        tip: {
          content: '复制成功'
        }
      }
    ]
  ],
  chainWebpack: (config) => {
    setAlias(config)
  }
}
