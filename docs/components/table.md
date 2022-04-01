---
title: 通用表格-ElProTable
---

用于展示多条结构类似的数据，可对数据进行排序、筛选、对比或其他自定义操作。

## 示例

### 基本用法

:::demo

```html
<template>
  <el-pro-table :data="tableData" :table-columns="columns" :auto-height="false" />
</template>

<script>
  export default {
    data() {
      return {
        columns: {
          date: {
            label: '日期',
            tableColumnOption: {
              width: 180
            }
          },
          name: {
            label: '姓名',
            tableColumnOption: {
              width: 180
            }
          },
          address: {
            label: '地址'
          }
        },
        tableData: [
          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          },
          {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          },
          {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }
        ]
      }
    }
  }
</script>
```

:::

### 编辑删除

:::demo

```html
<template>
  <el-pro-table
    :data="tableData"
    :auto-height="false"
    :operation-options="{ width: 200 }"
    :update-func="handleEdit"
    :delete-func="handleDelete"
    :table-options="{ hasOperation: true,height:'300px' }"
    :table-columns="columns"
  />
</template>

<script>
  export default {
    data() {
      return {
        columns: {
          date: {
            label: '日期',
            tableColumnOption: {
              width: 180
            }
          },
          name: {
            label: '姓名',
            tableColumnOption: {
              width: 180
            }
          },
          address: {
            label: '地址'
          }
        },
        tableData: [
          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          },
          {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          },
          {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }
        ]
      }
    },
    methods: {
      handleEdit(row) {
        this.$notify({
          title: '成功',
          message: '编辑',
          type: 'success'
        })
      },
      handleDelete(row, index) {
        this.$notify({
          title: '成功',
          message: '删除成功',
          type: 'success'
        })
      }
    }
  }
</script>
```

:::

### 关闭工具栏

`showToolbar`默认打开

:::demo

```html
<template>
  <el-pro-table
    :data="tableData"
    :show-toolbar="false"
    :auto-height="false"
    :table-columns="columns"
  />
</template>

<script>
  export default {
    data() {
      return {
        columns: {
          date: {
            label: '日期',
            tableColumnOption: {
              width: 180
            }
          },
          name: {
            label: '姓名',
            tableColumnOption: {
              width: 180
            }
          },
          address: {
            label: '地址'
          }
        },
        tableData: [
          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          },
          {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          },
          {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }
        ]
      }
    }
  }
</script>
```

:::

### 分页表格

传入`refresh`事件工具栏会多出刷新按钮，点击调用`refresh`

`pagination`需为`sync`,来保证响应性变化

:::demo

```html
<template>
  <el-pro-table
    :data="tableData"
    :pagination.sync="query"
    :total="tableData.length"
    :auto-height="false"
    :loading="listLoading"
    :table-columns="columns"
    @onLoad="queryTable"
    @refresh="queryTable"
  />
</template>

<script>
  export default {
    data() {
      return {
        listLoading: false,
        query: {
          page: 1,
          pageSize: 10
        },
        columns: {
          date: {
            label: '日期',
            tableColumnOption: {
              width: 180
            }
          },
          name: {
            label: '姓名',
            tableColumnOption: {
              width: 180
            }
          },
          address: {
            label: '地址'
          }
        },
        tableData: [
          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          },
          {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          },
          {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }
        ]
      }
    },
    methods: {
      queryTable() {
        this.listLoading = true
        setTimeout(() => {
          this.listLoading = false
        }, 1000)
      }
    }
  }
</script>
```

:::

### 固定列

横向内容过多时，可选择固定列。通过设置`table-options`的`hasOperation`为`true`,来显示操作栏。默认`fixed:right;width:150px;align:center`;

:::demo

```html
<template>
  <el-pro-table
    :data="tableData"
    :table-options="{ hasOperation :true }"
    :table-columns="columns"
    :updateFunc="handleEdit"
    :auto-height="false"
  >
    <template #operationBefore>
      <el-button icon="el-icon-edit" type="text">查看</el-button>
    </template>
  </el-pro-table>
</template>

<script>
  export default {
    data() {
      return {
        columns: {
          date: {
            label: '日期',
            tableColumnOption: {
              width: 180
            }
          },
          name: {
            label: '姓名',
            tableColumnOption: {
              width: 180
            }
          },
          province: {
            label: '省份',
            tableColumnOption: {
              width: 120
            }
          },
          city: {
            label: '市区',
            tableColumnOption: {
              width: 120
            }
          },
          address: {
            label: '地址',
            tableColumnOption: {
              width: 300
            }
          },
          zip: {
            label: '邮编',
            tableColumnOption: {
              width: 120
            }
          }
        },
        tableData: [
          {
            date: '2016-05-02',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          },
          {
            date: '2016-05-04',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1517 弄',
            zip: 200333
          },
          {
            date: '2016-05-01',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1519 弄',
            zip: 200333
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1516 弄',
            zip: 200333
          }
        ]
      }
    },
    methods: {
      handleEdit(row) {
        console.log(row)
      }
    }
  }
</script>
```

