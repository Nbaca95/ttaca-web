interface BrandServiceContent {
  metaDescription: string;
  tagline: string;
  whyTitle: string;
  whyText: string;
  benefits: string[];
  cardTitle: string;
  cardText: string;
  ctaLabel: string;
}

export interface Dictionary {
  nav: {
    home: string;
    services: string;
    about: string;
    partners: string;
    clients: string;
    blog: string;
    contact: string;
    contactCta: string;
    jobs: string;
    language: string;
    themeToLight: string;
    themeToDark: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  heroCarousel: {
    ctaPrimary: string;
    ctaSecondary: string;
    slides: {
      tag: string;
      title: string;
      desc: string;
      imageAlt: string;
    }[];
  };
  services: {
    title: string;
    subtitle: string;
    ctaLabel: string;
    itOutsourcing: string;
    itConsulting: string;
    hpeAuthorizedCenter: string;
    siteEnvironmentalSurvey: string;
    veeam: string;
    arubaNetworks: string;
    vmware: string;
    dell: string;
    lenovo: string;
  };
  about: {
    title: string;
    mission: string;
    vision: string;
    values: string;
    history: string;
  };
  aboutPage: {
    metaDescription: string;
    hero: {
      title: string;
      intro: string;
      tagline: string;
    };
    journey: {
      badge: string;
      title: string;
      text: string;
      milestones: { year: string; title: string; description: string }[];
    };
    missionVision: {
      missionText: string;
      visionText: string;
    };
    values: {
      title: string;
      subtitle: string;
      items: { icon: string; title: string; desc: string }[];
    };
    partners: {
      title: string;
    };
    successStories: {
      badge: string;
      title: string;
      subtitle: string;
      translatedNote: string;
      testimonials: { text: string; name: string; role: string; company: string }[];
    };
    policies: {
      title: string;
      subtitle: string;
      items: { icon: string; label: string }[];
    };
  };
  homePage: {
    metaDescription: string;
    services: {
      title: string;
      subtitle: string;
      ctaLabel: string;
      items: { icon: string; slug: string; title: string; description: string }[];
    };
    stats: { target: number; prefix: string; label: string }[];
    partners: {
      subtitle: string;
    };
    clients: {
      subtitle: string;
      items: { name: string }[];
    };
    news: {
      title: string;
      subtitle: string;
      items: { date: string; category: string; title: string; excerpt: string }[];
    };
    finalCta: {
      title: string;
      subtitle: string;
      buttonLabel: string;
    };
  };
  servicesPages: {
    brands: {
      veeam: BrandServiceContent;
      arubaNetworks: BrandServiceContent;
      vmware: BrandServiceContent;
      dell: BrandServiceContent;
      lenovo: BrandServiceContent;
    };
    itOutsourcing: {
      metaDescription: string;
      hero: { eyebrow: string; title: string; intro: string };
      valueProp: {
        title: string;
        text: string;
        features: { icon: string; title: string; desc: string }[];
      };
      benefits: { title: string; items: string[] };
      finalCta: { title: string; text: string; buttonLabel: string };
    };
    itConsulting: {
      metaDescription: string;
      title: string;
      subtitle: string;
    };
    hpeAuthorizedCenter: {
      metaDescription: string;
      hero: { eyebrow: string; title: string; text: string };
      items: { title: string; desc: string }[];
    };
    siteEnvironmentalSurvey: {
      metaDescription: string;
      title: string;
      intro: string;
      items: { label: string; desc: string }[];
      cta: { title: string; linkLabel: string };
    };
  };
  partners: {
    title: string;
  };
  clients: {
    title: string;
  };
  contact: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    phone: string;
    message: string;
    topic: string;
    topicPlaceholder: string;
    topicOther: string;
    submit: string;
    submitting: string;
    success: string;
    error: string;
  };
  contactPage: {
    metaDescription: string;
    infoTitle: string;
    addressLabel: string;
    phoneLabel: string;
    emailLabel: string;
    addressValue: string;
    mapTitle: string;
  };
  footer: {
    description: string;
    company: string;
    followUs: string;
    rights: string;
  };
  whatsapp: {
    tooltip: string;
    ariaLabel: string;
  };
  meta: {
    defaultDescription: string;
  };
}

