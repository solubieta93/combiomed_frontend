<template>
  <v-card>
    <form-alert
      v-if="saveError"
      :message="saveError"
    />
    <v-card-title
      v-if="mode==='creating'"
    >
      <h3>Add a New Post</h3>
    </v-card-title>
    <v-card-title
      v-if="mode==='editing'"
    >
      <h3>Edit Post</h3>
    </v-card-title>
    <v-card-text>
      <v-form class="px-3">
        <v-text-field
          v-model="post.title"
          :rules="[rules.required]"
          label="Title"
        />
        <v-textarea
          v-model="post.abstract"
          :rules="[rules.required]"
          label="Abstract"
          prepend-icon="edit"
        />
        <v-textarea
          v-model="post.context"
          :rules="[rules.required]"
          label="Content"
          prepend-icon="edit"
        />
        <v-file-input
          accept="image/png, image/jpeg, image/bmp"
          prepend-icon="mdi-camera"
          placeholder="Pick an image"
          label="Image"
          @change="onFileSelected"
        />
        <v-btn
          class="red white--text"
          @click="savePost()"
        >
          Save post
        </v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
  import { mapGetters } from 'vuex'
  import axios from '../../axios-auth'

  export default {
    props: {
      post: {
        id: Number,
        title: String,
        owner: String,
        context: String,
        image: null,
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
        show: false,
        saveError: '',
        overlay: false,
        rules: {
          required: value => !!value || 'Required.',
        },
        selectedFile: null,
      }
    },
    computed: {
      ...mapGetters(['user', 'blog']),
      isAdmin () {
        return this.user && this.user.is_superuser
      },
    },
    methods: {
      onFileSelected (event) {
        console.log('------ UPLOAD')
        this.selectedFile = event
      },
      savePost: async function () {
        const fd = new FormData()
        fd.append('image', this.selectedFile)

        try {
          console.log('upload image')
          await axios.post('/blog', {
                             image: fd,
                           },
                           {
                             headers: {
                               'Authorization': 'Token ' + localStorage.getItem('token'),
                               'Content-Type': 'application/json',
                               'Accept': 'application/json',
                             },
                           })
        } catch (error) {
          if (error.response) {
            const e = Object.keys(error.response.data).map(key => error.response.data[key].join(' ')).join(' ')
            return {
              success: false,
              message: `Error: ${e}`,
            }
          } else if (error.request) {
            console.log('error request', error.request)
          } else {
            console.log(error.message)
          }
        }

        const actionToDo = this.mode === 'editing' ? 'patchPost' : 'postPost'
        this.saveError = ''
        // console.log(this.post, 'post')
        const res = await this.$store.dispatch(actionToDo, this.post)
        if (!res.success) {
          if ((res.message).includes('field')) {
            this.saveError = 'Please fill the required fields'
          } else {
            this.saveError = res.message
          }
          console.log('error', this.saveError)
        } else {
          this.mode = 'show'
          if (this.onSave) this.onSave()
        }
      },
    },
  }
</script>
