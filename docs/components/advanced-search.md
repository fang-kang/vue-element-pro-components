# 通用高级查询-ElProAdvancedSearch

## 基本用法

:::demo

```html
<template>
  <el-button @click="visible = true">测试高级查询</el-button>
  <el-pro-advanced-search
    title="高级查询"
    :visible.sync="visible"
    :columns="columns"
    v-model="queryForm"
    @search="dataReload"
    @reset="visible = false"
  />
</template>

<script>
  const types = {
    input: 'input', // 输入框
    select: 'select', // 选择框
    number: 'number', // 计数器
    checkBox: 'checkBox', // 多选框
    check: 'check', // 单个复选框
    radio: 'radio', // 单选框
    date: 'date', // 日期
    switch: 'switch', // 开关
    title: 'title', // 标题
    time: 'time', // 时间
    slider: 'slider', // 滑块
    rate: 'rate', // 评分
    color: 'color', // 颜色
    cascader: 'cascader', // 级联
    table: 'table', // 表格
    editor: 'editor' // 富文本
  }
  export default {
    data() {
      return {
        queryForm: {},
        columns: {},
        visible: false,
        dict: {
          selectArr: [
            {
              name: 'select-1',
              value: 1
            },
            {
              name: 'select-2',
              value: 2
            }
          ]
        }
      }
    },
    created() {
      this.columns = this.getMetaData()
    },
    methods: {
      dataReload() {
        console.log(this.queryForm)
      },
      getMetaData() {
        return {
          title: {
            label: '基本信息',
            type: types.title
          },
          input: {
            label: '输入框',
            type: types.input,
            span: 12,
            showInSearch: true,
            formItemOption: {},
            showInTable: true,
            tooltip: '测试输入框',
            onChange: (item) => {
              console.log(item, 'item')
              if (item.form.input == 1) {
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
            span: 12,
            options: this.dict.selectArr,
            showInSearch: true,
            showInTable: true,
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
            options: this.dict.selectArr,
            showInSearch: true,
            showInTable: true,
          },
          checxbox: {
            label: '多选框',
            type: types.checkBox,
            span: 12,
            options: this.dict.selectArr,
            showInSearch: true,
            showInTable: true,
          },
          date: {
            label: '日期',
            type: types.date,
            span: 10,
            showInSearch: true,
            showInTable: true
          },
          num: {
            label: '数字',
            type: types.number,
            span: 10,
            showInTable: true
          },
          time: {
            label: '时间',
            type: types.time,
            span: 12,
            showInSearch: true,
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
            showInSearch: true
          },
          color: {
            label: '颜色',
            type: types.color,
            showInSearch: true,
            span: 12
          },
          cascader: {
            label: '级联',
            showInSearch: true,
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
                options: this.dict.selectArr,
                showInTable: true,
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
                options: this.dict.selectArr
              },
              checxbox: {
                label: '多选框',
                type: types.checkBox,
                span: 12,
                options: this.dict.selectArr
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
            showInSearch: true,
            tooltip: '富文本提示'
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped></style>
```

:::

## Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :-: | :-: | :-: | :-: | :-: |
| v-model | 表单数据 | object | — | {} |
| size | 抽屉的宽度 | [number,string] | — | 400 |
| visible.sync | 是否显示抽屉 | boolean | — | false |
| drawerOptions | 官方支持的抽屉的 options | object | — | {} |
| title | 抽屉标题 | string | — | — |
| formOptions | 表单的 options | object | — | {} |
| isRow | 是否栅格布局 | boolean | — | false |
| columns | 表单配置项,只显示 showInSearch:true 的表单(详情见 CustomForm 说明) | object | — | {} |
| searchColumns | 表单配置项,全部显示 | object | — | {} |
| showFooter | 是否显示底部重置查询按钮 | boolean | — | true |
| searchBtnText | 查询按钮文字 | string | — | 查询 |
| searchBtnProps | 查询按钮 options | object | — | {} |
| resetBtnText | 重置按钮文字 | string | — | 重置 |
| resetBtnProps | 重置按钮 options | object | — | {} |
| showReset | 是否显示重置按钮 | boolean | — | true |

## Slot

|  name  |             说明             |
| :----: | :--------------------------: |
| footer |        自定义 footer         |
| before |      重置按钮前面的内容      |
| middle | 重置按钮和查询按钮中间的内容 |
| after  |      查询按钮后面的内容      |

## Events

| 事件名称 |     说明     | 回调参数 |
| :------: | :----------: | :------: |
|  search  | 表单查询事件 |    —     |
|  reset   | 表单重置事件 |    —     |
