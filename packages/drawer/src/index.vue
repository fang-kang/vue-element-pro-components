<template>
  <el-drawer
    append-to-body
    :visible="showVisible"
    :direction="direction"
    custom-class="el-pro-drawer"
    :size="size"
    :show-close="false"
    v-bind="drawerOptions"
    @close="showVisible = false"
    v-on="$listeners"
  >
    <div
      v-if="!$slots.title"
      slot="title"
      class="drawerHeader"
    >
      <span>{{ title }}</span>
      <i
        class="el-icon-close drawerClose"
        @click="showVisible = false"
      />
    </div>
    <slot
      v-if="$slots.title"
      name="title"
      class="drawerHeader"
    />
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
    size: {
      type: [Number, String],
      default: 400
    },
    visible: {
      type: Boolean,
      default: false
    },
    direction: {
      type: String,
      default: 'rtl'
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
