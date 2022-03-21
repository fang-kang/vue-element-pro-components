# vue-element-pro-components

## 一.安装

```bash
npm i vue-element-pro-components -s
# 或者
yarn add vue-element-pro-components -s
```





## 二.快速开始

### 2.1 完整引入

```js
import Vue from "vue";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(Element);

import vueElementProComponents from "vue-element-pro-components";
Vue.use(vueElementProComponents);
```

### 2.2 按需引入

#### 2.2.1 需要安装`babel-plugin-component`

```bash
# yarn 方式安装
yarn add babel-plugin-component --dev
# npm 方式安装
npm install babel-plugin-component -D
```

#### 2.2.2 配置 babel

```js
{
    ...
     plugins: [
    [
      "component",
      {
        libraryName: "vue-element-pro-components",
        libDir: "lib",
        style: false,
      },
    ],
  ],
}
```

#### 2.2.3 使用组件

接下来，如果你只希望引入部分组件，比如 `CustomDialog`和 `CustomForm`，那么需要在` main.js` 中写入以下内容：

```js
import Vue from "vue";

import Element from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(Element);

import { CustomDialog, CustomForm } from "vue-element-pro-components";

Vue.use(CustomDialog);
Vue.use(CustomForm);
```

或者全部引入

```js
import Vue from "vue";

import Element from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(Element);

import {
  CustomDialog,
  CustomForm,
  CustomPagination,
  CustomSearch,
  CustomTable,
  CustomAdvancedSearch,
  CustomDrawer,
  types,
  utils,
  version,
} from "vue-element-pro-components";

Vue.use(CustomDialog);
Vue.use(CustomForm);
Vue.use(CustomPagination);
Vue.use(CustomSearch);
Vue.use(CustomTable);
Vue.use(CustomAdvancedSearch);
Vue.use(CustomDrawer);
```

## 三.基本使用

### 3.1 通用对话框-CustomDialog

#### 3.1.1 基本用法

```vue
<template>
  <div>
    <el-button size="small" @click="visible = true">打开</el-button>
    <custom-dialog
      title="测试"
      v-model="visible"
      :dialog-options="{
        width: '40%',
        showFullscreen: true,
        draggable: true,
      }"
      :btn-loading="btnLoading"
      @open="open"
      @opened="opened"
      @close="close"
      @closed="closed"
      @ok="ok"
    >
      <div>测试弹窗</div>
    </custom-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      btnLoading: false,
    };
  },
  methods: {
    ok() {
      this.btnLoading = true;
      setTimeout(() => {
        this.btnLoading = false;
        this.visible2 = false;
      }, 3000);
    },
    close() {
      console.log("close");
    },
    closed() {
      console.log("closed");
    },
    opened() {
      console.log("opened");
    },
    open() {
      console.log("open");
    },
    beforeClose(done) {
      console.log("beforeClose");
      done();
    },
    sure() {
      console.log("sure");
    },
  },
};
</script>

<style lang="scss" scoped></style>

```

#### 3.1.2 Attributes

|      参数       |                           说明                            |  类型   | 可选值 | 默认值 |
| :-------------: | :-------------------------------------------------------: | :-----: | :----: | :----: |
|     v-model     |                      是否显示 Dialog                      | boolean |   —    | false  |
|      title      |                       Dialog 的标题                       | string  |   —    |   —    |
|  dialogOptions  | 官方支持的参数集合;{ showFullscreen:true,draggable:true } | object  |   —    |   {}   |
|     loading     |                        弹窗loading                        | boolean |   —    | false  |
|   btnLoading    |                      确定按钮loading                      | boolean |   —    | false  |
|   showAction    |                    是否显示底部footer                     | boolean |   —    |  true  |
| confirmBtnText  |                  底部footer确定按钮文字                   | string  |   —    |  确定  |
|  cancelBtnText  |                  底部footer取消按钮文字                   | string  |   —    |  取消  |
| confirmBtnProps |                  底部footer确定按钮props                  | object  |   —    |   —    |
| cancelBtnProps  |                  底部footer取消按钮props                  | object  |   —    |   —    |

#### 3.1.3 Slot

|     name     |             说明             |
| :----------: | :--------------------------: |
|      —       |        Dialog 的内容         |
|  nameBefore  |     Dialog标题前面的内容     |
|  nameAfter   |     Dialog标题后面的内容     |
| beforeFooter |      取消按钮前面的内容      |
| middleFooter | 取消按钮和确定按钮中间的内容 |
| afterFooter  |      确定按钮后面的内容      |
|    footer    |          底部footer          |

