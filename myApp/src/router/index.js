import { createRouter, createWebHistory } from '@ionic/vue-router';

import MenuPage from '../pages/MenuPage.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/',
    component: MenuPage,
    children: [
      {
        path: '',
        redirect: '/home'
      },
      {
        path: 'home',
        component: () => import('../pages/HomePage.vue')
      },
      {
        path: 'profile',
        component: () => import('../pages/ProfilePage.vue')
      },
      {
        path: 'exercise',
        component: () => import('../pages/ExercisePage.vue')
      },
      {
        path: 'exercise/:id',
        component: () => import('../pages/ExerciseLvPage.vue')
      },
      {
        path: 'exercise/detail',
        component: () => import('../pages/ExerciseDetailPage.vue')
      },
      {
        path: 'profile/edit',
        component: () => import('../pages/ProfileEditPage.vue')
      },
      {
        path: 'health/physical',
        component: () => import('../pages/HealthPhysicalPage.vue')
      },
      {
        path: 'health/Result',
        component: () => import('../pages/HealthResultPage.vue')
      },
      {
        path: 'health/add',
        component: () => import('../pages/HealthAddPage.vue')
      },
      {
        path: 'health/graph',
        component: () => import('../pages/HealthGrpahPage.vue')
      },
      {
        path: 'health/graph/glu',
        component: () => import('../Health/HealthGraphGLU.vue')
      },
      {
        path: 'health/graph/bmi',
        component: () => import('../Health/HealthGraphBMI.vue')
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
