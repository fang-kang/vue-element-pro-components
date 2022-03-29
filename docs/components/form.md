# 通用表单-ElProForm

对 element-ui 的 form 组件进行封装，扩展多个常用类型,例如:

- 输入框
- 选择器
- 多选框
- 日期选择
- 日期段选择
- 时间选择
- 计数器
- 开关
- 滑块
- 颜色选择
- 评分
- 级联
- 段落标题
- 富文本
- 表格

通过配置可灵活配置，并且与 ElProSearch 、 ElProTable 、 ElProAdanceSearch 的配置项有联动，可以共用同一份配置，非常方便

## 示例

### 典型表单

包括各种表单项，比如输入框、选择器、开关、单选框、多选框等。

:::demo

```html
<template>
  <div>
    <el-pro-form
      ref="dataForm"
      v-model="form"
      :columns="columns"
      :form-options="{labelPosition:'left'}"
    >
      <template #columnAfter>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </template>
    </el-pro-form>
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
        form: {},
        visible: false,
        columns: {
          name: {
            label: '活动名称'
          },
          region: {
            label: '活动区域',
            type: types.radio,
            options: [
              {
                name: '区域一',
                value: 'shanghai'
              },
              {
                name: '区域二',
                value: 'beijing'
              }
            ]
          },
          date1: {
            label: '活动时间',
            type: types.date,
            span: 11,
            columnOption: {
              placeholder: '选择日期'
            }
          },
          date2: {
            label: '-',
            span: 11,
            type: types.time,
            columnOption: {
              placeholder: '选择时间'
            },
            formItemOption: {
              labelWidth: 'auto'
            }
          },
          delivery: {
            label: '即时配送',
            type: types.switch
          },
          type: {
            label: '活动性质',
            type: types.checkBox,
            options: [
              {
                name: '美食/餐厅线上活动',
                value: 1
              },
              {
                name: '地推活动',
                value: 2
              },
              {
                name: '线下主题活动',
                value: 3
              },
              {
                name: '单纯品牌曝光',
                value: 4
              }
            ]
          },
          resource: {
            label: '特殊资源',
            type: types.radio,
            options: [
              {
                name: '线上品牌商赞助',
                value: 1
              },
              {
                name: '线下场地免费',
                value: 2
              }
            ]
          },
          desc: {
            label: '活动形式',
            columnOption: {
              type: 'textarea'
            }
          },
          dateRange: {
            label: '时间段',
            type: types.date,
            columnOption: {
              type: 'datetimerange'
            }
          },
          number: {
            label: '数字',
            type: types.number
          },
          slider: {
            label: '滑块',
            type: types.slider
          },
          rate: {
            label: '评分',
            type: types.rate
          },
          color: {
            label: '颜色',
            type: types.color
          },
          cascader: {
            label: '级联选择',
            type: types.cascader,
            options: [
              {
                value: 1,
                label: '测试1',
                children: [
                  {
                    value: 11,
                    label: '测试1-1'
                  }
                ]
              },
              {
                value: 2,
                label: '测试2',
                children: [
                  {
                    value: 22,
                    label: '测试2-1',
                    children: [
                      {
                        value: 222,
                        label: '测试2-1-1'
                      }
                    ]
                  }
                ]
              }
            ]
          },
          editor: {
            label: '富文本',
            span: 24,
            type: types.editor
          },
          tableData: {
            label: '表格',
            type: types.table,
            span: 24,
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
                options: [
                  {
                    name: '下拉框1',
                    value: 1
                  },
                  {
                    name: '下拉框2',
                    value: 2
                  }
                ],
                showInTable: true
              },
              date: {
                label: '日期',
                type: types.date,
                span: 12,
                showInTable: true
              }
            }
          }
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!')
        alert('表单值:' + JSON.stringify(this.form))
      }
    }
  }
</script>

<style lang="scss" scoped></style>
```

:::

### 弹窗中的表单

很多情况下结合弹窗使用

:::demo