#### 3.1.4 Events

| 事件名称 |            说明             | 回调参数 |
| :------: | :-------------------------: | :------: |
|   open   |      Dialog 打开的回调      |    —     |
|  opened  | Dialog 打开动画结束时的回调 |    —     |
|  close   |      Dialog 关闭的回调      |    —     |
|  closed  | Dialog 关闭动画结束时的回调 |    —     |
|  cancel  |      点击取消按钮回调       |    —     |
|    ok    |      点击确定按钮回调       |    —     |

### 3.2 通用表单-CustomForm

#### 3.2.1 基本用法

```vue
<template>
  <div>
    <el-button @click="visible = true">测试 </el-button>
    <custom-dialog title="测试" v-model="visible">
      <custom-form
        ref="dataForm"
        :is-row="true"
        v-model="form"
        :table-dialog-options="{ width: '60%' }"
        :columns="columns"
        :form-options="{ labelWidth: '100px' }"
      >
        <template #inputAppend="{ form }">
          <el-button @click="click(form)">测试</el-button>
        </template>
      </custom-form>
    </custom-dialog>
  </div>
</template>

<script>
import { getMetaData } from "./meta-data";
export default {
  data() {
    return {
      form: {},
      visible: false,
      columns: {},
    };
  },
  created() {
    this.columns = getMetaData.call(this);
  },
  methods: {
    click(form) {
      console.log(form);
    },
  },
};
</script>

<style lang="scss" scoped></style>

```

> dict.js

```js
export default {
  selectArr: [
    {
      name: "select-1",
      value: 1,
    },
    {
      name: "select-2",
      value: 2,
    },
  ],
};
```



>  meta-data.js

