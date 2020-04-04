<template>
  <v-app-bar
    app
    hide-off-scroll
    tabs
    class="semi-transparent"
  >
    <v-toolbar-title class="text-uppercase">
      <v-btn
        depressed
        :retain-focus-on-click="false"
        color="transparent"
        title
        block
      >
        <router-link to="/">
          <v-img
            :src="`${baseUrl}Logo sin genérico - Fondo blanco.png`"
            height="40px"
            width="200px"
          />
        </router-link>
      </v-btn>
    </v-toolbar-title>
    <v-divider />
    <v-tabs
      :align-with-title="false"
      background-color="transparent"
      color="white"
      slider-color="#8b0000"
      :hide-slider="this.$route.path === '/'"
      slider-size="3"
    >
      <v-tab
        v-for="i in links"
        :key="i.text"
        :to="i.route"
        background-color="transparent"
        class="white--text"
      >
        {{ i.text }}
      </v-tab>
    </v-tabs>
  </v-app-bar>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    data () {
      return {
        drawer: null,
        links: [
          { text: 'Nosotros', route: '/dashboard', roles: [] },
          { text: 'Productos', route: '/news', roles: [] },
          { text: 'Servicios', route: '/blog', roles: ['User'] },
          { text: 'Noticias y Eventos', route: '/clients' },
          { text: 'Contactos', route: '/clients' },
        ],
        baseUrl: process.env.BASE_URL,
      }
    },
    computed: {
      ...mapGetters(['user']),
      is_login () {
        return this.$store.getters.user
      },
    },
    methods: {
      logout: async function () {
        await this.$store.dispatch('signOut')
        this.$router.push('/dashboard')
      },
      /* hasPermission (roles) {
        if (!roles.length) return true
        const res = roles.some(r => (r === 'User' && !!this.user) || (r === 'Admin' && !!this.user && this.user.is_superuser))
        return res
      }, */
      // getLinksHasPermission () {
      //  return this.links.filter(x => this.hasPermission(x.roles))
      // },
    },
  }
</script>
<style>
  .semi-transparent {
   background-color: #838282 !important;
   opacity: 0.75;
 }
.semi-transparent-blue {
   background-color: transparent !important;
   solid-color: gray;
 }
</style>
