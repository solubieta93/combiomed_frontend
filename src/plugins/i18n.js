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
    quienesSomosText2: 'We have reference in the national and international market and we provide technological solutions ' +
      'safe and affordable for health. Our goal is to research, develop, produce, market and provide technical service ' +
      'to electronic equipment for medicine, automation, etc.',
    leermas: 'Read More',
    leermenos: 'Read Less',
    genesis: '',
    computadoraText1: 'FIRST CUBAN COMPUTER: CID 201',
    computadoraText2: 'On April 18, 1970, the first Cuban computer worked. Later, production started ' +
      'from minicomputers such as the CID 201A and CID 201B. More than 100 teams were produced, with which ' +
      'the start of automation development was achieved in our center, managing to automate ' +
      'sugar mills and other centers of the national economy, a task that continues to grow later, ' +
      'with the design and production of the first NODOREM automata.' +
      'computerAltImageText: The first Cuban computer CID 201',
    computadoraAltImageText: 'The first Cuban computer CID 201',
    product: 'Products',
    service: 'Services',
    tech: 'TECH',
    mec: 'MECHANICS',
    aut: 'AUTOMATIC',
    servtech: 'Technical services',
    servmec: 'Mechanical Services',
    servaut: 'Automation Services',
    newsEvents: 'News & Events',
    contacts: 'Contacts',
    home: 'Home',
    out: 'Logout',
    linesProduct: 'Products Lines',
    servAutoText1: 'With over four decades of experience, our COMBIOMED Automation team ' +
      'has dedicated to the research and development of products with high level of integration and ' +
      'novel solutions for the automation of the biotechnology industry, buildings and ' +
      'specialized equipment or systems.',
    servAutoText2: 'Our solutions are dedicated in the first place to saving the energy consumption of the facilities, ' +
      'as well as increasing comfort, reliability and safety.',
    servAutoText3: 'Over the years, a wide experience has been accumulated in equipment and software of different ' +
      'companies, including: Iconics, Kepware, Siemens AG, Klockner Moeller, Circutor, Schneider ' +
      'Electric, Idec, Johnson Controls, Automated Logic Corporation, Phoenix Contact, Mettler Toledo, and Thermibel.',
    projectLlave: 'PROJECTS "LLAVE EN MANO"',
    jobLines: 'MAIN LINES OF WORK',
    lines1: 'Execution projects "llave en mano".',
    lines2: 'Control solutions for equipment, production lines and smart buildings.',
    lines3: ' Software development for different applications.',
    lines4: 'Design and Production of electric boards.',
    lines5: ' Maintenance or repair of specialized electronic systems and equipment.',
    lines6: 'Technical advice.',
    projects1: 'Our accumulated experience in this field allows us to carry out work ranging from the' +
      ' offer for the tender to the delivery of the system.',
    projects2: 'Our offers are wide-ranging and include within their contracting points items such as: equipment, ' +
      'programs for supervision and control systems, field elements, cables and accessories, offered at the best prices.',
    projects3: 'Once the system is delivered, our specialists give a special and rigorous monitoring of its exploitation for a period of one year, the guarantee covers this stage.',
    projects4: 'We provide specialized maintenance with which we guarantee the client the continuous exploitation of the solution.',
    clientsText: 'OUR CLIENTS',
    clientsItem1: 'Hotels',
    clientsItem2: 'Palco Hotel, Residencial Club Habana, Melias las Antillas Hotel, Royalton Hicacos Hotel, Blau Varadero Hotel.',
    clientsItem3: 'Centers for Biotechnology and Drug Manufacturing Laboratories.',
    clientsItem4: 'National Center for Biopreparations (BioCen), AICA, MEDSOL Laboratories, Center for Genetic Engineering and ' +
      'Biotechnology (CIGB) and Center for Neurosciences of Cuba (CNEURO).',

    mechServ: 'Mechanics Service',
    mechText1: 'COMBIOMED Digital Medical Technology includes facilities for electromechanical production, supported by ' +
      'decades of experience with the most modern technologies for the manufacture of high quality mechanical parts for medical equipment and others.',
    mechText2: 'The Mechanical Production Plant (PPM) of the COMBIOMED Digital Medical Technology company provides the following services:',
    mechText3: 'COLD FORMED',
    mechText4: 'It is a process that works on sheets of different materials, including metals such as aluminum, steel, ' +
      'stainless steel, horiblen; being materials that our company provides, in addition to taking into account the client\'s ' +
      'request in the use of another type of material such as plates, copper and brass. It is used in the production of supports, ' +
      'metal structures, bars, protection means, and any other type of process that requires bending, punching and welding. ',
    mechText5: 'For cold forming the machinery is the following:',
    mechText6: '- Shear for cutting sheet metal up to 4 mm',
    mechText7: '- TRUMP 1000 Multiponchadora: machinery that in addition to punching, can generate cold conformations ' +
      'using special punches that allow the achievement of different shapes looking for aesthetics, rigidity and nerves in sheets from 0.5mm to 3mm thick.',
    mechText8: '- Press Brake CNC (Numerical Control): Provides optimal bending precision up to 0.2mm, which offers a wide range of bends in different shapes and lengths.',
    mechText9: '- Press Brake: useful for bending metal up to 2 meters in length. ',
    mechText10: 'MACHINING',
    mechText11: 'It is a process of removing chips for bars of different materials such as: aluminum, brass (hydraulic parts),' +
      ' phosphor bronze (bushings), steel, stainless steel, acrylic PVC, among other plastics that it uses:',
    mechText12: ' - Machinery with three conventional lathes that facilitates small, medium and long reach work for parts in revolutions. ',
    mechText13: '- Three universal cutters for different pieces (square, circular, pinions, etc.)',
    mechText14: ' - Drill press',
    mechText15: '- Column drill',
    mechText16: ' - Drill radial',
    mechText17: 'CYLINDRICAL AND FLAT GRINDING',
    mechText18: ' All types of flat parts are rectified obtaining an excellent finish, facilitated by the fine-grained ' +
      'stone punches that allow to achieve optimum precision and rigor on the surface of the parts. In the case of cylindrical' +
      ' grinding, it is used in axis-type parts of revolution obtaining a perfect final result.',
    mechText19: ' ELECTROSTATIC PAINT',
    mechText20: 'High-quality powder paint is used by air flow and air flow, only for metal parts of various sizes. ' +
      'It is a process that rewards the finish of the paint on the metal surface.',
    mechText21: 'WELDING',
    mechText22: '- Argon welding for aluminum',
    mechText23: '- Electric welding for steel (by means of electrodes)',
    mechText24: '- Acetylene oxygen welding for steel',
    mechText25: '- Spot welding for steel',
    mechText26: ' MECHANICAL DESIGN',
    mechText27: 'We have a group of engineers with vast experience in mechanical design. We use programs such as ' +
      'Autodesk Inventor and AutoCAD to provide solutions to the different problems that the client may present, ' +
      'adapted to the technologies and resources available to our Mechanical Plant.',

    techText1: ' TECHNICAL SERVICE',
    techText2: 'Technical Services to Medical Equipment guarantees the after-sales service to the medical equipment marketed by COMBIOMED. With highly qualified engineers and technicians based in Havana, Villa Clara and Las Tunas, it performs the installation and preventive and corrective maintenance of equipment in Cuba and the rest of the world. In addition, it trains medical and technical personnel in the use of technology. \',',
    notContacts: 'Dont have any contacts to show',
    seeAllNews: 'Show all news',

    formName: 'Name',
    formSummary: 'Summary',
    formMsj: 'Write your message',
    formSend: 'Send',
    formMail: 'E-mail',
    downloadGaceta: 'Download "Gaceta Oficial de Cuba"',

    notData: 'Dont have elements to show',
    countByPage: 'Count by page',
    buscar: 'Search',
    all: 'All',
    avisoLegalTitle: 'Legal Warning',
    avisoLegalFullText: 'Información General\n' +
      'El sitio web combiomed.biocubafarma.cu pertenece a la empresa COMBIOMED Tecnología Médica' +
      ' Digital (en adelante COMBIOMED) con domicilio en calle 202, entre 17 y 19 Siboney, Playa, La Habana. \n',
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
    servtech: 'Servicios TÉCNICOS',
    servmec: 'Servicios MECÁNICOS',
    servaut: 'Servicios AUTOMATIZACIÓN',
    newsEvents: 'Noticias y Eventos',
    contacts: 'Contactos',
    home: 'Inicio',
    out: 'Salir',

    linesProduct: 'Líneas de Productos',
    servAutoText1: 'Con más de cuatro décadas de experiencia, nuestro equipo de Automatización de COMBIOMED se\n' +
      '            ha dedicado a la investigación y desarrollo de productos con alto nivel de integración y\n' +
      '            soluciones novedosas para la automatización de la industria biotecnológica, edificios y\n' +
      '            equipos o sistemas especializados.',
    servAutoText2: 'Nuestras soluciones están dedicadas en primer lugar al ahorro del consumo energético de las instalaciones,\n' +
      '            así como al incremento del confort, la fiabilidad y la seguridad de las mismas.',
    servAutoText3: 'A lo largo de los años se ha acumulado una amplia experiencia en equipamientos y softwares de diferentes\n' +
      '            compañías, entre los que se incluyen: Iconics, Kepware, Siemens AG, Klockner Moeller, Circutor, Schneider\n' +
      '            Electric, Idec, Johnson Controls, Automated Logic Corporation, Phoenix Contact, Mettler Toledo y Thermibel.',
    projectLlave: 'PROYECTOS "LLAVE EN MANO"',
    jobLines: 'PRINCIPALES LÍNEAS DE TRABAJO',
    lines1: 'Ejecución de proyectos llave en mano.',
    lines2: 'Soluciones de control de equipos, líneas de producción y edificios inteligentes.',
    lines3: 'Desarrollo de software para diferentes aplicaciones.',
    lines4: 'Diseño y Producción de pizarras eléctricas.',
    lines5: 'Mantenimiento o reparación de sistemas y equipos electrónicos especializados.',
    lines6: 'Asesoría técnica.',
    projects1: 'Nuestra experiencia acumulada en este campo, nos permite realizar trabajos que van desde la oferta para la licitación hasta la entrega del sistema.',
    projects2: 'Nuestras ofertas son de gran alcance e incluyen dentro de sus puntos de contratación renglones como: equipamiento, programas para sistemas de supervisión y control, elementos de campo, cables y accesorios, ofertados con los mejores precios.',
    projects3: 'Una vez entregado el sistema, nuestros especialistas dan un especial y riguroso seguimiento a la explotación del mismo por el período de un año, la garantía cubre dicha etapa.',
    projects4: 'Brindamos un mantenimiento especializado con el cual le garantizamos al cliente la continua explotación de la solución.',
    clientsText: 'NUESTROS CLIENTES',
    clientsItem1: 'Hoteleras',
    clientsItem2: 'Hotel Palco, Residencial Club Habana, Hotel Melias las Antillas, Hotel Royalton Hicacos, Hotel Blau Varadero.',
    clientsItem3: 'Centros de Biotecnología y Laboratorios de Fabricación de Medicamentos. ',
    clientsItem4: 'Centro Nacional de Biopreparados (BioCen), AICA, Laboratorios MEDSOL, Centro Ingeniería Genética y Biotecnología (CIGB) y Centro de Neurociencias de Cuba (CNEURO).',

    mechServ: 'Servicio de Mecánica',
    mechText1: 'COMBIOMED Tecnología Médica Digital incluye facilidades para la producción electromecánica,\n' +
      '            soportado por décadas de experiencia con las más modernas tecnologías para la fabricación de\n' +
      '            partes mecánicas de alta calidad para equipos médicos y otros.',
    mechText2: 'La Planta de Producciones Mecánicas (PPM) de la empresa COMBIOMED Tecnología Médica Digital brinda los siguientes servicios:',
    mechText3: 'CONFORMADO EN FRÍO',
    mechText4: 'Es un proceso que se trabaja en chapas de diferentes materiales, entre ellos\n' +
      '            metales como aluminio, acero, acero inoxidable, horiblen; siendo materiales que proporciona nuestra empresa,\n' +
      '            además de tener en cuenta la solicitud del cliente en la utilización de otro tipo de material como\n' +
      '            chapas, cobre y latón. Se emplea en la producción de soportes, estructuras metálicas, rejas, medios de protección,\n' +
      '            y cualquier otro tipo de proceso que necesite doblado, punzonado y soldadura.',

    mechText5: 'Para el conformado en frío la maquinaria es la siguiente:',
    mechText6: '- Cizalla para cortar chapas de hasta 4 mm',
    mechText7: '- Multiponchadora TRUMP 1000: maquinaria que además de punzonar, puede generar conformaciones en frío mediante\n' +
      '            punzones especiales que permiten el logro de diferentes formas buscando estética, rigidez y nervios en chapas\n' +
      '            desde 0.5mm a 3mm de espesor.',
    mechText8: '- Press Brake CNC (Control Numérico): Brinda óptima precisión hasta 0.2mm en los doblados,\n' +
      '            la cual ofrece una amplia gama de dobleces de diferentes formas y longitudes.',
    mechText9: '- Press Brake: de utilidad para doblar metal de hasta 2 metros de longitud.',
    mechText10: 'MAQUINADO',
    mechText11: 'Es un proceso de desprendimiento de virutas para barras de diferentes materiales como:\n' +
      '              aluminio, latón (piezas hidráulicas), bronce fosfórico (bujes), acero, acero inoxidable,\n' +
      '              acrílico PVC, entre otros plásticos que utiliza:',
    mechText12: '- Maquinaria de tres tornos convencionales que facilita el trabajo pequeño, mediano y largo alcance\n' +
      '              para piezas en revoluciones.',
    mechText13: '- Tres fresas universales para diferentes piezas (cuadradas, circular, piñones, etc.)',
    mechText14: '- Taladro de banco',
    mechText15: '- Taladro de columna',
    mechText16: '- Taladro radial',
    mechText17: 'RECTIFICADO CILÍNDRICO Y PLANO',
    mechText18: 'Se rectifican todo tipo de piezas planas obteniendo un excelente acabado, facilitado por los punzones\n' +
      '              piedra de grano fino que permiten lograr una óptima precisión y rigurosidad en la superficie de las piezas.\n' +
      '              En el caso de la rectificación cilíndrica, se emplea en piezas de revolución tipo eje obteniendo un perfecto\n' +
      '              resultado final.',
    mechText19: 'PINTURA ELECTROSTÁTICA',
    mechText20: 'Se utiliza pintura en polvo de alta calidad mediante corriente y fluido de aire, solo para piezas metálicas\n' +
      '              de diversos tamaños. Es un proceso que premia el acabado de la pintura en la superficie metálica.',
    mechText21: 'SOLDADURA',
    mechText22: '- Soldadura argón para aluminio',
    mechText23: ' - Soldadura eléctrica para acero (por medio de electrodos)',

    mechText24: '- Soldadura con oxígeno de acetileno para acero',

    mechText25: '- Soldadura con máquina de puntear para acero',

    mechText26: 'DISEÑO MECÁNICO',
    mechText27: 'Contamos con un colectivo de ingenieros con vasta experiencia en el diseño mecánico. Nos valemos de programas como\n' +
      '              Autodesk Inventor y AutoCAD para dar soluciones a los diferentes problemas que pueda presentar el cliente, adaptado\n' +
      '              a las tecnologías y recursos con que cuenta nuestra Planta Mecánica.',

    techText1: 'SERVICIO TÉCNICO',
    techText2: 'Servicios Técnicos a Equipos Médicos garantiza el servicio de postventa a los equipos médicos comercializados\n' +
      '          por COMBIOMED. Con ingenieros y técnicos altamente calificados radicados en La Habana, Villa Clara y Las Tunas,\n' +
      '          realiza la instalación y mantenimiento preventivo y correctivo de los equipos de Cuba y el resto del mundo.\n' +
      '          Además, capacita a personal médico y técnico en el uso de la tecnología.',

    notContacts: 'No hay contactos que mostrar',
    seeAllNews: 'Ver todas las noticias',

    formName: 'Nombre',
    formSummary: 'Asunto',
    formMsj: 'Introduzca su mensaje',
    formSend: 'Enviar ahora',
    formMail: 'Correo',

    downloadGaceta: 'Descargar Gaceta Oficial de Cuba',
    notData: 'No hay elementos para mostrar',

    countByPage: 'Cantidad por paginas',
    buscar: 'Buscar',
    all: 'Todos',
    avisoLegalTitle: 'Aviso Legal',
    avisoLegalFullText: 'Información General\n' +
      'El sitio web combiomed.biocubafarma.cu pertenece a la empresa COMBIOMED Tecnología Médica Digital (en adelante COMBIOMED) ' +
      'con domicilio en calle 202, entre 17 y 19 Siboney, Playa, La Habana. \n' +
      'Disponibilidad\n' +
      'El equipo de trabajo a cargo del mantenimiento, administración y actualización del sitio garantizará la disponibilidad' +
      ' y acceso a la web así como los servicios petenecientes a la misma. \n ' +
      'COMBIOMED se reserva  el derecho de actualizar, modificar, alterar, agregar o eliminar partes del presente sitio web, en ' +
      'cualquier momento que lo considere conveniente, sin necesidad de aviso previo tanto para aumentar o eliminar contenidos y ' +
      'servicios que se presten a través de la misma como para cambiar su localización y visibilidad. ' +
      'Asimismo, se reserva el derecho de dar de baja el sitio web y cancelar el servicio, a su sola discreción, no generando ello' +
      'responsabilidad alguna para COMBIOMED. \n' +
      'Propiedad intelectual y uso de los contenidos\n' +
      'Todo el material y contenido publicados en el sitio web, incluidos, textos, software, gráficos, signos distintivos, ' +
      'elementos corporativos, programas de software, bases de datos, música y/o audio, marcas, logotipos, diseños gráficos, ' +
      'fotografías, videos, contenidos interactivos y similares pertenecen en titularidad a COMBIOMED y sus colaboradores, ' +
      'encontrándose protegidos por derechos de propiedad intelectual. \n' +
      'Queda terminantemente prohibido el empleo de mecanismos que puedan alterar su diseño, configuración original o ' +
      'contenidos del portal web, incluso su utilización, reproducción, explotación en cualquier medio sin autorización previa ' +
      'y expresa de COMBIOMED. \n' +
      ' El usuario se comprometerá a utilizar la información, contenidos y/o elementos a los que acceda en ' +
      'el sitio web exclusivamente para su uso y necesidades y a no realizar en ningún caso una explotación comercial, directa o ' +
      'indirecta de los mismos, además de realizar cualquier otro acto que viole los derechos de propiedad. \n' +
      'Ud. se compromete a utilizar el portal únicamente con fines legítimos y de modo que no infrinja, restrinja o inhiba la ' +
      'utilización y disfrute de servicios de COMBIOMED, así como no utilizar este portal para la realización de actividades ' +
      'contrarias a las leyes, la moral, las buenas costumbres o al orden público establecido. Asímismo el usuario deberá abstenerse ' +
      'de suprimir, alterar, aludir o manipular cualquier dispositivo de protección o sistema de seguridad que tuviera instalado en ' +
      'el portal de COMBIOMED\n' +
      'El usuario se comprometerá a no acceder, o intentar acceder, a ninguno de los servicios utilizando medios automatizados, ' +
      'incluidos secuencias de comandos o rastreadores web. Asimismo se compromete a no involucrarse en ninguna actividad que ' +
      'interfiera o interrumpa los servicios y redes conectados.\n.' +
      'Todos aquellos contenidos incluidos en el sitio web son titularidad de COMBIOMED, por lo cual se autoriza la reproducción, ' +
      'distribución y comunicación pública siempre y cuando se cumpla con las siguientes condiciones:\n' +
      '-Queda prohibida en cualquier circunstancia la desnaturalización del contenido.\n' +
      '-El usuario queda obligado en todo caso a citar la fuente de los contenidos.\n' +
      'Enlaces a otras páginas de internet\n' +
      'La página web COMBIOMED contiene enlaces o vínculos pertenecientes a otros sitios web, dichos enlaces se proveen ' +
      'como un servicio a los usuarios con el objetivo de facilitar las indagaciones y búsquedas de interés a través de ' +
      'internet. Las mismas, no están vinculadas de ninguna manera al sitio web o a los productos y servicios de COMBIOMED, ' +
      'es por ello que nuestro equipo no será responsable de los contenidos, informaciones o servicios incluidos en dichos ' +
      'sitios de internet cuyos enlaces se indiquen en el sitio web, siendo meramente de carácter informativo sin implicar ' +
      'relación entre ambos. \n' +
      'Protección de datos personales\n' +
      'El sitio web se compromete al cumplimiento de su obligación de mantener en secreto los datos de carácter personal, ' +
      'aunque brinda la posibilidad al usuario de navegar sin brindar dicha información, solo' +
      ' algunas acciones requirieren de este paso y la información que nos proporcione voluntariamente, ' +
      'se incluirá en una base de datos que quedaría bajo responsabilidad de COMBIOMED, incorporada en servidores protegidos del ' +
      'acceso, pérdida, tratamiento o divulgación no autorizados, con el objetivo de proporcionarle un servicio personalizado y ' +
      'a la altura de sus necesidades, mejorando el canal de comunicación con el usuario. \n ' +
      'Información de contacto\n' +
      'En caso de que UD detecte irregularidades, violaciones de estos términos y condiciones o desee aclarar ' +
      'sus dudas en relación a nuestros servicios, puede escribirnos a la cuenta de correo combio@icid.cu\n',
  },
}

// Create VueI18n instance with options
export const i18n = new VueI18n({
  locale: 'es', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages, // set locale messages
})
