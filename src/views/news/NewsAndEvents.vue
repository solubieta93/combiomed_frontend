<template>
  <v-container
    fluid
    class="white_back pa-0 ma-0"
  >
    <v-img
      src="ampa- (1).png"
      height="80vh"
    />
    <v-img
      src="web-combiomed-historia-03.png"
      style="top:-46px"
    />

    <!-- TITLE -->
    <v-col cols="12">
      <v-row
        justify="center"
        style="height: 50px; color: grey;"
      >
        <v-col md="3">
          <hr>
        </v-col>
        <v-col md="2">
          <h3
            class="text-uppercase"
            style="margin-top: -14px; margin-left: 16px; width:100%;"
          >
            Noticias y Eventos
            <br>
          </h3>
        </v-col>
        <v-col md="3">
          <hr>
        </v-col>
      </v-row>
    </v-col>

    <principal-news-and-events />

    <img
      class="fill-height"
      src="news_middle_image.png"
      style="margin-top: 100px; margin-bottom: 50px;"
    />

    <news-and-events-items
      :start="4"
      :limit="3"
    />

    <v-card-text
      v-if="isAdmin"
      style="height: 100px; position: relative"
    >
      <v-btn
        absolute
        dark
        fab
        right
        small
        color="pink"
        to="/news/new"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-card-text>
  </v-container>
</template>

<script>
  import NewsAndEventsItems from '@/components/newsAndevents/NewsAndEventsItems'
  import PrincipalNewsAndEvents from '@/components/newsAndevents/PrincipalNewsAndEvents'

  import { mapGetters } from 'vuex'

  export default {
    components: {
      NewsAndEventsItems,
      PrincipalNewsAndEvents,
    },
    data () {
      return {
        postFixed: [],
        newPost: null,
        addPost: false,
        baseUrl: process.env.BASE_URL,
        loading: false,
      }
    },
    computed: {
      ...mapGetters(['user']),
      isAdmin: function () {
        return this.user && this.user.is_superuser
      },
    },
    methods: {
      async showAddNewsDialog () {
        this.newPost = await this.$store.dispatch('getNewPost')
        this.addPost = true
      },
    },
  }
</script>

<style scoped>
.white_back {
    background-color: white !important;
  }
</style>
