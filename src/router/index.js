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
    path: '/register',
    name: 'register',
    component : ()=> import('../views/auth/Register.vue')
  },
  {
    path: '/forgotPassword',
    name: 'forgotPassword',
    component : ()=> import('../views/auth/ForgotPassword.vue')
  },
  
  {
    path : '/createPage',
    name : 'createPage',
    component : ()=> import('../views/quiz/CreatePage.vue')
  },
  {
    path : '/editPage/:quiz_id',
    name : 'editPage',
    component : ()=> import('../views/quiz/EditPage.vue')
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
    path : '/playQuiz/:quiz_id',
    name : 'playQuiz',
    component : ()=> import('../views/play/PlayQuiz.vue')
  },
  {
    path : '/myLibrary',
    name  :'myLibrary',
    component : ()=> import('../views/library/MyLibrary.vue')
  },
  {
    path : '/profile',
    name  :'profile',
    component : ()=> import('../views/profile/Profile.vue')
  },
  {
    path : '/:patchMatch(.*)*',
    name  :'notFound',
    component : ()=> import('../views/NotFound.vue')
  },
  { 
    path: '/socialite-callback/:userId',
    component: ()=> import('../views/SocialiteCallback.vue')
  },
  {
    path : '/joinRoom',
    name : 'joinRoom',
    component : ()=> import('../views/multiplayer/JoinRoom.vue')
  },
  {
    path : '/waitingRoom/:room_code',
    name : 'waitingRoom',
    component : ()=> import('../views/multiplayer/WaitingRoom.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
