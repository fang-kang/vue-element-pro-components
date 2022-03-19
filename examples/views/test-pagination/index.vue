<template>
  <div>
    <custom-pagination v-model="queryForm" :total="total" @onLoad="findPage" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      customProps: {
        page: "pageNo",
        pageSize: "limit",
      },
      total: 100,
      queryForm: {
        // pageNo: 1, //页数
        // limit: 10, //	每页行数
        activityArea: "", //被调查人姓名
        arrivalDepartureTime: "", //开始时间
        leaveTime: "", //离开时间
        leaveChoice: [], // 离开的多选
        arrivalChoice: [], // 到达的多选
        defined: "", // 类型 0 疫点轨迹  1 交通轨迹
      },
    };
  },
  methods: {
    findPage() {
      console.log(this.queryForm);
    },
  },
};
</script>

<style scoped></style>
