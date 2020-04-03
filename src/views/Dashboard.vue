<template>
  <div class="dashboard">
    <v-content
      :class="{'ma-0 pa-0': $vuetify.breakpoint.smAndDown, 'mx-5 pa-0': $vuetify.breakpoint.mdAndUp}"
    >
      <v-row align="center">
        <div
          class="grey--text font-weight-thin my-5"
          :class="{'display-2 text-xs-center': $vuetify.breakpoint.smAndDown, 'display-3 text-xs-left': $vuetify.breakpoint.mdAndUp}"
        >
          <!-- PRODUCTS -->
        </div>
        <v-spacer />
      </v-row>
      <products />
    </v-content>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Products from '@/components/product/Products'
  import Loading from 'vue-loading-overlay'
  // Import stylesheet
  import 'vue-loading-overlay/dist/vue-loading.css'
  // Init plugin
  Vue.use(Loading)

  export default {
    components: {
      Products,
    },
    data () {
      return {
        baseUrl: process.env.BASE_URL,
        fullPage: true,
      }
    },
    // mounted () {
    //   this.setLayout('app-layout')
    // },
    // methods: {
    //   setLayout (layout) {
    //     this.$store.commit('SET_LAYOUT', layout)
    //   },
    // },
  }
</script>

<style scoped>
.chevron {
  position: absolute;
  top: 0%;
  left: 0%;
  right: 0%;
  bottom: 0%;
  text-align: center;
  height: 150px;
}
.chevron:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 51%;
  background: red;
  transform: skew(0deg, 6deg);
}
.chevron:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 50%;
  background: red;
  transform: skew(0deg, -6deg);
}
</style>
