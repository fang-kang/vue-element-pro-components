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

|     name      |               说明                |
| :-----------: | :-------------------------------: |
| columnBefore  |    表单内前面的内容 参数(form)    |
|  columnAfter  |    表单内后面的内容 参数(form)    |
|  formBefore   |     表单前面的内容 参数(form)     |
|   formAfter   |     表单后面的内容 参数(form)     |
|  ${key}-all   |  替换form-item的插槽 参数(form)   |
|    ${key}     |     替换组件的插槽 参数(form)     |
|   rowBefore   | el-form-item之前的内容 参数(form) |
|   rowAfter    | el-form-item之后的内容 参数(form) |
| ${key}Prefix  |   同input prefix插槽 参数(form)   |
| ${key}Suffix  |   同input suffix插槽 参数(form)   |
| ${key}Prepend |  同input prepend插槽 参数(form)   |
| ${key}Append  |   同input append插槽 参数(form)   |

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
        console.log(error);
      }
    }
```

#### 3.2.6 column配置项

> 此格式form、search、table、advanceSearch通用

总体格式为一个对象。类似

```js
export function getMetaData() {
    return {
        key1:{},
        key2:{},
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



|       name        |                             说明                             |           类型            |
| :---------------: | :----------------------------------------------------------: | :-----------------------: |
|       label       |                         表单的label                          |          string           |
|    tableLabel     |      当label和表格中的显示不一致时，优先匹配tableLabel       |          string           |
|    searchLabel    |      当label和搜索中的显示不一致时，优先匹配tableLabel       |          string           |
|      tooltip      |                    form-item后面的小提示                     |          string           |
|   defaultValue    |                            默认值                            |            any            |
|       type        |                 表单的type，不填默认为input                  |          string           |
|     required      |                           是否必填                           |          boolean          |
|       rules       |                           检验数组                           |           array           |
|   columnOption    |         组件的内部options,例如maxlength,placeholder          |          object           |
|      options      |     下拉框/单选框/多选框的options 默认[{name,value}]格式     |   array/function(form)    |
|   showInSearch    |                      是否显示在搜索框中                      |          boolean          |
|    showInTable    |                       是否显示在表格中                       |          boolean          |
|  formItemOption   |            form-item的options,常用比如label-width            |          object           |
|  formColumnShow   | 是否在表单里显示,接收一个函数或者布尔值，返回boolean false隐藏 |  boolean/function(form)   |
|       span        |                栅格布局 比例  默认 18 一共24                 |          number           |
|   colSpanOption   |                        el-col的配置项                        |          object           |
|    showFormat     | 表格格式化,例如select/radio 传的值为1,2,3,渲染成options的name | function(val, row, scope) |
| tableColumnOption |     表格el-column的配置项,例如width,showOverflowTooltip      |          object           |
|     onChange      |                     表单的change回调事件                     |      function(item)       |
|       copy        |                    表格内是否显示复制图标                    |          boolean          |
|       isTag       |                    表格内是否用el-tag渲染                    |          boolean          |
|    tagOptions     |             el-tag的配置项,也可以直接写tag的类型             |  string/object/function   |

### 3.3 通用搜索-CustomSearch

#### 3.3.1 基本用法

```vue
<template>
  <el-card>
    <custom-search
      v-model="queryForm"
      :is-collapse="true"
      :show-num="2"
      :columns="columns"
      @search="dataReload"
    >
      <template #after>
        <el-button type="primary" size="small">新增</el-button>
      </template>
    </custom-search>
  </el-card>
</template>

<script>
import { getMetaData } from "../test-form/meta-data";
export default {
  data() {
    return {
      queryForm: {},
      columns: {},
      visible: false,
    };
  },
  created() {
    this.columns = getMetaData.call(this);
  },
  methods: {
    dataReload() {
      console.log(this.queryForm);
    },
  },
};
</script>

<style lang="scss" scoped></style>

```

#### 3.3.2 Attributes

|       参数        |                             说明                             |     类型      | 可选值 | 默认值 |
| :---------------: | :----------------------------------------------------------: | :-----------: | :----: | :----: |
|      v-model      |                        绑定的查询参数                        |    object     |   —    |   {}   |
|      columns      | 表单配置项,只显示showInSearch:true的表单(详情见CustomForm说明) |    object     |   —    |   {}   |
|   searchColumns   |                     表单配置项,全部显示                      |    object     |   —    |   {}   |
|     noSearch      |                        不显示查询按钮                        |    boolean    |   —    | false  |
|    customStyle    |                    查询最外层自定义style                     |    object     |   —    |   {}   |
|    isCollapse     |                     是否显示展开收起文字                     |    boolean    |   —    |  true  |
| isShowAdvancedBtn |                       是否显示高级查询                       |    boolean    |   —    |  true  |
|      showNum      |                     收起后显示的表单数量                     | string,number |   —    |   2    |
|     showReset     |                       是否显示重置按钮                       |    boolean    |   —    |  true  |
|   searchBtnText   |                         查询按钮文字                         |    string     |   —    |  查询  |
|  searchBtnProps   |                       查询按钮options                        |    object     |   —    |   {}   |
|   resetBtnText    |                         重置按钮文字                         |    string     |   —    |  重置  |
|   resetBtnProps   |                       重置按钮options                        |    object     |   —    |   {}   |
|      loading      |                       查询按钮loading                        |    boolean    |   —    | false  |

#### 3.3.3 Slot

|    name    |             说明             |
| :--------: | :--------------------------: |
| col-before |      搜索表单前面的内容      |
| col-after  |      搜索表单后面的内容      |
|   before   |      查询按钮前面的内容      |
|   middle   | 查询按钮和重置按钮中间的内容 |
|   after    |      查询按钮后面的内容      |
|   ${key}   |  替换组件的插槽 参数(form)   |

#### 3.3.4 Events

| 事件名称 |     说明     | 回调参数 |
| :------: | :----------: | :------: |
|  search  | 表单查询事件 |    —     |
|  reset   | 表单重置事件 |    —     |

### 3.4 通用表格-CustomTable

#### 3.4.1 基本用法

```vue
<template>
  <div>
    <custom-table
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
    </custom-table>
  </div>
</template>

<script>
import { getMetaData } from "./meta-data";
export default {
  data() {
    return {
      tableData: [
        {
          input: "1",
          select: 1,
          radio: 1,
          checxbox: [1],
          date: "2021-11-10",
          num: 1,
          time: "12:23:00",
          slider: 1,
          rate: 1,
        },
        {
          input: "1",
          select: 1,
          radio: 1,
          checxbox: [1],
          date: "2021-11-10",
          num: 1,
          time: "12:23:00",
          slider: 1,
          rate: 1,
        },
        {
          input: "1",
          select: 1,
          radio: 1,
          checxbox: [1],
          date: "2021-11-10",
          num: 1,
          time: "12:23:00",
          slider: 1,
          rate: 1,
        },
      ],
      listLoading: false,
      columns: [],
      multipleSelection: [],
    };
  },
  created() {
    this.columns = getMetaData.call(this);
  },
  methods: {
    click() {
      console.log(111);
    },
    handleEdit(row) {
      console.log(row);
    },
    handleDelete(row) {
      console.log(row);
    },
    handleSelectionChange(val) {
      console.log(val);
      this.multipleSelection = val;
    },
  },
};
</script>

<style lang="scss" scoped></style>

```

#### 3.4.2 Attributes

|       参数       |                             说明                             |        类型         | 可选值 | 默认值 |
| :--------------: | :----------------------------------------------------------: | :-----------------: | :----: | :----: |
|     columns      | 表格配置项,只显示showInTable:true的表格(详情见CustomForm说明)  多级表头使用数组类型,children是子项 |    object/array     |   —    | {}/[]  |
|   tableColumns   |                     表格配置项,全部显示                      |    object/array     |   —    | {}/[]  |
|     loading      |                         表格loading                          |       boolean       |   —    | false  |
|    selection     | 仅对 type=selection 的列有效，类型为 Boolean，为 true 则会在数据更新之后保留之前选中的数据（需指定 row-key） |       boolean       |   —    | false  |
| reserveSelection |                     是否显示展开收起文字                     |       boolean       |   —    | false  |
|       data       |                           表格数据                           |        array        |   —    |   []   |
|  showOperation   |                     收起后显示的表单数量                     |    string,number    |   —    |   2    |
|    autoHeight    |     是否自动计算表格高度（外层容器为 #content-wrapper）      |       boolean       |   —    |  true  |
|   tableOptions   |         表格配置项,例如hasOperation:ture,显示操作栏          |       object        |   —    |   {}   |
| operationOptions | 操作栏的配置项，默认{label: "操作",fixed: "right",width: "150",align: "center",} |       object        |   —    |   {}   |
|    updateFunc    |                           修改事件                           | function(row,index) |   —    |   —    |
|    deleteFunc    |                           删除事件                           | function(row,index) |   —    |   —    |
|    updateText    |                         修改按钮文字                         |       string        |   —    |  修改  |
|    deleteText    |                         删除按钮文字                         |       string        |   —    |  删除  |
|   updateProps    |                        修改按钮props                         |       object        |   —    |   {}   |
|   deleteProps    |                        删除按钮props                         |       object        |   —    |   {}   |

#### 3.4.3 Slot

|      name       |          说明          |
| :-------------: | :--------------------: |
|  ${key}Header   |      表单头部内容      |
|     ${key}      |        表单内容        |
| operationColumn |       操作栏内容       |
| operationBefore | 修改删除按钮之前的内容 |
|  autoOperation  |   修改删除按钮的内容   |
| operationMiddle | 修改删除按钮之间的内容 |
| operationAfter  | 修改删除按钮之后的内容 |

#### 3.3.4 Events

|      事件名称      |                             说明                             |          回调参数           |
| :----------------: | :----------------------------------------------------------: | :-------------------------: |
|   clearSelection   |                 用于多选表格，清空用户的选择                 |              —              |
| toggleRowSelection | 用于多选表格，切换某一行的选中状态，如果使用了第二个参数，则是设置这一行选中与否（selected 为 true 则选中） |        row, selected        |
| toggleAllSelection |              用于多选表格，切换所有行的选中状态              |              —              |
| toggleRowExpansion | 用于可展开表格与树形表格，切换某一行的展开状态，如果使用了第二个参数，则是设置这一行展开与否（expanded 为 true 则展开） |        row, expanded        |
|   setCurrentRow    | 用于单选表格，设定某一行为选中行，如果调用时不加参数，则会取消目前高亮行的选中状态。 |             row             |
|    clearFilter     | 不传入参数时用于清空所有过滤条件，数据会恢复成未过滤的状态，也可传入由columnKey组成的数组以清除指定列的过滤条件 |          columnKey          |
|     clearSort      |          用于清空排序条件，数据会恢复成未排序的状态          |              —              |
|      doLayout      | 对 Table 进行重新布局。当 Table 或其祖先元素由隐藏切换为显示时，可能需要调用此方法 |              —              |
|        sort        | 手动对 Table 进行排序。参数`prop`属性指定排序列，`order`指定排序顺序。 | prop: string, order: string |

### 3.5 通用分页-CustomPagination

#### 3.5.1 基本用法

```vue
<template>
  <div>
    <custom-pagination
      :custom-props="customProps"
      v-model="queryForm"
      :total="total"
      @onLoad="findPage"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      customProps: {
        page: "pageNo",
        pageSize: "limit",
      },
      total: 100,
      queryForm: {
        pageNo: 1, //页数
        limit: 10, //	每页行数
      },
    };
  },
  methods: {
    findPage() {
      console.log(this.queryForm);
    },
  },
};
</script>

<style scoped></style>

```

#### 3.5.2 Attributes

|       参数        |              说明              |  类型  | 可选值 |                默认值                |
| :---------------: | :----------------------------: | :----: | :----: | :----------------------------------: |
|      v-model      |            分页数据            | object |   —    |                  {}                  |
|       total       |              总数              | number |   —    |                  0                   |
|  paginationStyle  |      el-pagination的style      | object |   —    |                  {}                  |
|    customStyle    |      自定义外层容器style       | object |   —    |                  {}                  |
|     pageSizes     |         分页显示的条数         | array  |   —    |        [10, 20, 30, 50, 100]         |
| paginationOptions |   官方支持分页的其他options    | object |   —    |                  {}                  |
|    customProps    | 自定义分页pageNo和pageSize字段 | object |   —    | { page :'page',pageSize:''pageSize } |

#### 3.5.3 Events

| 事件名称 |            说明            | 回调参数 |
| :------: | :------------------------: | :------: |
|  onLoad  | pageSize或pageNo变化时触发 |    —     |

### 3.6 通用抽屉-CustomDrawer

#### 3.6.1 基本用法

```vue
<template>
  <div>
    <el-button @click="showVisible=true">测试</el-button>
    <custom-drawer
        title="标题"
        :drawer-width="400"
        v-model="showVisible"
        :drawer-options="{}"
      >
       内容
    </custom-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showVisible:false
    };
  },
  methods: {
   
  },
};
</script>

<style scoped></style>

```

#### 3.6.2 Attributes

|     参数      |          说明           |  类型   | 可选值 | 默认值 |
| :-----------: | :---------------------: | :-----: | :----: | :----: |
|    v-model    |      是否显示抽屉       | boolean |   —    | false  |
|  drawerWidth  |       抽屉的宽度        | number  |   —    |  400   |
|   placement   |        弹出方向         | string  |   —    | right  |
| drawerOptions | 官方支持的抽屉的options | object  |   —    |   {}   |
|     title     |        抽屉标题         | string  |   —    |   —    |

#### 3.6.3 Slot

|  name   |      说明      |
| :-----: | :------------: |
| default | 抽屉内部的内容 |

### 3.7 通用高级查询-CustomAdvancedSearch

#### 3.7.1 基本用法

```vue
<template>
  <el-card>
    <custom-search
      v-model="queryForm"
      :is-collapse="true"
      :show-num="2"
      :columns="columns"
      @search="dataReload"
    >
      <template #after>
        <el-button type="primary" size="small">新增</el-button>
      </template>
    </custom-search>
    <el-button @click="visible = true">测试高级查询</el-button>
    <custom-advanced-search
      title="高级查询"
      :visible.sync="visible"
      :columns="columns"
      v-model="queryForm"
      @search="dataReload"
      @reset="visible = false"
    />
  </el-card>
</template>

<script>
import { getMetaData } from "../test-form/meta-data";
export default {
  data() {
    return {
      queryForm: {},
      columns: {},
      visible: false,
    };
  },
  created() {
    this.columns = getMetaData.call(this);
  },
  methods: {
    dataReload() {
      console.log(this.queryForm);
    },
  },
};
</script>

<style lang="scss" scoped></style>

```

#### 3.7.2 Attributes

|      参数      |                             说明                             |  类型   | 可选值 | 默认值 |
| :------------: | :----------------------------------------------------------: | :-----: | :----: | :----: |
|    v-model     |                           表单数据                           | object  |   —    |   {}   |
|  drawerWidth   |                          抽屉的宽度                          | number  |   —    |  400   |
|  visible.sync  |                         是否显示抽屉                         | boolean |   —    | false  |
| drawerOptions  |                   官方支持的抽屉的options                    | object  |   —    |   {}   |
|     title      |                           抽屉标题                           | string  |   —    |   —    |
|  formOptions   |                        表单的options                         | object  |   —    |   {}   |
|     isRow      |                         是否栅格布局                         | boolean |   —    | false  |
|    columns     | 表单配置项,只显示showInSearch:true的表单(详情见CustomForm说明) | object  |   —    |   {}   |
| searchColumns  |                     表单配置项,全部显示                      | object  |   —    |   {}   |
|   showFooter   |                   是否显示底部重置查询按钮                   | boolean |   —    |  true  |
| searchBtnText  |                         查询按钮文字                         | string  |   —    |  查询  |
| searchBtnProps |                       查询按钮options                        | object  |   —    |   {}   |
|  resetBtnText  |                         重置按钮文字                         | string  |   —    |  重置  |
| resetBtnProps  |                       重置按钮options                        | object  |   —    |   {}   |
|   showReset    |                       是否显示重置按钮                       | boolean |   —    |  true  |

#### 3.7.3 Slot

|  name  |             说明             |
| :----: | :--------------------------: |
| footer |         自定义footer         |
| before |      重置按钮前面的内容      |
| middle | 重置按钮和查询按钮中间的内容 |
| after  |      查询按钮后面的内容      |

#### 3.7.4 Events

| 事件名称 |     说明     | 回调参数 |
| :------: | :----------: | :------: |
|  search  | 表单查询事件 |    —     |
|  reset   | 表单重置事件 |    —     |

### 
