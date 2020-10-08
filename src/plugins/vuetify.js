import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)


export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    themes: {
      light: {
        primary: '#8b0000',
        secondary: '#BCAAA4',
        accent: '#882434',
        error: '#e90d08',
        warning: '#ffeb3b',
        info: '#666666',
        success: 'rgba(5,1,3,0.77)',
      },
    },
  },
})

// primary: '#8b0000',
//   secondary: '#BCAAA4',
//   accent: '#880E4F',
//   error: '#E91E63',
//   warning: '#ffeb3b',
//   info: '#666666',
//   success: 'rgba(173, 20, 87, 0.77)',