```html
<template>
  <div>
    <el-button type="text" @click="visible = true">点击打开 Form</el-button>
    <el-pro-dialog title="新增" v-model="visible" :dialog-options="{}" @ok="visible = false">
      <el-pro-form ref="dataForm" v-model="form" :columns="columns" :form-options="{}" />
    </el-pro-dialog>
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
        form: {},
        visible: false,
        columns: {
          base: {
            type: types.title,
            label: '基本信息',
            tooltip:'个人信息请填写准确',
            columnOption: {
              style: {
                margin: '10px 0 10px 10px'
              }
            }
          },
          name: {
            label: '姓名',
            span: 12
          },
          age: {
            label: '年龄',
            type: types.number,
            span: 12
          },
          sex: {
            label: '性别',
            type: types.radio,
            span: 12,
            options: [
              {
                name: '男',
                value: '1'
              },
              {
                name: '女',
                value: '2'
              }
            ]
          },
          date: {
            label: '出生日期',
            type: types.date,
            span: 12,
            columnOption: {}
          },
          isMarried: {
            label: '是否婚配',
            span: 12,
            type: types.radio,
            options: [
              {
                name: '是',
                value: '1'
              },
              {
                name: '否',
                value: '2'
              }
            ]
          },
          hobby: {
            label: '爱好',
            type: types.checkBox,
            span: 12,
            options: [
              {
                name: '打篮球',
                value: 1
              },
              {
                name: '踢足球',
                value: 2
              },
              {
                name: '看书',
                value: 3
              }
            ]
          },
          education: {
            label: '学历',
            span: 12,
            type: types.select,
            options: [
              {
                name: '专科',
                value: 1
              },
              {
                name: '本科',
                value: 2
              },
              {
                name: '硕士及以上',
                value: 3
              }
            ]
          }
        }
      }
    },
    methods: {}
  }
</script>

<style lang="scss" scoped></style>
```

:::

### 行内表单

当垂直方向空间受限且表单较简单时，可以在一行内放置表单。

可以在`columnOption`的`style`里调整表单组件的样式

:::demo 关闭栅格属性`is-row`，`form-options` 设置 `inline` 属性可以让表单域变为行内的表单域。

```html
<el-pro-form
  v-model="formInline"
  :columns="columns"
  :is-row="false"
  :form-options="{ inline: true }"
>
  <template #columnAfter>
    <el-form-item style="margin-left:10px;">
      <el-button type="primary" @click="onSubmit">查询</el-button>
    </el-form-item>
  </template>
</el-pro-form>
<script>
  export default {
    data() {
      return {
        formInline: {
          user: '',
          region: ''
        },
        columns: {
          user: {
            label: '审批人',
            type: 'input',
            columnOption: {
              style: {
                width: '160px'
              }
            }
          },
          region: {
            label: '活动区域',
            type: 'select',
            options: [
              {
                name: '区域一',
                value: 'shanghai'
              },
              {
                name: '区域二',
                value: 'beijing'
              }
            ]
          }
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!')
      }
    }
  }
</script>
```

:::

### 对齐方式

根据具体目标和制约因素，选择最佳的标签对齐方式。

:::demo 通过设置`form-options` 的 `label-position` 属性可以改变表单域标签的位置，可选值为 `top`、`left`，当设为 `top` 时标签会置于表单域的顶部

```html
<el-radio-group v-model="labelPosition" size="small">
  <el-radio-button label="left">左对齐</el-radio-button>
  <el-radio-button label="right">右对齐</el-radio-button>
  <el-radio-button label="top">顶部对齐</el-radio-button>
</el-radio-group>
<div style="margin: 20px;"></div>
<el-pro-form
  :columns="columns"
  :form-options="{ labelPosition:labelPosition }"
  v-model="formLabelAlign"
/>
<script>
  export default {
    data() {
      return {
        labelPosition: 'right',
        columns: {
          name: {
            label: '名称'
          },
          region: {
            label: '活动区域'
          },
          type: {
            label: '活动形式'
          }
        },
        formLabelAlign: {
          name: '',
          region: '',
          type: ''
        }
      }
    }
  }
</script>
```

:::

### 表单验证

在防止用户犯错的前提下，尽可能让用户更早地发现并纠正错误。

:::tip
如果只需要验证是否必填,只需要`required`为`true`就可以 
:::

:::demo ElProForm 组件提供了表单验证的功能，只需要通过 `rules` 属性传入约定的验证规则

