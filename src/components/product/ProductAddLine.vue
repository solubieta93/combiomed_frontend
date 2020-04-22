<template>
  <v-card>
    <form-alert
      v-if="saveError"
      :message="saveError"
    />
    <v-card-title
      v-if="mode==='creating'"
    >
      <h2>Agregar Línea de Producto</h2>
    </v-card-title>
    <v-card-title
      v-if="mode==='editing'"
    >
      <h2>Editar Línea de Producto</h2>
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
              v-model="line.title"
              :rules="[rules.required, rules.charactersLength(null, 100)]"
              label="Título"
            />
            <v-text-field
              v-model="line.description"
              :rules="[rules.required, rules.charactersLength(null, 100)]"
              label="Descripción"
            />
            <v-text-field
              v-model="line.priority"
              class="mx-auto"
              type="number"
              :min="Math.min(1)"
              style="width: 120px; max-width: 120px"
              label="Prioridad"
              :rules="[x => (Number.isInteger(x))]"
            />
          </v-form>
        </v-card-text>
      </v-window-item>
      <v-window-item :value="2">
        <v-card-text>
          <v-row justify="center">
            <images-component :image-src="imagesURL" />
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
        @click="saveLine"
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
  import Rules from '../../utils/rules'

  export default {
    components: {
      'files-input': FilesInputComponent,
      'images-component': ImagesComponent,
    },
    props: {
      line: {
        id: Number,
        title: String,
        description: String,
        image: String,
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
        rules: Rules,
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
      saveLine: function () {
        this.loading = true
        const actionToDo = this.mode === 'editing' ? 'patchTypeProduct' : 'postTypeProduct'
        this.saveError = ''
        if (this.imagesSelected) {
          this.$store.dispatch('uploadFile', this.imagesSelected[0]).then(uploadRes => {
            if (uploadRes.success) {
              this.line.image = uploadRes.src
              this.$store.dispatch(actionToDo, this.line).then(res => {
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
          this.$store.dispatch(actionToDo, this.line).then(res => {
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
