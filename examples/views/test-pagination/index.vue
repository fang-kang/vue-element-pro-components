<template>
  <div>
    <el-pro-pagination
      v-model="queryForm"
      :custom-props="customProps"
      :total="total"
      @onLoad="findPage"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      customProps: {
        page: 'pageNo',
        pageSize: 'limit'
      },
      total: 100,
      queryForm: {
        pageNo: 1, // 页数
        limit: 10 // 每页行数
      }
    }
  },
  methods: {
    findPage() {
      console.log(this.queryForm)
    }
  }
}
</script>
