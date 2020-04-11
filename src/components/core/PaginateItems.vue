<template>
  <v-col>
    <slot @update:items="updateItems"></slot>
    <v-row
      justify="center"
      align="center"
    >
      <v-row
        justify="center"
        align="center"
        style="max-width: 50vw"
      >
        <v-col>
          <query-search
            v-if="showSearchText"
            :loading="loading"
            :on-key-up-function="updateOnChangeText ? appliedSearch : null"
            :search-text="appliedSearch"
          ></query-search>
        </v-col>
        <v-col>
          <v-row
            justify="start"
            align="start"
            class="ml-0"
          >
            <v-text-field
              v-if="showLimit"
              v-model="limit"
              :readonly="!canChangeLimit"
              class="mx-auto"
              type="number"
              :min="Math.min(count, 1)"
              :max="count"
              :disabled="!count"
              style="width: 120px; max-width: 120px"
              :hint="`Total: ${count}`"
              persistent-hint
              label="Cantidad por paginas"
              :rules="[x => (Number.isInteger(x))]"
            />
          </v-row>
        </v-col>
      </v-row>
    </v-row>
    <v-row
      v-if="showDivider"
      align="center"
      justify="center"
    >
      <v-col class="px-6">
        <v-divider />
      </v-col>
    </v-row>
    <v-row
      v-if="showDivider"
      align="center"
      justify="center"
    >
      <v-col>
        <v-pagination
          v-model="page"
          :length="paginationLength"
          circle
          color="#8b0000"
          :total-visible="6"
          @input="(x) => updateItems()"
        />
      </v-col>
    </v-row>
    <responsive-items
      :items="items"
    ></responsive-items>
    <v-row
      v-if="!items.length"
      justify="center"
      align="center"
    >
      <v-spacer />
      <h2 class="align-center">No hay elementos para mostrar</h2>
      <v-spacer />
    </v-row>
  </v-col>
</template>

<script>
  import ResponsiveItems from './ResponsiveItems'
  import QuerySearch from './QuerySearch'
  export default {
    name: 'PaginateItems',
    components: {
      ResponsiveItems,
      QuerySearch,
    },
    props: {
      filterItems: {
        type: Function,
        default: (search, offset, limit) => ({
          items: [],
          count: 0,
        }),
      },
      showLimit: {
        type: Boolean,
        default: true,
      },
      defaultLimit: {
        type: Number,
        default: 5,
      },
      canChangeLimit: {
        type: Boolean,
        default: true,
      },
      showSearchText: {
        type: Boolean,
        default: true,
      },
      updateOnChangeText: {
        type: Boolean,
        default: false,
      },
      showDivider: {
        type: Boolean,
        default: true,
      },
      refresh: Boolean,
    },
    data: () => ({
      items: [],
      count: 0,
      loading: false,
      limit: 5,
      page: 1,
    }),
    computed: {
      paginationLength () {
        return Number.parseInt(this.count % this.limit > 0 ? (this.count / this.limit) + 1 : this.count / this.limit)
      },
    },
    watch: {
      async limit (value) {
        this.limit = Number.parseInt(value) || Math.min(1, this.count)
        this.page = 1
        await this.updateItems()
      },
      async defaultLimit (value) {
        this.limit = Number.parseInt(value) || Math.min(1, this.count)
        this.page = 1
        await this.updateItems()
      },
      async refresh (value) {
        if (value) {
          await this.updateItems()
        }
      },
    },
    mounted () {
      console.log('paginated mounted')
      this.limit = this.defaultLimit
      // await this.updateItems()
    },
    methods: {
      async appliedSearch (text) {
        this.page = 1
        this.text = text
        await this.updateItems()
      },
      async updateItems () {
        this.loading = true
        console.log('update items')
        const offset = (this.page - 1) * this.limit
        const { items, count } = await this.filterItems(this.text, offset, this.limit)
        this.items = items
        this.count = count
        this.loading = false
      },
    },
  }
</script>

<style scoped>

</style>