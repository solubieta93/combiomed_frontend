<template>
  <v-card
    class="mx-auto"
    max-width="1000"
  >
    <v-toolbar
      color="indigo"
      dark
    >
      <v-toolbar-title>Blog</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-toolbar>
    <v-dialog
      v-model="addPost"
      max-width="600px"
    >
      <blog-add-post
        :post="newPost"
        :mode="'creating'"
        :onSave="() => { addPost = false }"
      />
    </v-dialog>
    <v-container fluid>
      <v-row dense>
        <v-col
          v-for="(card, i) in blog"
          :key="card.title"
          :cols="i%3===0 ? 12 : 6"
        >
          <blog-show-item
            :post="card"
            :mode="'show'"
          />
        </v-col>
      </v-row>
    </v-container>
    <v-card-text style="height: 100px; position: relative">
      <v-btn
        v-if="isAdmin"
        absolute
        dark
        fab
        right
        small
        color="pink"
        @click="showAddPostDialog()"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-card-text>
    <v-pagination
      v-model="page"
      :length="pagination_length"
      :total-visible="10"
      circle
      @paginate="paginate"
    />
  </v-card>
</template>

<script>
  import BlogAddPost from './BlogAddPost'
  import BlogShowItem from './BlogShowItem'

  import { mapGetters } from 'vuex'

  export default {
    components: {
      BlogAddPost,
      BlogShowItem,
    },
    data () {
      return {
        show: false,
        showMore: false,
        editing: false,
        addPost: false,
        page: 1,
        newPost: Object({}),
        overlay: false,
        title: '',
        content: '',
        abstract: '',
      }
    },
    computed: {
      ...mapGetters(['blog', 'user', 'count_post', 'comments']),
      isAdmin: function () {
        return this.user && this.user.is_superuser
      },
      pagination_length () {
        return Number.parseInt(this.count_post % 10 > 0 ? (this.count_post / 10) + 1 : this.count_post / 10)
      },
    },
    watch: {
      page (value) {
        if (value) {
          this.paginate()
        }
      },
    },
    mounted: function () {
      this.paginate()
    },
    methods: {
      paginate () {
        this.$store.dispatch('getPaginateBlog', {
          offset: this.page - 1,
        })
        this.$store.dispatch('getPaginateComment', {
          offset: (this.page - 1) * 10,
        })
      },
      async showAddPostDialog () {
        this.addPost = true
        this.newPost = await this.$store.dispatch('getNewPost')
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
