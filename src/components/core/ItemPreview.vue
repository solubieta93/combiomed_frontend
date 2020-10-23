<template>
  <v-hover
    :key="item.id"
    v-slot="{ hover }"
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
        :contain="areProducts"
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
                {{ item.title_json ? locale === 'es' ? item.title_json.es : item.title_json.en : item.title }}
              </h4>
              <v-divider
                v-if="hover"
                style="width: 100%"
              />
              <!-- <h5
                v-if="item.owner && hover"
                class="justify-start pl-2"
              >
                Autor: {{ item.owner }}
              </h5> -->
              <h6
                v-if="hover"
                class="justify-start pl-2"
              >
                {{ item.description_json ? locale === 'es' ? item.description_json.es : item.description_json.en : item.description }}
              </h6>
            </v-col>
          </v-overlay>
        </v-expand-transition>
      </v-img>
    </v-card>
  </v-hover>
</template>

<script>
  import { i18n } from '@/plugins/i18n'
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
      // style: {
      //   type: String,
      //   default: null,
      // },
      // class: {
      //   type: String,
      //   default: null,
      // },
      pathTo: {
        type: String,
        default: null,
      },
      areProducts: {
        type: Boolean,
        default: false,
      },
    },
    data: () => ({
      baseUrl: process.env.BASE_URL,

    }),
    computed: {
      locale () {
        return i18n.locale;
      },
    },
  }
</script>
