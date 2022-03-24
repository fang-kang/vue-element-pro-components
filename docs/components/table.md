# 通用表格-ElProTable

## 基本用法

:::demo

```html
<template>
  <div>
    <el-pro-table
      :data="tableData"
      :loading="listLoading"
      selection
      :columns="columns"
      :operation-options="{ width: 200 }"
      :update-func="handleEdit"
      :delete-func="handleDelete"
      :table-options="{ rowStyle: { height: '50px' }, hasOperation: true }"
      @selection-change="handleSelectionChange"
    >
      <div slot="inputHeader">
        <el-button>测试</el-button>
      </div>
    </el-pro-table>
  </div>
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
        listLoading: false,
        columns: [],
        multipleSelection: []
      }
    },
    created() {
      this.columns = this.getMetaData()
    },
    methods: {
      click() {
        console.log(111)
      },
      handleEdit(row) {
        console.log(row)
      },
      handleDelete(row) {
        console.log(row)
      },
      handleSelectionChange(val) {
        console.log(val)
        this.multipleSelection = val
      },
      getMetaData() {
        return [
          {
            key: 'title',
            label: '基本信息',
            type: types.title
          },
          {
            key: 'input',
            label: '输入框',
            defaultValue: '测试',
            type: types.input,
            span: 12,
            showInSearch: true,
            formItemOption: {},
            showInTable: true,
            tooltip: '测试测试是处生成'
            // children: [
            //   {
            //     label: "下拉框",
            //     key: "select",
            //     defaultValue: 1,
            //     type: types.select,
            //     span: 12,
            //     options: this.dict.selectArr,
            //     showInSearch: true,
            //     showInTable: true,
            //     showFormat: (val) => {
            //       return this.getArrayValue(this.dict.selectArr, val);
            //     },
            //   },
            //   {
            //     label: "开关",
            //     key: "switch",
            //     type: types.switch,
            //     span: 12,
            //   },
            //   {
            //     label: "单选框",
            //     defaultValue: 1,
            //     key: "radio",
            //     type: types.radio,
            //     span: 12,
            //     options: this.dict.selectArr,
            //     showInSearch: true,
            //     showInTable: true,
            //     showFormat: (val) => {
            //       return this.getArrayValue(this.dict.selectArr, val);
            //     },
            //   },
            // ],
          },
          {
            label: '多选框',
            defaultValue: [1],
            key: 'checxbox',
            type: types.checkBox,
            span: 12,
            options: this.dict.selectArr,
            showInSearch: true,
            showInTable: true,
            showFormat: (val) => {
              return this.getArrayValue(this.dict.selectArr, val)
            },
            children: [
              {
                label: '日期',
                type: types.date,
                key: 'date',
                defaultValue: '2021-12-21',
                span: 10,
                showInSearch: true,
                showInTable: true
              },
              {
                label: '数字',
                key: 'num',
                type: types.number,
                defaultValue: 11,
                span: 10,
                showInTable: true
              },
              {
                label: '时间',
                key: 'time',
                type: types.time,
                defaultValue: '12:23:00',
                span: 12,
                showInSearch: true,
                showInTable: true
              }
            ]
          },

          {
            label: '滑块',
            key: 'slider',
            type: types.slider,
            defaultValue: 10,
            span: 12,
            showInTable: true
          },
          {
            label: '评分',
            key: 'rate',
            type: types.rate,
            defaultValue: 1,
            span: 12,
            showInTable: true
          },
          {
            label: '颜色',
            key: 'color',
            type: types.color,
            span: 12
          },
          {
            label: '级联',
            key: 'cascader',
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
          {
            label: '区域',
            key: 'area',
            type: types.area,
            showInSearch: true,
            span: 12
          },
          {
            label: '测试表格',
            key: 'table',
            span: 24,
            type: types.table
          }
        ]
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
| columns | 表格配置项,只显示 showInTable:true 的表格(详情见 CustomForm 说明) 多级表头使用数组类型,children 是子项 | object/array | — | {}/[] |
| tableColumns | 表格配置项,全部显示 | object/array | — | {}/[] |
| loading | 表格 loading | boolean | — | false |
| selection | 仅对 type=selection 的列有效，类型为 Boolean，为 true 则会在数据更新之后保留之前选中的数据（需指定 row-key） | boolean | — | false |
| reserveSelection | 是否显示展开收起文字 | boolean | — | false |
| data | 表格数据 | array | — | [] |
| showOperation | 收起后显示的表单数量 | string,number | — | 2 |
| autoHeight | 是否自动计算表格高度（外层容器为 #content-wrapper） | boolean | — | true |
| tableOptions | 表格配置项,例如 hasOperation:ture,显示操作栏 | object | — | {} |
| operationOptions | 操作栏的配置项，默认{label: "操作",fixed: "right",width: "150",align: "center",} | object | — | {} |
| updateFunc | 修改事件 | function(row,index) | — | — |
| deleteFunc | 删除事件 | function(row,index) | — | — |
| updateText | 修改按钮文字 | string | — | 修改 |
| deleteText | 删除按钮文字 | string | — | 删除 |
| updateProps | 修改按钮 props | object | — | {} |
| deleteProps | 删除按钮 props | object | — | {} |

## Slot

|      name       |          说明          |
| :-------------: | :--------------------: |
|  \${key}Header  |      表单头部内容      |
|     \${key}     |        表单内容        |
| operationColumn |       操作栏内容       |
| operationBefore | 修改删除按钮之前的内容 |
|  autoOperation  |   修改删除按钮的内容   |
| operationMiddle | 修改删除按钮之间的内容 |
| operationAfter  | 修改删除按钮之后的内容 |

## Events

| 事件名称 | 说明 | 回调参数 |
| :-: | :-: | :-: |
| clearSelection | 用于多选表格，清空用户的选择 | — |
| toggleRowSelection | 用于多选表格，切换某一行的选中状态，如果使用了第二个参数，则是设置这一行选中与否（selected 为 true 则选中） | row, selected |
| toggleAllSelection | 用于多选表格，切换所有行的选中状态 | — |
| toggleRowExpansion | 用于可展开表格与树形表格，切换某一行的展开状态，如果使用了第二个参数，则是设置这一行展开与否（expanded 为 true 则展开） | row, expanded |
| setCurrentRow | 用于单选表格，设定某一行为选中行，如果调用时不加参数，则会取消目前高亮行的选中状态。 | row |
| clearFilter | 不传入参数时用于清空所有过滤条件，数据会恢复成未过滤的状态，也可传入由 columnKey 组成的数组以清除指定列的过滤条件 | columnKey |
| clearSort | 用于清空排序条件，数据会恢复成未排序的状态 | — |
| doLayout | 对 Table 进行重新布局。当 Table 或其祖先元素由隐藏切换为显示时，可能需要调用此方法 | — |
| sort | 手动对 Table 进行排序。参数`prop`属性指定排序列，`order`指定排序顺序。 | prop: string, order: string |