:::

### 固定列和表头

横纵内容过多时，可选择固定列和表头。

:::demo 固定列和表头可以同时使用，只需要将上述两个属性分别设置好即可。

```html
<template>
  <el-pro-table
    :data="tableData"
    :table-options="{ height:'250px' }"
    :table-columns="columns"
    :auto-height="false"
  />
</template>

<script>
  export default {
    data() {
      return {
        columns: {
          date: {
            label: '日期',
            tableColumnOption: {
              width: 180,
              fixed: true
            }
          },
          name: {
            label: '姓名',
            tableColumnOption: {
              width: 180
            }
          },
          province: {
            label: '省份',
            tableColumnOption: {
              width: 120
            }
          },
          city: {
            label: '市区',
            tableColumnOption: {
              width: 120
            }
          },
          address: {
            label: '地址',
            tableColumnOption: {
              width: 300
            }
          },
          zip: {
            label: '邮编',
            tableColumnOption: {
              width: 120
            }
          }
        },
        tableData: [
          {
            date: '2016-05-03',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          },
          {
            date: '2016-05-02',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          },
          {
            date: '2016-05-04',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          },
          {
            date: '2016-05-01',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          },
          {
            date: '2016-05-08',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          },
          {
            date: '2016-05-06',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          },
          {
            date: '2016-05-07',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }
        ]
      }
    }
  }
</script>
```

:::

### 流体高度

当数据量动态变化时，可以为 Table 设置一个最大高度。

:::demo 通过设置`max-height`属性为 Table 指定最大高度。此时若表格所需的高度大于最大高度，则会显示一个滚动条。

```html
<template>
  <el-pro-table
    :data="tableData"
    :table-options="{ maxHeight:'250',hasOperation :true }"
    :deleteFunc="deleteRow"
    :table-columns="columns"
    :auto-height="false"
  />
</template>

<script>
  export default {
    methods: {
      deleteRow(rows, index) {
        rows.splice(index, 1)
      }
    },
    data() {
      return {
        columns: {
          date: {
            label: '日期',
            tableColumnOption: {
              width: 180,
              fixed: true
            }
          },
          name: {
            label: '姓名',
            tableColumnOption: {
              width: 180
            }
          },
          province: {
            label: '省份',
            tableColumnOption: {
              width: 120
            }
          },
          city: {
            label: '市区',
            tableColumnOption: {
              width: 120
            }
          },
          address: {
            label: '地址',
            tableColumnOption: {
              width: 300
            }
          },
          zip: {
            label: '邮编',
            tableColumnOption: {
              width: 120
            }
          }
        },
        tableData: [
          {
            date: '2016-05-03',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          },
          {
            date: '2016-05-02',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          },
          {
            date: '2016-05-04',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          },
          {
            date: '2016-05-01',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          },
          {
            date: '2016-05-08',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          },
          {
            date: '2016-05-06',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          },
          {
            date: '2016-05-07',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }
        ]
      }
    }
  }
</script>
```

:::

### 多级表头

数据结构比较复杂的时候，可使用多级表头来展现数据的层次关系。

:::demo 只需要在 `columns` 里面嵌套 `children`，就可以实现多级表头。

