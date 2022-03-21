<template>
  <div class="custom-pagination" :style="customStyle">
    <el-pagination
      :current-page="pagination[page]"
      :page-sizes="pageSizes"
      :page-size="pagination[pageSize]"
      :total="total"
      :style="paginationStyle"
      v-bind="paginationProcessOptions"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>
export default {
  name: "CustomPagination",
  model: {
    prop: "pagination",
    event: "change",
  },
  props: {
    paginationOptions: {
      type: Object,
      default() {
        return {};
      },
    },
    customProps: {
      type: Object,
      default() {
        return {
          page: "page",
          pageSize: "pageSize",
        };
      },
    },
    customStyle: {
      type: Object,
      default: () => {},
    },
    paginationStyle: {
      type: Object,
      default: () => {},
    },
    pagination: {
      type: Object,
      required: true,
      default() {
        return {
          [this.customProps.page]: 1,
          [this.customProps.pageSize]: 10,
        };
      },
    },
    pageSizes: {
      type: Array,
      required: false,
      default: () => [10, 20, 30, 50, 100],
    },
    total: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    page() {
      return this.customProps.page;
    },
    pageSize() {
      return this.customProps.pageSize;
    },
    paginationProcessOptions() {
      return {
        layout: "total, sizes, prev, pager, next, jumper",
        background: true,
        ...(this.paginationOptions || {}),
      };
    },
  },
  methods: {
    handleSizeChange(pageSize) {
      this.$emit("change", {
        ...this.pagination,
        [this.customProps.pageSize]: pageSize,
      });
      this.refresh();
    },
    handleCurrentChange(page) {
      this.$emit("change", {
        ...this.pagination,
        [this.customProps.page]: page,
      });
      this.refresh();
    },
    refresh() {
      this.$nextTick(() => {
        this.$emit("onLoad");
      });
    },
  },
};
</script>

<style scoped>
.custom-pagination {
  padding: 10px;
  margin: 10px 0px;
  text-align: right;
}
</style>
