import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/artikel',
    name: 'artikel',
    component: () => import('../components/PostArtikel.vue')
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
    path: '/posts',
    name: 'posts',
    component: () => import('../components/posts/PostsIndex.vue')
  },
  {
    path: '/posts/create',
    name: 'create-post',
    component: () => import('../components/posts/CreatePost.vue')
  },
  {
    path: '/posts/:id',
    name: 'post',
    component: () => import('../components/posts/PostDetail.vue')
  },
  {
    path: '/posts/:id/edit',
    name: 'edit-post',
    component: () => import('../components/posts/EditPost.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
