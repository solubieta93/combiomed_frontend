<template>
  <v-img
    class="back"
    :src="`${baseUrl}web-combiomed-futer-04-04.png`"
    style="z-index:1; margin-bottom: -35px;"
  >
    <v-row
      justify="center"
      style="margin-top: 135px;"
    >
      <v-col md="2">
        <p class="body-2 font-italic font-weight-bold">
          Calle 202 No.1704 entre 17 y 19. Siboney. Playa. La Habana. Cuba
        </p>
      </v-col>
      <v-col md="2">
        <p class="caption font-italic font-weight-bold">
          E-mail: combio@icid.cu
        </p>
      </v-col>
      <v-col md="2">
        <p class="caption font-italic font-weight-bold">
          Telf:(+53) 7 2739088, (+53)7 2719132
        </p>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="3">
        <v-text-field
          label="Nombre"
          single-line
          outlined
          dense
        />
      </v-col>
      <v-col cols="2">
        <v-text-field
          label="E-mail"
          single-line
          outlined
          dense
        />
      </v-col>

      <v-col cols="3">
        <v-text-field
          label="Asunto"
          single-line
          outlined
          dense
        />
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="8">
        <v-textarea
          label="Introduzca su mensaje"
          single-line
          outlined
          dense
          height="173px"
        />
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col
        cols="8"
      >
        <v-btn
          color="#001A33"
          block
        >
          <h5 style="color: white;">
            Enviar ahora
          </h5>
        </v-btn>
      </v-col>
    </v-row>
  </v-img>
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
  }
</script>

<style scoped>
  .back {
    background-color: white;
  }
</style>