```html
<template>
  <div>
    <el-pro-form
      ref="ruleForm"
      v-model="form"
      :columns="columns"
      :form-options="{labelWidth:'100px'}"
    >
      <template #columnAfter>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button @click="resetForm">重置</el-button>
        </el-form-item>
      </template>
    </el-pro-form>
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
        form: {},
        visible: false,
        columns: {
          name: {
            label: '活动名称',
            required: true,
            rules: [{ min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }]
          },
          region: {
            label: '活动区域',
            type: types.radio,
            required: true,
            options: [
              {
                name: '区域一',
                value: 'shanghai'
              },
              {
                name: '区域二',
                value: 'beijing'
              }
            ]
          },
          date1: {
            label: '活动时间',
            rules: [{ required: true, message: '请选择日期', trigger: 'change' }],
            type: types.date,
            span: 11,
            columnOption: {
              placeholder: '选择日期'
            }
          },
          date2: {
            label: '-',
            span: 11,
            rules: [{ required: true, message: '请选择时间', trigger: 'change' }],
            type: types.time,
            columnOption: {
              placeholder: '选择时间'
            },
            formItemOption: {
              labelWidth: 'auto'
            }
          },
          delivery: {
            label: '即时配送',
            type: types.switch
          },
          type: {
            label: '活动性质',
            type: types.checkBox,
            required: true,
            options: [
              {
                name: '美食/餐厅线上活动',
                value: 1
              },
              {
                name: '地推活动',
                value: 2
              },
              {
                name: '线下主题活动',
                value: 3
              },
              {
                name: '单纯品牌曝光',
                value: 4
              }
            ]
          },
          resource: {
            label: '特殊资源',
            required: true,
            type: types.radio,
            options: [
              {
                name: '线上品牌商赞助',
                value: 1
              },
              {
                name: '线下场地免费',
                value: 2
              }
            ]
          },
          desc: {
            label: '活动形式',
            required: true,
            columnOption: {
              type: 'textarea'
            }
          }
        }
      }
    },
    methods: {
      async onSubmit() {
        const { ruleForm } = this.$refs
        try {
          const checkResult = await ruleForm.checkRule()
          if (checkResult) {
            // do something
          }
        } catch (err) {
          console.log(err)
        }
      },
      resetForm() {
        const { ruleForm } = this.$refs
        ruleForm.resetFields()
      }
    }
  }
</script>

<style lang="scss" scoped></style>
```

:::

### 自定义校验规则

这个例子中展示了如何使用自定义验证规则来完成密码的二次验证。

:::demo 本例还使用`status-icon`属性为输入框添加了表示校验结果的反馈图标。

```html
<el-pro-form
  v-model="ruleFormData"
  :columns="columns"
  :form-options="{
    labelWidth:'100px',
    statusIcon:true
  }"
  ref="ruleForm"
>
  <div slot="columnAfter">
    <el-form-item>
      <el-button type="primary" @click="submitForm">提交</el-button>
      <el-button @click="resetForm">重置</el-button>
    </el-form-item>
  </div>
</el-pro-form>
<script>
  export default {
    data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'))
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'))
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'))
            } else {
              callback()
            }
          }
        }, 1000)
      }
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'))
        } else {
          if (this.ruleFormData.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass')
          }
          callback()
        }
      }
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'))
        } else if (value !== this.ruleFormData.pass) {
          callback(new Error('两次输入密码不一致!'))
        } else {
          callback()
        }
      }
      return {
        ruleFormData: {
          pass: '',
          checkPass: '',
          age: ''
        },
        columns: {
          pass: {
            label: '密码',
            rules: [{ validator: validatePass, trigger: 'blur' }]
          },
          checkPass: {
            label: '确认密码',
            rules: [{ validator: validatePass2, trigger: 'blur' }]
          },
          age: {
            label: '年龄',
            rules: [{ validator: checkAge, trigger: 'blur' }]
          }
        }
      }
    },
    methods: {
      async submitForm() {
        try {
          const checkResult = await this.$refs.ruleForm.checkRule()
          if (checkResult) {
            // do something
          }
        } catch (err) {
          console.log(err)
        }
      },
      resetForm() {
        this.$refs.ruleForm.resetFields()
      }
    }
  }
</script>
```

:::

## 表单类型

引入表单类型

```js
import { types } from 'vue-element-pro-components'
```

```js
export const types = {
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
```

## Attributes

