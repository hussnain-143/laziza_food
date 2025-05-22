// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

// Pages
import Dashboard from '@/components/Layout/admin/Dashboard.vue'
import Index from '@/components/Layout/admin/Index.vue'
import RegisterUser from '@/components/Layout/admin/RegisterUser.vue'
import NotFound from '@/components/Layout/admin/NotFound.vue'
// Layouts
import Layout from '@/components/Layout/admin/Layout.vue'

const routes = [
  {
    path: '/',
    name: 'AdminLogin',
    component: Index,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFoundPage',
    component: NotFound,
  },
  {
    path: '/admin',
    component: Layout,
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: Dashboard,
      },
      {
        path: 'register',
        name: 'RegisterUser',
        component: RegisterUser,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
