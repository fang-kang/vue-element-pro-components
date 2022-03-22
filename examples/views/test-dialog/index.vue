<template>
  <div>
    <el-button size="small" @click="visible = true">打开</el-button>
    <el-pro-dialog
      title="测试"
      v-model="visible"
      :dialog-options="{
        width: '40%',
        showFullscreen: true,
        draggable: true,
      }"
      :btn-loading="btnLoading"
      @open="open"
      @opened="opened"
      @close="close"
      @closed="closed"
      @ok="ok"
    >
      <div>测试弹窗</div>
    </el-pro-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      btnLoading: false,
    };
  },
  methods: {
    ok() {
      this.btnLoading = true;
      setTimeout(() => {
        this.btnLoading = false;
        this.visible2 = false;
      }, 3000);
    },
    close() {
      console.log("close");
    },
    closed() {
      console.log("closed");
    },
    opened() {
      console.log("opened");
    },
    open() {
      console.log("open");
    },
    beforeClose(done) {
      console.log("beforeClose");
      done();
    },
    sure() {
      console.log("sure");
    },
  },
};
</script>

<style lang="scss" scoped></style>