|        参数        |                 说明                  |       类型       | 可选值 |     默认值     |
| :----------------: | :-----------------------------------: | :--------------: | :----: | :------------: |
|      v-model       |               表单数据                |      object      |   —    |       {}       |
|      columns       |              表单配置项               | [object, array]  |   —    |       {}       |
|    formOptions     |          官方支持的参数集合           |      object      |   —    |       {}       |
|      loading       |             表单 loading              |     boolean      |   —    |     false      |
|       isRow        |           是否启用栅格布局            |     boolean      |   —    |      true      |
|      showNum       | 搜索组件内部使用,显示可见的表单项个数 | [number, string] |   —    |       2        |
|     isCollapse     |   搜索组件内部使用,是否开启展开收起   |     boolean      |   —    |     false      |
|      showAll       |     搜索组件内部使用,是否展开收起     |     boolean      |   —    |      true      |
| tableDialogOptions |     表单类型-table 的弹窗 options     |      object      |   —    |       {}       |
|  tableFormOptions  |     表单类型-table 的表单 options     |      object      |   —    |       {}       |
|     rowOptions     |              el-row配置               |      object      |   —    | { gutter: 10 } |
|      isSearch      |              是否是搜索               |     boolean      |   —    |     false      |

## Slot

|      name      |                说明                |
| :------------: | :--------------------------------: |
|  columnBefore  |    表单内前面的内容 参数(form)     |
|  columnAfter   |    表单内后面的内容 参数(form)     |
|   formBefore   |     表单前面的内容 参数(form)      |
|   formAfter    |     表单后面的内容 参数(form)      |
|  \${key}All   |  替换 form-item 的插槽 参数(form)  |
|    \${key}     |     替换组件的插槽 参数(form)      |
|   rowBefore    | el-form-item 之前的内容 参数(form) |
|    rowAfter    | el-form-item 之后的内容 参数(form) |
| \${key}Prefix  |  同 input prefix 插槽 参数(form)   |
| \${key}Suffix  |  同 input suffix 插槽 参数(form)   |
| \${key}Prepend |  同 input prepend 插槽 参数(form)  |
| \${key}Append  |  同 input append 插槽 参数(form)   |

## Refs Events

### 表单内容重置

`resetFields()`

```js
// 获取表单ref实例 调用
this.$refs.dataForm.resetFields()
```

### 表单内容验证

`checkRule()`

```js
    // 提交
    async submitForm() {
      const { dataForm } = this.$refs;
      try {
        const checkResult = await dataForm.checkRule();
        if (checkResult) {
          //...do something
        }
      } catch (error) {
        console.log(error);
      }
    }
```

## column 配置项

> 此格式 form、search、table、advanceSearch 通用

总体格式为一个对象。类似

```js
export function getMetaData() {
  return {
    key1: {},
    key2: {}
  }
}
```

使用一个函数来返回一个对象，优点是可以使用组件内部的`this`。

只需要调用的时候这样:

```js
import { getMetaData } from "./meta-data";

// 生命周期函数里初始化调用 传入组件this
created() {
   this.columns = getMetaData.call(this)
},
```

| name | 说明 | 类型 |
| :-: | :-: | :-: |
| label | 表单的 label | string |
| tableLabel | 当 label 和表格中的显示不一致时，优先匹配 tableLabel | string |
| searchLabel | 当 label 和搜索中的显示不一致时，优先匹配 searchLabel | string |
| tooltip | form-item 后面的小提示 | string |
| defaultValue | 默认值 | any |
| type | 表单的 type，不填默认为 input | string |
| required | 是否必填 | boolean |
| rules | 检验数组 | array |
| columnOption | 组件的内部 options,例如 maxlength,placeholder | object |
| options | 下拉框/单选框/多选框的 options 默认[{name,value}]格式 | array/function(form) |
| showInSearch | 是否显示在搜索框中 | boolean |
| showInTable | 是否显示在表格中 | boolean |
| formItemOption | form-item 的 options,常用比如 label-width | object |
| formColumnShow | 是否在表单里显示,接收一个函数或者布尔值，返回 boolean false 隐藏 | boolean/function(form) |
| span | 栅格布局 比例 默认 18 一共 24 | number |
| colSpanOption | el-col 的配置项 | object |
| showFormat | 表格格式化,例如 select/radio 传的值为 1,2,3,渲染成 options 的 name | function(val, row, scope) |
| tableColumnOption | 表格 el-column 的配置项,例如 width,showOverflowTooltip | object |
| onChange | 表单的 change 回调事件 | function(item) |
| copy | 表格内是否显示复制图标 | boolean |
| isTag | 表格内是否用 el-tag 渲染 | boolean |
| tagOptions | el-tag 的配置项,也可以直接写 tag 的类型 | string/object/function |
