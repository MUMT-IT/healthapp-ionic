import { createRouter, createWebHistory } from '@ionic/vue-router';

import HomePage from '../pages/HomePage.vue';
import Profile from '../pages/ProfilePage.vue';
import Exercise from '../pages/ExercisePage.vue';

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: HomePage
  },
  {
    path: '/profile',
    component:  Profile
  },
  {
    path: '/exercise',
    component: Exercise
  },
  {
    path: '/exercise/:id',
    component: () => import('../pages/ExerciseLvPage.vue')
  },
  {
    path: '/exercise/detail',
    component: () => import('../pages/ExerciseDetailPage.vue')
  },
  {
    path: '/profile/edit',
    component: () => import('../pages/ProfileEditPage.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
