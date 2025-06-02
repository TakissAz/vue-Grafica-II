import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/cosa-rotando',
      name: 'cosa.rotando',
      component: () => import('../views/CosaRotando.vue'),
    },
    {
      path: '/gato-rotando',
      name: 'gato.rotando',
      component: () => import('../views/Dodecaedro.vue'),
    },
  ],
})

export default router
