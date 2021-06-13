import Vue from 'vue'
import Router from 'vue-router'
import DashBoard from '@/components/DashBoard'
import Login from '@/components/Login'
import Product from '@/components/Product'
import Articles from '@/components/Articles'

Vue.use(Router)
let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: DashBoard,
      isShowLeftMenu: true,
      menuName: 'Dashboard'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      isShowLeftMenu: false,
      expand: false,
      menuName: 'Login'
    },
    {
      path: '/products',
      name: 'Products',
      component: Product,
      isShowLeftMenu: true,
      menuName: 'Products'
    },
    {
      path: '/articles',
      name: 'Articles',
      component: Articles,
      isShowLeftMenu: true,
      menuName: 'Articles'
    }
  ]
})
export default router
