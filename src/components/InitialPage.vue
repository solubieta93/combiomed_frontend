<template>
  <v-container fluid class="pa-0">
    <navbar />

    <Carousel_Portada />

    <v-card
      tile
      elevation="0"
      class="pa-0"
      color="transparent"
    >
      <v-img
        src="../../public/web-combiomed-historia-04.png"
        style="top:-53px"
      >
        <v-col cols="12">
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
    <Product_d />
    <services />
    <form />
    <my-footer />
  </v-container>
</template>

<script>
  import Navbar from '@/components/Navbar'
  import Carousel_Portada from '@/components/Home/Carousel_Portada'
  import MyFooter from '@/components/footer'
  import Form from '@/components/Form'
  import Product_d from '@/components/product/Product_d'
  import Services from '@/components/services/Services'

  export default {
    components: {
      Navbar,
      Carousel_Portada,
      MyFooter,
      Form,
      Product_d,
      Services,
    },
    data () {
      return {
        baseUrl: process.env.BASE_URL,
        combiomed_equipos:
          [
            0, 4, 5, 6, 7, 8, 9, 10,
          ],
        items: [
          {
            src: 'woman_figure1.jpg',
            description: 'kfvnvfk',
            telefono: 'knd',
            fax: 'nkdsn',
            email: 'vnvnd',
          },
          {
            src: 'Ananda_Figure_Left.jpg',
            description: 'kfvnvfk',
            telefono: 'knd',
            fax: 'nkdsn',
            email: 'vnvnd',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
            description: 'kfvnvfk',
            telefono: 'knd',
            fax: 'nkdsn',
            email: 'vnvnd',
          },
          {
            src: 'Ananda_Figure_Left.jpg',
            description: 'kfvnvfk',
            telefono: 'knd',
            fax: 'nkdsn',
            email: 'vnvnd',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
            description: 'kfvnvfk',
            telefono: 'knd',
            fax: 'nkdsn',
            email: 'vnvnd',
          },
          {
            src: 'woman_figure1.jpg',
            description: 'kfvnvfk',
            telefono: 'knd',
            fax: 'nkdsn',
            email: 'vnvnd',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
            description: 'kfvnvfk',
            telefono: 'knd',
            fax: 'nkdsn',
            email: 'vnvnd',
          },
          {
            src: 'woman_figure1.jpg',
            description: 'kfvnvfk',
            telefono: 'knd',
            fax: 'nkdsn',
            email: 'vnvnd',
          },
          {
            src: 'Ananda_Figure_Left.jpg',
            description: 'kfvnvfk',
            telefono: 'knd',
            fax: 'nkdsn',
            email: 'vnvnd',
          },
        ],
      }
    },
  }
</script>

<style scoped>
div {
    position: relative;
}
.mycarousel {
    z-index: 1;
    height: 736px;
}
.us {
    z-index: 2;
    top: -219px;
}
.products{
    z-index: 2;
    top: -400px;
}
.imagen {
    z-index: 1;
    top: -575px;
}
.persons {
    z-index: 2;
    top: -790px;
}
.imagen2 {
    z-index: 1;
    top: -100px;
}

</style>
