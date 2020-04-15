<template>
  <v-hover
    :key="item.id"
    v-slot:default="{ hover }"
  >
    <v-card
      :elevation="hover ? 10 : 2"
      height="350"
      max-height="350"
      max-width="100%"
      min-width="250"
      class="mx-auto"
      :to="pathTo"
    >
      <v-img
        :src="item.image ? item.image : `${baseUrl}ampa- (1).png`"
        class="fill-height"
        :aspect-ratio="16/9"
      >
        <v-expand-transition>
          <v-overlay
            :absolute="true"
            :value="true"
            :opacity="0.46"
            color="#001A33"
            class="d-flex transition-fast-in-fast-out v-card--reveal justify-start"
            :style="`height:${hover ? 50 : 18}%; top: ${hover ? 50 : 82}%;`"
          >
            <v-col>
              <h4 class="text-uppercase pl-2">
                {{ item.title }}
              </h4>
              <v-divider
                v-if="hover"
                style="width: 100%"
              />
              <h5
                v-if="item.owner && hover"
                class="justify-start pl-2"
              >
                Autor: {{ item.owner }}
              </h5>
              <h6
                v-if="hover"
                class="justify-start pl-2"
              >
                {{ item.description }}
              </h6>
            </v-col>
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
