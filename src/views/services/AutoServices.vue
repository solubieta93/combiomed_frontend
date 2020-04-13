<template>
  <v-container
    fluid
    class="white_back pa-0 ma-0"
  >
    <v-img
      :src="`${baseUrl}servAut0.png`"
      height="90vh"
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
    <v-col cols="12" style="margin-top:12%;">
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
            Servicio de Automatización
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
          Con más de cuatro décadas de experiencia, nuestro equipo de Automatización de COMBIOMED se
          ha dedicado a la investigación y desarrollo de productos con alto nivel de integración y
          soluciones novedosas para la automatización de la industria biotecnológica, edificios y
          equipos o sistemas especializados.
          <br>
        </p>
        <p class="text-justify">
          Nuestras soluciones están dedicadas en primer lugar al ahorro del consumo energético de las instalaciones,
          así como al incremento del confort, la fiabilidad y la seguridad de las mismas.
          <br>
        </p>
        <p class="text-justify">
          A lo largo de los años se ha acumulado una amplia experiencia en equipamientos y softwares de diferentes
          compañías, entre los que se incluyen: Iconics, Kepware, Siemens AG, Klockner Moeller, Circutor, Schneider
          Electric, Idec, Johnson Controls, Automated Logic Corporation, Phoenix Contact, Mettler Toledo y Thermibel.
          <br>
        </p>
      </v-col>
    </v-row>
    </v-img>


    <div
      fill-height
      style="max-height: 800px; z-index: 1; margin-top:-16%;"
    >
      <v-img
        width="auto"
        :src="`${baseUrl}servAut2.jpg`"
      />
    </div>
    
<v-img 
:src="`${baseUrl}web-combiomed-servicios-automatizacion-gris-04.png`" 
 style="margin-top:-7%; z-index: 2;"> 
    <div class="div_description">
      <div class="my_container">
        
        <div class="grid">
          <div class="item-0">
            <v-card
              tile
              elevation="0"
              color="transparent"
            >
              <v-card-title>
                PRINCIPALES LÍNEAS DE TRABAJO
              </v-card-title>
              <v-list
                color="transparent"
                dense
              >
                <v-list-item
                  v-for="item in lines"
                  :key="item"
                >
                  <v-list-item-icon>
                    <v-icon color="red">
                      mdi-star
                    </v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <p> {{ item }} </p>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card>
          </div>
          <div class="item-1">
            <v-card
              tile
              elevation="0"
              color="transparent"
            >
              <v-card-title>
                PROYECTOS "LLAVE EN MANO"
              </v-card-title>
              <v-card-text>
                <p class="text-justify">
                  Nuestra experiencia acumulada en este campo, nos permite realizar trabajos que van
                  desde la oferta para la licitación hasta la entrega del sistema.
                  <br>
                </p>
                <p class="text-justify">
                  Nuestras ofertas son de gran alcance e incluyen dentro de sus puntos de contratación
                  renglones como: equipamiento, programas para sistemas de supervisión y control,
                  elementos de campo, cables y accesorios, ofertados con los mejores precios.
                  <br>
                </p>
                <p class="text-justify">
                  Una vez entregado el sistema, nuestros especialistas dan un especial y riguroso seguimiento
                  a la explotación del mismo por el período de un año, la garantía cubre dicha etapa.
                  <br>
                </p>
                <p class="text-justify">
                  Brindamos un mantenimiento especializado con el cual le garantizamos al
                  cliente la continua explotación de la solución.
                  <br>
                </p>
              </v-card-text>
            </v-card>
          </div>
          <div class="item-2">
            <v-img class="fill-height"
               :src="`${baseUrl}servAut4.png`"
            />
          </div>
          <div class="item-3">
            <v-img class="fill-height"
               :src="`${baseUrl}servAut5.png`"
            />
          </div> 
        </div>
        
      </div>
    </div>
    </v-img>

    <div style="height: 700px; margin-top: -6%;">
      <v-img
        class="fill-height"
        :src="`${baseUrl}servAut3.png`"
      />
    </div>

    <div>
      <v-img
        contain
        style="margin-top:-77px"
        :src="`${baseUrl}web-combiomed-historia-03.png`"
      />
      <v-col
        cols="12"
        style="margin-bottom: 50px;"
      >
        <v-row
          justify="center"
          style="height: 50px; margin-top: 10px; color: grey;"
        >
          <v-col md="7">
            <h3
              class="text-uppercase"
              style="margin-left: 16px;"
            >
              NUESTROS CLIENTES
              <br>
            </h3>
          </v-col>
        </v-row>
        <v-row
          v-for="(item1,i) in this.clients"
          :key="i"
          justify="center"
          style="height: 50px; color: grey;"
        >
          <v-col
            v-if="i!==0 && i!==2"
            md="7"
          >
            <h5
              style="margin-left: 16px;"
            >
              {{ item1 }}
              <br>
            </h5>
          </v-col>
          <v-col
            v-if="i===0 || i===2"
            md="7"
          >
            <h4
              style="margin-left: 16px;"
            >
              {{ item1 }}
              <br>
            </h4>
          </v-col>
        </v-row>
      </v-col>
    </div>

    <images :images="imagesClients" />
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
        lines: [
          'Ejecución de proyectos llave en mano.',
          'Soluciones de control de equipos, líneas de producción y edificios inteligentes.',
          'Desarrollo de software para diferentes aplicaciones.',
          'Diseño y Producción de pizarras eléctricas.',
          'Mantenimiento o reparación de sistemas y equipos electrónicos especializados.',
          'Asesoría técnica.',
        ],
        clients: [
          'Hoteleras',
          'Hotel Palco, Residencial Club Habana, Hotel Melias las Antillas, Hotel Royalton Hicacos, Hotel Blau Varadero.',
          'Centros de Biotecnología y Laboratorios de Fabricación de Medicamentos. ',
          'Centro Nacional de Biopreparados (BioCen), AICA, Laboratorios MEDSOL, Centro Ingeniería Genética y Biotecnología (CIGB) y Centro de Neurociencias de Cuba (CNEURO).',
        ],
        imagesClients: [
          'servicesAuto/client1.jpg',
          'servicesAuto/client2.jfif',
          'servicesAuto/client3.png',
          'servicesAuto/client4.jpg',
          'servicesAuto/client5.png',
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
    margin-top: 7%;
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
