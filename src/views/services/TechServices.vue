<template>
  <v-container
    fluid
    class="white_back pa-0 ma-0"
  >
    <v-img
      :src="`${baseUrl}servTech0.png`"
      max-height="90vh"
      width="100vw"
    />
    <v-img
      :src="`${baseUrl}web-combiomed-historia-03.png`"
      style="top:-48px"
    />

    <!-- TITLE -->
    <v-col cols="12">
      <v-row
        justify="center"
        style="height: 50px; color: grey;"
      >
        <v-col md="2">
          <hr>
        </v-col>
        <v-col md="3">
          <h3
            class="text-uppercase center"
            style="margin-top: -14px; margin-left: 70px;"
          >
            SERVICIO TÉCNICO
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
          Nuestra institución fue creada en 1969 con el nombre de Centro de Investigaciones Digitales (CID),
          más tarde Instituto Central de Investigación Digital (ICID), con el objetivo de desarrollar la primera
          computadora cubana. Desde diciembre de 2018 y hasta la actualidad funcionamos bajo el nombre COMBIOMED:
          empresa de tecnología médica digital.
          <br>
        </p>
        <p class="text-justify">
          Tenemos referencia en el mercado nacional e internacional y brindamos soluciones tecnológicas seguras
          y asequibles para la salud. Nuestro objetivo es investigar, desarrollar, producir, comercializar y brindar
          servicio técnico a equipos electrónicos, de automatización destinados a la medicina, la biotecnología, etc.
          <br>
        </p>
      </v-col>
    </v-row>

    <div
      fill-height
      style="min-height: 500px;"
    >
      <v-img
        width="auto"
        :src="`${baseUrl}servTech1.png`"
      />
    </div>
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
</style>
