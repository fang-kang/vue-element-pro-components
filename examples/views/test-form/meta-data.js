import { types } from 'packages/form'
import dict from './dict'
import { getArrayValue } from 'src/utils'
export function getMetaData() {
  return {
    title: {
      label: '基本信息',
      type: types.title
    },
    tree: {
      label: '树结构',
      type: types.tree,
      onChange: (i) => {
        console.log(i, 'i')
      },
      columnOption: {
        showCheckbox: true,
        draggable: true
      },
      options: [
        {
          label: '一级 1',
          children: [
            {
              label: '二级 1-1',
              children: [
                {
                  label: '三级 1-1-1'
                }
              ]
            }
          ]
        },
        {
          label: '一级 2',
          children: [
            {
              label: '二级 2-1',
              children: [
                {
                  label: '三级 2-1-1'
                }
              ]
            },
            {
              label: '二级 2-2',
              children: [
                {
                  label: '三级 2-2-1'
                }
              ]
            }
          ]
        },
        {
          label: '一级 3',
          children: [
            {
              label: '二级 3-1',
              children: [
                {
                  label: '三级 3-1-1'
                }
              ]
            },
            {
              label: '二级 3-2',
              children: [
                {
                  label: '三级 3-2-1'
                }
              ]
            }
          ]
        }
      ]
    },
    tree2: {
      label: '树结构',
      type: types.tree,
      onChange: (i) => {
        console.log(i, 'i')
      },
      columnOption: {
        showCheckbox: true,
        draggable: true
      },
      options: [
        {
          label: '一级 1',
          children: [
            {
              label: '二级 1-1',
              children: [
                {
                  label: '三级 1-1-1'
                }
              ]
            }
          ]
        },
        {
          label: '一级 2',
          children: [
            {
              label: '二级 2-1',
              children: [
                {
                  label: '三级 2-1-1'
                }
              ]
            },
            {
              label: '二级 2-2',
              children: [
                {
                  label: '三级 2-2-1'
                }
              ]
            }
          ]
        },
        {
          label: '一级 3',
          children: [
            {
              label: '二级 3-1',
              children: [
                {
                  label: '三级 3-1-1'
                }
              ]
            },
            {
              label: '二级 3-2',
              children: [
                {
                  label: '三级 3-2-1'
                }
              ]
            }
          ]
        }
      ]
    },
    input: {
      label: '输入框',
      type: types.input,
      defaultValue: '输入框',
      isTag: true,
      tagOptions: 'warning',
      span: 12,
      required: true,
      showInSearch: true,
      formItemOption: {},
      showInTable: true,
      tooltip: '测试输入框',
      onChange: (item) => {
        console.log(item, 'item')
        if (item.form.input === 1) {
          this.$message.success('成功')
          item.form.num = 11
          item.form.radio = 2
          item.form.select = 1
        }
      }
    },
    select: {
      label: '下拉框',
      type: types.select,
      defaultValue: 1,
      span: 12,
      options: dict.selectArr,
      showInSearch: true,
      showInTable: true,
      showFormat: (val) => {
        return getArrayValue(dict.selectArr, val)
      }
    },
    switch: {
      label: '开关',
      type: types.switch,
      defaultValue: true,
      span: 12
    },
    radio: {
      label: '单选框',
      type: types.radio,
      defaultValue: 1,
      span: 12,
      options: dict.selectArr,
      showInSearch: true,
      showInTable: true,
      showFormat: (val) => {
        return getArrayValue(dict.selectArr, val)
      }
    },
    checxbox: {
      label: '多选框',
      defaultValue: [1],
      type: types.checkBox,
      span: 12,
      options: dict.selectArr,
      showInSearch: true,
      showInTable: true,
      showFormat: (val) => {
        return getArrayValue(dict.selectArr, val)
      }
    },
    date: {
      label: '日期',
      defaultValue: '2021-11-11',
      type: types.date,
      span: 10,
      showInSearch: false,
      showInTable: true
    },
    num: {
      label: '数字',
      type: types.number,
      defaultValue: 1,
      span: 10,
      showInTable: true
    },
    time: {
      label: '时间',
      type: types.time,
      span: 12,
      showInSearch: false,
      showInTable: true
    },
    slider: {
      label: '滑块',
      type: types.slider,
      span: 12,
      showInTable: true,
      showInSearch: false
    },
    rate: {
      label: '评分',
      type: types.rate,
      span: 12,
      showInTable: true,
      showInSearch: false
    },
    color: {
      label: '颜色',
      type: types.color,
      showInSearch: false,
      span: 12
    },
    cascader: {
      label: '级联',
      showInSearch: false,
      type: types.cascader,
      options: [
        {
          value: 'zhinan',
          label: '指南',
          disabled: true,
          children: [
            {
              value: 'shejiyuanze',
              label: '设计原则',
              children: [
                {
                  value: 'yizhi',
                  label: '一致'
                },
                {
                  value: 'fankui',
                  label: '反馈'
                },
                {
                  value: 'xiaolv',
                  label: '效率'
                },
                {
                  value: 'kekong',
                  label: '可控'
                }
              ]
            },
            {
              value: 'daohang',
              label: '导航',
              children: [
                {
                  value: 'cexiangdaohang',
                  label: '侧向导航'
                },
                {
                  value: 'dingbudaohang',
                  label: '顶部导航'
                }
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
                {
                  value: 'layout',
                  label: 'Layout 布局'
                },
                {
                  value: 'color',
                  label: 'Color 色彩'
                },
                {
                  value: 'typography',
                  label: 'Typography 字体'
                },
                {
                  value: 'icon',
                  label: 'Icon 图标'
                },
                {
                  value: 'button',
                  label: 'Button 按钮'
                }
              ]
            },
            {
              value: 'form',
              label: 'Form',
              children: [
                {
                  value: 'radio',
                  label: 'Radio 单选框'
                },
                {
                  value: 'checkbox',
                  label: 'Checkbox 多选框'
                },
                {
                  value: 'input',
                  label: 'Input 输入框'
                },
                {
                  value: 'input-number',
                  label: 'InputNumber 计数器'
                },
                {
                  value: 'select',
                  label: 'Select 选择器'
                },
                {
                  value: 'cascader',
                  label: 'Cascader 级联选择器'
                },
                {
                  value: 'switch',
                  label: 'Switch 开关'
                },
                {
                  value: 'slider',
                  label: 'Slider 滑块'
                },
                {
                  value: 'time-picker',
                  label: 'TimePicker 时间选择器'
                },
                {
                  value: 'date-picker',
                  label: 'DatePicker 日期选择器'
                },
                {
                  value: 'datetime-picker',
                  label: 'DateTimePicker 日期时间选择器'
                },
                {
                  value: 'upload',
                  label: 'Upload 上传'
                },
                {
                  value: 'rate',
                  label: 'Rate 评分'
                },
                {
                  value: 'form',
                  label: 'Form 表单'
                }
              ]
            },
            {
              value: 'data',
              label: 'Data',
              children: [
                {
                  value: 'table',
                  label: 'Table 表格'
                },
                {
                  value: 'tag',
                  label: 'Tag 标签'
                },
                {
                  value: 'progress',
                  label: 'Progress 进度条'
                },
                {
                  value: 'tree',
                  label: 'Tree 树形控件'
                },
                {
                  value: 'pagination',
                  label: 'Pagination 分页'
                },
                {
                  value: 'badge',
                  label: 'Badge 标记'
                }
              ]
            },
            {
              value: 'notice',
              label: 'Notice',
              children: [
                {
                  value: 'alert',
                  label: 'Alert 警告'
                },
                {
                  value: 'loading',
                  label: 'Loading 加载'
                },
                {
                  value: 'message',
                  label: 'Message 消息提示'
                },
                {
                  value: 'message-box',
                  label: 'MessageBox 弹框'
                },
                {
                  value: 'notification',
                  label: 'Notification 通知'
                }
              ]
            },
            {
              value: 'navigation',
              label: 'Navigation',
              children: [
                {
                  value: 'menu',
                  label: 'NavMenu 导航菜单'
                },
                {
                  value: 'tabs',
                  label: 'Tabs 标签页'
                },
                {
                  value: 'breadcrumb',
                  label: 'Breadcrumb 面包屑'
                },
                {
                  value: 'dropdown',
                  label: 'Dropdown 下拉菜单'
                },
                {
                  value: 'steps',
                  label: 'Steps 步骤条'
                }
              ]
            },
            {
              value: 'others',
              label: 'Others',
              children: [
                {
                  value: 'dialog',
                  label: 'Dialog 对话框'
                },
                {
                  value: 'tooltip',
                  label: 'Tooltip 文字提示'
                },
                {
                  value: 'popover',
                  label: 'Popover 弹出框'
                },
                {
                  value: 'card',
                  label: 'Card 卡片'
                },
                {
                  value: 'carousel',
                  label: 'Carousel 走马灯'
                },
                {
                  value: 'collapse',
                  label: 'Collapse 折叠面板'
                }
              ]
            }
          ]
        },
        {
          value: 'ziyuan',
          label: '资源',
          children: [
            {
              value: 'axure',
              label: 'Axure Components'
            },
            {
              value: 'sketch',
              label: 'Sketch Templates'
            },
            {
              value: 'jiaohu',
              label: '组件交互文档'
            }
          ]
        }
      ],
      span: 12
    },
    table: {
      label: '测试表格',
      defaultValue: [{ input: '1' }],
      span: 24,
      type: types.table,
      tableDataOptions: {
        input: {
          label: '输入框',
          type: types.input,
          span: 12,
          showInTable: true
        },
        select: {
          label: '下拉框',
          type: types.select,
          span: 12,
          options: dict.selectArr,
          showInTable: true,
          showFormat: (val) => {
            return getArrayValue(dict.selectArr, val)
          }
        },
        switch: {
          label: '开关',
          type: types.switch,
          span: 12
        },
        radio: {
          label: '单选框',
          type: types.radio,
          span: 12,
          options: dict.selectArr
        },
        checxbox: {
          label: '多选框',
          type: types.checkBox,
          span: 12,
          options: dict.selectArr
        },
        date: {
          label: '日期',
          type: types.date,
          span: 12
        },
        num: {
          label: '数字',
          required: true,
          type: types.number,
          span: 12,
          showInTable: true
        },
        time: {
          label: '时间',
          type: types.time,
          showInTable: true,
          span: 12
        }
      }
    },
    editor: {
      label: '富文本',
      type: types.editor,
      span: 24,
      showInSearch: false,
      tooltip: '富文本提示',
      defaultValue: '富文本'
    }
  }
}
