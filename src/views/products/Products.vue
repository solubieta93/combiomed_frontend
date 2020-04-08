<template>
  <v-img
    src="web-combiomed-historia-04.png"
    style="z-index: 2;"
  >
    <v-col cols="12">
      <v-row
        justify="center"
        style="height: 50px; margin-top: 135px; color: blue;"
      >
        <v-col md="3">
          <hr>
        </v-col>
        <v-col md="2">
          <h4
            class="text-uppercase"
            style="margin-top: -14px;"
          >
            Líneas de Productos
            <br>
          </h4>
        </v-col>
        <v-col md="3">
          <hr>
        </v-col>
      </v-row>
    </v-col>
    <div class="div_product">
      <div class="container">
        <div class="grid">
          <div class="item-0">
            <v-img
              src="ampa- (1).png"
              @click="goToProduct"
            >
              <v-overlay
                :absolute="absolute"
                :value="overlay"
                :opacity="opacity"
                color="#001A33"
                style="height: 141px; width:275px;left: 0px; top: 45px;"
              >
                <div style="margin-top: 15px;">
                  <h4 class="text-uppercase">
                    Lorem Ipsum
                  </h4>
                  <p>Scingelit, sed diam nonummy nibh euismod tincidunt ut laoree dolore magna ali....</p>
                  <p> 12.04.2020</p>
                </div>
              </v-overlay>
            </v-img>
          </div>
          <div class="item-1">
            <img src="ampa- (1).png">
          </div>
          <div class="item-2">
            <img src="ampa- (1).png">
          </div>
          <div class="item-3">
            <img src="ampa- (1).png">
          </div>
          <div class="item-4">
            <img src="ampa- (1).png">
          </div>
          <div class="item-5">
            <img src="ampa- (1).png">
          </div>
          <div class="item-6">
            <img src="ampa- (1).png">
          </div>

          <div class="item-7">
            <img src="ampa- (1).png">
          </div>
          <div class="item-8">
            <img src="ampa- (1).png">
          </div>
          <div class="item-9">
            <img src="ampa- (1).png">
          </div>
        </div>
      </div>
    </div>
  </v-img>
</template>
<script>
  export default {
    data () {
      return {
        absolute: true,
        opacity: 0.46,
        overlay: true,

      }
    },
    methods: {
      goToProduct: function () {
        this.$router.push('/product_description')
        console.log('Esto es una prueba')
      },

    },
  }
</script>
