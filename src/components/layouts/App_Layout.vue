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
