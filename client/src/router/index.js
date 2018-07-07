import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/Homepage'
import RegisterCoach from './../views/RegisterCoach'
import RegisterMember from './../views/RegisterMember'
import LoginMember from './../views/LoginMember'
import LoginCoach from './../views/LoginCoach'
import Profile from './../components/Profile'
import ForgotPassCoach from './../views/ForgotPassCoach'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/registerCoach',
      name: 'registerCoach',
      component: RegisterCoach
    },
    {
      path: '/loginCoach',
      name: 'loginCoach',
      component: LoginCoach
    },
    {
      path: '/forgotPassCoach',
      name: 'forgotPassCoach',
      component: ForgotPassCoach
    },
    {
      path: '/home',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/loginMember',
      name: 'loginMember',
      component: LoginMember
    },
    {
      path: '/registerMember',
      name: 'registerMember',
      component: RegisterMember
    }
  ]
})
