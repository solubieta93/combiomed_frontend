<template>
  <v-app>
    <v-content class="pa-0">
      <v-container
        fluid
        class="pa-0"
      >
        <my-navbar />
        <router-view />
        <my-footer />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  import MyNavbar from '../Navbar'
  import MyFooter from '../footer'

  export default {
    components: {
      MyNavbar,
      MyFooter,
    },
    data () {
      return {
      }
    },
  }
</script>

<style>
/*.my {
  padding: 0px 0px 0px;
}*/
</style>
