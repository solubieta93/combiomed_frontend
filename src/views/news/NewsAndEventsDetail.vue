<template>
  <v-container
    fluid
    class="white_back pa-0 ma-0"
  >
    <v-img
      v-if="!post.image"
      :src="`${baseUrl}ampa- (1).png`"
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

      <!-- TO EDIT NEWS OR EVENTS, ONLY ADMIN CAN DO IT -->
      <v-dialog
        v-model="editPost"
        max-width="600px"
      >
        <post-add-item
          :post="post"
          :mode="'editing'"
          :onSave="() => { editPost = false; load()}"
        />
      </v-dialog>
      
      <v-card-text
        v-if="isAdmin"
        style="height: 50px; position: relative"
      >
        <v-btn
          absolute
          dark
          fab
          right
          small
          color="pink"
          @click="editPost= true"
        >
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
      </v-card-text>

      <!-- TO DELETE NEWS OR EVENTS, ONLY ADMIN CAN DO IT -->
      <v-dialog 
        v-model="deletePos" 
        persistent 
        max-width="290"
      >
        <v-card>
          <v-card-title class="headline">Eliminar Noticia</v-card-title>
          <v-card-text>¿Está seguro que desea eliminar la noticia?</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" text @click="deletePost(post.id)">Si</v-btn>
            <v-btn color="green darken-1" text @click="deletePos = false">No</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-card-text
        v-if="isAdmin"
        style="height: 50px; position: relative"
      >
        <v-btn
          absolute
          dark
          fab
          right
          small
          color="red"
          @click="deletePos= !deletePos"
        >
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </v-card-text>

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
  import PostAddItem from '@/components/newsAndevents/PostAddItem'
  import { mapGetters } from 'vuex'

  export default {
    components: {
      NewsAndEventsItems,
      ShowPostDetail,
      PostAddItem,
    },
    data () {
      return {
        baseUrl: process.env.BASE_URL,
        twoposts: [],
        plaf: null,
        editPost: false,
        deletePos: false,
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
        if (!ok) { this.$router.push('/') }
        await this.paginate()
      },
      async deletePost(post_id) {
        const ok = await this.$store.dispatch('delPost', this.$route.params.postId)
        if (!ok) { this.$router.push('/') }
        // await this.paginate()
        this.$router.push('/news')
      }
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
