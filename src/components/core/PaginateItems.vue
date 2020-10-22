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
              :value="limit"
              :readonly="!canChangeLimit"
              class="mx-auto"
              type="number"
              :min="Math.min(count, 1)"
              :max="10"
              :disabled="!count"
              style="width: 120px; max-width: 120px"
              :hint="`Total: ${count}`"
              persistent-hint
              :label="$t('countByPage')"
              :rules="[x => (Number.isInteger(x))]"
              @input="v => changeLimit(v)"
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
      :are-products="areProducts"
    ></responsive-items>
    <v-row
      v-if="!items.length"
      justify="center"
      align="center"
    >
      <v-spacer />
      <h2 class="align-center">{{ $t('notData') }}</h2>
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
      areProducts:{
        type: Boolean,
        default:false
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
      // async limit (value) {
      //   this.limit = Number.parseInt(value) || Math.min(1, this.count)
      //   this.page = 1
      //   await this.updateItems()
      // },
      // async defaultLimit (value) {
      //   this.limit = Number.parseInt(value) || Math.min(1, this.count)
      //   this.page = 1
      //   await this.updateItems()
      // },
      async refresh (value) {
        if (value) {
          this.page = 1
          await this.updateItems()
        }
      },
    },
    mounted () {
      this.limit = this.defaultLimit
    },
    methods: {
      async appliedSearch (text) {
        this.page = 1
        this.text = text
        await this.updateItems()
      },
      async updateItems () {
        this.loading = true
        const offset = (this.page - 1) * this.limit
        const { items, count } = await this.filterItems(this.text, offset, this.limit)
        this.items = items
        this.count = count
        this.loading = false
      },
      async changeLimit (value) {
        const parsed = Number.parseInt(value)
        console.log(parsed, 'parsed')
        if (!parsed) return
        console.log(parsed, 'parsed')
        this.limit = parsed || Math.min(1, this.count)
        this.page = 1
        await this.updateItems()
      },
    },
  }
</script>

<style scoped>

</style>