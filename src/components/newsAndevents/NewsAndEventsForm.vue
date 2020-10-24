<template>
  <v-card
    class="mx-auto"
  >
    <v-tabs
      v-model="pos"
      background-color="transparent"
      light
      centered
    >
      <v-tab class="justify-center">
        Idioma Español
      </v-tab>
      <v-tab>
        Idioma Inglés
      </v-tab>
      <v-tab-item>
        <v-card elevation="0">
          <v-col>
            <v-row justify="center">
              <v-col md="8">
                <v-text-field
                  v-model="nameEsp"
                  label="Título"
                  :rules="[rules.required, rules.charactersLength(null, 100)]"
                  counter="100"
                  class="headline"
                  @change="value => changeNameOrDescription('title', value)"
                />
                <v-text-field
                  v-model="descriptionEsp"
                  label="Descripción"
                  :rules="[rules.charactersLength(null, 100)]"
                  counter="100"
                  class="subtitle-1"
                  @change="value => changeNameOrDescription('abstract', value)"
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
            v-for="(item, i) in !loading && post ? post.details_es: []"
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
      </v-tab-item>
      <v-tab-item>
        <v-col cols="12">
          <v-card elevation="0">
            <v-col>
              <v-row justify="center">
                <v-col md="8">
                  <v-text-field
                    v-model="nameEng"
                    label="Título"
                    :rules="[rules.required, rules.charactersLength(null, 100)]"
                    counter="100"
                    class="headline"
                    @change="value => changeNameOrDescription('title', value)"
                  />
                  <v-text-field
                    v-model="descriptionEng"
                    label="Descripción"
                    :rules="[rules.charactersLength(null, 100)]"
                    counter="100"
                    class="subtitle-1"
                    @change="value => changeNameOrDescription('abstract', value)"
                  />
                </v-col>
              </v-row>
            </v-col>
            <v-row
              v-for="(item, i) in !loading && post ? post.details_en: []"
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
          </v-card>
        </v-col>
      </v-tab-item>
    </v-tabs>
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
      pos: 0,
      nameEsp: '',
      nameEng: '',
      descriptionEsp: '',
      descriptionEng: '',
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

        this.nameEsp = this.post.title_json ? this.post.title_json.es : this.post.name
        this.nameEng = this.post.title_json ? this.post.title_json.en : this.post.name
        this.descriptionEsp = this.post.abstract_json ? this.post.abstract_json.es : this.post.description
        this.descriptionEng = this.post.abstract_json ? this.post.abstract_json.en : this.post.description
      },
      changeNameOrDescription (field, value) {
        if (field === 'title') {
          if (this.nameEsp || this.nameEng) {
            this.changes[field] = {}
            if (this.nameEsp) {
              this.changes[field]['es'] = this.nameEsp
            }
            if (this.nameEng) {
              this.changes[field]['en'] = this.nameEng
            }
            this.changes[field] = JSON.stringify(this.changes[field])
          }
        } else {
          if (this.descriptionEsp || this.descriptionEng) {
            this.changes[field] = {}
            if (this.descriptionEsp) {
              this.changes[field]['es'] = this.descriptionEsp
            }
            if (this.descriptionEng) {
              this.changes[field]['en'] = this.descriptionEng
            }
            this.changes[field] = JSON.stringify(this.changes[field])
          }
        }
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
        const lang = this.pos ? 'en' : 'es'
        if (lang === 'en') {
          this.post.details_en = this.removeElement(i, this.post.details_en)
          this.changeField('json_details_en', JSON.stringify({ details: this.post.details_en }))
        } else {
          this.post.details_es = this.removeElement(i, this.post.details_es)
          this.changeField('json_details_es', JSON.stringify({ details: this.post.details_es }))
        }
      },
      removeFromItemOfDetails (i, j) {
        const lang = this.pos ? 'en' : 'es'
        if (lang === 'en') {
          this.post.details_en[i].items = this.removeElement(j, this.post.details_en[i].items)
          this.changeField('json_details_en', JSON.stringify({ details: this.post.details_en }))
        } else {
          this.post.details_es[i].items = this.removeElement(j, this.post.details_es[i].items)
          this.changeField('json_details_es', JSON.stringify({ details: this.post.details_es }))
        }
      },
      changeDetails (i, j, value) {
        const lang = this.pos ? 'en' : 'es'
        if (lang === 'en') {
          this.post.details_en[i].items[j] = value
          this.changeField('json_details_en', JSON.stringify({ details: this.post.details_en }))
        } else {
          this.post.details_es[i].items[j] = value
          this.changeField('json_details_es', JSON.stringify({ details: this.post.details_es }))
        }
      },
      addDetail (i) {
        const lang = this.pos ? 'en' : 'es'
        if (i === undefined || i === null) {
          if (lang === 'en') {
            this.post.details_en.push({
              text: '',
              items: [],
            })
          } else {
            this.post.details_es.push({
              text: '',
              items: [],
            })
          }
        } else {
          if (lang === 'en') {
            this.post.details_en[i].items.push('')
          } else {
            this.post.details_es[i].items.push('')
          }
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