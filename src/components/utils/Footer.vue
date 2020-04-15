<template>
  <v-img :src="`${baseUrl}web-combiomed-futer-04-04-04.png`" style="z-index:2;">
  <v-row justify="center">
    <v-col cols="3">
    <v-row justify="center">
      <v-list-item-icon
        v-for="i in icons"
        :key="i"
        style="margin-left:3px; margin-right: 3px;"
      >
        <v-icon
          color="grey"
          class="ma-0"
        >
          {{ i }}
        </v-icon>
      </v-list-item-icon>
    </v-row>
  </v-col>
  </v-row>
  
    <v-col 
      md="12"
      sm="12"
      lg="12"
      xl="12"
      xs="12"
      justify="center"
    >
    <v-row justify="center">
      <p style="color: lightgrey">
        @ Copyright 2020 Combiomed BioCubaFarma
      </p>
      </v-row>
    </v-col>
  
  </v-img>
</template>

<script>
  export default {
    data () {
      return {
        baseUrl: process.env.BASE_URL,
        icons: [
          'fab fa-facebook',
          'fab fa-twitter',
          'fab fa-google-plus',
          // 'fab fa-linkedin',
          // 'fab fa-instagram',
        ],
      }
    },
  }
</script>
