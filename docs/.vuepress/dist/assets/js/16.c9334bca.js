;(window.webpackJsonp = window.webpackJsonp || []).push([
  [16],
  {
    584: function(t, s, a) {
      'use strict'
      a.r(s)
      var e = a(6),
        n = Object(e.a)(
          {},
          function() {
            var t = this,
              s = t.$createElement,
              a = t._self._c || s
            return a('ContentSlotsDistributor', { attrs: { 'slot-key': t.$parent.slotKey } }, [
              a('h1', { attrs: { id: '安装' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#安装' } }, [t._v('#')]),
                t._v(' 安装')
              ]),
              t._v(' '),
              a('h2', { attrs: { id: '安装-2' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#安装-2' } }, [t._v('#')]),
                t._v(' 安装')
              ]),
              t._v(' '),
              a('div', { staticClass: 'custom-block tip' }, [
                a('p', { staticClass: 'custom-block-title' }, [t._v('TIP')]),
                t._v(' '),
                a('p', [
                  t._v(
                    '因为 vue-element-pro-components 基于 ElementUI 开发，安装使用前确保项目中已正确安装 ElementUI'
                  )
                ])
              ]),
              t._v(' '),
              a('p', [
                t._v('推荐使用 '),
                a('code', [t._v('yarn')]),
                t._v(' 的方式安装，国内安装速度比较快。')
              ]),
              t._v(' '),
              a('div', { staticClass: 'language-bash extra-class' }, [
                a('pre', { pre: !0, attrs: { class: 'language-bash' } }, [
                  a('code', [
                    a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('yarn')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('add')]),
                    t._v(' vue-element-pro-components -s\n'),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('# 或者')]),
                    t._v('\n'),
                    a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('npm')]),
                    t._v(' i vue-element-pro-components -s\n')
                  ])
                ])
              ]),
              a('h2', { attrs: { id: 'cdn' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#cdn' } }, [t._v('#')]),
                t._v(' CDN')
              ]),
              t._v(' '),
              a('p', [
                t._v('目前可以通过 '),
                a(
                  'a',
                  {
                    attrs: {
                      href: 'https://unpkg.com/vue-element-pro-components/',
                      target: '_blank',
                      rel: 'noopener noreferrer'
                    }
                  },
                  [t._v('unpkg.com/vue-element-pro-components'), a('OutboundLink')],
                  1
                ),
                t._v(' 获取到最新版本的资源，在页面上引入 js 和 css 文件即可开始使用。')
              ]),
              t._v(' '),
              a('div', { staticClass: 'language-html extra-class' }, [
                a('pre', { pre: !0, attrs: { class: 'language-html' } }, [
                  a('code', [
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('\x3c!-- 引入样式 --\x3e')
                    ]),
                    t._v('\n'),
                    a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                      a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('<')]),
                        t._v('link')
                      ]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [t._v('rel')]),
                      a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                        a('span', { pre: !0, attrs: { class: 'token punctuation attr-equals' } }, [
                          t._v('=')
                        ]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')]),
                        t._v('stylesheet'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')])
                      ]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [t._v('href')]),
                      a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                        a('span', { pre: !0, attrs: { class: 'token punctuation attr-equals' } }, [
                          t._v('=')
                        ]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')]),
                        t._v('https://unpkg.com/vue-element-pro-components/lib/theme/index.css'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')])
                      ]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('>')])
                    ]),
                    t._v('\n'),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('\x3c!-- 引入组件库 --\x3e')
                    ]),
                    t._v('\n'),
                    a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                      a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('<')]),
                        t._v('script')
                      ]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [t._v('src')]),
                      a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                        a('span', { pre: !0, attrs: { class: 'token punctuation attr-equals' } }, [
                          t._v('=')
                        ]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')]),
                        t._v('https://unpkg.com/vue-element-pro-components/lib/index.js'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')])
                      ]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('>')])
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token script' } }),
                    a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                      a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('</')]),
                        t._v('script')
                      ]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('>')])
                    ]),
                    t._v('\n')
                  ])
                ])
              ]),
              a('div', { staticClass: 'custom-block tip' }, [
                a('p', { staticClass: 'custom-block-title' }, [t._v('TIP')]),
                t._v(' '),
                a('p', [
                  t._v(
                    '我们建议使用 CDN 引入 vue-element-pro-components的用户在链接地址上锁定版本，以免将来 vue-element-pro-components升级时受到非兼容性更新的影响。锁定版本的方法请查看 '
                  ),
                  a(
                    'a',
                    {
                      attrs: {
                        href: 'https://unpkg.com',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('unpkg.com'), a('OutboundLink')],
                    1
                  ),
                  t._v('。')
                ])
              ]),
              t._v(' '),
              a('p', [
                t._v('如果是通过 npm 或 yarn 安装，并希望配合 webpack 使用，请阅读下一节：'),
                a('a', { attrs: { href: '/guide/quickstart' } }, [t._v('快速上手')]),
                t._v('。')
              ])
            ])
          },
          [],
          !1,
          null,
          null,
          null
        )
      s.default = n.exports
    }
  }
])
