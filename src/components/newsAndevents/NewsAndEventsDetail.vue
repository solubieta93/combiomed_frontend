<template>
  <v-container fluid 
    class="white_back">
    <navbar />

    <v-img v-if="!blog[0].image"
    src="../../../public/ampa- (1).png" style="top:0px"/>
    <v-img 
    src="../../../public/web-combiomed-historia-03.png" style="top:-40px"/>

    <!-- FIRST NEWS -->
    <v-col cols="12" >
      <v-row  justify="left" style="height: 50px; margin-top: 10px; ">
        <v-col  md="1">
        </v-col>
        <v-col  md="2" >
           <h3 class="text-uppercase" style="margin-top: -14px; margin-left: 16px; color: grey;">
            <!-- {{post.title}} -->
            {{blog[0].title}}
            <br>
          </h3>
        </v-col>
        <v-col  md="7">
          <hr>
        </v-col>
      </v-row>
    </v-col>          
    <v-row  justify="left" style=" margin-left: 16px; color: grey;">
      <v-col  md="1">
      </v-col>
      <v-col  md="9" justify="justify">
        <p class="text-justify">
            <!-- {{post.content}} -->
            {{blog[0].context}}
        </p>
      </v-col>
    </v-row>

    <!-- TO SHOW OTHER TWO NEWS -->
    <v-row
      v-for="(card, i) in blog"
      :key="card.title"
      >
        <show-post-detail 
            :post="card"
            :ubication_news="i === 0 ? 'Right' : (i === 1 ? 'Left' : '') " 
        />
    </v-row>

    <!-- TO SHOW OTHER NEWS AS SUGERENCY -->
    <news-and-events-items :limit="6" :detail="true" :page="2" :start="2"/>
    <!-- :post_id="post.id"/> -->

    <!-- TO ADD NEWS OR EVENTS, ONLY ADMIN CAN DO IT -->
    <v-dialog
      v-model="addNews"
      max-width="600px"
    >
      <add-post
        :post="newNews"
        :mode="'creating'"
        :onSave="() => { addNews = false }"
      />
    </v-dialog>
    <v-card-text v-if="isAdmin" style="height: 100px; position: relative">
      <v-btn
        absolute
        dark
        fab
        right
        small
        color="pink"
        @click="showAddNewsDialog()"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-card-text>
  </v-container>  
</template>

<script>
  import Navbar from '@/components/Navbar'
  import NewsAndEventsItems from '@/components/newsAndevents/NewsAndEventsItems'
  import AddPost from '@/components/newsAndevents/AddPost'
  import ShowPostDetail from '@/components/newsAndevents/ShowPostDetail'
  import Footer from '@/components/footer'
  import Form from '@/components/Form'
  import { mapGetters } from 'vuex'

  export default {
    components: {
      Navbar,
      NewsAndEventsItems,
      AddPost,
      ShowPostDetail,
      Footer,
      Form,
    },
    props: {
      post: {
        id: Number,
        title: String,
        owner: String,
        context: String,
        image: null,
        news: Boolean,
        default: null,
      },
    },
    computed: {
      ...mapGetters(['blog' , 'user', 'count_post', 'comments']),
      isAdmin: function () {
        return this.user && this.user.is_superuser
      },
    },
    mounted: async function () {
      await this.paginate()
    },
    methods: {
      async paginate () {
        await this.$store.dispatch('getPaginateBlog', {
          offset: 0,
          limit: 2,
          // id_distinct: this.post.id
        })
      },
      async showAddNewsDialog () {
        this.addNews = true
        this.newNews = await this.$store.dispatch('getNewPost')
      },
      async submit () {
        const res = await this.$store.dispatch('postPost', this.newPost)
        if (!res.success) {
          this.saveError = res.message
          return
        }
        this.addPost = false
      },
    },
  }
</script>
<style scoped>
  .white_back {
    background-color: white !important;
  }
</style>
