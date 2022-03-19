<template>
  <div>
    <custom-search v-model="queryForm" :columns="columns" @search="dataReload">
      <template #after>
        <el-button type="primary">新增</el-button>
        <el-button icon="el-icon-download" type="success">导出Excel</el-button>
      </template>
    </custom-search>
  </div>
</template>

<script>
import { getMetaData } from "@/views/test-form/meta-data";
export default {
  data() {
    return {
      queryForm: {},
      columns: {},
    };
  },
  created() {
    this.columns = getMetaData.call(this);
  },
  methods: {
    dataReload() {
      console.log(this.queryForm);
    },
  },
};
</script>

<style lang="scss" scoped></style>
