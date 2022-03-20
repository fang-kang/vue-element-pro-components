<template>
  <fragment>
    <el-button
      icon="el-icon-s-operation"
      size="small"
      :style="btnStyle"
      v-bind="btnOptions"
      @click="btnClick"
    >
      {{ btnText }}
      <custom-drawer
        :title="title"
        :drawer-width="drawerWidth"
        v-model="showVisible"
        :drawer-options="drawerOptions"
      >
        <slot></slot>
      </custom-drawer>
    </el-button>
  </fragment>
</template>

<script>
import { Fragment } from "vue-fragment";
import CustomDrawer from "../../CustomDrawer";
export default {
  components: { Fragment, CustomDrawer },
  model: {
    prop: "visible",
    event: "update:visible",
  },
  props: {
    drawerWidth: {
      type: Number,
      default: 400,
    },
    visible: {
      type: Boolean,
      default: false,
    },
    drawerOptions: {
      type: Object,
      default: () => {
        return {
          placement: "right",
        };
      },
    },
    title: {
      type: String,
      default: "",
    },
    btnStyle: {
      type: Object,
      default: () => {
        return {
          backgroundColor: "#f28b3c",
          color: "white",
          borderColor: "#f28b3c",
        };
      },
    },
    btnOptions: {
      type: Object,
      default: () => {},
    },
    btnText: {
      type: String,
      default: "高级查询",
    },
  },
  computed: {
    showVisible: {
      get() {
        return this.visible;
      },
      set(val) {
        this.$emit("update:visible", val);
      },
    },
  },
  data() {
    return {};
  },
  methods: {
    btnClick() {
      this.$emit("click");
      this.showVisible = true;
    },
  },
};
</script>
