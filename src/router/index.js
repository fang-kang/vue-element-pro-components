import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "TestDialog",
    component: () => import("@/views/test-dialog/index.vue"),
  },
  {
    path: "/test-form",
    name: "TestForm",
    component: () => import("@/views/test-form/index.vue"),
  },
  {
    path: "/test-pagination",
    name: "TestPagination",
    component: () => import("@/views/test-pagination/index.vue"),
  },
  {
    path: "/test-search",
    name: "TestSearch",
    component: () => import("@/views/test-search/index.vue"),
  },
  {
    path: "/test-table",
    name: "TestTable",
    component: () => import("@/views/test-table/index.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
