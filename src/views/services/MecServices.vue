<template>
  <v-container
    fluid
    class="white_back pa-0 ma-0"
  >
    <v-img
      :src="`${baseUrl}servicesMec/servMec0.png`"
      :style="principalImgStyle"
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
    >
      <v-row
        justify="center"
        style="height: 50px; color: grey;"
      >
        <v-col md="2">
          <hr>
        </v-col>
        <v-col md="3">
          <v-row justify="center">
            <h4
              class="text-uppercase"
              style="margin-top: -14px; "
            >
              {{ $t('mechServ') }}
              <br>
            </h4>
          </v-row>
        </v-col>
        <v-col md="2">
          <hr>
        </v-col>
      </v-row>

      <v-row
        justify="center"
        style=" color: grey; margin-bottom:10%;"
      >
        <v-col md="7">
          <p class="text-justify">
            {{ $t('mechText1') }}
            <br>
          </p>
          <p class="text-justify">
            {{ $t('mechText2') }}
          </p>
          <h4
            class="text-justify text-uppercase"
            style="color:grey;"
          >
            {{ $t('mechText3') }}
            <br>
          </h4>
          <p class="text-justify">
            {{ $t('mechText4') }}
          </p>
          <p class="text-justify">
            {{ $t('mechText5') }}
            <br>
          </p>
          <p class="text-justify">
            {{ $t('mechText6') }}
          </p>
          <p class="text-justify">
            {{ $t('mechText7') }}
          </p>
          <p class="text-justify">
            {{ $t('mechText8') }}
          </p>
          <p class="text-justify">
            {{ $t('mechText9') }}
          </p>
        </v-col>
      </v-row>
    </v-col>

    <v-img
      width="100vw"
      height="100%"
      :style="secondImageStyle"
      :src="`${baseUrl}servicesMec/servMec1.png`"
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

    <div>
      <v-col
        cols="12"
        style="margin-bottom: 50px;"
      >
        <v-row
          justify="center"
          style="margin-top: 10px; color: grey;"
        >
          <v-col md="7">
            <h3 class="text-uppercase">
              {{ $t('mechText10') }}
              <br>
            </h3>
            <p class="text-justify">
              {{ $t('mechText11') }}
            </p>
            <p class="text-justify">
              {{ $t('mechText12') }}
              <br>
            </p>
            <p class="text-justify">
              {{ $t('mechText13') }}
            </p>
            <p class="text-justify">
              {{ $t('mechText14') }}
            </p>
            <p class="text-justify">
              {{ $t('mechText15') }}
            </p>
            <p class="text-justify">
              {{ $t('mechText16') }}
            </p>
            <h3 class="text-uppercase">
              {{ $t('mechText17') }}
              <br>
            </h3>
            <p class="text-justify">
              {{ $t('mechText18') }}
            </p>
            <h3 class="text-uppercase">
              {{ $t('mechText19') }}
              <br>
            </h3>
            <p class="text-justify">
              {{ $t('mechText20') }}
            </p>
            <h3 class="text-uppercase">
              {{ $t('mechText21') }}
              <br>
            </h3>
            <p class="text-justify">
              {{ $t('mechText22') }}
            </p>
            <p class="text-justify">
              {{ $t('mechText23') }}
            </p>
            <p class="text-justify">
              {{ $t('mechText24') }}
            </p>
            <p class="text-justify">
              {{ $t('mechText25') }}
            </p>
            <h3
              class="text-uppercase"
            >
              {{ $t('mechText26') }}
              <br>
            </h3>
            <p class="text-justify">
              {{ $t('mechText27') }}
            </p>
          </v-col>
        </v-row>
      </v-col>
    </div>

    <!-- AQUI DEBEN IR 5 IMAGENES DE LAS 5 MAQUINAS -->
    <images :images="imagesMachine" />
  </v-container>
</template>

<script>
  import Images from '@/components/services/Images.vue'

  export default {
    components: {
      Images,
    },
    data () {
      return {
        baseUrl: process.env.BASE_URL,
        imagesMachine: [
          'servicesMec/mecanica1.png',
          'servicesMec/mecanica2.png',
          'servicesMec/mecanica3.png',
        ],
      }
    },
    computed: {
      principalImgStyle () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return 'height:100%; width:100vw'
          case 'sm': return 'height:100%; width:100vw'
          case 'md': return 'height:100%; width:100vw'
          case 'lg': return 'height:80vh; width:100vw'
          case 'xl': return 'height:80vh; width:100vw'
        }
      },
      secondImageStyle () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return 'z-index: 1; margin-top:-10%;'
          case 'sm': return 'z-index: 1; margin-top:-10%;'
          case 'md': return 'z-index: 1; margin-top:-10%;'
          case 'lg': return 'z-index: 1; margin-top:-10%;'
          case 'xl': return 'z-index: 1; margin-top:-10%;'
        }
      },
    },
  }
</script>

<style scoped>
.white_back {
  background-color: white !important;
}
</style>
