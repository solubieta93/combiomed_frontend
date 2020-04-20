<template>
  <v-container fluid>
    <v-card
      tile
      elevation="0"
      class="pa-0"
      color="transparent"
    >
      <v-col cols="12">
        <v-row
          justify="center"
          style="height: 50px; color:#818080;"
        >
          <v-col md="3">
            <hr style="color:#818080;">
          </v-col>
          <v-col md="2">
            <v-row justify="center">
              <h3
                class="text-uppercase"
                style="margin-top: -14px; margin-left: 16px; "
              >
                quienes somos
                <br>
              </h3>
            </v-row>
          </v-col>
          <v-col md="3">
            <hr style="color:#818080;">
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
            la actualidad nos nombramos COMBIOMED Tecnología Médica Digital.
            <br>
          </p>
          <p class="text-justify">
            Tenemos referencia en el mercado nacional e internacional y brindamos soluciones tecnológicas
            seguras y asequibles para la salud. Nuestro objetivo es investigar, desarrollar, producir,
            comercializar y brindar servicio técnico a equipos electrónicos para la medicina, la automatización, etc.
          </p>
        </v-col>
      </v-row>
      <v-expand-transition>
        <div
          v-show="!readless"
          class="my_container"
        >
          <div class="grid">
            <div class="item-0">
              <h2>Génesis</h2>
              <h3> PRIMERA COMPUTADORA CUBANA: CID 201</h3>
              <p class="text-justify">
                El 18 de Abril de 1970 funcionó la primera computadora cubana. Más tarde, comenzó la producción
                de minicomputadoras como la CID 201A y CID 201B. Se produjeron más de 100 equipos, con los cuáles
                se logró el inicio del desarrollo de la automatización en nuestro centro, logrando automatizar
                centrales azucareros y otros centro de la economía nacional, tarea que sigue incrementándose posteriormente,
                con el diseño y producción de los primeros autómatas NODOREM.
              </p>
            </div>
            <div class="item-1">
              <img
                src="CID 201.png"
                alt="La primera computadora cubana CID 201"
                fill-height
              >
            </div>
          </div>
        </div>
      </v-expand-transition>

      <v-row
        justify="center"
        style="margin-bottom:1%;"
      >
        <v-btn
          text
          @click="readless = !readless"
        >
          {{ readless ? 'Leer más' : 'Leer menos' }}
        </v-btn>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        baseUrl: process.env.BASE_URL,
        readless: true,
      }
    },
  }
</script>

<style scoped>
div img{
  width:100%;
  height:100%;
  object-fit: fill;
}

.my_container {
  margin:auto;
  width:66%;
}
.grid{
  display:grid;
  grid-template-columns: repeat(2, 1fr);
/* grid-template-rows: repeat(5, 1fr); */
  grid-gap: 16px;
  column-gap: 16px;
  grid-auto-rows:200px;
}

.grid div{
  overflow:hidden;
}

.item-0{
  grid-row: 1/3;
  grid-column: 1/2;
  height: 100%;
}
.item-1{
  grid-row: 1/3;
  grid-column: 2/3;
  height: 100%;
}

</style>
