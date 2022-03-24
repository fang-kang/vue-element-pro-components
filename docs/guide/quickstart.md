# 快速上手

## 完整引入

```js
import Vue from 'vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Element)

import pro from 'vue-element-pro-components'
import 'vue-element-pro-components/lib/theme/index.css'

Vue.use(pro)

new Vue({
  el: '#app',
  render: h => h(App)
});
```

以上代码便完成了 VueElementProComponents 的引入。需要注意的是，样式文件需要单独引入。

## 按需引入

借助 [babel-plugin-import](https://github.com/umijs/babel-plugin-import)，我们可以只引入需要的组件，以达到减小项目体积的目的。

首先，安装 babel-plugin-import

```bash
# yarn 方式安装
yarn add babel-plugin-import -D
# npm 方式安装
npm install babel-plugin-import -D
```

然后，将 `.babelrc` 或 `babel.config` 修改为：

```js
{
    ...
plugins: [
    [
      "import",
      {
        libraryName: "vue-element-pro-components",
        libraryDirectory: "lib",
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

接下来，如果你只希望引入部分组件，比如 `ElProDialog`和 `ElProForm`，那么需要在`main.js` 中写入以下内容：

```js
import Vue from 'vue'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Element)

import { ElProDialog, ElProForm } from 'vue-element-pro-components'

Vue.use(ElProDialog)
Vue.use(ElProForm)
/* 或写为
 * Vue.component(ElProDialog.name,ElProDialog)
 * Vue.component(ElProForm.name,ElProForm)
 */

new Vue({
  el: '#app',
  render: h => h(App)
});
```

或者全部引入

```js
import Vue from 'vue'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Element)

import {
  ElProDialog,
  ElProForm,
  ElProPagination,
  ElProSearch,
  ElProTable,
  ElProAdvancedSearch,
  ElProDrawer
} from 'vue-element-pro-components'

Vue.use(ElProDialog)
Vue.use(ElProForm)
Vue.use(ElProPagination)
Vue.use(ElProSearch)
Vue.use(ElProTable)
Vue.use(ElProAdvancedSearch)
Vue.use(ElProDrawer)

new Vue({
  el: '#app',
  render: h => h(App)
});
```

## 开始使用

至此，现在就可以编写代码了。各个组件的使用方法请参阅它们各自的文档。
