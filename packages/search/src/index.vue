<template>
  <div class="el-pro-search" :style="customStyle">
    <slot name="col-before" />
    <el-pro-form
      ref="dataForm"
      :is-row="false"
      :isCollapse="isCollapse"
      :showNum="showNum"
      :show-all="showAll"
      v-model="localQuery"
      :columns="searchColumn"
      :form-options="{
        inline: true,
        labelWidth: '',
      }"
    >
      <template #columnAfter>
        <el-form-item v-if="$slots.before">
          <slot name="before" />
        </el-form-item>
        <el-form-item v-if="!noSearch">
          <el-button
            icon="el-icon-search"
            type="primary"
            size="small"
            :loading="showLoading"
            v-bind="searchBtnProps"
            @click="search"
            >{{ searchBtnText }}</el-button
          >
        </el-form-item>
        <el-form-item v-if="$slots.middle">
          <slot name="middle" />
        </el-form-item>
        <el-form-item v-if="isShowAdvancedBtn">
          <advanced-search-btn
            :drawer-width="450"
            title="高级查询"
            v-model="showAdvancedBtn"
          >
            <el-pro-form
              ref="dataForm"
              :is-row="false"
              v-model="localQuery"
              :columns="searchColumn"
              :form-options="{
                inline: false,
                labelWidth: '80px',
              }"
            />
            <template>
              <div style="height: 40px; width: 100%"></div>
              <div class="footer">
                <el-button size="small" icon="el-icon-refresh-right" @click="handleReset"
                  >重置</el-button
                >
                <el-button
                  icon="el-icon-search"
                  type="primary"
                  size="small"
                  @click="handleSearch"
                  >查询</el-button
                >
              </div>
            </template>
          </advanced-search-btn>
        </el-form-item>
        <el-form-item v-if="!noSearch && showReset">
          <el-button
            icon="el-icon-refresh-right"
            type="default"
            size="small"
            v-bind="resetBtnProps"
            @click="handleReset"
            >{{ resetBtnText }}</el-button
          >
        </el-form-item>
        <el-form-item v-if="$slots.after">
          <slot name="after" />
        </el-form-item>
        <el-form-item v-if="isCollapse">
          <el-button type="text" @click="showAll = !showAll">
            {{ word }}
            <i :class="showAll ? 'el-icon-arrow-up ' : 'el-icon-arrow-down'"></i>
          </el-button>
        </el-form-item>
      </template>
    </el-pro-form>

    <slot name="col-after" />
  </div>
</template>

<script>
import { filterObject } from "/src/utils";
import { types } from "/packages/form/src/type";
import { isEqual, cloneDeep } from "lodash-es";
import ElProForm from "/packages/form";
import AdvancedSearchBtn from "./AdvancedSearchBtn.vue";

export default {
  name: "ElProSearch",
  components: { ElProForm, AdvancedSearchBtn },
  model: {
    prop: "query",
    event: "change",
  },
  props: {
    isCollapse: {
      type: Boolean,
      required: false,
      default: true,
    },
    isShowAdvancedBtn: {
      type: Boolean,
      required: false,
      default: true,
    },
    showNum: {
      type: [Number, String],
      default: 2,
    },
    showReset: {
      type: Boolean,
      default: true,
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
      showAdvancedBtn: false,
      localQuery: {},
      showAll: true, //是否展开全部
    };
  },
  computed: {
    word() {
      const { showAll } = this;
      return showAll ? "收起" : "展开";
    },
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
  mounted() {},
  methods: {
    handleSearch() {
      this.search();
      this.showAdvancedBtn = false;
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

<style lang="scss">
.el-pro-search {
  display: flex;
  padding: 10px;
  margin: 10px 0px;
  overflow: hidden;

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
<style lang="scss" scoped>
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  border-top: 1px solid #e8e8e8;
  padding: 15px 15px 0 15px;
  text-align: center;
  left: 0;
  background: #fff;
  border-radius: 0 0 4px 4px;
}
</style>
