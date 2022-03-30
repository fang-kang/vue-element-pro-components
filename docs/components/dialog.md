# 通用对话框-ElProDialog

对 element-ui 的 dialog 组件进行封装，扩展拖拽，全屏，自适应高度等功能

## 示例

### 基本用法&拖拽&全屏

:::demo 需要设置`v-model`属性，它接收`Boolean`，当为`true`时显示 ElProDialog。ElProDialog 分为两个部分：`body`和`footer`，`footer`默认封装了取消，确定按钮,接收`cancel`和`ok`两个回调事件,或者也可以使用具名为`footer`的`slot`。`title`属性用于定义标题，它是可选的，默认值为空。最后，本例还展示了`before-close`的用法。

```html
<template>
  <div>
    <el-button type="text" @click="dialogVisible = true">点击打开 ElProDialog</el-button>
    <el-pro-dialog
      title="提示"
      v-model="dialogVisible"
      :dialog-options="{
        width: '30%',
        beforeClose:handleClose
      }"
      @ok="dialogVisible = false"
      @closed="handleClosed"
    >
      <span>这是一段信息</span>
    </el-pro-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        dialogVisible: false
      }
    },
    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then((_) => {
            done()
          })
          .catch((_) => {})
      },
      handleClosed() {
        console.log('Dialog 关闭动画结束时的回调,可以用来清除表单的检验和信息等')
      }
    }
  }
</script>
```

:::

### 超出高度自适应和头部和底部采用居中布局

:::demo

```html
<template>
  <div>
    <el-button type="text" @click="dialogVisible = true">点击打开 ElProDialog</el-button>
    <el-pro-dialog
      title="提示"
      v-model="dialogVisible"
      :dialog-options="{
        center:true
      }"
      @ok="dialogVisible = false"
    >
      <div style="height:1000px">超出高度了</div>
    </el-pro-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        dialogVisible: false
      }
    }
  }
</script>
```

:::

### 弹窗的加载中状态

:::demo

```html
<template>
  <div>
    <el-button type="text" @click="dialogVisible = true">点击打开 ElProDialog</el-button>
    <el-pro-dialog
      title="加载中"
      v-model="dialogVisible"
      :loading="loading"
      :dialog-options="{
        width:'30%'
      }"
      @ok="dialogVisible = false"
    >
      <div>加载中的时候需要loading...</div>
    </el-pro-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        dialogVisible: false,
        loading: true
      }
    }
  }
</script>
```

:::

### 标题的插槽和按钮的 props

:::demo

```html
<template>
  <div>
    <el-button type="text" @click="dialogVisible = true">点击打开 ElProDialog</el-button>
    <el-pro-dialog
      title="标题的插槽"
      v-model="dialogVisible"
      :confirm-btn-props="{ disabled:true,icon:'el-icon-check' }"
      :dialog-options="{
        width:'30'
      }"
      @ok="dialogVisible = false"
    >
      <template #nameBefore>
        <i class="el-icon-warning" style="margin-right:5px;"></i>
      </template>
      <template #nameAfter>
        <i class="el-icon-circle-close" style="margin-left:5px;"></i>
      </template>
      <div>弹窗内容</div>
    </el-pro-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        dialogVisible: false
      }
    }
  }
</script>
```

:::

### 自定义底部 footer 内容

:::demo

```html
<template>
  <div>
    <el-button type="text" @click="dialogVisible = true">点击打开 ElProDialog</el-button>
    <el-pro-dialog
      title="标题"
      v-model="dialogVisible"
      :dialog-options="{
        width:'30'
      }"
    >
      <div>弹窗内容</div>
      <div slot="footer">
        我是底部footer内容
      </div>
    </el-pro-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        dialogVisible: false
      }
    }
  }
</script>
```

:::

### 自定义内容

ElProDialog 组件的内容可以是任意的，甚至可以是表格或表单，下面是应用了 ElProTable 和 ElProForm 组件的两个样例。

:::demo

```html
<!-- Table -->
<el-button type="text" @click="dialogTableVisible = true">打开嵌套表格的 Dialog</el-button>

<el-pro-dialog title="收货地址" v-model="dialogTableVisible" @ok="dialogTableVisible=false">
  <el-pro-table :data="gridData" :columns="columns" />
</el-pro-dialog>

<!-- Form -->
<el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button>

<el-pro-dialog title="收货地址" v-model="dialogFormVisible" @ok="dialogFormVisible=false">
  <el-pro-form v-model="form" :columns="columns" :form-options="{ labelWidth: '120px' }" />
</el-pro-dialog>

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
        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          name: ''
        }
      }
    }
  }
</script>
```

:::

:::tip Dialog 的内容是懒渲染的，即在第一次被打开之前，传入的默认 slot 不会被渲染到 DOM 上。因此，如果需要执行 DOM 操作，或通过 `ref` 获取相应组件，请在 `open` 事件回调中进行。 :::

## Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :-: | :-: | :-: | :-: | :-: |
| v-model | 是否显示 Dialog | boolean | — | false |
| title | Dialog 的标题 | string | — | — |
| dialogOptions | [官方支持的参数集合](https://element.eleme.cn/#/zh-CN/component/dialog) 除此之外，还扩展支持 showFullscreen:true,draggable:true | object | — | {} |
| loading | 弹窗 loading | boolean | — | false |
| btnLoading | 确定按钮 loading | boolean | — | false |
| confirmBtnText | 底部 footer 确定按钮文字 | string | — | 确定 |
| cancelBtnText | 底部 footer 取消按钮文字 | string | — | 取消 |
| confirmBtnProps | 底部 footer 确定按钮 props | object | — | — |
| cancelBtnProps | 底部 footer 取消按钮 props | object | — | — |

## Slot

|     name     |             说明             |
| :----------: | :--------------------------: |
|      —       |        Dialog 的内容         |
|  nameBefore  |    Dialog 标题前面的内容     |
|  nameAfter   |    Dialog 标题后面的内容     |
| beforeFooter |      取消按钮前面的内容      |
| middleFooter | 取消按钮和确定按钮中间的内容 |
| afterFooter  |      确定按钮后面的内容      |
|    footer    |         底部 footer          |
|    title     |     Dialog 的自定义标题      |

## Events

| 事件名称 |            说明             | 回调参数 |
| :------: | :-------------------------: | :------: |
|   open   |      Dialog 打开的回调      |    —     |
|  opened  | Dialog 打开动画结束时的回调 |    —     |
|  close   |      Dialog 关闭的回调      |    —     |
|  closed  | Dialog 关闭动画结束时的回调 |    —     |
|  cancel  |      点击取消按钮回调       |    —     |
|    ok    |      点击确定按钮回调       |    —     |
