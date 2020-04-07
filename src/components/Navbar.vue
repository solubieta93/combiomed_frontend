<template>
  <v-app-bar
    app
    hide-off-scroll
    tabs
    color="transparent"
    prominent
  >
    <v-overlay
      absolute
      color="#001A33"
      class="fill"
    >
      <v-row
        class="fill pa-0 ma-0"
        align="end"
      >
        <v-col
          class="pa-0 ma-0"
          align-self="end"
        >
          <v-row class="pa-0 ma-0">
            <v-spacer />
            <v-col
              class="pa-0 ma-0"
              cols="6"
            >
              <v-row
                align="start"
                class="pa-0 ma-0"
              >
                <v-toolbar-title class="text-uppercase">
                  <v-btn
                    color="transparent"
                    title
                    text
                    to="/"
                    width="300px"
                    height="70px"
                  >
                    <v-img
                      :src="`${baseUrl}Logo sin genérico - Fondo blanco.png`"
                      height="70px"
                      width="300px"
                      :aspect-ratio="1.0778"
                    />
                  </v-btn>
                </v-toolbar-title>
              </v-row>
            </v-col>
            <v-spacer />
          </v-row>

          <v-divider
            dark
            style="width: 100vw"
            color="white"
          />
          <v-tabs
            :align-with-title="false"
            background-color="transparent"
            color="white"
            slider-color="#8b0000"
            :hide-slider="this.$route.path === '/'"
            centered
            show-arrows
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
        </v-col>
      </v-row>
    </v-overlay>
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
          { text: 'Servicios', route: '/services', roles: [] },
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
<style>
  .semi-transparent {
   background-color: #838282 !important;
   opacity: 0.75;
 }
.semi-transparent-blue {
   background-color: transparent !important;
   solid-color: gray;
 }
 .fill {
   width: 100vw;
   height: 128px;
 }
</style>
