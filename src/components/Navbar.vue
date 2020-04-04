<template>
  <v-app-bar
    app
    color="grey"
    elevation="1"
    hide-off-scroll
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

    <v-spacer></v-spacer>

    <div
      v-for="i in links"
      :key="i.text"
      align="center"
    >
      <v-btn
        text
        block
        :retain-focus-on-click="true"
        color="white"
        :to="i.route"
      >
        {{ i.text }}
      </v-btn>
    </div>
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
          { text: 'Productos', route: '/dashboard', roles: [] },
          { text: 'Servicios', route: '/blog', roles: ['User'] },
          { text: 'Noticias y Eventos', route: '/news' },
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
