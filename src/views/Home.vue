<template>
  <v-container
    fluid
    class="pa-0 ma-0 white_back"
  >
    <carousel-portada />

    <!-- QUIENES SOMOS -->
    <v-img
        src="web-combiomed-historia-03.png"
        style="top:-46px"
    />
    <v-col cols="12">
      <v-row
        justify="center"
        style="height: 50px; color: grey;"
      >
        <v-col md="3">
          <hr>
        </v-col>
        <v-col md="2">
          <v-row justify="center">
          <h3
            class="text-uppercase"
            style="margin-top: -14px; margin-left: 16px;"
          >
            quienes somos
            <br>
          </h3>
          </v-row>
        </v-col>
        <v-col md="3">
          <hr>
        </v-col>
      </v-row>
    </v-col>
    <v-row
      justify="center"
      style=" color: grey; margin-bottom:1%;"
    >
      <v-col md="8">
        <p class="text-justify">
          Nuestra institución fue creada en 1969 con el nombre de Centro de Investigaciones
              Digitales (CID), más tarde Instituto Central de Investigación Digital (ICID), con el
              objetivo de desarrollar la primera computadora cubana. Desde diciembre de 2018 y hasta
              la actualidad funcionamos bajo el nombre COMBIOMED:empresa de tecnología médica digital.
          <br>
        </p>
        <p class="text-justify">
          Tenemos referencia en el mercado nacional e internacional y brindamos soluciones tecnológicas
              seguras y asequibles para la salud. Nuestro objetivo es investigar, desarrollar, producir,
              comercializar y brindar servicio técnico a equipos electrónicos, de automatización destinados
              a la medicina, la biotecnología, etc.
        </p>
      </v-col>
    </v-row>
    <v-row justify="center" style="margin-bottom:2%;">
      <v-btn text>
        Leer mas
      </v-btn>
    </v-row>

    <!-- PRODUCTOS -->
    <product-d />

    <!-- SERVICIOS -->
    <services />

    <!-- NOTICIAS Y EVENTOS -->
    <v-img
        src="web-combiomed-productos-noticias&eventos-04.png"
        style="top:-195px; z-index:2;"
    >

      <v-row style="margin-top:120px;">
        <v-col cols="12">
          <v-row
            justify="center"
            style="height: 50px; color: grey;"
          >
            <v-col md="3">
              <hr>
            </v-col>
            <v-col md="2">
              <h3
                class="text-uppercase"
                style="margin-top: -14px; margin-left: 16px;"
              >
                Noticias y Eventos
                <br>
              </h3>
            </v-col>
            <v-col md="3">
              <hr>
            </v-col>
          </v-row>
        </v-col>
        <principal-news-and-events/>
      </v-row>
    </v-img>

     <v-col cols="12">
      <v-row
        justify="center"
        style="height: 50px; color: grey;"
      >
        <v-col md="3">
          <hr>
        </v-col>
        <v-col md="2">
          <v-row justify="center">
          <h3
            class="text-uppercase"
            style="margin-top: -14px; margin-left: 16px;"
          >
            contactos
            <br>
          </h3>
          </v-row>
        </v-col>
        <v-col md="3">
          <hr>
        </v-col>
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
  import CarouselPortada from '@/components/utils/CarouselPortada'
  import ProductD from '@/components/product/Product_d'
  import Services from '@/components/services/Services'
  import PrincipalNewsAndEvents from '@/components/newsAndevents/PrincipalNewsAndEvents'

  export default {
    components: {
      CarouselPortada,
      PrincipalNewsAndEvents,
      ProductD,
      Services,
    },
    data () {
      return {
        baseUrl: process.env.BASE_URL,
      }
    },
  }
</script>

<style scoped>
.white_back {
  background-color: white !important;
}
</style>