<template>
  <v-app>
    <v-content class="pa-0 ma-0 white_back">
      <v-container
        fluid
        class="pa-0 ma-0 white_back"
      >
        <my-navbar />
        <router-view />
        <my-form />
        <my-footer />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  import MyNavbar from '@/components/utils/Navbar'
  import MyFooter from '@/components/utils/Footer'
  import MyForm from '@/components/utils/Form'

  export default {
    components: {
      MyNavbar,
      MyFooter,
      MyForm,
    },
    data () {
      return {
      }
    },
  }
</script>

<style scoped>
.white_back {
  background-color: white !important;
}
</style>
