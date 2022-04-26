<template>
  <div>
    <el-button @click="visible = true">测试</el-button>
    <el-pro-advanced-search
      v-model="queryForm"
      title="高级查询"
      :visible.sync="visible"
      :columns="columns"
      @search="dataReload"
      @reset="visible = false"
    />
  </div>
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
