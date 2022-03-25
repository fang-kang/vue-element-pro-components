# 安装

## 安装

::: tip

因为 vue-element-pro-components 基于 ElementUI 开发，安装使用前确保项目中已正确安装 ElementUI

:::

推荐使用 `yarn` 的方式安装，国内安装速度比较快。

```bash
yarn add vue-element-pro-components -s
# 或者
npm i vue-element-pro-components -s
```

## CDN

目前可以通过 [unpkg.com/vue-element-pro-components](https://unpkg.com/vue-element-pro-components/) 获取到最新版本的资源，在页面上引入 js 和 css 文件即可开始使用。

```html
<!-- 引入样式 -->
<link rel="stylesheet" href="https://unpkg.com/vue-element-pro-components/lib/theme/index.css">
<!-- 引入组件库 -->
<script src="https://unpkg.com/vue-element-pro-components/lib/index.js"></script>
```

::: tip
我们建议使用 CDN 引入 vue-element-pro-components的用户在链接地址上锁定版本，以免将来 vue-element-pro-components升级时受到非兼容性更新的影响。锁定版本的方法请查看 [unpkg.com](https://unpkg.com)。
:::

如果是通过 npm 或 yarn 安装，并希望配合 webpack 使用，请阅读下一节：[快速上手](./guide/quickstart)。
