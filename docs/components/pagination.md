---
title: 通用分页-ElProPagination
---

当数据量过多时，使用分页分解数据。集成了常用的一些属性和事件

## 示例

### 基本用法

当前页码字段默认是`page`,每页数量是`pageSize`

:::demo

```html
<template>
  <div>
    <el-pro-pagination v-model="queryForm" :total="total" @onLoad="onLoad" />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        total: 50,
        queryForm: {
          page: 1, //页数
          pageSize: 10, // 每页数量
          other: '其他参数'
        }
      }
    },
    methods: {
      onLoad() {
        console.log(this.queryForm)
      }
    }
  }
</script>
```

:::

### 自定义分页字段

有时候分页字段是后端定的，我们无法左右，所以有了这个属性。`customProps`

:::demo

```html
<template>
  <div>
    <el-pro-pagination
      v-model="queryForm"
      :custom-props="customProps"
      :total="total"
      @onLoad="onLoad"
    />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        customProps: {
          page: 'current',
          pageSize: 'limit'
        },
        total: 50,
        queryForm: {
          current: 1, //页数
          limit: 10, // 每页数量
          other: '其他参数'
        }
      }
    },
    methods: {
      onLoad() {
        console.log(this.queryForm)
      }
    }
  }
</script>
```

:::

### 当只有一页时隐藏分页

当只有一页时，通过设置`paginationOptions`的 `hide-on-single-page` 属性来隐藏分页。

:::demo

```html
<template>
  <div>
    <el-switch v-model="value" />
    <el-pro-pagination
      v-model="queryForm"
      :pagination-options="{ hideOnSinglePage:value }"
      :total="total"
      @onLoad="onLoad"
    />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: false,
        total: 2,
        queryForm: {
          page: 1, //页数
          pageSize: 10, // 每页数量
          other: '其他参数'
        }
      }
    },
    methods: {
      onLoad() {
        console.log(this.queryForm)
      }
    }
  }
</script>
```

:::

### 自定义样式

有时候需要修改样式

:::demo

```html
<template>
  <el-pro-pagination
    :custom-style="customStyle"
    v-model="queryForm"
    :total="total"
    @onLoad="onLoad"
  />
</template>

<script>
  export default {
    data() {
      return {
        customStyle: {
          textAlign: 'left',
          margin: '20px'
        },
        total: 50,
        queryForm: {
          page: 1, //页数
          pageSize: 10, // 每页数量
          other: '其他参数'
        }
      }
    },
    methods: {
      onLoad() {
        console.log(this.queryForm)
      }
    }
  }
</script>
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
| paginationOptions | [官方支持分页的其他 options](https://element.eleme.cn/#/zh-CN/component/pagination) | object | — | {} |
| customProps | 自定义分页 page 和 pageSize 字段 | object | — | { page :'page',pageSize:''pageSize } |

## Events

| 事件名称 |             说明              | 回调参数 |
| :------: | :---------------------------: | :------: |
|  onLoad  | pageSize 或 pageNo 变化时触发 |    —     |
