<template>
  <v-app>
    <v-content class="pa-0 ma-0">
      <v-container
        fluid
        class="pa-0 ma-0"
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
  import MyNavbar from '../Navbar'
  import MyFooter from '../footer'
  import MyForm from '../Form'

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
