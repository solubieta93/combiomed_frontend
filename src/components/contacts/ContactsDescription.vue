<template>
  <v-container
    fluid
    class="white_back"
  >
    <div
      id="mycontainer"
      :style="marginStyle"
    >
      <v-col
        class="xs"
        md="12"
        sm="12"
        lg="12"
        xl="12"
      >
        <v-row
          justify="center"
          style="height: 50px; color:#818080;"
        >
          <v-col md="3">
            <hr style="color:#818080;">
          </v-col>
          <v-col md="2">
            <v-row justify="center">
              <h4
                class="text-uppercase"
                style="margin-top: -14px; color:#818080;"
                @mouseover="mouse_over_contact"
                @click="click_contact"
              >
                {{ $t('contacts') }}
                <br>
              </h4>
            </v-row>
          </v-col>
          <v-col md="3">
            <hr style="color:#818080;">
          </v-col>
        </v-row>
      </v-col>

      <div id="contacts">
        <v-col cols="8">
          <v-row
            v-if="contactsItem.length"
            class="justify-center align-center"
          >
            <v-col
              v-for="(item, i) in contactsItem"
              :key="i"
              class="xs"
            >
              <div class="contactos">
                <v-avatar
                  size="200"
                  style="object-fit: cover"
                >
                  <v-img
                    :src="item.image"
                    aspect-ratio="16/9"
                  />
                </v-avatar>
                <h4>{{ item.name }}</h4>
                <h4 class="text-uppercase">
                  {{ locale === 'es' ? item.role_json.es : item.role_json.en }}
                </h4>
                <h5><i class="fi-mail large" /> {{ item.mail }}</h5>
              </div>
            </v-col>
          </v-row>
          <v-row
            v-else
            justify="center"
          >
            <p> {{ $t('notContacts') }} </p>
          </v-row>
        </v-col>
      </div>
    </div>

    <!-- TO ADD CONTACTS, ONLY ADMIN CAN DO IT -->
    <v-row
      v-if="isAdmin"
      justify="center"
    >
      <v-col cols="8">
        <v-row justify="end">
          <v-btn
            fab
            dark
            small
            right
            color="pink"
            to="/contacts/new"
          >
            <v-icon>mdi-plus</v-icon>
          </v-btn>
          <v-btn
            fab
            dark
            small
            right
            color="green"
            to="/contacts/edit"
          >
            <v-icon dark>
              mdi-pencil
            </v-icon>
          </v-btn>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { i18n } from '@/plugins/i18n'

  export default {
    components: {
    },
    props: {
      marginStyle: {
        type: String,
        default: 'margin-top: 2%; margin-bottom: 1%;',
      },
    },
    data () {
      return {
        style_d: 'height: 50px;',
        show: false,
        contactsItem: [],
        addContact: false,
        newContact: null,
        editContact: false,
        deleteContact: false,
      }
    },
    computed: {
      ...mapGetters(['user']),
      isAdmin: function () {
        return this.user && this.user.is_superuser
      },
      locale () {
        return i18n.locale;
      }
    },
    async created () {
      this.paginate()
    },
    methods: {
      async paginate () {
        this.contactsItem = []
        await this.$store.dispatch('getContacts').then(res => {
          console.log(res, 'result contacts')
          this.contactsItem = res
          console.log(this.contactsItem, 'contacts')
        })
      },
      my: function () {
        var button = document.getElementById('contacts')
        if (this.show === false) {
          this.show = true
          button.className = 'show'
        } else {
          button.className = 'shownull'
          this.show = false
        }
      },
      mouse_over_contact: function () {
        this.style_d = 'height: 490px;'
        var button = document.getElementById('contacts')
        button.className = 'show'
      },
      click_contact: function () {
        this.style_d = 'height: 50px;'
        var button = document.getElementById('contacts')
        button.className = 'shownull'
      },
    },
  }
</script>
<style scoped>
.white_back {
  background-color: white !important;
}
.mycontainer {
	margin:auto;
    margin-bottom: 10%;
	width:60%;
}
body {
    background-repeat: no-repeat;
    background-position-y: -25px;
    background-position-x: -50px;
    background-color: bisque;
}
#contacts {
    /* margin-top: 50px; */
    display: flex;

    text-align: center;
    justify-content: center;
    align-content: center;

    /* opacity: 0; */
    overflow: hidden;
    /* height: 400; */
}

.contactos {
    flex-basis: 22%;
}

#container,
#p1,
#p2,
#p3 {
    border-radius: 50%;
}

i.small  { font-size: 0.8rem; }
i.medium  { font-size: 1rem; }
i.large  { font-size: 1.2rem; }

.show {
animation:acordeon 2s;
animation-fill-mode:forwards;
overflow: none;
}

@keyframes acordeon {
0% {
    height:0;
    opacity: 0;
}

100% {
    height:400px;
    opacity: 1;
}
}

</style>
