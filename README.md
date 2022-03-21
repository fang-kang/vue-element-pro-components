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

#### 3.2.2 Attributes

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

#### 3.2.3 Slot

|     name     |             说明             |
| :----------: | :--------------------------: |
|      —       |        Dialog 的内容         |
|  nameBefore  |     Dialog标题前面的内容     |
|  nameAfter   |     Dialog标题后面的内容     |
| beforeFooter |      取消按钮前面的内容      |
| middleFooter | 取消按钮和确定按钮中间的内容 |
| afterFooter  |      确定按钮后面的内容      |
|    footer    |          底部footer          |

#### 3.2.4 Events

| 事件名称 |            说明             | 回调参数 |
| :------: | :-------------------------: | :------: |
|   open   |      Dialog 打开的回调      |    —     |
|  opened  | Dialog 打开动画结束时的回调 |    —     |
|  close   |      Dialog 关闭的回调      |    —     |
|  closed  | Dialog 关闭动画结束时的回调 |    —     |
|  cancel  |      点击取消按钮回调       |    —     |
|    ok    |      点击确定按钮回调       |    —     |

