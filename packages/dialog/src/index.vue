<template>
  <el-dialog
    ref="dialogRef"
    v-el-drag-dialog="dialogProcessOptions.draggable"
    custom-class="el-pro-dialog"
    :fullscreen="fullscreen"
    :visible.sync="showVisible"
    v-bind="dialogProcessOptions"
    @closed="closed"
    v-on="$listeners"
  >
    <template slot="title">
      <slot v-if="$slots.title" name="title" />
      <div
        v-else
        class="el-pro-dialog__header"
        :class="[dialogProcessOptions.center ? 'justify-content-c' : '']"
      >
        <slot name="nameBefore" />
        <slot name="title">
          <span class="el-dialog__title">{{ title }}</span>
        </slot>
        <slot name="nameAfter" />
        <el-button
          v-if="dialogProcessOptions.showFullscreen"
          :icon="fullscreen ? 'el-icon-minus' : 'el-icon-full-screen'"
          class="dialog__icon"
          @click="toggleFull"
        />
      </div>
    </template>
    <el-scrollbar v-loading="showLoading" :class="scrollbarClass">
      <div class="content__wrap">
        <slot />
      </div>
    </el-scrollbar>
    <div v-if="!$slots.footer" slot="footer">
      <slot name="beforeFooter" />
      <el-button v-bind="cancelBtnProps" @click="handleCancel">
        {{ cancelBtnText }}
      </el-button>
      <slot name="middleFooter" />
      <el-button
        type="primary"
        :loading="showBtnLoading"
        v-bind="confirmBtnProps"
        @click="handleOk"
      >
        {{ confirmBtnText }}
      </el-button>
      <slot name="afterFooter" />
    </div>
    <template v-if="$slots.footer" #footer>
      <slot name="footer" />
    </template>
  </el-dialog>
</template>

<script>
import elDragDialog from 'vue-element-pro-components/src/directive/dialog'
export default {
  name: 'ElProDialog',
  directives: { elDragDialog },
  model: {
    prop: 'visible',
    event: 'update:visible'
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    cancelBtnText: {
      type: String,
      default: '取消'
    },
    confirmBtnText: {
      type: String,
      default: '确定'
    },
    cancelBtnProps: {
      type: Object,
      required: false,
      default() {
        return {}
      }
    },
    confirmBtnProps: {
      type: Object,
      required: false,
      default() {
        return {}
      }
    },
    dialogOptions: {
      type: Object,
      required: false,
      default() {
        return {}
      }
    },
    visible: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    btnLoading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      fullscreen: false
    }
  },
  computed: {
    scrollbarClass() {
      const { fullscreen } = this
      const { footer } = this.$slots
      return fullscreen && footer
        ? 'el-pro-dialog__content--footer'
        : fullscreen && !footer
        ? 'el-pro-dialog__content--fullscreen'
        : 'el-pro-dialog__content'
    },
    showBtnLoading: {
      get() {
        return this.btnLoading
      },
      set(val) {
        this.$emit('update:btnLoading', val)
      }
    },
    showVisible: {
      get() {
        return this.visible
      },
      set(val) {
        this.$emit('update:visible', val)
      }
    },
    showLoading: {
      get() {
        return this.loading
      },
      set(val) {
        this.$emit('update:loading', val)
      }
    },
    dialogProcessOptions() {
      return {
        closeOnClickModal: true,
        top: '10vh',
        width: '60%',
        destroyOnClose: false,
        appendToBody: true,
        lockScroll: true,
        showFullscreen: true,
        draggable: true,
        center: false,
        ...(this.dialogOptions || {})
      }
    }
  },
  created() {
    const { fullscreen } = this.dialogProcessOptions
    if (fullscreen) {
      this.fullscreen = fullscreen
    }
  },
  methods: {
    handleOk() {
      this.$emit('ok')
    },
    handleCancel() {
      this.showVisible = false
      this.$emit('cancel')
    },
    processDrag() {
      const dragDom = this.$refs.dialogRef.$refs.dialog
      const dialogHeaderEl = document.querySelector('.el-pro-dialog .el-dialog__header')
      const { fullscreen } = this
      const { draggable } = this.dialogProcessOptions
      // 全屏的时候需要重新定义left top
      if (fullscreen && draggable) {
        dragDom.style.cssText += `;left:0px;top:0px;`
        dialogHeaderEl.style.cssText += ';cursor:default;'
      } else if (!fullscreen && draggable) {
        dialogHeaderEl.style.cssText += ';cursor:move;user-select:none;'
      }
      dragDom.style.cssText += `;left:0px;top:0px;`
    },
    closed() {
      const { draggable } = this.dialogProcessOptions
      this.fullscreen = false
      if (draggable) {
        this.processDrag()
      }
      this.$emit('closed')
    },
    toggleFull() {
      this.fullscreen = !this.fullscreen
      this.processDrag()
    }
  }
}
</script>
<style lang="scss">
.el-dialog {
  position: relative;
  left: 0;
  margin: 0 auto;
  transform: none;
}
.el-pro-dialog {
  .el-dialog__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
  }

  .el-dialog__headerbtn {
    top: 18px !important;
  }

  .el-dialog__body {
    padding: 15px;
    .el-table__empty-block {
      width: auto;
    }
  }
  .el-dialog__footer {
    height: auto;
    padding: 10px;
  }
  .dialog__icon {
    position: absolute;
    top: 20px;
    right: 45px;
    padding: 0;
    font-size: 14px;
    color: #909399;
    cursor: pointer;
    background: 0 0;
    border: none;
    outline: 0;
    transition: color 0.2s;

    &:hover {
      color: #409eff;
    }
  }

  &__header {
    display: flex;
    align-items: center;
  }

  .justify-content-c {
    justify-content: center;
  }

  .content__wrap {
    min-height: 100px;
    overflow-x: hidden;
  }

  &__content {
    .el-scrollbar__wrap {
      max-height: 60vh; // 最大高度
      min-height: 100px; // 最小高度
      padding: 10px 0;
      overflow-x: hidden; // 隐藏横向滚动栏
    }
  }

  &__content--fullscreen {
    .el-scrollbar__wrap {
      max-height: calc(100vh - 46px - 120px); // 最大高度
      min-height: 100px; // 最小高度
      padding: 10px 0;
      overflow-x: hidden; // 隐藏横向滚动栏
    }
  }

  &__content--footer {
    .el-scrollbar__wrap {
      max-height: calc(100vh - 46px - 60px - 80px); // 最大高度
      min-height: 100px; // 最小高度
      padding: 10px 0;
      overflow-x: hidden; // 隐藏横向滚动栏
    }
  }
}

.is-fullscreen.el-pro-dialog {
  display: flex;
  flex-direction: column;
  .el-dialog__body {
    flex: 1;
  }
}
</style>
