;(window.webpackJsonp = window.webpackJsonp || []).push([
  [15],
  {
    577: function(t, a, s) {
      'use strict'
      s.r(a)
      var e,
        n,
        r = s(2),
        p = {
          name: 'component-doc',
          components: {
            'render-demo-0':
              ((e = {
                input: 'input',
                select: 'select',
                number: 'number',
                checkBox: 'checkBox',
                check: 'check',
                radio: 'radio',
                date: 'date',
                switch: 'switch',
                title: 'title',
                time: 'time',
                slider: 'slider',
                rate: 'rate',
                color: 'color',
                cascader: 'cascader',
                table: 'table',
                editor: 'editor'
              }),
              (n = {
                data: function() {
                  return {
                    dict: {
                      selectArr: [
                        { name: 'select-1', value: 1 },
                        { name: 'select-2', value: 2 }
                      ]
                    },
                    tableData: [
                      {
                        input: '1',
                        select: 1,
                        radio: 1,
                        checxbox: [1],
                        date: '2021-11-10',
                        num: 1,
                        time: '12:23:00',
                        slider: 1,
                        rate: 1
                      },
                      {
                        input: '1',
                        select: 1,
                        radio: 1,
                        checxbox: [1],
                        date: '2021-11-10',
                        num: 1,
                        time: '12:23:00',
                        slider: 1,
                        rate: 1
                      },
                      {
                        input: '1',
                        select: 1,
                        radio: 1,
                        checxbox: [1],
                        date: '2021-11-10',
                        num: 1,
                        time: '12:23:00',
                        slider: 1,
                        rate: 1
                      }
                    ],
                    listLoading: !1,
                    columns: [],
                    multipleSelection: []
                  }
                },
                created: function() {
                  this.columns = this.getMetaData()
                },
                methods: {
                  click: function() {
                    console.log(111)
                  },
                  handleEdit: function(t) {
                    console.log(t)
                  },
                  handleDelete: function(t) {
                    console.log(t)
                  },
                  handleSelectionChange: function(t) {
                    console.log(t), (this.multipleSelection = t)
                  },
                  getMetaData: function() {
                    var t = this
                    return [
                      { key: 'title', label: '基本信息', type: e.title },
                      {
                        key: 'input',
                        label: '输入框',
                        defaultValue: '测试',
                        type: e.input,
                        span: 12,
                        showInSearch: !0,
                        formItemOption: {},
                        showInTable: !0,
                        tooltip: '测试测试是处生成'
                      },
                      {
                        label: '多选框',
                        defaultValue: [1],
                        key: 'checxbox',
                        type: e.checkBox,
                        span: 12,
                        options: this.dict.selectArr,
                        showInSearch: !0,
                        showInTable: !0,
                        showFormat: function(a) {
                          return t.getArrayValue(t.dict.selectArr, a)
                        },
                        children: [
                          {
                            label: '日期',
                            type: e.date,
                            key: 'date',
                            defaultValue: '2021-12-21',
                            span: 10,
                            showInSearch: !0,
                            showInTable: !0
                          },
                          {
                            label: '数字',
                            key: 'num',
                            type: e.number,
                            defaultValue: 11,
                            span: 10,
                            showInTable: !0
                          },
                          {
                            label: '时间',
                            key: 'time',
                            type: e.time,
                            defaultValue: '12:23:00',
                            span: 12,
                            showInSearch: !0,
                            showInTable: !0
                          }
                        ]
                      },
                      {
                        label: '滑块',
                        key: 'slider',
                        type: e.slider,
                        defaultValue: 10,
                        span: 12,
                        showInTable: !0
                      },
                      {
                        label: '评分',
                        key: 'rate',
                        type: e.rate,
                        defaultValue: 1,
                        span: 12,
                        showInTable: !0
                      },
                      { label: '颜色', key: 'color', type: e.color, span: 12 },
                      {
                        label: '级联',
                        key: 'cascader',
                        type: e.cascader,
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
                      { label: '区域', key: 'area', type: e.area, showInSearch: !0, span: 12 },
                      { label: '测试表格', key: 'table', span: 24, type: e.table }
                    ]
                  }
                }
              }),
              Object(r.a)(
                {
                  render: function() {
                    var t = this.$createElement,
                      a = this._self._c || t
                    return a(
                      'div',
                      [
                        [
                          a(
                            'div',
                            [
                              a(
                                'el-pro-table',
                                {
                                  attrs: {
                                    data: this.tableData,
                                    loading: this.listLoading,
                                    selection: '',
                                    columns: this.columns,
                                    'operation-options': { width: 200 },
                                    'update-func': this.handleEdit,
                                    'delete-func': this.handleDelete,
                                    'table-options': {
                                      rowStyle: { height: '50px' },
                                      hasOperation: !0
                                    }
                                  },
                                  on: { 'selection-change': this.handleSelectionChange }
                                },
                                [
                                  a(
                                    'div',
                                    { attrs: { slot: 'inputHeader' }, slot: 'inputHeader' },
                                    [a('el-button', [this._v('测试')])],
                                    1
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        ]
                      ],
                      2
                    )
                  },
                  staticRenderFns: []
                },
                n
              ))
          }
        },
        o = s(6),
        l = Object(o.a)(
          p,
          function() {
            var t = this,
              a = t.$createElement,
              s = t._self._c || a
            return s(
              'ContentSlotsDistributor',
              { attrs: { 'slot-key': t.$parent.slotKey } },
              [
                s('h1', { attrs: { id: '通用表格-elprotable' } }, [
                  s(
                    'a',
                    { staticClass: 'header-anchor', attrs: { href: '#通用表格-elprotable' } },
                    [t._v('#')]
                  ),
                  t._v(' 通用表格-ElProTable')
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
                                t._v('div')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('>')
                              ])
                            ]),
                            t._v('\n    '),
                            s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('<')
                                ]),
                                t._v('el-pro-table')
                              ]),
                              t._v('\n      '),
                              s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                                t._v(':data')
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
                                t._v('tableData'),
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ])
                              ]),
                              t._v('\n      '),
                              s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                                t._v(':loading')
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
                                t._v('listLoading'),
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ])
                              ]),
                              t._v('\n      '),
                              s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                                t._v('selection')
                              ]),
                              t._v('\n      '),
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
                              t._v('\n      '),
                              s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                                t._v(':operation-options')
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
                                t._v('{ width: 200 }'),
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ])
                              ]),
                              t._v('\n      '),
                              s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                                t._v(':update-func')
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
                                t._v('handleEdit'),
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ])
                              ]),
                              t._v('\n      '),
                              s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                                t._v(':delete-func')
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
                                t._v('handleDelete'),
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ])
                              ]),
                              t._v('\n      '),
                              s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                                t._v(':table-options')
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
                                t._v('{ rowStyle: { height: '),
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v("'")
                                ]),
                                t._v('50px'),
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v("'")
                                ]),
                                t._v(' }, hasOperation: true }'),
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ])
                              ]),
                              t._v('\n      '),
                              s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                                t._v('@selection-change')
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
                                t._v('handleSelectionChange'),
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ])
                              ]),
                              t._v('\n    '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('>')
                              ])
                            ]),
                            t._v('\n      '),
                            s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('<')
                                ]),
                                t._v('div')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                                t._v('slot')
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
                                t._v('inputHeader'),
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ])
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('>')
                              ])
                            ]),
                            t._v('\n        '),
                            s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('<')
                                ]),
                                t._v('el-button')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('>')
                              ])
                            ]),
                            t._v('测试'),
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
                            t._v('\n      '),
                            s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('</')
                                ]),
                                t._v('div')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('>')
                              ])
                            ]),
                            t._v('\n    '),
                            s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('</')
                                ]),
                                t._v('el-pro-table')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('>')
                              ])
                            ]),
                            t._v('\n  '),
                            s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('</')
                                ]),
                                t._v('div')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('>')
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
                                    [t._v('tableData')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('[')
                                  ]),
                                  t._v('\n          '),
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
                                    [t._v('input')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'1'")
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
                                    [t._v('select')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token number' } }, [
                                    t._v('1')
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
                                    [t._v('radio')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token number' } }, [
                                    t._v('1')
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
                                    [t._v('checxbox')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('[')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token number' } }, [
                                    t._v('1')
                                  ]),
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
                                    [t._v('date')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'2021-11-10'")
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
                                    [t._v('num')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token number' } }, [
                                    t._v('1')
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
                                    [t._v('time')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'12:23:00'")
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
                                    [t._v('slider')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token number' } }, [
                                    t._v('1')
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
                                    [t._v('rate')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token number' } }, [
                                    t._v('1')
                                  ]),
                                  t._v('\n          '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n          '),
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
                                    [t._v('input')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'1'")
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
                                    [t._v('select')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token number' } }, [
                                    t._v('1')
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
                                    [t._v('radio')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token number' } }, [
                                    t._v('1')
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
                                    [t._v('checxbox')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('[')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token number' } }, [
                                    t._v('1')
                                  ]),
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
                                    [t._v('date')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'2021-11-10'")
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
                                    [t._v('num')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token number' } }, [
                                    t._v('1')
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
                                    [t._v('time')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'12:23:00'")
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
                                    [t._v('slider')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token number' } }, [
                                    t._v('1')
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
                                    [t._v('rate')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token number' } }, [
                                    t._v('1')
                                  ]),
                                  t._v('\n          '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n          '),
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
                                    [t._v('input')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'1'")
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
                                    [t._v('select')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token number' } }, [
                                    t._v('1')
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
                                    [t._v('radio')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token number' } }, [
                                    t._v('1')
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
                                    [t._v('checxbox')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('[')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token number' } }, [
                                    t._v('1')
                                  ]),
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
                                    [t._v('date')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'2021-11-10'")
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
                                    [t._v('num')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token number' } }, [
                                    t._v('1')
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
                                    [t._v('time')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'12:23:00'")
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
                                    [t._v('slider')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token number' } }, [
                                    t._v('1')
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
                                    [t._v('rate')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token number' } }, [
                                    t._v('1')
                                  ]),
                                  t._v('\n          '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v('\n        '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(']')
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
                                    [t._v('listLoading')]
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
                                    [t._v('columns')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('[')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(']')
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
                                    [t._v('multipleSelection')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('[')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(']')
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
                                    t._v('click')
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
                                  s('span', { pre: !0, attrs: { class: 'token number' } }, [
                                    t._v('111')
                                  ]),
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
                                    t._v('handleEdit')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('(')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token parameter' } }, [
                                    t._v('row')
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
                                  t._v('row'),
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
                                    t._v('handleDelete')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('(')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token parameter' } }, [
                                    t._v('row')
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
                                  t._v('row'),
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
                                    t._v('handleSelectionChange')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('(')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token parameter' } }, [
                                    t._v('val')
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
                                  t._v('val'),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(')')
                                  ]),
                                  t._v('\n        '),
                                  s('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                    t._v('this')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  t._v('multipleSelection '),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v('=')
                                  ]),
                                  t._v(' val\n      '),
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
                                    t._v('[')
                                  ]),
                                  t._v('\n          '),
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
                                    [t._v('key')]
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
                                    [t._v('key')]
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
                                    [t._v('defaultValue')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'测试'")
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
                                    t._v("'测试测试是处生成'")
                                  ]),
                                  t._v('\n            '),
                                  s('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                    t._v('// children: [')
                                  ]),
                                  t._v('\n            '),
                                  s('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                    t._v('//   {')
                                  ]),
                                  t._v('\n            '),
                                  s('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                    t._v('//     label: "下拉框",')
                                  ]),
                                  t._v('\n            '),
                                  s('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                    t._v('//     key: "select",')
                                  ]),
                                  t._v('\n            '),
                                  s('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                    t._v('//     defaultValue: 1,')
                                  ]),
                                  t._v('\n            '),
                                  s('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                    t._v('//     type: types.select,')
                                  ]),
                                  t._v('\n            '),
                                  s('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                    t._v('//     span: 12,')
                                  ]),
                                  t._v('\n            '),
                                  s('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                    t._v('//     options: this.dict.selectArr,')
                                  ]),
                                  t._v('\n            '),
                                  s('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                    t._v('//     showInSearch: true,')
                                  ]),
                                  t._v('\n            '),
                                  s('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                    t._v('//     showInTable: true,')
                                  ]),
                                  t._v('\n            '),
                                  s('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                    t._v('//     showFormat: (val) => {')
                                  ]),
                                  t._v('\n            '),
                                  s('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                    t._v(
                                      '//       return this.getArrayValue(this.dict.selectArr, val);'
                                    )
                                  ]),
                                  t._v('\n            '),
                                  s('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                    t._v('//     },')
                                  ]),
                                  t._v('\n            '),
                                  s('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                    t._v('//   },')
                                  ]),
                                  t._v('\n            '),
                                  s('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                    t._v('//   {')
                                  ]),
                                  t._v('\n            '),
                                  s('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                    t._v('//     label: "开关",')
                                  ]),
                                  t._v('\n            '),
                                  s('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                    t._v('//     key: "switch",')
                                  ]),
                                  t._v('\n            '),
                                  s('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                    t._v('//     type: types.switch,')
                                  ]),
                                  t._v('\n            '),
                                  s('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                    t._v('//     span: 12,')
                                  ]),
                                  t._v('\n            '),
                                  s('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                    t._v('//   },')
                                  ]),
                                  t._v('\n            '),
                                  s('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                    t._v('//   {')
                                  ]),
                                  t._v('\n            '),
                                  s('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                    t._v('//     label: "单选框",')
                                  ]),
                                  t._v('\n            '),
                                  s('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                    t._v('//     defaultValue: 1,')
                                  ]),
                                  t._v('\n            '),
                                  s('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                    t._v('//     key: "radio",')
                                  ]),
                                  t._v('\n            '),
                                  s('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                    t._v('//     type: types.radio,')
                                  ]),
                                  t._v('\n            '),
                                  s('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                    t._v('//     span: 12,')
                                  ]),
                                  t._v('\n            '),
                                  s('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                    t._v('//     options: this.dict.selectArr,')
                                  ]),
                                  t._v('\n            '),
                                  s('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                    t._v('//     showInSearch: true,')
                                  ]),
                                  t._v('\n            '),
                                  s('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                    t._v('//     showInTable: true,')
                                  ]),
                                  t._v('\n            '),
                                  s('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                    t._v('//     showFormat: (val) => {')
                                  ]),
                                  t._v('\n            '),
                                  s('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                    t._v(
                                      '//       return this.getArrayValue(this.dict.selectArr, val);'
                                    )
                                  ]),
                                  t._v('\n            '),
                                  s('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                    t._v('//     },')
                                  ]),
                                  t._v('\n            '),
                                  s('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                    t._v('//   },')
                                  ]),
                                  t._v('\n            '),
                                  s('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                    t._v('// ],')
                                  ]),
                                  t._v('\n          '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n          '),
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
                                    [t._v('defaultValue')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('[')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token number' } }, [
                                    t._v('1')
                                  ]),
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
                                    [t._v('key')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'checxbox'")
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
                                  t._v('\n            '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token function-variable function' }
                                    },
                                    [t._v('showFormat')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('(')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token parameter' } }, [
                                    t._v('val')
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
                                  t._v('\n              '),
                                  s('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                    t._v('return')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                    t._v('this')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token function' } }, [
                                    t._v('getArrayValue')
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
                                  t._v('dict'),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  t._v('selectArr'),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v(' val'),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(')')
                                  ]),
                                  t._v('\n            '),
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
                                    [t._v('children')]
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
                                    [t._v('key')]
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
                                  t._v('\n                '),
                                  s(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('defaultValue')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'2021-12-21'")
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
                                    t._v('10')
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
                                    [t._v('key')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'num'")
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
                                    [t._v('defaultValue')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token number' } }, [
                                    t._v('11')
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
                                    t._v('10')
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
                                    [t._v('key')]
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
                                    [t._v('defaultValue')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'12:23:00'")
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
                                  t._v('\n            '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(']')
                                  ]),
                                  t._v('\n          '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n\n          '),
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
                                    [t._v('key')]
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
                                    [t._v('defaultValue')]
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
                                  t._v('\n          '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n          '),
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
                                    [t._v('key')]
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
                                    [t._v('defaultValue')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token number' } }, [
                                    t._v('1')
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
                                    [t._v('key')]
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
                                    [t._v('key')]
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
                                    t._v("'区域'")
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
                                    [t._v('key')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'area'")
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
                                  t._v('area'),
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
                                    [t._v('key')]
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
                                  t._v('table\n          '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v('\n        '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(']')
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
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('columns')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v(
                          '表格配置项,只显示 showInTable:true 的表格(详情见 CustomForm 说明) 多级表头使用数组类型,children 是子项'
                        )
                      ]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('object/array')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('—')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('{}/[]')])
                    ]),
                    t._v(' '),
                    s('tr', [
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('tableColumns')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('表格配置项,全部显示')
                      ]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('object/array')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('—')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('{}/[]')])
                    ]),
                    t._v(' '),
                    s('tr', [
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('loading')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('表格 loading')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('boolean')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('—')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('false')])
                    ]),
                    t._v(' '),
                    s('tr', [
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('selection')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v(
                          '仅对 type=selection 的列有效，类型为 Boolean，为 true 则会在数据更新之后保留之前选中的数据（需指定 row-key）'
                        )
                      ]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('boolean')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('—')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('false')])
                    ]),
                    t._v(' '),
                    s('tr', [
                      s('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('reserveSelection')
                      ]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('是否显示展开收起文字')
                      ]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('boolean')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('—')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('false')])
                    ]),
                    t._v(' '),
                    s('tr', [
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('data')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('表格数据')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('array')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('—')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('[]')])
                    ]),
                    t._v(' '),
                    s('tr', [
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('showOperation')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('收起后显示的表单数量')
                      ]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('string,number')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('—')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('2')])
                    ]),
                    t._v(' '),
                    s('tr', [
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('autoHeight')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('是否自动计算表格高度（外层容器为 #content-wrapper）')
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
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('tableOptions')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('表格配置项,例如 hasOperation:ture,显示操作栏')
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
                      s('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('operationOptions')
                      ]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v(
                          '操作栏的配置项，默认{label: "操作",fixed: "right",width: "150",align: "center",}'
                        )
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
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('updateFunc')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('修改事件')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('function(row,index)')
                      ]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('—')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('—')])
                    ]),
                    t._v(' '),
                    s('tr', [
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('deleteFunc')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('删除事件')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('function(row,index)')
                      ]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('—')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('—')])
                    ]),
                    t._v(' '),
                    s('tr', [
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('updateText')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('修改按钮文字')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('string')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('—')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('修改')])
                    ]),
                    t._v(' '),
                    s('tr', [
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('deleteText')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('删除按钮文字')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('string')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('—')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('删除')])
                    ]),
                    t._v(' '),
                    s('tr', [
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('updateProps')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('修改按钮 props')
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
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('deleteProps')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('删除按钮 props')
                      ]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('object')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('—')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('{}')])
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
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('${key}Header')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('表单头部内容')])
                    ]),
                    t._v(' '),
                    s('tr', [
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('${key}')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('表单内容')])
                    ]),
                    t._v(' '),
                    s('tr', [
                      s('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('operationColumn')
                      ]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('操作栏内容')])
                    ]),
                    t._v(' '),
                    s('tr', [
                      s('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('operationBefore')
                      ]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('修改删除按钮之前的内容')
                      ])
                    ]),
                    t._v(' '),
                    s('tr', [
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('autoOperation')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('修改删除按钮的内容')
                      ])
                    ]),
                    t._v(' '),
                    s('tr', [
                      s('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('operationMiddle')
                      ]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('修改删除按钮之间的内容')
                      ])
                    ]),
                    t._v(' '),
                    s('tr', [
                      s('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('operationAfter')
                      ]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('修改删除按钮之后的内容')
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
                      s('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('clearSelection')
                      ]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('用于多选表格，清空用户的选择')
                      ]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('—')])
                    ]),
                    t._v(' '),
                    s('tr', [
                      s('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('toggleRowSelection')
                      ]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v(
                          '用于多选表格，切换某一行的选中状态，如果使用了第二个参数，则是设置这一行选中与否（selected 为 true 则选中）'
                        )
                      ]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('row, selected')])
                    ]),
                    t._v(' '),
                    s('tr', [
                      s('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('toggleAllSelection')
                      ]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('用于多选表格，切换所有行的选中状态')
                      ]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('—')])
                    ]),
                    t._v(' '),
                    s('tr', [
                      s('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('toggleRowExpansion')
                      ]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v(
                          '用于可展开表格与树形表格，切换某一行的展开状态，如果使用了第二个参数，则是设置这一行展开与否（expanded 为 true 则展开）'
                        )
                      ]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('row, expanded')])
                    ]),
                    t._v(' '),
                    s('tr', [
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('setCurrentRow')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v(
                          '用于单选表格，设定某一行为选中行，如果调用时不加参数，则会取消目前高亮行的选中状态。'
                        )
                      ]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('row')])
                    ]),
                    t._v(' '),
                    s('tr', [
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('clearFilter')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v(
                          '不传入参数时用于清空所有过滤条件，数据会恢复成未过滤的状态，也可传入由 columnKey 组成的数组以清除指定列的过滤条件'
                        )
                      ]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('columnKey')])
                    ]),
                    t._v(' '),
                    s('tr', [
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('clearSort')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('用于清空排序条件，数据会恢复成未排序的状态')
                      ]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('—')])
                    ]),
                    t._v(' '),
                    s('tr', [
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('doLayout')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v(
                          '对 Table 进行重新布局。当 Table 或其祖先元素由隐藏切换为显示时，可能需要调用此方法'
                        )
                      ]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('—')])
                    ]),
                    t._v(' '),
                    s('tr', [
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('sort')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('手动对 Table 进行排序。参数'),
                        s('code', [t._v('prop')]),
                        t._v('属性指定排序列，'),
                        s('code', [t._v('order')]),
                        t._v('指定排序顺序。')
                      ]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('prop: string, order: string')
                      ])
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
      a.default = l.exports
    }
  }
])
