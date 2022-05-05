<template>
  <div>
    <el-button @click="visible = true">测试</el-button>
    <el-pro-dialog v-model="visible" title="测试">
      <el-pro-form
        ref="dataForm"
        v-model="form"
        :is-row="true"
        :table-dialog-options="{ width: '60%' }"
        :columns="columns"
        :form-options="{ labelWidth: '140px' }"
        @check-change="handleCheckChange"
      >
        <template slot="inputAppend" slot-scope="{form}">
          <el-button @click="click(form)">测试</el-button>
        </template>
      </el-pro-form>
    </el-pro-dialog>
  </div>
</template>

<script>
import { getMetaData } from './meta-data'
export default {
  data() {
    return {
      form: {},
      visible: false,
      columns: {}
    }
  },
  created() {
    this.columns = getMetaData.call(this)
  },
  methods: {
    click(form) {
      console.log(form)
    },
    handleCheckChange(data, checked, indeterminate) {
      console.log(data, checked, indeterminate)
    }
  }
}
</script>
