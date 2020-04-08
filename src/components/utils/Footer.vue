<template>
  <v-img src="web-combiomed-futer-04-04-04.png">
    <v-row
      align="center"
      style="margin-left: 555px; margin-top: 5px; "
    >
      <v-col cols="3">
        <v-row>
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
    <p style="margin-left: 445px; color: lightgrey">
      @ Copyright 2020 Combiomed BioCubaFarma
    </p>
  </v-img>
</template>

<script>
  export default {
    data () {
      return {
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
