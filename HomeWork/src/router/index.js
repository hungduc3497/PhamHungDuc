import Vue from 'vue'
import Router from 'vue-router'
import DashBoard from '@/components/DashBoard'
import LoginPage from '@/components/LoginPage'
import ProductPage from '@/components/ProductPage'
import ArticlesPage from '@/components/ArticlesPage'

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
      name: 'LoginPage',
      component: LoginPage,
      isShowLeftMenu: false,
      expand: false,
      menuName: 'Login'
    },
    {
      path: '/products',
      name: 'ProductPage',
      component: ProductPage,
      isShowLeftMenu: true,
      menuName: 'Products'
    },
    {
      path: '/articles',
      name: 'ArticlesPage',
      component: ArticlesPage,
      isShowLeftMenu: true,
      menuName: 'Articles'
    }
  ]
})
export default router
