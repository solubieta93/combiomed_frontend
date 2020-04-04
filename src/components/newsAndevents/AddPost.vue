<template>
  <v-card>
    <form-alert
      v-if="saveError"
      :message="saveError"
    />
    <v-card-title
      v-if="mode==='creating'"
    >
      <h2>Add a New News</h2>
    </v-card-title>
    <v-card-title
      v-if="mode==='editing'"
    >
      <h2>Edit News</h2>
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
        <v-btn
          class="red white--text"
          @click="saveNews()"
        >
          Save news
        </v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    props: {
      post: {
        id: Number,
        title: String,
        owner: String,
        context: String,
        image: File,
        news: Boolean,
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
      }
    },
    computed: {
      ...mapGetters(['user']),
      isAdmin () {
        return this.user && this.user.is_superuser
      },
    },
    methods: {
      saveNews: async function () {
        const actionToDo = this.mode === 'editing' ? 'patchPost' : 'postPost'
        this.saveError = ''
        const res = await this.$store.dispatch(actionToDo, this.post)
        if (!res.success) {
          this.saveError = 'Please fill the required fields'
        } else {
          this.mode = 'show'
          if (this.onSave) this.onSave()
        }
      },
    },
  }
</script>
