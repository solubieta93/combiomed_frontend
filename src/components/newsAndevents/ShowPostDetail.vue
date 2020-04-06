<template>
  <v-container>
    <v-col cols="12">
      <!-- style="height: 50px; margin-top: 10px; " -->
      <v-row justify="left">
        <v-col md="1" />
        <v-col
          v-if="ubication_news === 'Right'"
          md="4"
        >
          <v-img
            :aspect-ratio="16/9"
            :src="post.image ? post.image : `${baseUrl}ampa- (1).png`"
            style="top:0px"
          />
          <!-- <v-img v-if="blog && blog.length && blog[1].image"
                    src={{blog[1].image.src}} style="top:0px"/> -->
        </v-col>
        <v-col
          v-if="ubication_news === 'Right'"
          md="7"
        >
          <v-row>
            <v-col md="7">
              <h3
                class="text-uppercase"
                style="margin-top: -14px;  color: grey;"
              >
                {{ post.title }}
                <br>
              </h3>
            </v-col>
            <v-col md="5">
              <hr>
            </v-col>
          </v-row>
          <v-row>
            <v-col md="12">
              <h3 style="margin-top: -14px;  color: grey;">
                {{ post.context }}
                <br>
              </h3>
            </v-col>
          </v-row>
        </v-col>
        <v-col
          v-if="ubication_news === 'Left'"
          md="7"
        >
          <v-row>
            <v-col md="7">
              <h3
                class="text-uppercase"
                style="margin-top: -14px;  color: grey;"
              >
                {{ post.title }}
                <br>
              </h3>
            </v-col>
            <v-col md="5">
              <hr>
            </v-col>
          </v-row>
          <v-row>
            <v-col md="12">
              <h3 style="margin-top: -14px;  color: grey;">
                {{ post.context }}
                <br>
              </h3>
            </v-col>
          </v-row>
        </v-col>
        <v-col
          v-if="ubication_news === 'Left'"
          md="4"
        >
          <v-img
            :aspect-ratio="16/9"
            :src="post.image ? post.image : `${baseUrl}ampa- (1).png`"
            style="top:0px"
          />
          <!-- <v-img v-if="blog && blog.length && blog[1].image"
                    src={{blog[1].image.src}} style="top:0px"/> -->
        </v-col>
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
  export default {
    props: {
      ubication_news: {
        type: String,
        default: 'Left',

      },
      post: {
        id: Number,
        title: String,
        owner: String,
        context: String,
        image: null,
        news: Boolean,
        default: null,
      },

    },
      watch: {
        post (value) {
            if (value)
                console.log('hay un post')
        }
      },
    data () {
      return {
        baseUrl: process.env.BASE_URL,
      }
    },
  }
</script>