```html
<template>
  <el-pro-table
    :data="tableData"
    :table-options="{ height:'500px' }"
    :table-columns="columns"
    :auto-height="false"
  />
</template>

<script>
  export default {
    data() {
      return {
        columns: [
          {
            label: '日期',
            key: 'date'
          },
          {
            label: '配送信息',
            key: 'info',
            children: [
              {
                label: '姓名',
                key: 'name'
              },
              {
                label: '地址',
                key: 'address1',
                children: [
                  {
                    label: '省份',
                    key: 'province'
                  },
                  {
                    label: '市区',
                    key: 'city'
                  },
                  {
                    label: '地址',
                    key: 'address'
                  },
                  {
                    label: '邮编',
                    key: 'zip'
                  }
                ]
              }
            ]
          }
        ],
        tableData: [
          {
            date: '2016-05-03',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          },
          {
            date: '2016-05-02',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          },
          {
            date: '2016-05-04',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          },
          {
            date: '2016-05-01',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          },
          {
            date: '2016-05-08',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          },
          {
            date: '2016-05-06',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          },
          {
            date: '2016-05-07',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }
        ]
      }
    }
  }
</script>
```

:::

### 单选

选择单行数据时使用色块表示。

:::demo Table 组件提供了单选的支持，只需要配置`highlight-current-row`属性即可实现单选(默认开启)。之后由`current-change`事件来管理选中时触发的事件，它会传入`currentRow`，`oldCurrentRow`。如果需要显示索引，可以增加一列`el-table-column`，设置`type`属性为`index`即可显示从 1 开始的索引号。

```html
<template>
  <el-pro-table
    ref="singleTable"
    :data="tableData"
    :table-columns="columns"
    :auto-height="false"
    @current-change="handleCurrentChange"
  ></el-pro-table>
  <div style="margin-top: 20px">
    <el-button @click="setCurrent(tableData[1])">选中第二行</el-button>
    <el-button @click="setCurrent()">取消选择</el-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        columns: {
          index: {
            label: '序号',
            tableColumnOption: {
              width: 50,
              type: 'index'
            },
            showFormat(val, row, scope) {
              return scope.$index + 1
            }
          },
          date: {
            label: '日期',
            tableColumnOption: {
              width: 120
            }
          },
          name: {
            label: '姓名',
            tableColumnOption: {
              width: 120
            }
          },
          address: {
            label: '地址'
          }
        },
        tableData: [
          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          },
          {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          },
          {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }
        ],
        currentRow: null
      }
    },
    methods: {
      setCurrent(row) {
        this.$refs.singleTable.$refs.table.setCurrentRow(row)
      },
      handleCurrentChange(val) {
        this.currentRow = val
      }
    }
  }
</script>
```

:::

### 多选

选择多行数据时使用 Checkbox。

:::demo

```html
<template>
  <el-pro-table
    :data="tableData"
    selection
    :table-columns="columns"
    :auto-height="false"
    @selection-change="handleSelectionChange"
  ></el-pro-table>
</template>

<script>
  export default {
    data() {
      return {
        columns: {
          index: {
            label: '序号',
            tableColumnOption: {
              width: 50,
              type: 'index'
            },
            showFormat(val, row, scope) {
              return scope.$index + 1
            }
          },
          date: {
            label: '日期',
            tableColumnOption: {
              width: 120
            }
          },
          name: {
            label: '姓名',
            tableColumnOption: {
              width: 120
            }
          },
          address: {
            label: '地址'
          }
        },
        tableData: [
          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          },
          {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          },
          {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }
        ]
      }
    },
    methods: {
      handleSelectionChange(val) {
        console.log(val)
      }
    }
  }
</script>
```

:::

### 排序

对表格进行排序，可快速查找或对比数据。

:::demo

```html
<template>
  <el-pro-table
    :data="tableData"
    :table-columns="columns"
    :table-options="{
      defaultSort : { prop: 'date', order: 'descending'}
    }"
    :auto-height="false"
  ></el-pro-table>
</template>

<script>
  export default {
    data() {
      return {
        columns: {
          date: {
            label: '日期',
            tableColumnOption: {
              width: 120,
              sortable: true
            }
          },
          name: {
            label: '姓名',
            tableColumnOption: {
              width: 120,
              sortable: true
            }
          },
          address: {
            label: '地址',
            tableColumnOption: {
              sortable: true
            },
            showFormat: (val, row, scope) => {
              return val + '-格式化'
            }
          }
        },
        tableData: [
          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          },
          {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          },
          {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }
        ]
      }
    },
    methods: {}
  }
</script>
```

:::

### 筛选

对表格进行筛选，可快速查找到自己想看的数据。

:::demo 在列中设置`filters` `filter-method`属性即可开启该列的筛选，filters 是一个数组，`filter-method`是一个方法，它用于决定某些数据是否显示，会传入三个参数：`value`, `row` 和 `column`。

