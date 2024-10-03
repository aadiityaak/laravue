import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
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
    path: '/register',
    name: 'register',
    component: () => import('../components/RegisterForm.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/LoginForm.vue')
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('../components/BlogView.vue')
  },
  {
    path: '/posts/:id',
    name: 'post', // Nama ini untuk tampilan postingan tunggal
    component: () => import('../components/PostView.vue')
  },
  {
    path: '/manage-posts',
    name: 'manage-posts', // Nama yang unik untuk manage posts
    component: () => import('../components/ManagePosts.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
