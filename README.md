# vue-element-pro-components

## 一.快速开始

### 1.1 完整引入

```js
import Vue from "vue";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(Element);

import vueElementProComponentsfrom from "vue-element-pro-components";
Vue.use(vueElementProComponentsfrom);
```

### 1.2 按需引入

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
  CustomTable
} from "vue-element-pro-components";

Vue.use(CustomDialog);
Vue.use(CustomForm);
Vue.use(CustomPagination);
Vue.use(CustomSearch);
Vue.use(CustomTable);
```

