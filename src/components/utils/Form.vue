<template>
<!--  backgroundImage: `url(${baseUrl}web-combiomed-futer-04-04.png)`-->
  <v-row
    justify="center"
    style="background-size: cover;"
    :style="{
      backgroundAttachment: 'scroll, fixed',
      backgroundPosition: '0px, 0px, 50% 50%',
      backgroundImage: 'linear-gradient(white, grey)'
    }"
  >
    <v-dialog
      v-model="sendEmailBoolean"
      persistent
      overlay-color="red"
      overlay-opacity=".30"
      width="50%"
    >
      <v-btn
        dark
        @click="sendEmailBoolean = false"
      >
        {{ sendEmailMessage }}
        <v-icon right>
          mdi-close
        </v-icon>
      </v-btn>
    </v-dialog>

    <v-col
      class="pb-0"
      cols="12"
    >
      <v-row
        justify="center"
        :style="rowStyle"
      >
        <v-col
          class="justify-center align-center pb-0"
          :class="{'col-3': $vuetify.breakpoint.lgAndUp || $vuetify.breakpoint.smOnly,
                   'col-12 pb-0': $vuetify.breakpoint.xsOnly, 'col-4': $vuetify.breakpoint.mdOnly}"
        >
          <v-row justify="center">
            <img src="../../../public/ICONOS/map-marker.png">
          </v-row>
          <v-row class="align-center justify-center">
            <v-col
              cols="10"
              class="text-center"
            >
              <p class="body-2 font-italic font-weight-bold mb-0 align-center">
                Calle 202 No.1704 entre 17 y 19. Siboney. Playa. La Habana. Cuba
              </p>
            </v-col>
          </v-row>
        </v-col>

        <v-col
          class="pb-0"
          :class="{'col-6': $vuetify.breakpoint.xsOnly, 'col-3': !$vuetify.breakpoint.mdOnly && !$vuetify.breakpoint.xsOnly}"
        >
          <v-row justify="center">
            <img src="../../../public/ICONOS/email.png">
          </v-row>
          <v-row justify="center">
            <v-col
              md="7"
              cols="6"
            >
              <p class="body-2 font-italic font-weight-bold">
                E-mail: combio@icid.cu
              </p>
            </v-col>
          </v-row>
        </v-col>

        <v-col
          class="pb-0"
          :class="{'col-6': $vuetify.breakpoint.xsOnly, 'col-3': !$vuetify.breakpoint.mdOnly && !$vuetify.breakpoint.xsOnly}"
        >
          <v-row justify="center">
            <img src="../../../public/ICONOS/phone.png">
          </v-row>
          <v-row justify="center">
            <v-col cols="9">
              <p class="caption font-italic font-weight-bold">
                Telf:(+53) 7 2739088, (+53)7 2719132
              </p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <v-form
        ref="mailForm"
        v-model="valid"
        :class="{'px-1': $vuetify.breakpoint.xsOnly}"
      >
        <v-row justify="center">
          <v-col
            :class="{'col-3': $vuetify.breakpoint.xlOnly || $vuetify.breakpoint.smOnly,
                     'col-4': $vuetify.breakpoint.mdOnly, 'col-5': $vuetify.breakpoint.lgOnly}"
          >
            <v-text-field
              v-model="mailDetail['name']"
              label="Nombre"
              single-line
              outlined
              hide-details
              color="red"
              dense
            />
          </v-col>
          <v-col
            :class="{'col-3': $vuetify.breakpoint.xlOnly || $vuetify.breakpoint.smOnly,
                     'col-4': $vuetify.breakpoint.mdOnly, 'col-5': $vuetify.breakpoint.lgOnly}"
          >
            <v-text-field
              v-model="mailDetail['email']"
              label="E-mail"
              single-line
              outlined
              dense
              color="red"
              :rules="[rules.emailValid, rules.required]"
            />
          </v-col>
          <v-col
            :class="{'col-3': $vuetify.breakpoint.xlOnly || $vuetify.breakpoint.smOnly,
                     'col-4': $vuetify.breakpoint.mdOnly, 'col-10': $vuetify.breakpoint.lgOnly}"
          >
            <v-text-field
              v-model="mailDetail['summary']"
              label="Asunto"
              single-line
              hide-details
              outlined
              dense
              color="red"
            />
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col
            :class="{'col-9': $vuetify.breakpoint.xlOnly || $vuetify.breakpoint.smOnly,
                     'col-12': $vuetify.breakpoint.mdOnly || $vuetify.breakpoint.xsOnly , 'col-10': $vuetify.breakpoint.lgOnly}"
          >
            <v-textarea
              v-model="mailDetail['message']"
              label="Introduzca su mensaje"
              single-line
              outlined
              dense
              color="red"
              counter
              maxlength="1000"
            />
          </v-col>
        </v-row>
        <v-row class="justify-center align-center">
          <v-col class="justify-center align-center pa-0">
            <v-row class="justify-center align-center">
              <my-captcha
                :call-success="captchaBtn"
                color="black"
                resolve="text"
                style="border: 0px"
              />
            </v-row>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col
            class="xs"
            md="12"
            sm="9"
            lg="10"
            xl="9"
          >
            <v-btn
              color="#001A33"
              block
              :loading="loading"
              :disabled="btndis"
              @click="sendMail"
            >
              <h5 style="color: white;">
                Enviar ahora
              </h5>
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-col>
  </v-row>
