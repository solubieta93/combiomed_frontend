
    <div class="us">
      <v-card
        tile
        elevation="0"
        color="transparent"
        class="mx-auto"
      >
        <v-img
          src="../../public/web-combiomed-avanzada-07-07.png"
        >
          <v-row
            align="center"
            class="lightbox black--text pa-12 fill-height"
          >
            <v-col>
              <p class="text-uppercase font-weight-black headline">
                Nosotros
              </p>
              <p>Somos una empresa bla bla</p>
            </v-col>
          </v-row>
        </v-img>

        <v-row>
          <v-col
            md="6"
            class="ml-md-auto"
          >
            <v-img
              height="200"
              width="300"
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col
            class="ma-6 pa-3"
          >
            <v-card-title>Misión y Visión</v-card-title>
            <v-card-text>Somos una empresa bla bla</v-card-text>
          </v-col>
        </v-row>
      </v-card>
    </div>

    <div class="products">
      <!-- <v-card
        color="transparent"
        tile
        elevation="0"
        class="mx-auto"
      > -->
      <v-img
        src="../../public/web-combiomed-avanzada-07.png"
      >
        <!-- <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
          > -->
        <v-row
          align="center"
          justify="center"
        >
          <v-card
            v-for="n in 4"
            :key="n"
            class="ma-3 pa-2"
            color="transparent"
            tile
            elevation="0"
          >
            <v-img
              height="200"
              width="200"
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            />
            <v-card-text>
              <p>descripcion de los productos</p>
            </v-card-text>
          </v-card>
        </v-row>
        <!-- </v-col>
        </v-row> -->
      </v-img>
      <!-- </v-card> -->
    </div>
    <div class="imagen">
      <v-carousel
        hide-delimiters
        cycle
      >
        <v-carousel-item
          v-for="(item,i) in combiomed_equipos"
          :key="i"
          :src="`${baseUrl}equipos/equipo ${item}.jpg`"
          height="100%"
        />
      </v-carousel>
      <!-- <img
        width="100%"
        height="100%"
        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      > -->
    </div>
    <div class="persons">
      <v-img
        src="../../public/web-combiomed-avanzada-07-07.png"
      >
        <v-carousel
          hide-delimiters
          cycle
        >
          <v-carousel-item
            v-for="n in items.length/3"
            :key="n"
          >
            <v-row
              class="fill-height"
              align="center"
              justify="center"
            >
              <v-col
                cols="12"
                align-self="center"
                justify-self="center"
              >
                <v-row
                  align="center"
                  justify="center"
                >
                  <v-card
                    v-for="i in items.length/3"
                    :key="i"
                    color="transparent"
                    light
                    tile
                    elevation="0"
                    class="ma-6 pa-4"
                  >
                    <v-img
                      height="200"
                      width="300"
                      :src="items[3*(n-1) + (i-1)].src"
                    />
                    <v-card-subtitle>
                      {{ items[3*(n-1) + (i-1)].description }}

                      {{ n }}
                      {{ i }}
                      {{ 3*(n-1) + (i-1) }}
                    </v-card-subtitle>
                    <v-card-text>
                      <div>{{ items[3*(n-1) + (i-1)].telefono }}</div>
                      <div>{{ items[3*(n-1) + (i-1)].fax }}</div>
                      <div>{{ items[3*(n-1) + (i-1)].email }}</div>
                    </v-card-text>
                  </v-card>
                </v-row>
              </v-col>
            </v-row>
          </v-carousel-item>
        </v-carousel>
      </v-img>
    </div>
    <div class="imagen2">
      <img
        width="100%"
        height="100%"
        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      >
    </div>
    <div class="myfooter">
      <v-img
        height="100%"
        src="../../public/web-combiomed-avanzada-07-07-07.png"
      />
    </div>