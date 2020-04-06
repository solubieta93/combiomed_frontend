<template>
  <v-container
    fluid
    class="fill-height overflow-y-auto  pa-0 ma-0"
  >
    <v-img
      src="../../public/web-combiomed-futer-04-04.png"
      class="fill-height pa-0 ma-0"
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
            <h5 style="    color: white;">
              Enviar ahora
            </h5>
          </v-btn>
        </v-col>
      </v-row>
    </v-img>
  </v-container>
</template>

<script>
  import Navbar from '@/components/Navbar'
  import Carousel_Portada from '@/components/Home/Carousel_Portada'
  import Footer from '@/components/footer'

  export default {
    components: {
      Navbar,
      Carousel_Portada,
      Footer,
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
