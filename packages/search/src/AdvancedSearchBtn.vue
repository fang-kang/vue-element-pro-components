<template>
  <fragment>
    <el-button
      icon="el-icon-s-operation"
      :style="processBtnStyle"
      v-bind="btnOptions"
      @click="btnClick"
    >
      {{ btnText }}
      <el-pro-drawer
        v-model="showVisible"
        :title="title"
        :size="size"
        :drawer-options="drawerOptions"
      >
        <slot />
      </el-pro-drawer>
    </el-button>
  </fragment>
</template>

<script>
import { Fragment } from 'vue-fragment'
import ElProDrawer from 'vue-element-pro-components/packages/drawer'
export default {
  name: 'AdvancedSearchBtn',
  components: { Fragment, ElProDrawer },
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
    drawerOptions: {
      type: Object,
      default: () => {
        return {}
      }
    },
    title: {
      type: String,
      default: ''
    },
    btnStyle: {
      type: Object,
      default: () => {}
    },
    btnOptions: {
      type: Object,
      default: () => {}
    },
    btnText: {
      type: String,
      default: '高级查询'
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
    },
    processBtnStyle() {
      return {
        backgroundColor: '#f28b3c',
        color: 'white',
        borderColor: '#f28b3c',
        ...(this.btnStyle || {})
      }
    }
  },
  methods: {
    btnClick() {
      this.$emit('click')
      this.showVisible = true
    }
  }
}
</script>
