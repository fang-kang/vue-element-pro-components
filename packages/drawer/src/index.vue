<template>
  <el-drawer
    append-to-body
    :visible="showVisible"
    :placement="placement"
    custom-class="el-pro-drawer"
    :size="`${drawerWidth}px`"
    :show-close="false"
    v-bind="drawerOptions"
    @close="showVisible = false"
    v-on="$listeners"
  >
    <div
      slot="title"
      class="drawerHeader"
    >
      <span>{{ title }}</span>
      <i
        class="el-icon-close drawerClose"
        @click="showVisible = false"
      />
    </div>

    <el-scrollbar style="height: 100%">
      <slot />
    </el-scrollbar>
  </el-drawer>
</template>

<script>
export default {
  name: 'ElProDrawer',
  model: {
    prop: 'visible',
    event: 'update:visible'
  },
  props: {
    drawerWidth: {
      type: Number,
      default: 400
    },
    visible: {
      type: Boolean,
      default: false
    },
    placement: {
      type: String,
      default: 'right'
    },
    drawerOptions: {
      type: Object,
      default: () => {
        return {}
      }
    },
    title: {
      type: String,
      default: ''
    }
  },
  data() {
    return {}
  },
  computed: {
    showVisible: {
      get() {
        return this.visible
      },
      set(val) {
        this.$emit('update:visible', val)
      }
    }
  }
}
</script>

<style lang="scss">
.el-drawer__body {
  .el-scrollbar__wrap {
    overflow-x: hidden;
  }
}

.el-pro-drawer {
  .el-drawer__header {
    margin-bottom: 10px;
    & > span {
      border: none;
    }
    .el-drawer__close-btn,
    .el-icon-close {
      border: none !important;
    }
    .drawerHeader {
      position: relative;
      padding-bottom: 20px;

      .drawerClose {
        cursor: pointer;
        float: right;
      }
      &:after {
        content: '';
        position: absolute;
        border-bottom: 1px solid #e8e8e8;
        width: calc(100% + 40px);
        left: -20px;
        bottom: 0;
      }
    }
  }
  .el-drawer__body {
    padding: 15px;
  }
}
</style>
