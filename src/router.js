import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: function () { 
        return import('./views/About.vue')
      }
    },
    {
      path: '/menu',
      name: 'menu',
      component: function () {
        return import('./views/Menu.vue')
      }
    },
    {
      path: '/signin',
      name: 'signin',
      component: function () {
        return import('./views/Signin.vue')
      }
    },
    {
      path: '/join',
      name: 'join',
      component: function () {
        return import('./views/Join.vue')
      }
    },
  ]
})
