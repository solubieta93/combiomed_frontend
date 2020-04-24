<template>
  <v-container
    fluid
    class="pa-0 ma-0"
    style="background-color: white"
  >
    <carousel-portada />

    <!-- <v-img
      :src="`${baseUrl}web-combiomed-historia-03.png`"
      style="margin-top: -46px"
    /> -->
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

    <v-row 
      v-if="modeEdition"
        justify="center"
        align="center"
    >
      <v-col align-self="center">
        <v-row
            align="center"
            justify="center"
        >
          <v-spacer />
          <v-divider />
          <v-col
            cols="8"
            sm="8"
            md="6"
            lg="4"
            xl="3"
          >
            <v-select
                :items="selectContacts"
                hide-details
                clearable
                solo
                flat
                dense
                color="#8b0000"
                :loading="loading"
                :label="selectedContact ? null : 'Seleccione un contacto'"
                @change="onUpdateSelected"
            />
          </v-col>
          <v-divider />
          <v-spacer />
        </v-row>
      </v-col>
    </v-row>
    <contacts-form
      v-if="!loading"
      :contact="modeEdition ? contactExist : contactNull"
      :on-save="saveContact"
      :mode="modeEdition ? 'editing' : 'creating'"
    />
  </v-container>
</template>



<script>
  import CarouselPortada from '@/components/utils/CarouselPortada'
  import ContactsForm from '@/components/contacts/ContactsForm'

  import { mapGetters } from 'vuex'

  export default {
    name: 'ProductEdition',
    components: {
      CarouselPortada,
      ContactsForm,
    },
    props: {
      modeEdition: {
        type: Boolean,
        default: false,
      },
    },
    data () {
      return {
        baseUrl: process.env.BASE_URL,
        loading: false,
        refresh: false,
        text: '',
        error: null,
        snackbar: false,

        contactNull: null,
        contacts: [],
        contactId: null,
        selectedContact: undefined,
      }
    },
    computed: {
      ...mapGetters(['user']),
      isAdmin: function () {
        return this.user && this.user.is_superuser
      },
      selectContacts () {
        return this.contacts.map(x => ({ text: x.name, value: x.id.toString() }))
      },
      contactExist() {
        return this.contactId && this.contacts ? this.contacts.filter(x => x.id.toString() === this.contactId)[0] : null
      }
    },
    async mounted () {
      console.log(this.modeEdition, 'modeEdition')
      if (this.modeEdition) {
        this.loading = true
        await this.getContacts()
        .then(_ => {
            this.loading = false
        })
        .catch(e => {
            this.loading = false
        })
      } else {
        this.buildContact()
      }
    },
    methods: {
      async getContacts () {
        this.loading = true
        await this.$store.dispatch('getContacts')
        .then(result => {
          console.log(result, 'contacts')
          this.contacts = result
          this.loading = false
          return result
        }).catch(e => {
          this.loading = false
          return []
        })
      },
      
      onUpdateSelected (e) {
        console.log(typeof e, 'e')
        this.contactId = e || null
        if (this.contactId === null) {
          this.buildContact()
        }
      },

      buildContact () {
        this.loading = true
        this.$store.dispatch('getNewContact').then(x => {
          this.contactNull = x
          this.loading = false
        })
      },      

      async saveContact (changes) {
        this.loading = true
        const prepared = await this.prepareChanges(changes)
        if (!prepared.success) {
          this.loading = false
          return
        }
        const payload = this.modeEdition ? { changes, id: this.contactId } : { ...changes }
        const res = await this.$store.dispatch(this.modeEdition ? 'patchContact' : 'postContact', payload)
        if (res.success) {
          this.loading = false
          this.$router.push(`/contacts`)
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
    },
  }
</script>