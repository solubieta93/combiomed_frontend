<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
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
  import { i18n } from '@/plugins/i18n'
  export default {
    data () {
      return {
        languages: [
          { flag: 'es', language: 'es', title: 'Español' },
          { flag: 'us', language: 'en', title: 'English' },
        ],
        currentLanguage: i18n.locale === 'es' ? 0 : 1,
      }
    },
    methods: {
      changeLocale (language, index) {
        this.currentLanguage = index
        this.$emit('changeLocale', language)
      },
    },
  }
</script>

<style scoped>

</style>
