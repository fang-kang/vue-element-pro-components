<template>
  <div>
    <el-pro-table
      :data="tableData"
      :loading="listLoading"
      selection
      :columns="columns"
      :operation-options="{ width: 200 }"
      :update-func="handleEdit"
      :delete-func="handleDelete"
      :table-options="{ rowStyle: { height: '50px' }, hasOperation: true }"
      @selection-change="handleSelectionChange"
    >
      <div slot="inputHeader">
        <el-button>测试</el-button>
      </div>
    </el-pro-table>
  </div>
</template>

<script>
import { getMetaData } from "./meta-data";
export default {
  data() {
    return {
      tableData: [
        {
          input: "1",
          select: 1,
          radio: 1,
          checxbox: [1],
          date: "2021-11-10",
          num: 1,
          time: "12:23:00",
          slider: 1,
          rate: 1,
        },
        {
          input: "1",
          select: 1,
          radio: 1,
          checxbox: [1],
          date: "2021-11-10",
          num: 1,
          time: "12:23:00",
          slider: 1,
          rate: 1,
        },
        {
          input: "1",
          select: 1,
          radio: 1,
          checxbox: [1],
          date: "2021-11-10",
          num: 1,
          time: "12:23:00",
          slider: 1,
          rate: 1,
        },
      ],
      listLoading: false,
      columns: [],
      multipleSelection: [],
    };
  },
  created() {
    this.columns = getMetaData.call(this);
  },
  methods: {
    click() {
      console.log(111);
    },
    handleEdit(row) {
      console.log(row);
    },
    handleDelete(row) {
      console.log(row);
    },
    handleSelectionChange(val) {
      console.log(val);
      this.multipleSelection = val;
    },
  },
};
</script>

<style lang="scss" scoped></style>