```js
import { types } from "/packages/CustomForm";
import dict from "./dict";
import { getArrayValue } from "/src/utils";
export function getMetaData() {
  return {
    title: {
      label: "基本信息",
      type: types.title,
    },
    input: {
      label: "输入框",
      type: types.input,
      span: 12,
      showInSearch: true,
      formItemOption: {},
      showInTable: true,
      tooltip: "测试输入框",
      onChange: (item) => {
        console.log(item, "item");
        if (item.form.input == 1) {
          this.$message.success("成功");
          item.form.num = 11;
          item.form.radio = 2;
          item.form.select = 1;
        }
      },
    },
    select: {
      label: "下拉框",
      type: types.select,
      span: 12,
      options: dict.selectArr,
      showInSearch: true,
      showInTable: true,
      showFormat: (val) => {
        return getArrayValue(dict.selectArr, val);
      },
    },
    switch: {
      label: "开关",
      type: types.switch,
      span: 12,
    },
    radio: {
      label: "单选框",
      type: types.radio,
      span: 12,
      options: dict.selectArr,
      showInSearch: true,
      showInTable: true,
      showFormat: (val) => {
        return getArrayValue(dict.selectArr, val);
      },
    },
    checxbox: {
      label: "多选框",
      type: types.checkBox,
      span: 12,
      options: dict.selectArr,
      showInSearch: true,
      showInTable: true,
      showFormat: (val) => {
        return getArrayValue(dict.selectArr, val);
      },
    },
    date: {
      label: "日期",
      type: types.date,
      span: 10,
      showInSearch: true,
      showInTable: true,
    },
    num: {
      label: "数字",
      type: types.number,
      span: 10,
      showInTable: true,
    },
    time: {
      label: "时间",
      type: types.time,
      span: 12,
      showInSearch: true,
      showInTable: true,
    },
    slider: {
      label: "滑块",
      type: types.slider,
      span: 12,
      showInTable: true,
      showInSearch: false,
    },
    rate: {
      label: "评分",
      type: types.rate,
      span: 12,
      showInTable: true,
      showInSearch: true,
    },
    color: {
      label: "颜色",
      type: types.color,
      showInSearch: true,
      span: 12,
    },
    cascader: {
      label: "级联",
      showInSearch: true,
      type: types.cascader,
      options: [
        {
          value: "zhinan",
          label: "指南",
          disabled: true,
          children: [
            {
              value: "shejiyuanze",
              label: "设计原则",
              children: [
                {
                  value: "yizhi",
                  label: "一致",
                },
                {
                  value: "fankui",
                  label: "反馈",
                },
                {
                  value: "xiaolv",
                  label: "效率",
                },
                {
                  value: "kekong",
                  label: "可控",
                },
              ],
            },
            {
              value: "daohang",
              label: "导航",
              children: [
                {
                  value: "cexiangdaohang",
                  label: "侧向导航",
                },
                {
                  value: "dingbudaohang",
                  label: "顶部导航",
                },
              ],
            },
          ],
        },
        {
          value: "zujian",
          label: "组件",
          children: [
            {
              value: "basic",
              label: "Basic",
              children: [
                {
                  value: "layout",
                  label: "Layout 布局",
                },
                {
                  value: "color",
                  label: "Color 色彩",
                },
                {
                  value: "typography",
                  label: "Typography 字体",
                },
                {
                  value: "icon",
                  label: "Icon 图标",
                },
                {
                  value: "button",
                  label: "Button 按钮",
                },
              ],
            },
            {
              value: "form",
              label: "Form",
              children: [
                {
                  value: "radio",
                  label: "Radio 单选框",
                },
                {
                  value: "checkbox",
                  label: "Checkbox 多选框",
                },
                {
                  value: "input",
                  label: "Input 输入框",
                },
                {
                  value: "input-number",
                  label: "InputNumber 计数器",
                },
                {
                  value: "select",
                  label: "Select 选择器",
                },
                {
                  value: "cascader",
                  label: "Cascader 级联选择器",
                },
                {
                  value: "switch",
                  label: "Switch 开关",
                },
                {
                  value: "slider",
                  label: "Slider 滑块",
                },
                {
                  value: "time-picker",
                  label: "TimePicker 时间选择器",
                },
                {
                  value: "date-picker",
                  label: "DatePicker 日期选择器",
                },
                {
                  value: "datetime-picker",
                  label: "DateTimePicker 日期时间选择器",
                },
                {
                  value: "upload",
                  label: "Upload 上传",
                },
                {
                  value: "rate",
                  label: "Rate 评分",
                },
                {
                  value: "form",
                  label: "Form 表单",
                },
              ],
            },
            {
              value: "data",
              label: "Data",
              children: [
                {
                  value: "table",
                  label: "Table 表格",
                },
                {
                  value: "tag",
                  label: "Tag 标签",
                },
                {
                  value: "progress",
                  label: "Progress 进度条",
                },
                {
                  value: "tree",
                  label: "Tree 树形控件",
                },
                {
                  value: "pagination",
                  label: "Pagination 分页",
                },
                {
                  value: "badge",
                  label: "Badge 标记",
                },
              ],
            },
            {
              value: "notice",
              label: "Notice",
              children: [
                {
                  value: "alert",
                  label: "Alert 警告",
                },
                {
                  value: "loading",
                  label: "Loading 加载",
                },
                {
                  value: "message",
                  label: "Message 消息提示",
                },
                {
                  value: "message-box",
                  label: "MessageBox 弹框",
                },
                {
                  value: "notification",
                  label: "Notification 通知",
                },
              ],
            },
            {
              value: "navigation",
              label: "Navigation",
              children: [
                {
                  value: "menu",
                  label: "NavMenu 导航菜单",
                },
                {
                  value: "tabs",
                  label: "Tabs 标签页",
                },
                {
                  value: "breadcrumb",
                  label: "Breadcrumb 面包屑",
                },
                {
                  value: "dropdown",
                  label: "Dropdown 下拉菜单",
                },
                {
                  value: "steps",
                  label: "Steps 步骤条",
                },
              ],
            },
            {
              value: "others",
              label: "Others",
              children: [
                {
                  value: "dialog",
                  label: "Dialog 对话框",
                },
                {
                  value: "tooltip",
                  label: "Tooltip 文字提示",
                },
                {
                  value: "popover",
                  label: "Popover 弹出框",
                },
                {
                  value: "card",
                  label: "Card 卡片",
                },
                {
                  value: "carousel",
                  label: "Carousel 走马灯",
                },
                {
                  value: "collapse",
                  label: "Collapse 折叠面板",
                },
              ],
            },
          ],
        },
        {
          value: "ziyuan",
          label: "资源",
          children: [
            {
              value: "axure",
              label: "Axure Components",
            },
            {
              value: "sketch",
              label: "Sketch Templates",
            },
            {
              value: "jiaohu",
              label: "组件交互文档",
            },
          ],
        },
      ],
      span: 12,
    },
    area: {
      label: "区域",
      type: types.area,
      showInSearch: true,
      span: 12,
    },
    table: {
      label: "测试表格",
      span: 24,
      type: types.table,
      tableDataOptions: {
        input: {
          label: "输入框",
          type: types.input,
          span: 12,
          showInTable: true,
        },
        select: {
          label: "下拉框",
          type: types.select,
          span: 12,
          options: dict.selectArr,
          showInTable: true,
          showFormat: (val) => {
            return getArrayValue(dict.selectArr, val);
          },
        },
        switch: {
          label: "开关",
          type: types.switch,
          span: 12,
        },
        radio: {
          label: "单选框",
          type: types.radio,
          span: 12,
          options: dict.selectArr,
        },
        checxbox: {
          label: "多选框",
          type: types.checkBox,
          span: 12,
          options: dict.selectArr,
        },
        date: {
          label: "日期",
          type: types.date,
          span: 12,
        },
        num: {
          label: "数字",
          required: true,
          type: types.number,
          span: 12,
          showInTable: true,
        },
        time: {
          label: "时间",
          type: types.time,
          showInTable: true,
          span: 12,
        },
      },
    },
    editor: {
      label: "富文本",
      type: types.editor,
      span: 24,
      showInSearch: true,
      tooltip: "富文本提示",
    },
  };
}

```

