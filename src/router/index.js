import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/reviews',
      name: 'reviews',
      component: () => import('../views/ReviewsView.vue')
    },
    {
      path: '/best-brokers-for-beginners',
      name: 'best-brokers-for-beginners',
      component: () => import('../views/BestBrokersForBeginners.vue')
    },
    {
      path: '/best-brokers',
      name: 'best-brokers',
      component: () => import('../views/BestBrokers.vue')
    },
    {
      path: '/brokers/exness',
      name: 'exness',
      component: () => import('../views/brokers/ExnessView.vue')
    },
    {
      path: '/404',
      name: '404',
      component: () => import('../views/404View.vue')
    }
  ]
})

export default router
