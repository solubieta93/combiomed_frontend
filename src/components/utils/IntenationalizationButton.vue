<template>
  <v-row class="justify-end pr-8">
    <v-menu offset-y>
      <template v-slot:activator="{on, attrs}">
        <v-btn
          color="primary"
          dark
          icon
          v-bind="attrs"
          v-on="on"
        >
          <flag
            :iso="languages[currentLanguage].flag"
            :squared="false"
          />
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(entry, index) in languages"
          :key="index"
          class="ma-0"
        >
          <v-list-item-icon
            class="mr-0"
            @click="changeLocale(entry.language, index)"
          >
            <flag
              :iso="entry.flag"
              :squared="false"
            />
          </v-list-item-icon>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-row>
</template>

<script>
  export default {
    data () {
      return {
        languages: [
          { flag: 'us', language: 'en', title: 'English' },
          { flag: 'es', language: 'es', title: 'Español' },
        ],
        currentLanguage: 0,
      }
    },
    methods: {
      changeLocale (language, index) {
        this.currentLanguage = index
        this.$emit('changeLocale', language)
      },
    }
  }
</script>

<style scoped>

</style>
