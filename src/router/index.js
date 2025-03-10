import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import KontaktView from '../views/KontaktView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/kontakt', name: 'kontakt', component: KontaktView },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/überuns',
      name: 'über uns',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ÜberUnsView.vue'),
    },
    {
      path: '/aktuelles',
      name: 'aktuelles',

      component: () => import('../views/AktuellesView.vue'),
    },
    {
      path: '/verein',
      name: 'verein',

      component: () => import('../views/VereinView.vue'),
    },
    {
      path: '/bilder',
      name: 'bilder',

      component: () => import('../views/BilderView.vue'),
    },
    {
      path: '/kontakt',
      name: 'kontakt',

      component: () => import('../views/KontaktView.vue'),
    },
    {
      path: '/impressum',
      name: 'impressum',

      component: () => import('../views/ImpressumView.vue'),
    },
  ],
})

export default router
