<template>
  <el-table-column
    :key="column.key"
    :align="column.align || 'center'"
    :label="column.tableLabel || column.label"
    v-bind="column.tableColumnOption"
  >
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

<script>
import { types } from "@/components/CustomForm/type";
export default {
  name: "TableColumn",
  props: {
    column: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    clipboardSuccess() {
      this.$message({
        message: "复制成功",
        type: "success",
        duration: 1500,
      });
    },
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

<style lang="scss" scoped></style>
