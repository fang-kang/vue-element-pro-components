<template>
  <el-dialog
    ref="dialogRef"
    custom-class="com-dialog"
    :fullscreen="dialogProcessOptions.fullscreen || fullscreen"
    :visible.sync="showVisible"
    v-bind="dialogProcessOptions"
    @closed="closed"
    v-on="$listeners"
  >
    <template #title>
      <div class="com-dialog__header">
        <slot name="nameBefore"></slot>
        <slot name="title">
          <span style="font-size: 18px">{{ title }}</span>
        </slot>
        <slot name="nameAfter"></slot>
        <i
          v-if="dialogProcessOptions.showFullscreen"
          :class="fullscreen ? 'el-icon-minus' : 'el-icon-full-screen'"
          class="dialog__icon"
          @click="toggleFull"
        ></i>
      </div>
    </template>
    <!-- 弹窗内容 -->
    <el-scrollbar
      v-loading="showLoading"
      :class="
        fullscreen && $slots.footer
          ? 'com-dialog__content--footer'
          : fullscreen && !$slots.footer
          ? 'com-dialog__content--fullscreen'
          : 'com-dialog__content'
      "
    >
      <div class="content__wrap">
        <slot></slot>
      </div>
    </el-scrollbar>

    <div slot="footer" v-if="showAction">
      <el-button size="small" @click="handleCancel">取消</el-button>
      <el-button size="small" type="primary" :loading="showBtnLoading" @click="handleOk"
        >确定</el-button
      >
    </div>

    <template v-if="$slots.footer && !showAction" #footer>
      <slot name="footer"></slot>
    </template>
  </el-dialog>
</template>

