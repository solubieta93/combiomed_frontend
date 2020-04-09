<template>
  <v-container
    fluid
    class="white_back pa-0 ma-0"
  >
    <v-img
      v-if="!post.image"
      :src="`${baseUrl}public/ampa- (1).png`"
      style="top:0px"
      max-height="80vh"
    />
    <v-img
      v-else
      :src="post.image"
      max-height="70vh"
    />
    <v-img
      :src="`${baseUrl}web-combiomed-historia-03.png`"
      style="top:-46px"
    />

    <!-- FIRST NEWS -->
    <div class="mycontainer">
      <div class="mygrid">
        <div class="item-0">
          <h3
            class="text-uppercase"
            style="color: grey;"
          >
            <!-- {{post.title}} -->
            {{ post.title }}
            <br>
          </h3>
        </div>
        <!-- <div class="item-1">
          <hr/>
        </div> -->
        <div class="item-2">
          <p class="text-justify">
          <!-- {{post.content}} -->
          {{ post.context }}
        </p>
        </div>
      </div>
    </div>
    
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
            style="margin-top: -14px; margin-left: 16px;"
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
        baseUrl: process.env.BASE_URL,
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
        const { count, posts } = await this.$store.dispatch('getPaginateBlogDistinct', {
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

.myimg{
width:100%;
height:100%;
}

.mycontainer {
	margin:auto;
  margin-bottom: 10%;
	width:60%;
}

.mygrid{
	display:grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 30px;
	/* grid-auto-rows:100px; */
  /* margin-left: 40px;
  margin-right: 40px; */
}

.mygrid div{
	overflow:hidden;
}

.item-0{
  grid-row: 1/2;
	grid-column: 1/2;
	height: 100%;
}
.item-1{
  grid-row: 1/2;
	grid-column: 1.5/3;
	height: 100%;
}
.item-2{
  grid-row: 2/3;
	grid-column: 1/3;
	height: 100%;
}

</style>
