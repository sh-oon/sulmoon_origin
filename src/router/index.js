import {createWebHistory, createRouter} from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/main',
    component: () => import('@/view/Home.vue'),
    children: [{path: '/main',component: () => import('@/view/Home.vue')}]
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router
