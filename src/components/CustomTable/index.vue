<template>
  <el-table ref="table" v-bind="tableSetting" v-loading="loading">
    <table-column v-for="column in metadata" :column="column" :key="column.key" />
    <el-table-column
      v-if="hasOperation && showOperation"
      v-bind="processOperationOptions"
    >
      <template slot-scope="scope">
        <slot :row="scope.row" name="operationColumn">
          <div class="operationContainer">
            <slot :row="scope.row" name="operationBefore" />
            <slot :row="scope.row" name="autoOperation">
              <el-button
                v-if="updateFunc"
                v-bind="updateOptions(scope.row)"
                size="small"
                type="primary"
                @click="updateFunc(scope.row)"
              >
                修改
              </el-button>
              <slot :row="scope.row" name="operationMiddle" />
              <el-button
                v-if="deleteFunc"
                v-bind="deleteOptions(scope.row)"
                size="small"
                type="danger"
                @click="handleDeleteFunc(scope.row)"
              >
                删除
              </el-button>
            </slot>
            <slot :row="scope.row" name="operationAfter" />
          </div>
        </slot>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { types } from "@/components/CustomForm/type";
import { filterObject } from "@/utils";
import clipboard from "@/directive/clipboard/index.js"; // use clipboard by v-directive
import { debounce } from "lodash-es";
import TableColumn from "./TableColumn.vue";

export default {
  name: "CustomTable",
  components: {
    TableColumn,
  },
  directives: {
    clipboard,
  },
  props: {
    data: {
      type: Array,
      default() {
        return [];
      },
    },
    loading: {
      type: Boolean,
      default: false,
    },
    columns: {
      type: Object,
      required: false,
    },
    updateOptions: {
      type: Function,
      required: false,
      default: () => {},
    },
    deleteOptions: {
      type: Function,
      required: false,
      default: () => {},
    },
    tableColumns: {
      type: Object,
      required: false,
    },
    tableOptions: {
      type: Object,
      required: false,
    },
    deleteFunc: {
      type: Function,
      required: false,
    },
    updateFunc: {
      type: Function,
      required: false,
    },
    operationOptions: {
      type: Object,
      required: false,
    },
    showOperation: {
      type: Boolean,
      required: false,
      default: true,
    },
    autoHeight: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  data() {
    return {
      tableHeight: "",
      debounceHeightListener: null,
    };
  },
  computed: {
    tableColumn() {
      if (this.tableColumns) {
        return this.tableColumns;
      } else if (this.columns) {
        return filterObject(this.columns, (column) => column.showInTable);
      }
      return {};
    },
    metadata() {
      return Object.keys(this.tableColumn).map((key) => {
        const item = this.tableColumn[key];
        const { label = key, type = types.input, tableColumnOption = {}, options } = item;
        return {
          ...item,
          key,
          label,
          type,
          tableColumnOption,
          options,
        };
      });
    },
    tableSetting() {
      const setting = {
        data: this.data,
        highlightCurrentRow: true,
        style: "width: 100%",
        ...(this.tableOptions || {}),
      };
      if (this.tableHeight) {
        setting.height = this.tableHeight;
      }
      return setting;
    },
    processOperationOptions() {
      return {
        fixed: "right",
        label: "操作",
        width: "150",
        align: "center",
        ...(this.operationOptions || {}),
      };
    },
    hasOperation() {
      return this.tableOptions
        ? this.tableOptions.hasOperation
        : false || this.deleteFunc || this.updateFunc;
    },
  },
  mounted() {
    if (this.autoHeight) {
      this.setTableHeight();
      this.setChangeHeightListener();
    }
  },
  beforeDestroy() {
    if (this.debounceHeightListener) {
      window.removeEventListener("resize", this.debounceHeightListener);
    }
  },
  methods: {
    getTagOptions(column, row) {
      let options = {};
      const { tagOptions } = column;
      if (typeof tagOptions === "string") {
        options.type = tagOptions;
      }
      if (typeof tagOptions === "object") {
        options = tagOptions;
      } else if (typeof tagOptions === "function") {
        options = tagOptions(row) || {};
      }
      return {
        ...options,
      };
    },
    clipboardSuccess() {
      this.$message({
        message: "复制成功",
        type: "success",
        duration: 1500,
      });
    },
    handleDeleteFunc(row) {
      this.$confirm("此操作将永久删除该行, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.deleteFunc && this.deleteFunc(row);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    setChangeHeightListener() {
      if (!this.debounceHeightListener) {
        this.debounceHeightListener = debounce(this.setTableHeight, 100);
      }
      window.addEventListener("resize", this.debounceHeightListener);
    },
    setTableHeight() {
      const searchDom = document.querySelector(".custom-search");
      const appMainDom = document.querySelector(".content-wrapper");
      if (searchDom && appMainDom) {
        const paginationDom = document.querySelector(".custom-pagination");
        const paginationDomHeight = paginationDom ? paginationDom.clientHeight : 0;
        this.tableHeight =
          appMainDom.offsetHeight -
          searchDom.clientHeight -
          paginationDomHeight -
          50 +
          "px";
      }
    },
    formatShow(column, row, scope) {
      const { showFormat } = column;
      if (showFormat && typeof showFormat === "function") {
        return showFormat(row[column.key], row, scope);
      }
      if ([types.select, types.checkBox, types.radio].includes(column.type)) {
        let options = [];
        if (Array.isArray(column.options)) {
          options = column.options;
        } else if (typeof column.options === "function") {
          options = column.options(row);
        }
        const option = options.find((item) => item.value == row[column.key]);
        return option ? option.label : "";
      }
      return row[column.key];
    },
  },
};
</script>

<style lang="scss"></style>
