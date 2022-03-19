<template>
  <div>
    <custom-table
      :data="tableData"
      :loading="listLoading"
      :columns="columns"
      :operation-options="{ width: 200 }"
      :update-func="handleEdit"
      :delete-func="handleDelete"
      :table-options="{ rowStyle: { height: '50px' }, hasOperation: true }"
    ></custom-table>
  </div>
</template>

<script>
import { getMetaData } from "@/views/test-form/meta-data";
export default {
  data() {
    return {
      tableData: [
        {
          input: "1",
        },
      ],
      listLoading: false,
      columns: {},
    };
  },
  created() {
    this.columns = getMetaData.call(this);
  },
  methods: {
    handleEdit(row) {
      console.log(row);
    },
    handleDelete(row) {
      console.log(row);
    },
  },
};
</script>

<style lang="scss" scoped></style>
