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
                  label="Nombre"
                  :rules="[rules.required, rules.charactersLength(null, 100)]"
                  counter="100"
                  class="headline"
                  @change="value => changeNameOrDescription('name', value)"
                />
                <v-text-field
                  v-model="descriptionEsp"
                  label="Descripcion"
                  :rules="[rules.charactersLength(null, 100)]"
                  counter="100"
                  class="subtitle-1"
                  @change="value => changeNameOrDescription('description', value)"
                />
                <v-select
                  v-model="selectedType"
                  :items="selectProductsTypes"
                  clearable
                  dense
                  color="#8b0000"
                  :loading="loading"
                  label="Linea de producto"
                  :rules="[rules.required]"
                  @click:clear="onUpdateSelected"
                  @change="onUpdateSelected"
                />
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-col
                sm="6"
                md="3"
                lg="3"
                xl="3"
                cols="12"
              >
                <images-component
                  :image-src="imgURL"
                  :img-default="indexCurrent >= 0 && indexCurrent === indexDefault"
                  only-one
                  style="width: 100%; height: 300px"
                  @change:default="changeDefault"
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
                  :placeholder="'Seleccione imágenes'"
                  label="Imágenes"
                  multiple
                  @files:changed="(v) => imagesSelected = v"
                />
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-col
                v-for="(item, i) in imagesURLs"
                :key="item"
                sm="6"
                md="5"
                lg="5"
                xl="5"
                cols="12"
              >
                <div style="width: 100%; height: 300px">
                  <v-img
                    :src="item"
                    style="height: 100%; width: 100%"
                    aspect-ratio="16/9"
                    fill-height
                    :contain="true"
                    @click="() => indexCurrent=i"
                  >
                    <v-row
                      v-if="i === indexDefault"
                      align="center"
                      justify="center"
                    >
                      <v-chip
                        :disabled="true"
                        class="ma-2"
                        color="red"
                        text-color="white"
                      >
                        <v-avatar left>
                          <v-icon> mdi-checkbox-marked-circle </v-icon>
                        </v-avatar>
                        <p class="ma-0 justify:center; align: center;">
                          Principal
                        </p>
                      </v-chip>
                    </v-row>
                  </v-img>
                </div>
              </v-col>
            </v-row>
          </v-col>
          <v-row
            v-for="(item, i) in !loading && product ? productDetailsEsp: []"
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
                    label="Name"
                    :rules="[rules.required, rules.charactersLength(null, 100)]"
                    counter="100"
                    class="headline"
                    @change="value => changeNameOrDescription('name', value)"
                  />
                  <v-text-field
                    v-model="descriptionEng"
                    label="Description"
                    :rules="[rules.charactersLength(null, 100)]"
                    counter="100"
                    class="subtitle-1"
                    @change="value => changeNameOrDescription('description', value)"
                  />
                </v-col>
              </v-row>
            </v-col>
            <v-row
              v-for="(item, i) in !loading && product ? productDetailsEng: []"
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
    name: 'ProductForm',
    components: {
      ImagesComponent,
      FilesInputComponent,
    },
    props: {
      productBase: {
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
      product: null,
      productDetails: {},
      productDetailsEsp: [],
      productDetailsEng: [],
      changes: {},
      imagesSelected: [],
      imagesURLs: new Array(),
      indexCurrent: -1,
      indexDefault: -1,
      imgURL: null,
      rules: Rules,
      productsTypes: [],
      selectedType: undefined,
      pos: 0,
      nameEsp: '',
      nameEng: '',
      descriptionEsp: '',
      descriptionEng: '',
    }),
    computed: {
      selectProductsTypes () {
        return this.productsTypes.map(x => ({ text: x.title, value: x.id.toString() }))
      },
      imagesUrlFiltered () {
        return this.imagesURLs.map((x, i) => [x, i]).filter(x => x[1] !== this.indexCurrent)
      },
    },
    watch: {
      imagesSelected (value) {
        console.log(value, 'selected watch')
        this.imagesURLs = !!value && value.length ? value.map(img => URL.createObjectURL(img)) : new Array()
        this.indexCurrent = value && value.length ? 0 : -1
        this.indexDefault = this.indexCurrent
        this.imgURL = this.imagesURLs && this.imagesURLs.length ? this.imagesURLs[this.indexCurrent] : null

        this.changeField('json_images', this.imagesSelected)
        this.changeField('defaultImage', this.indexDefault)

        // this.changeField('image', this.imagesURL ? value[0] : null)
      },
      indexCurrent (value) {
        // console.log(value, 'change indexCurrent')
        // console.log(this.imagesURLs[this.indexCurrent], 'change indexCurrent imgURL')
        console.log('cambie index current')
        console.log(this.imagesURLs && this.imagesURLs.length, 'Boolean')
        console.log(this.imagesURLs[this.indexCurrent], 'value')
        this.imgURL = this.imagesURLs && this.imagesURLs.length ? this.imagesURLs[this.indexCurrent] : null
        console.log(this.imgURL, 'img url')
      },
      pos (value, oldValue) {
        console.log(value)
      },
    },
    async created () {
      this.load()
      await this.getTypes()
        .then(_ => {
          const temp = this.product.typeId ? this.selectProductsTypes.filter(x => x.value === this.product.typeId.toString()) : null
          console.log(temp)
          if (this.product.typeId && temp) {
            this.selectedType = temp[0]
          }
          this.loading = false
        })
        .catch(e => {
          console.log(e)
          this.loading = false
        })
    },
    methods: {
      changeDefault () {
        this.indexDefault = this.indexCurrent
        console.log(this.indexCurrent >= 0 && this.indexCurrent === this.indexDefault, 'default')
        this.changeField('defaultImage', this.indexDefault)
      },
      async save () {
        this.loading = true
        await this.onSave(Object(this.changes))
        this.loading = false
      },
      load () {
        this.product = this.productBase
        this.productDetails = this.product.details
        this.productDetailsEng = this.productDetails.en ? this.productDetails.en : []
        this.productDetailsEsp = this.productDetails.es ? this.productDetails.es : []
        console.log(this.product.details, '----load')
        this.loading = false
        this.changes = this.editing ? {} : this.productBase

        // this.imagesURL = this.product.image
        // this.imgURL = this.imagesURL
        this.imagesURLs = this.product.images
        this.indexDefault = this.product.defaultImage !== -1 ? this.product.defaultImage : 0
        this.indexCurrent = this.indexDefault
        this.imgURL = this.imagesURLs && this.imagesURLs.length ? this.imagesURLs[this.indexCurrent] : null

        this.nameEsp = this.product.name_json ? this.product.name_json.es : this.product.name
        this.nameEng = this.product.name_json ? this.product.name_json.en : this.product.name
        this.descriptionEsp = this.product.description_json ? this.product.description_json.es : this.product.description
        this.descriptionEng = this.product.description_json ? this.product.description_json.en : this.product.description
      },
      changeField (field, value) {
        console.log(value, '--change field')
        this.changes[field] = value
      },
      changeNameOrDescription (field, value) {
        if (field === 'name') {
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
            this.changes['description'] = {}
            if (this.descriptionEsp) {
              this.changes['description']['es'] = this.descriptionEsp
            }
            if (this.descriptionEng) {
              this.changes['description']['en'] = this.descriptionEng
            }
            this.changes['description'] = JSON.stringify(this.changes['description'])
          }
        }
      },
      removeElement (i, item) {
        const a = i > 0 ? item.slice(0, i) : []
        const b = i < item.length - 1 ? item.slice(i + 1, item.length) : []
        return a.concat(b)
      },
      removeFromDetails (i) {
        const lang = this.pos ? 'en' : 'es'
        if (lang === 'en') {
          this.productDetailsEng = this.removeElement(i, this.productDetailsEng)
        } else { this.productDetailsEsp = this.removeElement(i, this.productDetailsEsp) }
        this.product.details = { es: this.productDetailsEsp, en: this.productDetailsEng }
        this.changeField('json_details', JSON.stringify(this.product.details))
      },
      removeFromItemOfDetails (i, j) {
        const lang = this.pos ? 'en' : 'es'
        if (lang === 'en') {
          this.productDetailsEng[i].items = this.removeElement(j, this.productDetailsEng[i].items)
        } else { this.productDetailsEsp[i].items = this.removeElement(j, this.productDetailsEsp[i].items) }
        this.product.details = { es: this.productDetailsEsp, en: this.productDetailsEng }
        this.changeField('json_details', JSON.stringify(this.product.details))
      },
      changeDetails (i, j, value) {
        const lang = this.pos ? 'en' : 'es'
        if (lang === 'en') {
          this.productDetailsEng[i].items[j] = value
        } else { this.productDetailsEsp[i].items[j] = value }
        this.product.details = { es: this.productDetailsEsp, en: this.productDetailsEng }
        this.changes['json_details'] = JSON.stringify(this.product.details)
      },
      addDetail (i) {
        const lang = this.pos ? 'en' : 'es'
        if (i === undefined || i === null) {
          if (lang === 'en') {
            this.productDetailsEng.push({ text: '', items: [] })
          } else if (lang === 'es') {
            this.productDetailsEsp.push({ text: '', items: [] })
          }
        } else {
          if (lang === 'en') {
            this.productDetailsEng[i].items.push('')
          } else if (lang === 'es') {
            this.productDetailsEsp[i].items.push('')
          }
        }
        console.log(this.productDetails, '----after')
      },
      log () {
        console.log(this.product.details, 'details')
        console.log(this.changes['json_details'], 'details json')
      },
      async getTypes () {
        this.loading = true
        await this.$store.dispatch('getProductsTypes').then(result => {
          this.productsTypes = result.types
          this.loading = false
          return result.types
        }).catch(e => {
          console.log(e, 'error getTypes')
          this.loading = false
          return []
        })
      },
      onUpdateSelected () {
        const value = this.selectedType ? typeof (this.selectedType) === 'object' ? this.selectedType.value : this.selectedType : null
        this.changeField('typeId', value)
        this.product.typeId = value
      },
      cancel () {
        this.$router.push(`/products${this.product.id ? `/${this.product.id}` : ''}`)
      },
    },
  }
</script>

<style scoped>

</style>
