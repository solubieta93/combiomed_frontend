<template>
  <v-container
    fluid
    class="white_back pa-0 ma-0"
  >
    <v-img
      :src="`${baseUrl}servTech0.png`"
      :style="imageStyle"
    >
      <v-col
        class="d-flex flex-column-reverse ma-0 pa-0"
        style="height:100%"
      >
        <v-img
          :src="`${baseUrl}web-combiomed-historia-03.png`"
          height="16%"
          width="100vw"
          max-height="16%"
        />
      </v-col>
    </v-img>

    <!-- TITLE -->
    <v-col
      cols="12"
      :class="{
        'xsOnlyColStyle' : $vuetify.breakpoint.xsOnly,
        'smAndDownColStyle' : $vuetify.breakpoint.smOnly,
        'mdAndUpColStyle' : $vuetify.breakpoint.mdAndUp,
        'xlOnlyColStyle' : $vuetify.breakpoint.xlOnly
      }"
    >
      <v-row
        justify="center"
        style="height: 50px; color: grey;"
      >
        <v-col md="2">
          <hr>
        </v-col>
        <v-col md="3">
          <v-row
            justify="center"
          >
            <h3
              class="text-uppercase center"
              style="margin-top: -14px; margin-left: 16px;"
            >
              {{ $t('techText1') }}
            </h3>
          </v-row>
        </v-col>
        <v-col md="2">
          <hr>
        </v-col>
      </v-row>
    </v-col>

    <v-row
      justify="center"
      style=" color: grey; margin-bottom:75px;"
    >
      <v-col
        md="7"
        sm="11"
        lg="7"
        xl="7"
        cols="10"
      >
        <p class="text-justify">
          {{ $t('techText2') }}
          <br>
        </p>
      </v-col>
    </v-row>

    <v-img
      width="100vw"
      height="100%"
      :src="`${baseUrl}servTech1.png`"
    />
  </v-container>
</template>

<script>

  export default {
    components: {
    },
    data () {
      return {
        baseUrl: process.env.BASE_URL,
      }
    },
    computed: {
      imageStyle () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return 'height:40vh; width:100vw;'
          case 'sm': return 'height:50vh; width:100vw;'
          case 'md': return 'height:60vh; width:100vw;'
          case 'lg': return 'height:80vh; width:100vw;'
          case 'xl': return 'height:80vh; width:100vw;'
          default: return 'height:80vh; width:100vw;'
        }
      },
    },
  }
</script>

<style scoped>
.white_back {
    background-color: white !important;
  }

.grid {
  display:grid;
  grid-template-columns: repeat(2, .5fr);
  /* grid-template-rows: repeat(5, 1fr); */
  grid-gap: 5px;
  column-gap: 16px;
  grid-auto-rows:200px;
}

.grid div {
  overflow:hidden;
}

.xsOnlyColStyle {
  margin-top:24%;
}
.smAndDownColStyle {
  margin-top:10%;
}
.mdAndUpColStyle {
  margin-top:10%;
}
.xlOnlyColStyle {
  margin-top:10%;
}
</style>
