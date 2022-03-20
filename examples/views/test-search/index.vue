<template>
  <el-card>
    <custom-search
      v-model="queryForm"
      :is-collapse="true"
      :show-num="2"
      :columns="columns"
      @search="dataReload"
    >
      <template #after>
        <el-button type="primary" size="small">新增</el-button>
      </template>
    </custom-search>
    <el-button @click="visible = true">测试高级查询</el-button>
    <custom-advanced-search
      title="高级查询"
      :visible.sync="visible"
      :columns="columns"
      v-model="queryForm"
      @search="dataReload"
    />
  </el-card>
</template>

<script>
import { getMetaData } from "../test-form/meta-data";
export default {
  data() {
    return {
      queryForm: {},
      columns: {},
      visible: false,
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
