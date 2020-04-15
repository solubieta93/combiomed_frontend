import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login.vue'
import Dashboard from '@/views/Dashboard.vue'
import NewsAndEvents from '@/views/news/NewsAndEvents.vue'
import NewsAndEventsDetail from '@/views/news/NewsAndEventsDetail.vue'
import AutoServices from '@/views/services/AutoServices.vue'
import TechServices from '@/views/services/TechServices.vue'
import MecServices from '@/views/services/MecServices.vue'
import Products from '@/views/products/Products.vue'
import ProductDescription from '@/views/products/ProductDescription.vue'
import Home from '@/views/Home.vue'
import Services from '@/components/services/Services'
import Contacts from '@/views/Contacts'
import Us from '@/views/Us'
const AppLayout = () => import('@/components/layouts/App_Layout.vue')

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: AppLayout,
      children: [{
        path: '',
        component: Home,
      }],
    },
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/products',
      component: AppLayout,
      children: [
        {
          path: '',
          component: Products,
        },
        {
          path: ':productId',
          component: ProductDescription,
        },
      ],
    },
    {
      path: '/dashboard',
      // name: 'dashboard',
      component: AppLayout,
      children: [{
        path: '',
        component: Dashboard,
      }],
    },
    {
      path: '/services',
      component: AppLayout,
      children: [
        {
          path: '',
          component: Services,
        },
        {
          path: 'tech',
          component: TechServices,
        },
        {
          path: 'auto',
          component: AutoServices,
        },
        {
          path: 'mec',
          component: MecServices,
        },
      ],
    },
    {
      path: '/news',
      component: AppLayout,
      children: [
        {
          path: '',
          component: NewsAndEvents,
        },
        {
          path: ':postId',
          component: NewsAndEventsDetail,
        },
      ],
    },
    {
      path: '/contacts',
      component: AppLayout,
      children: [
        {
          path: '',
          component: Contacts,
        },
      ],
    },
    {
      path: '/us',
      component: AppLayout,
      children: [
        {
          path: '',
          component: Us,
        },
      ],
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
})

// router.beforeEach(async (to, from, next) => {
//   // const currentUser = firebase.auth().currentUser
//   // console.log(this.$store.getters.token)
//   const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
//   // let token = localStorage.getItem('token')
//   const validToken = await store.dispatch('verifyToken')
//   if (requiresAuth && !validToken.success) next('login')
//   else if (!requiresAuth && validToken.success) next('dashboard')
//   else next()
// })

export default router
