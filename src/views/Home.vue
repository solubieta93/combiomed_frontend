<template>
  <v-container
    fluid
    class="pa-0 ma-0"
  >
    <carousel-portada />
    <v-card
      tile
      class="pa-0 ma-0"
      color="white"
    >
      <v-img
        src="web-combiomed-historia-04.png"
        style="top:-68px"
      >
        <v-col
          cols="12"
          class="ma-0 pa-0"
        >
          <v-row
            justify="center"
            style="height: 50px; margin-top: 135px; color: grey;"
          >
            <v-col md="3">
              <hr>
            </v-col>
            <v-col md="2">
              <h3
                class="text-uppercase"
                style="margin-top: -14px; margin-left: 16px;"
              >
                Quienes somos
                <br>
              </h3>
            </v-col>
            <v-col md="3">
              <hr>
            </v-col>
          </v-row>
        </v-col>

        <v-row
          justify="center"
          style="height: 100px; color: grey;"
        >
          <v-col md="4">
            <p>
              Nuestra institución fue creada en 1969 con el nombre de Centro de Investigaciones
              Digitales (CID), más tarde Instituto Central de Investigación Digital (ICID), con el
              objetivo de desarrollar la primera computadora cubana. Desde diciembre de 2018 y hasta
              la actualidad funcionamos bajo el nombre COMBIOMED:empresa de tecnología médica digital.
            </p>
          </v-col>
          <v-col md="4">
            <p>
              Tenemos referencia en el mercado nacional e internacional y brindamos soluciones tecnológicas
              seguras y asequibles para la salud. Nuestro objetivo es investigar, desarrollar, producir,
              comercializar y brindar servicio técnico a equipos electrónicos, de automatización destinados
              a la medicina, la biotecnología, etc.
              <br>
            </p>
          </v-col>
        </v-row>
      </v-img>
    </v-card>
    <product-d />
    <services />
  </v-container>
</template>

<script>
  import CarouselPortada from '@/components/utils/CarouselPortada'
  import ProductD from '@/components/product/Product_d'
  import Services from '@/components/services/Services'

  export default {
    components: {
      CarouselPortada,
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
