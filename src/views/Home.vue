<template>
  <v-container
    fluid
    class="pa-0 ma-0 white_back"
  >
    <carousel-portada />

    <!-- <v-img
        src="web-combiomed-historia-03.png"
        style="top:-46px"
    /> -->

    <!-- QUIENES SOMOS -->
    <accordion id="us" />

    <v-img
      :src="`${baseUrl}web-combiomed-historia-03.png`"
      height="16%"
      width="100vw"
      max-height="16%"
      class="image-rotation"
    />

    <!-- PRODUCTOS -->
    <products-line />

    <v-img
      :src="`${baseUrl}web-combiomed-historia-03.png`"
      height="16%"
      width="100vw"
      max-height="16%"
    />

    <!-- SERVICIOS -->
    <services />

    <v-img
      :src="`${baseUrl}web-combiomed-historia-03.png`"
      height="16%"
      width="100vw"
      max-height="16%"
      class="image-rotation"
    />

    <!-- NOTICIAS Y EVENTOS -->
    <v-row>
      <v-col>
        <v-col justify-self="center">
          <v-row style="margin-top:15px;">
            <v-col cols="12">
              <v-row
                justify="center"
                style="height: 50px; color:#293D66;"
              >
                <v-col md="3">
                  <hr style="color:#293D66;">
                </v-col>
                <v-col md="2">
                  <h3
                    class="text-uppercase"
                    style="margin-top: -14px; margin-left: 16px; "
                  >
                    Noticias y Eventos
                    <br>
                  </h3>
                </v-col>
                <v-col md="3">
                  <hr style="color:#293D66;">
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
        <!-- <div class="mycontainer"> -->
        <principal-news-and-events />
        <!-- </div> -->
        <v-row
          justify="center"
          style="margin-bottom:1%;"
        >
          <v-btn
            text
            to="/news"
          >
            <p style="color:#293D66;">
              Ver todas las noticias
            </p>
          </v-btn>
        </v-row>
      </v-col>
    </v-row>

    <v-img
      :src="`${baseUrl}web-combiomed-historia-03.png`"
      height="16%"
      width="100vw"
      max-height="16%"
    />
    <!-- CONTACTOS -->
    <contact />
  </v-container>
</template>

<script>
  import CarouselPortada from '@/components/utils/CarouselPortada'
  import Services from '@/components/services/Services'
  import PrincipalNewsAndEvents from '@/components/newsAndevents/PrincipalNewsAndEvents'
  import ProductsLine from '@/components/product/ProductsLine'
  import Accordion from '@/components/utils/Accordion'
  import Contact from '@/components/contacts/ContactsDescription'

  export default {
    components: {
      CarouselPortada,
      Accordion,
      PrincipalNewsAndEvents,
      Services,
      ProductsLine,
      Contact,
    },
    data () {
      return {
        baseUrl: process.env.BASE_URL,
        style_d: 'height: 370px;',
      }
    },
    methods: {
      my: function () {
        this.style_d = 'height: 640px;'
        var leer = document.getElementById('leer')
        leer.style.display = 'none'
        var button = document.getElementById('button1')
        button.className += 'show'
      },
    },
  }
</script>

<style scoped>
.white_back {
  background-color: white !important;
}
.image-rotation {
  transform: rotate(180deg);
}

.mycontainer {
	margin:auto;
	width:60%;
}

div {
    position: relative;
}
a{
  text-align: center;
}
#button1 {
    overflow: hidden;

}

#button1 #col1 p {
    text-align: justify;
    height: 100px;
    color: grey;
}

#button1 #col1 h2 {
    text-align: center;
}

#button1 #col2 img {
    height: 340px;
}

.containerAcordeon {
    color: grey;

}

.containerAcordeon #button1 {
    display: flex;
    justify-content: center;

    height: 400px;

    opacity: 0;
}

#button1 .col {
    flex-basis: 35%;
}
.show {
    animation:acordeon 2s;
    animation-fill-mode: forwards;
}
@keyframes acordeon {
  0% {
      height:0;
      opacity: 0;
  }

  100% {
      height:300px;
      opacity: 1;
  }
}
</style>
