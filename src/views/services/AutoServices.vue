<template>
  <v-container
    fluid
    class="white_back pa-0 ma-0"
  >
    <v-img
      :src="`${baseUrl}servAut0.png`"
      :style="imgStyle"
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
    >
      <v-row
        justify="center"
        style="height: 50px; color: grey;"
      >
        <v-col md="2">
          <hr>
        </v-col>
        <v-col md="3">
          <v-row justify="center">
            <h3
              class="text-uppercase"
              style="margin-top: -14px; margin-left: 16px;"
            >
              {{ $t('servaut') }}
              <br>
            </h3>
          </v-row>
        </v-col>
        <v-col md="2">
          <hr>
        </v-col>
      </v-row>

      <v-row
        justify="center"
        style=" color: grey; margin-bottom:5%;"
      >
        <v-col md="7">
          <p class="text-justify">
            {{ $t('servAutoText1') }}
            <br>
          </p>
          <p class="text-justify">
            {{ $t('servAutoText2') }}
            <br>
          </p>
          <p class="text-justify">
            {{ $t('servAutoText3') }}
            <br>
          </p>
        </v-col>
      </v-row>
    </v-col>

    <!-- <v-img
      :src="`${baseUrl}servAut2.jpg`"
      height="100%"
      width="100vw"
    >
    </v-img> -->

    <v-img
      :src="`${baseUrl}web-combiomed-historia-032.png`"
      height="16%"
      width="100vw"
      max-height="16%"
      class="image-rotation"
    />

    <div class="my_container">
      <v-row :style="rowProjectStyle">
        <v-col
          sm="12"
          lg="5"
          xl="6"
          cols="12"
        >
          <v-row
            align="center"
            style="justify-content:center;"
          >
            <v-card
              tile
              elevation="0"
              color="transparent"
            >
              <v-card-title>
                {{ $t('jobLines')}}
              </v-card-title>
              <v-list
                color="transparent"
                dense
              >
                <v-list-item
                  v-for="item in lines"
                  :key="item"
                >
                  <li> {{ $t(item) }} </li>
                </v-list-item>
              </v-list>
            </v-card>
          </v-row>
        </v-col>

        <v-col
          sm="12"
          lg="7"
          xl="6"
          cols="12"
        >
          <v-row
            align="center"
            style="justify-content:center;"
          >
            <v-col
              sm="12"
            >
              <v-img
                :src="`${baseUrl}servAut4.png`"
                :style="cicloImageStyle"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <v-row :style="rowProjectStyle2">
        <v-col
          sm="12"
          lg="7"
          xl="6"
          cols="12"
        >
          <v-row
            align="center"
            justify="center"
          >
            <v-card
              tile
              elevation="0"
              color="transparent"
            >
              <v-card-title>
                {{ $t('projectLlave')}}
              </v-card-title>
              <v-list
                color="transparent"
              >
                <v-list-item
                  v-for="item in project"
                  :key="item"
                >
                  <li> {{ $t(item) }} </li>
                </v-list-item>
              </v-list>
            </v-card>
          </v-row>
        </v-col>

        <v-col
          sm="12"
          lg="5"
          xl="6"
          cols="12"
        >
          <v-row
            align="center"
            style="justify-content:center;"
          >
            <v-col
              sm="10"
            >
              <v-img
                :src="`${baseUrl}servAut5.png`"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>

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
    </div>

    <div>
      <v-col
        cols="12"
        style="margin-bottom: 50px;"
      >
        <v-row
          justify="center"
          style="height: 50px; margin-top: 10px; color: grey;"
        >
          <v-col
            sm="12"
            md="7"
            lg="6"
            xl="6"
            cols="12"
          >
            <h3
              class="text-uppercase"
            >
              {{ $t('clientsText') }}
              <br>
            </h3>
          </v-col>
        </v-row>
        <v-row
          v-for="(item1,i) in clients"
          :key="i"
          justify="center"
          style=" color: grey;"
        >
          <v-col
            v-if="i!==0 && i!==2"
            sm="12"
            md="7"
            lg="6"
            xl="6"
            cols="12"
          >
            <v-row>
              <h5
                style="margin-left: 16px;"
              >
                {{ $t(item1) }}
                <br>
              </h5>
            </v-row>
          </v-col>
          <v-col
            v-if="i===0 || i===2"
            sm="12"
            md="7"
            lg="6"
            xl="6"
            cols="12"
          >
            <v-row>
              <h4
                style="margin-left: 16px;"
              >
                {{ $t(item1) }}
                <br>
              </h4>
            </v-row>
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
          'lines1',
          'lines2',
          'lines3',
          'lines4',
          'lines5',
          'lines6',
        ],
        project: [
          'projects1',
          'projects2',
          'projects3',
          'projects4',
        ],
        clients: [
          'clientsItem1',
          'clientsItem2',
          'clientsItem3',
          'clientsItem4',
        ],
        imagesClients: [
          `servicesAuto/client1.jpg`,
          `servicesAuto/client2.jfif`,
          `servicesAuto/client3.png`,
          `servicesAuto/client4.jpg`,
          `servicesAuto/client5.png`,
        ],
      }
    },
    computed: {
      imgStyle () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return 'height:100%; width:100vw'
          case 'sm': return 'height:100%; width:100vw'
          case 'md': return 'height:100%; width:100vw'
          case 'lg': return 'height:80vh; width:100vw'
          case 'xl': return 'height:80vh; width:100vw'
        }
      },
      rowStyle () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return 'margin-top: 60%;"'
          case 'sm': return 'margin-top: 18%;"'
          case 'md': return 'margin-top: 10%;"'
          case 'lg': return 'margin-top: 10%;"'
          case 'xl': return 'margin-top: 8%;"'
        }
      },
      rowProjectStyle () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return 'margin-right: 1%; margin-left: 1%; padding-top: 5%;'
          case 'sm': return 'margin-right: 3%; margin-left: 12%; padding-top: 5%;'
          case 'md': return 'margin-right: 10%; margin-left: 1%; padding-top: 5%;'
          case 'lg': return 'margin-right: 10%; margin-left: 5%; padding-top: 15%;'
          case 'xl': return 'margin-right: 8%; margin-left: 1%; padding-top: 25%;'
        }
      },
      cicloImgeStyle () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return 'height:100%; width:100vw;'
          case 'sm': return 'height:100%; width:100vw;'
        }
      },
      rowProjectStyle2 () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return 'margin-right: 1%; margin-left: 1%;'
          case 'sm': return 'margin-right: 3%; margin-left: 12%;'
          case 'md': return 'margin-right: 10%; margin-left: 1%;'
          case 'lg': return 'margin-right: 10%; margin-left: 5%;'
          case 'xl': return 'margin-right: 8%; margin-left: 8%;'
        }
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

.xsOnlyStyle1 {
  margin-top:-27%;
  z-index:2;
}
.smAndDownStyle1 {
  margin-top:-10%;
  z-index:2;
}
.mdAndUpStyle1 {
  margin-top:-5%;
  z-index:2;
}
.xlOnlyStyle1 {
  margin-top:-5%;
  z-index:2;
}

.xsOnlyStyle2 {
  margin-top:-33%;
  z-index:2;
}
.smAndDownStyle2 {
  margin-top:-14%;
  z-index:2;
}
.mdAndUpStyle2 {
  margin-top:-7%;
  z-index:2;
}
.xlOnlyStyle2 {
  margin-top:14%;
  z-index:2;
}

.xsOnlyColStyle {
  margin-top:1%;
}
.smAndDownColStyle {
  margin-top:1%;
}
.mdAndUpColStyle {
  margin-top:1%;
}
.xlOnlyColStyle {
  margin-top:1%;
}

.myimg{
    width:100%;
    height:50%;
    object-fit: fill;
}

.my_container {
    margin:auto;
    background-color: grey !important;
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
	grid-row: 2/10;
    grid-column: 1/2;
	height: 100%;
}
.item-1{
	grid-row: 9/17;
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