```html
<template>
  <el-button @click="resetDateFilter">清除日期过滤器</el-button>
  <el-button @click="clearFilter">清除所有过滤器</el-button>
  <el-pro-table
    :data="tableData"
    ref="filterTable"
    :table-columns="columns"
    :table-options="{
      
    }"
    :auto-height="false"
  />
</template>

<script>
  export default {
    data() {
      return {
        columns: {
          date: {
            label: '日期',
            tableColumnOption: {
              width: 180,
              sortable: true,
              columnKey: 'date',
              filters: [
                { text: '2016-05-01', value: '2016-05-01' },
                { text: '2016-05-02', value: '2016-05-02' },
                { text: '2016-05-03', value: '2016-05-03' },
                { text: '2016-05-04', value: '2016-05-04' }
              ],
              filterMethod: (value, row) => {
                return row.date === value
              }
            }
          },
          name: {
            label: '姓名',
            tableColumnOption: {
              width: 120,
              sortable: true
            }
          },
          address: {
            label: '地址',
            tableColumnOption: {
              sortable: true
            }
          },
          tag: {
            label: '标签',
            tableColumnOption: {
              width: 100,
              columnKey: 'date',
              filters: [
                { text: '家', value: '家' },
                { text: '公司', value: '公司' }
              ],
              filterMethod: (value, row) => {
                return row.tag === value
              },
              filterPlacement: 'bottom-end'
            },
            isTag: true,
            tagOptions: (row) => {
              return {
                type: row.tag === '家' ? 'primary' : 'success'
              }
            }
          }
        },
        tableData: [
          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
            tag: '家'
          },
          {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄',
            tag: '公司'
          },
          {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄',
            tag: '家'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄',
            tag: '公司'
          }
        ]
      }
    },
    methods: {
      resetDateFilter() {
        this.$refs.filterTable.$refs.table.clearFilter('date')
      },
      clearFilter() {
        this.$refs.filterTable.$refs.table.clearFilter()
      }
    }
  }
</script>
```

:::

### 自定义列模板

自定义列的显示内容，可组合其他组件使用。

:::demo

```html
<template>
  <el-pro-table
    :data="tableData"
    :table-columns="columns"
    :table-options="{ hasOperation: true }"
    :auto-height="false"
    :update-func="handleEdit"
    :delete-func="handleDelete"
  >
    <template #date="{scope}">
      <i class="el-icon-time"></i>
      <span style="margin-left: 10px">{{ scope.row.date }}</span>
    </template>
    <template #name="{scope}">
      <el-popover trigger="hover" placement="top">
        <p>姓名: {{ scope.row.name }}</p>
        <p>住址: {{ scope.row.address }}</p>
        <div slot="reference" class="name-wrapper">
          <el-tag size="medium">{{ scope.row.name }}</el-tag>
        </div>
      </el-popover>
    </template>
    <template #date="{scope}">
      <i class="el-icon-time"></i>
      <span style="margin-left: 10px">{{ scope.row.date }}</span>
    </template>
  </el-pro-table>
</template>

<script>
  export default {
    data() {
      return {
        columns: {
          date: {
            label: '日期',
            tableColumnOption: {
              width: 180
            }
          },
          name: {
            label: '姓名',
            tableColumnOption: {
              width: 120
            }
          },
          address: {
            label: '地址'
          },
          tag: {
            label: '标签',
            tableColumnOption: {
              width: 100
            }
          }
        },
        tableData: [
          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
            tag: '家'
          },
          {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄',
            tag: '公司'
          },
          {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄',
            tag: '家'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄',
            tag: '公司'
          }
        ]
      }
    },
    methods: {
      handleEdit(row, index) {
        console.log(row, index)
      },
      handleDelete(row, index) {
        console.log(row, index)
      }
    }
  }
</script>
```

:::

### 展开行

当行内容过多并且不想显示横向滚动条时，可以使用 Table 展开行功能。 通过设置`expand` 和 `slot` `expandColumn` 可以开启展开行功能，`el-table-column` 的模板会被渲染成为展开行的内容，展开行可访问的属性与使用自定义列模板时的 `Scoped slot` 相同。

:::demo

