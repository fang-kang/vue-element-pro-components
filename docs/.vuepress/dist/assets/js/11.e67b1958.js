;(window.webpackJsonp = window.webpackJsonp || []).push([
  [11],
  {
    576: function (t, a, s) {
      'use strict'
      s.r(a)
      var n,
        e = s(2),
        r = {
          name: 'component-doc',
          components: {
            'render-demo-0':
              ((n = {
                data: function () {
                  return { dialogVisible: !1 }
                },
                methods: {
                  handleClose: function (t) {
                    this.$confirm('确认关闭？')
                      .then(function (a) {
                        t()
                      })
                      .catch(function (t) {})
                  },
                  handleClosed: function () {
                    console.log('Dialog 关闭动画结束时的回调,可以用来清除表单的检验和信息等')
                  }
                }
              }),
              Object(e.a)(
                {
                  render: function () {
                    var t = this,
                      a = t.$createElement,
                      s = t._self._c || a
                    return s(
                      'div',
                      [
                        [
                          s(
                            'div',
                            [
                              s(
                                'el-button',
                                {
                                  attrs: { type: 'text' },
                                  on: {
                                    click: function (a) {
                                      t.dialogVisible = !0
                                    }
                                  }
                                },
                                [t._v('点击打开 ElProDialog')]
                              ),
                              t._v(' '),
                              s(
                                'el-pro-dialog',
                                {
                                  attrs: {
                                    title: '提示',
                                    'dialog-options': {
                                      width: '30%',
                                      showFullscreen: !0,
                                      draggable: !0,
                                      beforeClose: t.handleClose
                                    }
                                  },
                                  on: {
                                    ok: function (a) {
                                      t.dialogVisible = !1
                                    },
                                    closed: t.handleClosed
                                  },
                                  model: {
                                    value: t.dialogVisible,
                                    callback: function (a) {
                                      t.dialogVisible = a
                                    },
                                    expression: 'dialogVisible'
                                  }
                                },
                                [s('span', [t._v('这是一段信息')])]
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
              )),
            'render-demo-1': Object(e.a)(
              {
                render: function () {
                  var t = this,
                    a = t.$createElement,
                    s = t._self._c || a
                  return s(
                    'div',
                    [
                      [
                        s(
                          'div',
                          [
                            s(
                              'el-button',
                              {
                                attrs: { type: 'text' },
                                on: {
                                  click: function (a) {
                                    t.dialogVisible = !0
                                  }
                                }
                              },
                              [t._v('点击打开 ElProDialog')]
                            ),
                            t._v(' '),
                            s(
                              'el-pro-dialog',
                              {
                                attrs: { title: '提示', 'dialog-options': { center: !0 } },
                                on: {
                                  ok: function (a) {
                                    t.dialogVisible = !1
                                  }
                                },
                                model: {
                                  value: t.dialogVisible,
                                  callback: function (a) {
                                    t.dialogVisible = a
                                  },
                                  expression: 'dialogVisible'
                                }
                              },
                              [
                                s('div', { staticStyle: { height: '1000px' } }, [
                                  t._v('超出高度了')
                                ])
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
              {
                data: function () {
                  return { dialogVisible: !1 }
                }
              }
            ),
            'render-demo-2': Object(e.a)(
              {
                render: function () {
                  var t = this,
                    a = t.$createElement,
                    s = t._self._c || a
                  return s(
                    'div',
                    [
                      [
                        s(
                          'div',
                          [
                            s(
                              'el-button',
                              {
                                attrs: { type: 'text' },
                                on: {
                                  click: function (a) {
                                    t.dialogVisible = !0
                                  }
                                }
                              },
                              [t._v('点击打开 ElProDialog')]
                            ),
                            t._v(' '),
                            s(
                              'el-pro-dialog',
                              {
                                attrs: {
                                  title: '加载中',
                                  loading: t.loading,
                                  'dialog-options': { width: '30%' }
                                },
                                on: {
                                  ok: function (a) {
                                    t.dialogVisible = !1
                                  }
                                },
                                model: {
                                  value: t.dialogVisible,
                                  callback: function (a) {
                                    t.dialogVisible = a
                                  },
                                  expression: 'dialogVisible'
                                }
                              },
                              [s('div', [t._v('加载中的时候需要loading...')])]
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
              {
                data: function () {
                  return { dialogVisible: !1, loading: !0 }
                }
              }
            ),
            'render-demo-3': Object(e.a)(
              {
                render: function () {
                  var t = this,
                    a = t.$createElement,
                    s = t._self._c || a
                  return s(
                    'div',
                    [
                      [
                        s(
                          'div',
                          [
                            s(
                              'el-button',
                              {
                                attrs: { type: 'text' },
                                on: {
                                  click: function (a) {
                                    t.dialogVisible = !0
                                  }
                                }
                              },
                              [t._v('点击打开 ElProDialog')]
                            ),
                            t._v(' '),
                            s(
                              'el-pro-dialog',
                              {
                                attrs: {
                                  title: '标题的插槽',
                                  'confirm-btn-props': { disabled: !0, icon: 'el-icon-check' },
                                  'dialog-options': { width: '30' }
                                },
                                on: {
                                  ok: function (a) {
                                    t.dialogVisible = !1
                                  }
                                },
                                scopedSlots: t._u([
                                  {
                                    key: 'nameBefore',
                                    fn: function () {
                                      return [
                                        s('i', {
                                          staticClass: 'el-icon-warning',
                                          staticStyle: { 'margin-right': '5px' }
                                        })
                                      ]
                                    },
                                    proxy: !0
                                  },
                                  {
                                    key: 'nameAfter',
                                    fn: function () {
                                      return [
                                        s('i', {
                                          staticClass: 'el-icon-circle-close',
                                          staticStyle: { 'margin-left': '5px' }
                                        })
                                      ]
                                    },
                                    proxy: !0
                                  }
                                ]),
                                model: {
                                  value: t.dialogVisible,
                                  callback: function (a) {
                                    t.dialogVisible = a
                                  },
                                  expression: 'dialogVisible'
                                }
                              },
                              [t._v(' '), t._v(' '), s('div', [t._v('弹窗内容')])]
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
              {
                data: function () {
                  return { dialogVisible: !1 }
                }
              }
            ),
            'render-demo-4': Object(e.a)(
              {
                render: function () {
                  var t = this,
                    a = t.$createElement,
                    s = t._self._c || a
                  return s(
                    'div',
                    [
                      [
                        s(
                          'div',
                          [
                            s(
                              'el-button',
                              {
                                attrs: { type: 'text' },
                                on: {
                                  click: function (a) {
                                    t.dialogVisible = !0
                                  }
                                }
                              },
                              [t._v('点击打开 ElProDialog')]
                            ),
                            t._v(' '),
                            s(
                              'el-pro-dialog',
                              {
                                attrs: { title: '标题', 'dialog-options': { width: '30' } },
                                model: {
                                  value: t.dialogVisible,
                                  callback: function (a) {
                                    t.dialogVisible = a
                                  },
                                  expression: 'dialogVisible'
                                }
                              },
                              [
                                s('div', [t._v('弹窗内容')]),
                                t._v(' '),
                                s('div', { attrs: { slot: 'footer' }, slot: 'footer' }, [
                                  t._v('\n         我是底部footer内容\n      ')
                                ])
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
              {
                data: function () {
                  return { dialogVisible: !1 }
                }
              }
            ),
            'render-demo-5': Object(e.a)(
              {
                render: function () {
                  var t = this,
                    a = t.$createElement,
                    s = t._self._c || a
                  return s(
                    'div',
                    [
                      s(
                        'el-button',
                        {
                          attrs: { type: 'text' },
                          on: {
                            click: function (a) {
                              t.dialogTableVisible = !0
                            }
                          }
                        },
                        [t._v('打开嵌套表格的 Dialog')]
                      ),
                      t._v(' '),
                      s(
                        'el-pro-dialog',
                        {
                          attrs: { title: '收货地址' },
                          on: {
                            ok: function (a) {
                              t.dialogTableVisible = !1
                            }
                          },
                          model: {
                            value: t.dialogTableVisible,
                            callback: function (a) {
                              t.dialogTableVisible = a
                            },
                            expression: 'dialogTableVisible'
                          }
                        },
                        [s('el-pro-table', { attrs: { data: t.gridData, columns: t.columns } })],
                        1
                      ),
                      t._v(' '),
                      s(
                        'el-button',
                        {
                          attrs: { type: 'text' },
                          on: {
                            click: function (a) {
                              t.dialogFormVisible = !0
                            }
                          }
                        },
                        [t._v('打开嵌套表单的 Dialog')]
                      ),
                      t._v(' '),
                      s(
                        'el-pro-dialog',
                        {
                          attrs: { title: '收货地址' },
                          on: {
                            ok: function (a) {
                              t.dialogFormVisible = !1
                            }
                          },
                          model: {
                            value: t.dialogFormVisible,
                            callback: function (a) {
                              t.dialogFormVisible = a
                            },
                            expression: 'dialogFormVisible'
                          }
                        },
                        [
                          s('el-pro-form', {
                            attrs: { columns: t.columns, 'form-options': { labelWidth: '120px' } },
                            model: {
                              value: t.form,
                              callback: function (a) {
                                t.form = a
                              },
                              expression: 'form'
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                },
                staticRenderFns: []
              },
              {
                data: function () {
                  return {
                    columns: {
                      name: {
                        label: '活动名称',
                        showInTable: !0,
                        tableColumnOption: { width: 200 }
                      },
                      region: {
                        label: '活动区域',
                        type: 'select',
                        options: [
                          { name: '区域一', value: 1 },
                          { name: '区域二', value: 2 }
                        ]
                      },
                      date: {
                        label: '日期',
                        type: 'date',
                        showInTable: !0,
                        tableColumnOption: { width: 150 }
                      },
                      address: { label: '地址', showInTable: !0, formColumnShow: !1 }
                    },
                    gridData: [
                      {
                        date: '2016-05-02',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1518 弄'
                      },
                      {
                        date: '2016-05-04',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1518 弄'
                      },
                      {
                        date: '2016-05-01',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1518 弄'
                      },
                      {
                        date: '2016-05-03',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1518 弄'
                      },
                      {
                        date: '2016-05-03',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1518 弄'
                      }
                    ],
                    dialogTableVisible: !1,
                    dialogFormVisible: !1,
                    form: { name: '' }
                  }
                }
              }
            )
          }
        },
        p = s(6),
        o = Object(p.a)(
          r,
          function () {
            var t = this,
              a = t.$createElement,
              s = t._self._c || a
            return s(
              'ContentSlotsDistributor',
              { attrs: { 'slot-key': t.$parent.slotKey } },
              [
                s('h1', { attrs: { id: '通用对话框-elprodialog' } }, [
                  s(
                    'a',
                    { staticClass: 'header-anchor', attrs: { href: '#通用对话框-elprodialog' } },
                    [t._v('#')]
                  ),
                  t._v(' 通用对话框-ElProDialog')
                ]),
                t._v(' '),
                s('p', [
                  t._v('对 element-ui 的 dialog 组件进行封装，扩展拖拽，全屏，自适应高度等功能')
                ]),
                t._v(' '),
                s('h2', { attrs: { id: '示例' } }, [
                  s('a', { staticClass: 'header-anchor', attrs: { href: '#示例' } }, [t._v('#')]),
                  t._v(' 示例')
                ]),
                t._v(' '),
                s('h3', { attrs: { id: '基本用法-拖拽-全屏' } }, [
                  s('a', { staticClass: 'header-anchor', attrs: { href: '#基本用法-拖拽-全屏' } }, [
                    t._v('#')
                  ]),
                  t._v(' 基本用法&拖拽&全屏')
                ]),
                t._v(' '),
                s(
                  'demo-block',
                  { attrs: { options: JSON.parse(decodeURI('%7B%7D')) } },
                  [
                    s('template', { slot: 'demo' }, [[s('render-demo-0')]], 2),
                    t._v(' '),
                    s('div', { attrs: { slot: 'description' }, slot: 'description' }, [
                      s('p', [
                        t._v('需要设置'),
                        s('code', [t._v('v-model')]),
                        t._v('属性，它接收'),
                        s('code', [t._v('Boolean')]),
                        t._v('，当为'),
                        s('code', [t._v('true')]),
                        t._v('时显示 ElProDialog。ElProDialog 分为两个部分：'),
                        s('code', [t._v('body')]),
                        t._v('和'),
                        s('code', [t._v('footer')]),
                        t._v('，'),
                        s('code', [t._v('footer')]),
                        t._v('默认封装了取消，确定按钮,接收'),
                        s('code', [t._v('cancel')]),
                        t._v('和'),
                        s('code', [t._v('ok')]),
                        t._v('两个回调事件,或者也可以使用具名为'),
                        s('code', [t._v('footer')]),
                        t._v('的'),
                        s('code', [t._v('slot')]),
                        t._v('。'),
                        s('code', [t._v('title')]),
                        t._v('属性用于定义标题，它是可选的，默认值为空。最后，本例还展示了'),
                        s('code', [t._v('before-close')]),
                        t._v('的用法。')
                      ])
                    ]),
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
                                t._v('el-button')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                                t._v('type')
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
                                t._v('text'),
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ])
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
                                t._v('dialogVisible = true'),
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ])
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('>')
                              ])
                            ]),
                            t._v('点击打开 ElProDialog'),
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
                            t._v('\n    '),
                            s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('<')
                                ]),
                                t._v('el-pro-dialog')
                              ]),
                              t._v('\n      '),
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
                                t._v('提示'),
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ])
                              ]),
                              t._v('\n      '),
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
                                t._v('dialogVisible'),
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ])
                              ]),
                              t._v('\n      '),
                              s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                                t._v(':dialog-options')
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
                                t._v('{\n        width: '),
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v("'")
                                ]),
                                t._v('30%'),
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v("'")
                                ]),
                                t._v(
                                  ',\n        showFullscreen:true,\n        draggable:true,\n        beforeClose:handleClose\n      }'
                                ),
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ])
                              ]),
                              t._v('\n      '),
                              s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                                t._v('@ok')
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
                                t._v('dialogVisible = false'),
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ])
                              ]),
                              t._v('\n      '),
                              s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                                t._v('@closed')
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
                                t._v('handleClosed'),
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
                                t._v('span')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('>')
                              ])
                            ]),
                            t._v('这是一段信息'),
                            s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('</')
                                ]),
                                t._v('span')
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
                                t._v('el-pro-dialog')
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
                                    [t._v('dialogVisible')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token boolean' } }, [
                                    t._v('false')
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
                                    t._v('handleClose')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('(')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token parameter' } }, [
                                    t._v('done')
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
                                    t._v('this')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token function' } }, [
                                    t._v('$confirm')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('(')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'确认关闭？'")
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(')')
                                  ]),
                                  t._v('\n          '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token function' } }, [
                                    t._v('then')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('(')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('(')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token parameter' } }, [
                                    t._v('_')
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
                                  t._v('\n            '),
                                  s('span', { pre: !0, attrs: { class: 'token function' } }, [
                                    t._v('done')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('(')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(')')
                                  ]),
                                  t._v('\n          '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(')')
                                  ]),
                                  t._v('\n          '),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token function' } }, [
                                    t._v('catch')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('(')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('(')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token parameter' } }, [
                                    t._v('_')
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
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
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
                                    t._v('handleClosed')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('(')
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(')')
                                  ]),
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
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v(
                                      "'Dialog 关闭动画结束时的回调,可以用来清除表单的检验和信息等'"
                                    )
                                  ]),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(')')
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
                            t._v('\n')
                          ])
                        ])
                      ])
                    ])
                  ],
                  2
                ),
                s('h3', { attrs: { id: '超出高度自适应和头部和底部采用居中布局' } }, [
                  s(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#超出高度自适应和头部和底部采用居中布局' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' 超出高度自适应和头部和底部采用居中布局')
                ]),
                t._v(' '),
                s(
                  'demo-block',
                  { attrs: { options: JSON.parse(decodeURI('%7B%7D')) } },
                  [
                    s('template', { slot: 'demo' }, [[s('render-demo-1')]], 2),
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
                                t._v('el-button')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                                t._v('type')
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
                                t._v('text'),
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ])
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
                                t._v('dialogVisible = true'),
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ])
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('>')
                              ])
                            ]),
                            t._v('点击打开 ElProDialog'),
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
                            t._v('\n    '),
                            s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('<')
                                ]),
                                t._v('el-pro-dialog')
                              ]),
                              t._v('\n      '),
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
                                t._v('提示'),
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ])
                              ]),
                              t._v('\n      '),
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
                                t._v('dialogVisible'),
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ])
                              ]),
                              t._v('\n      '),
                              s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                                t._v(':dialog-options')
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
                                t._v('{\n        center:true\n      }'),
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ])
                              ]),
                              t._v('\n      '),
                              s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                                t._v('@ok')
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
                                t._v('dialogVisible = false'),
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
                              s('span', { pre: !0, attrs: { class: 'token special-attr' } }, [
                                s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                                  t._v('style')
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
                                  s(
                                    'span',
                                    { pre: !0, attrs: { class: 'token value css language-css' } },
                                    [
                                      s('span', { pre: !0, attrs: { class: 'token property' } }, [
                                        t._v('height')
                                      ]),
                                      s(
                                        'span',
                                        { pre: !0, attrs: { class: 'token punctuation' } },
                                        [t._v(':')]
                                      ),
                                      t._v('1000px')
                                    ]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('"')
                                  ])
                                ])
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('>')
                              ])
                            ]),
                            t._v('超出高度了'),
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
                                t._v('el-pro-dialog')
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
                                    [t._v('dialogVisible')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token boolean' } }, [
                                    t._v('false')
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
                            t._v('\n')
                          ])
                        ])
                      ])
                    ])
                  ],
                  2
                ),
                s('h3', { attrs: { id: '弹窗的加载中状态' } }, [
                  s('a', { staticClass: 'header-anchor', attrs: { href: '#弹窗的加载中状态' } }, [
                    t._v('#')
                  ]),
                  t._v(' 弹窗的加载中状态')
                ]),
                t._v(' '),
                s(
                  'demo-block',
                  { attrs: { options: JSON.parse(decodeURI('%7B%7D')) } },
                  [
                    s('template', { slot: 'demo' }, [[s('render-demo-2')]], 2),
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
                                t._v('el-button')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                                t._v('type')
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
                                t._v('text'),
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ])
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
                                t._v('dialogVisible = true'),
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ])
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('>')
                              ])
                            ]),
                            t._v('点击打开 ElProDialog'),
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
                            t._v('\n    '),
                            s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('<')
                                ]),
                                t._v('el-pro-dialog')
                              ]),
                              t._v('\n      '),
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
                                t._v('加载中'),
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ])
                              ]),
                              t._v('\n      '),
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
                                t._v('dialogVisible'),
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
                                t._v('loading'),
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ])
                              ]),
                              t._v('\n      '),
                              s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                                t._v(':dialog-options')
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
                                t._v('{\n        width:'),
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v("'")
                                ]),
                                t._v('30%'),
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v("'")
                                ]),
                                t._v('\n      }'),
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ])
                              ]),
                              t._v('\n      '),
                              s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                                t._v('@ok')
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
                                t._v('dialogVisible = false'),
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
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('>')
                              ])
                            ]),
                            t._v('加载中的时候需要loading...'),
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
                                t._v('el-pro-dialog')
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
                                    [t._v('dialogVisible')]
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
                                    [t._v('loading')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token boolean' } }, [
                                    t._v('true')
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
                            t._v('\n')
                          ])
                        ])
                      ])
                    ])
                  ],
                  2
                ),
                s('h3', { attrs: { id: '标题的插槽和按钮的-props' } }, [
                  s(
                    'a',
                    { staticClass: 'header-anchor', attrs: { href: '#标题的插槽和按钮的-props' } },
                    [t._v('#')]
                  ),
                  t._v(' 标题的插槽和按钮的 props')
                ]),
                t._v(' '),
                s(
                  'demo-block',
                  { attrs: { options: JSON.parse(decodeURI('%7B%7D')) } },
                  [
                    s('template', { slot: 'demo' }, [[s('render-demo-3')]], 2),
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
                                t._v('el-button')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                                t._v('type')
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
                                t._v('text'),
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ])
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
                                t._v('dialogVisible = true'),
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ])
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('>')
                              ])
                            ]),
                            t._v('点击打开 ElProDialog'),
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
                            t._v('\n    '),
                            s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('<')
                                ]),
                                t._v('el-pro-dialog')
                              ]),
                              t._v('\n      '),
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
                                t._v('标题的插槽'),
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ])
                              ]),
                              t._v('\n      '),
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
                                t._v('dialogVisible'),
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ])
                              ]),
                              t._v('\n      '),
                              s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                                t._v(':confirm-btn-props')
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
                                t._v('{ disabled:true,icon:'),
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v("'")
                                ]),
                                t._v('el-icon-check'),
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v("'")
                                ]),
                                t._v(' }'),
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ])
                              ]),
                              t._v('\n      '),
                              s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                                t._v(':dialog-options')
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
                                t._v('{\n        width:'),
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v("'")
                                ]),
                                t._v('30'),
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v("'")
                                ]),
                                t._v('\n      }'),
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ])
                              ]),
                              t._v('\n      '),
                              s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                                t._v('@ok')
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
                                t._v('dialogVisible = false'),
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
                                t._v('template')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                                t._v('#nameBefore')
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
                                t._v('i')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                                t._v('class')
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
                                t._v('el-icon-warning'),
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ])
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token special-attr' } }, [
                                s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                                  t._v('style')
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
                                  s(
                                    'span',
                                    { pre: !0, attrs: { class: 'token value css language-css' } },
                                    [
                                      s('span', { pre: !0, attrs: { class: 'token property' } }, [
                                        t._v('margin-right')
                                      ]),
                                      s(
                                        'span',
                                        { pre: !0, attrs: { class: 'token punctuation' } },
                                        [t._v(':')]
                                      ),
                                      t._v('5px'),
                                      s(
                                        'span',
                                        { pre: !0, attrs: { class: 'token punctuation' } },
                                        [t._v(';')]
                                      )
                                    ]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('"')
                                  ])
                                ])
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('>')
                              ])
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('</')
                                ]),
                                t._v('i')
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
                                t._v('template')
                              ]),
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
                                t._v('template')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                                t._v('#nameAfter')
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
                                t._v('i')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                                t._v('class')
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
                                t._v('el-icon-circle-close'),
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ])
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token special-attr' } }, [
                                s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                                  t._v('style')
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
                                  s(
                                    'span',
                                    { pre: !0, attrs: { class: 'token value css language-css' } },
                                    [
                                      s('span', { pre: !0, attrs: { class: 'token property' } }, [
                                        t._v('margin-left')
                                      ]),
                                      s(
                                        'span',
                                        { pre: !0, attrs: { class: 'token punctuation' } },
                                        [t._v(':')]
                                      ),
                                      t._v('5px'),
                                      s(
                                        'span',
                                        { pre: !0, attrs: { class: 'token punctuation' } },
                                        [t._v(';')]
                                      )
                                    ]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('"')
                                  ])
                                ])
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('>')
                              ])
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('</')
                                ]),
                                t._v('i')
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
                                t._v('template')
                              ]),
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
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('>')
                              ])
                            ]),
                            t._v('弹窗内容'),
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
                                t._v('el-pro-dialog')
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
                                    [t._v('dialogVisible')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token boolean' } }, [
                                    t._v('false')
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
                            t._v('\n')
                          ])
                        ])
                      ])
                    ])
                  ],
                  2
                ),
                s('h3', { attrs: { id: '自定义底部footer内容' } }, [
                  s(
                    'a',
                    { staticClass: 'header-anchor', attrs: { href: '#自定义底部footer内容' } },
                    [t._v('#')]
                  ),
                  t._v(' 自定义底部footer内容')
                ]),
                t._v(' '),
                s(
                  'demo-block',
                  { attrs: { options: JSON.parse(decodeURI('%7B%7D')) } },
                  [
                    s('template', { slot: 'demo' }, [[s('render-demo-4')]], 2),
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
                                t._v('el-button')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                                t._v('type')
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
                                t._v('text'),
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ])
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
                                t._v('dialogVisible = true'),
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ])
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('>')
                              ])
                            ]),
                            t._v('点击打开 ElProDialog'),
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
                            t._v('\n    '),
                            s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('<')
                                ]),
                                t._v('el-pro-dialog')
                              ]),
                              t._v('\n      '),
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
                                t._v('标题'),
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ])
                              ]),
                              t._v('\n      '),
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
                                t._v('dialogVisible'),
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ])
                              ]),
                              t._v('\n      '),
                              s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                                t._v(':dialog-options')
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
                                t._v('{\n        width:'),
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v("'")
                                ]),
                                t._v('30'),
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v("'")
                                ]),
                                t._v('\n      }'),
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
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('>')
                              ])
                            ]),
                            t._v('弹窗内容'),
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
                                t._v('footer'),
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ])
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('>')
                              ])
                            ]),
                            t._v('\n         我是底部footer内容\n      '),
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
                                t._v('el-pro-dialog')
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
                                    [t._v('dialogVisible')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token boolean' } }, [
                                    t._v('false')
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
                            t._v('\n')
                          ])
                        ])
                      ])
                    ])
                  ],
                  2
                ),
                s('h3', { attrs: { id: '自定义内容' } }, [
                  s('a', { staticClass: 'header-anchor', attrs: { href: '#自定义内容' } }, [
                    t._v('#')
                  ]),
                  t._v(' 自定义内容')
                ]),
                t._v(' '),
                s('p', [
                  t._v(
                    'ElProDialog 组件的内容可以是任意的，甚至可以是表格或表单，下面是应用了 ElProTable 和 ElProForm 组件的两个样例。'
                  )
                ]),
                t._v(' '),
                s(
                  'demo-block',
                  { attrs: { options: JSON.parse(decodeURI('%7B%7D')) } },
                  [
                    s('template', { slot: 'demo' }, [[s('render-demo-5')]], 2),
                    t._v(' '),
                    s('template', { slot: 'source' }, [
                      s('div', { staticClass: 'language-html extra-class' }, [
                        s('pre', { pre: !0, attrs: { class: 'language-html' } }, [
                          s('code', [
                            s('span', { pre: !0, attrs: { class: 'token comment' } }, [
                              t._v('\x3c!-- Table --\x3e')
                            ]),
                            t._v('\n'),
                            s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('<')
                                ]),
                                t._v('el-button')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                                t._v('type')
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
                                t._v('text'),
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ])
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
                                t._v('dialogTableVisible = true'),
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ])
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('>')
                              ])
                            ]),
                            t._v('打开嵌套表格的 Dialog'),
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
                            t._v('\n\n'),
                            s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('<')
                                ]),
                                t._v('el-pro-dialog')
                              ]),
                              t._v(' '),
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
                                t._v('收货地址'),
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ])
                              ]),
                              t._v(' '),
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
                                t._v('dialogTableVisible'),
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ])
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                                t._v('@ok')
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
                                t._v('dialogTableVisible=false'),
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ])
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
                                t._v('el-pro-table')
                              ]),
                              t._v(' '),
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
                                t._v('gridData'),
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ])
                              ]),
                              t._v(' '),
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
                              t._v(' '),
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
                                t._v('el-pro-dialog')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('>')
                              ])
                            ]),
                            t._v('\n\n'),
                            s('span', { pre: !0, attrs: { class: 'token comment' } }, [
                              t._v('\x3c!-- Form --\x3e')
                            ]),
                            t._v('\n'),
                            s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('<')
                                ]),
                                t._v('el-button')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                                t._v('type')
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
                                t._v('text'),
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ])
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
                                t._v('dialogFormVisible = true'),
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ])
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('>')
                              ])
                            ]),
                            t._v('打开嵌套表单的 Dialog'),
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
                            t._v('\n\n'),
                            s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('<')
                                ]),
                                t._v('el-pro-dialog')
                              ]),
                              t._v(' '),
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
                                t._v('收货地址'),
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ])
                              ]),
                              t._v(' '),
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
                                t._v('dialogFormVisible'),
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ])
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                                t._v('@ok')
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
                                t._v('dialogFormVisible=false'),
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ])
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
                                t._v('el-pro-form')
                              ]),
                              t._v(' '),
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
                                t._v('form'),
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ])
                              ]),
                              t._v(' '),
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
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                                t._v(':form-options')
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
                                t._v('{ labelWidth: '),
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v("'")
                                ]),
                                t._v('120px'),
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v("'")
                                ]),
                                t._v(' }'),
                                s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ])
                              ]),
                              t._v(' '),
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
                                t._v('el-pro-dialog')
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
                                    [t._v('columns')]
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
                                    [t._v('name')]
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
                                    t._v("'活动名称'")
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
                                    [t._v('tableColumnOption')]
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
                                    [t._v('width')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token number' } }, [
                                    t._v('200')
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
                                    [t._v('region')]
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
                                    t._v("'活动区域'")
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
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'select'")
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
                                    [t._v('name')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'区域一'")
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
                                    [t._v('value')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token number' } }, [
                                    t._v('1')
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
                                    [t._v('name')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'区域二'")
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
                                    [t._v('value')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token number' } }, [
                                    t._v('2')
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
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'date'")
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
                                    [t._v('tableColumnOption')]
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
                                    [t._v('width')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token number' } }, [
                                    t._v('150')
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
                                    [t._v('address')]
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
                                    t._v("'地址'")
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
                                    [t._v('formColumnShow')]
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
                                    [t._v('gridData')]
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
                                    [t._v('date')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'2016-05-02'")
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
                                    [t._v('name')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'王小虎'")
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
                                    [t._v('address')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'上海市普陀区金沙江路 1518 弄'")
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
                                    [t._v('date')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'2016-05-04'")
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
                                    [t._v('name')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'王小虎'")
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
                                    [t._v('address')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'上海市普陀区金沙江路 1518 弄'")
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
                                    [t._v('date')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'2016-05-01'")
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
                                    [t._v('name')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'王小虎'")
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
                                    [t._v('address')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'上海市普陀区金沙江路 1518 弄'")
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
                                    [t._v('date')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'2016-05-03'")
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
                                    [t._v('name')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'王小虎'")
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
                                    [t._v('address')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'上海市普陀区金沙江路 1518 弄'")
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
                                    [t._v('date')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'2016-05-03'")
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
                                    [t._v('name')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'王小虎'")
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
                                    [t._v('address')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'上海市普陀区金沙江路 1518 弄'")
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
                                    [t._v('dialogTableVisible')]
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
                                    [t._v('dialogFormVisible')]
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
                                    [t._v('form')]
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
                                    [t._v('name')]
                                  ),
                                  s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("''")
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
                            t._v('\n')
                          ])
                        ])
                      ])
                    ])
                  ],
                  2
                ),
                s('div', { staticClass: 'custom-block tip' }, [
                  s('p', { staticClass: 'custom-block-title' }, [t._v('TIP')]),
                  t._v(' '),
                  s('p', [
                    t._v(
                      'Dialog 的内容是懒渲染的，即在第一次被打开之前，传入的默认 slot 不会被渲染到 DOM 上。因此，如果需要执行 DOM 操作，或通过 '
                    ),
                    s('code', [t._v('ref')]),
                    t._v(' 获取相应组件，请在 '),
                    s('code', [t._v('open')]),
                    t._v(' 事件回调中进行。')
                  ])
                ]),
                t._v(' '),
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
                      s('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('是否显示 Dialog')
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
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('title')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('Dialog 的标题')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('string')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('—')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('—')])
                    ]),
                    t._v(' '),
                    s('tr', [
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('dialogOptions')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [
                        s(
                          'a',
                          {
                            attrs: {
                              href: 'https://element.eleme.cn/#/zh-CN/component/dialog',
                              target: '_blank',
                              rel: 'noopener noreferrer'
                            }
                          },
                          [t._v('官方支持的参数集合'), s('OutboundLink')],
                          1
                        ),
                        t._v(' 除此之外，还扩展支持 showFullscreen:true,draggable:true')
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
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('loading')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('弹窗 loading')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('boolean')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('—')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('false')])
                    ]),
                    t._v(' '),
                    s('tr', [
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('btnLoading')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('确定按钮 loading')
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
                        t._v('confirmBtnText')
                      ]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('底部 footer 确定按钮文字')
                      ]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('string')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('—')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('确定')])
                    ]),
                    t._v(' '),
                    s('tr', [
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('cancelBtnText')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('底部 footer 取消按钮文字')
                      ]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('string')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('—')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('取消')])
                    ]),
                    t._v(' '),
                    s('tr', [
                      s('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('confirmBtnProps')
                      ]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('底部 footer 确定按钮 props')
                      ]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('object')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('—')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('—')])
                    ]),
                    t._v(' '),
                    s('tr', [
                      s('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('cancelBtnProps')
                      ]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('底部 footer 取消按钮 props')
                      ]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('object')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('—')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('—')])
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
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('—')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('Dialog 的内容')])
                    ]),
                    t._v(' '),
                    s('tr', [
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('nameBefore')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('Dialog 标题前面的内容')
                      ])
                    ]),
                    t._v(' '),
                    s('tr', [
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('nameAfter')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('Dialog 标题后面的内容')
                      ])
                    ]),
                    t._v(' '),
                    s('tr', [
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('beforeFooter')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('取消按钮前面的内容')
                      ])
                    ]),
                    t._v(' '),
                    s('tr', [
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('middleFooter')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('取消按钮和确定按钮中间的内容')
                      ])
                    ]),
                    t._v(' '),
                    s('tr', [
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('afterFooter')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('确定按钮后面的内容')
                      ])
                    ]),
                    t._v(' '),
                    s('tr', [
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('footer')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('底部 footer')])
                    ]),
                    t._v(' '),
                    s('tr', [
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('title')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('Dialog 的自定义标题')
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
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('open')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('Dialog 打开的回调')
                      ]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('—')])
                    ]),
                    t._v(' '),
                    s('tr', [
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('opened')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('Dialog 打开动画结束时的回调')
                      ]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('—')])
                    ]),
                    t._v(' '),
                    s('tr', [
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('close')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('Dialog 关闭的回调')
                      ]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('—')])
                    ]),
                    t._v(' '),
                    s('tr', [
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('closed')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('Dialog 关闭动画结束时的回调')
                      ]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('—')])
                    ]),
                    t._v(' '),
                    s('tr', [
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('cancel')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('点击取消按钮回调')
                      ]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('—')])
                    ]),
                    t._v(' '),
                    s('tr', [
                      s('td', { staticStyle: { 'text-align': 'center' } }, [t._v('ok')]),
                      t._v(' '),
                      s('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('点击确定按钮回调')
                      ]),
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
      a.default = o.exports
    }
  }
])
