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
import Vue from 'vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Element)

import VueElementProComponents from 'vue-element-pro-components'
import 'vue-element-pro-components/lib/theme/index.css'
Vue.use(VueElementProComponents)
```

### 2.2 按需引入

#### 2.2.1 需要安装`babel-plugin-import`

```bash
# yarn 方式安装
yarn add babel-plugin-import -D
# npm 方式安装
npm install babel-plugin-import -D
```

#### 2.2.2 配置 babel

```js
{
    ...
plugins: [
    [
      "import",
      {
        libraryName: "vue-element-pro-components",
        // 默认打包是lib,不用更改
        libraryDirectory: "lib",
        // 如果有样式文件,因为打包后样式统一放在/lib/theme下,所以需要稍微转换下
        style: (name, file) => {
          const libDirIndex = name.lastIndexOf("/");
          const libDir = name.substring(0, libDirIndex);
          const fileName = name.substr(libDirIndex + 1);
          return `${libDir}/theme/${fileName}.css`;
        },
      },
    ],
  ],
}
```

#### 2.2.3 使用组件

接下来，如果你只希望引入部分组件，比如 `Dialog`和 `Form`，那么需要在`main.js` 中写入以下内容：

```js
import Vue from 'vue'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Element)

import { Dialog, Form } from 'vue-element-pro-components'

Vue.use(Dialog)
Vue.use(Form)
/* 或写为
 * Vue.component(Dialog.name,Dialog)
 * Vue.component(Form.name,Form)
 */

new Vue({
  el: '#app',
  render: (h) => h(App)
})
```

或者全部引入

```js
import Vue from 'vue'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Element)

import {
  Dialog,
  Form,
  Pagination,
  Search,
  Table,
  AdvancedSearch,
  Drawer
} from 'vue-element-pro-components'

Vue.use(Dialog)
Vue.use(Form)
Vue.use(Pagination)
Vue.use(Search)
Vue.use(Table)
Vue.use(AdvancedSearch)
Vue.use(Drawer)
```

## 三.文档

[https://fang-kang.github.io/vue-element-pro-components](https://fang-kang.github.io/vue-element-pro-components/)

喜欢的或者觉得有用的可以点一点`star`,有`bug`欢迎提交`pr`
