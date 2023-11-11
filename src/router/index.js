import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component : ()=> import('../views/auth/Login.vue')
  },
  
  {
    path : '/createPage',
    name : 'createPage',
    component : ()=> import('../views/CreatePage.vue')
  },
  {
    path : '/allQuiz',
    name : 'allQuiz',
    component : ()=> import('../views/AllQuiz.vue')
  },
  {
    path : '/categoryFilter/:category_id',
    name : 'categoryFilter',
    component : ()=> import('../views/CategoryFilter.vue')
  },
  {
    path : '/setting',
    name : 'setting',
    component : ()=> import('../views/Setting.vue')
  },
  {
    path : '/detail/:quiz_id',
    name : 'detail',
    component : ()=> import('../views/play/Detail.vue')
  },
  {
    path : '/myLibrary',
    name  :'myLibrary',
    component : ()=> import('../views/library/MyLibrary.vue')
  },
  {
    path : '/:patchMatch(.*)*',
    name  :'notFound',
    component : ()=> import('../views/NotFound.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
