import {createWebHistory, createRouter} from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/main',
    component: () => import('@/view/Home.vue'),
    children: [{path: '/main',component: () => import('@/view/Home.vue')}]
  },

  {
    path: '/agree',
    name: 'agree',
    redirect: '/agree',
    component: () => import('@/view/Agree.vue'),
    // children: [{path: '/main',component: () => import('@/view/Agree.vue')}]
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router
