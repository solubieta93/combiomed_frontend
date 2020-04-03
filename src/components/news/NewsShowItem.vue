<template>
  <v-card>
    <v-card-title
      v-text="post.title"
    />
    <v-card-text class="text--primary">
      <div>Autor: {{ post.owner }} </div>
      <p>{{ post.abstract }}</p>
    </v-card-text>
    <v-card-actions>
      <v-spacer> </v-spacer>
      <v-btn
        text
        color="deep-purple accent-4"
        @click="showMoreDialog(post)"
      >
        Leer más
      </v-btn>

      <v-btn 
        icon
        color= "red"
        @click="SubmitLike(post)"
      >
        <v-badge top color="red">
          <span slot="badge"> {{this.count_like}} </span>
          <v-icon>mdi-heart</v-icon>
        </v-badge>
      </v-btn>
      
      <v-btn
        v-if="isAdmin"
        icon
        @click="DeletePost(post)"
      >
        <v-icon>mdi-delete</v-icon>
      </v-btn>

      <v-btn
        v-if="isAdmin"
        icon
        color="purple"
        @click="editing = !editing"
      >
        <v-icon> mdi-pencil </v-icon>
      </v-btn>
    </v-card-actions>

    <v-dialog
      v-model="editing"
    >
      <news-add-post
        :post="post"
        :mode="'editing'"
        :onSave="() => { editing = false }"
      /> 
    </v-dialog>
  </v-card>
</template>

<script>
  import { mapGetters } from 'vuex'
  // import VueDisqus from 'vue-disqus'
  import NewsAddPost from './NewsAddPost'

  export default {
    components: { NewsAddPost },
    props: {
      post: {
        id: Number,
        title: String,
        owner: String,
        context: String,
        image: File,
        default: null,
      },
      mode: {
        type: String,
        default: 'show',
      },
      onSave: Function,
    },
    data () {
      return {
        editing: false,
        like: false,
        count_like: this.post.countLike
      }
    },
    computed: {
      ...mapGetters(['blog', 'user', 'count_post', 'comments']),
      isAdmin () {
        return this.user && this.user.is_superuser
      },
      allReady () {
        return this.ready && this.post
      },
    },
     watch: {
      post (value) {
        console.log('post', this.post)
      },
      editing (value) {
          console.log('edit', this.editing)
      },
      like (value) {
        this.count_like = this.count_like + 1
      }
    },
    methods: {
      getCommentByPost (item) {
        if (this.comments) {
          return this.comments.filter(x => x.post === item.id)
        } else {
          return this.comments
        }
      },
      showMoreDialog (item) {
        const commentsItem = this.getCommentByPost(item)
        this.$router.push({name: 'newsItem', params: { post: item, commentsPost: commentsItem, mode: 'show' } })
      },
      DeletePost (item) {
        const res = this.$store.dispatch('delPost', {
          id: item.id,
        })

        if (!res.success) {
          this.saveError = res.message
          // return
        }
      },
      SubmitLike (item) {
        this.like = true
        const res = this.$store.dispatch('submitLike', {
          id: item.id,
          count: item.countLike + 1
        })
        if(!res.success){
          this.saveError = res.message
          return
        }
      }
    },
  }
</script>
