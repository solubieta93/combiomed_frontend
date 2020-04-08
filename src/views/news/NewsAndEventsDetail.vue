<template>
  <v-container
    fluid
    class="white_back pa-0 ma-0"
  >

    <v-img
      v-if="!post.image"
      src="../../../public/ampa- (1).png"
      style="top:0px"
      max-height="80vh"
    />
    <v-img
      v-else
      :src="post.image"
      max-height="70vh"
    />

    <!-- FIRST NEWS -->
    <v-col cols="12">
      <v-row
        justify="left"
        style="height: 50px; margin-top: 10px; "
      >
        <v-col md="1" />
        <v-col md="2">
          <h3
            class="text-uppercase"
            style="margin-top: -14px; margin-left: 16px; color: grey;"
          >
            <!-- {{post.title}} -->
            {{ post.title }}
            <br>
          </h3>
        </v-col>
        <v-col md="7">
          <hr>
        </v-col>
      </v-row>
    </v-col>
    <v-row
      justify="left"
      style=" margin-left: 16px; color: grey;"
    >
      <v-col md="1" />
      <v-col
        class="justify"
        md="9"
      >
        <p class="text-justify">
          <!-- {{post.content}} -->
          {{ post.context }}
        </p>
      </v-col>
    </v-row>

    <!-- TO SHOW OTHER TWO NEWS -->
    <v-row
      v-for="(card, i) in this.twoposts"
      :key="card.title"
    >
      <show-post-detail
        :post="card"
        :ubication_news="i === 0 ? 'Right' : (i === 1 ? 'Left' : '') "
      />
    </v-row>

    <!-- TO SHOW OTHER NEWS AS SUGERENCY -->
    <news-and-events-items
      :start="2"
      :limit="3"
      :post_id="postId"
    />
  </v-container>
</template>

<script>
  import NewsAndEventsItems from '@/components/newsAndevents/NewsAndEventsItems'
  import ShowPostDetail from '@/components/newsAndevents/ShowPostDetail'
  import { mapGetters } from 'vuex'

  export default {
    components: {
      NewsAndEventsItems,
      ShowPostDetail,
    },
    data () {
      return {
        twoposts: [],
        plaf: null,
        baseUrl: process.env.BASE_URL,
      }
    },
    computed: {
      ...mapGetters(['user', 'post']),
      isAdmin: function () {
        return this.user && this.user.is_superuser
      },
      postId () {
        return this.$route.params.postId
      },
    },
    watch: {
      async postId (value) {
        if (value) { await this.load() }
      },
    },
    mounted: async function () {
      await this.load()
    },
    methods: {
      async paginate (offset = 0, limit = 2) {
        const { count, posts } = await this.$store.dispatch('getPaginateBlog', {
          offset,
          limit,
          id_distinct: this.$route.params.postId,
        })
        this.twoposts = posts
      },
      async load () {
        const ok = await this.$store.dispatch('getPost', this.$route.params.postId)
        console.log(ok, 'dispatchEvent')
        if (!ok) { this.$router.push('/') }
        await this.paginate()
      },
    },
  }
</script>
<style scoped>
  .white_back {
    background-color: white !important;
  }
</style>
