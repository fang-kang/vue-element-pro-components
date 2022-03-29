<template>
  <div>
    <el-button @click="visible = true">
      打开
    </el-button>
    <el-pro-dialog
      v-model="visible"
      title="测试"
      :dialog-options="{
        width: '40%'
      }"
      :btnLoading="btnLoading"
      @open="open"
      @opened="opened"
      @close="close"
      @closed="closed"
      @ok="ok"
    >
      <div style="height: 1000px">
        测试弹窗
      </div>
    </el-pro-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
      btnLoading: false
    }
  },
  methods: {
    ok() {
      this.btnLoading = true
      setTimeout(() => {
        this.btnLoading = false
        this.visible2 = false
      }, 3000)
    },
    close() {
      console.log('close')
    },
    closed() {
      console.log('closed')
    },
    opened() {
      console.log('opened')
    },
    open() {
      console.log('open')
    },
    beforeClose(done) {
      console.log('beforeClose')
      done()
    },
    sure() {
      console.log('sure')
    }
  }
}
</script>
