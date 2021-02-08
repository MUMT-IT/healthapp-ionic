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
      {
        path: 'health/graph/buncre',
        component: () => import('../Health/HealthGraphBUN_CRE.vue')
      },
      {
        path: 'health/graph/ua',
        component: () => import('../Health/HealthGraphUA.vue')
      },
      {
        path: 'health/graph/chotg',
        component: () => import('../Health/HealthGraphCHO_TG.vue')
      },
      {
        path: 'health/graph/astaltalk',
        component: () => import('../Health/HealthGraphAstAltAlk.vue')
      },
      {
        path: 'booking/page',
        component: () => import('../pages/BookingPage.vue')
      },
      {
        path: 'booking/cms',
        component: () => import('../Booking/BookingCMS.vue')
      },
      {
        path: 'booking/booklist',
        component: () => import('../Booking/BookingList.vue')
      },
      {
        path: 'booking/cmsdetail',
        component: () => import('../Booking/CMSDetail.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
