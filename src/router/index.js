import { createRouter, createWebHistory } from "vue-router"
const routes = [
  {
    path: '/',
    name: "hoem",
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../pages/login.vue')
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('../pages/search/index.vue')
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
