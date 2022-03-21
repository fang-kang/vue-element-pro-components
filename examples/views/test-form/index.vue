<template>
  <div>
    <el-button @click="visible = true">测试 </el-button>
    <custom-dialog title="测试" v-model="visible">
      <custom-form
        ref="dataForm"
        :is-row="true"
        v-model="form"
        :table-dialog-options="{ width: '60%' }"
        :columns="columns"
        :form-options="{ labelWidth: '100px' }"
        @changeArea="changeArea"
      >
        <template #inputAppend="{ form }">
          <el-button @click="click(form)">测试</el-button>
        </template>
      </custom-form>
    </custom-dialog>
  </div>
</template>

<script>
import { getMetaData } from "./meta-data";
export default {
  data() {
    return {
      form: {},
      visible: false,
      columns: {},
    };
  },
  created() {
    this.columns = getMetaData.call(this);
  },
  methods: {
    click(form) {
      console.log(form);
    },
    changeArea(e) {
      console.log(e);
    },
  },
};
</script>

<style lang="scss" scoped></style>
