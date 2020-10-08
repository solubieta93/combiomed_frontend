import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
  en: {
    quienessomos: 'Us',
    quienesSomosText1: 'Our institution was created in 1969 with the name of Research Center\n' +
      '            Digitales (CID), later the Central Institute for Digital Research (ICID), with the\n' +
      '            objective of developing the first Cuban computer. From December 2018 and until\n' +
      '            Today we call ourselves COMBIOMED Digital Medical Technology.',
    quienesSomosText2: '',
    leermas: 'Read More',
    leermenos: 'Read Less',
    genesis: '',
    computadoraText1: '',
    computadoraText2: '',
    computadoraAltImageText: '',
    product: 'Products',
    service: 'Services',
    tech: 'TECH',
    mec: '',
    aut: '',
    newsEvents: 'News & Events',
    contacts: 'Contacts',
    home: 'Home',
    out: 'Logout',
    linesProduct: 'Products Lines',
  },
  es: {
    quienessomos: 'quienes somos',
    quienesSomosText1: 'Nuestra institución fue creada en 1969 con el nombre de Centro de Investigaciones\n' +
      '            Digitales (CID), más tarde Instituto Central de Investigación Digital (ICID), con el\n' +
      '            objetivo de desarrollar la primera computadora cubana. Desde diciembre de 2018 y hasta\n' +
      '            la actualidad nos nombramos COMBIOMED Tecnología Médica Digital.',
    quienesSomosText2: 'Tenemos referencia en el mercado nacional e internacional y brindamos soluciones tecnológicas\n' +
      '            seguras y asequibles para la salud. Nuestro objetivo es investigar, desarrollar, producir,\n' +
      '            comercializar y brindar servicio técnico a equipos electrónicos para la medicina, la automatización, etc.',
    leermas: 'Leer Más',
    leermenos: 'Leer Menos',
    genesis: 'Génesis',
    computadoraText1: 'PRIMERA COMPUTADORA CUBANA: CID 201',
    computadoraText2: ' El 18 de Abril de 1970 funcionó la primera computadora cubana. Más tarde, comenzó la producción\n' +
      '                de minicomputadoras como la CID 201A y CID 201B. Se produjeron más de 100 equipos, con los cuáles\n' +
      '                se logró el inicio del desarrollo de la automatización en nuestro centro, logrando automatizar\n' +
      '                centrales azucareros y otros centro de la economía nacional, tarea que sigue incrementándose posteriormente,\n' +
      '                con el diseño y producción de los primeros autómatas NODOREM.',
    computadoraAltImageText: 'La primera computadora cubana CID 201',
    product: 'Productos',
    service: 'Servicios',
    tech: 'TÉCNICOS',
    mec: 'MECÁNICA',
    aut: 'AUTOMÁTICA',
    newsEvents: 'Noticias y Eventos',
    contacts: 'Contactos',
    home: 'Inicio',
    out: 'Salir',

    linesProduct: 'Líneas de Productos',
  },
}

// Create VueI18n instance with options
export const i18n = new VueI18n({
  locale: 'es', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages, // set locale messages
})