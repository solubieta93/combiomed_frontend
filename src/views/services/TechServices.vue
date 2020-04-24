<template>
  <v-container
    fluid
    class="white_back pa-0 ma-0"
  >
    <v-img
      :src="`${baseUrl}servTech0.png`"
      :style="imageStyle"
    >
      <v-col
        class="d-flex flex-column-reverse ma-0 pa-0"
        style="height:100%"
      >
        <v-img
          :src="`${baseUrl}web-combiomed-historia-03.png`"
          height="16%"
          width="100vw"
          max-height="16%"

        />
      </v-col>
    </v-img>

    <!-- TITLE -->
    <v-col 
      cols="12"
      :class="{
        'xsOnlyColStyle' : $vuetify.breakpoint.xsOnly,
        'smAndDownColStyle' : $vuetify.breakpoint.smOnly,
        'mdAndUpColStyle' : $vuetify.breakpoint.mdAndUp,
        'xlOnlyColStyle' : $vuetify.breakpoint.xlOnly 
      }"
    >
      <v-row
        justify="center"
        style="height: 50px; color: grey;"
      >
        <v-col md="2">
          <hr>
        </v-col>
        <v-col md="3">
          <v-row
            justify="center"
          >
          <h3
            class="text-uppercase center"
            style="margin-top: -14px; margin-left: 16px;"
          >
            SERVICIO TÉCNICO
          </h3>
          </v-row>
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
      <v-col
      md="7"
      sm="11"
      lg="7"
      xl="7"
      cols="10"

      >
        <p class="text-justify">
          Servicios Técnicos a Equipos Médicos garantiza el servicio de postventa a los equipos médicos comercializados 
          por COMBIOMED. Con ingenieros y técnicos altamente calificados radicados en La Habana, Villa Clara y Las Tunas,
          realiza la instalación y mantenimiento preventivo y correctivo de los equipos de Cuba y el resto del mundo. 
          Además, capacita a personal médico y técnico en el uso de la tecnología.
          <br>
        </p>
      </v-col>
    </v-row>

      <v-img
        width="100vw"
        height="100%"
        :src="`${baseUrl}servTech1.png`"
      />
  </v-container>
</template>

<script>

  export default {
    components: {
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
      }
    },
    computed: {
      imageStyle () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return 'height:40vh; width:100vw;'
          case 'sm': return 'height:50vh; width:100vw;'
          case 'md': return 'height:60vh; width:100vw;'
          case 'lg': return 'height:80vh; width:100vw;'
          case 'xl': return 'height:80vh; width:100vw;'
        }
      },
    }
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
.my_container2 {
	margin:auto;
	width:70%;
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
	grid-auto-rows:200px;
}

.grid div{
	overflow:hidden;
}

.item-0{
	grid-row: 1/4;
    grid-column: 1/2;
	height: 100%;
}
.item-1{
	grid-row: 3/5;
    grid-column: 1/2;
	height: 100%;
}

.div_clients{
	font-family: helvetica;
	font-size: 16px;
}

.gridother{
	display:grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-gap: 24px;
	grid-auto-rows:200px;
}

.item1-0{
	grid-row: 1/2;
    grid-column: 1/2;
	/* height: 100%; */
}
.item1-1{
	grid-row: 1/2;
    grid-column: 2/3;
	/* height: 100%; */
}
.item1-2{
	grid-row: 1/2;
    grid-column: 3/4;
	/* height: 100%; */
}
.item1-3{
	grid-row: 2/3;
    grid-column: 1/2;
	/* height: 100%; */
}
.item1-4{
	grid-row: 2/3;
    grid-column: 2/4;
	/* height: 100%; */
}

.xsOnlyColStyle {
  margin-top:24%; 
}
.smAndDownColStyle {
  margin-top:10%; 
}
.mdAndUpColStyle {
  margin-top:10%; 
}
.xlOnlyColStyle {
  margin-top:10%; 
}
</style>
