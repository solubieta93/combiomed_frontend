<template>
  <v-hover
    :key="item.id"
    v-slot:default="{ hover }"
  >
    <v-card
      :elevation="hover ? 12 : 2"
      height="350"
      max-width="350"
      min-width="250"
    >
      <v-img
        :src="item.image ? item.image : `${baseUrl}ampa- (1).png`"
        class="fill-height"
        :aspect-ratio="16/9"
      >
        <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
            style="height: 50%"
          >
            <v-btn
              text
              large
              color="white"
              class="div_product"
              :to="pathTo"
            >
              Leer Mas
            </v-btn>
          </div>
          <v-overlay
            :absolute="true"
            :value="true"
            :opacity="0.46"
            color="#001A33"
            :style="style"
          >
            <div>
              <h3 class="text-uppercase">
                {{ item.title }}
              </h3>
              <h3>{{ item.description }}</h3>
              <h3 v-if="item.owner">Autor: {{ item.owner }}</h3>}
            </div>
          </v-overlay>
        </v-expand-transition>
      </v-img>
    </v-card>
  </v-hover>
</template>

<script>
  export default {
    name: 'ItemPreview',
    props: {
      item: {
        // type: {
        //   id: Number | String,
        //   image: String,
        //   title: String,
        //   description: String,
        //   owner: Object,
        // },
        type: Object,
        required: true,
      },
      height: {
        type: Number,
        default: 300,
      },
      width: {
        type: Number,
        default: 200,
      },
      style: {
        type: String,
        default: null,
      },
      class: {
        type: String,
        default: null,
      },
      pathTo: {
        type: String,
        default: null,
      },
    },
    data: () => ({
      baseUrl: process.env.BASE_URL,

    }),
  }
</script>
