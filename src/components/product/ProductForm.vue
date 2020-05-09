<template>
  <v-card
    class="mx-auto"
  >
    <v-col>
      <v-row justify="center">
        <v-col md="8">
          <v-text-field
            v-model="product.name"
            label="Nombre"
            :rules="[rules.required, rules.charactersLength(null, 100)]"
            counter="100"
            class="headline"
            @change="value => changeField('name', value)"
          />
          <v-text-field
            v-model="product.description"
            label="Descripcion"
            :rules="[rules.charactersLength(null, 100)]"
            counter="100"
            class="subtitle-1"
            @change="value => changeField('description', value)"
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
            :imgDefault="indexCurrent >= 0 && indexCurrent === indexDefault"
            onlyOne
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
            label="Imagenes"
            multiple            
            @files:changed="(v) => imagesSelected = v"
          />
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col 
          sm="6"
          md="5"
          lg="5"
          xl="5"
          cols="12"
          v-for="(item, i) in imagesURLs"
          :key="item"
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
                  <v-avatar left> <v-icon> mdi-checkbox-marked-circle </v-icon> </v-avatar>
                  <p class="ma-0 justify:center; align: center;"> Principal </p>
                </v-chip>
              </v-row>
            </v-img>
          </div>
        </v-col>
      </v-row>
    </v-col>

    <v-row
      v-for="(item, i) in !loading && product ? product.details : []"
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
  import ResponsiveItems from '../core/ResponsiveItems'
  import Rules from '../../utils/rules'
  
  export default {
    name: 'ProductForm',
    components: {
      ImagesComponent,
      FilesInputComponent,
      ResponsiveItems
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
      changes: {},
      imagesSelected: [],
      imagesURLs: new Array(),
      indexCurrent: -1,
      indexDefault: -1,
      imgURL: null,
      rules: Rules,
      productsTypes: [],
      selectedType: undefined,
    }),
    computed: {
      selectProductsTypes () {
        return this.productsTypes.map(x => ({ text: x.title, value: x.id.toString() }))
      },
      imagesUrlFiltered () {
        return this.imagesURLs.map((x,i) => [x,i]).filter(x => x[1] !== this.indexCurrent)
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
      indexCurrent(value) {
        // console.log(value, 'change indexCurrent')
        // console.log(this.imagesURLs[this.indexCurrent], 'change indexCurrent imgURL')
        console.log('cambie index current')
        console.log(this.imagesURLs && this.imagesURLs.length, 'Boolean')
        console.log(this.imagesURLs[this.indexCurrent], 'value')
        this.imgURL = this.imagesURLs && this.imagesURLs.length ? this.imagesURLs[this.indexCurrent] : null 
        console.log(this.imgURL, 'img url')
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
        this.loading = false
        this.changes = this.editing ? {} : this.productBase
        
        // this.imagesURL = this.product.image
        // this.imgURL = this.imagesURL
        this.imagesURLs = this.product.images
        this.indexDefault = this.product.defaultImage !== -1 ? this.product.defaultImage : 0
        this.indexCurrent = this.indexDefault
        this.imgURL = this.imagesURLs && this.imagesURLs.length ? this.imagesURLs[this.indexCurrent] : null
        
        console.log(this.product.images, 'prod images')        
        console.log(this.imagesURL, 'images urls')
        console.log(this.indexDefault, 'indexDefault ')
        console.log(this.imgURL, 'imgURL ')
        console.log(this.indexCurrent, 'indexCurrent ')
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
        this.product.details = this.removeElement(i, this.product.details)
        this.changeField('json_details', JSON.stringify({ details: this.product.details }))
      },
      removeFromItemOfDetails (i, j) {
        this.product.details[i].items = this.removeElement(j, this.product.details[i].items)
        this.changeField('json_details', JSON.stringify({ details: this.product.details }))
      },
      changeDetails (i, j, value) {
        this.product.details[i].items[j] = value
        this.changeField('json_details', JSON.stringify({ details: this.product.details }))
      },
      addDetail (i) {
        if (i === undefined || i === null) {
          this.product.details.push({
            text: '',
            items: [],
          })
        } else {
          this.product.details[i].items.push('')
        }
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
