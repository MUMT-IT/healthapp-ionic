import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tabs from '../views/Tabs.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/Home'
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/tabs/Home'
      },
      {
        path: 'Home',
        component: () => import('@/views/Home.vue')
      },
      {
        path: 'Health',
        component: () => import('@/views/Health.vue')
      },
      {
        path: 'HealthAdd',
        component: () => import('@/views/HealthAdd.vue')
      },
      {
        path: 'Exercise',
        component: () => import('@/views/Exercise.vue')
      },
      {
        path: 'Food',
        component: () => import('@/views/Food.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