</template>

<script type="application/javascript" lang="js">
  import Rules from '../../utils/rules'
  import myCaptcha from 'vue-captcha'

  export default {
    components: {
      'my-captcha': myCaptcha,
    },
    data () {
      return {
        captcha: false,
        captchaSiteKey: '6LezhgAVAAAAAAGKKnxp1lMw3-iun7_Fw98QWsK3',
        baseUrl: process.env.BASE_URL,
        rules: Rules,
        valid: true,
        disableSubmit: true,
        mailDetail: { email: '', message: '', summary: '', name: '' },
        validation: false,
        sendEmailMessage: '',
        sendEmailBoolean: false,
        loading: false,
        total: -1,
        valueSumByUser: -1,
        textSum: '',
        errorText: '',
        showError: false,
        btndis: true,
      }
    },
    computed: {
      rowStyle () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return 'margin-top: 20%;'
          case 'sm': return 'margin-top: 8%;'
          case 'md': return 'margin-top: 120px;'
          case 'lg': return 'margin-top: 110px;'
          case 'xl': return 'margin-top: 300px;'
          default: return 'margin-top: 20%;'
        }
      },
    },
    watch: {
      // valueSumByUser (value) {
      //   this.checkInput(value)
      // },
    },
    mounted () {
      let recaptchaScript = document.createElement('script')
      // vueRecaptchaApiLoaded
      recaptchaScript.setAttribute('src', 'https://www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit')
      recaptchaScript.async = true
      recaptchaScript.defer = true
      document.head.appendChild(recaptchaScript)
    },
    created () {
    },
    methods: {
      async sendMail () {
        this.loading = true
        if (this.$refs.mailForm.validate()) {
          var templateParams = {
            subject: this.mailDetail['summary'],
            message: 'Nombre del remitente: \n ' + this.mailDetail['name'] + '\n' + 'Mensaje: \n' + this.mailDetail['message'],
            from_email: this.mailDetail['email'],
            to: ['solubieta93@gmail.com'],
          }
          const res = await this.$store.dispatch('sendEmail', templateParams)
          if (res.success) {
            this.sendEmailBoolean = true
            this.sendEmailMessage = res.message
          } else {
            this.sendEmailBoolean = true
            this.sendEmailMessage = res.message
          }
        }
        this.loading = false
      },
      captchaBtn () {
        this.btndis = false
      },
    },
  }
</script>

<style scoped>
  .back {
    background-color: white;
  }
</style>
