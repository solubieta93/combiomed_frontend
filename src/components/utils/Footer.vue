<template>
  <div
    style="background-size: cover;"
    :style="{
      backgroundAttachment: 'scroll, fixed',
      backgroundPosition: '0px 0px, 50% 50%',
      backgroundImage: `url(${baseUrl}web-combiomed-futer-04-04-04.png)`
    }"
  >
    <v-dialog
      v-model="avisoLegal"
      persistent
      style="height: available"
    >
      <v-card>
        <v-card-title>
          <v-textarea
            :label="$t('avisoLegalTitle')"
            filled
            readonly
            :value="$t('avisoLegalFullText')"
            rows="20"
            hide-details
          />
        </v-card-title>
        <v-card-actions class="pa-0">
          <v-col class="pa-0">
            <v-row class="justify-end container">
              <v-btn
                color="primary"
                @click="avisoLegal= false"
              >
                Entendido
              </v-btn>
            </v-row>
          </v-col>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-row justify="center">
      <v-col cols="4">
        <v-row justify="center">
          <v-list-item-icon
            v-for="i in icons"
            :key="i.icon"
            style="margin-left:3px; margin-right: 3px;"
          >
            <v-btn
              icon
              small
              :href="i.route"
            >
              <v-icon
                color="grey"
                class="ma-0"
              >
                {{ i.icon }}
              </v-icon>
            </v-btn>
          </v-list-item-icon>
        </v-row>
      </v-col>
    </v-row>
    <v-row class="justify-center text--white">
      <v-btn
        text
        @click="avisoLegal = true"
      >
        <span
          class="white--text "
          style="text-decoration: underline"
        >{{ $t('avisoLegalTitle') }}</span>
      </v-btn>
    </v-row>
    <v-row class="justify-center text--white">
      <v-btn
        icon
        small
        href="https://wwww.gacetaoficial.gob.cu/es"
      >
        <v-icon color="white">
          mdi-download
        </v-icon>
      </v-btn>
      <span class="white--text">{{ $t('downloadGaceta') }}</span>
    </v-row>
    <v-row justify="center">
      <v-col
        class="justify"
        cols="8"
        sm="7"
        lg="4"
        xl="3"
      >
        <v-row justify="center">
          <v-col
            class="text-center"
            cols="8"
            sm="10"
            lg="10"
            xl="9"
          >
            <p style="color: lightgrey">
              @ Copyright 2020 Combiomed BioCubaFarma
            </p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import { i18n } from '@/plugins/i18n'
  export default {
    data () {
      return {
        avisoLegal: false,
        baseUrl: process.env.BASE_URL,
        icons: [
          { icon: 'fab fa-facebook', route: 'https://www.facebook.com/COMBIOMED-2269852883332348/' },
          { icon: 'fab fa-twitter', route: 'https://mobile.twitter.com/combiomedc' },
          { icon: 'fab fa-youtube', route: 'https://www.youtube.com/channel/UCojTT9zhJblDjNvVZiTpsTQ' },
          // 'fab fa-google-plus',
          // 'fab fa-linkedin',
          // 'fab fa-instagram',
        ],
      }
    },
    computed: {
      avisoLegalText () {
        return 'avisoLegalFullText'
      },
    },
  }
</script>
