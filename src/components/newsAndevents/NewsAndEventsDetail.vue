<template>
  <v-container fluid 
    class="white_back">
    <navbar />

    <v-img v-if="blog && blog.length && !blog[0].image"
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
            {{blog[0].content}}
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
    <news-and-events-items :limit="6"/>

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
     data () {
      return {
        show: false,
        showMore: false,
        editing: false,
        addNews: false,
        page: 1,
        newNews: Object({}),
        overlay: false,
        title: '',
        content: '',
        abstract: '',
      }
    },
    computed: {
      ...mapGetters(['blog' , 'user', 'count_post', 'comments']),
      isAdmin: function () {
        return this.user && this.user.is_superuser
      },
      pagination_length () {
        return Number.parseInt(this.count_post % 3 > 0 ? (this.count_post / 3) + 1 : this.count_post / 3)
      },
    },
    watch: {
      page (value) {
        if (value) {
          this.paginate()
        }
      },
    },
    mounted: async function () {
      await this.paginate()
    },
    methods: {
      async paginate () {
        await this.$store.dispatch('getPaginateBlog', {
          offset: (this.page - 1),
          limit: 3
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
