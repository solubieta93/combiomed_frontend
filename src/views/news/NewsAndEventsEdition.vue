<template>
  <v-container
    fluid
    class="pa-0 ma-0"
    style="background-color: white"
  >
    <carousel-portada />

    <v-img
      :src="`${baseUrl}web-combiomed-historia-03.png`"
      style="margin-top: -46px"
    />
    <v-row
      justify="center"
      align="center"
    >
      <v-progress-circular
        v-if="loading"
        :size="70"
        :width="7"
        color="primary"
        indeterminate
      />
      <v-alert
        v-if="!loading && !snackbar && error"
        outlined
        type="error"
        color="primary"
        dense
      >
        {{ error }}
      </v-alert>
    </v-row>
    <news-and-events-form
      v-if="!loading && !!post"
      :post-base="post"
      :on-save="savePost"
      :editing="modeEdition"
    />
  </v-container>
</template>

<script>
  import CarouselPortada from '@/components/utils/CarouselPortada'
  import NewsAndEventsForm from '@/components/newsAndevents/NewsAndEventsForm'
  import { mapGetters } from 'vuex'

  export default {
    name: 'NewsAndEventsEdition',
    components: {
      CarouselPortada,
      NewsAndEventsForm,
    },
    data () {
      return {
        baseUrl: process.env.BASE_URL,
        loading: false,
        post: null,
        postId: null,
        error: null,
        snackbar: false,        
        modeEdition: true,
      }
    },
    computed: {
      ...mapGetters(['user']),
    },
    created () {
      this.modeEdition = !!this.$route.params.postId
    },
    mounted () {
      console.log(this.modeEdition, 'modeEdition')
      if (this.modeEdition) {
        this.getPost()
      } else {
        this.buildPost()
      }
    },
    methods: {
      getPost () {
        this.loading = true
        this.error = null
        this.snackbar = false
        this.postId = this.$route.params.postId
        this.$store.dispatch('getPost', this.$route.params.postId)
          .then(res => {
            if (res.success) {
              this.post = res.post
            } else if (res.notFound) {
              this.$router.push('/')
            } else {
              this.error = res.message
              this.snackbar = true
            }
          })
          .catch(e => {
            console.log(e)
            this.error = e
            this.snackbar = true
          }).finally(() => {
            this.loading = false
          })
      },
      async savePost (changes) {
        this.loading = true
        const prepared = await this.prepareChanges(changes)
        if (!prepared.success) {
          this.loading = false
          return
        }
        const payload = this.modeEdition ? { changes, id: this.post.id } : { ...changes }
        const res = await this.$store.dispatch(this.modeEdition ? 'patchPost' : 'postPost', payload)
        if (res.success) {
          this.loading = false
          this.$router.push(`/news/${res.id}`)
        } else {
          this.loading = false
          this.error = res.message
        }
      },
      prepareChanges: async function (changes) {
        if (changes.image) {
          const uploadRes = await this.$store.dispatch('uploadFile', changes.image)
          if (uploadRes.success) {
            changes.image = uploadRes.src
          } else {
            this.error = 'Error subiendo la imagen'
            return {
              success: false,
              changes: changes,
            }
          }
        }
        if (changes.files && changes.files.length) {
          const files = []
          for (let item of changes.files) {
            if (item.file) {
              const uploadFile = await this.$store.dispatch('uploadFile', item.file)
              if (uploadFile.success) {
                files.push({
                  text: item.text,
                  src: uploadFile.src,
                })
              } else {
                this.error = 'Error subiendo el archivo'
              }
            }
          }
          if (!files || !files.length) {
            return {
              success: false,
              changes: changes,
            }
          } else {
            changes.json_files = JSON.stringify({
              files,
            })
          }
        }
        if (this.modeEdition) {
          changes['owner'] = this.user.id
        }
        return {
          success: true,
          changes,
        }
      },
      buildPost () {
        this.loading = true
        this.$store.dispatch('getNewPost').then(x => {
          this.post = x
          this.loading = false
        })
      },
    },
  }
</script>