```html
<template>
  <el-pro-table
    :data="tableData"
    expand
    :table-columns="columns"
    :table-options="{ height:'300px' }"
    :auto-height="false"
  >
    <template #expandColumn="{ scope }">
      <el-form label-position="left" inline class="demo-table-expand">
        <el-form-item label="商品名称">
          <span>{{ scope.row.name }}</span>
        </el-form-item>
        <el-form-item label="所属店铺">
          <span>{{ scope.row.shop }}</span>
        </el-form-item>
        <el-form-item label="商品 ID">
          <span>{{ scope.row.id }}</span>
        </el-form-item>
        <el-form-item label="店铺 ID">
          <span>{{ scope.row.shopId }}</span>
        </el-form-item>
        <el-form-item label="商品分类">
          <span>{{ scope.row.category }}</span>
        </el-form-item>
        <el-form-item label="店铺地址">
          <span>{{ scope.row.address }}</span>
        </el-form-item>
        <el-form-item label="商品描述">
          <span>{{ scope.row.desc }}</span>
        </el-form-item>
      </el-form>
    </template>
  </el-pro-table>
</template>

<style>
  .demo-table-expand {
    font-size: 0;
    margin: 20px;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>

<script>
  export default {
    data() {
      return {
        columns: {
          id: {
            label: '商品 ID',
            tableColumnOption: {
              width: 180
            }
          },
          name: {
            label: '商品名称',
            tableColumnOption: {
              width: 120
            }
          },
          desc: {
            label: '描述'
          }
        },
        tableData: [
          {
            id: '12987122',
            name: '好滋好味鸡蛋仔',
            category: '江浙小吃、小吃零食',
            desc: '荷兰优质淡奶，奶香浓而不腻',
            address: '上海市普陀区真北路',
            shop: '王小虎夫妻店',
            shopId: '10333'
          },
          {
            id: '12987123',
            name: '好滋好味鸡蛋仔',
            category: '江浙小吃、小吃零食',
            desc: '荷兰优质淡奶，奶香浓而不腻',
            address: '上海市普陀区真北路',
            shop: '王小虎夫妻店',
            shopId: '10333'
          },
          {
            id: '12987125',
            name: '好滋好味鸡蛋仔',
            category: '江浙小吃、小吃零食',
            desc: '荷兰优质淡奶，奶香浓而不腻',
            address: '上海市普陀区真北路',
            shop: '王小虎夫妻店',
            shopId: '10333'
          },
          {
            id: '12987126',
            name: '好滋好味鸡蛋仔',
            category: '江浙小吃、小吃零食',
            desc: '荷兰优质淡奶，奶香浓而不腻',
            address: '上海市普陀区真北路',
            shop: '王小虎夫妻店',
            shopId: '10333'
          }
        ]
      }
    }
  }
</script>
```

:::

### 树形数据与懒加载

:::demo 支持树类型的数据的显示。当 row 中包含 `children` 字段时，被视为树形数据。渲染树形数据时，必须要指定 `row-key`。支持子节点数据异步加载。设置 Table 的 `lazy` 属性为 true 与加载函数 `load` 。通过指定 row 中的 `hasChildren` 字段来指定哪些行是包含子节点。`children` 与 `hasChildren` 都可以通过 `tree-props` 配置。

```html
<template>
  <div>
    <el-pro-table
      :data="tableData"
      :table-columns="columns"
      :auto-height="false"
      style="margin-bottom: 20px;"
      :table-options="{
        rowKey:'id',
        height:'300px',
        border:true,
        defaultExpandAll:true,
        treeProps:{children: 'children', hasChildren: 'hasChildren'}
    }"
    ></el-pro-table>

    <el-pro-table
      :data="tableData1"
      :table-columns="columns"
      :auto-height="false"
      :table-options="{
        rowKey:'id',
        border:true,
        height:'300px',
        lazy:true,
        load:this.load,
        defaultExpandAll:true,
        treeProps:{children: 'children', hasChildren: 'hasChildren'}
    }"
    ></el-pro-table>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        columns: {
          date: {
            label: '日期',
            tableColumnOption: {
              width: 180
            }
          },
          name: {
            label: '姓名',
            tableColumnOption: {
              width: 120
            }
          },
          address: {
            label: '地址'
          }
        },
        tableData: [
          {
            id: 1,
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          },
          {
            id: 2,
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          },
          {
            id: 3,
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄',
            children: [
              {
                id: 31,
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
              },
              {
                id: 32,
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
              }
            ]
          },
          {
            id: 4,
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }
        ],
        tableData1: [
          {
            id: 1,
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          },
          {
            id: 2,
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          },
          {
            id: 3,
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄',
            hasChildren: true
          },
          {
            id: 4,
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }
        ]
      }
    },
    methods: {
      load(tree, treeNode, resolve) {
        setTimeout(() => {
          resolve([
            {
              id: 31,
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄'
            },
            {
              id: 32,
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄'
            }
          ])
        }, 1000)
      }
    }
  }
</script>
```

