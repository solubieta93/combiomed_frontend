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
          <!--          <template v-slot:extension>-->
          <v-tabs
            v-model="tab"
            :align-with-title="false"
            background-color="transparent"
            color="white"
            :hide-slider="this.$route.path === '/'"
            centered
            show-arrows
            class="white--text"
          >
            <v-tabs-slider
              v-model="slider"
              color="#8b0000"
            ></v-tabs-slider>
            <v-item
              v-for="(link, i) in links"
              :key="link.text"
              :value="i"
            >
              <v-tab
                v-if="!link.items"
                background-color="transparent"
                class="white--text"
                :to="link.route ? link.route : null"
                :disabled="!link.route"
              >
                {{ link.text }}
              </v-tab>
              <v-menu
                v-else
                v-model="link.active"
                offset-y
                style="background-color:transparent"
              >
                <template v-slot:activator="{ on }">
                  <v-tab
                    background-color="transparent"
                    class="white--text fill-height"
                    color="white"
                    v-on="on"
                    :style="link.style"
                  >
                    {{ link.text }}
                    <v-icon right>
                      mdi-menu-down
                    </v-icon>
                  </v-tab>
                </template>

                <v-tabs 
                  vertical
                  class="semitransparent white--text"
                >
                  <v-tabs-slider
                    v-model="slider"
                    color="#8b0000"
                  ></v-tabs-slider>
                  <v-tab
                    class="semitransparent white--text"
                    style="min-width: 150px"
                    v-for="item in link.items"
                    :key="item.text"
                    :inactive="!item.route"
                    :disabled="!item.route"
                    @click="() => pushRoute(i, item.route)"
                  >
                    {{ item.text }}
                  </v-tab>
                </v-tabs>

              </v-menu>
            </v-item>
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
        slider: 3,
        links: [
          { text: 'Nosotros', route: '/dashboard', roles: [] },
          { text: 'Productos', route: '/products', roles: [] },
          { text: 'Servicios', active: false, style: 'min-width:150px', 
            items: [
              { text: 'TÉCNICOS', route: '/services/auto', roles: [] },
              { text: 'MECÁNICA', route: '/services/mec', roles: [] }, //, route: '/auto', roles: [] },
              { text: 'AUTOMÁTICA', route: '/services/tech', roles: [] },
            ],
            roles: [],
          },
          { text: 'Noticias y Eventos', route: '/news' },
          { text: 'Contactos', route: '/contacts' }, // route: '/clients' },
        ],
        baseUrl: process.env.BASE_URL,
        tab: null,
      }
    },
    computed: {
      ...mapGetters(['user']),
      is_login () {
        return this.$store.getters.user
      },
    },
    watch: {
      slider (value) {
        console.log(value)
      },
    },
    methods: {
      logout: async function () {
        await this.$store.dispatch('signOut')
        this.$router.push('/dashboard')
      },
      pushRoute (i, path) {
        console.log(path, 'path')
        this.tab = i
        if (path) this.$router.push({ path })
      },
    },
  }
</script>
<style>
 .fill {
   width: 100vw;
   height: 128px;
 }
 .semitransparent {
   background-color: #001A33 !important;
   opacity: 0.68;
 }
</style>
