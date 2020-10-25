<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <nav>
    <v-app-bar
      v-if="$vuetify.breakpoint.smAndDown"
      app
      color="transparent"
    >
      <v-app-bar-nav-icon
        v-if="$vuetify.breakpoint.smAndDown"
        color="red"
        @click="drawer = !drawer"
      />

      <intenationalization-button
        @changeLocale="(locale)=> changeLocale(locale)"
      />
    </v-app-bar>
    <v-app-bar
      v-if="!$vuetify.breakpoint.smAndDown"
      app
      hide-off-scroll
      tabs
      color="transparent"
      prominent
    >
      <v-overlay
        v-if="$vuetify.breakpoint.mdAndUp"
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
                        :style="logoStyle"
                        :aspect-ratio="1.0778"
                      />
                    </v-btn>
                  </v-toolbar-title>
                </v-row>
              </v-col>
              <v-spacer />
              <intenationalization-button
                @changeLocale="(locale)=> changeLocale(locale)"
              />
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
              :hide-slider="hideSlider"
              centered
              show-arrows
              class="white--text"
            >
              <v-tabs-slider
                v-model="slider"
                color="#8b0000"
              />
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
                  {{ $t(link.text) }}
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
                      :style="link.style"
                      v-on="on"
                    >
                      {{ $t(link.text) }}
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
                    />
                    <v-tab
                      v-for="item in link.items"
                      :key="item.text"
                      class="semitransparent white--text"
                      style="min-width: 150px"
                      :inactive="!item.route"
                      :disabled="!item.route"
                      @click="() => pushRoute(i, item.route)"
                    >
                      {{ $t(item.text) }}
                    </v-tab>
                  </v-tabs>
                </v-menu>
              </v-item>
              <v-tab
                background-color="transparent"
                class="white--text"
                @click="!!user ? logout() : login()"
              >
                {{ !!user ? $t('out') : $t('login') }}
              </v-tab>
            </v-tabs>
          </v-col>
        </v-row>
      </v-overlay>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      app
      dark
      temporary
    >
      <v-row class="justify-center">
        <v-col class="mt-5 text-center">
          <v-avatar
            style="height:70px; width:240px;"
          >
            <img
              :src="`${baseUrl}Logo sin genérico - Fondo blanco.png`"
              :aspect-ratio="1.0778"
            >
          </v-avatar>
        </v-col>
      </v-row>
      <v-divider
        style="border-color: white; width: calc(100% - 30px); margin-left: 15px;"
        class="mb-3"
      />
      <v-list>
        <v-list-item
          v-for="link in linksWithoutServices"
          :key="link.text"
          router
          :to="link.route"
        >
          <v-list-item-content>
            <v-list-item-title class="white--text">
              {{ $t(link.text) }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-group aria-expanded="false">
          <template
            v-slot:activator
            class="white--text"
          >
            <v-list-item-title class="white--text">
              {{ $t('service') }}
            </v-list-item-title>
          </template>

          <v-list-item
            v-for="link in linkServices"
            :key="link.text"
            router
            :to="link.route"
          >
            <v-list-item-content>
              <v-list-item-title class="white--text">
                {{ $t(link.text) }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <v-list-item
          @click="!!user ? logout() : login()"
        >
          <v-list-item-content>
            <v-list-item-title class="white--text">
              {{ !!user ? $t('out') : $t('login') }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
  import { mapGetters } from 'vuex'
  import FlagIcon from 'vue-flag-icon'
  import { i18n } from '@/plugins/i18n'
  import IntenationalizationButton from './IntenationalizationButton'
  export default {
    components: { IntenationalizationButton },
    data () {
      return {
        drawer: null,
        slider: 3,
        links: [
          { text: 'quienessomos', route: '/us', roles: [] },
          { text: 'product', route: '/products', roles: [] },
          { text: 'service',
            active: false,
            style: 'min-width:150px',
            items: [
              { text: 'tech', route: '/services/tech', roles: [] },
              { text: 'mec', route: '/services/mec', roles: [] }, //, route: '/auto', roles: [] },
              { text: 'aut', route: '/services/auto', roles: [] },
            ],
            roles: [],
          },
          { text: 'newsEvents', route: '/news' },
          { text: 'contacts', route: '/contacts' }, // route: '/clients' },
        ],
        linksWithoutServices: [
          { text: 'home', route: '/', roles: [] },
          { text: 'quienessomos', route: '/us', roles: [] },
          { text: 'product', route: '/products', roles: [] },
          { text: 'newsEvents', route: '/news' },
          { text: 'contacts', route: '/contacts' }, // route: '/clients' },
        ],
        linkServices: [
          { text: 'tech', route: '/services/tech', roles: [] },
          { text: 'mec', route: '/services/mec', roles: [] }, //, route: '/auto', roles: [] },
          { text: 'aut', route: '/services/auto', roles: [] },
        ],
        baseUrl: process.env.BASE_URL,
        tab: null,
      }
    },
    computed: {
      ...mapGetters(['user']),
      hideSlider () {
        const route = this.$route.path
        return /^\/services\/*/.test(route) || route === '/' || route === '/login'
      },
      logoStyle () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return 'height:70px; width:240px;'
          case 'sm': return 'height:70px; width:300px;'
          case 'md': return 'height:70px; width:300px;'
          case 'lg': return 'height:70px; width:300px;'
          case 'xl': return 'height:70px; width:300px;'
        }
      },
    },
    methods: {
      logout: async function () {
        console.log('logout')
        await this.$store.dispatch('signOut')
        this.$router.push('/')
      },
      login () {
        this.$router.push('/login')
      },
      pushRoute (i, path) {
        this.tab = i
        if (path) this.$router.push({ path })
      },
      changeLocale (locale) {
        i18n.locale = locale
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
