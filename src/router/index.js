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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
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
      path: '/404',
      name: '404',
      component: () => import('../views/404View.vue')
    }
  ]
})

export default router
