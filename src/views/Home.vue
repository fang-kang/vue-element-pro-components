<template>
  <div>
    <el-button size="small" @click="visible2 = true">打开</el-button>
    <custom-dialog
      title="测试"
      v-model="visible2"
      :dialog-options="{}"
      :btn-loading="btnLoading"
      @open="open"
      @opened="opened"
      @close="close"
      @closed="closed"
      @ok="ok"
    >
      <div>哈哈哈</div>
      <!-- <div slot="footer">
        <el-button size="small" @click="visible2 = false">取消</el-button>
        <el-button size="small" type="primary" @click="sure">确认</el-button>
      </div> -->
    </custom-dialog>
  </div>
</template>

<script>
import CustomDialog from "@/components/CustomDialog";
export default {
  components: { CustomDialog },
  data() {
    return {
      visible2: false,
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
