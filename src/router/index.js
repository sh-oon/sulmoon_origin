import {createWebHistory, createRouter} from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/main',
    component: () => import('@/App.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router
