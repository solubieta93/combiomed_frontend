<template>
  <div
    style="background-size: cover;"
    :style="{
      backgroundAttachment: 'scroll, fixed',
      backgroundPosition: '0px 0px, 50% 50%',
      backgroundImage: `url(${baseUrl}web-combiomed-futer-04-04-04.png)`
    }"
  >
    <v-row justify="center">
      <v-col cols="4">
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
            class="justify"
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
