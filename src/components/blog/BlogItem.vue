<template>
  <v-card
    :shaped="true"
    elevation="12"
    class="pa-md-4 mx-lg-auto"
    width="800px"
  >
    <v-container>
      <v-btn
        text
        :x-small="true"
        color="primary"
        @click="goBack()"
      >
        Back
      </v-btn>
      <v-row justify="space-between">
        <v-col cols="auto">
          <v-img
            v-if="mode === 'show'"
            height="200"
            width="200"
            :src="post.image"
          />
          <!-- "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" -->
        </v-col>

        <v-col
          cols="auto"
          class="text-center pl-0"
        >
          <v-row
            class="flex-column ma-0 fill-height"
            justify="center"
          >
            <v-col class="px-0">
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title
                    v-if="mode==='show'"
                    class="headline"
                  >
                    {{ post.title }}
                  </v-list-item-title>

                  <v-list-item-subtitle v-if="mode === 'show'">
                    Author: {{ post.owner }} --- <time>{{ new Date(post.timestamp).toGMTString() }}</time>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-divider />
            </v-col>

            <v-col class="px-0">
              <v-card-text
                v-if="mode === 'show'"
                class="font-weight-bold"
              >
                {{ post.abstract? post.abstract : "No tiene abstract pero aqui iría  ..." }}
              </v-card-text>
            </v-col>

            <v-col class="px-0">
              <v-card-text
                v-if="mode === 'show'"
                class="font-weight-medium"
              >
                {{ post.context }}
              </v-card-text>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row v-if="mode === 'show'">
        <v-card-text class="text--primary">
          Comments
        </v-card-text>
      </v-row>
      <v-divider />
      <v-row
        v-for="comment in commentsPost"
        :key="comment.id"
      >
        <v-list-item
          v-if="comment.parent === null && mode === 'show'"
          class="ps-2 ml-2"
        >
          <v-list-item-avatar color="grey" />
          <v-list-item-content>
            <v-list-item-title class="subtitle-2">
              {{ comment.content }}
            </v-list-item-title>
            <v-list-item-subtitle class="caption">
              by {{ comment.owner }}--- <time>{{ new Date(comment.timestamp).toGMTString() }}</time>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          v-if="comment.parent !== null && mode === 'show'"
          class="ps-6 ml-6"
        >
          <v-list-item-avatar color="grey" />
          <v-list-item-content>
            <v-list-item-title class="subtitle-2">
              {{ comment.content }}
            </v-list-item-title>
            <v-list-item-subtitle class="caption">
              by {{ comment.owner }} --- <time>{{ new Date(comment.timestamp).toGMTString() }}</time>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
  import { mapGetters } from 'vuex'
  // import VueDisqus from 'vue-disqus'

  export default {
    // components: { VueDisqus },
    props: {
      // eslint-disable-next-line vue/require-prop-types
      post: {
        id: Number,
        title: String,
        owner: String,
        context: String,
        image: null,
        news: Boolean,
        default: null,
      },
      // eslint-disable-next-line vue/require-default-prop
      commentsPost: Object[{
        id: Number,
        owner: String,
        content: String,
        post: Number,
        parent: Number,
        default: null,
      }],
      mode: {
        type: String,
        default: 'show',
      },
      // eslint-disable-next-line vue/require-default-prop
      onSave: Function,
    },
    data () {
      return {
        show: false,
        saveError: '',
        title: '',
        author: '',
        content: '',
        published: '',
        description: '',
        commentsReady: false,
        ready: false,
        files: [],
        rules: [
          value => !value || value.size < 2000000 || 'Image size should be less than 2 MB',
        ],
      }
    },
    computed: {
      ...mapGetters(['user']),
      isAdmin () {
        return this.user && this.user.is_superuser
      },
      allReady () {
        return this.ready && this.post
      },
    },
    watch: {
      post (value) {
        this.commentsReady = false
        this.showComments
        this.ready = true
        this.post.timestamp = this.post.timestamp.toGMTString()
        console.log(this.post.image)
      },
      files (value) {
        this.product.image = value[0]
      },

    },
    mounted () {
      if (!this.post) {
        this.ready = true
        return
      }
      console.log('----', this.post.image)
      this.showComments
      this.ready = true

      // this.$getResource('post', this.post)
      // .then(this.showComments)
      // .then(() => {
      //     this.ready = true;
      // });
    },
    methods: {
      deletePost: function () {
        const res = this.$store.dispatch('delPost', {
          id: this.post.id,
        })

        if (!res.success) {
          this.saveError = res.message
        }
      },
      savePost: async function () {
        const actionToDo = this.mode === 'editing' ? 'patchPost' : 'postPost'
        this.saveError = ''
        this.pos.news = true
        const res = await this.$store.dispatch(actionToDo, this.post)

        if (!res.success) {
          this.saveError = res.message
          return
        }
        this.mode = 'show'
        if (this.onSave) this.onSave()
      },
      goBack () {
        this.$router.push('/blog')
      },
    },
  }
</script>