#### 3.2.2 表单类型

```js
export const types = {
  input: "input",  // 输入框
  select: "select", // 选择框
  number: "number", // 计数器
  checkBox: "checkBox", // 多选框
  check: "check", // 单个复选框
  radio: "radio", // 单选框
  date: "date", // 日期
  switch: "switch", // 开关
  title: "title", // 标题
  time: "time", // 时间
  slider: "slider", // 滑块
  rate: "rate", // 评分
  color: "color", // 颜色
  cascader: "cascader", // 级联
  area: "area", // 省市区
  table: "table", // 表格
  editor: "editor", // 富文本
};

```





#### 3.2.3 Attributes

|        参数        |                 说明                  |       类型       | 可选值 | 默认值 |
| :----------------: | :-----------------------------------: | :--------------: | :----: | :----: |
|      v-model       |               表单数据                |      object      |   —    |   {}   |
|      columns       |              表单配置项               |      object      |   —    |   {}   |
|    formOptions     |          官方支持的参数集合           |      object      |   —    |   {}   |
|      loading       |              表单loading              |     boolean      |   —    | false  |
|       isRow        |           是否启用栅格布局            |     boolean      |   —    |  true  |
|      showNum       | 搜索组件内部使用,显示可见的表单项个数 | [Number, String] |   —    |   2    |
|     isCollapse     |   搜索组件内部使用,是否开启展开收起   |     boolean      |   —    | false  |
|      showAll       |     搜索组件内部使用,是否展开收起     |     boolean      |   —    |  true  |
| tableDialogOptions |      表单类型-table的弹窗options      |      object      |   —    |   {}   |
|  tableFormOptions  |      表单类型-table的表单options      |      object      |   —    |   {}   |

#### 3.2.4 Slot

|         name         |               说明                |
| :------------------: | :-------------------------------: |
|     columnBefore     |    表单内前面的内容 参数(form)    |
|     columnAfter      |    表单内后面的内容 参数(form)    |
|      formBefore      |     表单前面的内容 参数(form)     |
|      formAfter       |     表单后面的内容 参数(form)     |
|      ${key}-all      |  替换form-item的插槽 参数(form)   |
|    ${column.key}     |     替换组件的插槽 参数(form)     |
|      rowBefore       | el-form-item之前的内容 参数(form) |
|       rowAfter       | el-form-item之后的内容 参数(form) |
| ${column.key}Prefix  |   同input prefix插槽 参数(form)   |
| ${column.key}Suffix  |   同input suffix插槽 参数(form)   |
| ${column.key}Prepend |  同input prepend插槽 参数(form)   |
| ${column.key}Append  |   同input append插槽 参数(form)   |

#### 3.2.5 Refs Events

##### 3.2.5.1 表单内容重置

`resetFields()`

```js
// 获取表单ref实例 调用
this.$refs.dataForm.resetFields();
```

##### 3.2.5.2 表单内容验证

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
        this.addLoading = false;
        console.log(error);
      }
    },
```

