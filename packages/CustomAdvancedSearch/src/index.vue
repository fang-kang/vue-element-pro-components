<template>
  <custom-drawer
    :title="title"
    placement="right"
    :drawer-width="drawerWidth"
    v-model="showVisible"
    :drawer-options="drawerOptions"
  >
    <custom-form
      ref="dataForm"
      :is-row="isRow"
      v-model="localQuery"
      :columns="searchColumn"
      :form-options="formProcessOptions"
    />
    <div class="footer" v-if="showFooter">
      <el-button size="small" icon="el-icon-refresh-right" @click="handleReset"
        >重置</el-button
      >
      <el-button icon="el-icon-search" type="primary" size="small" @click="handleSearch"
        >查询</el-button
      >
    </div>
    <slot name="footer" v-else></slot>
  </custom-drawer>
</template>

<script>
import CustomDrawer from "../../CustomDrawer";
import CustomForm from "../../CustomForm";
import { isEqual, cloneDeep } from "lodash-es";
import { filterObject } from "/src/utils";
export default {
  name: "CustomAdvancedSearch",
  components: { CustomDrawer, CustomForm },
  model: {
    prop: "query",
    event: "change",
  },
  props: {
    isRow: {
      type: Boolean,
      default: false,
    },
    formOptions: {
      type: Object,
      default: () => {},
    },
    query: {
      type: Object,
      required: true,
      default() {
        return {};
      },
    },
    columns: {
      type: Object,
      required: false,
    },
    searchColumns: {
      type: Object,
      required: false,
    },
    showFooter: {
      type: Boolean,
      default: true,
    },
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
        return {};
      },
    },
    title: {
      type: String,
      default: "",
    },
  },
  computed: {
    searchColumn() {
      if (this.searchColumns) {
        return this.searchColumns;
      } else if (this.columns) {
        return filterObject(this.columns, (column) => column.showInSearch);
      }
      return {};
    },
    formProcessOptions() {
      const { ...rest } = this.formOptions || {};
      return {
        inline: false,
        labelWidth: "80px",
        ...(rest || {}),
      };
    },
    showVisible: {
      get() {
        return this.visible;
      },
      set(val) {
        this.$emit("update:visible", val);
      },
    },
  },
  watch: {
    query: {
      deep: true,
      immediate: true,
      handler: function () {
        this.updateQuery();
      },
    },
    localQuery: {
      deep: true,
      handler: function () {
        this.$emit("change", this.localQuery);
      },
    },
  },
  data() {
    return {
      localQuery: {},
    };
  },
  methods: {
    handleSearch() {
      this.search();
      this.showVisible = false;
    },
    search() {
      this.$emit("search");
    },
    updateQuery() {
      if (!isEqual(this.query, this.localQuery)) {
        this.localQuery = cloneDeep(this.query);
      }
    },
    handleReset() {
      this.$refs.dataForm.resetFields();
      this.$emit("reset");
    },
  },
};
</script>

<style lang="scss" scoped>
.footer {
  text-align: center;
  padding-top: 10px;
}
</style>
