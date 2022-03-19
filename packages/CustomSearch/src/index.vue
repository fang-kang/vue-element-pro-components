<template>
  <div class="custom-search" :style="customStyle">
    <slot name="col-before" />
    <custom-form
      ref="dataForm"
      :is-row="false"
      v-model="localQuery"
      :columns="searchColumn"
      :form-options="{
        inline: true,
        labelWidth: '',
      }"
    >
      <template #columnAfter>
        <el-form-item>
          <slot name="before" />
          <el-button
            v-if="!noSearch"
            icon="el-icon-search"
            type="primary"
            size="small"
            :loading="showLoading"
            v-bind="searchBtnProps"
            @click="search"
            >{{ searchBtnText }}</el-button
          >
          <el-button
            v-if="!noSearch && showReset"
            icon="el-icon-refresh-right"
            type="default"
            size="small"
            v-bind="resetBtnProps"
            @click="handleReset"
            >{{ resetBtnText }}</el-button
          >
          <slot name="after" />
        </el-form-item>
      </template>
    </custom-form>

    <slot name="col-after" />
  </div>
</template>

<script>
import { filterObject } from "/src/utils";
import { types } from "../../CustomForm/src/type";
import { isEqual, cloneDeep } from "lodash";
import CustomForm from "../../CustomForm";

export default {
  name: "CustomSearch",
  components: { CustomForm },
  model: {
    prop: "query",
    event: "change",
  },
  props: {
    showReset: {
      type: Boolean,
      default: false,
    },
    searchBtnText: {
      type: String,
      default: "查询",
    },
    searchBtnProps: {
      type: Object,
      required: false,
      default() {
        return {};
      },
    },
    resetBtnText: {
      type: String,
      default: "重置",
    },
    resetBtnProps: {
      type: Object,
      required: false,
      default() {
        return {};
      },
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
    buttonsOptions: {
      type: Object,
      required: false,
    },
    noSearch: {
      type: Boolean,
      default: false,
    },
    customStyle: {
      type: Object,
      default() {
        return {};
      },
    },
    loading: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      localQuery: {},
    };
  },
  computed: {
    showLoading: {
      get() {
        return this.loading;
      },
      set(val) {
        this.$emit("update:loading", val);
      },
    },
    cmpTypes() {
      return types;
    },
    searchColumn() {
      if (this.searchColumns) {
        return this.searchColumns;
      } else if (this.columns) {
        return filterObject(this.columns, (column) => column.showInSearch);
      }
      return {};
    },
    metadata() {
      return Object.keys(this.searchColumn).map((key) => {
        const item = this.searchColumn[key];
        const {
          label = key,
          type = this.cmpTypes.input,
          options,
          searchColOptions = {},
        } = item;
        return {
          key,
          label,
          type,
          options,
          ...item,
          searchColOptions: {
            xs: 24,
            sm: 12,
            md: 6,
            lg: 6,
            xl: 4,
            ...searchColOptions,
          },
        };
      });
    },
    buttonsSetting() {
      return {
        xs: 24,
        sm: 24,
        md: 6,
        lg: 6,
        xl: 6,
        xxl: 4,
        ...(this.buttonsOptions || {}),
      };
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
  methods: {
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
    },
  },
};
</script>

<style lang="scss">
.custom-search {
  display: flex;
  padding: 10px;
  margin: 10px 0px;

  .el-form-item {
    margin: 0 15px 10px 0;

    .el-input__inner,
    .el-date-editor.el-input,
    .el-date-editor.el-input__inner {
      width: 190px;
    }
  }
  .btn-options {
    margin: 0 0 0 20px;
  }
}
</style>
