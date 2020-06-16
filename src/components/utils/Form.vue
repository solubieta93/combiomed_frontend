<template>
  <v-row
    justify="center"
    style="background-size: cover;"
    :style="{
      backgroundAttachment: 'scroll, fixed',
      backgroundPosition: '0px 0px, 50% 50%',
      backgroundImage: `url(${baseUrl}web-combiomed-futer-04-04.png)`
    }"
  >
    <v-dialog
      v-model="sendEmailBoolean"
      persistent
      overlay-color="red"
      overlay-opacity=".30"
    >
      <v-btn
        dark
        text
        @click="sendEmailBoolean = false"
      >
        {{ sendEmailMessage }}
        <v-icon>close</v-icon>
      </v-btn>
    </v-dialog>

    <v-col
      class="xs"
      md="12"
      sm="12"
      lg="12"
      xl="12"

      cols="12"
    >
      <v-row
        justify="center"
        :style="rowStyle"
      >
        <v-col
          class="xs"
          md="4"
          sm="3"
          lg="3"
          xl="3"

          cols="12"
        >
          <v-row justify="center">
            <img src="../../../public/ICONOS/map-marker.png">
          </v-row>
          <v-row justify="center">
            <v-col cols="10">
              <p class="body-2 font-italic font-weight-bold">
                Calle 202 No.1704 entre 17 y 19. Siboney. Playa. La Habana. Cuba
              </p>
            </v-col>
          </v-row>
        </v-col>

        <v-col
          class="xs"
          md="3"
          sm="3"
          lg="3"
          xl="3"
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
          class="xs"
          md="4"
          sm="3"
          lg="3"
          xl="3"
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
      >
        <v-row justify="center">
          <v-col
            class="xs"
            md="4"
            sm="3"
            lg="5"
            xl="3"
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
            class="xs"
            md="4"
            sm="3"
            lg="5"
            xl="3"
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
            class="xs"
            md="4"
            sm="3"
            lg="10"
            xl="3"
          >
            <v-text-field
              v-model="mailDetail['summary']"
              label="Asunto"
              single-line
              outlined
              dense
              color="red"
            />
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
        <v-row justify="center">
          <v-col
            class="xs"
            md="12"
            sm="9"
            lg="10"
            xl="9"
          >
            <captcha-vue
              id="recaptcha-main"
              ref="recaptcha"
              size="invisible"
              :sitekey="captchaSiteKey"
              @verify="onVerify"
              @expired="onExpired"
            />
            <v-btn
              color="#001A33"
              block
              @click="submit"
              :loading="loading"
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

<script type="application/javascript">
  import Rules from '../../utils/rules'
  import VueReCaptcha from 'vue-recaptcha'
  export default {
    components: {
      'captcha-vue': VueReCaptcha,
    },
    data () {
      return {
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
      }
    },
    computed: {
      rowStyle () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return 'margin-top: 20%;'
          case 'sm': return 'margin-top: 8%;'
          case 'md': return 'margin-top: 120px;'
          case 'lg': return 'margin-top: 135px;'
          case 'xl': return 'margin-top: 300px;'
          default: return 'margin-top: 20%;'
        }
      },
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
      this.OnLoadCallback()
    },
    methods: {
      OnLoadCallback () {
        this.$nextTick(function () {
          if (window.grecaptcha !== undefined) {
            window.grecaptcha.render('recaptcha-main',
                                     {
                                       'sitekey': this.captchasiteKey,
                                       'callback': 'sendMail',
                                     }
            )
          }
        })
      },
      async submit () {
        this.loading = true
        if (this.$refs.mailForm.validate()) {
          this.$refs.recaptcha.execute()
        } else this.loading = false
      },
      async sendMail () {
        var templateParams = {
          subject: this.mailDetail['summary'],
          message: 'Nombre del remitente: \n ' + this.mailDetail['name'] + '\n' + 'Mensaje: \n' + this.mailDetail['message'],
          from_email: this.mailDetail['email'],
        }
        const res = await this.$store.dispatch('sendEmail', templateParams)
        if (res.success) {
          this.sendEmailBoolean = true
          this.sendEmailMessage = res.message
        } else {
          this.sendEmailBoolean = true
          this.sendEmailMessage = res.message
        }
        this.loading = false
      },
      onExpired: function () {
        if (this.loading) {
          this.sendEmailBoolean = true
          this.sendEmailMessage = 'Conexión inestable, correo no enviado, inténtelo nuevamente'
          this.loading = false
        }
      },
      resetRecaptcha () {
        console.log('RESET')
        this.$refs.recaptcha.reset() // Direct call reset method
      },
      async onVerify (response) {
        const VERIFY_URL = 'https://www.google.com/recaptcha/api/siteverify'
        var templateParams = {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Access-Control-Allow-Origin': '*',
          },
          params: {
            secret: '6LezhgAVAAAAAGR5-kJ0TjVopdNxCVm9vaeAZhm9',
            response,
          },
          url: VERIFY_URL,
        }
        const responsePost = await this.$store.dispatch('verifyCaptcha', templateParams);
        if (responsePost.success) {
          this.sendMail()
        } else {
          this.sendEmailBoolean = true
          this.sendEmailMessage = responsePost.message
          this.loading = false
        }
      },
    },
  }
</script>

<style scoped>
  .back {
    background-color: white;
  }
  .mycontainer {
    margin:auto;
    width:80%;
  }
  .xsOnlyStyle {
    /*margin-bottom: -9%;*/
    /*z-index:1;*/
  }
  .smAndDownStyle {
    /*margin-bottom: -5%;*/
    /*z-index:1;*/
  }
  .mdAndUpStyle {
    /*margin-bottom: -3%;*/
  }
  .xlOnlyStyle {
    height: 50%;
  }
  .xsOnlyRowStyle {
    margin-bottom: 8%;
  }
  .smAndDownRowStyle {
    margin-bottom: 3%;
  }
  .mdAndUpRowStyle  {
    margin-bottom: 5%;
  }
</style>
