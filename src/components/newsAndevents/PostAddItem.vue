<template>
  <v-card>
    <form-alert
      v-if="saveError"
      :message="saveError"
    />
    <v-card-title
      v-if="mode==='creating'"
    >
      <h2>Agregar una noticia</h2>
    </v-card-title>
    <v-card-title
      v-if="mode==='editing'"
    >
      <h2>Editar noticia</h2>
    </v-card-title>
    <v-window v-model="step">
      <v-window-item :value="1">
        <v-card-text>
          <v-form
            ref="form"
            v-model="form"
            class="px-3"
          >
            <v-text-field
              v-model="post.title"
              :rules="[rules.required]"
              label="Título"
            />
            <v-textarea
              v-model="post.abstract"
              :rules="[rules.required]"
              label="Descripción"
            />
            <v-textarea
              v-model="post.context"
              :rules="[rules.required]"
              label="Contenido"
            />
          </v-form>
        </v-card-text>
      </v-window-item>
      <v-window-item :value="2">
        <v-card-text>
          <v-row justify="center">
            <images-component :image-src="post.image" />
          </v-row>
          <v-row justify="center">
            <v-col>
              <files-input
                :accept="'image/*'"
                :placeholder="'Seleccione una foto'"
                @files:changed="(v) => imagesSelected = v"
              />
            </v-col>
          </v-row>
        </v-card-text>
      </v-window-item>
    </v-window>
    <v-divider />
    <v-card-actions>
      <v-btn
        :disabled="step === 1 || loading"
        text
        @click="step--"
      >
        Atrás
      </v-btn>
      <v-spacer />
      <v-btn
        :disabled="step === 2 || loading"
        :hidden="step === 2 || loading"
        color="primary"
        depressed
        @click="step++"
      >
        Siguiente
      </v-btn>
      <v-btn
        class="red white--text"
        :disabled="step !== 2 || !form"
        :hidden="step !== 2"
        :loading="loading"
        @click="saveNews"
      >
        Salvar
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  import { mapGetters } from 'vuex'
  import FilesInputComponent from '@/components/core/FilesInputComponent'
  import ImagesComponent from '@/components/core/ImagesComponent'
  export default {
    components: {
      'files-input': FilesInputComponent,
      'images-component': ImagesComponent,
    },
    props: {
      post: {
        id: Number,
        title: String,
        owner: String,
        context: String,
        image: String,
        news: Boolean,
        default: null,
      },
      mode: {
        type: String,
        default: 'show',
      },
      onSave: {
        type: Function,
      },
    },
    data () {
      return {
        show: false,
        saveError: '',
        overlay: false,
        rules: {
          required: value => !!value || 'Required.',
        },
        loading: false,
        step: 1,
        form: null,
        imagesSelected: null,
        imagesURL: null,
      }
    },
    computed: {
      ...mapGetters(['user']),
      isAdmin () {
        return this.user && this.user.is_superuser
      },
    },
    watch: {
      imagesSelected (value) {
        this.imagesURL = value.length ? value.map(img => URL.createObjectURL(img))[0] : null
      },
    },
    methods: {
      saveNews: function () {
        this.loading = true
        const actionToDo = ''
        this.saveError = ''
        if (this.imagesSelected) {
          const actionToDo = this.mode === 'editing' ? 'putPost' : 'postPost'
          this.$store.dispatch('uploadFile', this.imagesSelected[0]).then(uploadRes => {
            if (uploadRes.success) {
              this.post.image = uploadRes.src
              this.$store.dispatch(actionToDo, this.post).then(res => {
                if (!res.success) {
                  this.saveError = res.detail
                  this.loading = false
                } else {
                  this.mode = 'show'
                  this.loading = false
                  if (this.onSave) this.onSave()
                }
              })
            } else {
              this.saveError = uploadRes.message
              this.loading = false
            }
          }).catch(e => {
            this.saveError = e.message
            this.loading = false
          })
        } else {
          const actionToDo = this.mode === 'editing' ? 'patchPost' : 'postPost'

          this.$store.dispatch(actionToDo, {
            title: this.post.title,
            abstract: this.post.abstract,
            context: this.post.context,
            news: this.post.news,
            id: this.post.id,
          })
            .then(res => {
              if (!res.success) {
                this.saveError = res.detail
                this.loading = false
              } else {
                this.mode = 'show'
                this.loading = false
                if (this.onSave) this.onSave()
              }
            }).catch(e => {
              this.saveError = e.message
              this.loading = false
            })
        }
      },
    },
  }
</script>
