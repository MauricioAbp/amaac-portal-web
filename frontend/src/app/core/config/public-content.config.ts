export interface PublicNavigationItem {
  readonly label: string;
  readonly fragment?: string;
}

export interface CampaignCard {
  readonly title: string;
  readonly description: string;
  readonly imageUrl: string;
  readonly imageAlt: string;
  readonly date: string;
  readonly location: string;
}

export interface InitiativeCard {
  readonly category: string;
  readonly title: string;
  readonly description: string;
  readonly icon: string;
}

export interface NewsCard {
  readonly date: string;
  readonly title: string;
  readonly summary: string;
}

export interface EventCard {
  readonly title: string;
  readonly description: string;
  readonly date: string;
  readonly time: string;
  readonly location: string;
}

export interface ParticipationCard {
  readonly title: string;
  readonly description: string;
  readonly icon: string;
}

// Fuente única de contenido público provisional. Ningún valor de este archivo debe
// tratarse como información institucional oficial hasta que AMAAC lo valide.
export const PUBLIC_CONTENT = {
  demoNotice: 'Contenido demostrativo: textos, fechas, ubicaciones y datos institucionales pendientes de validación.',
  pendingLabel: 'Próximamente',
  brand: {
    name: 'AMAAC',
    country: 'PERÚ',
    accessibleName: 'AMAAC Perú, página de inicio'
  },
  navigation: [
    { label: 'Inicio' },
    { label: 'Nosotros', fragment: 'nosotros' },
    { label: 'Campañas', fragment: 'campanas' },
    { label: 'Iniciativas', fragment: 'iniciativas' },
    { label: 'Noticias', fragment: 'noticias' },
    { label: 'Eventos', fragment: 'eventos' }
  ] satisfies readonly PublicNavigationItem[],
  header: {
    donationsLabel: 'Donativos',
    participationLabel: 'Participar',
    accessLabel: 'Acceso'
  },
  hero: {
    imageUrl: 'https://lh3.googleusercontent.com/aida/AEtjO1W6NIjzErmHvJT_e7PUkWvUWg2CUCjvkP7Kit3SkIGQnzuF2RDugCnqaM-PkPEKgUpVoPQLv3Sp0YFTLJzNtqbB0ew6ZYBLj4uPdrz3YHAK-3eowVWKylcnoXpv-UGOTffV-l2qdeEbT59novXVglhaBXLCjf8XmtvVhLkPXxMjyQG7rPr8eYpViO5DCs3KhvVqADm0_RZBkGCh4puzpIoP_g_Fd1dzQn0FC7bgVk25JbKbEXfLzQXilh4',
    imageAlt: 'Imagen demostrativa de una actividad comunitaria',
    eyebrow: 'Portal público de demostración',
    title: 'Súmate a AMAAC PERÚ',
    description: 'Vista referencial de las futuras opciones de participación de la organización.',
    participationLabel: 'Ver participación',
    aboutLabel: 'Conocer esta propuesta'
  },
  about: {
    imageUrl: 'https://lh3.googleusercontent.com/aida/AEtjO1WRyzjyHFSFxMccGDVQEzhec2B61evkg4qRHrlNdYhGxAG_vcW8SGhiM_fjFwBztf6bmJhtlyDPCy_Vl6lggwnFi_Nphjqndu_e9l54MUCUZk6WzqaFDXpPA83T1LOpUW670h_oQPSYrBvHpdzTQptIFRcbLJM6B4qUZyVW_YHXib22Tv4ePw8wXa6WUPpYb37ovrhzKWISbvtjNrYj4CfQ1jY4v912qnTb4O6wCQE0j8gAZ1KwHIU3ag',
    imageAlt: 'Imagen demostrativa de colaboración comunitaria',
    kicker: 'Información por validar',
    title: 'Sobre AMAAC',
    description: 'Este espacio está reservado para la descripción institucional que será publicada después de su validación oficial.',
    linkLabel: 'Ver campañas de ejemplo'
  },
  campaigns: {
    kicker: 'Contenido demostrativo',
    title: 'Campañas de ejemplo',
    description: 'Tarjetas referenciales para validar la presentación del futuro módulo de campañas.',
    items: [
      {
        title: 'Campaña demostrativa 01',
        description: 'Ejemplo visual de una campaña comunitaria; no corresponde a una actividad oficial.',
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbyeq8zapWMXZtPIbyWwAEOlzvvfJEB4U43rJOFv_YpKrfc1MdH9W2iUnMVkgOvotMOOLTJTH1xH5LCzkZMfiV8DgWy5MfPwXOkNzdCxwsKv7BZ9YpoViK03LsGWDWQY6Vzfy7YaLsdpSm2BURObfPmjMoux65c_KhqYUr8VW9FL-uIg_68CJAhvQvT0Lh3__yOCw_MAFP0IBQ7yD8t7Oap_F_MBM0Upx2IFcOq83dnc-Tocd-y-Ak',
        imageAlt: 'Imagen demostrativa de una campaña comunitaria',
        date: 'Fecha por confirmar',
        location: 'Ubicación por confirmar'
      },
      {
        title: 'Campaña demostrativa 02',
        description: 'Ejemplo visual de una campaña solidaria; no corresponde a una actividad oficial.',
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPwerwxlfrIil_qZ501IckgvJuyKFs3Dz7_OAgwsPqspg-IMUN4xXZOkAV-eXRkD9SEnvVeMTXzSBl6KooUuL7XCLJ-t72ReJkX5ySDWxiFYVJUzD06AT5wrhlNubJCDjwti8xTxrFKFx0ZTAkqIqtp-8AZ4KzbBGBqhtkyyCwW3dzCU0nY4LjB_8OB4Qj8HPEYSyX5i93_TWc2j2TzeRJOCYQhUF4DDvo7-DYnGwiBAlfWdmURqWf',
        imageAlt: 'Imagen demostrativa de una campaña solidaria',
        date: 'Fecha por confirmar',
        location: 'Ubicación por confirmar'
      },
      {
        title: 'Campaña demostrativa 03',
        description: 'Ejemplo visual de una campaña educativa; no corresponde a una actividad oficial.',
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAO-9CKza77NhfWGokDyUKgAfseTwCS-9dmqezmCzZ5MP6aLnSNdCShjUF261xm9b0E1kkPZX015sAnLvnVnoCpoVYJj_PhmWPzB7wldpgSf78gijpXrQyWowbdfZk97Ua2shZe2LNrMU-L819vdKoGXMNJan8ggdM0UIvJYCMBejmlMjZsGTVxas2MOCZf9tHeLNLUdAXzeczfo59a_hTHihZlOaF5h3eXAumwzrUIsKsMo6gKmapC',
        imageAlt: 'Imagen demostrativa de materiales educativos',
        date: 'Fecha por confirmar',
        location: 'Ubicación por confirmar'
      }
    ] satisfies readonly CampaignCard[]
  },
  initiatives: {
    kicker: 'Contenido demostrativo',
    title: 'Iniciativas de ejemplo',
    description: 'Propuestas visuales pendientes de definición y validación institucional.',
    items: [
      { category: 'Ejemplo', title: 'Iniciativa demostrativa 01', description: 'Descripción neutral para validar la tarjeta del futuro módulo.', icon: 'local_library' },
      { category: 'Ejemplo', title: 'Iniciativa demostrativa 02', description: 'Descripción neutral para validar la tarjeta del futuro módulo.', icon: 'eco' },
      { category: 'Ejemplo', title: 'Iniciativa demostrativa 03', description: 'Descripción neutral para validar la tarjeta del futuro módulo.', icon: 'palette' }
    ] satisfies readonly InitiativeCard[]
  },
  news: {
    kicker: 'Contenido demostrativo',
    title: 'Noticias de ejemplo',
    description: 'Contenido referencial pendiente de conexión con una fuente oficial.',
    items: [
      { date: 'Fecha por confirmar', title: 'Noticia demostrativa 01', summary: 'Resumen neutral utilizado exclusivamente para validar la presentación.' },
      { date: 'Fecha por confirmar', title: 'Noticia demostrativa 02', summary: 'Resumen neutral utilizado exclusivamente para validar la presentación.' },
      { date: 'Fecha por confirmar', title: 'Noticia demostrativa 03', summary: 'Resumen neutral utilizado exclusivamente para validar la presentación.' }
    ] satisfies readonly NewsCard[]
  },
  events: {
    kicker: 'Contenido demostrativo',
    title: 'Eventos de ejemplo',
    description: 'Agenda visual de referencia; no anuncia actividades oficiales.',
    items: [
      { title: 'Evento demostrativo 01', description: 'Ejemplo neutral para validar el componente de eventos.', date: 'Fecha por confirmar', time: 'Horario por confirmar', location: 'Ubicación por confirmar' },
      { title: 'Evento demostrativo 02', description: 'Ejemplo neutral para validar el componente de eventos.', date: 'Fecha por confirmar', time: 'Horario por confirmar', location: 'Ubicación por confirmar' },
      { title: 'Evento demostrativo 03', description: 'Ejemplo neutral para validar el componente de eventos.', date: 'Fecha por confirmar', time: 'Horario por confirmar', location: 'Ubicación por confirmar' }
    ] satisfies readonly EventCard[]
  },
  donation: {
    kicker: 'Módulo pendiente',
    title: 'Donaciones de artículos',
    description: 'Espacio demostrativo reservado para una funcionalidad futura.'
  },
  participation: {
    kicker: 'Módulo pendiente',
    title: 'Opciones de participación',
    description: 'Vista demostrativa de opciones que se definirán en sus módulos correspondientes.',
    items: [
      { title: 'Voluntariado', description: 'Opción referencial pendiente de requisitos funcionales.', icon: 'groups' },
      { title: 'Prácticas', description: 'Opción referencial pendiente de requisitos funcionales.', icon: 'school' }
    ] satisfies readonly ParticipationCard[]
  },
  footer: {
    organizationName: 'AMAAC Perú',
    description: 'Contenido institucional pendiente de validación oficial.',
    contactLabel: 'Contacto',
    contactValue: 'Dato de demostración no disponible',
    locationLabel: 'Sede',
    locationValue: 'Ubicación pendiente de confirmación',
    channelsLabel: 'Canales oficiales',
    channelsValue: 'Por confirmar',
    legalLabel: 'Secciones legales pendientes',
    links: ['Transparencia', 'Términos y condiciones', 'Política de privacidad', 'Libro de reclamaciones']
  }
} as const;
