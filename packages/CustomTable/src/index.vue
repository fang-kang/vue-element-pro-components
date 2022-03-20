<template>
  <el-table ref="table" v-bind="tableSetting" v-loading="loading" v-on="$listeners">
    <!-- 多选 -->
    <el-table-column
      v-if="selection"
      type="selection"
      align="center"
      :reserve-selection="reserveSelection"
      width="60"
    />
    <template v-for="column in metadata">
      <!-- 树型数据 -->
      <template v-if="column.children && column.children.length">
        <table-column :key="column.key" :child="column" />
      </template>

      <template v-else>
        <el-table-column
          :key="column.key"
          :align="column.align || 'center'"
          :label="column.tableLabel || column.label"
          v-bind="column.tableColumnOption"
        >
          <!-- 表头插槽 -->
          <template v-if="$slots[column.key + 'Header']" #header="scope">
            <slot :name="column.key + 'Header'" :scope="scope" />
          </template>
          <template slot-scope="scope">
            <slot :name="column.key" :scope="scope">
              <i
                v-if="column.copy"
                v-clipboard:copy="scope.row[column.key]"
                v-clipboard:success="clipboardSuccess"
                class="el-icon-copy-document"
                style="cursor: pointer; color: #409eff; margin-right: 5px"
              ></i>
              <span v-if="!column.isTag">{{ formatShow(column, scope.row, scope) }}</span>
              <el-tag v-if="column.isTag" v-bind="getTagOptions(column, scope.row)"
                >{{ formatShow(column, scope.row, scope) }}
              </el-tag>
            </slot>
          </template>
        </el-table-column>
      </template>
    </template>
    <el-table-column
      v-if="hasOperation && showOperation"
      v-bind="processOperationOptions"
    >
      <template slot-scope="scope">
        <slot :scope="scope" name="operationColumn">
          <div class="operationContainer">
            <slot :scope="scope" name="operationBefore" />
            <slot :scope="scope" name="autoOperation">
              <el-button
                v-if="updateFunc"
                size="small"
                type="primary"
                v-bind="updateOptions(scope.row, scope.$index)"
                @click="updateFunc(scope.row, scope.$index)"
              >
                {{ updateText }}
              </el-button>
              <slot :scope="scope" name="operationMiddle" />
              <el-button
                v-if="deleteFunc"
                size="small"
                type="danger"
                v-bind="deleteOptions(scope.row, scope.$index)"
                @click="handleDeleteFunc(scope.row, scope.$index)"
              >
                {{ deleteText }}
              </el-button>
            </slot>
            <slot :scope="scope" name="operationAfter" />
          </div>
        </slot>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { types } from "../../CustomForm/src/type";
import { filterObject } from "/src/utils";
import clipboard from "/src/directive/clipboard";
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
    updateText: {
      type: String,
      default: "修改",
    },
    deleteText: {
      type: String,
      default: "删除",
    },
    // 是否多选
    selection: {
      type: Boolean,
      default: false,
    },
    // 仅对 type=selection 的列有效，类型为 Boolean，为 true 则会在数据更新之后保留之前选中的数据（需指定 row-key）
    reserveSelection: {
      type: Boolean,
      default: false,
    },
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
      type: [Object, Array],
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
      type: [Object, Array],
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
      const { tableColumns, columns } = this;
      if (tableColumns) {
        return tableColumns;
      } else if (columns) {
        if (Array.isArray(columns)) {
          return columns.filter((column) => column.showInTable);
        } else {
          return filterObject(columns, (column) => column.showInTable);
        }
      }
      return {};
    },
    metadata() {
      const { tableColumn } = this;
      if (Array.isArray(tableColumn)) {
        return tableColumn;
      } else {
        return Object.keys(tableColumn).map((key) => {
          const item = tableColumn[key];
          const {
            label = key,
            type = types.input,
            tableColumnOption = {},
            options,
          } = item;
          return {
            ...item,
            key,
            label,
            type,
            tableColumnOption,
            options,
          };
        });
      }
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
    console.log(this.$slots, "s");
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
    handleDeleteFunc(row, index) {
      this.$confirm("此操作将永久删除该行, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.deleteFunc && this.deleteFunc(row, index);
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
      const appMainDom = document.querySelector("#content-wrapper");
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
        const option = options.find(
          (item) => String(item.value) == String(row[column.key])
        );
        return option ? option.name : "";
      }
      return row[column.key];
    },
  },
};
</script>

<style lang="scss"></style>
