<template>
  <v-container fluid>
    <v-card
      tile
      elevation="0"
      class="pa-0"
      color="transparent"
    >
      <v-col cols="12">
        <v-row
          justify="center"
          style="height: 50px; color:#818080;"
        >
          <v-col md="3">
            <hr style="color:#818080;">
          </v-col>
          <v-col md="2">
            <v-row justify="center">
              <h3
                class="text-uppercase"
                style="margin-top: -14px; margin-left: 16px; "
              >
                {{$t('quienessomos')}}
                <br>
              </h3>
            </v-row>
          </v-col>
          <v-col md="3">
            <hr style="color:#818080;">
          </v-col>
        </v-row>
      </v-col>
      <v-row
        justify="center"
        style=" color: grey; margin-bottom:1%;"
      >
        <v-col md="8">
          <p class="text-justify">
            {{$t('quienesSomosText1')}}
            <br>
          </p>
          <p class="text-justify">
            {{$t('quienesSomosText2')}}
          </p>
        </v-col>
      </v-row>
      <v-expand-transition>
        <div
          v-show="!readless"
          class="my_container"
        >
          <v-row class="justify-center">
            <v-img
              style="object-fit: cover"
              src="organigrama.png"
            />
          </v-row>
          <v-row justify="center">
            <v-col
              class="xs"
              md="4"
              sm="6"
              lg="4"
              xl="4"

              cols="12"
            >
              <h2>{{$t('genesis')}}</h2>
              <h3> {{$t('computadoraText1')}}</h3>
              <p class="text-justify">
                {{$t('computadoraText2')}}
              </p>
            </v-col>
            <v-col
              class="xs"
              md="4"
              sm="6"
              lg="4"
              xl="4"

              cols="12"
            >
              <img
                src="CID 201.png"
                :alt="$t('computadoraAltImageText')"
                fill-height
              >
            </v-col>
          </v-row>
        </div>
      </v-expand-transition>

      <v-row
        justify="center"
        style="margin-bottom:1%;"
      >
        <v-btn
          text
          @click="readless = !readless"
        >
          {{ readless ? $t('leermas') : $t('leermenos') }}
        </v-btn>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        baseUrl: process.env.BASE_URL,
        readless: true,
      }
    },
  }
</script>

<style scoped>
div img{
  width:100%;
  height:100%;
  object-fit: fill;
}

.my_container {
  margin:auto;
  width:100%;
}

</style>