:::

### 自定义表头

表头支持自定义。

:::demo

```html
<template>
  <el-pro-table
    :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
    :table-columns="columns"
    :auto-height="false"
  >
    <template #settingHeader="{scope}">
      <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
    </template>
    <template #setting="{scope}">
      <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
      <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">
        Delete
      </el-button>
    </template>
  </el-pro-table>
</template>

<script>
  export default {
    data() {
      return {
        columns: {
          date: {
            label: '日期',
            tableColumnOption: {
              width: 180
            }
          },
          name: {
            label: '姓名',
            tableColumnOption: {
              width: 120
            }
          },
          setting: {
            label: ''
          }
        },
        tableData: [
          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          },
          {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          },
          {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }
        ],
        search: ''
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row)
      },
      handleDelete(index, row) {
        console.log(index, row)
      }
    }
  }
</script>
```

:::

### 表尾合计行

若表格展示的是各类数字，可以在表尾显示各列的合计。

将`show-summary`设置为`true`就会在表格尾部展示合计行。默认情况下，对于合计行，第一列不进行数据求合操作，而是显示「合计」二字（可通过`sum-text`配置），其余列会将本列所有数值进行求合操作，并显示出来。当然，你也可以定义自己的合计逻辑。使用`summary-method`并传入一个方法，返回一个数组，这个数组中的各项就会显示在合计行的各列中，具体可以参考本例中的第二个表格。

:::demo

```html
<template>
  <el-pro-table
    :data="tableData"
    :table-columns="columns"
    :auto-height="false"
    :table-options="{
      border:true,
      height:'300px',
      showSummary:true
    }"
  ></el-pro-table>

  <el-pro-table
    :data="tableData"
    :table-columns="columns"
    :auto-height="false"
    :table-options="{
      border:true,
      showSummary:true,
      height:'300px',
      summaryMethod:this.getSummaries
    }"
    style="margin-top: 20px"
  ></el-pro-table>
</template>

<script>
  export default {
    data() {
      return {
        columns: {
          id: {
            label: 'ID',
            tableColumnOption: {
              width: 180
            }
          },
          name: {
            label: '姓名',
            tableColumnOption: {
              width: 120
            }
          },
          amount1: {
            label: '数值 1',
            tableColumnOption: {
              sortable: true
            }
          },
          amount2: {
            label: '数值 2',
            tableColumnOption: {
              sortable: true
            }
          },
          amount3: {
            label: '数值 3',
            tableColumnOption: {
              sortable: true
            }
          }
        },
        tableData: [
          {
            id: '12987122',
            name: '王小虎',
            amount1: '234',
            amount2: '3.2',
            amount3: 10
          },
          {
            id: '12987123',
            name: '王小虎',
            amount1: '165',
            amount2: '4.43',
            amount3: 12
          },
          {
            id: '12987124',
            name: '王小虎',
            amount1: '324',
            amount2: '1.9',
            amount3: 9
          },
          {
            id: '12987125',
            name: '王小虎',
            amount1: '621',
            amount2: '2.2',
            amount3: 17
          },
          {
            id: '12987126',
            name: '王小虎',
            amount1: '539',
            amount2: '4.1',
            amount3: 15
          }
        ]
      }
    },
    methods: {
      getSummaries(param) {
        console.log(param, 'param')
        const { columns, data } = param
        const sums = []
        if (Array.isArray(columns) && columns.length) {
          columns.forEach((column, index) => {
            if (index === 0) {
              sums[index] = '总价'
              return
            }
            const values = data.map((item) => Number(item[column.property]))
            if (!values.every((value) => isNaN(value))) {
              sums[index] = values.reduce((prev, curr) => {
                const value = Number(curr)
                if (!isNaN(value)) {
                  return prev + curr
                } else {
                  return prev
                }
              }, 0)
              sums[index] += ' 元'
            } else {
              sums[index] = 'N/A'
            }
          })
        }

        return sums
      }
    }
  }
</script>
```

:::

### 合并行或列

多行或多列共用一个数据时，可以合并行或列。

