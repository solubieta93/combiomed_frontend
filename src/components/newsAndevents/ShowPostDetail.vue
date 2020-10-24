<template>
  <!--  -->
  <div class="mycontainer2">
    <v-row
      v-if="ubicationNews === 'Right'"
      style="margin-right: 0px; margin-left: 0px;"
    >
      <v-col
        v-if="ubicationNews === 'Right'"
        sm="5"
        md="6"
        lg="6"
        xl="6"
        cols="7"
      >
        <v-img
          :aspect-ratio="16/9"
          :src="post.image ? post.image : `${baseUrl}ampa- (1).png`"
          style="top:0px; opacity:0.50;"
        />
      </v-col>

      <v-col
        v-if="ubicationNews === 'Right'"
        sm="7"
        md="6"
        lg="6"
        xl="6"
        cols="5"
        style="margin-left: -5%;"
      >
        <v-row>
          <h3
            class="text-uppercase"
            style="color: grey;"
          >
            {{ localeLang === 'es' ? post.title_json.es : post.title_json.en }}
<!--            {{ post.title }}-->
            <br>
          </h3>
        </v-row>
<!--        v-for="(item, i) in post ? post.details : []"-->
        <v-row
          v-for="(item, i) in post ? localeLang === 'es' ? post.details_es : post.details_en ? post.details_en : [] : []"
          :key="i"
          justify="center"
          align="center"
        >
          <v-col
            cols="12"
            class="pa-0"
          >
            <h4>{{ item.text }}</h4>
            <p
              v-for="(value, index) in item.items"
              :key="index"
            >
              {{ value }}
            </p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-row
      v-if="ubicationNews === 'Left'"
      style="margin-right: 0px; margin-left: 0px;"
    >
      <v-col
        v-if="ubicationNews === 'Left'"
        sm="7"
        md="6"
        lg="6"
        xl="6"
        cols="5"
      >
        <v-row>
          <h3
            class="text-uppercase"
            style=" color: grey;"
          >
            {{ localeLang === 'es' ? post.title_json.es : post.title_json.en }}
<!--            {{ post.title }}-->
            <br>
          </h3>
        </v-row>
<!--        v-for="(item, i) in post ? post.details : []"-->
        <v-row
          v-for="(item, i) in post ? localeLang === 'es' ? post.details_es : post.details_en ? post.details_en : [] : []"
          :key="i"
          justify="center"
          align="center"
        >
          <v-col
            cols="12"
            class="pa-0"
          >
            <h4>{{ item.text }}</h4>
            <p
              v-for="(value, index) in item.items"
              :key="index"
            >
              {{ value }}
            </p>
          </v-col>
        </v-row>
      </v-col>
      <v-col
        v-if="ubicationNews === 'Left'"
        sm="5"
        md="6"
        lg="6"
        xl="6"
        cols="7"
        style="margin-left: -5%;"
      >
        <v-img
          :aspect-ratio="16/9"
          :src="post.image ? post.image : `${baseUrl}ampa- (1).png`"
          style="top:0px; opacity:0.70;"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import { i18n } from '@/plugins/i18n'
  export default {
    props: {
      ubicationNews: {
        type: String,
        default: 'Left',

      },
      post: {
        type: Object,
        default: null,
      },

    },
    data () {
      return {
        baseUrl: process.env.BASE_URL,
      }
    },
    computed: {
      localeLang () {
        return i18n.locale;
      },
    },
  }
</script>

<style scoped>
.white_back {
  background-color: white !important;
}

.myimg{
width:100%;
height:100%;
}

.mycontainer2 {
	margin:auto;
  margin-bottom: 15%;
  background-color: white !important;
	width:80%;
}

.mygrid{
	display:grid;
	grid-template-columns: repeat(4, 1fr);
	grid-gap: 1px;
	/* grid-auto-rows:10px; */
  /* margin-left: 40px;
  margin-right: 40px; */
}

.mygrid div{
	overflow:hidden;
}

.item-0{
  grid-row: 1/5;
	grid-column: 1/3;
	height: 100%;
  margin-right: -20px;
  z-index: 1;
}
.item-1{
  grid-row: 1/2;
	grid-column: 3/4;
	height: 100%;
  z-index: 2;
}
.item-2{
  grid-row: 2/3;
	grid-column: 3/5;
	height: 100%;
  z-index: 2;
}
.item-3{
  grid-row: 1/2;
	grid-column: 4/5;
	height: 100%;
  z-index: 2;
}
.item-00{
  grid-row: 1/2;
	grid-column: 1/2;
	height: 100%;
  z-index: 2;
}
.item-10{
  grid-row: 1/5;
	grid-column: 3/5;
	height: 100%;
  z-index: 1;
  margin-left: -20%
}
.item-20{
  grid-row: 2/3;
	grid-column: 1/3;
	height: 100%;
  z-index: 2;
}
.item-30{
  grid-row: 1/2;
	grid-column: 2/3;
	height: 100%;
  z-index: 2;
}
</style>
