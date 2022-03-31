---
title: 通用抽屉-ElProDrawer
---

内部嵌套了`el-scroolbar`滚动条

## 示例

### 基本用法

呼出一个临时的侧边栏, 可以从多个方向呼出

drawerWidth 设置宽度

:::demo 需要设置 `v-model` 属性，它的**类型**是 `boolean`,当为 **true** 时显示 Drawer。需要注意的是, Drawer 默认是从右往左打开, 当然可以设置对应的 `direction`, 详细请参考 `direction` 用法 最后，本例还展示了 `before-close` 的用法

```html
<el-radio-group v-model="direction">
  <el-radio label="ltr">从左往右开</el-radio>
  <el-radio label="rtl">从右往左开</el-radio>
  <el-radio label="ttb">从上往下开</el-radio>
  <el-radio label="btt">从下往上开</el-radio>
</el-radio-group>

<el-button @click="drawer = true" type="primary" style="margin-left: 16px;">
  点我打开
</el-button>

<el-pro-drawer
  title="我是标题"
  v-model="drawer"
  :direction="direction"
  :drawer-options="{
   beforeClose:handleClose,
 }"
>
  <div style="height:1000px;">我来啦!</div>
</el-pro-drawer>

<script>
  export default {
    data() {
      return {
        drawer: false,
        direction: 'rtl'
      }
    },
    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then((_) => {
            done()
          })
          .catch((_) => {})
      }
    }
  }
</script>
```

:::

### 不添加 Title

当你不需要标题到时候, 你还可以去掉标题

:::demo 当遇到不需要 title 的场景时, 可以通过 `withHeader` 这个属性来关闭掉 title 的显示, 这样可以留出更大的空间给到用户, 为了用户的可访问性, 请务必设定 `title` 的值

```html
<el-button @click="drawer = true" type="primary" style="margin-left: 16px;">
  点我打开
</el-button>

<el-pro-drawer
  title="我是标题"
  v-model="drawer"
  :drawer-options="{
   withHeader:false,
 }"
>
  <span>我来啦!</span>
</el-pro-drawer>

<script>
  export default {
    data() {
      return {
        drawer: false
      }
    }
  }
</script>
```

:::

### 自定义内容

和 `ElProDialog` 组件一样, `ElProDrawer` 同样可以在其内部嵌套各种丰富的操作

:::demo

```html
<!-- Table -->
<el-button type="text" @click="tableVisible = true">打开嵌套表格的 Drawer</el-button>

<el-pro-drawer :size="800" title="收货地址" v-model="tableVisible">
  <el-pro-table :data="gridData" :columns="columns" />
</el-pro-drawer>

<!-- Form -->
<el-button type="text" @click="formVisible = true">打开嵌套表单的 Drawer</el-button>

<el-pro-drawer title="收货地址" v-model="formVisible">
  <el-pro-form v-model="form" :columns="columns" :form-options="{ labelWidth: '120px' }" />
</el-pro-drawer>

<script>
  export default {
    data() {
      return {
        columns: {
          name: {
            label: '活动名称',
            showInTable: true,
            tableColumnOption: {
              width: 200
            }
          },
          region: {
            label: '活动区域',
            type: 'select',
            options: [
              {
                name: '区域一',
                value: 1
              },
              {
                name: '区域二',
                value: 2
              }
            ]
          },
          date: {
            label: '日期',
            type: 'date',
            showInTable: true,
            tableColumnOption: {
              width: 150
            }
          },
          address: {
            label: '地址',
            showInTable: true,
            formColumnShow: false
          }
        },
        gridData: [
          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          },
          {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          },
          {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }
        ],
        tableVisible: false,
        formVisible: false,
        form: {
          name: ''
        }
      }
    }
  }
</script>
```

:::

### 多层嵌套

:::demo 同样, 如果你需要嵌套多层 `Drawer` 请一定要设置 `append-to-body` 属性为 **true**

```html
<el-button @click="drawer = true" type="primary" style="margin-left: 16px;">
  点我打开
</el-button>

<el-pro-drawer title="我是外面的 Drawer" v-model="drawer" size="50%">
  <div>
    <el-button @click="innerDrawer = true">打开里面的!</el-button>
    <el-pro-drawer
      title="我是里面的"
      v-model="innerDrawer"
      :drawer-options="{
      beforeClose:handleClose,
 }"
    >
      <p>_(:зゝ∠)_</p>
    </el-pro-drawer>
  </div>
</el-pro-drawer>

<script>
  export default {
    data() {
      return {
        drawer: false,
        innerDrawer: false
      }
    },
    methods: {
      handleClose(done) {
        this.$confirm('还有未保存的工作哦确定关闭吗？')
          .then((_) => {
            done()
          })
          .catch((_) => {})
      }
    }
  }
</script>
```

:::

## Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :-: | :-: | :-: | :-: | :-: |
| v-model | 是否显示抽屉 | boolean | — | false |
| size | 抽屉的宽度 | [number,string] | — | 400 |
| direction | 弹出方向 | string | rtl / ltr / ttb / btt | rtl |
| drawerOptions | [官方支持的抽屉的 options](https://element.eleme.cn/#/zh-CN/component/drawer) | object | — | {} |
| title | 抽屉标题 | string | — | — |

## Slot

|  name   |      说明      |
| :-----: | :------------: |
| default | 抽屉内部的内容 |
|  title  |     title      |

## Events

| 事件名称 |            说明             |
| :------: | :-------------------------: |
|   open   |      Drawer 打开的回调      |
|  opened  | Drawer 打开动画结束时的回调 |
|  close   |      Drawer 关闭的回调      |
|  closed  | Drawer 关闭动画结束时的回调 |
