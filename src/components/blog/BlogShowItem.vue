<template>
  <v-card>
    <!-- <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" /> -->

    <v-card-title v-text="post.title" />

    <v-card-text class="text--primary">
      <div>Autor: {{ post.owner }} </div>
      <p>{{ post.abstract }}</p>
    </v-card-text>

    <v-card-actions>
      <v-spacer />
      <v-btn
        text
        color="deep-purple accent-4"
        @click="showMoreDialog(post)"
      >
        Leer más
      </v-btn>
      <v-btn
        icon
        color="red"
        @click="SubmitLike(post)"
      >
        <v-badge
          top
          color="red"
        >
          <span slot="badge"> {{ count_like }} </span>
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
        text
        @click="editing = !editing"
      >
        <v-icon> mdi-pencil </v-icon>
      </v-btn>
    </v-card-actions>

    <v-dialog
      v-model="editing"
      max-width="600px"
    >
      <blog-add-post
        :post="post"
        :mode="'editing'"
        :on-save="() => { editing = false }"
      />
    </v-dialog>
  </v-card>
</template>

<script>
  import { mapGetters } from 'vuex'
  import BlogAddPost from './BlogAddPost'
  // import VueDisqus from 'vue-disqus'

  export default {
    components: { BlogAddPost },
    props: {
      // eslint-disable-next-line vue/require-prop-types
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
    },
    data () {
      return {
        editing: false,
        like: false,
        count_like: this.post.countLike,
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
      },
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
        // eslint-disable-next-line camelcase
        const comments_item = this.getCommentByPost(item)
        //   this.$router.push({path: `/blogItem/${item}/comments/${comments_item}`})
        this.$router.push({ name: 'blogItem', params: { post: item, commentsPost: comments_item, mode: 'show' } })
      },
      DeletePost (item) {
        const res = this.$store.dispatch('delPost', {
          id: item.id,
        })

        if (!res.success) {
          this.saveError = res.message
        }
      },
      SubmitLike (item) {
        this.like = true
        const res = this.$store.dispatch('submitLike', {
          id: item.id,
          count: item.countLike + 1,
        })
        if (!res.success) {
          this.saveError = res.message
        }
      },
    },
  }
</script>
