<template>
  <v-container>
    <v-row
      class="fill-height"
      align="start"
      justify="space-between"
    >
      <v-col
        cols="12"
        md="5"
        lg="4"
        class="mb-4"
      >
        <v-card class="pb-4">
          <div class="fill-height pa-3 card-selector">
            <v-row
              class="fill-height"
            >
              <v-col
                cols="5"
                class="text-center"
              >
                <v-row
                  class="fill-height"
                  align="center"
                  justify="center"
                >
                  <div class="text-center">
                    <v-img
                      width="110"
                      height="100"
                      :src="`${baseUrl}ananda_icon.svg`"
                      contain
                    />
                  </div>
                </v-row>
              </v-col>
              <v-col cols="7">
                <v-row
                  class="fill-height"
                  align="center"
                  justify="center"
                >
                  <div class="text-center white--text title text-uppercase mt-2">
                    <span class="font-weight-light">Tatiana</span> Ventoso
                  </div>
                  <div class="mt-2 text-center">
                    <v-chip
                      outlined
                      color="white"
                    >
                      <div class="text-uppercase subheading white--text text-center">
                        master
                      </div>
                    </v-chip>
                  </div>
                </v-row>
              </v-col>
            </v-row>
          </div>
          <div class="pa-3">
            <v-row
              class="fluid"
            >
              <v-col cols="6">
                <div class="grey--text text-center">
                  Reviews
                </div>
              </v-col>
              <v-col cols="6">
                <div class="grey--text text-center">
                  Retention
                </div>
              </v-col>
              <v-col cols="6">
                <v-row
                  align="center"
                  justify="center"
                >
                  <column-chart
                    :data="[['Sun', 32], ['Mon', 46], ['Tue', 28]]"
                    :colors="['rgba(173, 20, 87, 0.77)']"
                    height="150px"
                    :legend="false"
                    :library="options"
                    :discrete="false"
                    width="80%"
                  />
                </v-row>
              </v-col>
              <v-col
                cols="6"
                class="align-self-center"
              >
                <div style="position: relative; z-index: 0">
                  <pie-chart :height="130" />
                  <div class="centered title accent--text">
                    55%
                  </div>
                </div>
              </v-col>
            </v-row>
          </div>
          <v-row

            align="center"
          >
            <v-menu
              class="block pr-4 pl-4"
              transition="slide-x-transition"
            >
              <v-btn
                slot="activator"
                outlined
                class="block"
                color="primary"
                light
              >
                Show Facialist Data
              </v-btn>
              <v-list>
                <v-list-tile
                  v-for="(facialist, i) in facialists"
                  :key="i"
                  @click="rotation"
                >
                  <v-list-tile-title>{{ facialist.name }}</v-list-tile-title>
                </v-list-tile>
              </v-list>
            </v-menu>
          </v-row>
        </v-card>
      </v-col>
      <v-spacer />
      <v-col
        cols="12"
        md="2"
        class="mr-3 mb-3"
      >
        <v-card hover>
          <v-card-text class="sumary">
            <div class="grey--text subheading text-uppercase text-right">
              RANKING WEEK
            </div>
            <div
              style="line-height: 1.10em"
              class="display-2 font-weight-light text-right"
            >
              4500
            </div>
            <div class="caption grey--text text-uppercase text-right">
              <span>dec 09 - dec 16</span>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col
        cols="12"
        md="2"
      >
        <v-row>
          <v-col
            cols="12"
            md="2"
            class="pb-3"
          >
            <v-card hover>
              <v-card-text class="text-right py-2 sumary">
                <div class="caption grey--text text-uppercase mb-1">
                  Present Week
                </div>
                <div class="title text-uppercase font-weight-regular">
                  2000
                </div>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col
            cols="12"
            md="2"
          >
            <v-card hover>
              <v-card-text class="text-right py-2 sumary">
                <div class="caption grey--text text-uppercase mb-2">
                  Historic Total
                </div>
                <div class="title text-uppercase font-weight-regular">
                  1500
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col
        cols="12"
        md="1"
      >
        <v-row

          align="center"
        >
          <v-row

            align="center"
          >
            <div class="text-center">
              <v-img
                width="90"
                height="90"
                :src="`${baseUrl}Ranking_Badge_circle.svg`"
              >
                <v-col class="pt-4 mt-1 text-center">
                  <div class="white--text">
                    <span class="display-1">3</span>
                  </div>
                </v-col>
              </v-img>
            </div>
            <div class="mt-2 text-center">
              <v-chip outlined>
                <div class="text-uppercase title grey--text text-center">
                  starter
                </div>
              </v-chip>
            </div>
          </v-row>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import Chart from 'chart.js'
  import 'chartjs-plugin-datalabels'
  // import DonutChart from "@/components/DonutChart";
  // import BarChart from "@/components/BarChart";
  import PieChart from '@/components/PieChart'

  // Configs of Chart JS
  Chart.defaults.scale.gridLines.display = false

  Chart.defaults.scale.ticks.display = false

  // Configure Chart JS label plugin

  Chart.defaults.global.plugins.datalabels.anchor = 'end'
  Chart.defaults.global.plugins.datalabels.align = 'end'

  export default {
    components: {
      //    DonutChart,
      //    BarChart,
      PieChart,
    },
    data () {
      return {
        baseUrl: process.env.BASE_URL,
        options: {
          scales: {
            yAxes: [
              {
                display: false, // this will remove all the y-axis grid lines
              },
            ],
          },
        },
        facialists: [
          {
            name: 'Tatiana Ventoso',
          },
          {
            name: 'Hilda Bello',
          },
        ],
        selected: null,
      }
    },
    computed: {

      rotation () {
        let val = 3
        return val - Math.PI
      },
      rankingPoints () {
        return this.$store.state.rankingTest
      },
      modFacialists () {
        var mod = this.facialists.forEach(e => {
          console.log(e)
          for (var key in e) {
            console.log(key)
            if (key === 'name') {
              key = 'text'
            }
          }
        })
        console.log(mod)
        return mod
      },

    },
  }
</script>

<style scoped>
.sumary {
  border-left: 8px solid black;
}

.card-selector {
  background-image: linear-gradient(
    rgba(173, 20, 87, 0.77),
    rgba(173, 20, 87, 0.77)
  );
  height: 150px;
}

.relative-container {
  position: relative;
  text-align: center;
  color: white;
  z-index: 2;
}

.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
  transform: translate(-50%, -50%);
}

.block {
  height: 50px;
  width: 94%;
}
</style>
