<template>
  <v-app>
    <router-view />
    <notifications style="margin-top: 6px;margin-right: 6px" group="auth" position="top center">
      <template slot="body" slot-scope="props">
        <v-alert
          border="bottom"
          colored-border
          :type="props.item.type"
          elevation="2"
          dense
          prominent
          :icon="null"
          dismissible
          @toggle="props.close"
        >
          <span v-if="props.item.title" class="subtitle-2">{{props.item.title}}</span>
          <br v-if="props.item.title" />
          <span class="caption">{{props.item.text}}</span>
        </v-alert>
      </template>
    </notifications>
  </v-app>
</template>

<script>
  export default {
    components: {
    },
  }
</script>
