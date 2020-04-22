import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login.vue'

import NewsAndEvents from '@/views/news/NewsAndEvents.vue'
import NewsAndEventsDetail from '@/views/news/NewsAndEventsDetail.vue'
import NewsAndEventsEdition from '@/views/news/NewsAndEventsEdition.vue'

import Services from '@/components/services/Services'
import AutoServices from '@/views/services/AutoServices.vue'
import TechServices from '@/views/services/TechServices.vue'
import MecServices from '@/views/services/MecServices.vue'

import Products from '@/views/products/Products.vue'
import ProductDescription from '@/views/products/ProductDescription.vue'
import ProductEdition from '@/views/products/ProductEdition'
import ProductLineEdit from '@/components/product/ProductLineEdit'

import Home from '@/views/Home.vue'

import Contacts from '@/views/Contacts'
import Us from '@/views/Us'

import { store } from '../store/store'
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
      path: '/',
      component: AppLayout,
      children: [{
        path: '/login',
        component: Login,
      }],
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
          path: 'new',
          component: ProductEdition,
          props: {
            modeEdition: false,
          },
          meta: {
            requiresAuth: true,
          },
        },
        {
          path: 'editLine',
          component: ProductLineEdit,
        },
        {
          path: ':productId',
          component: ProductDescription,
        },
        {
          path: ':productId/edit',
          component: ProductEdition,
          meta: {
            requiresAuth: true,
          },
        },
        
      ],
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
          path: 'new',
          component: NewsAndEventsEdition,
          props: {
            modeEdition: false,
          },
          meta: {
            requiresAuth: true,
          },
        },
        {
          path: ':postId',
          component: NewsAndEventsDetail,
        },
        {
          path: ':postId/edit',
          component: NewsAndEventsEdition,
          meta: {
            requiresAuth: true,
          },
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

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if (requiresAuth) {
    const validToken = await store.dispatch('verifyToken')
    if (!validToken.success) next('')
    else next()
  } else next()
})

export default router
