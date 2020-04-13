<template>
  <v-img
    class="back"
    :src="`${baseUrl}web-combiomed-futer-04-04.png`"
    style="z-index:1; margin-bottom: -35px;"
  >
<div class="mycontainer">
    <v-row
      justify="center"
      style="margin-top: 135px;"
    >
      <v-col md="3">
        <v-row justify="center">
          <img src="../../../public/ICONOS/map-marker.png" >
        </v-row>
        <v-row justify="center">
          <p class="body-2 font-italic font-weight-bold">
          Calle 202 No.1704 entre 17 y 19. Siboney. Playa. La Habana. Cuba
        </p>
        </v-row>
      </v-col>

      <v-col md="2">
        <v-row justify="center">
          <img src="../../../public/ICONOS/email.png" >
        </v-row>
        <v-row justify="center">
          <p class="body-2 font-italic font-weight-bold">
            E-mail: combio@icid.cu
          </p>
        </v-row>
      </v-col>

      <v-col md="3">
        <v-row justify="center">
          <img src="../../../public/ICONOS/phone.png" >
        </v-row>
        <v-row justify="center">
          <p class="caption font-italic font-weight-bold">
            Telf:(+53) 7 2739088, (+53)7 2719132
          </p>
        </v-row>
      </v-col>
    </v-row>

    
      <v-row justify="center">
        <v-col cols="3">
          <v-text-field
            label="Nombre"
            single-line
            outlined
            color="red"
          />
        </v-col>
        <v-col cols="2">
          <v-text-field
            label="E-mail"
            single-line
            outlined
            color="red"
          />
        </v-col>

        <v-col cols="3">
          <v-text-field
            label="Asunto"
            single-line
            outlined
            color="red"
          />
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="8">
          <v-textarea
            label="Introduzca su mensaje"
            single-line
            outlined
            height="173px"
            color="red"
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
    </div>
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
  .mycontainer {
	margin:auto;
	width:80%;
}
</style>
