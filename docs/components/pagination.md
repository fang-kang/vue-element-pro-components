# 通用分页-ElProPagination

## 基本用法

:::demo
```html
<template>
  <div>
    <el-pro-pagination
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
        page: 'pageNo',
        pageSize: 'limit'
      },
      total: 100,
      queryForm: {
        pageNo: 1, //页数
        limit: 10 // 每页行数
      }
    }
  },
  methods: {
    findPage() {
      console.log(this.queryForm)
    }
  }
}
</script>

<style scoped></style>
```
:::

## Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :-: | :-: | :-: | :-: | :-: |
| v-model | 分页数据 | object | — | {} |
| total | 总数 | number | — | 0 |
| paginationStyle | el-pagination 的 style | object | — | {} |
| customStyle | 自定义外层容器 style | object | — | {} |
| pageSizes | 分页显示的条数 | array | — | [10, 20, 30, 50, 100] |
| paginationOptions | 官方支持分页的其他 options | object | — | {} |
| customProps | 自定义分页 pageNo 和 pageSize 字段 | object | — | { page :'page',pageSize:''pageSize } |

## Events

| 事件名称 |             说明              | 回调参数 |
| :------: | :---------------------------: | :------: |
|  onLoad  | pageSize 或 pageNo 变化时触发 |    —     |
