;(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    564: function (t, s, a) {
      a(5)({ target: 'Number', stat: !0 }, { isInteger: a(565) })
    },
    565: function (t, s, a) {
      var n = a(11),
        r = Math.floor
      t.exports =
        Number.isInteger ||
        function (t) {
          return !n(t) && isFinite(t) && r(t) === t
        }
    },
    575: function (t, s, a) {
      'use strict'
      a.r(s)
      var n,
        r,
        e,
        p,
        o,
        c,
        l,
        v,
        _,
        u,
        i,
        k,
        y,
        m,
        g,
        d = a(69),
        b = a(2),
        f =
          (a(132),
          a(296),
          a(22),
          a(564),
          a(40),
          {
            name: 'component-doc',
            components: {
              'render-demo-0':
                ((n = 'input'),
                (r = 'select'),
                (e = 'number'),
                (p = 'checkBox'),
                (o = 'radio'),
                (c = 'date'),
                (l = 'switch'),
                (v = 'time'),
                (_ = 'slider'),
                (u = 'rate'),
                (i = 'color'),
                (k = 'cascader'),
                (y = 'table'),
                (m = 'editor'),
                (g = {
                  data: function () {
                    return {
                      form: {},
                      visible: !1,
                      columns: {
                        name: { label: '活动名称' },
                        region: {
                          label: '活动区域',
                          type: o,
                          options: [
                            { name: '区域一', value: 'shanghai' },
                            { name: '区域二', value: 'beijing' }
                          ]
                        },
                        date1: {
                          label: '活动时间',
                          type: c,
                          span: 11,
                          columnOption: { placeholder: '选择日期' }
                        },
                        date2: {
                          label: '-',
                          span: 11,
                          type: v,
                          columnOption: { placeholder: '选择时间' },
                          formItemOption: { labelWidth: 'auto' }
                        },
                        delivery: { label: '即时配送', type: l },
                        type: {
                          label: '活动性质',
                          type: p,
                          options: [
                            { name: '美食/餐厅线上活动', value: 1 },
                            { name: '地推活动', value: 2 },
                            { name: '线下主题活动', value: 3 },
                            { name: '单纯品牌曝光', value: 4 }
                          ]
                        },
                        resource: {
                          label: '特殊资源',
                          type: o,
                          options: [
                            { name: '线上品牌商赞助', value: 1 },
                            { name: '线下场地免费', value: 2 }
                          ]
                        },
                        desc: { label: '活动形式', columnOption: { type: 'textarea' } },
                        dateRange: {
                          label: '时间段',
                          type: c,
                          columnOption: { type: 'datetimerange' }
                        },
                        number: { label: '数字', type: e },
                        slider: { label: '滑块', type: _ },
                        rate: { label: '评分', type: u },
                        color: { label: '颜色', type: i },
                        cascader: {
                          label: '级联选择',
                          type: k,
                          options: [
                            {
                              value: 1,
                              label: '测试1',
                              children: [{ value: 11, label: '测试1-1' }]
                            },
                            {
                              value: 2,
                              label: '测试2',
                              children: [
                                {
                                  value: 22,
                                  label: '测试2-1',
                                  children: [{ value: 222, label: '测试2-1-1' }]
                                }
                              ]
                            }
                          ]
                        },
                        editor: { label: '富文本', span: 24, type: m },
                        tableData: {
                          label: '表格',
                          type: y,
                          span: 24,
                          tableDataOptions: {
                            input: { label: '输入框', type: n, span: 12, showInTable: !0 },
                            select: {
                              label: '下拉框',
                              type: r,
                              span: 12,
                              options: [
                                { name: '下拉框1', value: 1 },
                                { name: '下拉框2', value: 2 }
                              ],
                              showInTable: !0
                            },
                            date: { label: '日期', type: c, span: 12, showInTable: !0 }
                          }
                        }
                      }
                    }
                  },
                  methods: {
                    onSubmit: function () {
                      console.log('submit!'), alert('表单值:' + JSON.stringify(this.form))
                    }
                  }
                }),
                Object(b.a)(
                  {
                    render: function () {
                      var t = this,
                        s = t.$createElement,
                        a = t._self._c || s
                      return a(
                        'div',
                        [
                          [
                            a(
                              'div',
                              [
                                a('el-pro-form', {
                                  ref: 'dataForm',
                                  attrs: {
                                    columns: t.columns,
                                    'form-options': { labelPosition: 'left' }
                                  },
                                  scopedSlots: t._u([
                                    {
                                      key: 'columnAfter',
                                      fn: function () {
                                        return [
                                          a(
                                            'el-form-item',
                                            [
                                              a(
                                                'el-button',
                                                {
                                                  attrs: { type: 'primary' },
                                                  on: { click: t.onSubmit }
                                                },
                                                [t._v('立即创建')]
                                              ),
                                              t._v(' '),
                                              a('el-button', [t._v('取消')])
                                            ],
                                            1
                                          )
                                        ]
                                      },
                                      proxy: !0
                                    }
                                  ]),
                                  model: {
                                    value: t.form,
                                    callback: function (s) {
                                      t.form = s
                                    },
                                    expression: 'form'
                                  }
                                })
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
                  g
                )),
              'render-demo-1': (function () {
                var t = {
                  data: function () {
                    return {
                      formInline: { user: '', region: '' },
                      columns: {
                        user: {
                          label: '审批人',
                          type: 'input',
                          columnOption: { style: { width: '160px' } }
                        },
                        region: {
                          label: '活动区域',
                          type: 'select',
                          options: [
                            { name: '区域一', value: 'shanghai' },
                            { name: '区域二', value: 'beijing' }
                          ]
                        }
                      }
                    }
                  },
                  methods: {
                    onSubmit: function () {
                      console.log('submit!')
                    }
                  }
                }
                return Object(b.a)(
                  {
                    render: function () {
                      var t = this,
                        s = t.$createElement,
                        a = t._self._c || s
                      return a(
                        'div',
                        [
                          a('el-pro-form', {
                            attrs: {
                              columns: t.columns,
                              'is-row': !1,
                              'form-options': { inline: !0 }
                            },
                            scopedSlots: t._u([
                              {
                                key: 'columnAfter',
                                fn: function () {
                                  return [
                                    a(
                                      'el-form-item',
                                      { staticStyle: { 'margin-left': '10px' } },
                                      [
                                        a(
                                          'el-button',
                                          { attrs: { type: 'primary' }, on: { click: t.onSubmit } },
                                          [t._v('查询')]
                                        )
                                      ],
                                      1
                                    )
                                  ]
                                },
                                proxy: !0
                              }
                            ]),
                            model: {
                              value: t.formInline,
                              callback: function (s) {
                                t.formInline = s
                              },
                              expression: 'formInline'
                            }
                          })
                        ],
                        1
                      )
                    },
                    staticRenderFns: []
                  },
                  t
                )
              })(),
              'render-demo-2': Object(b.a)(
                {
                  render: function () {
                    var t = this,
                      s = t.$createElement,
                      a = t._self._c || s
                    return a(
                      'div',
                      [
                        a(
                          'el-radio-group',
                          {
                            attrs: { size: 'small' },
                            model: {
                              value: t.labelPosition,
                              callback: function (s) {
                                t.labelPosition = s
                              },
                              expression: 'labelPosition'
                            }
                          },
                          [
                            a('el-radio-button', { attrs: { label: 'left' } }, [t._v('左对齐')]),
                            t._v(' '),
                            a('el-radio-button', { attrs: { label: 'right' } }, [t._v('右对齐')]),
                            t._v(' '),
                            a('el-radio-button', { attrs: { label: 'top' } }, [t._v('顶部对齐')])
                          ],
                          1
                        ),
                        t._v(' '),
                        a('div', { staticStyle: { margin: '20px' } }),
                        t._v(' '),
                        a('el-pro-form', {
                          attrs: {
                            columns: t.columns,
                            'form-options': { labelPosition: t.labelPosition }
                          },
                          model: {
                            value: t.formLabelAlign,
                            callback: function (s) {
                              t.formLabelAlign = s
                            },
                            expression: 'formLabelAlign'
                          }
                        })
                      ],
                      1
                    )
                  },
                  staticRenderFns: []
                },
                {
                  data: function () {
                    return {
                      labelPosition: 'right',
                      columns: {
                        name: { label: '名称' },
                        region: { label: '活动区域' },
                        type: { label: '活动形式' }
                      },
                      formLabelAlign: { name: '', region: '', type: '' }
                    }
                  }
                }
              ),
              'render-demo-3': (function () {
                var t = 'checkBox',
                  s = 'radio',
                  a = 'date',
                  n = 'switch',
                  r = 'time',
                  e = {
                    data: function () {
                      return {
                        form: {},
                        visible: !1,
                        columns: {
                          name: {
                            label: '活动名称',
                            required: !0,
                            rules: [
                              { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                            ]
                          },
                          region: {
                            label: '活动区域',
                            type: s,
                            required: !0,
                            options: [
                              { name: '区域一', value: 'shanghai' },
                              { name: '区域二', value: 'beijing' }
                            ]
                          },
                          date1: {
                            label: '活动时间',
                            rules: [{ required: !0, message: '请选择日期', trigger: 'change' }],
                            type: a,
                            span: 11,
                            columnOption: { placeholder: '选择日期' }
                          },
                          date2: {
                            label: '-',
                            span: 11,
                            rules: [{ required: !0, message: '请选择时间', trigger: 'change' }],
                            type: r,
                            columnOption: { placeholder: '选择时间' },
                            formItemOption: { labelWidth: 'auto' }
                          },
                          delivery: { label: '即时配送', type: n },
                          type: {
                            label: '活动性质',
                            type: t,
                            required: !0,
                            options: [
                              { name: '美食/餐厅线上活动', value: 1 },
                              { name: '地推活动', value: 2 },
                              { name: '线下主题活动', value: 3 },
                              { name: '单纯品牌曝光', value: 4 }
                            ]
                          },
                          resource: {
                            label: '特殊资源',
                            required: !0,
                            type: s,
                            options: [
                              { name: '线上品牌商赞助', value: 1 },
                              { name: '线下场地免费', value: 2 }
                            ]
                          },
                          desc: {
                            label: '活动形式',
                            required: !0,
                            columnOption: { type: 'textarea' }
                          }
                        }
                      }
                    },
                    methods: {
                      onSubmit: function () {
                        var t = this
                        return Object(d.a)(
                          regeneratorRuntime.mark(function s() {
                            var a
                            return regeneratorRuntime.wrap(
                              function (s) {
                                for (;;)
                                  switch ((s.prev = s.next)) {
                                    case 0:
                                      return (
                                        (a = t.$refs.ruleForm),
                                        (s.prev = 1),
                                        (s.next = 4),
                                        a.checkRule()
                                      )
                                    case 4:
                                      s.sent, (s.next = 11)
                                      break
                                    case 8:
                                      ;(s.prev = 8), (s.t0 = s.catch(1)), console.log(s.t0)
                                    case 11:
                                    case 'end':
                                      return s.stop()
                                  }
                              },
                              s,
                              null,
                              [[1, 8]]
                            )
                          })
                        )()
                      },
                      resetForm: function () {
                        this.$refs.ruleForm.resetFields()
                      }
                    }
                  }
                return Object(b.a)(
                  {
                    render: function () {
                      var t = this,
                        s = t.$createElement,
                        a = t._self._c || s
                      return a(
                        'div',
                        [
                          [
                            a(
                              'div',
                              [
                                a('el-pro-form', {
                                  ref: 'ruleForm',
                                  attrs: {
                                    columns: t.columns,
                                    'form-options': { labelWidth: '100px' }
                                  },
                                  scopedSlots: t._u([
                                    {
                                      key: 'columnAfter',
                                      fn: function () {
                                        return [
                                          a(
                                            'el-form-item',
                                            [
                                              a(
                                                'el-button',
                                                {
                                                  attrs: { type: 'primary' },
                                                  on: { click: t.onSubmit }
                                                },
                                                [t._v('立即创建')]
                                              ),
                                              t._v(' '),
                                              a('el-button', { on: { click: t.resetForm } }, [
                                                t._v('重置')
                                              ])
                                            ],
                                            1
                                          )
                                        ]
                                      },
                                      proxy: !0
                                    }
                                  ]),
                                  model: {
                                    value: t.form,
                                    callback: function (s) {
                                      t.form = s
                                    },
                                    expression: 'form'
                                  }
                                })
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
                  e
                )
              })(),
              'render-demo-4': (function () {
                var t = {
                  data: function () {
                    var t = this
                    return {
                      ruleFormData: { pass: '', checkPass: '', age: '' },
                      columns: {
                        pass: {
                          label: '密码',
                          rules: [
                            {
                              validator: function (s, a, n) {
                                '' === a
                                  ? n(new Error('请输入密码'))
                                  : ('' !== t.ruleFormData.checkPass &&
                                      t.$refs.ruleForm.validateField('checkPass'),
                                    n())
                              },
                              trigger: 'blur'
                            }
                          ]
                        },
                        checkPass: {
                          label: '确认密码',
                          rules: [
                            {
                              validator: function (s, a, n) {
                                '' === a
                                  ? n(new Error('请再次输入密码'))
                                  : a !== t.ruleFormData.pass
                                  ? n(new Error('两次输入密码不一致!'))
                                  : n()
                              },
                              trigger: 'blur'
                            }
                          ]
                        },
                        age: {
                          label: '年龄',
                          rules: [
                            {
                              validator: function (t, s, a) {
                                if (!s) return a(new Error('年龄不能为空'))
                                setTimeout(function () {
                                  Number.isInteger(s)
                                    ? s < 18
                                      ? a(new Error('必须年满18岁'))
                                      : a()
                                    : a(new Error('请输入数字值'))
                                }, 1e3)
                              },
                              trigger: 'blur'
                            }
                          ]
                        }
                      }
                    }
                  },
                  methods: {
                    submitForm: function () {
                      var t = this
                      return Object(d.a)(
                        regeneratorRuntime.mark(function s() {
                          return regeneratorRuntime.wrap(
                            function (s) {
                              for (;;)
                                switch ((s.prev = s.next)) {
                                  case 0:
                                    return (s.prev = 0), (s.next = 3), t.$refs.ruleForm.checkRule()
                                  case 3:
                                    s.sent, (s.next = 10)
                                    break
                                  case 7:
                                    ;(s.prev = 7), (s.t0 = s.catch(0)), console.log(s.t0)
                                  case 10:
                                  case 'end':
                                    return s.stop()
                                }
                            },
                            s,
                            null,
                            [[0, 7]]
                          )
                        })
                      )()
                    },
                    resetForm: function () {
                      this.$refs.ruleForm.resetFields()
                    }
                  }
                }
                return Object(b.a)(
                  {
                    render: function () {
                      var t = this,
                        s = t.$createElement,
                        a = t._self._c || s
                      return a(
                        'div',
                        [
                          a(
                            'el-pro-form',
                            {
                              ref: 'ruleForm',
                              attrs: {
                                columns: t.columns,
                                'form-options': { labelWidth: '100px', statusIcon: !0 }
                              },
                              model: {
                                value: t.ruleFormData,
                                callback: function (s) {
                                  t.ruleFormData = s
                                },
                                expression: 'ruleFormData'
                              }
                            },
                            [
                              a(
                                'div',
                                { attrs: { slot: 'columnAfter' }, slot: 'columnAfter' },
                                [
                                  a(
                                    'el-form-item',
                                    [
                                      a(
                                        'el-button',
                                        { attrs: { type: 'primary' }, on: { click: t.submitForm } },
                                        [t._v('提交')]
                                      ),
                                      t._v(' '),
                                      a('el-button', { on: { click: t.resetForm } }, [t._v('重置')])
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ]
                          )
                        ],
                        1
                      )
                    },
                    staticRenderFns: []
                  },
                  t
                )
              })()
            }
          }),
        h = a(6),
        x = Object(h.a)(
          f,
          function () {
            var t = this,
              s = t.$createElement,
              a = t._self._c || s
            return a(
              'ContentSlotsDistributor',
              { attrs: { 'slot-key': t.$parent.slotKey } },
              [
                a('h1', { attrs: { id: '通用表单-elproform' } }, [
                  a('a', { staticClass: 'header-anchor', attrs: { href: '#通用表单-elproform' } }, [
                    t._v('#')
                  ]),
                  t._v(' 通用表单-ElProForm')
                ]),
                t._v(' '),
                a('p', [t._v('对 element-ui 的 form 组件进行封装，扩展多个常用类型,例如:')]),
                t._v(' '),
                a('ul', [
                  a('li', [t._v('输入框')]),
                  t._v(' '),
                  a('li', [t._v('选择器')]),
                  t._v(' '),
                  a('li', [t._v('多选框')]),
                  t._v(' '),
                  a('li', [t._v('日期选择')]),
                  t._v(' '),
                  a('li', [t._v('日期段选择')]),
                  t._v(' '),
                  a('li', [t._v('时间选择')]),
                  t._v(' '),
                  a('li', [t._v('计数器')]),
                  t._v(' '),
                  a('li', [t._v('开关')]),
                  t._v(' '),
                  a('li', [t._v('滑块')]),
                  t._v(' '),
                  a('li', [t._v('颜色选择')]),
                  t._v(' '),
                  a('li', [t._v('评分')]),
                  t._v(' '),
                  a('li', [t._v('级联')]),
                  t._v(' '),
                  a('li', [t._v('段落标题')]),
                  t._v(' '),
                  a('li', [t._v('富文本')]),
                  t._v(' '),
                  a('li', [t._v('表格')])
                ]),
                t._v(' '),
                a('p', [
                  t._v(
                    '通过配置可灵活配置，并且与 ElProSearch 、 ElProTable 、 ElProAdanceSearch 的配置项有联动，可以共用同一份配置，非常方便'
                  )
                ]),
                t._v(' '),
                a('h2', { attrs: { id: '示例' } }, [
                  a('a', { staticClass: 'header-anchor', attrs: { href: '#示例' } }, [t._v('#')]),
                  t._v(' 示例')
                ]),
                t._v(' '),
                a('h3', { attrs: { id: '典型表单' } }, [
                  a('a', { staticClass: 'header-anchor', attrs: { href: '#典型表单' } }, [
                    t._v('#')
                  ]),
                  t._v(' 典型表单')
                ]),
                t._v(' '),
                a('p', [t._v('包括各种表单项，比如输入框、选择器、开关、单选框、多选框等。')]),
                t._v(' '),
                a(
                  'demo-block',
                  { attrs: { options: JSON.parse(decodeURI('%7B%7D')) } },
                  [
                    a('template', { slot: 'demo' }, [[a('render-demo-0')]], 2),
                    t._v(' '),
                    a('template', { slot: 'source' }, [
                      a('div', { staticClass: 'language-html extra-class' }, [
                        a('pre', { pre: !0, attrs: { class: 'language-html' } }, [
                          a('code', [
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('<')
                                ]),
                                t._v('template')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('>')
                              ])
                            ]),
                            t._v('\n  '),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('<')
                                ]),
                                t._v('div')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('>')
                              ])
                            ]),
                            t._v('\n    '),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('<')
                                ]),
                                t._v('el-pro-form')
                              ]),
                              t._v('\n      '),
                              a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                                t._v('ref')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                a(
                                  'span',
                                  { pre: !0, attrs: { class: 'token punctuation attr-equals' } },
                                  [t._v('=')]
                                ),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ]),
                                t._v('dataForm'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ])
                              ]),
                              t._v('\n      '),
                              a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                                t._v('v-model')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                a(
                                  'span',
                                  { pre: !0, attrs: { class: 'token punctuation attr-equals' } },
                                  [t._v('=')]
                                ),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ]),
                                t._v('form'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ])
                              ]),
                              t._v('\n      '),
                              a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                                t._v(':columns')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                a(
                                  'span',
                                  { pre: !0, attrs: { class: 'token punctuation attr-equals' } },
                                  [t._v('=')]
                                ),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ]),
                                t._v('columns'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ])
                              ]),
                              t._v('\n      '),
                              a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                                t._v(':form-options')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                a(
                                  'span',
                                  { pre: !0, attrs: { class: 'token punctuation attr-equals' } },
                                  [t._v('=')]
                                ),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ]),
                                t._v('{labelPosition:'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v("'")
                                ]),
                                t._v('left'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v("'")
                                ]),
                                t._v('}'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ])
                              ]),
                              t._v('\n    '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('>')
                              ])
                            ]),
                            t._v('\n      '),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('<')
                                ]),
                                t._v('template')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                                t._v('#columnAfter')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('>')
                              ])
                            ]),
                            t._v('\n        '),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('<')
                                ]),
                                t._v('el-form-item')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('>')
                              ])
                            ]),
                            t._v('\n          '),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('<')
                                ]),
                                t._v('el-button')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                                t._v('type')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                a(
                                  'span',
                                  { pre: !0, attrs: { class: 'token punctuation attr-equals' } },
                                  [t._v('=')]
                                ),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ]),
                                t._v('primary'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ])
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                                t._v('@click')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                a(
                                  'span',
                                  { pre: !0, attrs: { class: 'token punctuation attr-equals' } },
                                  [t._v('=')]
                                ),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ]),
                                t._v('onSubmit'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ])
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('>')
                              ])
                            ]),
                            t._v('立即创建'),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('</')
                                ]),
                                t._v('el-button')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('>')
                              ])
                            ]),
                            t._v('\n          '),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('<')
                                ]),
                                t._v('el-button')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('>')
                              ])
                            ]),
                            t._v('取消'),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('</')
                                ]),
                                t._v('el-button')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('>')
                              ])
                            ]),
                            t._v('\n        '),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('</')
                                ]),
                                t._v('el-form-item')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('>')
                              ])
                            ]),
                            t._v('\n      '),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('</')
                                ]),
                                t._v('template')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('>')
                              ])
                            ]),
                            t._v('\n    '),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('</')
                                ]),
                                t._v('el-pro-form')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('>')
                              ])
                            ]),
                            t._v('\n  '),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('</')
                                ]),
                                t._v('div')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('>')
                              ])
                            ]),
                            t._v('\n'),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('</')
                                ]),
                                t._v('template')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('>')
                              ])
                            ]),
                            t._v('\n\n'),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('<')
                                ]),
                                t._v('script')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('>')
                              ])
                            ]),
                            a('span', { pre: !0, attrs: { class: 'token script' } }, [
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token language-javascript' } },
                                [
                                  t._v('\n  '),
                                  a('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                    t._v('const')
                                  ]),
                                  t._v(' types '),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v('=')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n    '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('input')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'input'")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                    t._v('// 输入框')
                                  ]),
                                  t._v('\n    '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('select')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'select'")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                    t._v('// 选择框')
                                  ]),
                                  t._v('\n    '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('number')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'number'")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                    t._v('// 计数器')
                                  ]),
                                  t._v('\n    '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('checkBox')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'checkBox'")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                    t._v('// 多选框')
                                  ]),
                                  t._v('\n    '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('check')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'check'")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                    t._v('// 单个复选框')
                                  ]),
                                  t._v('\n    '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('radio')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'radio'")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                    t._v('// 单选框')
                                  ]),
                                  t._v('\n    '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('date')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'date'")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                    t._v('// 日期')
                                  ]),
                                  t._v('\n    '),
                                  a('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                    t._v('switch')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'switch'")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                    t._v('// 开关')
                                  ]),
                                  t._v('\n    '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('title')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'title'")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                    t._v('// 标题')
                                  ]),
                                  t._v('\n    '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('time')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'time'")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                    t._v('// 时间')
                                  ]),
                                  t._v('\n    '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('slider')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'slider'")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                    t._v('// 滑块')
                                  ]),
                                  t._v('\n    '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('rate')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'rate'")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                    t._v('// 评分')
                                  ]),
                                  t._v('\n    '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('color')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'color'")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                    t._v('// 颜色')
                                  ]),
                                  t._v('\n    '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('cascader')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'cascader'")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                    t._v('// 级联')
                                  ]),
                                  t._v('\n    '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('table')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'table'")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                    t._v('// 表格')
                                  ]),
                                  t._v('\n    '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('editor')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'editor'")
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                    t._v('// 富文本')
                                  ]),
                                  t._v('\n  '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v('\n  '),
                                  a('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                    t._v('export')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                    t._v('default')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n    '),
                                  a('span', { pre: !0, attrs: { class: 'token function' } }, [
                                    t._v('data')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('(')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(')')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n      '),
                                  a('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                    t._v('return')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n        '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('form')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n        '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('visible')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token boolean' } }, [
                                    t._v('false')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n        '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('columns')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n          '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('name')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n            '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'活动名称'")
                                  ]),
                                  t._v('\n          '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n          '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('region')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n            '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'活动区域'")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('type')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' types'),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  t._v('radio'),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('options')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('[')
                                  ]),
                                  t._v('\n              '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n                '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('name')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'区域一'")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('value')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'shanghai'")
                                  ]),
                                  t._v('\n              '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n              '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n                '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('name')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'区域二'")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('value')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'beijing'")
                                  ]),
                                  t._v('\n              '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v('\n            '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(']')
                                  ]),
                                  t._v('\n          '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n          '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('date1')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n            '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'活动时间'")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('type')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' types'),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  t._v('date'),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('span')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token number' } }, [
                                    t._v('11')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('columnOption')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n              '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('placeholder')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'选择日期'")
                                  ]),
                                  t._v('\n            '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v('\n          '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n          '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('date2')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n            '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'-'")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('span')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token number' } }, [
                                    t._v('11')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('type')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' types'),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  t._v('time'),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('columnOption')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n              '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('placeholder')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'选择时间'")
                                  ]),
                                  t._v('\n            '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('formItemOption')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n              '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('labelWidth')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'auto'")
                                  ]),
                                  t._v('\n            '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v('\n          '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n          '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('delivery')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n            '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'即时配送'")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('type')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' types'),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  t._v('switch\n          '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n          '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('type')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n            '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'活动性质'")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('type')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' types'),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  t._v('checkBox'),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('options')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('[')
                                  ]),
                                  t._v('\n              '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n                '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('name')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'美食/餐厅线上活动'")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('value')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token number' } }, [
                                    t._v('1')
                                  ]),
                                  t._v('\n              '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n              '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n                '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('name')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'地推活动'")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('value')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token number' } }, [
                                    t._v('2')
                                  ]),
                                  t._v('\n              '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n              '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n                '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('name')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'线下主题活动'")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('value')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token number' } }, [
                                    t._v('3')
                                  ]),
                                  t._v('\n              '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n              '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n                '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('name')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'单纯品牌曝光'")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('value')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token number' } }, [
                                    t._v('4')
                                  ]),
                                  t._v('\n              '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v('\n            '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(']')
                                  ]),
                                  t._v('\n          '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n          '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('resource')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n            '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'特殊资源'")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('type')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' types'),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  t._v('radio'),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('options')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('[')
                                  ]),
                                  t._v('\n              '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n                '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('name')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'线上品牌商赞助'")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('value')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token number' } }, [
                                    t._v('1')
                                  ]),
                                  t._v('\n              '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n              '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n                '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('name')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'线下场地免费'")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('value')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token number' } }, [
                                    t._v('2')
                                  ]),
                                  t._v('\n              '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v('\n            '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(']')
                                  ]),
                                  t._v('\n          '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n          '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('desc')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n            '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'活动形式'")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('columnOption')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n              '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('type')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'textarea'")
                                  ]),
                                  t._v('\n            '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v('\n          '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n          '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('dateRange')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n            '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'时间段'")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('type')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' types'),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  t._v('date'),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('columnOption')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n              '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('type')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'datetimerange'")
                                  ]),
                                  t._v('\n            '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v('\n          '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n          '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('number')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n            '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'数字'")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('type')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' types'),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  t._v('number\n          '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n          '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('slider')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n            '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'滑块'")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('type')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' types'),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  t._v('slider\n          '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n          '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('rate')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n            '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'评分'")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('type')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' types'),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  t._v('rate\n          '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n          '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('color')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n            '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'颜色'")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('type')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' types'),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  t._v('color\n          '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n          '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('cascader')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n            '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'级联选择'")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('type')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' types'),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  t._v('cascader'),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('options')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('[')
                                  ]),
                                  t._v('\n              '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n                '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('value')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token number' } }, [
                                    t._v('1')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'测试1'")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('children')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('[')
                                  ]),
                                  t._v('\n                  '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n                    '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('value')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token number' } }, [
                                    t._v('11')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                    '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'测试1-1'")
                                  ]),
                                  t._v('\n                  '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v('\n                '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(']')
                                  ]),
                                  t._v('\n              '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n              '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n                '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('value')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token number' } }, [
                                    t._v('2')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'测试2'")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('children')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('[')
                                  ]),
                                  t._v('\n                  '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n                    '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('value')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token number' } }, [
                                    t._v('22')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                    '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'测试2-1'")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                    '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('children')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('[')
                                  ]),
                                  t._v('\n                      '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n                        '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('value')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token number' } }, [
                                    t._v('222')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                        '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'测试2-1-1'")
                                  ]),
                                  t._v('\n                      '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v('\n                    '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(']')
                                  ]),
                                  t._v('\n                  '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v('\n                '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(']')
                                  ]),
                                  t._v('\n              '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v('\n            '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(']')
                                  ]),
                                  t._v('\n          '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n          '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('editor')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n            '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'富文本'")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('span')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token number' } }, [
                                    t._v('24')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('type')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' types'),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  t._v('editor\n          '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n          '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('tableData')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n            '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'表格'")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('type')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' types'),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  t._v('table'),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('span')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token number' } }, [
                                    t._v('24')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('tableDataOptions')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n              '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('input')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n                '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'输入框'")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('type')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' types'),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  t._v('input'),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('span')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token number' } }, [
                                    t._v('12')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('showInTable')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token boolean' } }, [
                                    t._v('true')
                                  ]),
                                  t._v('\n              '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n              '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('select')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n                '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'下拉框'")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('type')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' types'),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  t._v('select'),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('span')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token number' } }, [
                                    t._v('12')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('options')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('[')
                                  ]),
                                  t._v('\n                  '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n                    '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('name')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'下拉框1'")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                    '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('value')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token number' } }, [
                                    t._v('1')
                                  ]),
                                  t._v('\n                  '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                  '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n                    '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('name')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'下拉框2'")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                    '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('value')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token number' } }, [
                                    t._v('2')
                                  ]),
                                  t._v('\n                  '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v('\n                '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(']')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('showInTable')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token boolean' } }, [
                                    t._v('true')
                                  ]),
                                  t._v('\n              '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n              '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('date')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n                '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'日期'")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('type')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' types'),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  t._v('date'),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('span')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token number' } }, [
                                    t._v('12')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('showInTable')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token boolean' } }, [
                                    t._v('true')
                                  ]),
                                  t._v('\n              '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v('\n            '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v('\n          '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v('\n        '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v('\n      '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v('\n    '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n    '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('methods')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n      '),
                                  a('span', { pre: !0, attrs: { class: 'token function' } }, [
                                    t._v('onSubmit')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('(')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(')')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n        console'),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token function' } }, [
                                    t._v('log')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('(')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'submit!'")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(')')
                                  ]),
                                  t._v('\n        '),
                                  a('span', { pre: !0, attrs: { class: 'token function' } }, [
                                    t._v('alert')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('(')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'表单值:'")
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v('+')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token constant' } }, [
                                    t._v('JSON')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token function' } }, [
                                    t._v('stringify')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('(')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                    t._v('this')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  t._v('form'),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(')')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(')')
                                  ]),
                                  t._v('\n      '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v('\n    '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v('\n  '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v('\n')
                                ]
                              )
                            ]),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('</')
                                ]),
                                t._v('script')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('>')
                              ])
                            ]),
                            t._v('\n\n'),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('<')
                                ]),
                                t._v('style')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                                t._v('lang')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                a(
                                  'span',
                                  { pre: !0, attrs: { class: 'token punctuation attr-equals' } },
                                  [t._v('=')]
                                ),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ]),
                                t._v('scss'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ])
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                                t._v('scoped')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('>')
                              ])
                            ]),
                            a('span', { pre: !0, attrs: { class: 'token style' } }),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('</')
                                ]),
                                t._v('style')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
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
                a('h3', { attrs: { id: '行内表单' } }, [
                  a('a', { staticClass: 'header-anchor', attrs: { href: '#行内表单' } }, [
                    t._v('#')
                  ]),
                  t._v(' 行内表单')
                ]),
                t._v(' '),
                a('p', [t._v('当垂直方向空间受限且表单较简单时，可以在一行内放置表单。')]),
                t._v(' '),
                a('p', [
                  t._v('可以在'),
                  a('code', [t._v('columnOption')]),
                  t._v('的'),
                  a('code', [t._v('style')]),
                  t._v('里调整表单组件的样式')
                ]),
                t._v(' '),
                a(
                  'demo-block',
                  { attrs: { options: JSON.parse(decodeURI('%7B%7D')) } },
                  [
                    a('template', { slot: 'demo' }, [[a('render-demo-1')]], 2),
                    t._v(' '),
                    a('div', { attrs: { slot: 'description' }, slot: 'description' }, [
                      a('p', [
                        t._v('关闭栅格属性'),
                        a('code', [t._v('is-row')]),
                        t._v('，'),
                        a('code', [t._v('form-options')]),
                        t._v(' 设置 '),
                        a('code', [t._v('inline')]),
                        t._v(' 属性可以让表单域变为行内的表单域。')
                      ])
                    ]),
                    t._v(' '),
                    a('template', { slot: 'source' }, [
                      a('div', { staticClass: 'language-html extra-class' }, [
                        a('pre', { pre: !0, attrs: { class: 'language-html' } }, [
                          a('code', [
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('<')
                                ]),
                                t._v('el-pro-form')
                              ]),
                              t._v('\n  '),
                              a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                                t._v('v-model')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                a(
                                  'span',
                                  { pre: !0, attrs: { class: 'token punctuation attr-equals' } },
                                  [t._v('=')]
                                ),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ]),
                                t._v('formInline'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ])
                              ]),
                              t._v('\n  '),
                              a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                                t._v(':columns')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                a(
                                  'span',
                                  { pre: !0, attrs: { class: 'token punctuation attr-equals' } },
                                  [t._v('=')]
                                ),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ]),
                                t._v('columns'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ])
                              ]),
                              t._v('\n  '),
                              a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                                t._v(':is-row')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                a(
                                  'span',
                                  { pre: !0, attrs: { class: 'token punctuation attr-equals' } },
                                  [t._v('=')]
                                ),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ]),
                                t._v('false'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ])
                              ]),
                              t._v('\n  '),
                              a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                                t._v(':form-options')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                a(
                                  'span',
                                  { pre: !0, attrs: { class: 'token punctuation attr-equals' } },
                                  [t._v('=')]
                                ),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ]),
                                t._v('{ inline: true }'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ])
                              ]),
                              t._v('\n'),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('>')
                              ])
                            ]),
                            t._v('\n  '),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('<')
                                ]),
                                t._v('template')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                                t._v('#columnAfter')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('>')
                              ])
                            ]),
                            t._v('\n    '),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('<')
                                ]),
                                t._v('el-form-item')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token special-attr' } }, [
                                a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                                  t._v('style')
                                ]),
                                a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                  a(
                                    'span',
                                    { pre: !0, attrs: { class: 'token punctuation attr-equals' } },
                                    [t._v('=')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('"')
                                  ]),
                                  a(
                                    'span',
                                    { pre: !0, attrs: { class: 'token value css language-css' } },
                                    [
                                      a('span', { pre: !0, attrs: { class: 'token property' } }, [
                                        t._v('margin-left')
                                      ]),
                                      a(
                                        'span',
                                        { pre: !0, attrs: { class: 'token punctuation' } },
                                        [t._v(':')]
                                      ),
                                      t._v('10px'),
                                      a(
                                        'span',
                                        { pre: !0, attrs: { class: 'token punctuation' } },
                                        [t._v(';')]
                                      )
                                    ]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('"')
                                  ])
                                ])
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('>')
                              ])
                            ]),
                            t._v('\n      '),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('<')
                                ]),
                                t._v('el-button')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                                t._v('type')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                a(
                                  'span',
                                  { pre: !0, attrs: { class: 'token punctuation attr-equals' } },
                                  [t._v('=')]
                                ),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ]),
                                t._v('primary'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ])
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                                t._v('@click')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                a(
                                  'span',
                                  { pre: !0, attrs: { class: 'token punctuation attr-equals' } },
                                  [t._v('=')]
                                ),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ]),
                                t._v('onSubmit'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ])
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('>')
                              ])
                            ]),
                            t._v('查询'),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('</')
                                ]),
                                t._v('el-button')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('>')
                              ])
                            ]),
                            t._v('\n    '),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('</')
                                ]),
                                t._v('el-form-item')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('>')
                              ])
                            ]),
                            t._v('\n  '),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('</')
                                ]),
                                t._v('template')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('>')
                              ])
                            ]),
                            t._v('\n'),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('</')
                                ]),
                                t._v('el-pro-form')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('>')
                              ])
                            ]),
                            t._v('\n'),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('<')
                                ]),
                                t._v('script')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('>')
                              ])
                            ]),
                            a('span', { pre: !0, attrs: { class: 'token script' } }, [
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token language-javascript' } },
                                [
                                  t._v('\n  '),
                                  a('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                    t._v('export')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                    t._v('default')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n    '),
                                  a('span', { pre: !0, attrs: { class: 'token function' } }, [
                                    t._v('data')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('(')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(')')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n      '),
                                  a('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                    t._v('return')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n        '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('formInline')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n          '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('user')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("''")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n          '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('region')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("''")
                                  ]),
                                  t._v('\n        '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n        '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('columns')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n          '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('user')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n            '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'审批人'")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('type')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'input'")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('columnOption')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n              '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('style')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n                '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('width')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'160px'")
                                  ]),
                                  t._v('\n              '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v('\n            '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v('\n          '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n          '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('region')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n            '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'活动区域'")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('type')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'select'")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('options')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('[')
                                  ]),
                                  t._v('\n              '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n                '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('name')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'区域一'")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('value')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'shanghai'")
                                  ]),
                                  t._v('\n              '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n              '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n                '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('name')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'区域二'")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('value')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'beijing'")
                                  ]),
                                  t._v('\n              '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v('\n            '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(']')
                                  ]),
                                  t._v('\n          '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v('\n        '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v('\n      '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v('\n    '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n    '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('methods')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n      '),
                                  a('span', { pre: !0, attrs: { class: 'token function' } }, [
                                    t._v('onSubmit')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('(')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(')')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n        console'),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token function' } }, [
                                    t._v('log')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('(')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'submit!'")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(')')
                                  ]),
                                  t._v('\n      '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v('\n    '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v('\n  '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v('\n')
                                ]
                              )
                            ]),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('</')
                                ]),
                                t._v('script')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
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
                a('h3', { attrs: { id: '对齐方式' } }, [
                  a('a', { staticClass: 'header-anchor', attrs: { href: '#对齐方式' } }, [
                    t._v('#')
                  ]),
                  t._v(' 对齐方式')
                ]),
                t._v(' '),
                a('p', [t._v('根据具体目标和制约因素，选择最佳的标签对齐方式。')]),
                t._v(' '),
                a(
                  'demo-block',
                  { attrs: { options: JSON.parse(decodeURI('%7B%7D')) } },
                  [
                    a('template', { slot: 'demo' }, [[a('render-demo-2')]], 2),
                    t._v(' '),
                    a('div', { attrs: { slot: 'description' }, slot: 'description' }, [
                      a('p', [
                        t._v('通过设置'),
                        a('code', [t._v('form-options')]),
                        t._v(' 的 '),
                        a('code', [t._v('label-position')]),
                        t._v(' 属性可以改变表单域标签的位置，可选值为 '),
                        a('code', [t._v('top')]),
                        t._v('、'),
                        a('code', [t._v('left')]),
                        t._v('，当设为 '),
                        a('code', [t._v('top')]),
                        t._v(' 时标签会置于表单域的顶部')
                      ])
                    ]),
                    t._v(' '),
                    a('template', { slot: 'source' }, [
                      a('div', { staticClass: 'language-html extra-class' }, [
                        a('pre', { pre: !0, attrs: { class: 'language-html' } }, [
                          a('code', [
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('<')
                                ]),
                                t._v('el-radio-group')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                                t._v('v-model')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                a(
                                  'span',
                                  { pre: !0, attrs: { class: 'token punctuation attr-equals' } },
                                  [t._v('=')]
                                ),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ]),
                                t._v('labelPosition'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ])
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                                t._v('size')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                a(
                                  'span',
                                  { pre: !0, attrs: { class: 'token punctuation attr-equals' } },
                                  [t._v('=')]
                                ),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ]),
                                t._v('small'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ])
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('>')
                              ])
                            ]),
                            t._v('\n  '),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('<')
                                ]),
                                t._v('el-radio-button')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                                t._v('label')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                a(
                                  'span',
                                  { pre: !0, attrs: { class: 'token punctuation attr-equals' } },
                                  [t._v('=')]
                                ),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ]),
                                t._v('left'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ])
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('>')
                              ])
                            ]),
                            t._v('左对齐'),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('</')
                                ]),
                                t._v('el-radio-button')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('>')
                              ])
                            ]),
                            t._v('\n  '),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('<')
                                ]),
                                t._v('el-radio-button')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                                t._v('label')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                a(
                                  'span',
                                  { pre: !0, attrs: { class: 'token punctuation attr-equals' } },
                                  [t._v('=')]
                                ),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ]),
                                t._v('right'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ])
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('>')
                              ])
                            ]),
                            t._v('右对齐'),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('</')
                                ]),
                                t._v('el-radio-button')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('>')
                              ])
                            ]),
                            t._v('\n  '),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('<')
                                ]),
                                t._v('el-radio-button')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                                t._v('label')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                a(
                                  'span',
                                  { pre: !0, attrs: { class: 'token punctuation attr-equals' } },
                                  [t._v('=')]
                                ),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ]),
                                t._v('top'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ])
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('>')
                              ])
                            ]),
                            t._v('顶部对齐'),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('</')
                                ]),
                                t._v('el-radio-button')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('>')
                              ])
                            ]),
                            t._v('\n'),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('</')
                                ]),
                                t._v('el-radio-group')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('>')
                              ])
                            ]),
                            t._v('\n'),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('<')
                                ]),
                                t._v('div')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token special-attr' } }, [
                                a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                                  t._v('style')
                                ]),
                                a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                  a(
                                    'span',
                                    { pre: !0, attrs: { class: 'token punctuation attr-equals' } },
                                    [t._v('=')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('"')
                                  ]),
                                  a(
                                    'span',
                                    { pre: !0, attrs: { class: 'token value css language-css' } },
                                    [
                                      a('span', { pre: !0, attrs: { class: 'token property' } }, [
                                        t._v('margin')
                                      ]),
                                      a(
                                        'span',
                                        { pre: !0, attrs: { class: 'token punctuation' } },
                                        [t._v(':')]
                                      ),
                                      t._v(' 20px'),
                                      a(
                                        'span',
                                        { pre: !0, attrs: { class: 'token punctuation' } },
                                        [t._v(';')]
                                      )
                                    ]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('"')
                                  ])
                                ])
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('>')
                              ])
                            ]),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('</')
                                ]),
                                t._v('div')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('>')
                              ])
                            ]),
                            t._v('\n'),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('<')
                                ]),
                                t._v('el-pro-form')
                              ]),
                              t._v('\n  '),
                              a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                                t._v(':columns')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                a(
                                  'span',
                                  { pre: !0, attrs: { class: 'token punctuation attr-equals' } },
                                  [t._v('=')]
                                ),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ]),
                                t._v('columns'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ])
                              ]),
                              t._v('\n  '),
                              a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                                t._v(':form-options')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                a(
                                  'span',
                                  { pre: !0, attrs: { class: 'token punctuation attr-equals' } },
                                  [t._v('=')]
                                ),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ]),
                                t._v('{ labelPosition:labelPosition }'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ])
                              ]),
                              t._v('\n  '),
                              a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                                t._v('v-model')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                a(
                                  'span',
                                  { pre: !0, attrs: { class: 'token punctuation attr-equals' } },
                                  [t._v('=')]
                                ),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ]),
                                t._v('formLabelAlign'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ])
                              ]),
                              t._v('\n'),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('/>')
                              ])
                            ]),
                            t._v('\n'),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('<')
                                ]),
                                t._v('script')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('>')
                              ])
                            ]),
                            a('span', { pre: !0, attrs: { class: 'token script' } }, [
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token language-javascript' } },
                                [
                                  t._v('\n  '),
                                  a('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                    t._v('export')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                    t._v('default')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n    '),
                                  a('span', { pre: !0, attrs: { class: 'token function' } }, [
                                    t._v('data')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('(')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(')')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n      '),
                                  a('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                    t._v('return')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n        '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('labelPosition')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'right'")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n        '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('columns')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n          '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('name')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n            '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'名称'")
                                  ]),
                                  t._v('\n          '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n          '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('region')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n            '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'活动区域'")
                                  ]),
                                  t._v('\n          '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n          '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('type')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n            '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'活动形式'")
                                  ]),
                                  t._v('\n          '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v('\n        '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n        '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('formLabelAlign')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n          '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('name')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("''")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n          '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('region')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("''")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n          '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('type')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("''")
                                  ]),
                                  t._v('\n        '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v('\n      '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v('\n    '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v('\n  '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v('\n')
                                ]
                              )
                            ]),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('</')
                                ]),
                                t._v('script')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
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
                a('h3', { attrs: { id: '表单验证' } }, [
                  a('a', { staticClass: 'header-anchor', attrs: { href: '#表单验证' } }, [
                    t._v('#')
                  ]),
                  t._v(' 表单验证')
                ]),
                t._v(' '),
                a('p', [t._v('在防止用户犯错的前提下，尽可能让用户更早地发现并纠正错误。')]),
                t._v(' '),
                a('div', { staticClass: 'custom-block tip' }, [
                  a('p', { staticClass: 'custom-block-title' }, [t._v('TIP')]),
                  t._v(' '),
                  a('p', [
                    t._v('如果只需要验证是否必填,只需要'),
                    a('code', [t._v('required')]),
                    t._v('为'),
                    a('code', [t._v('true')]),
                    t._v('就可以')
                  ])
                ]),
                t._v(' '),
                a(
                  'demo-block',
                  { attrs: { options: JSON.parse(decodeURI('%7B%7D')) } },
                  [
                    a('template', { slot: 'demo' }, [[a('render-demo-3')]], 2),
                    t._v(' '),
                    a('div', { attrs: { slot: 'description' }, slot: 'description' }, [
                      a('p', [
                        t._v('ElProForm 组件提供了表单验证的功能，只需要通过 '),
                        a('code', [t._v('rules')]),
                        t._v(' 属性传入约定的验证规则')
                      ])
                    ]),
                    t._v(' '),
                    a('template', { slot: 'source' }, [
                      a('div', { staticClass: 'language-html extra-class' }, [
                        a('pre', { pre: !0, attrs: { class: 'language-html' } }, [
                          a('code', [
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('<')
                                ]),
                                t._v('template')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('>')
                              ])
                            ]),
                            t._v('\n  '),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('<')
                                ]),
                                t._v('div')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('>')
                              ])
                            ]),
                            t._v('\n    '),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('<')
                                ]),
                                t._v('el-pro-form')
                              ]),
                              t._v('\n      '),
                              a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                                t._v('ref')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                a(
                                  'span',
                                  { pre: !0, attrs: { class: 'token punctuation attr-equals' } },
                                  [t._v('=')]
                                ),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ]),
                                t._v('ruleForm'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ])
                              ]),
                              t._v('\n      '),
                              a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                                t._v('v-model')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                a(
                                  'span',
                                  { pre: !0, attrs: { class: 'token punctuation attr-equals' } },
                                  [t._v('=')]
                                ),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ]),
                                t._v('form'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ])
                              ]),
                              t._v('\n      '),
                              a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                                t._v(':columns')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                a(
                                  'span',
                                  { pre: !0, attrs: { class: 'token punctuation attr-equals' } },
                                  [t._v('=')]
                                ),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ]),
                                t._v('columns'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ])
                              ]),
                              t._v('\n      '),
                              a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                                t._v(':form-options')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                a(
                                  'span',
                                  { pre: !0, attrs: { class: 'token punctuation attr-equals' } },
                                  [t._v('=')]
                                ),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ]),
                                t._v('{labelWidth:'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v("'")
                                ]),
                                t._v('100px'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v("'")
                                ]),
                                t._v('}'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ])
                              ]),
                              t._v('\n    '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('>')
                              ])
                            ]),
                            t._v('\n      '),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('<')
                                ]),
                                t._v('template')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                                t._v('#columnAfter')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('>')
                              ])
                            ]),
                            t._v('\n        '),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('<')
                                ]),
                                t._v('el-form-item')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('>')
                              ])
                            ]),
                            t._v('\n          '),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('<')
                                ]),
                                t._v('el-button')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                                t._v('type')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                a(
                                  'span',
                                  { pre: !0, attrs: { class: 'token punctuation attr-equals' } },
                                  [t._v('=')]
                                ),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ]),
                                t._v('primary'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ])
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                                t._v('@click')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                a(
                                  'span',
                                  { pre: !0, attrs: { class: 'token punctuation attr-equals' } },
                                  [t._v('=')]
                                ),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ]),
                                t._v('onSubmit'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ])
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('>')
                              ])
                            ]),
                            t._v('立即创建'),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('</')
                                ]),
                                t._v('el-button')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('>')
                              ])
                            ]),
                            t._v('\n          '),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('<')
                                ]),
                                t._v('el-button')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                                t._v('@click')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                a(
                                  'span',
                                  { pre: !0, attrs: { class: 'token punctuation attr-equals' } },
                                  [t._v('=')]
                                ),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ]),
                                t._v('resetForm'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ])
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('>')
                              ])
                            ]),
                            t._v('重置'),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('</')
                                ]),
                                t._v('el-button')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('>')
                              ])
                            ]),
                            t._v('\n        '),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('</')
                                ]),
                                t._v('el-form-item')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('>')
                              ])
                            ]),
                            t._v('\n      '),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('</')
                                ]),
                                t._v('template')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('>')
                              ])
                            ]),
                            t._v('\n    '),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('</')
                                ]),
                                t._v('el-pro-form')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('>')
                              ])
                            ]),
                            t._v('\n  '),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('</')
                                ]),
                                t._v('div')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('>')
                              ])
                            ]),
                            t._v('\n'),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('</')
                                ]),
                                t._v('template')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('>')
                              ])
                            ]),
                            t._v('\n\n'),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('<')
                                ]),
                                t._v('script')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('>')
                              ])
                            ]),
                            a('span', { pre: !0, attrs: { class: 'token script' } }, [
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token language-javascript' } },
                                [
                                  t._v('\n  '),
                                  a('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                    t._v('const')
                                  ]),
                                  t._v(' types '),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v('=')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n    '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('input')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'input'")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                    t._v('// 输入框')
                                  ]),
                                  t._v('\n    '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('select')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'select'")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                    t._v('// 选择框')
                                  ]),
                                  t._v('\n    '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('number')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'number'")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                    t._v('// 计数器')
                                  ]),
                                  t._v('\n    '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('checkBox')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'checkBox'")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                    t._v('// 多选框')
                                  ]),
                                  t._v('\n    '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('check')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'check'")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                    t._v('// 单个复选框')
                                  ]),
                                  t._v('\n    '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('radio')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'radio'")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                    t._v('// 单选框')
                                  ]),
                                  t._v('\n    '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('date')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'date'")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                    t._v('// 日期')
                                  ]),
                                  t._v('\n    '),
                                  a('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                    t._v('switch')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'switch'")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                    t._v('// 开关')
                                  ]),
                                  t._v('\n    '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('title')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'title'")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                    t._v('// 标题')
                                  ]),
                                  t._v('\n    '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('time')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'time'")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                    t._v('// 时间')
                                  ]),
                                  t._v('\n    '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('slider')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'slider'")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                    t._v('// 滑块')
                                  ]),
                                  t._v('\n    '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('rate')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'rate'")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                    t._v('// 评分')
                                  ]),
                                  t._v('\n    '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('color')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'color'")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                    t._v('// 颜色')
                                  ]),
                                  t._v('\n    '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('cascader')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'cascader'")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                    t._v('// 级联')
                                  ]),
                                  t._v('\n    '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('table')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'table'")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                    t._v('// 表格')
                                  ]),
                                  t._v('\n    '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('editor')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'editor'")
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                    t._v('// 富文本')
                                  ]),
                                  t._v('\n  '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v('\n  '),
                                  a('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                    t._v('export')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                    t._v('default')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n    '),
                                  a('span', { pre: !0, attrs: { class: 'token function' } }, [
                                    t._v('data')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('(')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(')')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n      '),
                                  a('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                    t._v('return')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n        '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('form')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n        '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('visible')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token boolean' } }, [
                                    t._v('false')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n        '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('columns')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n          '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('name')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n            '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'活动名称'")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('required')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token boolean' } }, [
                                    t._v('true')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('rules')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('[')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v(' '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('min')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token number' } }, [
                                    t._v('3')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v(' '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('max')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token number' } }, [
                                    t._v('5')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v(' '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('message')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'长度在 3 到 5 个字符'")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v(' '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('trigger')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'blur'")
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(']')
                                  ]),
                                  t._v('\n          '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n          '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('region')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n            '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'活动区域'")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('type')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' types'),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  t._v('radio'),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('required')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token boolean' } }, [
                                    t._v('true')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('options')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('[')
                                  ]),
                                  t._v('\n              '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n                '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('name')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'区域一'")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('value')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'shanghai'")
                                  ]),
                                  t._v('\n              '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n              '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n                '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('name')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'区域二'")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('value')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'beijing'")
                                  ]),
                                  t._v('\n              '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v('\n            '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(']')
                                  ]),
                                  t._v('\n          '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n          '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('date1')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n            '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'活动时间'")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('rules')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('[')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v(' '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('required')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token boolean' } }, [
                                    t._v('true')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v(' '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('message')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'请选择日期'")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v(' '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('trigger')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'change'")
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(']')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('type')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' types'),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  t._v('date'),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('span')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token number' } }, [
                                    t._v('11')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('columnOption')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n              '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('placeholder')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'选择日期'")
                                  ]),
                                  t._v('\n            '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v('\n          '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n          '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('date2')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n            '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'-'")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('span')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token number' } }, [
                                    t._v('11')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('rules')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('[')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v(' '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('required')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token boolean' } }, [
                                    t._v('true')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v(' '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('message')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'请选择时间'")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v(' '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('trigger')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'change'")
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(']')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('type')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' types'),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  t._v('time'),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('columnOption')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n              '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('placeholder')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'选择时间'")
                                  ]),
                                  t._v('\n            '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('formItemOption')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n              '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('labelWidth')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'auto'")
                                  ]),
                                  t._v('\n            '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v('\n          '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n          '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('delivery')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n            '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'即时配送'")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('type')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' types'),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  t._v('switch\n          '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n          '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('type')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n            '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'活动性质'")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('type')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' types'),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  t._v('checkBox'),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('required')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token boolean' } }, [
                                    t._v('true')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('options')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('[')
                                  ]),
                                  t._v('\n              '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n                '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('name')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'美食/餐厅线上活动'")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('value')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token number' } }, [
                                    t._v('1')
                                  ]),
                                  t._v('\n              '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n              '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n                '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('name')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'地推活动'")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('value')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token number' } }, [
                                    t._v('2')
                                  ]),
                                  t._v('\n              '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n              '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n                '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('name')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'线下主题活动'")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('value')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token number' } }, [
                                    t._v('3')
                                  ]),
                                  t._v('\n              '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n              '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n                '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('name')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'单纯品牌曝光'")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('value')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token number' } }, [
                                    t._v('4')
                                  ]),
                                  t._v('\n              '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v('\n            '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(']')
                                  ]),
                                  t._v('\n          '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n          '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('resource')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n            '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'特殊资源'")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('required')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token boolean' } }, [
                                    t._v('true')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('type')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' types'),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  t._v('radio'),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('options')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('[')
                                  ]),
                                  t._v('\n              '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n                '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('name')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'线上品牌商赞助'")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('value')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token number' } }, [
                                    t._v('1')
                                  ]),
                                  t._v('\n              '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n              '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n                '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('name')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'线下场地免费'")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n                '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('value')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token number' } }, [
                                    t._v('2')
                                  ]),
                                  t._v('\n              '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v('\n            '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(']')
                                  ]),
                                  t._v('\n          '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n          '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('desc')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n            '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'活动形式'")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('required')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token boolean' } }, [
                                    t._v('true')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('columnOption')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n              '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('type')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'textarea'")
                                  ]),
                                  t._v('\n            '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v('\n          '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v('\n        '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v('\n      '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v('\n    '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n    '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('methods')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n      '),
                                  a('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                    t._v('async')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token function' } }, [
                                    t._v('onSubmit')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('(')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(')')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n        '),
                                  a('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                    t._v('const')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v(' ruleForm '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v('=')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                    t._v('this')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  t._v('$refs\n        '),
                                  a('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                    t._v('try')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n          '),
                                  a('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                    t._v('const')
                                  ]),
                                  t._v(' checkResult '),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v('=')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                    t._v('await')
                                  ]),
                                  t._v(' ruleForm'),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token function' } }, [
                                    t._v('checkRule')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('(')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(')')
                                  ]),
                                  t._v('\n          '),
                                  a('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                    t._v('if')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('(')
                                  ]),
                                  t._v('checkResult'),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(')')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n            '),
                                  a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                    t._v('// do something')
                                  ]),
                                  t._v('\n          '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v('\n        '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                    t._v('catch')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('(')
                                  ]),
                                  t._v('err'),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(')')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n          console'),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token function' } }, [
                                    t._v('log')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('(')
                                  ]),
                                  t._v('err'),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(')')
                                  ]),
                                  t._v('\n        '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v('\n      '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n      '),
                                  a('span', { pre: !0, attrs: { class: 'token function' } }, [
                                    t._v('resetForm')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('(')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(')')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n        '),
                                  a('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                    t._v('const')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v(' ruleForm '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v('=')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                    t._v('this')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  t._v('$refs\n        ruleForm'),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token function' } }, [
                                    t._v('resetFields')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('(')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(')')
                                  ]),
                                  t._v('\n      '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v('\n    '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v('\n  '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v('\n')
                                ]
                              )
                            ]),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('</')
                                ]),
                                t._v('script')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('>')
                              ])
                            ]),
                            t._v('\n\n'),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('<')
                                ]),
                                t._v('style')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                                t._v('lang')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                a(
                                  'span',
                                  { pre: !0, attrs: { class: 'token punctuation attr-equals' } },
                                  [t._v('=')]
                                ),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ]),
                                t._v('scss'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ])
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                                t._v('scoped')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('>')
                              ])
                            ]),
                            a('span', { pre: !0, attrs: { class: 'token style' } }),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('</')
                                ]),
                                t._v('style')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
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
                a('h3', { attrs: { id: '自定义校验规则' } }, [
                  a('a', { staticClass: 'header-anchor', attrs: { href: '#自定义校验规则' } }, [
                    t._v('#')
                  ]),
                  t._v(' 自定义校验规则')
                ]),
                t._v(' '),
                a('p', [t._v('这个例子中展示了如何使用自定义验证规则来完成密码的二次验证。')]),
                t._v(' '),
                a(
                  'demo-block',
                  { attrs: { options: JSON.parse(decodeURI('%7B%7D')) } },
                  [
                    a('template', { slot: 'demo' }, [[a('render-demo-4')]], 2),
                    t._v(' '),
                    a('div', { attrs: { slot: 'description' }, slot: 'description' }, [
                      a('p', [
                        t._v('本例还使用'),
                        a('code', [t._v('status-icon')]),
                        t._v('属性为输入框添加了表示校验结果的反馈图标。')
                      ])
                    ]),
                    t._v(' '),
                    a('template', { slot: 'source' }, [
                      a('div', { staticClass: 'language-html extra-class' }, [
                        a('pre', { pre: !0, attrs: { class: 'language-html' } }, [
                          a('code', [
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('<')
                                ]),
                                t._v('el-pro-form')
                              ]),
                              t._v('\n  '),
                              a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                                t._v('v-model')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                a(
                                  'span',
                                  { pre: !0, attrs: { class: 'token punctuation attr-equals' } },
                                  [t._v('=')]
                                ),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ]),
                                t._v('ruleFormData'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ])
                              ]),
                              t._v('\n  '),
                              a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                                t._v(':columns')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                a(
                                  'span',
                                  { pre: !0, attrs: { class: 'token punctuation attr-equals' } },
                                  [t._v('=')]
                                ),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ]),
                                t._v('columns'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ])
                              ]),
                              t._v('\n  '),
                              a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                                t._v(':form-options')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                a(
                                  'span',
                                  { pre: !0, attrs: { class: 'token punctuation attr-equals' } },
                                  [t._v('=')]
                                ),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ]),
                                t._v('{\n    labelWidth:'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v("'")
                                ]),
                                t._v('100px'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v("'")
                                ]),
                                t._v(',\n    statusIcon:true\n  }'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ])
                              ]),
                              t._v('\n  '),
                              a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                                t._v('ref')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                a(
                                  'span',
                                  { pre: !0, attrs: { class: 'token punctuation attr-equals' } },
                                  [t._v('=')]
                                ),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ]),
                                t._v('ruleForm'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ])
                              ]),
                              t._v('\n'),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('>')
                              ])
                            ]),
                            t._v('\n  '),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('<')
                                ]),
                                t._v('div')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                                t._v('slot')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                a(
                                  'span',
                                  { pre: !0, attrs: { class: 'token punctuation attr-equals' } },
                                  [t._v('=')]
                                ),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ]),
                                t._v('columnAfter'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ])
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('>')
                              ])
                            ]),
                            t._v('\n    '),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('<')
                                ]),
                                t._v('el-form-item')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('>')
                              ])
                            ]),
                            t._v('\n      '),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('<')
                                ]),
                                t._v('el-button')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                                t._v('type')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                a(
                                  'span',
                                  { pre: !0, attrs: { class: 'token punctuation attr-equals' } },
                                  [t._v('=')]
                                ),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ]),
                                t._v('primary'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ])
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                                t._v('@click')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                a(
                                  'span',
                                  { pre: !0, attrs: { class: 'token punctuation attr-equals' } },
                                  [t._v('=')]
                                ),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ]),
                                t._v('submitForm'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ])
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('>')
                              ])
                            ]),
                            t._v('提交'),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('</')
                                ]),
                                t._v('el-button')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('>')
                              ])
                            ]),
                            t._v('\n      '),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('<')
                                ]),
                                t._v('el-button')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                                t._v('@click')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                                a(
                                  'span',
                                  { pre: !0, attrs: { class: 'token punctuation attr-equals' } },
                                  [t._v('=')]
                                ),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ]),
                                t._v('resetForm'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ])
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('>')
                              ])
                            ]),
                            t._v('重置'),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('</')
                                ]),
                                t._v('el-button')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('>')
                              ])
                            ]),
                            t._v('\n    '),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('</')
                                ]),
                                t._v('el-form-item')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('>')
                              ])
                            ]),
                            t._v('\n  '),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('</')
                                ]),
                                t._v('div')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('>')
                              ])
                            ]),
                            t._v('\n'),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('</')
                                ]),
                                t._v('el-pro-form')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('>')
                              ])
                            ]),
                            t._v('\n'),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('<')
                                ]),
                                t._v('script')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('>')
                              ])
                            ]),
                            a('span', { pre: !0, attrs: { class: 'token script' } }, [
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token language-javascript' } },
                                [
                                  t._v('\n  '),
                                  a('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                    t._v('export')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                    t._v('default')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n    '),
                                  a('span', { pre: !0, attrs: { class: 'token function' } }, [
                                    t._v('data')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('(')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(')')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n      '),
                                  a('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                    t._v('var')
                                  ]),
                                  t._v(' '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token function-variable function' }
                                    },
                                    [t._v('checkAge')]
                                  ),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v('=')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('(')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token parameter' } }, [
                                    t._v('rule'),
                                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                      t._v(',')
                                    ]),
                                    t._v(' value'),
                                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                      t._v(',')
                                    ]),
                                    t._v(' callback')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(')')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v('=>')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n        '),
                                  a('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                    t._v('if')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('(')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v('!')
                                  ]),
                                  t._v('value'),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(')')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n          '),
                                  a('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                    t._v('return')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token function' } }, [
                                    t._v('callback')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('(')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                    t._v('new')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token class-name' } }, [
                                    t._v('Error')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('(')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'年龄不能为空'")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(')')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(')')
                                  ]),
                                  t._v('\n        '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v('\n        '),
                                  a('span', { pre: !0, attrs: { class: 'token function' } }, [
                                    t._v('setTimeout')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('(')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('(')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(')')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v('=>')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n          '),
                                  a('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                    t._v('if')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('(')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v('!')
                                  ]),
                                  t._v('Number'),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token function' } }, [
                                    t._v('isInteger')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('(')
                                  ]),
                                  t._v('value'),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(')')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(')')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n            '),
                                  a('span', { pre: !0, attrs: { class: 'token function' } }, [
                                    t._v('callback')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('(')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                    t._v('new')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token class-name' } }, [
                                    t._v('Error')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('(')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'请输入数字值'")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(')')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(')')
                                  ]),
                                  t._v('\n          '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                    t._v('else')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n            '),
                                  a('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                    t._v('if')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('(')
                                  ]),
                                  t._v('value '),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v('<')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token number' } }, [
                                    t._v('18')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(')')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n              '),
                                  a('span', { pre: !0, attrs: { class: 'token function' } }, [
                                    t._v('callback')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('(')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                    t._v('new')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token class-name' } }, [
                                    t._v('Error')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('(')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'必须年满18岁'")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(')')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(')')
                                  ]),
                                  t._v('\n            '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                    t._v('else')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n              '),
                                  a('span', { pre: !0, attrs: { class: 'token function' } }, [
                                    t._v('callback')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('(')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(')')
                                  ]),
                                  t._v('\n            '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v('\n          '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v('\n        '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token number' } }, [
                                    t._v('1000')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(')')
                                  ]),
                                  t._v('\n      '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v('\n      '),
                                  a('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                    t._v('var')
                                  ]),
                                  t._v(' '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token function-variable function' }
                                    },
                                    [t._v('validatePass')]
                                  ),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v('=')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('(')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token parameter' } }, [
                                    t._v('rule'),
                                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                      t._v(',')
                                    ]),
                                    t._v(' value'),
                                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                      t._v(',')
                                    ]),
                                    t._v(' callback')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(')')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v('=>')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n        '),
                                  a('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                    t._v('if')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('(')
                                  ]),
                                  t._v('value '),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v('===')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("''")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(')')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n          '),
                                  a('span', { pre: !0, attrs: { class: 'token function' } }, [
                                    t._v('callback')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('(')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                    t._v('new')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token class-name' } }, [
                                    t._v('Error')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('(')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'请输入密码'")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(')')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(')')
                                  ]),
                                  t._v('\n        '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                    t._v('else')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n          '),
                                  a('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                    t._v('if')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('(')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                    t._v('this')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  t._v('ruleFormData'),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  t._v('checkPass '),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v('!==')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("''")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(')')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n            '),
                                  a('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                    t._v('this')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  t._v('$refs'),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  t._v('ruleForm'),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token function' } }, [
                                    t._v('validateField')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('(')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'checkPass'")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(')')
                                  ]),
                                  t._v('\n          '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v('\n          '),
                                  a('span', { pre: !0, attrs: { class: 'token function' } }, [
                                    t._v('callback')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('(')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(')')
                                  ]),
                                  t._v('\n        '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v('\n      '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v('\n      '),
                                  a('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                    t._v('var')
                                  ]),
                                  t._v(' '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token function-variable function' }
                                    },
                                    [t._v('validatePass2')]
                                  ),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v('=')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('(')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token parameter' } }, [
                                    t._v('rule'),
                                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                      t._v(',')
                                    ]),
                                    t._v(' value'),
                                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                      t._v(',')
                                    ]),
                                    t._v(' callback')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(')')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v('=>')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n        '),
                                  a('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                    t._v('if')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('(')
                                  ]),
                                  t._v('value '),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v('===')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("''")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(')')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n          '),
                                  a('span', { pre: !0, attrs: { class: 'token function' } }, [
                                    t._v('callback')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('(')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                    t._v('new')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token class-name' } }, [
                                    t._v('Error')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('(')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'请再次输入密码'")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(')')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(')')
                                  ]),
                                  t._v('\n        '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                    t._v('else')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                    t._v('if')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('(')
                                  ]),
                                  t._v('value '),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v('!==')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                    t._v('this')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  t._v('ruleFormData'),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  t._v('pass'),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(')')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n          '),
                                  a('span', { pre: !0, attrs: { class: 'token function' } }, [
                                    t._v('callback')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('(')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                    t._v('new')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token class-name' } }, [
                                    t._v('Error')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('(')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'两次输入密码不一致!'")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(')')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(')')
                                  ]),
                                  t._v('\n        '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                    t._v('else')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n          '),
                                  a('span', { pre: !0, attrs: { class: 'token function' } }, [
                                    t._v('callback')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('(')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(')')
                                  ]),
                                  t._v('\n        '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v('\n      '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v('\n      '),
                                  a('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                    t._v('return')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n        '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('ruleFormData')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n          '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('pass')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("''")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n          '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('checkPass')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("''")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n          '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('age')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("''")
                                  ]),
                                  t._v('\n        '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n        '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('columns')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n          '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('pass')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n            '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'密码'")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('rules')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('[')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v(' '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('validator')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' validatePass'),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v(' '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('trigger')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'blur'")
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(']')
                                  ]),
                                  t._v('\n          '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n          '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('checkPass')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n            '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'确认密码'")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('rules')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('[')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v(' '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('validator')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' validatePass2'),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v(' '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('trigger')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'blur'")
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(']')
                                  ]),
                                  t._v('\n          '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n          '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('age')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n            '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('label')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'年龄'")
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n            '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('rules')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('[')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v(' '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('validator')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' checkAge'),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v(' '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('trigger')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                    t._v("'blur'")
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(']')
                                  ]),
                                  t._v('\n          '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v('\n        '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v('\n      '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v('\n    '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n    '),
                                  a(
                                    'span',
                                    {
                                      pre: !0,
                                      attrs: { class: 'token literal-property property' }
                                    },
                                    [t._v('methods')]
                                  ),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v(':')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n      '),
                                  a('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                    t._v('async')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token function' } }, [
                                    t._v('submitForm')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('(')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(')')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n        '),
                                  a('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                    t._v('try')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n          '),
                                  a('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                    t._v('const')
                                  ]),
                                  t._v(' checkResult '),
                                  a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                    t._v('=')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                    t._v('await')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                    t._v('this')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  t._v('$refs'),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  t._v('ruleForm'),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token function' } }, [
                                    t._v('checkRule')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('(')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(')')
                                  ]),
                                  t._v('\n          '),
                                  a('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                    t._v('if')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('(')
                                  ]),
                                  t._v('checkResult'),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(')')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n            '),
                                  a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                    t._v('// do something')
                                  ]),
                                  t._v('\n          '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v('\n        '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                    t._v('catch')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('(')
                                  ]),
                                  t._v('err'),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(')')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n          console'),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token function' } }, [
                                    t._v('log')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('(')
                                  ]),
                                  t._v('err'),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(')')
                                  ]),
                                  t._v('\n        '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v('\n      '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(',')
                                  ]),
                                  t._v('\n      '),
                                  a('span', { pre: !0, attrs: { class: 'token function' } }, [
                                    t._v('resetForm')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('(')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(')')
                                  ]),
                                  t._v(' '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('{')
                                  ]),
                                  t._v('\n        '),
                                  a('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                    t._v('this')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  t._v('$refs'),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  t._v('ruleForm'),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('.')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token function' } }, [
                                    t._v('resetFields')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('(')
                                  ]),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v(')')
                                  ]),
                                  t._v('\n      '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v('\n    '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v('\n  '),
                                  a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                    t._v('}')
                                  ]),
                                  t._v('\n')
                                ]
                              )
                            ]),
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('</')
                                ]),
                                t._v('script')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
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
                a('h2', { attrs: { id: '表单类型' } }, [
                  a('a', { staticClass: 'header-anchor', attrs: { href: '#表单类型' } }, [
                    t._v('#')
                  ]),
                  t._v(' 表单类型')
                ]),
                t._v(' '),
                a('div', { staticClass: 'language-js extra-class' }, [
                  a('pre', { pre: !0, attrs: { class: 'language-js' } }, [
                    a('code', [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('export')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('const')]),
                      t._v(' types '),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                      t._v('\n  '),
                      a('span', { pre: !0, attrs: { class: 'token literal-property property' } }, [
                        t._v('input')
                      ]),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'input'")]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                        t._v('// 输入框')
                      ]),
                      t._v('\n  '),
                      a('span', { pre: !0, attrs: { class: 'token literal-property property' } }, [
                        t._v('select')
                      ]),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'select'")]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                        t._v('// 选择框')
                      ]),
                      t._v('\n  '),
                      a('span', { pre: !0, attrs: { class: 'token literal-property property' } }, [
                        t._v('number')
                      ]),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'number'")]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                        t._v('// 计数器')
                      ]),
                      t._v('\n  '),
                      a('span', { pre: !0, attrs: { class: 'token literal-property property' } }, [
                        t._v('checkBox')
                      ]),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'checkBox'")
                      ]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                        t._v('// 多选框')
                      ]),
                      t._v('\n  '),
                      a('span', { pre: !0, attrs: { class: 'token literal-property property' } }, [
                        t._v('check')
                      ]),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'check'")]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                        t._v('// 单个复选框')
                      ]),
                      t._v('\n  '),
                      a('span', { pre: !0, attrs: { class: 'token literal-property property' } }, [
                        t._v('radio')
                      ]),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'radio'")]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                        t._v('// 单选框')
                      ]),
                      t._v('\n  '),
                      a('span', { pre: !0, attrs: { class: 'token literal-property property' } }, [
                        t._v('date')
                      ]),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'date'")]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// 日期')]),
                      t._v('\n  '),
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('switch')]),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'switch'")]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// 开关')]),
                      t._v('\n  '),
                      a('span', { pre: !0, attrs: { class: 'token literal-property property' } }, [
                        t._v('title')
                      ]),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'title'")]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// 标题')]),
                      t._v('\n  '),
                      a('span', { pre: !0, attrs: { class: 'token literal-property property' } }, [
                        t._v('time')
                      ]),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'time'")]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// 时间')]),
                      t._v('\n  '),
                      a('span', { pre: !0, attrs: { class: 'token literal-property property' } }, [
                        t._v('slider')
                      ]),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'slider'")]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// 滑块')]),
                      t._v('\n  '),
                      a('span', { pre: !0, attrs: { class: 'token literal-property property' } }, [
                        t._v('rate')
                      ]),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'rate'")]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// 评分')]),
                      t._v('\n  '),
                      a('span', { pre: !0, attrs: { class: 'token literal-property property' } }, [
                        t._v('color')
                      ]),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'color'")]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// 颜色')]),
                      t._v('\n  '),
                      a('span', { pre: !0, attrs: { class: 'token literal-property property' } }, [
                        t._v('cascader')
                      ]),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'cascader'")
                      ]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// 级联')]),
                      t._v('\n  '),
                      a('span', { pre: !0, attrs: { class: 'token literal-property property' } }, [
                        t._v('table')
                      ]),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'table'")]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// 表格')]),
                      t._v('\n  '),
                      a('span', { pre: !0, attrs: { class: 'token literal-property property' } }, [
                        t._v('editor')
                      ]),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'editor'")]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                        t._v('// 富文本')
                      ]),
                      t._v('\n'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                      t._v('\n')
                    ])
                  ])
                ]),
                a('h2', { attrs: { id: 'attributes' } }, [
                  a('a', { staticClass: 'header-anchor', attrs: { href: '#attributes' } }, [
                    t._v('#')
                  ]),
                  t._v(' Attributes')
                ]),
                t._v(' '),
                a('table', [
                  a('thead', [
                    a('tr', [
                      a('th', { staticStyle: { 'text-align': 'center' } }, [t._v('参数')]),
                      t._v(' '),
                      a('th', { staticStyle: { 'text-align': 'center' } }, [t._v('说明')]),
                      t._v(' '),
                      a('th', { staticStyle: { 'text-align': 'center' } }, [t._v('类型')]),
                      t._v(' '),
                      a('th', { staticStyle: { 'text-align': 'center' } }, [t._v('可选值')]),
                      t._v(' '),
                      a('th', { staticStyle: { 'text-align': 'center' } }, [t._v('默认值')])
                    ])
                  ]),
                  t._v(' '),
                  a('tbody', [
                    a('tr', [
                      a('td', { staticStyle: { 'text-align': 'center' } }, [t._v('v-model')]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [t._v('表单数据')]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [t._v('object')]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [t._v('—')]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [t._v('{}')])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', { staticStyle: { 'text-align': 'center' } }, [t._v('columns')]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [t._v('表单配置项')]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('[object, array]')
                      ]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [t._v('—')]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [t._v('{}')])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', { staticStyle: { 'text-align': 'center' } }, [t._v('formOptions')]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('官方支持的参数集合')
                      ]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [t._v('object')]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [t._v('—')]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [t._v('{}')])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', { staticStyle: { 'text-align': 'center' } }, [t._v('loading')]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [t._v('表单 loading')]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [t._v('boolean')]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [t._v('—')]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [t._v('false')])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', { staticStyle: { 'text-align': 'center' } }, [t._v('isRow')]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('是否启用栅格布局')
                      ]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [t._v('boolean')]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [t._v('—')]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [t._v('true')])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', { staticStyle: { 'text-align': 'center' } }, [t._v('showNum')]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('搜索组件内部使用,显示可见的表单项个数')
                      ]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('[number, string]')
                      ]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [t._v('—')]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [t._v('2')])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', { staticStyle: { 'text-align': 'center' } }, [t._v('isCollapse')]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('搜索组件内部使用,是否开启展开收起')
                      ]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [t._v('boolean')]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [t._v('—')]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [t._v('false')])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', { staticStyle: { 'text-align': 'center' } }, [t._v('showAll')]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('搜索组件内部使用,是否展开收起')
                      ]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [t._v('boolean')]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [t._v('—')]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [t._v('true')])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('tableDialogOptions')
                      ]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('表单类型-table 的弹窗 options')
                      ]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [t._v('object')]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [t._v('—')]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [t._v('{}')])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('tableFormOptions')
                      ]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('表单类型-table 的表单 options')
                      ]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [t._v('object')]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [t._v('—')]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [t._v('{}')])
                    ])
                  ])
                ]),
                t._v(' '),
                a('h2', { attrs: { id: 'slot' } }, [
                  a('a', { staticClass: 'header-anchor', attrs: { href: '#slot' } }, [t._v('#')]),
                  t._v(' Slot')
                ]),
                t._v(' '),
                a('table', [
                  a('thead', [
                    a('tr', [
                      a('th', { staticStyle: { 'text-align': 'center' } }, [t._v('name')]),
                      t._v(' '),
                      a('th', { staticStyle: { 'text-align': 'center' } }, [t._v('说明')])
                    ])
                  ]),
                  t._v(' '),
                  a('tbody', [
                    a('tr', [
                      a('td', { staticStyle: { 'text-align': 'center' } }, [t._v('columnBefore')]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('表单内前面的内容 参数(form)')
                      ])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', { staticStyle: { 'text-align': 'center' } }, [t._v('columnAfter')]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('表单内后面的内容 参数(form)')
                      ])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', { staticStyle: { 'text-align': 'center' } }, [t._v('formBefore')]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('表单前面的内容 参数(form)')
                      ])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', { staticStyle: { 'text-align': 'center' } }, [t._v('formAfter')]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('表单后面的内容 参数(form)')
                      ])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', { staticStyle: { 'text-align': 'center' } }, [t._v('${key}-all')]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('替换 form-item 的插槽 参数(form)')
                      ])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', { staticStyle: { 'text-align': 'center' } }, [t._v('${key}')]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('替换组件的插槽 参数(form)')
                      ])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', { staticStyle: { 'text-align': 'center' } }, [t._v('rowBefore')]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('el-form-item 之前的内容 参数(form)')
                      ])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', { staticStyle: { 'text-align': 'center' } }, [t._v('rowAfter')]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('el-form-item 之后的内容 参数(form)')
                      ])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', { staticStyle: { 'text-align': 'center' } }, [t._v('${key}Prefix')]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('同 input prefix 插槽 参数(form)')
                      ])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', { staticStyle: { 'text-align': 'center' } }, [t._v('${key}Suffix')]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('同 input suffix 插槽 参数(form)')
                      ])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', { staticStyle: { 'text-align': 'center' } }, [t._v('${key}Prepend')]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('同 input prepend 插槽 参数(form)')
                      ])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', { staticStyle: { 'text-align': 'center' } }, [t._v('${key}Append')]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('同 input append 插槽 参数(form)')
                      ])
                    ])
                  ])
                ]),
                t._v(' '),
                a('h2', { attrs: { id: 'refs-events' } }, [
                  a('a', { staticClass: 'header-anchor', attrs: { href: '#refs-events' } }, [
                    t._v('#')
                  ]),
                  t._v(' Refs Events')
                ]),
                t._v(' '),
                a('h3', { attrs: { id: '表单内容重置' } }, [
                  a('a', { staticClass: 'header-anchor', attrs: { href: '#表单内容重置' } }, [
                    t._v('#')
                  ]),
                  t._v(' 表单内容重置')
                ]),
                t._v(' '),
                a('p', [a('code', [t._v('resetFields()')])]),
                t._v(' '),
                a('div', { staticClass: 'language-js extra-class' }, [
                  a('pre', { pre: !0, attrs: { class: 'language-js' } }, [
                    a('code', [
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                        t._v('// 获取表单ref实例 调用')
                      ]),
                      t._v('\n'),
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('this')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                      t._v('$refs'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                      t._v('dataForm'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                      a('span', { pre: !0, attrs: { class: 'token function' } }, [
                        t._v('resetFields')
                      ]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                      t._v('\n')
                    ])
                  ])
                ]),
                a('h3', { attrs: { id: '表单内容验证' } }, [
                  a('a', { staticClass: 'header-anchor', attrs: { href: '#表单内容验证' } }, [
                    t._v('#')
                  ]),
                  t._v(' 表单内容验证')
                ]),
                t._v(' '),
                a('p', [a('code', [t._v('checkRule()')])]),
                t._v(' '),
                a('div', { staticClass: 'language-js extra-class' }, [
                  a('pre', { pre: !0, attrs: { class: 'language-js' } }, [
                    a('code', [
                      t._v('    '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// 提交')]),
                      t._v('\n    '),
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('async')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token function' } }, [
                        t._v('submitForm')
                      ]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                      t._v('\n      '),
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('const')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                      t._v(' dataForm '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('this')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                      t._v('$refs'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                      t._v('\n      '),
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('try')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                      t._v('\n        '),
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('const')]),
                      t._v(' checkResult '),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('await')]),
                      t._v(' dataForm'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                      a('span', { pre: !0, attrs: { class: 'token function' } }, [
                        t._v('checkRule')
                      ]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                      t._v('\n        '),
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('if')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                      t._v('checkResult'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                      t._v('\n          '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                        t._v('//...do something')
                      ]),
                      t._v('\n        '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                      t._v('\n      '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('catch')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                      t._v('error'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                      t._v('\n        console'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                      a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('log')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                      t._v('error'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                      t._v('\n      '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                      t._v('\n    '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                      t._v('\n')
                    ])
                  ])
                ]),
                a('h2', { attrs: { id: 'column-配置项' } }, [
                  a('a', { staticClass: 'header-anchor', attrs: { href: '#column-配置项' } }, [
                    t._v('#')
                  ]),
                  t._v(' column 配置项')
                ]),
                t._v(' '),
                a('blockquote', [a('p', [t._v('此格式 form、search、table、advanceSearch 通用')])]),
                t._v(' '),
                a('p', [t._v('总体格式为一个对象。类似')]),
                t._v(' '),
                a('div', { staticClass: 'language-js extra-class' }, [
                  a('pre', { pre: !0, attrs: { class: 'language-js' } }, [
                    a('code', [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('export')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('function')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token function' } }, [
                        t._v('getMetaData')
                      ]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                      t._v('\n  '),
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('return')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                      t._v('\n    '),
                      a('span', { pre: !0, attrs: { class: 'token literal-property property' } }, [
                        t._v('key1')
                      ]),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                      t._v('\n    '),
                      a('span', { pre: !0, attrs: { class: 'token literal-property property' } }, [
                        t._v('key2')
                      ]),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                      t._v('\n  '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                      t._v('\n'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                      t._v('\n')
                    ])
                  ])
                ]),
                a('p', [
                  t._v('使用一个函数来返回一个对象，优点是可以使用组件内部的'),
                  a('code', [t._v('this')]),
                  t._v('。')
                ]),
                t._v(' '),
                a('p', [t._v('只需要调用的时候这样:')]),
                t._v(' '),
                a('div', { staticClass: 'language-js extra-class' }, [
                  a('pre', { pre: !0, attrs: { class: 'language-js' } }, [
                    a('code', [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('import')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                      t._v(' getMetaData '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('from')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v('"./meta-data"')
                      ]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                      t._v('\n\n'),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                        t._v('// 生命周期函数里初始化调用 传入组件this')
                      ]),
                      t._v('\n'),
                      a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('created')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                      t._v('\n   '),
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('this')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                      t._v('columns '),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token function' } }, [
                        t._v('getMetaData')
                      ]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                      a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('call')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('this')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                      t._v('\n'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                      t._v('\n')
                    ])
                  ])
                ]),
                a('table', [
                  a('thead', [
                    a('tr', [
                      a('th', { staticStyle: { 'text-align': 'center' } }, [t._v('name')]),
                      t._v(' '),
                      a('th', { staticStyle: { 'text-align': 'center' } }, [t._v('说明')]),
                      t._v(' '),
                      a('th', { staticStyle: { 'text-align': 'center' } }, [t._v('类型')])
                    ])
                  ]),
                  t._v(' '),
                  a('tbody', [
                    a('tr', [
                      a('td', { staticStyle: { 'text-align': 'center' } }, [t._v('label')]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [t._v('表单的 label')]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [t._v('string')])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', { staticStyle: { 'text-align': 'center' } }, [t._v('tableLabel')]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('当 label 和表格中的显示不一致时，优先匹配 tableLabel')
                      ]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [t._v('string')])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', { staticStyle: { 'text-align': 'center' } }, [t._v('searchLabel')]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('当 label 和搜索中的显示不一致时，优先匹配 tableLabel')
                      ]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [t._v('string')])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', { staticStyle: { 'text-align': 'center' } }, [t._v('tooltip')]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('form-item 后面的小提示')
                      ]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [t._v('string')])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', { staticStyle: { 'text-align': 'center' } }, [t._v('defaultValue')]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [t._v('默认值')]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [t._v('any')])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', { staticStyle: { 'text-align': 'center' } }, [t._v('type')]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('表单的 type，不填默认为 input')
                      ]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [t._v('string')])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', { staticStyle: { 'text-align': 'center' } }, [t._v('required')]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [t._v('是否必填')]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [t._v('boolean')])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', { staticStyle: { 'text-align': 'center' } }, [t._v('rules')]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [t._v('检验数组')]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [t._v('array')])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', { staticStyle: { 'text-align': 'center' } }, [t._v('columnOption')]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('组件的内部 options,例如 maxlength,placeholder')
                      ]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [t._v('object')])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', { staticStyle: { 'text-align': 'center' } }, [t._v('options')]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('下拉框/单选框/多选框的 options 默认[{name,value}]格式')
                      ]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('array/function(form)')
                      ])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', { staticStyle: { 'text-align': 'center' } }, [t._v('showInSearch')]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('是否显示在搜索框中')
                      ]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [t._v('boolean')])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', { staticStyle: { 'text-align': 'center' } }, [t._v('showInTable')]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('是否显示在表格中')
                      ]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [t._v('boolean')])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('formItemOption')
                      ]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('form-item 的 options,常用比如 label-width')
                      ]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [t._v('object')])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('formColumnShow')
                      ]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('是否在表单里显示,接收一个函数或者布尔值，返回 boolean false 隐藏')
                      ]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('boolean/function(form)')
                      ])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', { staticStyle: { 'text-align': 'center' } }, [t._v('span')]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('栅格布局 比例 默认 18 一共 24')
                      ]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [t._v('number')])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', { staticStyle: { 'text-align': 'center' } }, [t._v('colSpanOption')]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('el-col 的配置项')
                      ]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [t._v('object')])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', { staticStyle: { 'text-align': 'center' } }, [t._v('showFormat')]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('表格格式化,例如 select/radio 传的值为 1,2,3,渲染成 options 的 name')
                      ]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('function(val, row, scope)')
                      ])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('tableColumnOption')
                      ]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('表格 el-column 的配置项,例如 width,showOverflowTooltip')
                      ]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [t._v('object')])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', { staticStyle: { 'text-align': 'center' } }, [t._v('onChange')]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('表单的 change 回调事件')
                      ]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [t._v('function(item)')])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', { staticStyle: { 'text-align': 'center' } }, [t._v('copy')]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('表格内是否显示复制图标')
                      ]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [t._v('boolean')])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', { staticStyle: { 'text-align': 'center' } }, [t._v('isTag')]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('表格内是否用 el-tag 渲染')
                      ]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [t._v('boolean')])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', { staticStyle: { 'text-align': 'center' } }, [t._v('tagOptions')]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('el-tag 的配置项,也可以直接写 tag 的类型')
                      ]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('string/object/function')
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
      s.default = x.exports
    }
  }
])
