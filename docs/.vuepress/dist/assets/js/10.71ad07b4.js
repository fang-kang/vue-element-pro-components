;(window.webpackJsonp = window.webpackJsonp || []).push([
  [10],
  {
    572: function(t, a, s) {
      'use strict'
      s.r(a)
      var r,
        e,
        n,
        p,
        o,
        l,
        v,
        c,
        _,
        i,
        k,
        u,
        y,
        g,
        b,
        d,
        h = s(2),
        m = {
          name: 'component-doc',
          components: {
            'render-demo-0':
              ((r = 'input'),
              (e = 'select'),
              (n = 'number'),
              (p = 'checkBox'),
              (o = 'radio'),
              (l = 'date'),
              (v = 'switch'),
              (c = 'title'),
              (_ = 'time'),
              (i = 'slider'),
              (k = 'rate'),
              (u = 'color'),
              (y = 'cascader'),
              (g = 'table'),
              (b = 'editor'),
              (d = {
                data: function() {
                  return {
                    queryForm: {},
                    columns: {},
                    visible: !1,
                    dict: {
                      selectArr: [
                        { name: 'select-1', value: 1 },
                        { name: 'select-2', value: 2 }
                      ]
                    }
                  }
                },
                created: function() {
                  this.columns = this.getMetaData()
                },
                methods: {
                  dataReload: function() {
                    console.log(this.queryForm)
                  },
                  getMetaData: function() {
                    var t = this
                    return {
                      title: { label: '基本信息', type: c },
                      input: {
                        label: '输入框',
                        type: r,
                        span: 12,
                        showInSearch: !0,
                        formItemOption: {},
                        showInTable: !0,
                        tooltip: '测试输入框',
                        onChange: function(a) {
                          console.log(a, 'item'),
                            1 == a.form.input &&
                              (t.$message.success('成功'),
                              (a.form.num = 11),
                              (a.form.radio = 2),
                              (a.form.select = 1))
                        }
                      },
                      select: {
                        label: '下拉框',
                        type: e,
                        span: 12,
                        options: this.dict.selectArr,
                        showInSearch: !0,
                        showInTable: !0
                      },
                      switch: { label: '开关', type: v, span: 12 },
                      radio: {
                        label: '单选框',
                        type: o,
                        span: 12,
                        options: this.dict.selectArr,
                        showInSearch: !0,
                        showInTable: !0
                      },
                      checxbox: {
                        label: '多选框',
                        type: p,
                        span: 12,
                        options: this.dict.selectArr,
                        showInSearch: !0,
                        showInTable: !0
                      },
                      date: { label: '日期', type: l, span: 10, showInSearch: !0, showInTable: !0 },
                      num: { label: '数字', type: n, span: 10, showInTable: !0 },
                      time: { label: '时间', type: _, span: 12, showInSearch: !0, showInTable: !0 },
                      slider: {
                        label: '滑块',
                        type: i,
                        span: 12,
                        showInTable: !0,
                        showInSearch: !1
                      },
                      rate: { label: '评分', type: k, span: 12, showInTable: !0, showInSearch: !0 },
                      color: { label: '颜色', type: u, showInSearch: !0, span: 12 },
                      cascader: {
                        label: '级联',
                        showInSearch: !0,
                        type: y,
                        options: [
                          {
                            value: 'zhinan',
                            label: '指南',
                            disabled: !0,
                            children: [
                              {
                                value: 'shejiyuanze',
                                label: '设计原则',
                                children: [
                                  { value: 'yizhi', label: '一致' },
                                  { value: 'fankui', label: '反馈' },
                                  { value: 'xiaolv', label: '效率' },
                                  { value: 'kekong', label: '可控' }
                                ]
                              },
                              {
                                value: 'daohang',
                                label: '导航',
                                children: [
                                  { value: 'cexiangdaohang', label: '侧向导航' },
                                  { value: 'dingbudaohang', label: '顶部导航' }
                                ]
                              }
                            ]
                          },
                          {
                            value: 'zujian',
                            label: '组件',
                            children: [
                              {
                                value: 'basic',
                                label: 'Basic',
                                children: [
                                  { value: 'layout', label: 'Layout 布局' },
                                  { value: 'color', label: 'Color 色彩' },
                                  { value: 'typography', label: 'Typography 字体' },
                                  { value: 'icon', label: 'Icon 图标' },
                                  { value: 'button', label: 'Button 按钮' }
                                ]
                              },
                              {
                                value: 'form',
                                label: 'Form',
                                children: [
                                  { value: 'radio', label: 'Radio 单选框' },
                                  { value: 'checkbox', label: 'Checkbox 多选框' },
                                  { value: 'input', label: 'Input 输入框' },
                                  { value: 'input-number', label: 'InputNumber 计数器' },
                                  { value: 'select', label: 'Select 选择器' },
                                  { value: 'cascader', label: 'Cascader 级联选择器' },
                                  { value: 'switch', label: 'Switch 开关' },
                                  { value: 'slider', label: 'Slider 滑块' },
                                  { value: 'time-picker', label: 'TimePicker 时间选择器' },
                                  { value: 'date-picker', label: 'DatePicker 日期选择器' },
                                  {
                                    value: 'datetime-picker',
                                    label: 'DateTimePicker 日期时间选择器'
                                  },
                                  { value: 'upload', label: 'Upload 上传' },
                                  { value: 'rate', label: 'Rate 评分' },
                                  { value: 'form', label: 'Form 表单' }
                                ]
                              },
                              {
                                value: 'data',
                                label: 'Data',
                                children: [
                                  { value: 'table', label: 'Table 表格' },
                                  { value: 'tag', label: 'Tag 标签' },
                                  { value: 'progress', label: 'Progress 进度条' },
                                  { value: 'tree', label: 'Tree 树形控件' },
                                  { value: 'pagination', label: 'Pagination 分页' },
                                  { value: 'badge', label: 'Badge 标记' }
                                ]
                              },
                              {
                                value: 'notice',
                                label: 'Notice',
                                children: [
                                  { value: 'alert', label: 'Alert 警告' },
                                  { value: 'loading', label: 'Loading 加载' },
                                  { value: 'message', label: 'Message 消息提示' },
                                  { value: 'message-box', label: 'MessageBox 弹框' },
                                  { value: 'notification', label: 'Notification 通知' }
                                ]
                              },
                              {
                                value: 'navigation',
                                label: 'Navigation',
                                children: [
                                  { value: 'menu', label: 'NavMenu 导航菜单' },
                                  { value: 'tabs', label: 'Tabs 标签页' },
                                  { value: 'breadcrumb', label: 'Breadcrumb 面包屑' },
                                  { value: 'dropdown', label: 'Dropdown 下拉菜单' },
                                  { value: 'steps', label: 'Steps 步骤条' }
                                ]
                              },
                              {
                                value: 'others',
                                label: 'Others',
                                children: [
                                  { value: 'dialog', label: 'Dialog 对话框' },
                                  { value: 'tooltip', label: 'Tooltip 文字提示' },
                                  { value: 'popover', label: 'Popover 弹出框' },
                                  { value: 'card', label: 'Card 卡片' },
                                  { value: 'carousel', label: 'Carousel 走马灯' },
                                  { value: 'collapse', label: 'Collapse 折叠面板' }
                                ]
                              }
                            ]
                          },
                          {
                            value: 'ziyuan',
                            label: '资源',
                            children: [
                              { value: 'axure', label: 'Axure Components' },
                              { value: 'sketch', label: 'Sketch Templates' },
                              { value: 'jiaohu', label: '组件交互文档' }
                            ]
                          }
                        ],
                        span: 12
                      },
                      table: {
                        label: '测试表格',
                        span: 24,
                        type: g,
                        tableDataOptions: {
                          input: { label: '输入框', type: r, span: 12, showInTable: !0 },
                          select: {
                            label: '下拉框',
                            type: e,
                            span: 12,
                            options: this.dict.selectArr,
                            showInTable: !0
                          },
                          switch: { label: '开关', type: v, span: 12 },
                          radio: {
                            label: '单选框',
                            type: o,
                            span: 12,
                            options: this.dict.selectArr
                          },
                          checxbox: {
                            label: '多选框',
                            type: p,
                            span: 12,
                            options: this.dict.selectArr
                          },
                          date: { label: '日期', type: l, span: 12 },
                          num: { label: '数字', required: !0, type: n, span: 12, showInTable: !0 },
                          time: { label: '时间', type: _, showInTable: !0, span: 12 }
                        }
                      },
                      editor: {
                        label: '富文本',
                        type: b,
                        span: 24,
                        showInSearch: !0,
                        tooltip: '富文本提示'
                      }
                    }
                  }
                }
              }),
              Object(h.a)(
                {
                  render: function() {
                    var t = this,
                      a = t.$createElement,
                      s = t._self._c || a
                    return s(
                      'div',
                      [
                        [
                          s(
                            'el-button',
                            {
                              on: {
                                click: function(a) {
                                  t.visible = !0
                                }
                              }
                            },
                            [t._v('测试高级查询')]
                          ),
                          t._v(' '),
                          s('el-pro-advanced-search', {
                            attrs: { title: '高级查询', visible: t.visible, columns: t.columns },
                            on: {
                              'update:visible': function(a) {
                                t.visible = a
                              },
                              search: t.dataReload,
                              reset: function(a) {
                                t.visible = !1
                              }
                            },
                            model: {
                              value: t.queryForm,
                              callback: function(a) {
                                t.queryForm = a
                              },
                              expression: 'queryForm'
                            }
                          })
                        ]
                      ],
                      2
                    )
                  },
                  staticRenderFns: []
                },
                d
              ))
          }
        },
        S = s(6),
        x = Object(S.a)(
          m,
          function() {
            var t = this,
              a = t.$createElement,
              s = t._self._c || a
            return s(
              'ContentSlotsDistributor',
              { attrs: { 'slot-key': t.$parent.slotKey } },
              [
                s('h1', { attrs: { id: '通用高级查询-elproadvancedsearch' } }, [
                  s(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#通用高级查询-elproadvancedsearch' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' 通用高级查询-ElProAdvancedSearch')
                ]),
                t._v(' '),
                s('h2', { attrs: { id: '基本用法' } }, [
                  s('a', { staticClass: 'header-anchor', attrs: { href: '#基本用法' } }, [
                    t._v('#')
                  ]),
                  t._v(' 基本用法')
                ]),
                t._v(' '),
                s(
                  'demo-block',
                  { attrs: { options: JSON.parse(decodeURI('%7B%7D')) } },
                  [
                    s('template', { slot: 'demo' }, [[s('render-demo-0')]], 2),
                    t._v(' '),
                    s('template', { slot: 'source' }, [
                      s('div', { staticClass: 'language-html extra-class' }, [
                        s('pre', { pre: !0, attrs: { class: 'language-html' } }, [
                          s('code', [
                            s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('<')
                                ]),
                                t._v('template')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('>')
                              ])
                            ]),
                            t._v('\n  '),
                            s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('<')
                                ]),
                                t._v('el-button')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                                t._v('@click')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                s(
                                  'span',
                                  { pre: !0, attrs: { class: 'token punctuation attr-equals' } },
                                  [t._v('=')]
                                ),
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ]),
                                t._v('visible = true'),
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ])
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('>')
                              ])
                            ]),
                            t._v('测试高级查询'),
                            s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('</')
                                ]),
                                t._v('el-button')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('>')
                              ])
                            ]),
                            t._v('\n  '),
                            s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('<')
                                ]),
                                t._v('el-pro-advanced-search')
                              ]),
                              t._v('\n    '),
                              s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                                t._v('title')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                s(
                                  'span',
                                  { pre: !0, attrs: { class: 'token punctuation attr-equals' } },
                                  [t._v('=')]
                                ),
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ]),
                                t._v('高级查询'),
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ])
                              ]),
                              t._v('\n    '),
                              s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                                t._v(':visible.sync')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                s(
                                  'span',
                                  { pre: !0, attrs: { class: 'token punctuation attr-equals' } },
                                  [t._v('=')]
                                ),
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ]),
                                t._v('visible'),
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ])
                              ]),
                              t._v('\n    '),
                              s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                                t._v(':columns')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                s(
                                  'span',
                                  { pre: !0, attrs: { class: 'token punctuation attr-equals' } },
                                  [t._v('=')]
                                ),
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ]),
                                t._v('columns'),
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ])
                              ]),
                              t._v('\n    '),
                              s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                                t._v('v-model')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                s(
                                  'span',
                                  { pre: !0, attrs: { class: 'token punctuation attr-equals' } },
                                  [t._v('=')]
                                ),
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ]),
                                t._v('queryForm'),
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ])
                              ]),
                              t._v('\n    '),
                              s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                                t._v('@search')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                s(
                                  'span',
                                  { pre: !0, attrs: { class: 'token punctuation attr-equals' } },
                                  [t._v('=')]
                                ),
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ]),
                                t._v('dataReload'),
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ])
                              ]),
                              t._v('\n    '),
                              s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                                t._v('@reset')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                s(
                                  'span',
                                  { pre: !0, attrs: { class: 'token punctuation attr-equals' } },
                                  [t._v('=')]
                                ),
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ]),
                                t._v('visible = false'),
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ])
                              ]),
                              t._v('\n  '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('/>')
                              ])
                            ]),
                            t._v('\n'),
                            s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('</')
                                ]),
                                t._v('template')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('>')
                              ])
                            ]),
                            t._v('\n\n'),
                            s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('<')
                                ]),
                                t._v('script')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('>')
                              ])
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token script' } }, [
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token language-javascript' } },
                                [
                                  t._v('\n  '),
                                  s('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                    t._v('const')
                                  ]),
                                  t._v(' types '),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v('=')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n    '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('input')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'input'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                    t._v('// 输入框')
                                  ]),
                                  t._v('\n    '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('select')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'select'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                    t._v('// 选择框')
                                  ]),
                                  t._v('\n    '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('number')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'number'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                    t._v('// 计数器')
                                  ]),
                                  t._v('\n    '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('checkBox')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'checkBox'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                    t._v('// 多选框')
                                  ]),
                                  t._v('\n    '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('check')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'check'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                    t._v('// 单个复选框')
                                  ]),
                                  t._v('\n    '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('radio')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'radio'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                    t._v('// 单选框')
                                  ]),
                                  t._v('\n    '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('date')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'date'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                    t._v('// 日期')
                                  ]),
                                  t._v('\n    '),
                                  s('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                    t._v('switch')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'switch'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                    t._v('// 开关')
                                  ]),
                                  t._v('\n    '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('title')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'title'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                    t._v('// 标题')
                                  ]),
                                  t._v('\n    '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('time')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'time'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                    t._v('// 时间')
                                  ]),
                                  t._v('\n    '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('slider')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'slider'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                    t._v('// 滑块')
                                  ]),
                                  t._v('\n    '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('rate')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'rate'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                    t._v('// 评分')
                                  ]),
                                  t._v('\n    '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('color')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'color'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                    t._v('// 颜色')
                                  ]),
                                  t._v('\n    '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('cascader')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'cascader'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                    t._v('// 级联')
                                  ]),
                                  t._v('\n    '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('table')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'table'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                    t._v('// 表格')
                                  ]),
                                  t._v('\n    '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('editor')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'editor'")
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                    t._v('// 富文本')
                                  ]),
                                  t._v('\n  '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v('\n  '),
                                  s('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                    t._v('export')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                    t._v('default')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n    '),
                                  s('span', { pre: !0, attrs: { class: 'token function' } }, [
                                    t._v('data')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('(')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(')')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n      '),
                                  s('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                    t._v('return')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n        '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('queryForm')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n        '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('columns')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n        '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('visible')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token boolean' } }, [
                                    t._v('false')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n        '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('dict')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n          '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('selectArr')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('[')
                                  ]),
                                  t._v('\n            '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n              '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('name')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'select-1'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n              '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('value')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token number' } }, [
                                    t._v('1')
                                  ]),
                                  t._v('\n            '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n              '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('name')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'select-2'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n              '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('value')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token number' } }, [
                                    t._v('2')
                                  ]),
                                  t._v('\n            '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v('\n          '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(']')
                                  ]),
                                  t._v('\n        '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v('\n      '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v('\n    '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n    '),
                                  s('span', { pre: !0, attrs: { class: 'token function' } }, [
                                    t._v('created')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('(')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(')')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n      '),
                                  s('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                    t._v('this')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  t._v('columns '),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v('=')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                    t._v('this')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token function' } }, [
                                    t._v('getMetaData')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('(')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(')')
                                  ]),
                                  t._v('\n    '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n    '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('methods')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n      '),
                                  s('span', { pre: !0, attrs: { class: 'token function' } }, [
                                    t._v('dataReload')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('(')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(')')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n        console'),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token function' } }, [
                                    t._v('log')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('(')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                    t._v('this')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  t._v('queryForm'),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(')')
                                  ]),
                                  t._v('\n      '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n      '),
                                  s('span', { pre: !0, attrs: { class: 'token function' } }, [
                                    t._v('getMetaData')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('(')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(')')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n        '),
                                  s('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                    t._v('return')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n          '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('title')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n            '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'基本信息'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('type')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' types'),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  t._v('title\n          '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n          '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('input')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n            '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'输入框'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('type')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' types'),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  t._v('input'),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('span')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token number' } }, [
                                    t._v('12')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('showInSearch')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token boolean' } }, [
                                    t._v('true')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('formItemOption')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('showInTable')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token boolean' } }, [
                                    t._v('true')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('tooltip')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'测试输入框'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token function-variable function' }
                                    },
                                    [t._v('onChange')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('(')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token parameter' } }, [
                                    t._v('item')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(')')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v('=>')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n              console'),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token function' } }, [
                                    t._v('log')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('(')
                                  ]),
                                  t._v('item'),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'item'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(')')
                                  ]),
                                  t._v('\n              '),
                                  s('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                    t._v('if')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('(')
                                  ]),
                                  t._v('item'),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  t._v('form'),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  t._v('input '),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v('==')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token number' } }, [
                                    t._v('1')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(')')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n                '),
                                  s('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                    t._v('this')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  t._v('$message'),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token function' } }, [
                                    t._v('success')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('(')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'成功'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(')')
                                  ]),
                                  t._v('\n                item'),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  t._v('form'),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  t._v('num '),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v('=')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token number' } }, [
                                    t._v('11')
                                  ]),
                                  t._v('\n                item'),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  t._v('form'),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  t._v('radio '),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v('=')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token number' } }, [
                                    t._v('2')
                                  ]),
                                  t._v('\n                item'),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  t._v('form'),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  t._v('select '),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v('=')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token number' } }, [
                                    t._v('1')
                                  ]),
                                  t._v('\n              '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v('\n            '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v('\n          '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n          '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('select')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n            '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'下拉框'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('type')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' types'),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  t._v('select'),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('span')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token number' } }, [
                                    t._v('12')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('options')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                    t._v('this')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  t._v('dict'),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  t._v('selectArr'),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('showInSearch')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token boolean' } }, [
                                    t._v('true')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('showInTable')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token boolean' } }, [
                                    t._v('true')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n          '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n          '),
                                  s('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                    t._v('switch')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n            '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'开关'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('type')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' types'),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  t._v('switch'),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('span')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token number' } }, [
                                    t._v('12')
                                  ]),
                                  t._v('\n          '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n          '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('radio')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n            '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'单选框'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('type')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' types'),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  t._v('radio'),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('span')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token number' } }, [
                                    t._v('12')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('options')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                    t._v('this')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  t._v('dict'),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  t._v('selectArr'),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('showInSearch')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token boolean' } }, [
                                    t._v('true')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('showInTable')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token boolean' } }, [
                                    t._v('true')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n          '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n          '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('checxbox')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n            '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'多选框'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('type')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' types'),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  t._v('checkBox'),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('span')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token number' } }, [
                                    t._v('12')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('options')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                    t._v('this')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  t._v('dict'),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  t._v('selectArr'),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('showInSearch')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token boolean' } }, [
                                    t._v('true')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('showInTable')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token boolean' } }, [
                                    t._v('true')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n          '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n          '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('date')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n            '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'日期'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('type')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' types'),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  t._v('date'),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('span')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token number' } }, [
                                    t._v('10')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('showInSearch')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token boolean' } }, [
                                    t._v('true')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('showInTable')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token boolean' } }, [
                                    t._v('true')
                                  ]),
                                  t._v('\n          '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n          '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('num')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n            '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'数字'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('type')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' types'),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  t._v('number'),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('span')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token number' } }, [
                                    t._v('10')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('showInTable')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token boolean' } }, [
                                    t._v('true')
                                  ]),
                                  t._v('\n          '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n          '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('time')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n            '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'时间'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('type')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' types'),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  t._v('time'),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('span')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token number' } }, [
                                    t._v('12')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('showInSearch')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token boolean' } }, [
                                    t._v('true')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('showInTable')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token boolean' } }, [
                                    t._v('true')
                                  ]),
                                  t._v('\n          '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n          '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('slider')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n            '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'滑块'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('type')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' types'),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  t._v('slider'),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('span')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token number' } }, [
                                    t._v('12')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('showInTable')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token boolean' } }, [
                                    t._v('true')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('showInSearch')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token boolean' } }, [
                                    t._v('false')
                                  ]),
                                  t._v('\n          '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n          '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('rate')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n            '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'评分'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('type')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' types'),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  t._v('rate'),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('span')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token number' } }, [
                                    t._v('12')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('showInTable')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token boolean' } }, [
                                    t._v('true')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('showInSearch')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token boolean' } }, [
                                    t._v('true')
                                  ]),
                                  t._v('\n          '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n          '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('color')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n            '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'颜色'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('type')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' types'),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  t._v('color'),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('showInSearch')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token boolean' } }, [
                                    t._v('true')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('span')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token number' } }, [
                                    t._v('12')
                                  ]),
                                  t._v('\n          '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n          '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('cascader')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n            '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'级联'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('showInSearch')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token boolean' } }, [
                                    t._v('true')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('type')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' types'),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  t._v('cascader'),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('options')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('[')
                                  ]),
                                  t._v('\n              '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n                '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('value')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'zhinan'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'指南'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('disabled')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token boolean' } }, [
                                    t._v('true')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('children')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('[')
                                  ]),
                                  t._v('\n                  '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n                    '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('value')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'shejiyuanze'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                    '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'设计原则'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                    '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('children')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('[')
                                  ]),
                                  t._v('\n                      '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n                        '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('value')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'yizhi'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                        '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'一致'")
                                  ]),
                                  t._v('\n                      '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                      '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n                        '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('value')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'fankui'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                        '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'反馈'")
                                  ]),
                                  t._v('\n                      '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                      '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n                        '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('value')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'xiaolv'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                        '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'效率'")
                                  ]),
                                  t._v('\n                      '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                      '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n                        '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('value')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'kekong'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                        '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'可控'")
                                  ]),
                                  t._v('\n                      '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v('\n                    '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(']')
                                  ]),
                                  t._v('\n                  '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                  '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n                    '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('value')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'daohang'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                    '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'导航'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                    '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('children')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('[')
                                  ]),
                                  t._v('\n                      '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n                        '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('value')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'cexiangdaohang'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                        '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'侧向导航'")
                                  ]),
                                  t._v('\n                      '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                      '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n                        '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('value')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'dingbudaohang'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                        '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'顶部导航'")
                                  ]),
                                  t._v('\n                      '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v('\n                    '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(']')
                                  ]),
                                  t._v('\n                  '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v('\n                '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(']')
                                  ]),
                                  t._v('\n              '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n              '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n                '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('value')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'zujian'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'组件'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('children')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('[')
                                  ]),
                                  t._v('\n                  '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n                    '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('value')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'basic'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                    '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'Basic'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                    '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('children')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('[')
                                  ]),
                                  t._v('\n                      '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n                        '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('value')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'layout'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                        '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'Layout 布局'")
                                  ]),
                                  t._v('\n                      '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                      '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n                        '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('value')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'color'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                        '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'Color 色彩'")
                                  ]),
                                  t._v('\n                      '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                      '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n                        '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('value')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'typography'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                        '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'Typography 字体'")
                                  ]),
                                  t._v('\n                      '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                      '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n                        '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('value')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'icon'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                        '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'Icon 图标'")
                                  ]),
                                  t._v('\n                      '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                      '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n                        '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('value')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'button'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                        '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'Button 按钮'")
                                  ]),
                                  t._v('\n                      '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v('\n                    '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(']')
                                  ]),
                                  t._v('\n                  '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                  '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n                    '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('value')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'form'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                    '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'Form'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                    '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('children')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('[')
                                  ]),
                                  t._v('\n                      '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n                        '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('value')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'radio'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                        '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'Radio 单选框'")
                                  ]),
                                  t._v('\n                      '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                      '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n                        '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('value')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'checkbox'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                        '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'Checkbox 多选框'")
                                  ]),
                                  t._v('\n                      '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                      '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n                        '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('value')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'input'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                        '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'Input 输入框'")
                                  ]),
                                  t._v('\n                      '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                      '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n                        '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('value')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'input-number'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                        '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'InputNumber 计数器'")
                                  ]),
                                  t._v('\n                      '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                      '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n                        '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('value')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'select'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                        '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'Select 选择器'")
                                  ]),
                                  t._v('\n                      '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                      '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n                        '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('value')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'cascader'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                        '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'Cascader 级联选择器'")
                                  ]),
                                  t._v('\n                      '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                      '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n                        '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('value')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'switch'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                        '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'Switch 开关'")
                                  ]),
                                  t._v('\n                      '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                      '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n                        '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('value')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'slider'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                        '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'Slider 滑块'")
                                  ]),
                                  t._v('\n                      '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                      '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n                        '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('value')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'time-picker'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                        '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'TimePicker 时间选择器'")
                                  ]),
                                  t._v('\n                      '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                      '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n                        '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('value')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'date-picker'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                        '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'DatePicker 日期选择器'")
                                  ]),
                                  t._v('\n                      '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                      '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n                        '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('value')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'datetime-picker'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                        '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'DateTimePicker 日期时间选择器'")
                                  ]),
                                  t._v('\n                      '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                      '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n                        '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('value')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'upload'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                        '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'Upload 上传'")
                                  ]),
                                  t._v('\n                      '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                      '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n                        '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('value')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'rate'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                        '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'Rate 评分'")
                                  ]),
                                  t._v('\n                      '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                      '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n                        '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('value')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'form'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                        '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'Form 表单'")
                                  ]),
                                  t._v('\n                      '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v('\n                    '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(']')
                                  ]),
                                  t._v('\n                  '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                  '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n                    '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('value')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'data'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                    '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'Data'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                    '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('children')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('[')
                                  ]),
                                  t._v('\n                      '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n                        '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('value')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'table'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                        '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'Table 表格'")
                                  ]),
                                  t._v('\n                      '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                      '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n                        '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('value')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'tag'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                        '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'Tag 标签'")
                                  ]),
                                  t._v('\n                      '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                      '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n                        '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('value')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'progress'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                        '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'Progress 进度条'")
                                  ]),
                                  t._v('\n                      '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                      '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n                        '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('value')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'tree'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                        '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'Tree 树形控件'")
                                  ]),
                                  t._v('\n                      '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                      '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n                        '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('value')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'pagination'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                        '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'Pagination 分页'")
                                  ]),
                                  t._v('\n                      '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                      '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n                        '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('value')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'badge'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                        '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'Badge 标记'")
                                  ]),
                                  t._v('\n                      '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v('\n                    '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(']')
                                  ]),
                                  t._v('\n                  '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                  '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n                    '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('value')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'notice'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                    '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'Notice'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                    '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('children')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('[')
                                  ]),
                                  t._v('\n                      '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n                        '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('value')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'alert'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                        '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'Alert 警告'")
                                  ]),
                                  t._v('\n                      '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                      '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n                        '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('value')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'loading'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                        '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'Loading 加载'")
                                  ]),
                                  t._v('\n                      '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                      '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n                        '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('value')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'message'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                        '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'Message 消息提示'")
                                  ]),
                                  t._v('\n                      '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                      '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n                        '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('value')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'message-box'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                        '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'MessageBox 弹框'")
                                  ]),
                                  t._v('\n                      '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                      '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n                        '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('value')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'notification'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                        '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'Notification 通知'")
                                  ]),
                                  t._v('\n                      '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v('\n                    '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(']')
                                  ]),
                                  t._v('\n                  '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                  '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n                    '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('value')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'navigation'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                    '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'Navigation'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                    '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('children')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('[')
                                  ]),
                                  t._v('\n                      '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n                        '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('value')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'menu'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                        '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'NavMenu 导航菜单'")
                                  ]),
                                  t._v('\n                      '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                      '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n                        '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('value')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'tabs'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                        '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'Tabs 标签页'")
                                  ]),
                                  t._v('\n                      '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                      '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n                        '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('value')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'breadcrumb'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                        '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'Breadcrumb 面包屑'")
                                  ]),
                                  t._v('\n                      '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                      '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n                        '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('value')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'dropdown'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                        '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'Dropdown 下拉菜单'")
                                  ]),
                                  t._v('\n                      '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                      '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n                        '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('value')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'steps'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                        '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'Steps 步骤条'")
                                  ]),
                                  t._v('\n                      '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v('\n                    '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(']')
                                  ]),
                                  t._v('\n                  '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                  '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n                    '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('value')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'others'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                    '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'Others'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                    '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('children')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('[')
                                  ]),
                                  t._v('\n                      '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n                        '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('value')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'dialog'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                        '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'Dialog 对话框'")
                                  ]),
                                  t._v('\n                      '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                      '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n                        '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('value')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'tooltip'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                        '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'Tooltip 文字提示'")
                                  ]),
                                  t._v('\n                      '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                      '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n                        '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('value')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'popover'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                        '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'Popover 弹出框'")
                                  ]),
                                  t._v('\n                      '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                      '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n                        '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('value')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'card'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                        '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'Card 卡片'")
                                  ]),
                                  t._v('\n                      '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                      '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n                        '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('value')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'carousel'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                        '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'Carousel 走马灯'")
                                  ]),
                                  t._v('\n                      '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                      '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n                        '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('value')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'collapse'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                        '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'Collapse 折叠面板'")
                                  ]),
                                  t._v('\n                      '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v('\n                    '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(']')
                                  ]),
                                  t._v('\n                  '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v('\n                '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(']')
                                  ]),
                                  t._v('\n              '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n              '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n                '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('value')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'ziyuan'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'资源'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('children')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('[')
                                  ]),
                                  t._v('\n                  '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n                    '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('value')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'axure'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                    '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'Axure Components'")
                                  ]),
                                  t._v('\n                  '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                  '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n                    '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('value')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'sketch'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                    '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'Sketch Templates'")
                                  ]),
                                  t._v('\n                  '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                  '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n                    '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('value')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'jiaohu'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                    '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'组件交互文档'")
                                  ]),
                                  t._v('\n                  '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v('\n                '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(']')
                                  ]),
                                  t._v('\n              '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v('\n            '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(']')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('span')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token number' } }, [
                                    t._v('12')
                                  ]),
                                  t._v('\n          '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n          '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('table')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n            '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'测试表格'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('span')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token number' } }, [
                                    t._v('24')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('type')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' types'),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  t._v('table'),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('tableDataOptions')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n              '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('input')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n                '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'输入框'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('type')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' types'),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  t._v('input'),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('span')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token number' } }, [
                                    t._v('12')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('showInTable')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token boolean' } }, [
                                    t._v('true')
                                  ]),
                                  t._v('\n              '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n              '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('select')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n                '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'下拉框'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('type')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' types'),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  t._v('select'),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('span')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token number' } }, [
                                    t._v('12')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('options')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                    t._v('this')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  t._v('dict'),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  t._v('selectArr'),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('showInTable')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token boolean' } }, [
                                    t._v('true')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n              '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n              '),
                                  s('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                    t._v('switch')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n                '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'开关'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('type')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' types'),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  t._v('switch'),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('span')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token number' } }, [
                                    t._v('12')
                                  ]),
                                  t._v('\n              '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n              '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('radio')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n                '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'单选框'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('type')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' types'),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  t._v('radio'),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('span')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token number' } }, [
                                    t._v('12')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('options')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                    t._v('this')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  t._v('dict'),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  t._v('selectArr\n              '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n              '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('checxbox')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n                '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'多选框'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('type')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' types'),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  t._v('checkBox'),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('span')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token number' } }, [
                                    t._v('12')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('options')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                    t._v('this')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  t._v('dict'),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  t._v('selectArr\n              '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n              '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('date')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n                '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'日期'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('type')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' types'),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  t._v('date'),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('span')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token number' } }, [
                                    t._v('12')
                                  ]),
                                  t._v('\n              '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n              '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('num')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n                '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'数字'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('required')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token boolean' } }, [
                                    t._v('true')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('type')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' types'),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  t._v('number'),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('span')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token number' } }, [
                                    t._v('12')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('showInTable')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token boolean' } }, [
                                    t._v('true')
                                  ]),
                                  t._v('\n              '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n              '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('time')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n                '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'时间'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('type')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' types'),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  t._v('time'),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('showInTable')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token boolean' } }, [
                                    t._v('true')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('span')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token number' } }, [
                                    t._v('12')
                                  ]),
                                  t._v('\n              '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v('\n            '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v('\n          '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n          '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('editor')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n            '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'富文本'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('type')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' types'),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  t._v('editor'),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('span')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token number' } }, [
                                    t._v('24')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('showInSearch')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token boolean' } }, [
                                    t._v('true')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('tooltip')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'富文本提示'")
                                  ]),
                                  t._v('\n          '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v('\n        '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v('\n      '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v('\n    '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v('\n  '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v('\n')
                                ]
                              )
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('</')
                                ]),
                                t._v('script')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('>')
                              ])
                            ]),
                            t._v('\n\n'),
                            s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('<')
                                ]),
                                t._v('style')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                                t._v('lang')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                s(
                                  'span',
                                  { pre: !0, attrs: { class: 'token punctuation attr-equals' } },
                                  [t._v('=')]
                                ),
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ]),
                                t._v('scss'),
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ])
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                                t._v('scoped')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('>')
                              ])
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token style' } }),
                            s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('</')
                                ]),
                                t._v('style')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('>')
                              ])
                            ]),
                            t._v('\n')
                          ])
                        ])
                      ])
                    ])
                  ],
                  2
                ),
                s('h2', { attrs: { id: 'attributes' } }, [
                  s('a', { staticClass: 'header-anchor', attrs: { href: '#attributes' } }, [
                    t._v('#')
                  ]),
                  t._v(' Attributes')
                ]),
                t._v(' '),
                s('table', [
                  s('thead', [
                    s('tr', [
                      s('th', { staticStyle: { 'text-align': 'center' } }, [t._v('参数')]),
                      t._v(' '),
                      s('th', { staticStyle: { 'text-align': 'center' } }, [t._v('说明')]),
                      t._v(' '),
                      s('th', { staticStyle: { 'text-align': 'center' } }, [t._v('类型')]),
                      t._v(' '),
                      s('th', { staticStyle: { 'text-align': 'center' } }, [t._v('可选值')]),
                      t._v(' '),
                      s('th', { staticStyle: { 'text-align': 'center' } }, [t._v('默认值')])
                    ])
                  ]),
                  t._v(' '),
                  s('tbody', [
                    s('tr', [
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('v-model')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('表单数据')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('object')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('—')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('{}')])
                    ]),
                    t._v(' '),
                    s('tr', [
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('drawerWidth')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('抽屉的宽度')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('number')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('—')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('400')])
                    ]),
                    t._v(' '),
                    s('tr', [
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('visible.sync')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('是否显示抽屉')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('boolean')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('—')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('false')])
                    ]),
                    t._v(' '),
                    s('tr', [
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('drawerOptions')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('官方支持的抽屉的 options')
                      ]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('object')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('—')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('{}')])
                    ]),
                    t._v(' '),
                    s('tr', [
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('title')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('抽屉标题')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('string')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('—')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('—')])
                    ]),
                    t._v(' '),
                    s('tr', [
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('formOptions')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('表单的 options')
                      ]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('object')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('—')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('{}')])
                    ]),
                    t._v(' '),
                    s('tr', [
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('isRow')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('是否栅格布局')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('boolean')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('—')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('false')])
                    ]),
                    t._v(' '),
                    s('tr', [
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('columns')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('表单配置项,只显示 showInSearch:true 的表单(详情见 CustomForm 说明)')
                      ]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('object')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('—')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('{}')])
                    ]),
                    t._v(' '),
                    s('tr', [
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('searchColumns')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('表单配置项,全部显示')
                      ]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('object')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('—')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('{}')])
                    ]),
                    t._v(' '),
                    s('tr', [
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('showFooter')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('是否显示底部重置查询按钮')
                      ]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('boolean')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('—')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('true')])
                    ]),
                    t._v(' '),
                    s('tr', [
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('searchBtnText')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('查询按钮文字')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('string')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('—')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('查询')])
                    ]),
                    t._v(' '),
                    s('tr', [
                      s('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('searchBtnProps')
                      ]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('查询按钮 options')
                      ]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('object')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('—')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('{}')])
                    ]),
                    t._v(' '),
                    s('tr', [
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('resetBtnText')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('重置按钮文字')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('string')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('—')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('重置')])
                    ]),
                    t._v(' '),
                    s('tr', [
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('resetBtnProps')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('重置按钮 options')
                      ]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('object')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('—')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('{}')])
                    ]),
                    t._v(' '),
                    s('tr', [
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('showReset')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('是否显示重置按钮')
                      ]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('boolean')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('—')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('true')])
                    ])
                  ])
                ]),
                t._v(' '),
                s('h2', { attrs: { id: 'slot' } }, [
                  s('a', { staticClass: 'header-anchor', attrs: { href: '#slot' } }, [t._v('#')]),
                  t._v(' Slot')
                ]),
                t._v(' '),
                s('table', [
                  s('thead', [
                    s('tr', [
                      s('th', { staticStyle: { 'text-align': 'center' } }, [t._v('name')]),
                      t._v(' '),
                      s('th', { staticStyle: { 'text-align': 'center' } }, [t._v('说明')])
                    ])
                  ]),
                  t._v(' '),
                  s('tbody', [
                    s('tr', [
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('footer')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('自定义 footer')])
                    ]),
                    t._v(' '),
                    s('tr', [
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('before')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('重置按钮前面的内容')
                      ])
                    ]),
                    t._v(' '),
                    s('tr', [
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('middle')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('重置按钮和查询按钮中间的内容')
                      ])
                    ]),
                    t._v(' '),
                    s('tr', [
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('after')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('查询按钮后面的内容')
                      ])
                    ])
                  ])
                ]),
                t._v(' '),
                s('h2', { attrs: { id: 'events' } }, [
                  s('a', { staticClass: 'header-anchor', attrs: { href: '#events' } }, [t._v('#')]),
                  t._v(' Events')
                ]),
                t._v(' '),
                s('table', [
                  s('thead', [
                    s('tr', [
                      s('th', { staticStyle: { 'text-align': 'center' } }, [t._v('事件名称')]),
                      t._v(' '),
                      s('th', { staticStyle: { 'text-align': 'center' } }, [t._v('说明')]),
                      t._v(' '),
                      s('th', { staticStyle: { 'text-align': 'center' } }, [t._v('回调参数')])
                    ])
                  ]),
                  t._v(' '),
                  s('tbody', [
                    s('tr', [
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('search')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('表单查询事件')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('—')])
                    ]),
                    t._v(' '),
                    s('tr', [
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('reset')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('表单重置事件')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('—')])
                    ])
                  ])
                ])
              ],
              1
            )
          },
          [],
          !1,
          null,
          null,
          null
        )
      a.default = x.exports
    }
  }
])
