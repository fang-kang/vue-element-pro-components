<template>
  <el-card>
    <custom-search
      v-model="queryForm"
      :is-collapse="true"
      :show-num="2"
      no-search
      :columns="columns"
      @search="dataReload"
    >
      <template #after>
        <el-button type="primary" size="small">新增</el-button>
        <el-button icon="el-icon-download" size="small" type="success"
          >导出Excel</el-button
        >
      </template>
    </custom-search>
  </el-card>
</template>

<script>
import { getMetaData } from "../test-form/meta-data";
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
