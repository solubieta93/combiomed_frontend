<template>
  <v-container
    fluid
    class="white_back pa-0 ma-0"
  >
    <v-img
      :src="`${baseUrl}servicesMec/servMec0.png`"
      height="80vh"
    />
    <!-- <v-img
      :src="`${baseUrl}web-combiomed-historia-03.png`"
      style="top:-48px"
    /> -->
    <v-img
      :src="`${baseUrl}web-combiomed-servicios-mecanica&automatizacion.png`"
      style="margin-top:-5%; z-index:2; "
    >
    <!-- TITLE -->
    <v-col cols="12" style="margin-top:10%;">
      <v-row
        justify="center"
        style="height: 50px; color: grey;"
      >
        <v-col md="2">
          <hr>
        </v-col>
        <v-col md="3">
          <h3
            class="text-uppercase"
            style="margin-top: -14px; margin-left: 16px;"
          >
            Servicio de Mecánica
            <br>
          </h3>
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
      <v-col md="7">
        <p class="text-justify">
          COMBIOMED Tecnología Médica Digital incluye facilidades para la producción electromecánica, 
          soportado por décadas de experiencia con las más modernas tecnologías para la fabricación de
          partes mecánicas de alta calidad para equipos médicos y otros. La PPM de la empresa COMBIOMED 
          Tecnología Médica Digital brinda los siguientes servicios:
          <br>
        </p>
        <h4 class="text-justify text-uppercase" style="color= grey;">
          CONFORMADO EN FRÍO 
          <br>
        </h4>
        <p class="text-justify">
          Es un proceso que se trabaja solo en chapas de diferentes materiales, entre ellos: 
          metales como aluminio, acero y acero inoxidable y horiblen. Se utiliza para la producción de soportes,
          estructuras metálicas, rejas, medios de protección, etc.
        </p>
        <p class="text-justify">
          Para el conformado en frío la maquinaria es la siguiente:   
          <br>
        </p>
        <p class="text-justify">
            - Cizalla para cortar chapas de hasta 4 mm
        </p>
        <p class="text-justify">
            - Multiponchadora TRUMP 1000 de planchas de metales de 2000x1000x3 mm.
        </p>
        <p class="text-justify">
            - Press Brake para doblar metal de hasta 2 metros de ancho 
        </p>
        <p class="text-justify">
            - Dobladora de tubos para tuberías de diámetro 25 mm.
        </p>
      </v-col>
    </v-row>
    </v-img>

    <div
      fill-height
      style="max-height: 800px; z-index: 1; margin-top:-10%;"
    >
      <v-img
        width="auto"
        :src="`${baseUrl}servicesMec/servMec1.png`"
      />
    </div>
    <v-img
        contain
        style="margin-top:-77px"
        :src="`${baseUrl}web-combiomed-historia-03.png`"
      />
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
              MAQUINADO 
              <br>
            </h3>
            <p class="text-justify">
              Es un proceso de desprendimiento de virutas para barras de diferentes materiales como: 
              aluminio, latón (piezas hidráulicas), bronce fosfórico (bujes), acero, acero inoxidable, 
              acrílico PVC, entre otros plásticos que utiliza:
            </p>
            <p class="text-justify">
              - Maquinaria de tres tornos convencionales de pequeño, mediano y largo alcance para trabajar piezas en revoluciones.    
              <br>
            </p>
            <p class="text-justify">
                - Tres fresas universales para diferentes piezas (cuadradas, circular, piñones, etc.)
            </p>
            <p class="text-justify">
                - Taladro de banco 
            </p>
            <p class="text-justify">
                - Taladro de columna 
            </p>
            <p class="text-justify">
                - Taladro radial
            </p>
            <h3 class="text-uppercase">
              RECTIFICADO CILÍNDRICO Y PLANO 
              <br>
            </h3>
            <p class="text-justify">
              Proceso para trabajar piezas pequeñas con eje (cilíndricas) y todo tipo de piezas planas.
            </p>
            <h3 class="text-uppercase">
              PINTURA ELECTROSTÁTICA 
              <br>
            </h3>
            <p class="text-justify">
              Se utiliza pintura en polvo de alta calidad mediante corriente y fluido de aire solo para piezas metálicas de cualquier tamaño.
            </p>
            <h3 class="text-uppercase">
                SOLDADURA   
              <br>
            </h3>
            <p class="text-justify">
              - Soldadura argón para aluminio
            </p>
            <p class="text-justify">
              - Soldadura eléctrica para acero (es un servicio que se puede ofrecer in situ) 
            </p>
            <p class="text-justify">
              - Soldadura con oxígeno de acetileno para acero
            </p>
            <p class="text-justify">
              - Soldadura con máquina de puntear para acero
            </p>
            <h3
                  class="text-uppercase"
                >
                DISEÑO MECÁNICO  
              <br>
            </h3>
            <p class="text-justify">
              Se utiliza para el diseño de piezas mecánicas el programa Autodesk Inventor.
            </p>
          </v-col>
        </v-row>
      </v-col>
    </div>

    <!-- AQUI DEBEN IR 5 IMAGENES DE LAS 5 MAQUINAS -->
    <images :images="imagesMachine"/>
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
  }
</script>

<style scoped>
.white_back {
  background-color: white !important;
}

.myimg{
    width:100%;
    height:50%;
    object-fit: fill;
}

.my_container {
    margin:auto;
    width:70%;
    min-height: 900px;
}

.div_description{
    font-family: helvetica;
    font-size: 16px;
    background-color: grey !important;
}

.grid{
    display:grid;
    grid-template-columns: repeat(2, .5fr);
    /* grid-template-rows: repeat(5, 1fr); */
    grid-gap: 5px;
    column-gap: 16px;
    grid-auto-rows:50px;
}

.grid div{
	overflow:hidden;
}

.item-0{
	grid-row: 2/9;
    grid-column: 1/2;
	height: 100%;
}
.item-1{
	grid-row: 10/17;
    grid-column: 1/2;
	height: 100%;
}

.item-2{
	grid-row: 2/12;
  grid-column: 2/5;
	height: 100%;
}
.item-3{
	grid-row: 12/19;
    grid-column: 2/4;
	height: 100%;
}

</style>
