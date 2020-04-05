import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/auth/Login.vue'
import Dashboard from './views/Dashboard.vue'
import LoginSuccess from './views/LoginSuccess'
import Blog from './components/blog/Blog.vue'
import BlogItem from './components/blog/BlogItem.vue'
import News from './components/news/News.vue'
import NewsItem from './components/news/NewsItem.vue'
import NewsAndEvents from './components/newsAndevents/NewsAndEvents.vue'
import NewsAndEventsDetail from './components/newsAndevents/NewsAndEventsDetail.vue'
import InitialPage from './components/InitialPage'
import AppLayout from './components/Home/App_Layout'
import Product from './components/product/Products'
import ProductDescription from './components/product/Product_description'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: InitialPage,
      // children: [{
      //   path: '',
      //   component: InitialPage,
      // }],
    },
    {
      path: '/login',
      component: Login,
    }, {
      path: '/product',
      component: Product,
    },
    {
      path: '/login/success/:jwt',
      component: LoginSuccess,
    },
    {
      path: '/product_description',
      component: ProductDescription,
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
      path: '/news',
      // name: 'news',
      component: AppLayout,
      children: [{
        path: '',
        component: NewsAndEvents,
      }],
    },
    {
      path: '/blog/',
      // name: 'blog',
      component: AppLayout,
      children: [{
        path: '',
        component: NewsAndEventsDetail,
      }],
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/news',
      component: AppLayout,
      children: [{
        name: 'newsItem',
        path: '/newsItem/:post/comments/:comments_post/mode/:mode',
        component: NewsItem,
        props: true,
      }],
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/blog',
      component: AppLayout,
      children: [{
        name: 'blogItem',
        path: '/blogItem/:post/comments/:comments_post/mode/:mode',
        component: BlogItem,
        props: true,
      }],
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
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
