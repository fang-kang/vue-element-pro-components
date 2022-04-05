---
title: 通用搜索-ElProSearch
---

## 示例

### 基本用法

:::demo

```html
<template>
  <el-pro-search
    v-model="queryForm"
    :is-collapse="true"
    :show-num="2"
    :columns="columns"
    @search="dataReload"
  >
    <template #after>
      <el-button type="primary" size="small">新增</el-button>
    </template>
  </el-pro-search>
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
            required: true,
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
            showInTable: true
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
            showInTable: true
          },
          checxbox: {
            label: '多选框',
            type: types.checkBox,
            span: 12,
            options: this.dict.selectArr,
            showInSearch: true,
            showInTable: true
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
| v-model | 绑定的查询参数 | object | — | {} |
| columns | 表单配置项,只显示 showInSearch:true 的表单(详情见 CustomForm 说明) | object | — | {} |
| searchColumns | 表单配置项,全部显示 | object | — | {} |
| noSearch | 不显示查询按钮 | boolean | — | false |
| customStyle | 查询最外层自定义 style | object | — | {} |
| isCollapse | 是否显示展开收起文字 | boolean | — | false |
| showAdvanced | 是否显示高级查询 | boolean | — | false |
| showNum | 收起后显示的表单数量 | string,number | — | 2 |
| showReset | 是否显示重置按钮 | boolean | — | false |
| searchBtnText | 查询按钮文字 | string | — | 查询 |
| searchBtnProps | 查询按钮 props | object | — | {} |
| resetBtnText | 重置按钮文字 | string | — | 重置 |
| resetBtnProps | 重置按钮 props | object | — | {} |
| loading | 查询按钮 loading | boolean | — | false |
| advancedTitle | 高级查询抽屉 title | string | — | 高级查询 |
| size | 高级查询抽屉宽度 | string,number | — | 450 |
| formAdvanceOptions | 高级查询表单配置项 | object | — | {} |
| formOptions | 查询表单配置项 | object | — | {} |

## Slot

|   name    |             说明             |
| :-------: | :--------------------------: |
| colBefore |      搜索表单前面的内容      |
| colAfter  |      搜索表单后面的内容      |
|  before   |      查询按钮前面的内容      |
|  middle   | 查询按钮和重置按钮中间的内容 |
|   after   |      查询按钮后面的内容      |
|  \${key}  |  替换组件的插槽 参数(form)   |

## Events

| 事件名称 |     说明     | 回调参数 |
| :------: | :----------: | :------: |
|  search  | 表单查询事件 |    —     |
|  reset   | 表单重置事件 |    —     |
