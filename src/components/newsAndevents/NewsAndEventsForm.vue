<template>
  <v-card
    class="mx-auto"
  >
    <v-col>
      <v-row justify="center">
        <v-col md="8">
          <v-text-field
            v-model="post.title"
            label="Título"
            :rules="[rules.required, rules.charactersLength(null, 100)]"
            counter="100"
            class="headline"
            @change="value => changeField('title', value)"
          />
          <v-text-field
            v-model="post.abstract"
            label="Descripción"
            :rules="[rules.charactersLength(null, 100)]"
            counter="100"
            class="subtitle-1"
            @change="value => changeField('abstract', value)"
          />
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="8">
          <images-component
            :image-src="imagesURL"
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
          <files-input-component
            :accept="'image/*'"
            :placeholder="'Seleccione una foto'"
            label="Imágenes"
            @files:changed="(v) => imagesSelected = v"
          />
        </v-col>
      </v-row>
    </v-col>
    <v-row
      v-for="(item, i) in !loading && post ? post.details : []"
      :key="i"
      justify="center"
      align="center"
    >
      <v-col
        cols="8"
      >
        <v-row>
          <v-btn
            icon
            color="red"
            @click="() => removeFromDetails(i)"
          >
            <v-icon
              dark
            >
              mdi-delete
            </v-icon>
          </v-btn>
          <v-text-field
            v-model="item.text"
            solo
            class="headline text-uppercase pt-0 mt-0"
          />
        </v-row>
        <v-row
          v-for="(value, j) in item.items"
          :key="j"
        >
          <v-btn
            icon
            small
            color="red"
            class="pr-5"
            @click="() => removeFromItemOfDetails(i, j)"
          >
            <v-icon
              small
              dark
            >
              mdi-cancel
            </v-icon>
          </v-btn>
          <li />
          <v-text-field
            :value="value"
            class="subtitle-1 pt-0 mt-0"
            hide-details
            @change="v => changeDetails(i, j, v)"
          />
        </v-row>
        <v-row justify="end">
          <v-btn
            icon
            color="green"
            @click="() => addDetail(i)"
          >
            <v-icon
              dark
            >
              mdi-plus-circle
            </v-icon>
          </v-btn>
        </v-row>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="8">
        <v-row>
          <v-btn
            tile
            outlined
            color="green"
            class="ma-2"
            @click="() => addDetail(null)"
          >
            <v-icon
              left
            >
              mdi-plus-circle
            </v-icon>
            Adicionar Elemento
          </v-btn>
        </v-row>
      </v-col>
    </v-row>
    <v-card-actions>
      <v-row justify="center">
        <v-col cols="8">
          <v-divider />
          <v-row justify="end">
            <v-btn
              :visible="!loading"
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
  </v-card>
</template>

<script>
  import ImagesComponent from '../core/ImagesComponent'
  import FilesInputComponent from '../core/FilesInputComponent'
  import Rules from '../../utils/rules'
  
  export default {
    name: 'PostForm',
    components: {
      ImagesComponent,
      FilesInputComponent,
    },
    props: {
      postBase: {
        type: Object,
        required: true,
      },
      onSave: {
        type: Function,
        default: () => {},
      },
      editing: {
        type: Boolean,
        default: true,
      },
    },
    data: () => ({
      loading: false,
      post: null,
      changes: {},
      imagesSelected: null,
      imagesURL: null,
      rules: Rules,
    }),
    watch: {
      imagesSelected (value) {
        console.log(value, 'selected watch')
        this.imagesURL = !!value && value.length ? value.map(img => URL.createObjectURL(img))[0] : null
        this.changeField('image', this.imagesURL ? value[0] : null)
      },
    },
    async created () {
      this.load()
    },
    methods: {
      async save () {
        this.loading = true
        console.log(this.changes, 'changes')
        await this.onSave(Object(this.changes))
        this.loading = false
      },
      load () {
        this.post = this.postBase
        this.loading = false
        this.changes = this.editing ? {} : this.postBase
        this.imagesURL = this.post.image
      },
      changeField (field, value) {
        this.changes[field] = value
      },
      removeElement (i, item) {
        const a = i > 0 ? item.slice(0, i) : []
        const b = i < item.length - 1 ? item.slice(i + 1, item.length) : []
        return a.concat(b)
      },
      removeFromDetails (i) {
        this.post.details = this.removeElement(i, this.post.details)
        this.changeField('json_details', JSON.stringify({ details: this.post.details }))
      },
      removeFromItemOfDetails (i, j) {
        this.post.details[i].items = this.removeElement(j, this.post.details[i].items)
        this.changeField('json_details', JSON.stringify({ details: this.post.details }))
      },
      changeDetails (i, j, value) {
        this.post.details[i].items[j] = value
        this.changeField('json_details', JSON.stringify({ details: this.post.details }))
      },
      addDetail (i) {
        if (i === undefined || i === null) {
          this.post.details.push({
            text: '',
            items: [],
          })
        } else {
          this.post.details[i].items.push('')
        }
      },
      log () {
        console.log(this.post.details, 'details')
        console.log(this.changes['json_details'], 'details json')
      },
      cancel () {
        this.$router.push(`/news${this.post.id ? `/${this.post.id}` : ''}`)
      },
    },
  }
</script>