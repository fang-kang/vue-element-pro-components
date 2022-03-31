<template>
  <el-card>
    <el-pro-search
      v-model="queryForm"
      :columns="columns"
      @search="dataReload"
    >
      <template #after>
        <el-button type="primary">
          新增
        </el-button>
      </template>
    </el-pro-search>
    <el-button @click="visible = true">
      测试高级查询
    </el-button>
    <el-pro-advanced-search
      v-model="queryForm"
      title="高级查询"
      :visible.sync="visible"
      :columns="columns"
      @search="dataReload"
      @reset="visible = false"
    />
  </el-card>
</template>

<script>
import { getMetaData } from '../test-form/meta-data'
export default {
  data() {
    return {
      queryForm: {},
      columns: {},
      visible: false
    }
  },
  created() {
    this.columns = getMetaData.call(this)
  },
  methods: {
    dataReload() {
      console.log(this.queryForm)
    }
  }
}
</script>
