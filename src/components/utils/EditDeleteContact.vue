<template>
      <v-card>
        <v-dialog
        v-model="editContact"
        max-width="600px"
        >
        <contact-add-item
            :contacts="contact"
            :mode="'editing'"
            :onSave="() => { editContact = false; paginate()}"
        />
        </v-dialog>
        <v-dialog
        v-model="deleteContact"
        max-width="600px"
        >
        <contact-add-item
            :contact="contact"
            :mode="'delete'"
            :onSave="() => { deleteContact = false; paginate()}"
        />
        </v-dialog>
        
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6">
                <v-select
                  :items="selectContactsName"
                  label="Contactos"
                  required
                  :v-model="selectedType"
                  @click:clear="onUpdateSelected"
                  @change="onUpdateSelected"
                >
                </v-select>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="deleteContact = true">Eliminar</v-btn>
          <v-btn color="blue darken-1" text @click="editContact = true">Editar</v-btn>
        </v-card-actions>
      </v-card>
</template>

<script>
  import { mapGetters } from 'vuex'
  import ContactAddItem from '@/components/utils/ContactAddItem'

  export default {
    components: {
      ContactAddItem
    },
    props: {
      contacts: [],
      contact: {
        id: Number,
        name: String,
        role: String,
        image: String,
        mail: Boolean,
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
            show:false,
            contactsItem: [],
            editContact: false,
            deleteContact: false,
            selectedType: undefined
        }
    }, 
    computed: {
        selectContactsName () {
            const r = this.contacts.map(x => ({ text: x.name, value: x.id.toString() }))
            console.log(r, 'r')
            return r
        }
    },
    methods: {
        onUpdateSelected () {
             this.typeId = this.selectedType ? typeof (this.selectedType) === 'object' ? this.selectedType.value : this.selectedType : null
            this.refresh = true
            console.log(this.selectedType, 'jjjj')
            this.contact = this.contacts.filter(x=> x.name === this.selectedType)
      },
    },
  }
</script>