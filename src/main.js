import '@fortawesome/fontawesome-free/css/all.css' // Ensure you are using css-loader
import Vue from 'vue'
import vuetify from './plugins/vuetify'
import App from './App.vue'
import router from './router'
// import VueChartkick from 'vue-chartkick'
// import Chart from 'chart.js'
// import firebase from 'firebase'
import 'chartjs-plugin-datalabels'
import './registerServiceWorker'
import { store } from '@/store/store'
// import VueApollo from 'vue-apollo'
import FormAlert from './components/shared/FormAlert'

// Register Global Component
Vue.component('form-alert', FormAlert)

Vue.config.productionTip = false
// Vue.use(VueChartkick, { adapter: Chart })
// Vue.use(VueApollo)

// export const defaultClient = new ApolloClient({
//   uri: api.endpoints.graphgl,
//   // include auth token with requests made to backend
//   fetchOptions: {
//     credentials: 'include',
//   },
//   request: operation => {
//     // // if no token with key of 'token' in localStorage, add it
//     if (!localStorage.token) {
//       localStorage.setItem('token', '')
//       // this.$store.state.token
//     }
//
//     // operation adds the token to an authorization header, which is sent to backend
//     operation.setContext({
//       headers: {
//         authorization: store.getters.token ? `Bearer ${store.getters.token}` : '',
//         // authorization: localStorage.getItem('token') ? `Bearer ${localStorage.getItem('token')}` : '',
//       },
//     })
//   },
//   onError: ({ graphQLErrors, networkError }) => {
//     if (networkError) {
//       console.log('[networkError]', networkError)
//     }
//
//     if (graphQLErrors) {
//       for (let err of graphQLErrors) {
//         console.dir(err)
//       }
//     }
//   },
// })
//
// const apolloProvider = new VueApollo({ defaultClient })

// let app = ''
// const config = {
//   apiKey: 'AIzaSyB_99fjgD3OIfWBb72y4kZbDVhTuWV-ubY',
//   authDomain: 'anandaspa-authentication.firebaseapp.com',
//   databaseURL: 'https://anandaspa-authentication.firebaseio.com',
//   projectId: 'anandaspa-authentication',
//   storageBucket: 'anandaspa-authentication.appspot.com',
//   messagingSenderId: 'AIzaSyCxDr4ji6DRiF6AZ1h5jfDqFTPJQnGaYPY',
// }

new Vue({
  // provider: apolloProvider,
  store,
  router,
  vuetify,
  created () {
    // execute getCurrentUser query
    if (this.$store.getters.token) {
      this.$store.dispatch('verifyToken')
    }
  },
  render: h => h(App),
}).$mount('#app')

// firebase.initializeApp(config)
//
// firebase.auth().onAuthStateChanged(() => {
//   if (!app) {
//     /* eslint-disable no-new */
//     new Vue({
//       provider: apolloProvider.provide(),
//       store: store,
//       router,
//       vuetify,
//       render: h => h(App),
//     }).$mount('#app')
//   }
// })
