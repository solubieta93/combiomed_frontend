<template>
  <v-card class="mx-auto">
    <v-col>
      <v-row justify="center">
        <v-col md="8">
          <v-card-title
            v-if="mode==='creating'"
          >
            <h2>Agregar Contacto</h2>
          </v-card-title>
          <v-card-title
            v-if="mode==='editing'"
          >
            <h2>Editar Contacto</h2>
          </v-card-title>
          <v-text-field
            v-model="contact.name"
            :rules="[rules.required, rules.charactersLength(null, 100)]"
            label="Nombre"
            @change="value => changeField('name', value)"
          />
          <!--            @change="value => changeFieldRol('role', value, 'es')"-->
          <v-text-field
            v-model="contactRoleEsp"
            :rules="[rules.required, rules.charactersLength(null, 100)]"
            label="Rol en español"
          />
          <!--            @change="value => changeFieldRol('role', value, 'en')"-->
          <v-text-field
            v-model="contactRoleEng"
            :rules="[rules.required, rules.charactersLength(null, 100)]"
            label="Rol en inglés"
          />
          <v-text-field
            v-model="contact.mail"
            :rules="[rules.required, rules.charactersLength(null, 100)]"
            label="Correo"
            @change="value => changeField('mail', value)"
          />
          <v-text-field
            v-model="contact.priority"
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
            label="Imagenes"
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
              @click="deleteContact= !deleteContact"
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
      v-model="deleteContact"
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
            @click="deletedContact()"
          >
            Si
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="deleteContact = false"
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
      contact: {
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
        changes: {},
        form: null,
        imagesSelected: null,
        imageURL: null,
        deleteContact: false,
        languageSelected: 'es',
        contactRoleEsp: '',
        contactRoleEng: '',
      }
    },
    computed: {
      ...mapGetters(['user']),
      isAdmin () {
        return this.user && this.user.is_superuser
      },
      itemsLanguage () {
        return [
          { text: 'Español', value: 'es' },
          { text: 'Inglés', value: 'en' },
        ]
      },
      language () {
        return this.languageSelected
      },
    },
    watch: {
      imagesSelected (value) {
        console.log(value, 'value image sele')
        this.imageURL = value.length ? value.map(img => URL.createObjectURL(img))[0] : null
        this.changeField('image', value.length ? value[0] : null)
      },
      contact (value) {
        if (value) {
          this.load()
        }
      },
    },
    created () {
      this.load()
    },
    methods: {
      load () {
        console.log(this.contact.image, 'image contact')
        this.imageURL = this.contact.image
        this.contactRoleEsp = this.contact.role_json ? this.contact.role_json.es : ''
        this.contactRoleEng = this.contact.role_json ? this.contact.role_json.en : ''
      },

      async save () {
        this.loading = true
        if (this.contactRoleEng || this.contactRoleEsp) {
          this.changes['role'] = {}
          if (this.contactRoleEng) {
            this.changes['role']['en'] = this.contactRoleEng;
          }
          if (this.contactRoleEsp) {
            this.changes['role']['es'] = this.contactRoleEsp;
          }
          this.changes['role'] = JSON.stringify(this.changes['role'])
        }
        await this.onSave(Object(this.changes))
        this.loading = false
      },

      changeField (field, value) {
        console.log(field, 'field')
        console.log(value, 'value')
        this.changes[field] = value
      },
      async deletedContact () {
        const ok = await this.$store.dispatch('delContact', this.contact.id)
        if (!ok) { this.$router.push('/') }
        this.$router.push('/contacts')
      },
      cancel () {
        this.$router.push('/')
      },
    },

  }
</script>
