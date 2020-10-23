<template>
  <v-card class="mx-auto">
    <v-col>
      <v-row justify="center">
        <v-col md="8">
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
          <v-text-field
            v-model="titleEsp"
            :rules="[rules.required, rules.charactersLength(null, 100)]"
            label="Título en español"
          />
<!--          @change="value => changeField('description', value)"-->
          <v-text-field
            v-model="descriptionEsp"
            :rules="[rules.required, rules.charactersLength(null, 100)]"
            label="Descripción en español"
          />
<!--          @change="value => changeField('title', value)"-->
          <v-text-field
            v-model="titleEng"
            :rules="[rules.required, rules.charactersLength(null, 100)]"
            label="Título en inglés"
          />
          <v-text-field
            v-model="descriptionEng"
            :rules="[rules.required, rules.charactersLength(null, 100)]"
            label="Descripción en inglés"
          />
          <v-text-field
            v-model="line.priority"
            class="mx-auto"
            type="number"
            :min="Math.min(1)"
            style="width: 120px; max-width: 120px"
            label="Prioridad"
            :rules="[x => (Number.isInteger(x))]"
            @input="value => changeField('priority', value)"
          />
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="8">
          <images-component
            :image-src="imageURL"
            style="width: 100%; height: 300px"
          />
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col
          sm="8"
          md="6"
          lg="4"
        >
          <files-input
            :accept="'image/*'"
            :placeholder="'Seleccione una foto'"
            label="Imágenes"
            @files:changed="(v) => imagesSelected = v"
          />
        </v-col>
      </v-row>
    </v-col>

    <v-card-actions>
      <v-row justify="center">
        <v-col cols="8">
          <v-divider />
          <v-row justify="end">
            <v-btn
              :loading="loading"
              tile
              outlined
              class="ma-2"
              @click="deleteLine= !deleteLine"
            >
              <v-icon
                left
              >
                mdi-delete
              </v-icon>
              Eliminar
            </v-btn>
            <v-btn
              :loading="loading"
              tile
              outlined
              class="ma-2"
              @click="cancel"
            >
              <v-icon
                left
              >
                mdi-cancel
              </v-icon>
              Cancelar
            </v-btn>
            <v-btn
              :loading="loading"
              tile
              outlined
              color="blue"
              class="ma-2"
              @click="save"
            >
              <v-icon
                left
              >
                mdi-checkbox-marked-circle
              </v-icon>
              Aceptar
            </v-btn>
          </v-row>
        </v-col>
      </v-row>
    </v-card-actions>
    <v-dialog
      v-model="deleteLine"
      persistent
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">
          Eliminar
        </v-card-title>
        <v-card-text>¿Está seguro que desea eliminar?</v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="green darken-1"
            text
            @click="deletedLine()"
          >
            Si
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="deleteLine = false"
          >
            No
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
        type: Object,
        required: true,
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
        imageURL: null,
        deleteLine: false,
        changes: {},
        titleEsp: '',
        titleEng: '',
        descriptionEsp: '',
        descriptionEng: '',
      }
    },
    async created () {
      this.load()
    },
    computed: {
      ...mapGetters(['user']),
      isAdmin () {
        return this.user && this.user.is_superuser
      },
    },
    watch: {
      imagesSelected (value) {
        this.imageURL = value.length ? value.map(img => URL.createObjectURL(img))[0] : null
        this.changeField('image', value.length ? value[0] : null)
      },
      line (value) {
        if (value) {
          console.log(value, 'line')
        }
      },
    },
    methods: {
      load () {
        console.log(this.line.image, 'image line')
        this.imageURL = this.line.image
        this.titleEsp = this.line.title_json ? this.line.title_json.es : '';
        this.titleEng = this.line.title_json ? this.line.title_json.en : '';
        this.descriptionEsp = this.line.description_json ? this.line.description_json.es : '';
        this.descriptionEng = this.line.description_json ? this.line.description_json.en : '';
      },

      async save () {
        this.loading = true
        this.prepareTitleJson();
        this.prepareDescriptionJson();
        await this.onSave(Object(this.changes))
        this.loading = false
      },

      changeField (field, value) {
        console.log(field, 'field')
        console.log(value, 'value')
        this.changes[field] = value
      },
      prepareTitleJson () {
        if (this.titleEsp || this.titleEng) {
          this.changes['title'] = {}
          if (this.titleEsp) {
            this.changes['title']['es'] = this.titleEsp;
          }
          if (this.titleEng) {
            this.changes['title']['en'] = this.titleEng;
          }
          this.changes['title'] = JSON.stringify(this.changes['title'])
        }
      },

      prepareDescriptionJson () {
        if (this.descriptionEsp || this.descriptionEng) {
          this.changes['description'] = {}
          if (this.descriptionEsp) {
            this.changes['description']['es'] = this.descriptionEsp;
          }
          if (this.descriptionEng) {
            this.changes['description']['en'] = this.descriptionEng;
          }
          this.changes['description'] = JSON.stringify(this.changes['description'])
        }
      },
      cancel () {
        this.$router.push('/')
      },

      async deletedLine () {
        console.log(this.line.id, 'id')
        const ok = await this.$store.dispatch('delProductTypes', this.line.id)
        if (!ok.success) {
          this.saveError = e.message
        }
        // await this.paginate()
        else {
          this.$router.push('/')
        }
      },
    },
  }
</script>
