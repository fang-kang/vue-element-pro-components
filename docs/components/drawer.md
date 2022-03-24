# 通用抽屉-ElProDrawer

## 基本用法

:::demo
```html
<template>
  <div>
    <el-button @click="showVisible = true">测试</el-button>
    <el-pro-drawer title="标题" :drawer-width="400" v-model="showVisible" :drawer-options="{}">
      内容
    </el-pro-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showVisible: false
    }
  },
  methods: {}
}
</script>

<style scoped></style>
```
:::

## Attributes

|     参数      |           说明           |  类型   | 可选值 | 默认值 |
| :-----------: | :----------------------: | :-----: | :----: | :----: |
|    v-model    |       是否显示抽屉       | boolean |   —    | false  |
|  drawerWidth  |        抽屉的宽度        | number  |   —    |  400   |
|   placement   |         弹出方向         | string  |   —    | right  |
| drawerOptions | 官方支持的抽屉的 options | object  |   —    |   {}   |
|     title     |         抽屉标题         | string  |   —    |   —    |

## Slot

|  name   |      说明      |
| :-----: | :------------: |
| default | 抽屉内部的内容 |