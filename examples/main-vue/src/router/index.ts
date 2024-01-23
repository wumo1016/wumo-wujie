import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/layout/index.vue'

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        component: () => import('@/views/home/index.vue')
      },
      {
        path: '/test1',
        component: () => import('@/views/test1/index.vue')
      },
      {
        path: '/test2',
        component: () => import('@/views/test2/index.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