export const es: Dictionary = {
  nav: {
    home: 'Inicio',
    services: 'Servicios',
    about: 'Nosotros',
    partners: 'Partners',
    clients: 'Clientes',
    blog: 'Blog',
    contact: 'Contacto',
    contactCta: 'Contáctanos',
    jobs: 'Bolsa de Empleo',
    language: 'Idioma',
    themeToLight: 'Cambiar a modo claro',
    themeToDark: 'Cambiar a modo oscuro',
  },
  hero: {
    eyebrow: 'Infraestructura crítica y consultoría tecnológica',
    title: 'Tecnología empresarial en la que Centroamérica confía',
    subtitle:
      'T&TA diseña, implementa y respalda la infraestructura tecnológica que mantiene en marcha a las organizaciones más exigentes de la región.',
    ctaPrimary: 'Hablar con un especialista',
    ctaSecondary: 'Ver servicios',
  },
  heroCarousel: {
    ctaPrimary: 'Consulta Gratis',
    ctaSecondary: 'Nuestras Soluciones',
    slides: [
      {
        tag: 'Centro Autorizado de Servicio',
        title:
          'Único Centro de Servicio de <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Hewlett Packard Enterprise</span> en Costa Rica',
        desc: 'Garantizamos soporte técnico avanzado, diagnóstico preciso y repuestos legítimos directamente de fábrica para toda su infraestructura de servidores y almacenamiento.',
        imageAlt: 'Centro de Servicio Autorizado HPE',
      },
      {
        tag: 'Conectividad Edge-to-Cloud',
        title:
          'Redes empresariales seguras e inteligentes con <span class="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">Aruba Networks</span>',
        desc: 'Modernice el entorno de red de su organización. Implementamos soluciones de Wi-Fi corporativo, conmutación avanzada y seguridad perimetral de última generación.',
        imageAlt: 'Soluciones de Redes Aruba Networks',
      },
      {
        tag: 'Servicios Estratégicos',
        title:
          'Outsourcing de TI que <span class="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-300">libera a su equipo</span> de la carga operativa',
        desc: 'Gestionamos su infraestructura tecnológica de punta a punta, con especialistas certificados y soporte continuo, para que su equipo se enfoque en el negocio.',
        imageAlt: 'Outsourcing de TI',
      },
      {
        tag: 'Consultoría Especializada',
        title:
          'Decisiones tecnológicas <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-300">respaldadas por expertos</span>',
        desc: 'Lo asesoramos en la selección e implementación de las marcas líderes del mercado, para que cada inversión tecnológica genere el retorno esperado.',
        imageAlt: 'Consultoría de TI',
      },
      {
        tag: 'Infraestructura Física',
        title:
          'Su centro de datos, <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">optimizado desde la base</span>',
        desc: 'Evaluamos climatización, energía y seguridad física para garantizar la máxima disponibilidad de sus equipos críticos.',
        imageAlt: 'Site Environmental Survey',
      },
      {
        tag: 'Ciberseguridad Empresarial',
        title:
          'Protección avanzada con <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">Symantec</span> para su infraestructura crítica',
        desc: 'Implementamos soluciones de ciberseguridad Symantec para proteger sus datos, endpoints y redes contra amenazas avanzadas.',
        imageAlt: 'Symantec Cyber Security',
      },
    ],
  },
  services: {
    title: 'Servicios',
    subtitle: 'Soluciones de infraestructura, soporte y consultoría de alto nivel.',
    ctaLabel: 'Conocer más',
    itOutsourcing: 'Outsourcing de TI',
    itConsulting: 'Consultoría de TI',
    hpeAuthorizedCenter: 'Centro Autorizado HPE',
    siteEnvironmentalSurvey: 'Site Environmental Survey',
    veeam: 'Veeam',
    arubaNetworks: 'Aruba Networks',
    vmware: 'VMware',
    dell: 'Dell Technologies',
    lenovo: 'Lenovo',
  },
  about: {
    title: 'Nosotros',
    mission: 'Misión',
    vision: 'Visión',
    values: 'Valores',
    history: 'Historia',
  },
  aboutPage: {
    metaDescription:
      'Conoce a T&TA Centroamérica: más de 20 años de experiencia en soluciones tecnológicas, y la misión, visión y valores que nos definen.',
    hero: {
      title: 'Somos T&TA',
      intro:
        'Somos una empresa de tecnologías de la información especializada en asesoría e integración de soluciones empresariales. A través de un enfoque consultivo, ayudamos a nuestros clientes a tomar decisiones estratégicas basadas en análisis financiero, infraestructura y mejores prácticas de la industria.',
      tagline: 'Nuestro objetivo: Generar valor real y sostenible para el negocio.',
    },
    journey: {
      badge: 'Experiencia',
      title: 'Trayectoria',
      text: 'Con más de 20 años de experiencia en el mercado de tecnologías de la información.',
      milestones: [
        {
          year: '2015',
          title: 'Fundación de la Compañía',
          description: 'Iniciamos operaciones con el firme propósito de transformar el soporte y la infraestructura tecnológica en la región.',
        },
        {
          year: '2018',
          title: 'Expansión de Alianzas Estratégicas',
          description: 'Consolidamos importantes alianzas con líderes globales en ciberseguridad y gestión de centros de datos.',
        },
        {
          year: '2022',
          title: 'Transformación y Nuevos Servicios',
          description: 'Evolución hacia servicios administrados avanzados, integrando automatización e infraestructura en la nube.',
        },
        {
          year: '2026',
          title: 'Consolidación e Innovación Continua',
          description: 'Liderando el mercado tecnológico con soluciones de vanguardia y un equipo de ingeniería altamente especializado.',
        },
      ],
    },
    missionVision: {
      missionText:
        'Nos impulsa la excelencia en cada acción que emprendemos, creando valor y bienestar a través de soluciones tecnológicas innovadoras que fortalecen el éxito de nuestros aliados estratégicos.',
      visionText:
        'Liderar en soluciones tecnológicas en Centroamérica, construyendo relaciones de confianza y respaldando a nuestros socios mediante innovación constante, conocimiento experto y enfoque en sus objetivos.',
    },
    values: {
      title: 'Nuestros Valores',
      subtitle: 'Los principios que guían cada decisión y cada relación que construimos.',
      items: [
        {
          icon: '🎯',
          title: 'Excelencia',
          desc: 'Buscamos la mejora continua en cada proyecto y cada solución que entregamos.',
        },
        {
          icon: '🤝',
          title: 'Compromiso',
          desc: 'Nos comprometemos con el éxito de nuestros clientes como si fuera propio.',
        },
        {
          icon: '💡',
          title: 'Innovación',
          desc: 'Adoptamos nuevas tecnologías para mantener a nuestros clientes a la vanguardia.',
        },
        {
          icon: '⚖️',
          title: 'Integridad',
          desc: 'Actuamos con transparencia y ética en cada relación de negocio.',
        },
        {
          icon: '🛡️',
          title: 'Confianza',
          desc: 'Construimos relaciones duraderas basadas en la confianza mutua.',
        },
        {
          icon: '👥',
          title: 'Trabajo en Equipo',
          desc: 'Colaboramos como un solo equipo, dentro y fuera de la organización.',
        },
      ],
    },
    partners: {
      title: 'Socios estratégicos que nos acompañan',
    },
    successStories: {
      badge: 'Casos de Éxito',
      title: 'Confianza que se construye con resultados',
      subtitle: 'Ellos han confiado en nuestra experiencia.',
      translatedNote: '',
      testimonials: [
        {
          text: 'La experiencia que hemos tenido con T&TA de Centroamérica ha sido muy enriquecedora. El apoyo, la trayectoria y las especializaciones en el área de tecnología por parte del equipo de T&TA, nos ha permitido implementar soluciones de alta calidad para nuestros clientes. Estos casos de éxito han impactado positivamente el crecimiento de negocios y el fortalecimiento de las relaciones comerciales a largo plazo con nuestros clientes.',
          name: 'Fernando Rojas',
          role: 'Gerente Comercial',
          company: 'TECNOVA Soluciones',
        },
        {
          text: 'Por este medio hago constar que se han recibido en esta municipalidad servicios por parte de la empresa T&TA. Los mismos incluyen servicios profesionales en la administración de almacenamiento, redes y servidores.',
          name: 'Pablo Chaves Murillo',
          role: 'Coordinador',
          company: 'Municipalidad de Pérez Zeledón',
        },
        {
          text: 'La Municipalidad de Palmares ha recibido por parte de la empresa T&TA de Centroamérica S.A. servicios de renovación de la licencia Veeam Backup, servicios de alojamiento de respaldos de Veeam Backup Cloud, además de servicios de capacitación en el manejo de Windows Server. Todos estos servicios fueron recibidos por la Unidad de Informática durante los años 2019 y 2020, a satisfacción.',
          name: 'Ing. Milagro Campos Mejías',
          role: 'Departamento de Informática',
          company: 'Municipalidad de Palmares',
        },
      ],
    },
    policies: {
      title: 'Nuestras Políticas',
      subtitle: 'Normativas y políticas que guían nuestra actuación',
      items: [
        { icon: '⚖️', label: 'Código de Ética' },
        { icon: '🍃', label: 'Calidad y Ambiente' },
        { icon: '📥', label: 'Datos Personales' },
        { icon: '🔑', label: 'Términos de Uso' },
        { icon: 'ℹ️', label: 'ISO-27001' },
        { icon: '🛡️', label: 'ISO-20000-1' },
      ],
    },
  },
  homePage: {
    metaDescription:
      'T&TA Centroamérica: soluciones de infraestructura tecnológica, outsourcing, consultoría de TI y soporte autorizado HPE para empresas en la región.',
    services: {
      title: 'Nuestros Servicios',
      subtitle: 'Soluciones integrales de infraestructura, soporte y consultoría para su negocio.',
      ctaLabel: 'Conocer más',
      items: [
        {
          icon: '🖥️',
          slug: 'it-outsourcing',
          title: 'Outsourcing de TI',
          description: 'Gestión completa de su infraestructura tecnológica con personal especializado.',
        },
        {
          icon: '🧭',
          slug: 'it-consulting',
          title: 'Consultoría de TI',
          description: 'Asesoría estratégica para optimizar sus decisiones tecnológicas.',
        },
        {
          icon: '🛠️',
          slug: 'hpe-authorized-center',
          title: 'Soporte Técnico Autorizado HPE',
          description: 'Soporte técnico directo de fábrica para servidores y almacenamiento HPE.',
        },
        {
          icon: '🏢',
          slug: 'site-environmental-survey',
          title: 'Site Environmental Survey',
          description: 'Evaluación de condiciones físicas y ambientales para centros de datos.',
        },
      ],
    },
    stats: [
      { target: 400, prefix: '+', label: 'Clientes satisfechos' },
      { target: 20, prefix: '+', label: 'Años de servicio' },
      { target: 8000, prefix: '+', label: 'Implementaciones exitosas' },
    ],
    partners: {
      subtitle: 'Trabajamos con las marcas tecnológicas líderes a nivel mundial.',
    },
    clients: {
      subtitle: 'Organizaciones públicas y privadas que confían su infraestructura a T&TA.',
      items: [
        { name: 'RECOPE' },
        { name: 'INS' },
        { name: 'Coca-Cola' },
        { name: 'TECNOVA' },
        { name: 'Municipalidad de Pérez Zeledón' },
        { name: 'Municipalidad de Palmares' },
      ],
    },
    news: {
      title: 'Noticias y Novedades',
      subtitle: 'Mantente al día con las últimas novedades de T&TA.',
      items: [
        {
          date: '[Fecha]',
          category: '[Categoría]',
          title: '[Título de la noticia]',
          excerpt: '[Breve resumen del artículo o comunicado. Reemplaza este texto con contenido real antes de publicar.]',
        },
        {
          date: '[Fecha]',
          category: '[Categoría]',
          title: '[Título de la noticia]',
          excerpt: '[Breve resumen del artículo o comunicado. Reemplaza este texto con contenido real antes de publicar.]',
        },
        {
          date: '[Fecha]',
          category: '[Categoría]',
          title: '[Título de la noticia]',
          excerpt: '[Breve resumen del artículo o comunicado. Reemplaza este texto con contenido real antes de publicar.]',
        },
      ],
    },
    finalCta: {
      title: '¿Listo para fortalecer su infraestructura tecnológica?',
      subtitle: 'Hablemos sobre cómo podemos ayudarle a alcanzar sus objetivos de negocio.',
      buttonLabel: 'Contactar con un especialista',
    },
  },
  servicesPages: {
    brands: {
      veeam: {
        metaDescription: 'Soluciones de respaldo y protección de datos con Veeam. Implementación certificada, backup en la nube y recuperación ante desastres con T&TA Centroamérica.',
        tagline: 'Protección de datos empresarial, respaldo en la nube y recuperación ante desastres con la tecnología líder del mercado.',
        whyTitle: '¿Por qué elegir Veeam?',
        whyText: 'Nuestra alianza con Veeam nos permite ofrecer soluciones de respaldo y protección de datos diseñadas para los retos actuales de continuidad de negocio. Implementamos, configuramos y damos soporte a su entorno de backup con ingenieros certificados.',
        benefits: ['Implementación certificada por Veeam', 'Respaldo en la nube (Veeam Backup Cloud)', 'Recuperación ante desastres (DR) garantizada', 'Soporte técnico especializado 24/7'],
        cardTitle: 'Soluciones Integrales de Respaldo',
        cardText: 'Diseñamos arquitecturas de backup a medida utilizando Veeam, asegurando que la información crítica de su negocio esté siempre protegida y disponible.',
        ctaLabel: 'Consultar sobre Veeam',
      },
      arubaNetworks: {
        metaDescription: 'Redes empresariales seguras e inteligentes con Aruba Networks. Wi-Fi corporativo, switching y seguridad perimetral implementados por T&TA Centroamérica.',
        tagline: 'Conectividad empresarial inteligente y segura, de extremo a extremo, con la tecnología Edge-to-Cloud de Aruba.',
        whyTitle: '¿Por qué elegir Aruba Networks?',
        whyText: 'Como partner certificado de Aruba (Hewlett Packard Enterprise), diseñamos e implementamos redes empresariales robustas, seguras y fáciles de administrar, adaptadas al crecimiento de su organización.',
        benefits: ['Wi-Fi corporativo de alto rendimiento', 'Conmutación (switching) avanzada', 'Seguridad perimetral y control de acceso', 'Gestión centralizada de la red'],
        cardTitle: 'Redes Preparadas para el Futuro',
        cardText: 'Modernizamos el entorno de red de su organización con soluciones Aruba pensadas para la movilidad, el IoT y la nube, sin comprometer la seguridad.',
        ctaLabel: 'Consultar sobre Aruba Networks',
      },
      vmware: {
        metaDescription: 'Virtualización de servidores y centros de datos con VMware. Infraestructura más ágil y eficiente, implementada por T&TA Centroamérica.',
        tagline: 'Virtualización de servidores, escritorios y centros de datos para una infraestructura más ágil, eficiente y escalable.',
        whyTitle: '¿Por qué elegir VMware?',
        whyText: 'Implementamos y administramos entornos virtualizados con VMware, permitiendo a su empresa optimizar el uso de sus recursos de hardware, reducir costos operativos y mejorar la continuidad del negocio.',
        benefits: ['Virtualización de servidores (vSphere)', 'Alta disponibilidad y recuperación ante fallos', 'Optimización de recursos de infraestructura', 'Migración y modernización de centros de datos'],
        cardTitle: 'Infraestructura Virtual de Alto Rendimiento',
        cardText: 'Diseñamos arquitecturas virtualizadas con VMware que simplifican la gestión de su centro de datos y preparan su infraestructura para la nube híbrida.',
        ctaLabel: 'Consultar sobre VMware',
      },
      dell: {
        metaDescription: 'Servidores, almacenamiento y equipos Dell Technologies para su empresa, con asesoría e implementación de T&TA Centroamérica.',
        tagline: 'Servidores, almacenamiento y equipos empresariales Dell Technologies, con asesoría experta para cada etapa de su infraestructura.',
        whyTitle: '¿Por qué elegir Dell Technologies?',
        whyText: 'Como distribuidores de soluciones Dell Technologies, ayudamos a su empresa a seleccionar, implementar y mantener el hardware adecuado para sus cargas de trabajo, desde servidores hasta equipos de cómputo empresarial.',
        benefits: ['Servidores PowerEdge para cargas críticas', 'Almacenamiento empresarial escalable', 'Equipos de cómputo para su fuerza laboral', 'Garantía y soporte directo de fábrica'],
        cardTitle: 'Hardware Confiable para su Operación',
        cardText: 'Seleccionamos e implementamos soluciones Dell Technologies alineadas a las necesidades reales de su negocio, con acompañamiento técnico en cada paso.',
        ctaLabel: 'Consultar sobre Dell Technologies',
      },
      lenovo: {
        metaDescription: 'Equipos de cómputo y servidores Lenovo para su empresa, con asesoría e implementación de T&TA Centroamérica.',
        tagline: 'Equipos de cómputo y servidores Lenovo, combinando confiabilidad y rendimiento para su fuerza laboral e infraestructura.',
        whyTitle: '¿Por qué elegir Lenovo?',
        whyText: 'Ofrecemos el portafolio de soluciones Lenovo —desde laptops ThinkPad hasta servidores ThinkSystem— con asesoría personalizada para que su empresa invierta en el equipo correcto.',
        benefits: ['Laptops y equipos de cómputo ThinkPad', 'Servidores ThinkSystem para su centro de datos', 'Soporte y garantía empresarial', 'Renovación tecnológica planificada'],
        cardTitle: 'Tecnología Lenovo para su Equipo',
        cardText: 'Le ayudamos a equipar a su organización con tecnología Lenovo confiable, desde el puesto de trabajo hasta el centro de datos.',
        ctaLabel: 'Consultar sobre Lenovo',
      },
    },
    itOutsourcing: {
      metaDescription: 'Outsourcing de TI en Costa Rica y Centroamérica: gestión, soporte y optimización de infraestructura tecnológica con especialistas certificados.',
      hero: {
        eyebrow: 'Servicios Estratégicos',
        title: 'Outsourcing de TI: Impulso Tecnológico para su Negocio',
        intro: 'Transformamos su infraestructura tecnológica en una ventaja competitiva. Gestión, soporte y optimización integral bajo un modelo de servicio experto.',
      },
      valueProp: {
        title: 'Eficiencia Operativa y Escalabilidad',
        text: 'En T&TA Centroamérica, entendemos que la tecnología es el corazón de su empresa. Nuestro servicio de Outsourcing de TI permite que su equipo interno se libere de la carga operativa, delegando la gestión técnica a especialistas certificados.',
        features: [
          { icon: '⚡', title: 'Soporte Continuo 24/7', desc: 'Monitoreo proactivo para garantizar la disponibilidad de sus sistemas críticos.' },
          { icon: '🛡️', title: 'Seguridad Perimetral', desc: 'Protección avanzada contra amenazas y cumplimiento de normativas de datos.' },
        ],
      },
      benefits: {
        title: 'Beneficios clave',
        items: ['Reducción de costos operativos (OPEX)', 'Acceso a tecnologías de vanguardia', 'Reducción de tiempos de inactividad', 'Gestión de proveedores y licencias', 'Personal altamente capacitado'],
      },
      finalCta: {
        title: '¿Listo para optimizar su entorno tecnológico?',
        text: 'Nuestros consultores están listos para analizar sus necesidades y diseñar una estrategia de outsourcing a la medida de su empresa.',
        buttonLabel: 'Agendar Consultoría',
      },
    },
    itConsulting: {
      metaDescription: 'Consultoría de TI especializada en Veeam, Aruba Networks, VMware, Dell Technologies y Lenovo, con T&TA Centroamérica.',
      title: 'Consultoría Especializada',
      subtitle: 'Trabajamos con las marcas líderes del mercado para diseñar la solución correcta para su negocio.',
    },
    hpeAuthorizedCenter: {
      metaDescription: 'Centro Autorizado de Servicio HPE en Costa Rica: soporte directo de fábrica para servidores ProLiant, almacenamiento Alletra y redes Aruba.',
      hero: {
        eyebrow: 'Servicios Estratégicos',
        title: 'Centro Autorizado HPE',
        text: 'Soluciones de infraestructura de clase mundial con el respaldo y certificación directa de Hewlett Packard Enterprise.',
      },
      items: [
        { title: 'Servidores ProLiant', desc: 'La base más confiable para su centro de datos.' },
        { title: 'Almacenamiento Alletra', desc: 'Almacenamiento inteligente para la era cloud.' },
        { title: 'Redes Aruba', desc: 'Conectividad inteligente y segura de extremo a extremo.' },
      ],
    },
    siteEnvironmentalSurvey: {
      metaDescription: 'Site Environmental Survey: evaluación de climatización, energía y seguridad física para centros de datos, por T&TA Centroamérica.',
      title: 'Site Environmental Survey',
      intro: 'Optimizamos su entorno físico para garantizar la máxima disponibilidad de sus equipos críticos.',
      items: [
        { label: 'Análisis de climatización:', desc: 'Aseguramos el flujo de aire y temperatura correctos.' },
        { label: 'Gestión de energía:', desc: 'Evaluación de carga eléctrica y redundancia.' },
        { label: 'Seguridad física:', desc: 'Control de acceso y monitoreo ambiental.' },
      ],
      cta: {
        title: '¿Desea una evaluación técnica?',
        linkLabel: 'Solicite un levantamiento aquí',
      },
    },
  },
  partners: {
    title: 'Partners tecnológicos',
  },
  clients: {
    title: 'Empresas que confían en nosotros',
  },
  contact: {
    title: 'Contacto',
    subtitle: 'Conversemos sobre las necesidades de tu infraestructura.',
    name: 'Nombre',
    email: 'Correo electrónico',
    phone: 'Teléfono',
    message: 'Mensaje',
    topic: 'Área de interés',
    topicPlaceholder: 'Selecciona una opción',
    topicOther: 'Otro',
    submit: 'Enviar mensaje',
    submitting: 'Enviando...',
    success: 'Mensaje enviado. Te contactaremos pronto.',
    error: 'Ocurrió un error. Por favor intenta de nuevo.',
  },
  contactPage: {
    metaDescription: 'Contáctanos: hablemos sobre las necesidades de infraestructura tecnológica de tu empresa. Formulario de contacto, teléfono y correo de T&TA Centroamérica.',
    infoTitle: 'Otras formas de contactarnos',
    addressLabel: 'Dirección',
    phoneLabel: 'Teléfono',
    emailLabel: 'Correo electrónico',
    addressValue: 'Torres Paseo Colón, oficina 701, San José, Costa Rica.',
    mapTitle: 'Ubicación de T&TA Centroamérica',
  },
  footer: {
    description:
      'Expertos en soluciones tecnológicas de vanguardia, outsourcing y consultoría de TI para optimizar el rendimiento de tu negocio.',
    company: 'Empresa',
    followUs: 'Síguenos',
    rights: 'Todos los derechos reservados.',
  },
  whatsapp: {
    tooltip: '¿En qué podemos ayudarte?',
    ariaLabel: 'Contactar por WhatsApp',
  },
  meta: {
    defaultDescription:
      'T&TA Centroamérica: infraestructura tecnológica, outsourcing y consultoría de TI para empresas en la región.',
  },
};

export default es;