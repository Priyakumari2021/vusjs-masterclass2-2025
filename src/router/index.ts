import HomeView from '@/views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { h } from 'vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'name',
      component: HomeView
    },
    {
      path: '/projects',
      name: 'project',
      component: () => import ('@/views/ProjectsView.vue')
    },
    {
      path: '/projects/:id',
      name: 'single-project',
      component: () => import ('@/views/SingleProjectView.vue')
    },
    {
      path: '/:catchAll(.*)*',
      name: 'notFound',
      component: h('p', { style: 'color: red;' }, '404 not found')
    }
    
  ],
})

export default router