<script>
export default {
  name: "CustomDialog",
  model: {
    prop: "visible",
    event: "update:visible",
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    dialogOptions: {
      type: Object,
      required: false,
      default() {
        return {};
      },
    },
    visible: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    btnLoading: {
      type: Boolean,
      default: false,
    },
    showAction: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      fullscreen: false,
    };
  },
  computed: {
    showBtnLoading: {
      get() {
        return this.btnLoading;
      },
      set(val) {
        this.$emit("update:btnLoading", val);
      },
    },
    showVisible: {
      get() {
        return this.visible;
      },
      set(val) {
        this.$emit("update:visible", val);
      },
    },
    showLoading: {
      get() {
        return this.loading;
      },
      set(val) {
        this.$emit("update:loading", val);
      },
    },
    dialogProcessOptions() {
      return {
        closeOnClickModal: false,
        top: "10vh",
        width: "60%",
        destroyOnClose: false,
        lockScroll: true,
        showFullscreen: false,
        draggable: false,
        center: false,
        ...(this.dialogOptions || {}),
      };
    },
  },
  mounted() {
    const { draggable } = this.dialogProcessOptions;
    if (draggable) {
      this.initDraggable();
    }
  },
  methods: {
    handleOk() {
      this.$emit("ok");
    },
    handleCancel() {
      this.showVisible = false;
      this.$emit("cancel");
    },
    processDrag() {
      const dragDom = document.querySelector(".com-dialog");
      const dialogHeaderEl = document.querySelector(".com-dialog .el-dialog__header");
      const { fullscreen } = this;
      const { draggable } = this.dialogProcessOptions;
      // 全屏的时候需要重新定义left top
      if (fullscreen && draggable) {
        dragDom.style.cssText += `;left:0px;top:0px;`;
        dialogHeaderEl.style.cssText += ";cursor:default;user-select:none;";
      } else {
        dialogHeaderEl.style.cssText += ";cursor:move;user-select:none;";
      }
    },
    closed() {
      const { draggable } = this.dialogProcessOptions;
      this.fullscreen = false;
      if (draggable) {
        this.processDrag();
      }
      this.$emit("closed");
    },
    toggleFull() {
      this.fullscreen = !this.fullscreen;
      this.processDrag();
    },
    initDraggable() {
      this.$nextTick(() => {
        const dragDom = document.querySelector(".com-dialog");
        const dialogHeaderEl = document.querySelector(".com-dialog .el-dialog__header");
        dialogHeaderEl.style.cssText += ";cursor:move;user-select:none;";
        const sty = dragDom.currentStyle || window.getComputedStyle(dragDom, null);
        dialogHeaderEl.onmousedown = (e) => {
          const disX = e.clientX - dialogHeaderEl.offsetLeft;
          const disY = e.clientY - dialogHeaderEl.offsetTop;

          const dragDomWidth = dragDom.offsetWidth;
          const dragDomHeight = dragDom.offsetHeight;

          const screenWidth = document.documentElement.clientWidth;
          const screenHeight = document.documentElement.clientHeight;

          const minDragDomLeft = dragDom.offsetLeft;
          const maxDragDomLeft = screenWidth - dragDom.offsetLeft - dragDomWidth;

          const minDragDomTop = dragDom.offsetTop;
          const maxDragDomTop = screenHeight - dragDom.offsetTop - dragDomHeight;

          const styleLeftStr = sty.left;
          const styleTopStr = sty.top;

          if (!styleLeftStr || !styleTopStr) return;
          let styleLeft;
          let styleTop;

          // Format may be "##%" or "##px"
          if (styleLeftStr.includes("%")) {
            styleLeft = +screenWidth * (+styleLeftStr.replace(/%/g, "") / 100);
            styleTop = +screenHeight * (+styleTopStr.replace(/%/g, "") / 100);
          } else {
            styleLeft = +styleLeftStr.replace(/px/g, "");
            styleTop = +styleTopStr.replace(/px/g, "");
          }

          document.onmousemove = (e) => {
            let left = e.clientX - disX;
            let top = e.clientY - disY;

            // Handle edge cases
            if (-left > minDragDomLeft) {
              left = -minDragDomLeft;
            } else if (left > maxDragDomLeft) {
              left = maxDragDomLeft;
            }
            if (-top > minDragDomTop) {
              top = -minDragDomTop;
            } else if (top > maxDragDomTop) {
              top = maxDragDomTop;
            }

            // 移动当前元素
            dragDom.style.left = `${left + styleLeft}px`;
            dragDom.style.top = `${top + styleTop}px`;
          };

          document.onmouseup = () => {
            document.onmousemove = null;
            document.onmouseup = null;
          };
        };
      });
    },
  },
};
</script>
<style lang="scss">
.com-dialog {
  .el-dialog__header {
    padding: 16px 24px;
    border-bottom: 1px solid #e8e8e8;
  }
  .el-dialog__body {
    padding: 24px;
    .el-table__empty-block {
      width: auto !important;
    }
  }
  .el-dialog__footer {
    border-top: 1px solid #e8e8e8;
    padding: 10px 16px;
    height: auto;
    .el-button {
      padding: 8px 20px;
    }
  }
  .dialog__icon {
    position: absolute;
    top: 22px;
    right: 45px;
    font-size: 12px;
    color: #909399;
    cursor: pointer;
    transition: color 0.2s;

    &:hover {
      color: #409eff;
    }
  }

  &__header {
    display: flex;
    align-items: center;
  }

  &__content {
    .content__wrap {
      padding-right: 10px;
    }

    .el-scrollbar__wrap {
      padding: 10px 0;
      max-height: 500px; // 最大高度
      // overflow-x: hidden; // 隐藏横向滚动栏
    }
  }

  &__content--fullscreen {
    .el-scrollbar__wrap {
      max-height: calc(100vh - 46px - 120px); // 最大高度
      // overflow-x: hidden; // 隐藏横向滚动栏
      padding: 10px 0;
    }
  }

  &__content--footer {
    .el-scrollbar__wrap {
      max-height: calc(100vh - 46px - 60px - 80px); // 最大高度
      padding: 10px 0;
      // overflow-x: hidden; // 隐藏横向滚动栏
    }
  }
}
</style>
