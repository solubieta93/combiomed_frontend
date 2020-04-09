<template>
  <v-row
    justify="center"
    align="center"
  >
    <v-row
      justify="center"
      align="center"
      style="max-width: 80vw"
    >
      <v-col
        v-for="(item, i) in items"
        :key="i"
      >
        <item-preview
          :item="item.item"
          :pathTo="item.pathTo"
        ></item-preview>
      </v-col>
    </v-row>
  </v-row>
</template>

<script>
  import ItemPreview from '@/components/core/ItemPreview'
  // import QuerySearch from '@/components/core/QuerySearch'
  export default {
    components: {
      ItemPreview,
      // QuerySearch,
    },
    props: {
      items: {
        type: Array,
        default: new Array([]),
      },
    },
  }
</script>

<style scoped>

</style>