通过给`table`传入`span-method`方法可以实现合并行或列，方法的参数是一个对象，里面包含当前行`row`、当前列`column`、当前行号`rowIndex`、当前列号`columnIndex`四个属性。该函数可以返回一个包含两个元素的数组，第一个元素代表`rowspan`，第二个元素代表`colspan`。 也可以返回一个键名为`rowspan`和`colspan`的对象。

:::demo

```html
<template>
  <div>
    <el-pro-table
      :data="tableData"
      :table-columns="columns"
      :auto-height="false"
      :table-options="{
        border:true,
        height:'300px',
        spanMethod:this.arraySpanMethod
    }"
    ></el-pro-table>

    <el-pro-table
      :data="tableData"
      :table-columns="columns"
      :auto-height="false"
      :table-options="{
        border:true,
        height:'300px',
        spanMethod:this.objectSpanMethod
    }"
      style="margin-top: 20px"
    ></el-pro-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        columns: {
          id: {
            label: 'ID',
            tableColumnOption: {
              width: 180
            }
          },
          name: {
            label: '姓名',
            tableColumnOption: {
              width: 120
            }
          },
          amount1: {
            label: '数值 1',
            tableColumnOption: {
              sortable: true
            }
          },
          amount2: {
            label: '数值 2',
            tableColumnOption: {
              sortable: true
            }
          },
          amount3: {
            label: '数值 3',
            tableColumnOption: {
              sortable: true
            }
          }
        },
        tableData: [
          {
            id: '12987122',
            name: '王小虎',
            amount1: '234',
            amount2: '3.2',
            amount3: 10
          },
          {
            id: '12987123',
            name: '王小虎',
            amount1: '165',
            amount2: '4.43',
            amount3: 12
          },
          {
            id: '12987124',
            name: '王小虎',
            amount1: '324',
            amount2: '1.9',
            amount3: 9
          },
          {
            id: '12987125',
            name: '王小虎',
            amount1: '621',
            amount2: '2.2',
            amount3: 17
          },
          {
            id: '12987126',
            name: '王小虎',
            amount1: '539',
            amount2: '4.1',
            amount3: 15
          }
        ]
      }
    },
    methods: {
      arraySpanMethod({ row, column, rowIndex, columnIndex }) {
        if (rowIndex % 2 === 0) {
          if (columnIndex === 0) {
            return [1, 2]
          } else if (columnIndex === 1) {
            return [0, 0]
          }
        }
      },

      objectSpanMethod({ row, column, rowIndex, columnIndex }) {
        if (columnIndex === 0) {
          if (rowIndex % 2 === 0) {
            return {
              rowspan: 2,
              colspan: 1
            }
          } else {
            return {
              rowspan: 0,
              colspan: 0
            }
          }
        }
      }
    }
  }
</script>
```

:::

### 自定义索引

自定义 `type=index` 列的行号。

`showFormat(val,row,scope)`函数返回当前的值，整行的值和`scope`，可以用来格式化数据

:::demo

```html
<template>
  <el-pro-table
    :data="tableData"
    :table-columns="columns"
    :auto-height="false"
    :table-options="{
        height:'300px',
    }"
  />
</template>

<script>
  export default {
    data() {
      return {
        columns: {
          index: {
            label: '#',
            tableColumnOption: {
              type: 'index'
            },
            showFormat: (val, row, scope) => {
              return scope.$index * 2
            }
          },
          date: {
            label: '日期',
            tableColumnOption: {
              width: 180
            }
          },
          name: {
            label: '姓名',
            tableColumnOption: {
              width: 120
            }
          },
          address: {
            label: '地址'
          }
        },
        tableData: [
          {
            date: '2016-05-02',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333,
            tag: '家'
          },
          {
            date: '2016-05-04',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1517 弄',
            zip: 200333,
            tag: '公司'
          },
          {
            date: '2016-05-01',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1519 弄',
            zip: 200333,
            tag: '家'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1516 弄',
            zip: 200333,
            tag: '公司'
          }
        ]
      }
    },
    methods: {}
  }
</script>
```

:::

## Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :-: | :-: | :-: | :-: | :-: |
| columns | 表格配置项,只显示 showInTable:true 的表格(详情见 CustomForm 说明) 多级表头使用数组类型,children 是子项 | object/array | — | {}/[] |
| tableColumns | 表格配置项,全部显示 | object/array | — | {}/[] |
| loading | 表格 loading | boolean | — | false |
| selection | 是否多选 | boolean | — | false |
| expand | 是否展开行 | boolean | — | false |
| reserveSelection | 仅对 type=selection 的列有效，类型为 Boolean，为 true 则会在数据更新之后保留之前选中的数据（需指定 row-key） | boolean | — | false |
| data | 表格数据 | array | — | [] |
| autoHeight | 是否自动计算表格高度 | boolean | — | true |
| tableOptions | 表格配置项,例如 hasOperation:ture,显示操作栏 | object | — | { height:'200px ',highlightCurrentRow:true,size:'medium'} |
| operationOptions | 操作栏的配置项，默认{label: "操作",fixed: "right",width: "150",align: "center",} | object | — | {} |
| updateFunc | 修改事件 | function(row,index) | — | — |
| deleteFunc | 删除事件 | function(row,index) | — | — |
| updateText | 修改按钮文字 | string | — | 修改 |
| deleteText | 删除按钮文字 | string | — | 删除 |
| updateProps | 修改按钮 props | object | — | {} |
| deleteProps | 删除按钮 props | object | — | {} |
| rowOption | 工具栏 el-row 配置项 | object | — | { gutter:10 } |
| showSearch.sync | 是否显示搜索 | boolean | — | true |
| showToolbar | 是否显示工具栏 | boolean | — | false |
| bottomOffset | 表格自动高度距离底部多少 | nmber/string | — | 30,有分页自动+60 |
| deleteTip | 删除时提示语 | string | — | 此操作将永久删除该行, 是否继续? |
| showToolbarRight | 是否显示右侧工具栏 | boolean | — | true |
| total | 总数 | number | — | 0 |
| pagination.sync | 分页和查询条件 | object | — | {} |
| paginationStyle | el-pagination 的 style | object | — | {} |
| customStyle | 自定义外层容器 style | object | — | {} |
| pageSizes | 分页显示的条数 | array | — | [10, 20, 30, 50, 100] |
| paginationOptions | [官方支持分页的其他 options](https://element.eleme.cn/#/zh-CN/component/pagination) | object | — | {} |
| customProps | 自定义分页 page 和 pageSize 字段 | object | — | { page :'page',pageSize:''pageSize } |

## Slot

|        name        |          说明          |
| :----------------: | :--------------------: |
|   \${key}Header    |      表单头部内容      |
|      \${key}       |        表单内容        |
|  operationColumn   |       操作栏内容       |
|  operationBefore   | 修改删除按钮之前的内容 |
|   autoOperation    |   修改删除按钮的内容   |
|  operationMiddle   | 修改删除按钮之间的内容 |
|   operationAfter   | 修改删除按钮之后的内容 |
|    toolbarLeft     |       工具栏左侧       |
| toolbarRightBefore |     工具栏右侧前面     |
| toolbarRightMiddle |     工具栏右侧中间     |
| toolbarRightAfter  |     工具栏右侧后面     |
|    expandColumn    |       展开行内容       |

## Events

| 事件名称 | 说明 | 回调参数 |
| :-: | :-: | :-: |
| clearSelection | 用于多选表格，清空用户的选择 | — |
| toggleRowSelection | 用于多选表格，切换某一行的选中状态，如果使用了第二个参数，则是设置这一行选中与否（selected 为 true 则选中） | row, selected |
| toggleAllSelection | 用于多选表格，切换所有行的选中状态 | — |
| toggleRowExpansion | 用于可展开表格与树形表格，切换某一行的展开状态，如果使用了第二个参数，则是设置这一行展开与否（expanded 为 true 则展开） | row, expanded |
| setCurrentRow | 用于单选表格，设定某一行为选中行，如果调用时不加参数，则会取消目前高亮行的选中状态。 | row |
| clearFilter | 不传入参数时用于清空所有过滤条件，数据会恢复成未过滤的状态，也可传入由 columnKey 组成的数组以清除指定列的过滤条件 | columnKey |
| clearSort | 用于清空排序条件，数据会恢复成未排序的状态 | — |
| doLayout | 对 Table 进行重新布局。当 Table 或其祖先元素由隐藏切换为显示时，可能需要调用此方法 | — |
| sort | 手动对 Table 进行排序。参数`prop`属性指定排序列，`order`指定排序顺序。 | prop: string, order: string |
| onLoad | pageSize 或 pageNo 变化时触发 | — |
| refresh | 表格刷新事件 | — |
