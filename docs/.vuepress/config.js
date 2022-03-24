const pkg = require('../../package.json')
const aliasConfig = require('../../config/alias')

const setAlias = (config) => {
  const { alias } = aliasConfig
  Object.keys(alias).forEach((key) => {
    config.resolve.alias.set(key, alias[key])
  })
}

module.exports = {
  title: pkg.name,
  description: '基于Vue2.0 & ElementUI 的 后台业务通用表格表单组件',
  head: [
    [
      'meta',
      {
        'http-quiv': 'pragma',
        cotent: 'no-cache'
      }
    ],
    [
      'meta',
      {
        'http-quiv': 'pragma',
        cotent: 'no-cache,must-revalidate'
      }
    ],
    [
      'meta',
      {
        'http-quiv': 'expires',
        cotent: '0'
      }
    ],
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,user-scalable=no'
      }
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://cdn.bootcdn.net/ajax/libs/normalize/8.0.1/normalize.min.css'
      }
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'styles/index.css'
      }
    ]
  ],
  base: '/vue-element-pro-components/',
  themeConfig: {
    repo: 'fang-kang/vue-element-pro-components',
    nav: [
      { text: '主页', link: '/' },
      { text: '指南', link: '/guide/introduction' },
      { text: '组件', link: '/components/' }
    ],
    sidebar: {
      '/guide/': [
        {
          title: '简介',
          collapsable: false,
          children: genGuideSidebar()
        }
      ],
      '/components/': [
        {
          title: '组件',
          collapsable: false,
          children: genComponentSidebar()
        }
      ]
    },
    sidebarDepth: 2
  },
  smoothScroll: true,
  plugins: [
    // 回到顶部
    '@vuepress/back-to-top',
    '@vuepress/search',
    'demo-container',
    // 放大
    ['@vuepress/medium-zoom', { selector: 'img' }]
  ],
  chainWebpack: (config) => {
    setAlias(config)
  }
}

function genGuideSidebar(type = '') {
  const mapArr = ['/guide/introduction.md', '/guide/installation.md', '/guide/quickstart.md']
  return mapArr.map((i) => {
    return type + i
  })
}

function genComponentSidebar(type = '') {
  const mapArr = [
    '/components/dialog.md',
    '/components/form.md',
    '/components/search.md',
    '/components/table.md',
    '/components/drawer.md',
    '/components/advanced-search.md',
    '/components/pagination.md'
  ]
  return mapArr.map((i) => {
    return type + i
  })
}