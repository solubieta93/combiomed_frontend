<template>
  <v-container
    fluid
    class="white_back pa-0 ma-0"
  >
    <v-img
      :src="!post.image ? `${baseUrl}ampa- (1).png` : post.image"
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

    <!-- FIRST NEWS -->
    <div class="mycontainer">
      <v-row >
        <v-col 
          sm="12"
          lg="5"
          xl="6"
          cols="12"
        >
          <v-row>
            <h3
              class="text-uppercase"
              style="color: grey;"
            >
              {{ post.title }}
              <br>
            </h3>
          </v-row>
          <v-row
            v-for="(item, i) in !loading && post ? post.details : []"
            :key="i"
            justify="center"
            align="center"
          >
            <v-col
              cols="12"
              class="pa-0"
            >
              <h4>{{ item.text }}</h4>
              <p
                v-for="(value, index) in item.items"
                :key="index"
              >
                {{ value }}
              </p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <!-- TO EDIT NEWS OR EVENTS, ONLY ADMIN CAN DO IT -->
      <v-row
        v-if="!loading && post && isAdmin"
        justify="center"
      >
        <v-col cols="8">
          <v-row justify="end">
            <v-btn
              fab
              dark
              small
              right
              color="green"
              @click="goToEdit"
            >
              <v-icon dark>
                mdi-pencil
              </v-icon>
            </v-btn>
          </v-row>
        </v-col>
      </v-row>

      <!-- TO DELETE NEWS OR EVENTS, ONLY ADMIN CAN DO IT -->
      <v-row
        v-if="!loading && post && isAdmin"
        justify="center"
      >
        <v-col cols="8">
          <v-row justify="end">
            <v-btn
              fab
              dark
              small
              right
              color="red"
              @click="deletePos= !deletePos"
            >
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </v-row>
        </v-col>
      </v-row>
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
        post: null,
        twoposts: [],
        plaf: null,
        editPost: false,
        deletePos: false,
        loading: false,
        error: null,
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
      imgStyle () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return 'height:100%; width:100vw'
          case 'sm': return 'height:100%; width:100vw'
          case 'md': return 'height:100%; width:100vw'
          case 'lg': return 'height:80vh; width:100vw'
          case 'xl': return 'height:80vh; width:100vw'
        }        
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
        console.log(this.twoposts, 'twoposts')
      },
      load () {
        this.loading = true
        this.error = null
        this.$store.dispatch('getPost', this.$route.params.postId)
          .then(res => {
            if (res.success) {
              this.post = res.post
            } else if (res.notFound) {
              this.$router.push('/')
            } else {
              this.error = res.message
            }
          })
          .catch(e => {
            console.log(e)
            this.error = e
          }).finally(() => {
            this.loading = false
            this.paginate()
          })
      },
      async deletePost(post_id) {
        const ok = await this.$store.dispatch('delPost', this.$route.params.postId)
        if (!ok) { this.$router.push('/') }
        // await this.paginate()
        this.$router.push('/news')
      },
      goToEdit () {
        this.$router.push(`/news/${this.$route.params.postId}/edit`)
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
	width:80%;
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
