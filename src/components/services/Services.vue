<template>
  <div style=" margin-bottom: 10px;">
    <v-col cols="12">
      <v-row
        justify="center"
        style="height: 50px; margin-top: 10px;"
      >
        <v-col
          md="3"
          style="color:#FCFCFC;"
        >
          <hr style="color:#FCFCFC;">
        </v-col>
        <v-col md="2">
          <v-row justify="center">
            <h3
              class="text-uppercase"
              style="margin-top: -14px; margin-left: 16px; color:grey;"
            >
              {{ $t('service') }}
              <br>
            </h3>
          </v-row>
        </v-col>
        <v-col
          md="3"
          style="color:#FCFCFC;"
        >
          <hr style="color:#FCFCFC;">
        </v-col>
      </v-row>
    </v-col>

    <v-row
      justify="center"
      align="center"
    >
      <v-row
        justify="center"
        align="center"
        style="max-width: 60vw"
      >
        <v-col
          v-for="(item, i) in images"
          :key="i"
          md="6"
          sm="12"
          lg="4"
          xl="4"
          cols="12"
        >
          <v-row justify="center">
            <button
              style="width:135px; height: 136px;"
              @click="() => pushRoute(item.pathTo)"
            >
              <v-img
                :src="`${baseUrl}${item.src}` ? `${baseUrl}${item.src}` : `${baseUrl}ampa- (1).png`"
              />
            </button>
          </v-row>
          <v-row justify="center">
            <h5 class="text-uppercase">
              {{ $t(item.name) }}
            </h5>
          </v-row>
        </v-col>
      </v-row>
    </v-row>
  </div>
</template>

<script>
  export default {
    components: {

    },
    data () {
      return {
        baseUrl: process.env.BASE_URL,
        images: [
          { src: 'ICONOS/icono-servicio-tecnico-02.png', name: 'servtech', pathTo: '/services/tech' },
          { src: 'ICONOS/icono-servicio-mecanica-02.png', name: 'servmec', pathTo: '/services/mec' },
          { src: 'ICONOS/icono-automatizacion-02.png', name: 'servaut', pathTo: '/services/auto' },
          // {src: "ICONOS/hammer-wrench.png", name: "Servicios Técnicos", pathTo: '/services/tech'},
          // {src: "ICONOS/equipo.png", name: "Servicios Mecánicos", pathTo: '/services/mec'},
          // {src: "ICONOS/automatizacion.png", name: "Servicios Automatización", pathTo: '/services/auto'}

        ],
      }
    },
    methods: {
      pushRoute: function (path) {
        if (path) this.$router.push({ path })
      },
    },
  }
</script>

<style scoped>
blockquote {
  padding: 3px 10px;
  border: red 3px solid;
  border-radius: 0px;
}

.mybutton{
  padding: 3px 7px;
  border-radius: 0px;
}
.mybutton:hover{
  border: red 3px solid;
  border-radius: 0px;
}
</style>

<!-- <v-row
    justify="center"
    align="center"
  >
    <v-row
      justify="center"
      align="center"
      style="max-width: 60vw"
    >
      <v-col
        v-for="(item, i) in images"
        :key="i"
      >
        <v-hover
          v-slot:default="{ hover }"
        >
          <v-card
            :elevation="hover ? 10 : 2"
            height="350"
            max-height="350"
            max-width="100%"
            min-width="250"
            class="mx-auto"
            tile
            :to="item.pathTo"
          >
            <v-img
              :src="`${baseUrl}${item.src}` ? `${baseUrl}${item.src}` : `${baseUrl}ampa- (1).png`"
              class="fill-height"
              :aspect-ratio="16/9"
            />
            <h4 class="text-uppercase" >{{item.name}}</h4>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-row> -->

  <!-- <v-row
      justify="center"
      style="height: 100%; "
    >
      <v-col
        md="2"
        sm="2"
        lg="3"
        xl="3"
        xs="1"
        class="text-uppercase"
      >
        <button
          style="z-index:5"
          class="mybutton"
          @click="() => pushRoute('/services/tech')"
        >
          <img src="../../../public/ICONOS/icono-servicio-tecnico-02.png" style="height: 66px;">

          <h4 class="text-uppercase" >Servicios Técnicos</h4>
        </button>
      </v-col>

      <v-col
        md="2"
        sm="2"
        lg="3"
        xl="3"
        xs="1"
        class="text-uppercase"
      >
        <button
          style="z-index:5"
          class="mybutton"
          @click="() => pushRoute('/services/mec')"
        >
          <img src="../../../public/ICONOS/icono-servicio-mecanica-02.png" style="height: 66px;">

          <h4 class="text-uppercase" >Servicios Mecánica</h4>
         </button>
      </v-col>
      <v-col
        md="2"
        sm="2"
        lg="3"
        xl="3"
        xs="1"
        class="text-uppercase"
      >
        <button
          style="z-index:5"
          class="mybutton"
          @click="() => pushRoute('/services/auto')"
        >
          <img src="../../../public/ICONOS/icono-automatizacion-02.png" style="height: 66px;">

          <h4 class="text-uppercase">Servicios Automática</h4>
        </button>
      </v-col>
    </v-row> -->
