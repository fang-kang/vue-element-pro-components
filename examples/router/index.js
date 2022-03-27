import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'TestDialog',
    component: () => import('../views/test-dialog')
  },
  {
    path: '/test-form',
    name: 'TestForm',
    component: () => import('../views/test-form')
  },
  {
    path: '/test-pagination',
    name: 'TestPagination',
    component: () => import('../views/test-pagination')
  },
  {
    path: '/test-advance-search',
    name: 'TestAdvanceSearch',
    component: () => import('../views/test-advance-search')
  },
  {
    path: '/test-search',
    name: 'TestSearch',
    component: () => import('../views/test-search')
  },
  {
    path: '/test-table',
    name: 'TestTable',
    component: () => import('../views/test-table')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
