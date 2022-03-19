<template>
  <div>
    <el-button @click="visible = true">测试 </el-button>
    <custom-dialog title="测试" v-model="visible">
      <custom-form
        ref="dataForm"
        :is-row="true"
        v-model="form"
        :columns="columns"
        :form-options="{}"
        @changeArea="changeArea"
      >
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
    this.columns = getMetaData();
  },
  methods: {
    changeArea(e) {
      console.log(e);
    },
  },
};
</script>

<style lang="scss" scoped></style>
