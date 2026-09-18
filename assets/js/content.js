/* ==========================================================================
   Manuel David Maya Rosero — Portfolio content, in Spanish / English / French.
   Structured data consumed by app.js. Edit copy here; layout lives in index.html.
   ========================================================================== */

window.SITE = {

  meta: {
    name: "Manuel David Maya Rosero",
    initials: "MM",
    role: { es: "Ingeniero de Software · Datos e IA", en: "Software Engineer · Data & AI", fr: "Ingénieur logiciel · Data & IA" },
    email: "manueldmaya@gmail.com",
    phoneDisplay: "+33 7 67 30 41 69",
    phoneHref: "+33767304169",
    location: { es: "París, Francia", en: "Paris, France", fr: "Paris, France" },
    linkedinUser: "manueldmaya",
    linkedinUrl: "https://www.linkedin.com/in/manueldmaya",
    githubUser: "Manuelma4",
    githubUrl: "https://github.com/Manuelma4",
    cvFiles: {
      es: "assets/files/CV_ManuelDavid_MAYAROSERO_Engineering.pdf",
      en: "assets/files/CV_ManuelDavid_MAYAROSERO_Engineering.pdf",
      fr: "assets/files/CV_Manuel_David_MAYAROSERO_FR.pdf"
    }
  },

  ui: {
    es: {
      nav_home: "Inicio",
      nav_about: "Perfil",
      nav_work: "Arquitectura",
      nav_education: "Formación",
      nav_experience: "Experiencia",
      nav_projects: "Proyectos",
      nav_skills: "Habilidades",
      nav_certifications: "Certificaciones",
      nav_contact: "Contacto",
      language_selector: "Seleccionar idioma",
      hero_role_line: "Ingeniero de Software — Ingeniería de Datos, Backend, IA",
      hero_lede: "Construyo software de punta a punta: servicios backend y plataformas internas, los pipelines de datos que los alimentan y funciones de IA cuando de verdad aportan.",
      hero_status: "AI Software Architect en MODUO Ingénierie · desde sept. 2026",
      cta_cv: "Descargar CV",
      cta_contact: "Contactarme",
      cta_projects: "Ver proyectos",
      about_eyebrow: "Perfil",
      about_title: "Sobre mí",
      about_lede: "Ingeniero de software colombiano en París: backend, ingeniería de datos e IA aplicada, con una segunda mirada desde la economía digital.",
      work_eyebrow: "Casos de estudio",
      work_title: "Aplicaciones y plataformas que he construido",
      work_lede: "Seis aplicaciones, cada una con el estilo que pedía el problema: monolitos modulares cuando un equipo pequeño mantiene un solo producto, microservicios detrás de gateways GraphQL y REST cuando los dominios escalan por separado, y pipelines por eventos para los datos. Cada caso muestra los lenguajes, cómo escalan las bases de datos, la entrega con CI/CD y los atributos de calidad: escalabilidad, disponibilidad, operabilidad y mantenibilidad.",
      work_kind_professional: "Profesional",
      work_fig: "Fig.",
      work_cicd: "CI/CD",
      work_replicas: "réplicas",
      work_qualities: "Atributos de calidad",
      work_stack: "Stack",
      quality_scalability: "Escalabilidad",
      quality_availability: "Disponibilidad",
      quality_operability: "Operabilidad",
      quality_maintainability: "Mantenibilidad",
      quality_security: "Seguridad",
      quality_observability: "Observabilidad",
      quality_reproducibility: "Reproducibilidad",
      quality_testability: "Pruebas",
      edu_eyebrow: "Formación académica",
      edu_title: "Formación",
      edu_lede: "Un recorrido entre Bogotá y París: Ingeniería de Sistemas y Computación, un programa de ingeniería en Télécom Paris y el doble diploma M2 IREN.",
      exp_eyebrow: "Trayectoria profesional",
      exp_title: "Experiencia",
      exp_lede: "Roles en desarrollo de software, ingeniería de datos e IA aplicada, en Colombia y Francia.",
      proj_eyebrow: "Trabajo académico",
      proj_title: "Proyectos",
      proj_lede: "Trabajo académico agrupado por institución y curso. Filtra por área para ir directo al software.",
      filter_label: "Filtrar proyectos por área",
      filter_all: "Todo",
      filter_software: "Software",
      filter_ml: "ML y datos",
      filter_econ: "Economía digital",
      projects_open_pdf: "Abrir PDF",
      skills_eyebrow: "Caja de herramientas",
      skills_title: "Habilidades técnicas",
      skills_lede: "Las herramientas con las que trabajo, agrupadas según para qué las uso.",
      lang_title: "Idiomas",
      certs_eyebrow: "Aprendizaje continuo",
      certs_title: "Certificaciones",
      certs_lede: "{total} credenciales organizadas por nivel y proveedor: {cert} certificación, {micro} microcertificaciones y {knowledge} knowledge badges.",
      certs_issued: "Emitido",
      certs_expires: "Expira",
      certs_credential: "ID de credencial",
      certs_number: "Número de certificación",
      certs_verify: "Verificar credencial",
      certs_more_skills: "más",
      certs_view_all: "Ver todas en LinkedIn",
      certs_stat_total: "Credenciales",
      certs_stat_certification: "Certificaciones",
      certs_stat_micro: "Microcertificaciones",
      certs_stat_knowledge: "Knowledge badges",
      certs_category_certification: "Certificaciones",
      certs_category_certification_desc: "Certificaciones profesionales verificables.",
      certs_category_micro: "Microcertificaciones",
      certs_category_micro_desc: "Credenciales prácticas basadas en habilidades demostradas, incluidas Microsoft Applied Skills.",
      certs_category_knowledge: "Knowledge Badges",
      certs_category_knowledge_desc: "Credenciales de formación y conocimiento por tecnología.",
      certs_credentials: "credenciales",
      certs_credentials_1: "credencial",
      certs_badge_alt: "Badge de",
      certs_type_knowledge: "Knowledge Badges",
      certs_type_knowledge_1: "Knowledge Badge",
      certs_type_micro: "Microcredenciales",
      certs_type_micro_1: "Microcredencial",
      certs_type_certification: "Certificaciones profesionales",
      certs_type_certification_1: "Certificación profesional",
      certs_type_applied: "Microsoft Applied Skills",
      certs_type_applied_1: "Microsoft Applied Skill",
      contact_eyebrow: "Contacto",
      contact_title: "Hablemos",
      contact_lede: "¿Hablamos de software, datos o IA? Escríbeme o descarga mi CV completo.",
      contact_cta_email: "Escribir un correo",
      contact_cta_cv: "Descargar CV completo",
      contact_copy: "Copiar correo",
      contact_copied: "Copiado",
      footer_rights: "Todos los derechos reservados.",
      footer_source: "Código fuente",
      footer_note: "HTML, CSS y JavaScript, sin frameworks ni rastreadores.",
      scroll_top: "Volver arriba",
      theme_toggle: "Cambiar entre tema claro y oscuro",
      menu_toggle: "Abrir menú",
      skip_link: "Ir al contenido",
      palette_open: "Abrir la paleta de comandos",
      palette_hint: "Comandos",
      palette_placeholder: "Escribe un comando o una sección…",
      palette_empty: "Sin resultados",
      palette_group_go: "Ir a",
      palette_group_actions: "Acciones",
      palette_group_lang: "Idioma",
      palette_theme: "Cambiar tema claro / oscuro",
      palette_copy_email: "Copiar correo electrónico",
      palette_open_github: "Abrir GitHub",
      palette_open_linkedin: "Abrir LinkedIn",
      palette_download_cv: "Descargar CV",
      palette_nav_hint: "navegar",
      palette_enter_hint: "abrir",
      palette_esc_hint: "cerrar",
      work_kind_academic: "Proyecto académico en equipo"
    },
    en: {
      nav_home: "Home",
      nav_about: "Profile",
      nav_work: "Architecture",
      nav_education: "Education",
      nav_experience: "Experience",
      nav_projects: "Projects",
      nav_skills: "Skills",
      nav_certifications: "Certifications",
      nav_contact: "Contact",
      language_selector: "Select language",
      hero_role_line: "Software Engineer — Data Engineering, Backend, AI",
      hero_lede: "I build software end to end: backend services and internal platforms, the data pipelines that feed them, and AI features where they genuinely help.",
      hero_status: "AI Software Architect at MODUO Ingénierie · since Sept 2026",
      cta_cv: "Download CV",
      cta_contact: "Get in touch",
      cta_projects: "View projects",
      about_eyebrow: "Profile",
      about_title: "About me",
      about_lede: "A Colombian software engineer in Paris: backend, data engineering and applied AI, with a second lens from digital economics.",
      work_eyebrow: "Case studies",
      work_title: "Applications and platforms I've built",
      work_lede: "Six applications, each with the style the problem called for: modular monoliths where a small team owns one product, microservices behind GraphQL and REST gateways where domains scale on their own, and event-driven pipelines for data. Every case shows the languages, how the databases scale, CI/CD delivery and the quality attributes: scalability, availability, operability and maintainability.",
      work_kind_professional: "Professional",
      work_fig: "Fig.",
      work_cicd: "CI/CD",
      work_replicas: "replicas",
      work_qualities: "Quality attributes",
      work_stack: "Stack",
      quality_scalability: "Scalability",
      quality_availability: "Availability",
      quality_operability: "Operability",
      quality_maintainability: "Maintainability",
      quality_security: "Security",
      quality_observability: "Observability",
      quality_reproducibility: "Reproducibility",
      quality_testability: "Testing",
      edu_eyebrow: "Academic background",
      edu_title: "Education",
      edu_lede: "A journey between Bogotá and Paris: Systems and Computer Engineering, Télécom Paris's engineering programme, and the M2 IREN double degree.",
      exp_eyebrow: "Career path",
      exp_title: "Experience",
      exp_lede: "Roles in software development, data engineering and applied AI, across Colombia and France.",
      proj_eyebrow: "Academic work",
      proj_title: "Projects",
      proj_lede: "Academic work grouped by institution and course. Filter by area to go straight to the software.",
      filter_label: "Filter projects by area",
      filter_all: "All",
      filter_software: "Software",
      filter_ml: "ML & data",
      filter_econ: "Digital economics",
      projects_open_pdf: "Open PDF",
      skills_eyebrow: "Toolbox",
      skills_title: "Technical skills",
      skills_lede: "The tools I work with, grouped by what I use them for.",
      lang_title: "Languages",
      certs_eyebrow: "Continuous learning",
      certs_title: "Certifications",
      certs_lede: "{total} credentials organized by level and provider: {cert} certification, {micro} microcredentials, and {knowledge} knowledge badges.",
      certs_issued: "Issued",
      certs_expires: "Expires",
      certs_credential: "Credential ID",
      certs_number: "Certification number",
      certs_verify: "Verify credential",
      certs_more_skills: "more",
      certs_view_all: "View all on LinkedIn",
      certs_stat_total: "Credentials",
      certs_stat_certification: "Certifications",
      certs_stat_micro: "Microcredentials",
      certs_stat_knowledge: "Knowledge badges",
      certs_category_certification: "Certifications",
      certs_category_certification_desc: "Verifiable professional certifications.",
      certs_category_micro: "Microcredentials",
      certs_category_micro_desc: "Hands-on credentials based on demonstrated skills, including Microsoft Applied Skills.",
      certs_category_knowledge: "Knowledge Badges",
      certs_category_knowledge_desc: "Training and technology knowledge credentials.",
      certs_credentials: "credentials",
      certs_credentials_1: "credential",
      certs_badge_alt: "Badge for",
      certs_type_knowledge: "Knowledge Badges",
      certs_type_knowledge_1: "Knowledge Badge",
      certs_type_micro: "Microcredentials",
      certs_type_micro_1: "Microcredential",
      certs_type_certification: "Professional certifications",
      certs_type_certification_1: "Professional certification",
      certs_type_applied: "Microsoft Applied Skills",
      certs_type_applied_1: "Microsoft Applied Skill",
      contact_eyebrow: "Contact",
      contact_title: "Let's talk",
      contact_lede: "Let's talk software, data, or AI. Reach out, or download my full CV.",
      contact_cta_email: "Send an email",
      contact_cta_cv: "Download full CV",
      contact_copy: "Copy email",
      contact_copied: "Copied",
      footer_rights: "All rights reserved.",
      footer_source: "Source code",
      footer_note: "HTML, CSS and JavaScript. No frameworks, no trackers.",
      scroll_top: "Back to top",
      theme_toggle: "Switch between light and dark theme",
      menu_toggle: "Open menu",
      skip_link: "Skip to content",
      palette_open: "Open the command palette",
      palette_hint: "Commands",
      palette_placeholder: "Type a command or a section…",
      palette_empty: "No results",
      palette_group_go: "Go to",
      palette_group_actions: "Actions",
      palette_group_lang: "Language",
      palette_theme: "Toggle light / dark theme",
      palette_copy_email: "Copy email address",
      palette_open_github: "Open GitHub",
      palette_open_linkedin: "Open LinkedIn",
      palette_download_cv: "Download CV",
      palette_nav_hint: "navigate",
      palette_enter_hint: "open",
      palette_esc_hint: "close",
      work_kind_academic: "Academic team project"
    },
    fr: {
      nav_home: "Accueil",
      nav_about: "Profil",
      nav_work: "Architecture",
      nav_education: "Formation",
      nav_experience: "Expérience",
      nav_projects: "Projets",
      nav_skills: "Compétences",
      nav_certifications: "Certifications",
      nav_contact: "Contact",
      language_selector: "Choisir la langue",
      hero_role_line: "Ingénieur Logiciel — Data Engineering, Backend, IA",
      hero_lede: "Je construis du logiciel de bout en bout : services backend et plateformes internes, pipelines de données qui les alimentent, et fonctionnalités d'IA là où elles sont vraiment utiles.",
      hero_status: "AI Software Architect chez MODUO Ingénierie · depuis sept. 2026",
      cta_cv: "Télécharger le CV",
      cta_contact: "Me contacter",
      cta_projects: "Voir les projets",
      about_eyebrow: "Profil",
      about_title: "À propos",
      about_lede: "Ingénieur logiciel colombien à Paris : backend, data engineering et IA appliquée, avec un second regard venu de l'économie numérique.",
      work_eyebrow: "Études de cas",
      work_title: "Applications et plateformes que j'ai construites",
      work_lede: "Six applications, chacune avec le style que le problème demandait : monolithes modulaires quand une petite équipe porte un seul produit, microservices derrière des gateways GraphQL et REST quand les domaines évoluent séparément, et pipelines événementiels pour les données. Chaque cas présente les langages, la montée en charge des bases de données, la livraison en CI/CD et les attributs de qualité : scalabilité, disponibilité, exploitabilité et maintenabilité.",
      work_kind_professional: "Professionnel",
      work_fig: "Fig.",
      work_cicd: "CI/CD",
      work_replicas: "réplicas",
      work_qualities: "Attributs de qualité",
      work_stack: "Stack",
      quality_scalability: "Scalabilité",
      quality_availability: "Disponibilité",
      quality_operability: "Exploitabilité",
      quality_maintainability: "Maintenabilité",
      quality_security: "Sécurité",
      quality_observability: "Observabilité",
      quality_reproducibility: "Reproductibilité",
      quality_testability: "Tests",
      edu_eyebrow: "Parcours académique",
      edu_title: "Formation",
      edu_lede: "Un parcours entre Bogotá et Paris : génie informatique, diplôme d'ingénieur, puis double diplôme en économie numérique.",
      exp_eyebrow: "Parcours professionnel",
      exp_title: "Expérience",
      exp_lede: "Des missions en développement logiciel, ingénierie des données et IA appliquée, entre la Colombie et la France.",
      proj_eyebrow: "Travaux académiques",
      proj_title: "Projets",
      proj_lede: "Travaux académiques regroupés par établissement et par cours. Filtrez par domaine pour aller droit au logiciel.",
      filter_label: "Filtrer les projets par domaine",
      filter_all: "Tout",
      filter_software: "Logiciel",
      filter_ml: "ML et données",
      filter_econ: "Économie numérique",
      projects_open_pdf: "Ouvrir le PDF",
      skills_eyebrow: "Boîte à outils",
      skills_title: "Compétences techniques",
      skills_lede: "Les outils avec lesquels je travaille, regroupés par usage.",
      lang_title: "Langues",
      certs_eyebrow: "Formation continue",
      certs_title: "Certifications",
      certs_lede: "{total} certifications organisées par niveau et fournisseur : {cert} certification, {micro} microcertifications et {knowledge} knowledge badges.",
      certs_issued: "Délivré",
      certs_expires: "Expire",
      certs_credential: "ID de certification",
      certs_number: "Numéro de certification",
      certs_verify: "Vérifier la certification",
      certs_more_skills: "de plus",
      certs_view_all: "Voir tout sur LinkedIn",
      certs_stat_total: "Certifications",
      certs_stat_certification: "Certifications professionnelles",
      certs_stat_micro: "Microcertifications",
      certs_stat_knowledge: "Knowledge badges",
      certs_category_certification: "Certifications",
      certs_category_certification_desc: "Certifications professionnelles vérifiables.",
      certs_category_micro: "Microcertifications",
      certs_category_micro_desc: "Certifications pratiques fondées sur des compétences démontrées, dont Microsoft Applied Skills.",
      certs_category_knowledge: "Knowledge Badges",
      certs_category_knowledge_desc: "Certifications de formation et de connaissance technologique.",
      certs_credentials: "certifications",
      certs_credentials_1: "certification",
      certs_badge_alt: "Badge de",
      certs_type_knowledge: "Knowledge Badges",
      certs_type_knowledge_1: "Knowledge Badge",
      certs_type_micro: "Microcertifications",
      certs_type_micro_1: "Microcertification",
      certs_type_certification: "Certifications professionnelles",
      certs_type_certification_1: "Certification professionnelle",
      certs_type_applied: "Microsoft Applied Skills",
      certs_type_applied_1: "Microsoft Applied Skill",
      contact_eyebrow: "Contact",
      contact_title: "Discutons",
      contact_lede: "Parlons logiciel, data ou IA. Écrivez-moi ou téléchargez mon CV complet.",
      contact_cta_email: "Envoyer un e-mail",
      contact_cta_cv: "Télécharger le CV complet",
      contact_copy: "Copier l'e-mail",
      contact_copied: "Copié",
      footer_rights: "Tous droits réservés.",
      footer_source: "Code source",
      footer_note: "HTML, CSS et JavaScript. Sans framework ni traceur.",
      scroll_top: "Retour en haut",
      theme_toggle: "Basculer entre thème clair et sombre",
      menu_toggle: "Ouvrir le menu",
      skip_link: "Aller au contenu",
      palette_open: "Ouvrir la palette de commandes",
      palette_hint: "Commandes",
      palette_placeholder: "Tapez une commande ou une section…",
      palette_empty: "Aucun résultat",
      palette_group_go: "Aller à",
      palette_group_actions: "Actions",
      palette_group_lang: "Langue",
      palette_theme: "Basculer thème clair / sombre",
      palette_copy_email: "Copier l'adresse e-mail",
      palette_open_github: "Ouvrir GitHub",
      palette_open_linkedin: "Ouvrir LinkedIn",
      palette_download_cv: "Télécharger le CV",
      palette_nav_hint: "naviguer",
      palette_enter_hint: "ouvrir",
      palette_esc_hint: "fermer",
      work_kind_academic: "Projet académique en équipe"
    }
  },

  /* Short facts shown in the hero instead of vanity counters. */
  heroFacts: [
    {
      label: { es: "Ahora", en: "Now", fr: "Actuellement" },
      value: { es: "AI Software Architect · MODUO Ingénierie", en: "AI Software Architect · MODUO Ingénierie", fr: "AI Software Architect · MODUO Ingénierie" }
    },
    {
      label: { es: "Formación", en: "Studies", fr: "Formation" },
      value: { es: "Télécom Paris + M2 IREN Dauphine–PSL · 2026", en: "Télécom Paris + M2 IREN Dauphine–PSL · 2026", fr: "Télécom Paris + M2 IREN Dauphine–PSL · 2026" }
    },
    {
      label: { es: "Idiomas", en: "Languages", fr: "Langues" },
      value: { es: "Español · Inglés C1 · Francés C1", en: "Spanish · English C1 · French C1", fr: "Espagnol · Anglais C1 · Français C1" }
    },
    {
      label: { es: "Enfoque", en: "Focus", fr: "Axes" },
      value: { es: "Arquitectura de software · plataformas de datos · IA aplicada", en: "Software architecture · data platforms · applied AI", fr: "Architecture logicielle · plateformes de données · IA appliquée" }
    }
  ],

  about: {
    paragraphs: {
      es: [
        "Me gusta hacerme cargo de un sistema de punta a punta: la API, la base de datos que hay detrás, el pipeline que la alimenta y el despliegue que la mantiene en marcha. Estudié Ingeniería de Sistemas y Computación en la Universidad Nacional de Colombia para construir una base sólida en infraestructura, desarrollo web, bases de datos y trabajo en equipos ágiles; allí también tuve mis primeros acercamientos a la ciencia de datos y al procesamiento del lenguaje natural.",
        "En Télécom Paris profundicé en Data Science y MODS. Después elegí el doble diploma M2 IREN con Dauphine–PSL para complementar la ingeniería con economía digital, industrias de red, competencia y regulación. Llegué a MODUO Ingénierie como AI Data Engineer Intern: desarrollé el portal interno de gestión de proyectos (Django, PostgreSQL), diseñé y desplegué un servicio central de identidad OIDC para seis aplicaciones internas y construí pipelines de datos BIM y asistentes RAG.",
        "Desde septiembre de 2026 soy AI Software Architect en MODUO Ingénierie. Me ocupo de la arquitectura de las aplicaciones internas y de la plataforma de datos e IA: qué se mantiene como monolito modular y qué se divide en servicios, cómo escalan las bases de datos, y los estándares comunes de entrega (CI/CD), operación y observabilidad."
      ],
      en: [
        "I like owning a system end to end: the API, the database behind it, the pipeline that feeds it and the deployment that keeps it running. I studied Systems and Computer Engineering at Universidad Nacional de Colombia to build solid foundations in infrastructure, web development, databases, and agile teamwork; it was also where I first explored data science and natural language processing.",
        "At Télécom Paris, I deepened my training in Data Science and MODS. I then chose the M2 IREN double-degree track with Dauphine–PSL to complement engineering with digital economics, network industries, competition, and regulation. I joined MODUO Ingénierie as an AI Data Engineer Intern: I built the internal project-management portal (Django, PostgreSQL), designed and deployed a central OIDC identity service for six internal applications, and built BIM data pipelines and RAG assistants.",
        "Since September 2026 I am the AI Software Architect at MODUO Ingénierie. I own the architecture of the internal applications and of the data and AI platform: what stays a modular monolith and what is split into services, how the databases scale, and the shared standards for delivery (CI/CD), operations and observability."
      ],
      fr: [
        "J'aime prendre en charge un système de bout en bout : l'API, la base de données derrière, le pipeline qui l'alimente et le déploiement qui le fait tourner. J'ai étudié l'ingénierie des systèmes et de l'informatique à l'Universidad Nacional de Colombia afin d'acquérir des bases solides en infrastructure, développement web, bases de données et travail agile ; j'y ai également découvert la data science et le traitement automatique du langage.",
        "À Télécom Paris, j'ai approfondi la Data Science et le parcours MODS. J'ai ensuite choisi le double diplôme M2 IREN avec Dauphine–PSL afin de compléter l'ingénierie par l'économie numérique, les industries de réseau, la concurrence et la régulation. J'ai rejoint MODUO Ingénierie comme stagiaire ingénieur Data & IA : j'ai développé le portail interne de gestion de projets (Django, PostgreSQL), conçu et déployé un service d'identité OIDC central pour six applications internes, et construit des pipelines de données BIM et des assistants RAG.",
        "Depuis septembre 2026, je suis AI Software Architect chez MODUO Ingénierie. Je suis responsable de l'architecture des applications internes et de la plateforme data et IA : ce qui reste un monolithe modulaire et ce qui est découpé en services, la montée en charge des bases de données, et les standards communs de livraison (CI/CD), d'exploitation et d'observabilité."
      ]
    },
    highlights: [
      {
        icon: "code",
        title: { es: "Backend y plataformas", en: "Backend & platforms", fr: "Backend et plateformes" },
        text: {
          es: "Servicios en Django, FastAPI y Node.js/TypeScript sobre PostgreSQL y MongoDB; SSO con OIDC para seis aplicaciones internas.",
          en: "Django, FastAPI and Node.js/TypeScript services on PostgreSQL and MongoDB; OIDC single sign-on for six internal apps.",
          fr: "Services Django, FastAPI et Node.js/TypeScript sur PostgreSQL et MongoDB ; SSO OIDC pour six applications internes."
        }
      },
      {
        icon: "database",
        title: { es: "Ingeniería de datos e IA", en: "Data engineering & AI", fr: "Data engineering et IA" },
        text: {
          es: "Pipelines de datos, capas bronze/silver/gold, Databricks y asistentes RAG con evaluación por lotes.",
          en: "Data pipelines, bronze/silver/gold layers, Databricks, and RAG assistants with batch evaluation.",
          fr: "Pipelines de données, couches bronze/silver/gold, Databricks et assistants RAG avec évaluation par lots."
        }
      },
      {
        icon: "layers",
        title: { es: "Ingeniería + economía digital", en: "Engineering + digital economy", fr: "Ingénierie + économie numérique" },
        text: {
          es: "Formación técnica combinada con la especialización IREN en industrias de red y regulación digital.",
          en: "Technical training combined with the IREN specialization in network industries and digital regulation.",
          fr: "Formation technique combinée à la spécialisation IREN en industries de réseau et régulation numérique."
        }
      }
    ]
  },

  /* ------------------------------------------------------------------------
     Architecture case studies — one application per entry, each with an
     architecture diagram. Diagram: nodes sit on a (col,row) grid; groups span
     cells; edges connect node ids. edge.sides = "<from side><to side>" using
     l/r/t/b (default "rl"); fromPos/toPos (0..1) slide the port along that
     side; via = [{col,row}] routes through cells (half values = the gap).
     ------------------------------------------------------------------------ */
  work: [
    {
      id: "moduo-chat",
      title: "MODUO Chat",
      tagline: {
        es: "El chatbot de la empresa sobre la documentación de cada proyecto: microservicios, GraphQL y modelos servidos en casa",
        en: "The company chatbot over each project's documentation: microservices, GraphQL and models served in-house",
        fr: "Le chatbot de l'entreprise sur la documentation de chaque projet : microservices, GraphQL et modèles servis en interne"
      },
      org: "MODUO Ingénierie",
      year: "2026",
      kind: "professional",
      summary: {
        es: "Un asistente conversacional que responde con fuentes sobre la documentación BIM y técnica de cada proyecto de ingeniería. Lo diseñé como un conjunto de servicios pequeños detrás de un gateway GraphQL: la ingesta es asíncrona y se escala con la cola, la ruta de consulta es sin estado y se replica, y los modelos se sirven dentro de la empresa para que ningún documento salga de ella.",
        en: "A conversational assistant that answers with sources over the BIM and technical documentation of each engineering project. I designed it as a set of small services behind a GraphQL gateway: ingestion is asynchronous and scales with the queue, the query path is stateless and replicated, and the models are served in-house so no document ever leaves the company.",
        fr: "Un assistant conversationnel qui répond avec ses sources sur la documentation BIM et technique de chaque projet d'ingénierie. Je l'ai conçu comme un ensemble de petits services derrière une gateway GraphQL : l'ingestion est asynchrone et suit la file d'attente, le chemin de requête est sans état et répliqué, et les modèles sont servis en interne pour qu'aucun document ne quitte l'entreprise."
      },
      points: {
        es: [
          "Gateway GraphQL en TypeScript como único punto de entrada: esquema tipado para el cliente web, autenticación con los tokens de Moduo Connect, límites de uso y streaming de las respuestas.",
          "Servicios en Python con una responsabilidad cada uno: chat (orquestación y citas), recuperación (búsqueda híbrida y reordenación por proyecto) e ingesta (Apache Tika, chunking, embeddings), desacoplada mediante RabbitMQ y escalada según la profundidad de la cola.",
          "Datos aislados por proyecto: una colección de ChromaDB por proyecto y filtros obligatorios en la recuperación; conversaciones y feedback en PostgreSQL.",
          "Generación con modelos servidos por Ollama en GPU propia; cada respuesta llega con el documento y la página de origen.",
          "Evaluación automática en CI sobre un conjunto de preguntas de referencia (groundedness, relevancia, latencia) como puerta de entrada a cada despliegue; trazas por petición para depurar recuperación y generación."
        ],
        en: [
          "GraphQL gateway in TypeScript as the single entry point: a typed schema for the web client, authentication with Moduo Connect tokens, rate limits and streamed answers.",
          "Python services with one responsibility each: chat (orchestration and citations), retrieval (hybrid search and per-project reranking) and ingestion (Apache Tika, chunking, embeddings), decoupled through RabbitMQ and scaled with queue depth.",
          "Data isolated per project: one ChromaDB collection per project and mandatory filters at retrieval time; conversations and feedback in PostgreSQL.",
          "Generation with models served by Ollama on company GPUs; every answer carries its source document and page.",
          "Automated evaluation in CI over a golden question set (groundedness, relevance, latency) as the gate before each deployment; per-request traces to debug retrieval and generation."
        ],
        fr: [
          "Gateway GraphQL en TypeScript comme point d'entrée unique : schéma typé pour le client web, authentification avec les jetons Moduo Connect, limitation de débit et réponses en streaming.",
          "Services Python à responsabilité unique : chat (orchestration et citations), recherche (recherche hybride et reclassement par projet) et ingestion (Apache Tika, découpage, embeddings), découplés via RabbitMQ et dimensionnés selon la profondeur de la file.",
          "Données isolées par projet : une collection ChromaDB par projet et des filtres obligatoires à la recherche ; conversations et retours dans PostgreSQL.",
          "Génération avec des modèles servis par Ollama sur les GPU de l'entreprise ; chaque réponse indique le document et la page d'origine.",
          "Évaluation automatique en CI sur un jeu de questions de référence (groundedness, pertinence, latence) comme condition de chaque déploiement ; traces par requête pour déboguer recherche et génération."
        ]
      },
      stack: ["TypeScript", "GraphQL", "Python", "FastAPI", "RabbitMQ", "ChromaDB", "PostgreSQL", "Ollama", "Apache Tika", "Docker", "OIDC", "CI/CD"],
      qualities: [
        { key: "scalability", text: { es: "Servicios sin estado con réplicas independientes; los workers de ingesta escalan con la cola; una colección por proyecto.", en: "Stateless services replicated independently; ingestion workers scale with the queue; one collection per project.", fr: "Services sans état répliqués indépendamment ; les workers d'ingestion suivent la file ; une collection par projet." } },
        { key: "availability", text: { es: "Dos réplicas por servicio, cola con reintentos que absorbe picos de ingesta y despliegues progresivos sin corte.", en: "Two replicas per service, a retrying queue that absorbs ingestion bursts, and rolling deployments with no downtime.", fr: "Deux réplicas par service, file avec reprises qui absorbe les pics d'ingestion et déploiements progressifs sans coupure." } },
        { key: "security", text: { es: "SSO con Moduo Connect, aislamiento por proyecto aplicado en la recuperación y modelos en casa: ningún documento sale de la empresa.", en: "SSO through Moduo Connect, per-project isolation enforced at retrieval, and in-house models: no document leaves the company.", fr: "SSO via Moduo Connect, isolation par projet appliquée à la recherche et modèles en interne : aucun document ne quitte l'entreprise." } },
        { key: "operability", text: { es: "Trazas por petición, métricas de latencia y calidad, evaluación en CI y entornos dev/prod idénticos.", en: "Per-request traces, latency and quality metrics, evaluation in CI and identical dev/prod environments.", fr: "Traces par requête, métriques de latence et de qualité, évaluation en CI et environnements dev/prod identiques." } },
        { key: "maintainability", text: { es: "Contratos explícitos (esquema GraphQL, REST tipado), un servicio por responsabilidad y pruebas de contrato entre ellos.", en: "Explicit contracts (GraphQL schema, typed REST), one service per responsibility and contract tests between them.", fr: "Contrats explicites (schéma GraphQL, REST typé), un service par responsabilité et tests de contrat entre eux." } }
      ],
      diagram: {
        cols: 5,
        rows: 3,
        style: { es: "Microservicios · ingesta por eventos", en: "Microservices · event-driven ingestion", fr: "Microservices · ingestion événementielle" },
        styleIcon: "network",
        caption: {
          es: "Arriba, la ingesta asíncrona de documentos; en el centro, la ruta de una pregunta a través del gateway GraphQL; abajo, el estado, los modelos y la telemetría.",
          en: "Top: asynchronous document ingestion. Middle: the path of a question through the GraphQL gateway. Bottom: state, models and telemetry.",
          fr: "En haut, l'ingestion asynchrone des documents ; au centre, le trajet d'une question à travers la gateway GraphQL ; en bas, l'état, les modèles et la télémétrie."
        },
        groups: [
          { col: 1, row: 0, colSpan: 3, rowSpan: 1, tone: "accent", icon: "arrowLeftRight", label: { es: "Ingesta · asíncrona, escala con la cola", en: "Ingestion · asynchronous, scales with the queue", fr: "Ingestion · asynchrone, suit la file d'attente" } },
          { col: 1, row: 1, colSpan: 3, rowSpan: 1, tone: "primary", icon: "container", label: { es: "Ruta de consulta · servicios sin estado · Docker", en: "Query path · stateless services · Docker", fr: "Chemin de requête · services sans état · Docker" } },
          { col: 3, row: 2, colSpan: 1, rowSpan: 1, tone: "violet", icon: "cpu", label: { es: "Servidor GPU", en: "GPU host", fr: "Serveur GPU" } }
        ],
        nodes: [
          { id: "docs", col: 0, row: 0, kind: "source", label: { es: "Documentos del proyecto", en: "Project documents", fr: "Documents du projet" }, sub: "PDF · DOCX · IFC" },
          { id: "queue", col: 1, row: 0, kind: "queue", label: "RabbitMQ", sub: { es: "trabajos · reintentos", en: "jobs · retries", fr: "tâches · reprises" } },
          { id: "ingest", col: 2, row: 0, kind: "worker", replicas: 3, tech: "Python", label: { es: "Workers de ingesta", en: "Ingestion workers", fr: "Workers d'ingestion" }, sub: "Apache Tika · chunking" },
          { id: "embed", col: 3, row: 0, kind: "worker", tech: "Python", label: { es: "Servicio de embeddings", en: "Embedding service", fr: "Service d'embeddings" }, sub: { es: "por lotes · GPU", en: "batched · GPU", fr: "par lots · GPU" } },
          { id: "chroma", col: 4, row: 0, kind: "store", label: "ChromaDB", sub: { es: "una colección por proyecto", en: "one collection per project", fr: "une collection par projet" } },
          { id: "web", col: 0, row: 1, kind: "client", tech: "TypeScript", label: { es: "Chat web", en: "Web chat", fr: "Chat web" }, sub: "React · streaming" },
          { id: "gateway", col: 1, row: 1, kind: "gateway", replicas: 2, tech: "TypeScript", label: "GraphQL gateway", sub: { es: "esquema · auth · límites", en: "schema · auth · rate limits", fr: "schéma · auth · limites" } },
          { id: "chat", col: 2, row: 1, kind: "service", primary: true, replicas: 2, tech: "Python", label: { es: "Servicio de chat", en: "Chat service", fr: "Service de chat" }, sub: { es: "FastAPI · orquestación · citas", en: "FastAPI · orchestration · citations", fr: "FastAPI · orchestration · citations" } },
          { id: "retrieval", col: 3, row: 1, kind: "service", replicas: 2, tech: "Python", label: { es: "Servicio de recuperación", en: "Retrieval service", fr: "Service de recherche" }, sub: { es: "búsqueda híbrida · rerank", en: "hybrid search · rerank", fr: "recherche hybride · rerank" } },
          { id: "sso", col: 0, row: 2, kind: "external", icon: "keyRound", label: "Moduo Connect", sub: "OIDC · SSO" },
          { id: "pg", col: 1, row: 2, kind: "store", label: "PostgreSQL", sub: { es: "conversaciones · feedback", en: "conversations · feedback", fr: "conversations · retours" } },
          { id: "llm", col: 3, row: 2, kind: "llm", label: "Ollama", sub: { es: "modelos en casa", en: "in-house models", fr: "modèles en interne" } },
          { id: "ops", col: 4, row: 2, kind: "ops", label: { es: "Observabilidad", en: "Observability", fr: "Observabilité" }, sub: { es: "trazas · métricas · logs", en: "traces · metrics · logs", fr: "traces · métriques · logs" } }
        ],
        edges: [
          { from: "docs", to: "queue", kind: "async", label: { es: "evento de subida", en: "upload event", fr: "événement d'envoi" } },
          { from: "queue", to: "ingest", kind: "async", label: { es: "trabajos", en: "jobs", fr: "tâches" } },
          { from: "ingest", to: "embed", label: "chunks" },
          { from: "embed", to: "chroma", label: { es: "vectores", en: "vectors", fr: "vecteurs" } },
          { from: "web", to: "gateway", label: "GraphQL · SSE" },
          { from: "gateway", to: "chat", label: "REST · JWT" },
          { from: "chat", to: "retrieval", label: { es: "recupera", en: "retrieve", fr: "recherche" } },
          { from: "retrieval", to: "chroma", sides: "rb", fromPos: 0.3, label: { es: "top-k · por proyecto", en: "top-k · per project", fr: "top-k · par projet" } },
          { from: "chat", to: "pg", sides: "bl", fromPos: 0.3, label: { es: "historial", en: "history", fr: "historique" } },
          { from: "chat", to: "llm", sides: "br", fromPos: 0.7, label: { es: "genera · stream", en: "generate · stream", fr: "génère · stream" } },
          { from: "sso", to: "web", sides: "tb", dashed: true, label: "OIDC" },
          { from: "retrieval", to: "ops", sides: "rt", fromPos: 0.7, dashed: true, label: { es: "telemetría", en: "telemetry", fr: "télémétrie" } }
        ],
        pipeline: [
          { label: "Git", sub: { es: "monorepo · revisión de PR", en: "monorepo · PR review", fr: "monorepo · revue de PR" } },
          { label: "CI", sub: { es: "unitarias · contrato", en: "unit · contract tests", fr: "unitaires · contrat" } },
          { label: { es: "Evaluación RAG", en: "RAG eval", fr: "Évaluation RAG" }, sub: { es: "golden set · groundedness", en: "golden set · groundedness", fr: "golden set · groundedness" } },
          { label: { es: "Imágenes", en: "Images", fr: "Images" }, sub: { es: "una por servicio", en: "one per service", fr: "une par service" } },
          { label: { es: "Despliegue", en: "Deploy", fr: "Déploiement" }, sub: { es: "dev → prod · progresivo", en: "dev → prod · rolling", fr: "dev → prod · progressif" } }
        ]
      }
    },
    {
      id: "moduocopil",
      title: "ModuoCopil",
      tagline: {
        es: "El portal de gestión de proyectos y el ecosistema de aplicaciones internas que comparten un mismo inicio de sesión",
        en: "The project-management portal and the ecosystem of internal applications that share one sign-in",
        fr: "Le portail de gestion de projets et l'écosystème d'applications internes qui partagent une même connexion"
      },
      org: "MODUO Ingénierie",
      year: "2026",
      kind: "professional",
      summary: {
        es: "ModuoCopil es la aplicación en producción con la que la empresa pilota sus proyectos: seguimiento, administración y registro de horas. Es un monolito modular en Django, y forma parte de un ecosistema de seis aplicaciones internas que autentican en Moduo Connect, el servicio central de identidad OIDC que diseñé y desplegué para que ninguna aplicación mantenga su propia tabla de usuarios.",
        en: "ModuoCopil is the production application the company runs its projects on: tracking, administration and time logging. It is a modular monolith in Django, and part of an ecosystem of six internal applications that authenticate through Moduo Connect, the central OIDC identity service I designed and deployed so that no application keeps its own user table.",
        fr: "ModuoCopil est l'application en production avec laquelle l'entreprise pilote ses projets : suivi, administration et saisie des temps. C'est un monolithe modulaire en Django, au sein d'un écosystème de six applications internes qui s'authentifient via Moduo Connect, le service d'identité OIDC central que j'ai conçu et déployé pour qu'aucune application ne gère sa propre table d'utilisateurs."
      },
      points: {
        es: [
          "Monolito modular en Django: tableros, administración, registro de horas y una API REST interna son apps separadas que comparten un único modelo de datos en PostgreSQL, con migraciones versionadas y pruebas por módulo.",
          "Un solo desplegable, varias instancias: dos procesos Gunicorn detrás de Nginx, y las tareas pesadas (informes, exportaciones, correos) fuera del ciclo de petición mediante un worker y Redis.",
          "Base de datos escalada para el reporting: réplica de lectura para los tableros y copias de seguridad nocturnas con restauración probada.",
          "Ecosistema de aplicaciones: ModuoCopil es una de las seis aplicaciones internas que delegan la autenticación en Moduo Connect (Authentik, OIDC/OAuth 2.0), con aislamiento de sesión por aplicación y una migración que conservó los hashes de contraseña existentes; incorporar una aplicación nueva es una tarea de configuración.",
          "Entregas con Git y CI/CD: pruebas, comprobación de migraciones, imagen versionada, despliegue en desarrollo y luego en producción con comprobaciones de salud."
        ],
        en: [
          "Modular monolith in Django: dashboards, administration, time tracking and an internal REST API are separate apps sharing a single PostgreSQL data model, with versioned migrations and tests per module.",
          "One deployable, several instances: two Gunicorn processes behind Nginx, with heavy work (reports, exports, e-mails) moved off the request cycle through a worker and Redis.",
          "Database scaled for reporting: a read replica for the dashboards and nightly backups with tested restores.",
          "Application ecosystem: ModuoCopil is one of six internal applications that delegate authentication to Moduo Connect (Authentik, OIDC/OAuth 2.0), with per-application session isolation and a migration that preserved existing password hashes; onboarding a new application is a configuration task.",
          "Releases through Git and CI/CD: tests, migration checks, a versioned image, deployment to development and then to production with health checks."
        ],
        fr: [
          "Monolithe modulaire en Django : tableaux de bord, administration, suivi du temps et une API REST interne sont des apps séparées qui partagent un modèle PostgreSQL unique, avec migrations versionnées et tests par module.",
          "Un seul livrable, plusieurs instances : deux processus Gunicorn derrière Nginx, et les traitements lourds (rapports, exports, e-mails) sortis du cycle de requête via un worker et Redis.",
          "Base de données dimensionnée pour le reporting : réplica en lecture pour les tableaux de bord et sauvegardes nocturnes avec restauration testée.",
          "Écosystème d'applications : ModuoCopil est l'une des six applications internes qui délèguent l'authentification à Moduo Connect (Authentik, OIDC/OAuth 2.0), avec isolement des sessions par application et une migration qui a préservé les hachages de mots de passe existants ; intégrer une nouvelle application est une tâche de configuration.",
          "Livraisons via Git et CI/CD : tests, vérification des migrations, image versionnée, déploiement en développement puis en production avec contrôles de santé."
        ]
      },
      stack: ["Django", "Python", "PostgreSQL", "Redis", "Celery", "Nginx", "Tailwind CSS", "Authentik", "OIDC", "Docker", "CI/CD"],
      qualities: [
        { key: "maintainability", text: { es: "Apps Django con responsabilidades separadas, migraciones versionadas, pruebas por módulo y un único modelo de datos documentado.", en: "Django apps with separate responsibilities, versioned migrations, tests per module and one documented data model.", fr: "Apps Django aux responsabilités séparées, migrations versionnées, tests par module et un modèle de données unique documenté." } },
        { key: "scalability", text: { es: "Instancias web sin estado detrás de Nginx, réplica de lectura para los tableros y trabajos pesados en un worker aparte.", en: "Stateless web instances behind Nginx, a read replica for dashboards and heavy jobs on a separate worker.", fr: "Instances web sans état derrière Nginx, réplica en lecture pour les tableaux de bord et traitements lourds sur un worker séparé." } },
        { key: "availability", text: { es: "Dos réplicas de la aplicación, comprobaciones de salud en el despliegue y copias de seguridad con restauración probada.", en: "Two application replicas, health checks during deployment and backups with tested restores.", fr: "Deux réplicas de l'application, contrôles de santé au déploiement et sauvegardes avec restauration testée." } },
        { key: "operability", text: { es: "Entornos dev y prod idénticos, configuración por variables de entorno, logs y métricas con alertas.", en: "Identical dev and prod environments, configuration through environment variables, logs and metrics with alerts.", fr: "Environnements dev et prod identiques, configuration par variables d'environnement, logs et métriques avec alertes." } },
        { key: "security", text: { es: "SSO OIDC con Moduo Connect para las seis aplicaciones, permisos por rol y sesiones aisladas por aplicación.", en: "OIDC SSO through Moduo Connect for all six applications, role-based permissions and sessions isolated per application.", fr: "SSO OIDC via Moduo Connect pour les six applications, permissions par rôle et sessions isolées par application." } }
      ],
      diagram: {
        cols: 5,
        rows: 3,
        style: { es: "Monolito modular · ecosistema con SSO", en: "Modular monolith · SSO ecosystem", fr: "Monolithe modulaire · écosystème SSO" },
        styleIcon: "box",
        caption: {
          es: "ModuoCopil como monolito modular con su capa de datos escalada; arriba, el ecosistema de aplicaciones internas que comparten Moduo Connect.",
          en: "ModuoCopil as a modular monolith with its scaled data tier; top: the ecosystem of internal applications sharing Moduo Connect.",
          fr: "ModuoCopil en monolithe modulaire avec sa couche de données dimensionnée ; en haut, l'écosystème d'applications internes qui partagent Moduo Connect."
        },
        groups: [
          { col: 0, row: 0, colSpan: 2, rowSpan: 1, tone: "neutral", icon: "users", label: { es: "Ecosistema de aplicaciones internas · un solo inicio de sesión", en: "Internal application ecosystem · one sign-in", fr: "Écosystème d'applications internes · une seule connexion" } },
          { col: 2, row: 1, colSpan: 1, rowSpan: 2, tone: "primary", icon: "box", label: { es: "Monolito modular", en: "Modular monolith", fr: "Monolithe modulaire" } },
          { col: 3, row: 1, colSpan: 2, rowSpan: 2, tone: "violet", icon: "database", label: { es: "Capa de datos · PostgreSQL", en: "Data tier · PostgreSQL", fr: "Couche de données · PostgreSQL" } }
        ],
        nodes: [
          { id: "apps", col: 0, row: 0, kind: "app", replicas: 5, label: { es: "5 aplicaciones internas más", en: "5 more internal apps", fr: "5 autres applications internes" }, sub: { es: "misma identidad · una sesión cada una", en: "same identity · one session each", fr: "même identité · une session chacune" } },
          { id: "sso", col: 1, row: 0, kind: "external", icon: "keyRound", label: "Moduo Connect", sub: "Authentik · OIDC · OAuth 2.0" },
          { id: "ops", col: 4, row: 0, kind: "ops", label: { es: "Observabilidad", en: "Observability", fr: "Observabilité" }, sub: { es: "logs · métricas · alertas", en: "logs · metrics · alerts", fr: "logs · métriques · alertes" } },
          { id: "browser", col: 0, row: 1, kind: "client", label: { es: "Navegador", en: "Browser", fr: "Navigateur" }, sub: { es: "render en servidor · Tailwind", en: "server-rendered · Tailwind", fr: "rendu serveur · Tailwind" } },
          { id: "proxy", col: 1, row: 1, kind: "proxy", label: "Nginx", sub: { es: "TLS · estáticos", en: "TLS · static files", fr: "TLS · statiques" } },
          { id: "app", col: 2, row: 1, kind: "service", primary: true, replicas: 2, tech: "Python", label: "ModuoCopil · Django", sub: { es: "proyectos · tableros · horas · API", en: "projects · dashboards · timelog · API", fr: "projets · tableaux · temps · API" } },
          { id: "db", col: 3, row: 1, kind: "store", label: "PostgreSQL", sub: { es: "primario", en: "primary", fr: "primaire" } },
          { id: "replica", col: 4, row: 1, kind: "store", label: { es: "Réplica de lectura", en: "Read replica", fr: "Réplica en lecture" }, sub: { es: "tableros · reporting", en: "dashboards · reporting", fr: "tableaux de bord · reporting" } },
          { id: "worker", col: 2, row: 2, kind: "worker", tech: "Python", label: { es: "Worker en segundo plano", en: "Background worker", fr: "Worker en arrière-plan" }, sub: { es: "informes · exportaciones · correos", en: "reports · exports · e-mails", fr: "rapports · exports · e-mails" } },
          { id: "redis", col: 3, row: 2, kind: "cache", label: "Redis", sub: { es: "cola · caché", en: "queue · cache", fr: "file · cache" } },
          { id: "backups", col: 4, row: 2, kind: "storage", label: { es: "Copias de seguridad", en: "Backups", fr: "Sauvegardes" }, sub: { es: "nocturnas · restauración probada", en: "nightly · restore tested", fr: "nocturnes · restauration testée" } }
        ],
        edges: [
          { from: "apps", to: "sso", label: "OIDC" },
          { from: "sso", to: "app", sides: "rt", label: { es: "OIDC · login", en: "OIDC · login", fr: "OIDC · connexion" } },
          { from: "browser", to: "proxy", label: "HTTPS" },
          { from: "proxy", to: "app" },
          { from: "app", to: "db", label: { es: "ORM · migraciones", en: "ORM · migrations", fr: "ORM · migrations" } },
          { from: "db", to: "replica", kind: "repl", label: { es: "replicación", en: "replication", fr: "réplication" } },
          { from: "app", to: "worker", sides: "bt", label: { es: "tareas", en: "jobs", fr: "tâches" } },
          { from: "worker", to: "redis", label: { es: "cola", en: "queue", fr: "file" } },
          { from: "replica", to: "backups", sides: "bt", dashed: true, label: "pg_dump" },
          { from: "app", to: "ops", sides: "tl", fromPos: 0.8, dashed: true, label: { es: "telemetría", en: "telemetry", fr: "télémétrie" } }
        ],
        pipeline: [
          { label: "Git", sub: { es: "PR · revisión de código", en: "PR · code review", fr: "PR · revue de code" } },
          { label: "CI", sub: { es: "pruebas · lint · migraciones", en: "tests · lint · migration check", fr: "tests · lint · migrations" } },
          { label: { es: "Imagen", en: "Image", fr: "Image" }, sub: { es: "Docker · versionada", en: "Docker · versioned", fr: "Docker · versionnée" } },
          { label: { es: "Despliegue dev", en: "Deploy dev", fr: "Déploiement dev" }, sub: { es: "smoke tests", en: "smoke tests", fr: "smoke tests" } },
          { label: { es: "Despliegue prod", en: "Deploy prod", fr: "Déploiement prod" }, sub: { es: "migraciones · health checks", en: "migrations · health checks", fr: "migrations · health checks" } }
        ]
      }
    },
    {
      id: "bim-pipeline",
      title: { es: "Análisis ACV: de la maqueta BIM al coste y al carbono", en: "LCA analysis: from the BIM model to cost and carbon", fr: "Analyse ACV : de la maquette BIM au coût et au carbone" },
      tagline: { es: "Un pipeline de datos por eventos, con arquitectura medallion, para el análisis de costes e impacto ambiental", en: "An event-driven data pipeline, on a medallion architecture, for cost and environmental-impact analysis", fr: "Un pipeline de données événementiel, en architecture médaillon, pour l'analyse des coûts et de l'impact environnemental" },
      org: "MODUO Ingénierie",
      year: "2026",
      kind: "professional",
      summary: {
        es: "Cada nueva revisión de una maqueta Revit/IFC dispara trabajos de extracción que, junto con los precios de proveedores y el análisis de ciclo de vida de Vizcab, alimentan tres capas de datos en PostgreSQL. El resultado es un análisis de costes y de carbono automatizado y repetible, consumido desde Power BI y desde las herramientas de los equipos de ingeniería.",
        en: "Every new revision of a Revit/IFC model triggers extraction jobs that, together with supplier pricing and Vizcab's life-cycle assessment, feed three data layers in PostgreSQL. The result is an automated, repeatable cost and carbon analysis consumed from Power BI and from the engineering teams' tools.",
        fr: "Chaque nouvelle révision d'une maquette Revit/IFC déclenche des tâches d'extraction qui, avec les prix fournisseurs et l'analyse de cycle de vie de Vizcab, alimentent trois couches de données dans PostgreSQL. Le résultat est une analyse des coûts et du carbone automatisée et répétable, consommée depuis Power BI et depuis les outils des équipes d'ingénierie."
      },
      points: {
        es: [
          "Ingesta por eventos: cada maqueta nueva lanza trabajos de extracción en Python con IfcOpenShell que se ejecutan en paralelo, conservan el archivo original en almacenamiento de objetos y escriben en bronze en modo solo anexar.",
          "Fuentes externas en la misma capa: precios de proveedores (CSV, Excel, APIs) y análisis de ciclo de vida a través de la API de Vizcab, con trazabilidad del origen de cada dato.",
          "Arquitectura medallion sobre PostgreSQL: bronze (crudo), silver (limpio, modelado y particionado por proyecto) y gold (marts de coste y carbono); cada capa se reprocesa sin volver a las fuentes.",
          "Orquestación con planificación, reintentos y alertas; puertas de calidad (pruebas SQL, linaje, documentación) antes de publicar en gold; réplica de lectura para Power BI y para las herramientas en Python y VBA de los equipos.",
          "Gobierno del dato desde el diseño: convenciones de nombres, control de accesos por esquema y rol, documentación de los modelos y supervisión de las ejecuciones."
        ],
        en: [
          "Event-driven ingestion: each new model launches Python extraction jobs with IfcOpenShell that run in parallel, keep the original file in object storage and write to bronze in append-only mode.",
          "External sources in the same layer: supplier pricing (CSV, Excel, APIs) and life-cycle assessment through the Vizcab API, with the origin of every value traceable.",
          "Medallion architecture on PostgreSQL: bronze (raw), silver (cleaned, modelled and partitioned by project) and gold (cost and carbon marts); each layer can be reprocessed without going back to the sources.",
          "Orchestration with schedules, retries and alerts; quality gates (SQL tests, lineage, documentation) before publishing to gold; a read replica for Power BI and for the teams' Python and VBA tools.",
          "Data governance by design: naming conventions, access control per schema and role, documented models and monitoring of every run."
        ],
        fr: [
          "Ingestion événementielle : chaque nouvelle maquette lance des tâches d'extraction Python avec IfcOpenShell exécutées en parallèle, qui conservent le fichier d'origine dans un stockage objet et écrivent en bronze en mode ajout seul.",
          "Sources externes dans la même couche : prix fournisseurs (CSV, Excel, API) et analyse de cycle de vie via l'API Vizcab, avec traçabilité de l'origine de chaque donnée.",
          "Architecture médaillon sur PostgreSQL : bronze (brut), silver (nettoyé, modélisé et partitionné par projet) et gold (marts coût et carbone) ; chaque couche se retraite sans revenir aux sources.",
          "Orchestration avec planification, reprises et alertes ; portes de qualité (tests SQL, lignage, documentation) avant publication en gold ; réplica en lecture pour Power BI et pour les outils Python et VBA des équipes.",
          "Gouvernance des données dès la conception : conventions de nommage, contrôle des accès par schéma et rôle, documentation des modèles et supervision des exécutions."
        ]
      },
      stack: ["Python", "SQL", "IfcOpenShell", "Vizcab API", "PostgreSQL", "Medallion Architecture", "Data Modeling", "Power BI", "VBA", "CI/CD"],
      qualities: [
        { key: "reproducibility", text: { es: "Bronze solo anexar y originales conservados: cualquier capa se recalcula desde la anterior, para un proyecto o para todos.", en: "Append-only bronze and preserved originals: any layer can be recomputed from the previous one, for one project or all of them.", fr: "Bronze en ajout seul et originaux conservés : toute couche se recalcule depuis la précédente, pour un projet ou pour tous." } },
        { key: "scalability", text: { es: "Extracción en paralelo por maqueta, tablas particionadas por proyecto y réplica de lectura para el BI.", en: "Parallel extraction per model, tables partitioned by project and a read replica for BI.", fr: "Extraction en parallèle par maquette, tables partitionnées par projet et réplica en lecture pour la BI." } },
        { key: "operability", text: { es: "Ejecuciones orquestadas con reintentos, alertas de frescura y linaje visible de cada valor publicado.", en: "Orchestrated runs with retries, freshness alerts and visible lineage for every published value.", fr: "Exécutions orchestrées avec reprises, alertes de fraîcheur et lignage visible de chaque valeur publiée." } },
        { key: "maintainability", text: { es: "Modelos SQL probados y documentados, convenciones de nombres y una capa por responsabilidad.", en: "Tested, documented SQL models, naming conventions and one layer per responsibility.", fr: "Modèles SQL testés et documentés, conventions de nommage et une couche par responsabilité." } },
        { key: "security", text: { es: "Accesos por esquema y rol: los equipos consultan gold y la réplica, nunca las capas crudas.", en: "Access per schema and role: teams query gold and the replica, never the raw layers.", fr: "Accès par schéma et rôle : les équipes interrogent gold et le réplica, jamais les couches brutes." } }
      ],
      diagram: {
        cols: 6,
        rows: 3,
        style: { es: "Pipeline por eventos · medallion", en: "Event-driven pipeline · medallion", fr: "Pipeline événementiel · médaillon" },
        styleIcon: "workflow",
        caption: { es: "De las fuentes a los informes: extracción en paralelo, tres capas de datos con puertas de calidad, y una réplica de lectura para el BI y las herramientas de los equipos.", en: "From sources to reports: parallel extraction, three data layers with quality gates, and a read replica for BI and the teams' tools.", fr: "Des sources aux rapports : extraction en parallèle, trois couches de données avec portes de qualité, et un réplica en lecture pour la BI et les outils des équipes." },
        groups: [
          { col: 0, row: 0, colSpan: 1, rowSpan: 3, tone: "neutral", icon: "fileText", label: { es: "Fuentes", en: "Sources", fr: "Sources" } },
          { col: 1, row: 1, colSpan: 1, rowSpan: 2, tone: "accent", icon: "cpu", label: { es: "Ingesta", en: "Ingestion", fr: "Ingestion" } },
          { col: 2, row: 0, colSpan: 2, rowSpan: 1, tone: "violet", icon: "workflow", label: { es: "Orquestación · gobierno", en: "Orchestration · governance", fr: "Orchestration · gouvernance" } },
          { col: 2, row: 1, colSpan: 3, rowSpan: 1, tone: "primary", icon: "database", label: { es: "PostgreSQL · capas medallion", en: "PostgreSQL · medallion layers", fr: "PostgreSQL · couches médaillon" } }
        ],
        nodes: [
          { id: "ifc", col: 0, row: 0, kind: "source", label: "Revit · IFC", sub: { es: "una por revisión", en: "one per revision", fr: "une par révision" } },
          { id: "vizcab", col: 0, row: 1, kind: "external", label: "Vizcab API", sub: { es: "análisis de ciclo de vida", en: "life-cycle assessment", fr: "analyse de cycle de vie" } },
          { id: "prices", col: 0, row: 2, kind: "external", label: { es: "Precios de proveedores", en: "Supplier pricing", fr: "Prix fournisseurs" }, sub: "CSV · Excel · API" },
          { id: "extract", col: 1, row: 1, kind: "worker", replicas: 3, tech: "Python", label: { es: "Trabajos de extracción", en: "Extraction jobs", fr: "Tâches d'extraction" }, sub: { es: "IfcOpenShell · en paralelo", en: "IfcOpenShell · parallel", fr: "IfcOpenShell · en parallèle" } },
          { id: "raw", col: 1, row: 2, kind: "storage", label: { es: "Almacenamiento de objetos", en: "Object storage", fr: "Stockage objet" }, sub: { es: "originales · versiones", en: "originals · versions", fr: "originaux · versions" } },
          { id: "orch", col: 2, row: 0, kind: "service", tech: "Python", icon: "clock", label: { es: "Orquestador", en: "Orchestrator", fr: "Orchestrateur" }, sub: { es: "planificación · reintentos · alertas", en: "schedules · retries · alerts", fr: "planification · reprises · alertes" } },
          { id: "quality", col: 3, row: 0, kind: "check", tech: "SQL", label: { es: "Puertas de calidad", en: "Quality gates", fr: "Portes de qualité" }, sub: { es: "pruebas · linaje · docs", en: "tests · lineage · docs", fr: "tests · lignage · docs" } },
          { id: "bronze", col: 2, row: 1, kind: "store", label: "Bronze", sub: { es: "crudo · solo anexar", en: "raw · append-only", fr: "brut · ajout seul" } },
          { id: "silver", col: 3, row: 1, kind: "store", primary: true, label: "Silver", sub: { es: "limpio · particionado por proyecto", en: "cleaned · partitioned by project", fr: "nettoyé · partitionné par projet" } },
          { id: "gold", col: 4, row: 1, kind: "store", label: "Gold", sub: { es: "marts de coste y carbono", en: "cost & carbon marts", fr: "marts coût et carbone" } },
          { id: "report", col: 5, row: 1, kind: "output", label: { es: "Análisis de coste y carbono", en: "Cost & carbon analysis", fr: "Analyse coût et carbone" }, sub: { es: "informes automáticos", en: "automated reports", fr: "rapports automatisés" } },
          { id: "replica", col: 4, row: 2, kind: "store", label: { es: "Réplica de lectura", en: "Read replica", fr: "Réplica en lecture" }, sub: { es: "consultas BI", en: "BI queries", fr: "requêtes BI" } },
          { id: "bi", col: 5, row: 0, kind: "output", label: "Power BI", sub: { es: "cuadros de mando", en: "dashboards", fr: "tableaux de bord" } },
          { id: "tools", col: 5, row: 2, kind: "output", icon: "wrench", label: { es: "Herramientas de ingeniería", en: "Engineering tools", fr: "Outils d'ingénierie" }, sub: "Python · VBA · Excel" }
        ],
        edges: [
          { from: "ifc", to: "extract", toPos: 0.25, kind: "async", label: { es: "nueva revisión", en: "new revision", fr: "nouvelle révision" } },
          { from: "vizcab", to: "extract", label: "REST" },
          { from: "prices", to: "extract", toPos: 0.75 },
          { from: "extract", to: "raw", sides: "bt", label: { es: "originales", en: "originals", fr: "originaux" } },
          { from: "extract", to: "bronze", label: { es: "anexar", en: "append", fr: "ajout" } },
          { from: "bronze", to: "silver", label: { es: "limpiar · modelar", en: "clean · model", fr: "nettoyer · modéliser" } },
          { from: "silver", to: "gold", label: { es: "agregar", en: "aggregate", fr: "agréger" } },
          { from: "orch", to: "extract", sides: "lt", dashed: true, label: { es: "planifica", en: "schedule", fr: "planifie" } },
          { from: "orch", to: "quality", label: { es: "ejecuta", en: "runs", fr: "exécute" } },
          { from: "quality", to: "silver", sides: "bt", dashed: true, label: { es: "puerta", en: "gate", fr: "porte" } },
          { from: "gold", to: "report", label: { es: "vistas SQL", en: "SQL views", fr: "vues SQL" } },
          { from: "gold", to: "replica", sides: "bt", kind: "repl", label: { es: "replicación", en: "replication", fr: "réplication" } },
          { from: "replica", to: "tools", label: { es: "solo lectura", en: "read-only", fr: "lecture seule" } },
          { from: "gold", to: "bi", sides: "tl", label: "DirectQuery" }
        ],
        pipeline: [
          { label: "Git", sub: { es: "SQL + Python · revisión de PR", en: "SQL + Python · PR review", fr: "SQL + Python · revue de PR" } },
          { label: "CI", sub: { es: "pruebas con datos de muestra", en: "tests on sample data", fr: "tests sur données d'exemple" } },
          { label: { es: "Despliegue", en: "Deploy", fr: "Déploiement" }, sub: { es: "trabajos · planificaciones", en: "jobs · schedules", fr: "tâches · planifications" } },
          { label: "Backfill", sub: { es: "reprocesar cualquier capa", en: "replay any layer", fr: "retraiter toute couche" } },
          { label: { es: "Supervisión", en: "Monitor", fr: "Supervision" }, sub: { es: "ejecuciones · frescura", en: "runs · freshness", fr: "exécutions · fraîcheur" } }
        ]
      }
    },
    {
      id: "unal-assistant",
      title: { es: "Asistente de servicios académicos UNAL", en: "UNAL academic-services assistant", fr: "Assistant des services académiques UNAL" },
      tagline: { es: "Una base de conocimiento curada y un bucle de evaluación con revisión humana, sobre tecnologías open source", en: "A curated knowledge base and an evaluation loop with human review, on open-source technologies", fr: "Une base de connaissances curée et une boucle d'évaluation avec revue humaine, sur des technologies open source" },
      org: "DNINFOA · Universidad Nacional de Colombia",
      year: "2024",
      kind: "professional",
      summary: {
        es: "Como Data Scientist, lideré el proyecto y un equipo de cuatro estudiantes de ingeniería. Llevé a la universidad lo aprendido en Siigo y lo fui más lejos: en lugar de un chatbot sobre un montón de archivos, construimos una base de conocimiento curada y versionada sobre la normativa y los servicios académicos, y un proceso de calidad en el que cada cambio se evalúa por lotes contra preguntas de referencia y el personal administrativo revisa las respuestas.",
        en: "As a Data Scientist, I led the project and a team of four engineering students. I brought what I had learned at Siigo to the university and took it further: instead of a chatbot over a pile of files, we built a curated, versioned knowledge base on academic regulations and services, and a quality process in which every change is batch-evaluated against reference questions and administrative staff review the answers.",
        fr: "En tant que Data Scientist, j'ai piloté le projet et une équipe de quatre étudiants ingénieurs. J'ai apporté à l'université ce que j'avais appris chez Siigo en allant plus loin : au lieu d'un chatbot sur une pile de fichiers, nous avons construit une base de connaissances curée et versionnée sur la réglementation et les services académiques, et un processus qualité où chaque changement est évalué par lots contre des questions de référence et où le personnel administratif relit les réponses."
      },
      points: {
        es: [
          "Base de conocimiento curada con el personal administrativo: reglamentos, manuales del portal y preguntas frecuentes sobre inscripción, pagos, calificaciones y solicitudes, con metadatos (oficina, vigencia, tipo de trámite) y publicada en versiones.",
          "Ingesta en Python (parsing, chunking, embeddings) y servicio RAG con recuperación filtrada por metadatos, prompt con citas y generación mediante modelos abiertos servidos con Ollama en la infraestructura de la universidad.",
          "API en Node.js/TypeScript con sesiones y roles, e interfaz React que muestra las referencias de cada respuesta y recoge feedback del usuario.",
          "Bucle de calidad: las conversaciones se muestrean cada semana, el personal las revisa, sus correcciones vuelven al corpus y sus preguntas amplían el conjunto de referencia; cada cambio se evalúa por lotes (groundedness, relevancia, latencia) y se compara con la ejecución anterior antes de publicarse.",
          "Coordinación bajo Scrum: planificación de sprints, distribución de tareas y revisión técnica, hasta entregar un piloto funcional al personal administrativo."
        ],
        en: [
          "Knowledge base curated with administrative staff: regulations, portal manuals and FAQs on enrolment, payments, grades and student requests, with metadata (office, validity, procedure type) and published in versions.",
          "Python ingestion (parsing, chunking, embeddings) and a RAG service with metadata-filtered retrieval, a citing prompt and generation through open-weight models served with Ollama on university infrastructure.",
          "Node.js/TypeScript API with sessions and roles, and a React interface that shows the references behind each answer and collects user feedback.",
          "Quality loop: conversations are sampled weekly, staff review them, their corrections go back into the corpus and their questions extend the reference set; every change is batch-evaluated (groundedness, relevance, latency) and compared with the previous run before release.",
          "Scrum coordination: sprint planning, task allocation and technical review, through delivery of a working pilot to administrative staff."
        ],
        fr: [
          "Base de connaissances curée avec le personnel administratif : règlements, manuels du portail et FAQ sur les inscriptions, paiements, notes et demandes étudiantes, avec métadonnées (service, validité, type de démarche) et publiée par versions.",
          "Ingestion Python (parsing, découpage, embeddings) et service RAG avec recherche filtrée par métadonnées, prompt avec citations et génération via des modèles ouverts servis par Ollama sur l'infrastructure de l'université.",
          "API Node.js/TypeScript avec sessions et rôles, et interface React qui affiche les références de chaque réponse et recueille les retours des utilisateurs.",
          "Boucle qualité : les conversations sont échantillonnées chaque semaine, le personnel les relit, ses corrections retournent dans le corpus et ses questions enrichissent le jeu de référence ; chaque changement est évalué par lots (groundedness, pertinence, latence) et comparé à l'exécution précédente avant publication.",
          "Coordination en Scrum : planification des sprints, répartition des tâches et revue technique, jusqu'à la livraison d'un pilote fonctionnel au personnel administratif."
        ]
      },
      stack: ["Python", "Node.js", "TypeScript", "React", "PostgreSQL", "Ollama", "RAG", "RAG Evaluation", "Docker", "Open Source", "Scrum"],
      qualities: [
        { key: "maintainability", text: { es: "Corpus versionado con metadatos, un servicio por lenguaje (API en TypeScript, RAG en Python) y contratos HTTP explícitos.", en: "Versioned corpus with metadata, one service per language (TypeScript API, Python RAG) and explicit HTTP contracts.", fr: "Corpus versionné avec métadonnées, un service par langage (API TypeScript, RAG Python) et contrats HTTP explicites." } },
        { key: "testability", text: { es: "Conjunto de referencia mantenido con el personal, evaluación por lotes en cada cambio y comparación entre ejecuciones.", en: "Reference set maintained with staff, batch evaluation on every change and run-to-run comparison.", fr: "Jeu de référence maintenu avec le personnel, évaluation par lots à chaque changement et comparaison entre exécutions." } },
        { key: "scalability", text: { es: "API y servicio RAG sin estado, índice separado de la aplicación y modelos servidos aparte.", en: "Stateless API and RAG service, index separated from the application and models served separately.", fr: "API et service RAG sans état, index séparé de l'application et modèles servis à part." } },
        { key: "security", text: { es: "Modelos y datos en la infraestructura de la universidad; sesiones y roles en la API.", en: "Models and data on university infrastructure; sessions and roles in the API.", fr: "Modèles et données sur l'infrastructure de l'université ; sessions et rôles dans l'API." } }
      ],
      diagram: {
        cols: 5,
        rows: 3,
        style: { es: "Orientado a servicios · bucle de calidad", en: "Service-oriented · quality loop", fr: "Orienté services · boucle qualité" },
        styleIcon: "refresh",
        caption: {
          es: "Arriba, la construcción de la base de conocimiento; en el centro, la ruta de una pregunta; abajo, el bucle de calidad que devuelve correcciones al corpus y nuevas preguntas de referencia a la evaluación.",
          en: "Top: building the knowledge base. Middle: the path of a question. Bottom: the quality loop that returns corrections to the corpus and new reference questions to the evaluation.",
          fr: "En haut, la construction de la base de connaissances ; au centre, le trajet d'une question ; en bas, la boucle qualité qui renvoie des corrections au corpus et de nouvelles questions de référence à l'évaluation."
        },
        groups: [
          { col: 0, row: 0, colSpan: 4, rowSpan: 1, tone: "accent", icon: "fileText", label: { es: "Base de conocimiento · corpus versionado", en: "Knowledge base · versioned corpus", fr: "Base de connaissances · corpus versionné" } },
          { col: 0, row: 1, colSpan: 5, rowSpan: 1, tone: "primary", icon: "container", label: { es: "Ruta de consulta · Docker on-prem", en: "Query path · Docker on-prem", fr: "Chemin de requête · Docker on-prem" } },
          { col: 0, row: 2, colSpan: 4, rowSpan: 1, tone: "aqua", icon: "listChecks", label: { es: "Bucle de calidad", en: "Quality loop", fr: "Boucle qualité" } }
        ],
        nodes: [
          { id: "sources", col: 0, row: 0, kind: "source", label: { es: "Normativa y guías", en: "Regulations & guides", fr: "Règlements et guides" }, sub: { es: "reglamentos · manuales · FAQ", en: "regulations · manuals · FAQs", fr: "règlements · manuels · FAQ" } },
          { id: "curate", col: 1, row: 0, kind: "people", label: { es: "Curación", en: "Curation", fr: "Curation" }, sub: { es: "personal · metadatos · versiones", en: "staff · metadata · versions", fr: "personnel · métadonnées · versions" } },
          { id: "ingest", col: 2, row: 0, kind: "worker", tech: "Python", label: { es: "Ingesta", en: "Ingestion", fr: "Ingestion" }, sub: "parsing · chunking · embeddings" },
          { id: "kb", col: 3, row: 0, kind: "store", primary: true, label: { es: "Base de conocimiento", en: "Knowledge base", fr: "Base de connaissances" }, sub: { es: "índice vectorial + metadatos", en: "vector index + metadata", fr: "index vectoriel + métadonnées" } },
          { id: "ui", col: 0, row: 1, kind: "client", tech: "TypeScript", label: { es: "Chat web", en: "Web chat", fr: "Chat web" }, sub: { es: "React · referencias · feedback", en: "React · references · feedback", fr: "React · références · retours" } },
          { id: "api", col: 1, row: 1, kind: "gateway", tech: "TypeScript", label: "API", sub: { es: "Node.js · sesiones · roles", en: "Node.js · sessions · roles", fr: "Node.js · sessions · rôles" } },
          { id: "rag", col: 2, row: 1, kind: "service", tech: "Python", label: { es: "Servicio RAG", en: "RAG service", fr: "Service RAG" }, sub: { es: "recuperación filtrada · citas", en: "filtered retrieval · citations", fr: "recherche filtrée · citations" } },
          { id: "llm", col: 4, row: 1, kind: "llm", label: "Ollama", sub: { es: "modelos abiertos · on-prem", en: "open-weight models · on-prem", fr: "modèles ouverts · on-prem" } },
          { id: "review", col: 0, row: 2, kind: "people", label: { es: "Revisión humana", en: "Human review", fr: "Revue humaine" }, sub: { es: "personal → correcciones al corpus", en: "staff → corpus corrections", fr: "personnel → corrections du corpus" } },
          { id: "hist", col: 1, row: 2, kind: "store", label: { es: "Conversaciones", en: "Conversations", fr: "Conversations" }, sub: "PostgreSQL · feedback" },
          { id: "eval", col: 2, row: 2, kind: "check", tech: "Python", label: { es: "Evaluación", en: "Evaluation", fr: "Évaluation" }, sub: { es: "golden set · por lotes", en: "golden set · batch runs", fr: "golden set · par lots" } },
          { id: "dash", col: 3, row: 2, kind: "output", label: { es: "Panel de calidad", en: "Quality dashboard", fr: "Tableau de qualité" }, sub: { es: "groundedness · relevancia · latencia", en: "groundedness · relevance · latency", fr: "groundedness · pertinence · latence" } }
        ],
        edges: [
          { from: "sources", to: "curate", label: { es: "selección", en: "selection", fr: "sélection" } },
          { from: "curate", to: "ingest", label: { es: "corpus vN", en: "corpus vN", fr: "corpus vN" } },
          { from: "ingest", to: "kb", label: { es: "embeddings · metadatos", en: "embeddings · metadata", fr: "embeddings · métadonnées" } },
          { from: "ui", to: "api", label: "REST" },
          { from: "api", to: "rag", label: "HTTP · JSON" },
          { from: "rag", to: "llm", label: { es: "genera", en: "generate", fr: "génère" } },
          { from: "kb", to: "rag", sides: "bl", toPos: 0.35, label: { es: "recupera", en: "retrieve", fr: "recherche" } },
          { from: "api", to: "hist", sides: "bt", label: { es: "historial", en: "history", fr: "historique" } },
          { from: "hist", to: "review", sides: "lr", label: { es: "muestreo semanal", en: "weekly sample", fr: "échantillon hebdo" } },
          { from: "hist", to: "eval", label: { es: "preguntas reales", en: "real questions", fr: "questions réelles" } },
          { from: "eval", to: "rag", sides: "tb", dashed: true, label: { es: "lotes de preguntas", en: "question batches", fr: "lots de questions" } },
          { from: "eval", to: "dash", label: { es: "métricas · comparación", en: "metrics · run comparison", fr: "métriques · comparaison" } },
          { from: "review", to: "curate", sides: "tb", dashed: true, via: [{ col: -0.5, row: 1.5 }, { col: -0.5, row: 0.5 }] }
        ],
        pipeline: [
          { label: "Git", sub: { es: "sprints · revisión", en: "sprints · review", fr: "sprints · revue" } },
          { label: "CI", sub: { es: "pruebas · lint", en: "tests · lint", fr: "tests · lint" } },
          { label: { es: "Evaluación", en: "Evaluation", fr: "Évaluation" }, sub: { es: "golden set · vs. ejecución anterior", en: "golden set · vs. previous run", fr: "golden set · vs exécution précédente" } },
          { label: { es: "Imágenes", en: "Images", fr: "Images" }, sub: "Docker" },
          { label: { es: "Piloto", en: "Pilot", fr: "Pilote" }, sub: { es: "on-prem · personal administrativo", en: "on-prem · administrative staff", fr: "on-prem · personnel administratif" } }
        ]
      }
    },
    {
      id: "datasmart-rag",
      title: { es: "DataSmart · Asistente RAG y evaluación", en: "DataSmart · RAG assistant and evaluation", fr: "DataSmart · Assistant RAG et évaluation" },
      tagline: { es: "Del catálogo de datos a respuestas con fuentes y pruebas reproducibles, en una aplicación cloud-native en Azure", en: "From the data catalogue to sourced answers and reproducible tests, in a cloud-native application on Azure", fr: "Du catalogue de données aux réponses sourcées et aux tests reproductibles, dans une application cloud-native sur Azure" },
      org: "Siigo",
      year: "2024",
      kind: "professional",
      summary: {
        es: "Desarrollé un asistente interno para consultar el catálogo de datos de Databricks: qué contiene cada tabla, para qué sirve y dónde encontrarla. Integré Azure OpenAI y Azure AI Search en una aplicación Flask y React empaquetada en Docker para Azure App Service, y construí el flujo de evaluación con RAG Commander y RAG AI Chat Evaluator.",
        en: "Developed an internal assistant for exploring the Databricks data catalogue: what each table contains, what it is for and where to find it. Integrated Azure OpenAI and Azure AI Search in a Flask and React application packaged with Docker for Azure App Service, and built the evaluation workflow with RAG Commander and RAG AI Chat Evaluator.",
        fr: "Développement d'un assistant interne pour explorer le catalogue de données Databricks : contenu, rôle et emplacement de chaque table. Intégration d'Azure OpenAI et d'Azure AI Search dans une application Flask et React conteneurisée avec Docker pour Azure App Service, et mise en place du flux d'évaluation avec RAG Commander et RAG AI Chat Evaluator."
      },
      points: {
        es: [
          "Base de conocimiento preparada en Databricks: transformación de documentación y metadatos a JSON, enriquecimiento de las tablas e indexación en Azure AI Search desde Blob Storage.",
          "Aplicación de chat adaptada sobre la base open source de Microsoft, con backend Flask, interfaz React/TypeScript, citas a las fuentes e historial de conversaciones en Azure Cosmos DB; prototipo adicional con FastAPI.",
          "RAG Commander: pruebas por lotes para revisar el comportamiento del asistente ante cambios de prompts y parámetros de recuperación.",
          "RAG AI Chat Evaluator: adaptación de ai-rag-chat-evaluator al índice de Siigo y preparación de más de 200 pares pregunta-respuesta de referencia; evaluación de groundedness, relevancia, coherencia y latencia, con comparación entre ejecuciones.",
          "Empaquetado en Docker con compilación multi-etapa de frontend y backend, imágenes en Azure Container Registry y despliegue en el entorno QA de DataSmart en Azure App Service."
        ],
        en: [
          "Knowledge base prepared in Databricks: documentation and metadata transformed into JSON, table enrichment, and Azure AI Search indexing from Blob Storage.",
          "Chat application adapted from Microsoft's open-source sample, with a Flask backend, React/TypeScript interface, source citations and Azure Cosmos DB conversation history; an additional prototype used FastAPI.",
          "RAG Commander: batch testing to review assistant behaviour when prompts and retrieval parameters change.",
          "RAG AI Chat Evaluator: adapted ai-rag-chat-evaluator to Siigo's index and prepared 200+ ground-truth question-answer pairs; evaluation of groundedness, relevance, coherence and latency, with run-to-run comparison.",
          "Multi-stage Docker packaging of frontend and backend, images in Azure Container Registry, and deployment to DataSmart's QA environment on Azure App Service."
        ],
        fr: [
          "Base de connaissances préparée dans Databricks : transformation de la documentation et des métadonnées en JSON, enrichissement des tables et indexation dans Azure AI Search depuis Blob Storage.",
          "Application de chat adaptée à partir du projet open source de Microsoft, avec backend Flask, interface React/TypeScript, citations des sources et historique dans Azure Cosmos DB ; un prototype complémentaire utilisait FastAPI.",
          "RAG Commander : tests par lots pour examiner le comportement de l'assistant lors de changements de prompts et de paramètres de recherche.",
          "RAG AI Chat Evaluator : adaptation d'ai-rag-chat-evaluator à l'index de Siigo et préparation de plus de 200 paires question-réponse de référence ; évaluation de la groundedness, de la pertinence, de la cohérence et de la latence, avec comparaison entre exécutions.",
          "Conteneurisation Docker multi-étapes du frontend et du backend, images dans Azure Container Registry et déploiement dans l'environnement QA de DataSmart sur Azure App Service."
        ]
      },
      stack: ["Python", "Flask", "React", "TypeScript", "Azure OpenAI", "Azure AI Search", "Databricks", "Blob Storage", "Azure Cosmos DB", "Azure App Service", "Docker", "RAG Commander", "RAG AI Chat Evaluator"],
      qualities: [
        { key: "scalability", text: { es: "App Service escala horizontalmente; el índice, el historial y los modelos son servicios gestionados separados de la aplicación.", en: "App Service scales out; the index, history and models are managed services separate from the application.", fr: "App Service monte en charge horizontalement ; l'index, l'historique et les modèles sont des services managés séparés de l'application." } },
        { key: "testability", text: { es: "Más de 200 pares de referencia, pruebas por lotes ante cada cambio de prompt o de recuperación y comparación entre ejecuciones.", en: "200+ reference pairs, batch tests on every prompt or retrieval change and run-to-run comparison.", fr: "Plus de 200 paires de référence, tests par lots à chaque changement de prompt ou de recherche et comparaison entre exécutions." } },
        { key: "availability", text: { es: "Servicios gestionados de Azure con varias instancias y despliegue por slots (QA antes de producción).", en: "Managed Azure services with several instances and slot-based deployment (QA before production).", fr: "Services managés Azure avec plusieurs instances et déploiement par slots (QA avant production)." } },
        { key: "maintainability", text: { es: "Base open source adaptada, configuración por entorno y un flujo de evaluación reproducible para cada cambio.", en: "Adapted open-source base, per-environment configuration and a reproducible evaluation workflow for every change.", fr: "Base open source adaptée, configuration par environnement et flux d'évaluation reproductible pour chaque changement." } },
        { key: "security", text: { es: "Identidades gestionadas y secretos fuera de las imágenes; datos y modelos dentro de la suscripción de Azure de la empresa.", en: "Managed identities and secrets kept out of the images; data and models inside the company's Azure subscription.", fr: "Identités managées et secrets hors des images ; données et modèles dans l'abonnement Azure de l'entreprise." } }
      ],
      diagram: {
        cols: 4,
        rows: 3,
        style: { es: "Cloud-native · servicios gestionados de Azure", en: "Cloud-native · Azure managed services", fr: "Cloud-native · services managés Azure" },
        styleIcon: "cloud",
        caption: { es: "Catálogo indexado, respuestas con fuentes en App Service y un flujo de evaluación por lotes que valida cada cambio.", en: "Indexed catalogue, sourced answers on App Service and a batch evaluation workflow that validates every change.", fr: "Catalogue indexé, réponses sourcées sur App Service et un flux d'évaluation par lots qui valide chaque changement." },
        groups: [
          { col: 0, row: 0, colSpan: 2, rowSpan: 1, tone: "accent", icon: "database", label: { es: "Base de conocimiento · Databricks", en: "Knowledge base build · Databricks", fr: "Base de connaissances · Databricks" } },
          { col: 1, row: 1, colSpan: 1, rowSpan: 1, tone: "primary", icon: "container", label: { es: "App Service · Docker", en: "App Service · Docker", fr: "App Service · Docker" } },
          { col: 2, row: 0, colSpan: 2, rowSpan: 3, tone: "violet", icon: "cloud", label: { es: "Servicios gestionados de Azure", en: "Azure managed services", fr: "Services managés Azure" } }
        ],
        nodes: [
          { id: "catalogue", col: 0, row: 0, kind: "source", label: "Databricks", sub: { es: "catálogo · docs · metadatos", en: "catalogue · docs · metadata", fr: "catalogue · docs · métadonnées" } },
          { id: "prep", col: 1, row: 0, kind: "worker", tech: "Python", label: { es: "Preparación", en: "Prep jobs", fr: "Préparation" }, sub: { es: "JSON · enriquecimiento", en: "JSON · enrichment", fr: "JSON · enrichissement" } },
          { id: "blob", col: 2, row: 0, kind: "storage", label: "Blob Storage", sub: { es: "documentos · JSON", en: "documents · JSON", fr: "documents · JSON" } },
          { id: "search", col: 3, row: 0, kind: "store", label: "Azure AI Search", sub: { es: "catálogo indexado", en: "indexed catalogue", fr: "catalogue indexé" } },
          { id: "ui", col: 0, row: 1, kind: "client", tech: "TypeScript", label: "React", sub: { es: "chat · citas", en: "chat · citations", fr: "chat · citations" } },
          { id: "api", col: 1, row: 1, kind: "service", primary: true, replicas: 2, tech: "Python", label: "Flask API", sub: { es: "asistente DataSmart", en: "DataSmart assistant", fr: "assistant DataSmart" } },
          { id: "llm", col: 3, row: 1, kind: "external", icon: "brain", label: "Azure OpenAI", sub: { es: "chat · embeddings", en: "chat · embeddings", fr: "chat · embeddings" } },
          { id: "eval", col: 0, row: 2, kind: "check", tech: "Python", label: { es: "Evaluación RAG", en: "RAG evaluation", fr: "Évaluation RAG" }, sub: "Commander · Chat Evaluator · 200+ QA" },
          { id: "history", col: 2, row: 2, kind: "store", label: "Azure Cosmos DB", sub: { es: "historial de chat", en: "chat history", fr: "historique du chat" } }
        ],
        edges: [
          { from: "catalogue", to: "prep", label: { es: "metadatos · docs", en: "metadata · docs", fr: "métadonnées · docs" } },
          { from: "prep", to: "blob", label: "JSON" },
          { from: "blob", to: "search", label: { es: "indexador", en: "indexer", fr: "indexeur" } },
          { from: "ui", to: "api", label: "REST" },
          { from: "api", to: "llm", label: { es: "completions", en: "completions", fr: "completions" } },
          { from: "api", to: "search", sides: "tb", fromPos: 0.7, label: { es: "búsqueda híbrida", en: "hybrid search", fr: "recherche hybride" } },
          { from: "api", to: "history", sides: "br", fromPos: 0.7, label: { es: "historial", en: "history", fr: "historique" } },
          { from: "eval", to: "api", sides: "rb", toPos: 0.3, dashed: true, label: { es: "evaluación por lotes", en: "batch evaluation", fr: "évaluation par lots" } }
        ],
        pipeline: [
          { label: "Git", sub: { es: "PR · revisión", en: "PR · review", fr: "PR · revue" } },
          { label: "CI", sub: { es: "pruebas · lint", en: "tests · lint", fr: "tests · lint" } },
          { label: "Docker", sub: { es: "build multi-etapa", en: "multi-stage build", fr: "build multi-étapes" } },
          { label: "ACR", sub: { es: "imágenes etiquetadas", en: "tagged images", fr: "images étiquetées" } },
          { label: "App Service", sub: { es: "slot QA → producción", en: "QA slot → production", fr: "slot QA → production" } }
        ]
      }
    },
    {
      id: "tiendaun",
      title: "TiendaUN",
      tagline: { es: "Microservicios políglotas detrás de un proxy inverso y un gateway GraphQL, una base de datos por servicio e interoperabilidad SOAP con otra aplicación", en: "Polyglot microservices behind a reverse proxy and a GraphQL gateway, one database per service and SOAP interoperability with another application", fr: "Microservices polyglottes derrière un proxy inverse et une gateway GraphQL, une base de données par service et interopérabilité SOAP avec une autre application" },
      org: "Universidad Nacional de Colombia",
      year: "2023",
      kind: "academic",
      summary: {
        es: "Plataforma de comercio electrónico desarrollada en equipo con servicios separados por dominio, cada uno en su propio lenguaje y con su propia base de datos. Desarrollé el microservicio de autenticación y gestión de usuarios y roles, integrado en una arquitectura con proxy inverso, API Gateway GraphQL y despliegue en Google Kubernetes Engine, e interoperable con la aplicación de otro equipo mediante una exposición SOAP.",
        en: "Team-built e-commerce platform with domain-oriented services, each in its own language and with its own database. Developed the authentication and user/role management microservice, integrated into an architecture with a reverse proxy, a GraphQL API Gateway and deployment on Google Kubernetes Engine, and interoperable with another team's application through a SOAP exposure.",
        fr: "Plateforme e-commerce développée en équipe avec des services séparés par domaine, chacun dans son langage et avec sa propre base de données. Développement du microservice d'authentification et de gestion des utilisateurs et rôles, intégré dans une architecture avec proxy inverse, API Gateway GraphQL et déploiement sur Google Kubernetes Engine, et interopérable avec l'application d'une autre équipe via une exposition SOAP."
      },
      points: {
        es: [
          "API REST de registro, inicio de sesión y gestión de usuarios y roles con TypeScript, Express, MongoDB/Mongoose, bcrypt y JWT, con autenticación de cuentas institucionales contra un directorio LDAP.",
          "Arquitectura políglota: usuarios (TypeScript), carrito (Python), pedidos (Go) y catálogo (Java), cada uno con su propia base de datos y un contrato explícito (REST, gRPC) unificado por un API Gateway GraphQL detrás de un proxy inverso.",
          "Interoperabilidad con la aplicación de otro equipo: un contenedor adaptador expone el catálogo como servicio SOAP (WSDL) a través del ingress y traduce cada operación a llamadas REST internas, de modo que la aplicación asociada consume el contrato sin conocer nuestros servicios.",
          "Despliegue con Docker y Kubernetes en Google Kubernetes Engine: réplicas por servicio, ingress con balanceo de carga, autoescalado y despliegues progresivos.",
          "Pruebas de rendimiento con JMeter sobre el gateway para evaluar el comportamiento bajo carga y dimensionar las réplicas."
        ],
        en: [
          "REST APIs for registration, sign-in and user/role management with TypeScript, Express, MongoDB/Mongoose, bcrypt and JWT, with institutional accounts authenticated against an LDAP directory.",
          "Polyglot architecture: users (TypeScript), cart (Python), orders (Go) and catalogue (Java), each with its own database and an explicit contract (REST, gRPC) unified by a GraphQL API Gateway behind a reverse proxy.",
          "Interoperability with another team's application: an adapter container exposes the catalogue as a SOAP service (WSDL) through the ingress and translates each operation into internal REST calls, so the partner application consumes the contract without knowing our services.",
          "Deployment with Docker and Kubernetes on Google Kubernetes Engine: replicas per service, ingress load balancing, autoscaling and rolling deployments.",
          "JMeter performance testing against the gateway to assess behaviour under load and size the replicas."
        ],
        fr: [
          "API REST d'inscription, de connexion et de gestion des utilisateurs et rôles avec TypeScript, Express, MongoDB/Mongoose, bcrypt et JWT, avec authentification des comptes institutionnels sur un annuaire LDAP.",
          "Architecture polyglotte : utilisateurs (TypeScript), panier (Python), commandes (Go) et catalogue (Java), chacun avec sa propre base de données et un contrat explicite (REST, gRPC) unifié par une API Gateway GraphQL derrière un proxy inverse.",
          "Interopérabilité avec l'application d'une autre équipe : un conteneur adaptateur expose le catalogue comme service SOAP (WSDL) via l'ingress et traduit chaque opération en appels REST internes, de sorte que l'application partenaire consomme le contrat sans connaître nos services.",
          "Déploiement avec Docker et Kubernetes sur Google Kubernetes Engine : réplicas par service, ingress avec équilibrage de charge, autoscaling et déploiements progressifs.",
          "Tests de performance JMeter sur la gateway pour évaluer le comportement sous charge et dimensionner les réplicas."
        ]
      },
      stack: ["TypeScript", "Node.js", "Express", "GraphQL", "MongoDB", "JWT", "LDAP", "Java", "Python", "Go", "gRPC", "SOAP", "WSDL", "Nginx", "Docker", "Kubernetes", "GKE", "JMeter"],
      qualities: [
        { key: "scalability", text: { es: "Réplicas por servicio con balanceo en Kubernetes; cada servicio escala y despliega por separado, con su propia base de datos.", en: "Replicas per service with Kubernetes load balancing; each service scales and deploys on its own, with its own database.", fr: "Réplicas par service avec équilibrage Kubernetes ; chaque service évolue et se déploie séparément, avec sa propre base de données." } },
        { key: "maintainability", text: { es: "Un dominio por servicio y por equipo, contratos explícitos (GraphQL, REST, gRPC) y un adaptador SOAP que aísla el contrato externo del interno.", en: "One domain per service and per team, explicit contracts (GraphQL, REST, gRPC) and a SOAP adapter that isolates the external contract from the internal one.", fr: "Un domaine par service et par équipe, contrats explicites (GraphQL, REST, gRPC) et un adaptateur SOAP qui isole le contrat externe du contrat interne." } },
        { key: "availability", text: { es: "Despliegues progresivos y réplicas: un servicio caído no tumba el resto de la plataforma.", en: "Rolling deployments and replicas: one failing service does not take the rest of the platform down.", fr: "Déploiements progressifs et réplicas : un service en panne n'entraîne pas le reste de la plateforme." } },
        { key: "testability", text: { es: "Pruebas de carga con JMeter sobre el gateway para dimensionar réplicas y detectar cuellos de botella.", en: "JMeter load tests against the gateway to size replicas and find bottlenecks.", fr: "Tests de charge JMeter sur la gateway pour dimensionner les réplicas et repérer les goulots d'étranglement." } },
        { key: "security", text: { es: "Proxy inverso con TLS, autenticación centralizada con JWT y LDAP, contraseñas con bcrypt y roles verificados en cada servicio.", en: "Reverse proxy with TLS, centralised JWT and LDAP authentication, bcrypt password hashing and roles checked in every service.", fr: "Proxy inverse avec TLS, authentification centralisée par JWT et LDAP, mots de passe hachés avec bcrypt et rôles vérifiés dans chaque service." } }
      ],
      diagram: {
        cols: 6,
        rows: 4,
        style: { es: "Microservicios políglotas · Kubernetes", en: "Polyglot microservices · Kubernetes", fr: "Microservices polyglottes · Kubernetes" },
        styleIcon: "container",
        caption: {
          es: "Arquitectura del equipo: proxy inverso y gateway GraphQL delante de cuatro servicios en cuatro lenguajes, cada uno con su base de datos, y un adaptador SOAP para interoperar con la aplicación de otro equipo; mi contribución principal fue el servicio de usuarios y autenticación.",
          en: "Team architecture: a reverse proxy and a GraphQL gateway in front of four services in four languages, each with its own database, and a SOAP adapter to interoperate with another team's application; my main contribution was the user and authentication service.",
          fr: "Architecture de l'équipe : proxy inverse et gateway GraphQL devant quatre services en quatre langages, chacun avec sa base de données, et un adaptateur SOAP pour interopérer avec l'application d'une autre équipe ; ma contribution principale était le service utilisateurs et authentification."
        },
        groups: [
          { col: 0, row: 1, colSpan: 5, rowSpan: 3, tone: "primary", icon: "container", label: { es: "Kubernetes · GKE · ingress · autoescalado", en: "Kubernetes · GKE · ingress · autoscaling", fr: "Kubernetes · GKE · ingress · autoscaling" } },
          { col: 0, row: 3, colSpan: 4, rowSpan: 1, tone: "violet", icon: "database", label: { es: "Una base de datos por servicio", en: "One database per service", fr: "Une base de données par service" } }
        ],
        nodes: [
          { id: "web", col: 0, row: 0, kind: "client", tech: "TypeScript", label: { es: "Aplicación web", en: "Web app", fr: "Application web" }, sub: "React" },
          { id: "proxy", col: 1, row: 0, kind: "proxy", label: { es: "Proxy inverso", en: "Reverse proxy", fr: "Proxy inverse" }, sub: "Nginx · TLS" },
          { id: "ldap", col: 3, row: 0, kind: "external", icon: "keyRound", label: "LDAP", sub: { es: "cuentas institucionales", en: "institutional accounts", fr: "comptes institutionnels" } },
          { id: "jmeter", col: 5, row: 0, kind: "check", label: "JMeter", sub: { es: "pruebas de carga", en: "load tests", fr: "tests de charge" } },
          { id: "gateway", col: 2, row: 1, kind: "gateway", replicas: 2, tech: "TypeScript", label: "API Gateway", sub: { es: "GraphQL · un esquema", en: "GraphQL · one schema", fr: "GraphQL · un schéma" } },
          { id: "partner", col: 5, row: 1, kind: "external", icon: "users", label: { es: "Aplicación asociada", en: "Partner application", fr: "Application partenaire" }, sub: { es: "otro equipo · cliente SOAP", en: "other team · SOAP client", fr: "autre équipe · client SOAP" } },
          { id: "users", col: 0, row: 2, kind: "service", primary: true, replicas: 2, tech: "TypeScript", label: { es: "Usuarios · Auth", en: "Users · Auth", fr: "Utilisateurs · Auth" }, sub: "REST · JWT · bcrypt" },
          { id: "cart", col: 1, row: 2, kind: "service", replicas: 2, tech: "Python", label: { es: "Carrito", en: "Cart", fr: "Panier" }, sub: "REST" },
          { id: "orders", col: 2, row: 2, kind: "service", replicas: 2, tech: "Go", label: { es: "Pedidos", en: "Orders", fr: "Commandes" }, sub: "gRPC · REST" },
          { id: "catalogue", col: 3, row: 2, kind: "service", replicas: 2, tech: "Java", label: { es: "Catálogo", en: "Catalogue", fr: "Catalogue" }, sub: "REST" },
          { id: "soap", col: 4, row: 2, kind: "service", icon: "arrowLeftRight", tech: "Java", label: { es: "Interfaz SOAP", en: "SOAP interface", fr: "Interface SOAP" }, sub: { es: "adaptador · WSDL", en: "adapter · WSDL", fr: "adaptateur · WSDL" } },
          { id: "mongo", col: 0, row: 3, kind: "store", label: "MongoDB", sub: { es: "usuarios · roles", en: "users · roles", fr: "utilisateurs · rôles" } },
          { id: "redis", col: 1, row: 3, kind: "cache", label: "Redis", sub: { es: "carritos · sesiones", en: "carts · sessions", fr: "paniers · sessions" } },
          { id: "mysql", col: 2, row: 3, kind: "store", label: "MySQL", sub: { es: "pedidos · pagos", en: "orders · payments", fr: "commandes · paiements" } },
          { id: "pg", col: 3, row: 3, kind: "store", label: "PostgreSQL", sub: { es: "productos", en: "products", fr: "produits" } }
        ],
        edges: [
          { from: "web", to: "proxy", label: "HTTPS" },
          { from: "proxy", to: "gateway", label: "GraphQL" },
          { from: "jmeter", to: "gateway", sides: "lr", toPos: 0.3, dashed: true, label: { es: "carga", en: "load", fr: "charge" } },
          { from: "gateway", to: "users", sides: "bt", fromPos: 0.1, toPos: 0.7, label: "REST" },
          { from: "gateway", to: "cart", sides: "bt", fromPos: 0.3, label: "REST" },
          { from: "gateway", to: "orders", sides: "bt", label: "gRPC" },
          { from: "gateway", to: "catalogue", sides: "bt", fromPos: 0.7, label: "REST" },
          { from: "ldap", to: "users", sides: "bt", toPos: 0.3, dashed: true, via: [{ col: -0.5, row: 0.5 }], label: "LDAP" },
          { from: "users", to: "mongo", sides: "bt" },
          { from: "cart", to: "redis", sides: "bt" },
          { from: "orders", to: "mysql", sides: "bt" },
          { from: "catalogue", to: "pg", sides: "bt" },
          { from: "partner", to: "soap", sides: "bl", label: "SOAP · WSDL" },
          { from: "soap", to: "catalogue", sides: "lr", label: "REST" }
        ],
        pipeline: [
          { label: "Git", sub: { es: "un repositorio por servicio", en: "one repo per service", fr: "un dépôt par service" } },
          { label: "CI", sub: { es: "pruebas · JMeter", en: "tests · JMeter", fr: "tests · JMeter" } },
          { label: { es: "Imágenes", en: "Images", fr: "Images" }, sub: { es: "Docker · por servicio", en: "Docker · per service", fr: "Docker · par service" } },
          { label: "GKE", sub: { es: "despliegue progresivo · HPA", en: "rolling deploy · HPA", fr: "déploiement progressif · HPA" } }
        ]
      }
    }
  ],

  education: [
    {
      id: "unal",
      icon: "cap",
      org: "Universidad Nacional de Colombia",
      place: { es: "Bogotá, D.C., Colombia", en: "Bogotá, D.C., Colombia", fr: "Bogotá, D.C., Colombie" },
      degree: { es: "Ingeniería de Sistemas y Computación", en: "Systems and Computer Engineering", fr: "Génie informatique" },
      dateLabel: { es: "Mar. 2020 – Ago. 2024", en: "Mar 2020 – Aug 2024", fr: "Mars 2020 – Août 2024" },
      ongoing: false,
      bullets: {
        es: [
          "Beca de excelencia académica completa.",
          "Base en algoritmos, infraestructura, desarrollo web, ingeniería de software, bases de datos y trabajo en equipos ágiles.",
          "Primeros proyectos de ciencia de datos y procesamiento del lenguaje natural, en paralelo con roles de investigación y desarrollo en DNINFOA y OPE-PRIG."
        ],
        en: [
          "Full academic-excellence scholarship.",
          "Foundations in algorithms, infrastructure, web development, software engineering, databases, and agile teamwork.",
          "First data-science and natural-language-processing projects, alongside research and development roles at DNINFOA and OPE-PRIG."
        ],
        fr: [
          "Bourse d'excellence académique complète.",
          "Bases en algorithmique, infrastructure, développement web, génie logiciel, bases de données et travail agile.",
          "Premiers projets en data science et traitement automatique du langage, parallèlement à des missions de recherche et développement chez DNINFOA et OPE-PRIG."
        ]
      },
      tags: []
    },
    {
      id: "telecom",
      icon: "cap",
      org: "Télécom Paris",
      place: { es: "París, Francia", en: "Paris, France", fr: "Paris, France" },
      degree: { es: "Programa de Ingeniería — Data Science & MODS", en: "Engineering programme — Data Science & MODS", fr: "Diplôme d'ingénieur — Data Science & MODS" },
      dateLabel: { es: "Sept. 2024 – Sept. 2026", en: "Sept 2024 – Sept 2026", fr: "Sept. 2024 – Sept. 2026" },
      ongoing: true,
      bullets: {
        es: [
          "Especialización en Data Science (DS) y Markets, Organizations, Data, Strategies (MODS).",
          "Ciencia de datos: machine learning (SVM/PCA, clasificadores y autoencoders para MNIST), deep learning, minería de texto y de datos, graph learning (PageRank, Louvain), bases de datos y optimización aplicada.",
          "Economía y datos: econometría aplicada, economía de plataformas, finanzas digitales, microeconomía y organización industrial, con proyectos de recolección y visualización de datos.",
          "Formación complementaria en desarrollo web, teoría de colas, optimización numérica y propiedad intelectual para ingenieros digitales."
        ],
        en: [
          "Specialization in Data Science (DS) and Markets, Organizations, Data, Strategies (MODS).",
          "Data science coursework: machine learning (SVM/PCA, classifiers and autoencoders for MNIST), deep learning, text and data mining, graph learning (PageRank, Louvain), databases, and applied optimization.",
          "Economics and data: applied econometrics, platform economics, digital finance, microeconomics and industrial organization, with data collection and visualization projects.",
          "Broader coursework in web development, queueing theory, numerical optimization, and intellectual property for digital engineers."
        ],
        fr: [
          "Spécialisation Data Science (DS) et Markets, Organizations, Data, Strategies (MODS).",
          "Cours de data science : machine learning (SVM/ACP, classifieurs et autoencodeurs pour MNIST), deep learning, fouille de texte et de données, graph learning (PageRank, Louvain), bases de données et optimisation appliquée.",
          "Économie et données : économétrie appliquée, économie des plateformes, finance numérique, microéconomie et organisation industrielle, avec des projets de collecte et de visualisation de données.",
          "Formation complémentaire en développement web, files d'attente, optimisation numérique et propriété intellectuelle pour ingénieurs du numérique."
        ]
      },
      tags: []
    },
    {
      id: "iren",
      icon: "cap",
      org: "Dauphine–PSL",
      place: { es: "París, Francia", en: "Paris, France", fr: "Paris, France" },
      degree: { es: "Doble título M2 IREN", en: "M2 IREN Double Degree", fr: "Double diplôme M2 IREN" },
      dateLabel: { es: "Sept. 2025 – Sept. 2026", en: "Sept 2025 – Sept 2026", fr: "Sept. 2025 – Sept. 2026" },
      ongoing: true,
      bullets: {
        es: [
          "Doble título M2 IREN especializado en industrias de red y economía digital (competencia, regulación, plataformas digitales).",
          "Investigación (tutorat) sobre simulación social multiagente con LLM, aplicada a la Digital Markets Act de la UE.",
          "Econometría aplicada, con una propuesta de inferencia causal sobre el programa de bicicletas eléctricas Véligo.",
          "Cursos de fondo en economía de la propiedad intelectual, economía y gestión de la innovación, economía industrial, gestión estratégica y sistemas de información y organización.",
          "Especialización en economía digital: plataformas, transformación digital, regulación digital, medios digitales, descarbonización digital, regulación financiera y marketing de la innovación."
        ],
        en: [
          "M2 IREN double degree specializing in network industries and the digital economy (competition, regulation, digital platforms).",
          "Independent research (tutorat) on LLM-based multi-agent social simulation, applied to the EU Digital Markets Act.",
          "Applied econometrics, including a causal-inference proposal for the Véligo e-bike programme.",
          "Core coursework in intellectual property economics, innovation economics and management, industrial economics, strategic management, and information systems and organization.",
          "Digital-economy specialization: digital platforms, digital transformation, digital regulation, digital media, digital decarbonization, financial regulation, and innovation marketing."
        ],
        fr: [
          "Double diplôme M2 IREN, spécialisation industries de réseau et économie numérique (concurrence, régulation, plateformes numériques).",
          "Travail de recherche (tutorat) sur la simulation sociale multi-agents par LLM, appliquée au Digital Markets Act de l'UE.",
          "Économétrie appliquée, avec une proposition d'inférence causale sur le programme de vélos électriques Véligo.",
          "Cours fondamentaux en économie de la propriété intellectuelle, économie et gestion de l'innovation, économie industrielle, management stratégique et systèmes d'information et organisation.",
          "Spécialisation en économie numérique : plateformes numériques, transformation numérique, régulation numérique, médias numériques, décarbonation numérique, régulation financière et marketing de l'innovation."
        ]
      },
      tags: []
    }
  ],

  experience: [
    {
      id: "moduo-ai-architect",
      icon: "briefcase",
      title: "AI Software Architect",
      org: "MODUO Ingénierie",
      place: { es: "Francia", en: "France", fr: "France" },
      dateLabel: { es: "Desde sept. 2026", en: "Since Sept 2026", fr: "Depuis sept. 2026" },
      ongoing: true,
      bullets: {
        es: [
          "Responsable de la arquitectura de las aplicaciones internas y de la plataforma de datos e IA: decido qué productos siguen como monolitos modulares y cuáles se dividen en servicios, y defino los contratos entre ellos (GraphQL, REST, eventos).",
          "Evolución del asistente documental a MODUO Chat, una arquitectura de microservicios: gateway GraphQL en TypeScript, servicios de chat, recuperación e ingesta en Python, cola para la ingesta asíncrona y modelos servidos en la empresa.",
          "Escalado de la capa de datos: réplicas de lectura para el reporting, particionado por proyecto, cachés y copias de seguridad con restauración probada; aislamiento de datos por proyecto en los asistentes.",
          "Estándares de entrega y operación para todos los servicios: CI/CD con pruebas y evaluación RAG, imágenes versionadas, entornos dev/prod, observabilidad (logs, métricas, trazas) y runbooks.",
          "Revisión técnica y acompañamiento del equipo: diseño de APIs, registros de decisiones de arquitectura (ADR) y hoja de ruta técnica."
        ],
        en: [
          "Own the architecture of the internal applications and of the data and AI platform: I decide which products stay modular monoliths and which are split into services, and define the contracts between them (GraphQL, REST, events).",
          "Evolved the document assistant into MODUO Chat, a microservices architecture: GraphQL gateway in TypeScript, chat, retrieval and ingestion services in Python, a queue for asynchronous ingestion and models served in-house.",
          "Scaled the data tier: read replicas for reporting, partitioning by project, caches and backups with tested restores; per-project data isolation in the assistants.",
          "Delivery and operations standards for every service: CI/CD with tests and RAG evaluation, versioned images, dev/prod environments, observability (logs, metrics, traces) and runbooks.",
          "Technical review and mentoring of the team: API design, architecture decision records (ADR) and the technical roadmap."
        ],
        fr: [
          "Responsable de l'architecture des applications internes et de la plateforme data et IA : je décide quels produits restent des monolithes modulaires et lesquels sont découpés en services, et je définis les contrats entre eux (GraphQL, REST, événements).",
          "Évolution de l'assistant documentaire vers MODUO Chat, une architecture en microservices : gateway GraphQL en TypeScript, services de chat, de recherche et d'ingestion en Python, file d'attente pour l'ingestion asynchrone et modèles servis en interne.",
          "Montée en charge de la couche de données : réplicas en lecture pour le reporting, partitionnement par projet, caches et sauvegardes avec restauration testée ; isolation des données par projet dans les assistants.",
          "Standards de livraison et d'exploitation pour tous les services : CI/CD avec tests et évaluation RAG, images versionnées, environnements dev/prod, observabilité (logs, métriques, traces) et runbooks.",
          "Revue technique et accompagnement de l'équipe : conception d'API, registres de décisions d'architecture (ADR) et feuille de route technique."
        ]
      },
      tags: ["Software Architecture", "Microservices", "GraphQL", "Python", "TypeScript", "PostgreSQL", "Docker", "CI/CD", "Observability", "RAG"]
    },
    {
      id: "moduo",
      icon: "briefcase",
      title: { es: "AI Data Engineer Intern (antes IT Developer)", en: "AI Data Engineer Intern (previously IT Developer)", fr: "Stagiaire ingénieur Data & IA (auparavant développeur IT)" },
      org: "MODUO Ingénierie",
      place: { es: "Francia", en: "France", fr: "France" },
      dateLabel: { es: "Feb. 2026 – Sept. 2026", en: "Feb 2026 – Sept 2026", fr: "Févr. 2026 – Sept. 2026" },
      ongoing: false,
      bullets: {
        es: [
          "Asumí el diseño y la implementación de la arquitectura de datos e IA de la empresa: un conjunto de servicios en contenedores —portal de proyectos, proveedor de identidad, ingesta documental, asistentes RAG y pipelines BIM— con inicio de sesión común, aislamiento de datos por proyecto y entornos de desarrollo y producción separados.",
          "Diseñé y desplegué Moduo Connect, el servicio central de identidad (OIDC sobre Authentik) que unifica el inicio de sesión de seis aplicaciones internas, con una migración que conservó los hashes de contraseña existentes y aislamiento estricto de sesión por aplicación; incorporar una aplicación nueva es ahora una tarea de configuración.",
          "Desarrollé y mantuve ModuoCopil, el portal web en producción para la gestión de proyectos (Django, PostgreSQL, Tailwind CSS), con una arquitectura modular: tableros, administración y registro de horas.",
          "Diseñé una plataforma de asistentes RAG por proyecto sobre documentación BIM: ingesta con Apache Tika, chunking y embeddings en ChromaDB, y respuestas con fuentes generadas por modelos servidos internamente con Ollama.",
          "Diseñé un pipeline de datos BIM que integra extracción Revit/IFC (IfcOpenShell), precios de proveedores y análisis de ciclo de vida (API de Vizcab) para automatizar el análisis de costes e impacto ambiental.",
          "Estructuré el data warehouse interno en capas bronze, silver y gold, con convenciones de nombres, control de accesos, trazabilidad, documentación y supervisión de los procesos.",
          "Entregas con Git y CI/CD, y herramientas de automatización en Python y VBA para los equipos de ingeniería."
        ],
        en: [
          "Took ownership of the design and implementation of the company's data and AI architecture: a set of containerized services — project portal, identity provider, document ingestion, RAG assistants and BIM pipelines — with shared sign-in, per-project data isolation, and separate development and production environments.",
          "Designed and deployed Moduo Connect, the central OIDC identity service (built on Authentik) providing single sign-on across six internal applications, with a migration that preserved existing password hashes and strict per-application session isolation; onboarding a new application is now a configuration task.",
          "Built and maintained ModuoCopil, the production project-management web portal (Django, PostgreSQL, Tailwind CSS), with a modular architecture: dashboards, administration and time tracking.",
          "Designed a platform of per-project RAG assistants over BIM documentation: ingestion with Apache Tika, chunking and embeddings in ChromaDB, and sourced answers generated by models served in-house with Ollama.",
          "Designed a BIM data pipeline integrating Revit/IFC extraction (IfcOpenShell), supplier pricing and life-cycle assessment (Vizcab API) to automate cost and environmental-impact analysis.",
          "Structured the internal data warehouse in bronze, silver and gold layers, with naming conventions, access control, traceability, documentation and monitoring of the processing jobs.",
          "Releases through Git and CI/CD, plus Python and VBA automation tools for the engineering teams."
        ],
        fr: [
          "Prise en charge de la conception et de la mise en œuvre de l'architecture data et IA de l'entreprise : un ensemble de services conteneurisés — portail de projets, fournisseur d'identité, ingestion documentaire, assistants RAG et pipelines BIM — avec authentification commune, isolation des données par projet et environnements de développement et de production séparés.",
          "Conception et déploiement de Moduo Connect, le service d'identité central (OIDC via Authentik) assurant l'authentification unique de six applications internes, avec une migration préservant les hachages de mots de passe existants et un isolement strict des sessions par application ; intégrer une nouvelle application est désormais une tâche de configuration.",
          "Développement et maintenance de ModuoCopil, le portail web de gestion de projets en production (Django, PostgreSQL, Tailwind CSS), avec une architecture modulaire : tableaux de bord, administration et suivi du temps.",
          "Conception d'une plateforme d'assistants RAG par projet sur la documentation BIM : ingestion avec Apache Tika, chunking et embeddings dans ChromaDB, et réponses sourcées générées par des modèles servis en interne avec Ollama.",
          "Conception d'un pipeline de données BIM intégrant l'extraction Revit/IFC (IfcOpenShell), les prix fournisseurs et l'analyse de cycle de vie (API Vizcab) pour automatiser l'analyse des coûts et de l'impact environnemental.",
          "Structuration de l'entrepôt de données interne en couches bronze, silver et gold, avec conventions de nommage, contrôle des accès, traçabilité, documentation et supervision des traitements.",
          "Livraisons via Git et CI/CD, et outils d'automatisation en Python et VBA pour les équipes d'ingénierie."
        ]
      },
      tags: ["Python", "Django", "PostgreSQL", "Tailwind CSS", "OIDC", "Authentik", "SSO", "Docker", "CI/CD", "RAG", "Ollama", "ChromaDB", "Apache Tika", "BIM", "Revit", "IFC", "IfcOpenShell", "Vizcab API", "Medallion Architecture", "Data Modeling", "VBA"]
    },
    {
      id: "dninfoa",
      icon: "briefcase",
      title: { es: "Científico de Datos", en: "Data Scientist", fr: "Data Scientist" },
      org: "DNINFOA · Universidad Nacional de Colombia",
      place: { es: "Bogotá, Colombia", en: "Bogotá, Colombia", fr: "Bogotá, Colombie" },
      dateLabel: { es: "May. – Nov. 2024", en: "May – Nov 2024", fr: "Mai – Nov. 2024" },
      ongoing: false,
      bullets: {
        es: [
          "Lideré varios proyectos de Data Science en la DNINFOA y coordiné a cuatro estudiantes de ingeniería, con planificación Scrum, reparto de tareas y revisión técnica.",
          "Diseñé un asistente sobre normativa y servicios académicos, aplicando la experiencia de Siigo con tecnologías open source: Ollama, Node.js/TypeScript, Python y React.",
          "Construí con el personal administrativo una base de conocimiento curada y versionada sobre la normativa y los servicios académicos, y un bucle de calidad: evaluación por lotes contra preguntas de referencia, comparación entre ejecuciones y revisión humana de las respuestas.",
          "Entregué un prototipo funcional al personal administrativo y coordiné las iteraciones del equipo a partir de sus necesidades."
        ],
        en: [
          "Led several Data Science projects at DNINFOA and coordinated four engineering students through Scrum planning, task allocation and technical review.",
          "Designed an assistant for academic regulations and services, applying the experience gained at Siigo with open-source technologies: Ollama, Node.js/TypeScript, Python and React.",
          "Built, with administrative staff, a curated and versioned knowledge base on academic regulations and services, plus a quality loop: batch evaluation against reference questions, run-to-run comparison and human review of the answers.",
          "Delivered a working prototype to administrative staff and coordinated team iterations around their needs."
        ],
        fr: [
          "Pilotage de plusieurs projets de Data Science à la DNINFOA et encadrement de quatre étudiants ingénieurs : planification Scrum, répartition des tâches et revue technique.",
          "Conception d'un assistant sur la réglementation et les services académiques, en appliquant l'expérience de Siigo avec des technologies open source : Ollama, Node.js/TypeScript, Python et React.",
          "Construction, avec le personnel administratif, d'une base de connaissances curée et versionnée sur la réglementation et les services académiques, et d'une boucle qualité : évaluation par lots contre des questions de référence, comparaison entre exécutions et revue humaine des réponses.",
          "Livraison d'un prototype fonctionnel au personnel administratif et coordination des itérations de l'équipe selon ses besoins."
        ]
      },
      tags: ["Python", "Node.js", "TypeScript", "React", "Ollama", "RAG", "Open Source", "Technical Leadership", "Scrum"]
    },
    {
      id: "siigo",
      icon: "briefcase",
      title: { es: "Practicante de Análisis de Datos", en: "Data Analyst Intern", fr: "Stagiaire Data Analyst" },
      org: "Siigo S.A.S. · Data Engineering Team",
      place: { es: "Bogotá, Colombia", en: "Bogotá, Colombia", fr: "Bogotá, Colombie" },
      dateLabel: { es: "Feb. – Jul. 2024", en: "Feb – Jul 2024", fr: "Févr. – Juil. 2024" },
      ongoing: false,
      bullets: {
        es: [
          "Desarrollé el asistente RAG de DataSmart sobre el catálogo de Databricks, integrando Azure OpenAI y Azure AI Search en una aplicación Flask y React/TypeScript con fuentes citadas.",
          "Preparé la base de conocimiento con documentación y metadatos de tablas, transformados a JSON e indexados para su recuperación semántica.",
          "Trabajé en RAG Commander para pruebas por lotes y adapté RAG AI Chat Evaluator al índice de Siigo, con más de 200 pares pregunta-respuesta de referencia y métricas de calidad y latencia.",
          "Integré historial de conversaciones con Azure Cosmos DB y preparé imágenes Docker multi-etapa para el entorno QA de DataSmart en Azure."
        ],
        en: [
          "Developed the DataSmart RAG assistant over the Databricks catalogue, integrating Azure OpenAI and Azure AI Search in a Flask and React/TypeScript application with source citations.",
          "Prepared the knowledge base from documentation and table metadata, transformed into JSON and indexed for semantic retrieval.",
          "Worked on RAG Commander for batch testing and adapted RAG AI Chat Evaluator to Siigo’s index, with 200+ ground-truth question-answer pairs and quality and latency metrics.",
          "Integrated Azure Cosmos DB conversation history and prepared multi-stage Docker images for DataSmart’s QA environment on Azure."
        ],
        fr: [
          "Développement de l'assistant RAG DataSmart sur le catalogue Databricks, avec Azure OpenAI et Azure AI Search dans une application Flask et React/TypeScript citant ses sources.",
          "Préparation de la base de connaissances à partir de documentation et de métadonnées de tables, transformées en JSON et indexées pour la recherche sémantique.",
          "Travail sur RAG Commander pour les tests par lots et adaptation de RAG AI Chat Evaluator à l'index de Siigo, avec plus de 200 paires question-réponse de référence et des métriques de qualité et de latence.",
          "Intégration de l'historique des conversations dans Azure Cosmos DB et préparation d'images Docker multi-étapes pour l'environnement QA de DataSmart sur Azure."
        ]
      },
      tags: ["Python", "Flask", "FastAPI", "React", "TypeScript", "Azure OpenAI", "Azure AI Search", "Databricks", "Azure Cosmos DB", "Blob Storage", "Docker", "RAG Commander", "RAG AI Chat Evaluator"]
    },
    {
      id: "prig",
      icon: "briefcase",
      title: { es: "Gestor de Datos", en: "Data Manager", fr: "Data Manager" },
      org: "OPE – PRIG · Universidad Nacional de Colombia",
      place: { es: "Bogotá, Colombia", en: "Bogotá, Colombia", fr: "Bogotá, Colombie" },
      dateLabel: { es: "Sept. 2023 – Ene. 2024", en: "Sept 2023 – Jan 2024", fr: "Sept. 2023 – Janv. 2024" },
      ongoing: false,
      bullets: {
        es: [
          "Diseñé y mantuve flujos ETL para procesar datos de investigación del proyecto PRIG, garantizando calidad y accesibilidad de los datos.",
          "Configuré un entorno de almacenamiento en la nube en AWS S3 integrado con scripts de Python y Excel para la ingestión y gestión automatizada de datos."
        ],
        en: [
          "Designed and maintained ETL workflows to process research data for the PRIG project, ensuring data quality and accessibility.",
          "Set up an AWS S3 cloud-storage environment integrated with Python and Excel scripts for automated data ingestion and management."
        ],
        fr: [
          "Conception et maintenance de flux ETL pour traiter les données de recherche du projet PRIG, garantissant leur qualité et leur accessibilité.",
          "Mise en place d'un environnement de stockage cloud AWS S3 intégré à des scripts Python et Excel pour l'ingestion et la gestion automatisées des données."
        ]
      },
      tags: ["AWS S3", "Python", "Excel", "ETL", "Tableau", "Power BI"]
    },
    {
      id: "kawsay-role",
      icon: "heart",
      title: { es: "Cofundador y Co-propietario", en: "Co-Founder & Co-Owner", fr: "Cofondateur et copropriétaire" },
      org: "Fundación Kawsay S.A.S.",
      place: { es: "Nariño, Colombia", en: "Nariño, Colombia", fr: "Nariño, Colombie" },
      dateLabel: { es: "Desde mar. 2022", en: "Since Mar 2022", fr: "Depuis mars 2022" },
      ongoing: true,
      bullets: {
        es: ["A cargo de la gestión de datos de la fundación con Oracle DB, SQL, Excel y Python.", "El proyecto más grande de la fundación, en 2023, se realizó en cooperación con la Alcaldía de Túquerres, beneficiando a más de 200 familias."],
        en: ["Responsible for the foundation's data management using Oracle DB, SQL, Excel and Python.", "The foundation's largest project, in 2023, ran in partnership with Túquerres City Hall, benefiting more than 200 families."],
        fr: [
          "Responsable de la gestion des données de la fondation avec Oracle DB, SQL, Excel et Python.",
          "Le plus grand projet de la fondation, en 2023, a été mené en partenariat avec la mairie de Túquerres, au bénéfice de plus de 200 familles."
        ]
      },
      tags: ["Oracle DB", "SQL", "Excel", "Python"]
    }
  ],

  projectCatalog: [
    {
      id: "telecom-paris",
      institution: "Télécom Paris",
      photo: "assets/img/institutions/telecom-paris.jpg",
      description: {
        es: "Proyectos y laboratorios de los itinerarios Data Science y MODS. Se presentan como trabajo académico y se mantienen separados de la experiencia profesional.",
        en: "Projects and labs from the Data Science and MODS tracks. They are presented as academic work and kept separate from professional experience.",
        fr: "Projets et TP des parcours Data Science et MODS. Ils sont présentés comme travaux académiques, séparément de l'expérience professionnelle."
      },
      courses: [
        {
          name: "Machine Learning for Text Mining · 4AI12",
          items: [
            {
              id: "text-classification-pytorch",
              area: "ml",
              level: "featured",
              kind: { es: "Proyecto individual", en: "Individual project", fr: "Projet individuel" },
              title: { es: "Clasificación de texto: de TF-IDF a PyTorch", en: "Text Classification: From TF-IDF to PyTorch", fr: "Classification de texte : de TF-IDF à PyTorch" },
              dateLabel: { es: "Abr. 2025", en: "Apr 2025", fr: "Avr. 2025" },
              intro: {
                es: "Comparación reproducible de representaciones simbólicas, densas y neuronales sobre seis categorías de 20 Newsgroups.",
                en: "A reproducible comparison of symbolic, dense, and neural representations across six 20 Newsgroups categories.",
                fr: "Comparaison reproductible de représentations symboliques, denses et neuronales sur six catégories de 20 Newsgroups."
              },
              stats: [
                {
                  num: "80.12%",
                  label: { es: "Accuracy test", en: "Test accuracy", fr: "Accuracy test" }
                },
                {
                  num: "8,000",
                  label: { es: "Tokens", en: "Tokens", fr: "Tokens" }
                },
                {
                  num: "6",
                  label: { es: "Categorías", en: "Categories", fr: "Catégories" }
                }
              ],
              bullets: {
                es: [
                  "Comparé BoW, TF-IDF, SVD/LSA, LDA, PPMI, Word2Vec y GloVe con regresión logística y diagnóstico por clase.",
                  "Implementé Dataset/DataLoader y clasificadores de promediado en PyTorch; el fine-tuning de GloVe logró el mejor resultado de prueba."
                ],
                en: [
                  "Compared BoW, TF-IDF, SVD/LSA, LDA, PPMI, Word2Vec, and GloVe with logistic regression and class-level diagnostics.",
                  "Implemented Dataset/DataLoader components and averaging classifiers in PyTorch; fine-tuned GloVe delivered the best held-out result."
                ],
                fr: [
                  "Comparaison de BoW, TF-IDF, SVD/LSA, LDA, PPMI, Word2Vec et GloVe avec régression logistique et diagnostic par classe.",
                  "Implémentation de Dataset/DataLoader et de classifieurs par moyenne sous PyTorch ; le fine-tuning de GloVe obtient le meilleur résultat de test."
                ]
              },
              tags: ["Python", "PyTorch", "Scikit-learn", "TF-IDF", "Word2Vec", "GloVe"]
            }
          ]
        },
        {
          name: { es: "Economía aplicada · MODS", en: "Applied Economics · MODS", fr: "Économie appliquée · MODS" },
          items: [
            {
              id: "switch-2-competition",
              area: "econ",
              level: "featured",
              kind: { es: "Proyecto individual · Modelo estilizado", en: "Individual project · Stylized model", fr: "Projet individuel · Modèle stylisé" },
              title: { es: "Switch 2 y competencia en el mercado de consolas", en: "Switch 2 and Competition in the Console Market", fr: "Switch 2 et concurrence sur le marché des consoles" },
              dateLabel: { es: "Sept. 2025", en: "Sept 2025", fr: "Sept. 2025" },
              intro: {
                es: "Modelo de Hotelling, demanda nested-logit y dinámica de adopción para explorar cómo la entrada de Switch 2 puede reconfigurar un oligopolio de plataformas.",
                en: "A Hotelling model, nested-logit demand, and adoption dynamics used to explore how the Switch 2 launch may reshape a platform oligopoly.",
                fr: "Modèle de Hotelling, demande nested logit et dynamique d'adoption pour explorer la manière dont l'arrivée de la Switch 2 peut reconfigurer un oligopole de plateformes."
              },
              stats: [
                {
                  num: "200k",
                  label: { es: "Simulaciones", en: "Simulations", fr: "Simulations" }
                },
                {
                  num: "40.2→47.5%",
                  label: { es: "Nintendo · escenario", en: "Nintendo · scenario", fr: "Nintendo · scénario" }
                },
                {
                  num: "52",
                  label: { es: "Páginas", en: "Pages", fr: "Pages" }
                }
              ],
              bullets: {
                es: [
                  "Integra diferenciación horizontal, efectos de red, precios de Bertrand y sensibilidad Monte Carlo.",
                  "Los resultados son escenarios sintéticos calibrados con órdenes de magnitud públicos; no son cuotas observadas, pronósticos ni estimaciones causales."
                ],
                en: [
                  "Combines horizontal differentiation, network effects, Bertrand pricing, and Monte Carlo sensitivity analysis.",
                  "Results are synthetic scenarios calibrated to public orders of magnitude; they are not observed shares, forecasts, or causal estimates."
                ],
                fr: [
                  "Combine différenciation horizontale, effets de réseau, tarification de Bertrand et analyse de sensibilité Monte Carlo.",
                  "Les résultats sont des scénarios synthétiques calibrés sur des ordres de grandeur publics, et non des parts observées, des prévisions ou des estimations causales."
                ]
              },
              documents: [
                {
                  href: "assets/files/projects/telecom/applied-economics/switch-2-console-competition.pdf",
                  label: { es: "Informe final", en: "Final report", fr: "Rapport final" }
                }
              ],
              tags: ["Hotelling", "Nested Logit", "Monte Carlo", "Platform Economics", "Python"]
            }
          ]
        },
        {
          name: "Applied Projects · MODS",
          items: [
            {
              id: "us-protectionism",
              area: "econ",
              level: "standard",
              kind: { es: "Proyecto en equipo · con Iba Demesy", en: "Team project · with Iba Demesy", fr: "Projet en équipe · avec Iba Demesy" },
              title: { es: "Proteccionismo estadounidense: impactos y respuestas globales", en: "U.S. Protectionism: Impacts and Global Responses", fr: "Protectionnisme américain : impacts et réponses mondiales" },
              dateLabel: { es: "Jun. 2025", en: "Jun 2025", fr: "Juin 2025" },
              intro: {
                es: "Revisión histórico-teórica de los efectos sobre empresas y cadenas globales, junto con las respuestas de China, UE, Francia, Canadá, India y Japón.",
                en: "A historical and theoretical review of effects on firms and global value chains, alongside responses from China, the EU, France, Canada, India, and Japan.",
                fr: "Revue historique et théorique des effets sur les entreprises et les chaînes de valeur mondiales, ainsi que des réponses de la Chine, de l'UE, de la France, du Canada, de l'Inde et du Japon."
              },
              note: {
                es: "Análisis documental y comparativo; no es una estimación econométrica o causal.",
                en: "Documentary and comparative analysis; not an econometric or causal estimate.",
                fr: "Analyse documentaire et comparative ; il ne s'agit pas d'une estimation économétrique ou causale."
              },
              documents: [
                {
                  href: "assets/files/projects/us-protectionism-global-responses.pdf",
                  label: { es: "Informe coautor", en: "Co-authored report", fr: "Rapport coécrit" }
                }
              ],
              tags: ["Digital Economics", "Policy Analysis", "Global Value Chains"]
            }
          ]
        },
        {
          name: "Graph Learning",
          items: [
            {
              id: "graph-learning-labs",
              area: "ml",
              level: "standard",
              kind: { es: "Serie de laboratorios guiados", en: "Guided lab series", fr: "Série de TP encadrés" },
              title: { es: "Ranking, difusión, embeddings y redes neuronales sobre grafos", en: "Ranking, Diffusion, Embeddings, and Graph Neural Networks", fr: "Ranking, diffusion, embeddings et réseaux de neurones sur graphes" },
              dateLabel: { es: "Jun. 2025", en: "Jun 2025", fr: "Juin 2025" },
              intro: {
                es: "Recorrido práctico desde PageRank y Louvain hasta difusión de etiquetas, embeddings espectrales y GNN sobre grafos reales y sintéticos.",
                en: "A practical progression from PageRank and Louvain to label diffusion, spectral embeddings, and GNNs on real and synthetic graphs.",
                fr: "Parcours pratique de PageRank et Louvain jusqu'à la diffusion d'étiquettes, aux embeddings spectraux et aux GNN sur des graphes réels et synthétiques."
              },
              stats: [
                {
                  num: "89.88%",
                  label: { es: "Difusión · texto", en: "Diffusion · text", fr: "Diffusion · texte" }
                },
                {
                  num: "82.95%",
                  label: { es: "GNN · WikiVitals", en: "GNN · WikiVitals", fr: "GNN · WikiVitals" }
                }
              ],
              note: {
                es: "Se incluyen únicamente los notebooks ejecutados y sin errores; no se publican como proyectos independientes.",
                en: "Only executed, error-free notebooks inform this summary; the guided labs are not presented as independent projects.",
                fr: "Seuls les notebooks exécutés sans erreur alimentent cette synthèse ; les TP encadrés ne sont pas présentés comme projets indépendants."
              },
              tags: ["PageRank", "Louvain", "Diffusion", "Spectral Embedding", "GNN", "Python"]
            }
          ]
        },
        {
          name: "Optimization for Machine Learning",
          items: [
            {
              id: "mnist-sgd-optimization",
              area: "ml",
              level: "compact",
              kind: { es: "Laboratorio individual", en: "Individual lab", fr: "TP individuel" },
              title: { es: "Descenso de gradiente estocástico sobre MNIST", en: "Stochastic Gradient Descent on MNIST", fr: "Descente de gradient stochastique sur MNIST" },
              dateLabel: { es: "2025", en: "2025", fr: "2025" },
              intro: {
                es: "Implementación y comparación de SGD propio y Keras; la mejor configuración registrada alcanzó 95,39 % de accuracy de prueba.",
                en: "Implementation and comparison of a custom SGD routine and Keras; the best recorded configuration reached 95.39% test accuracy.",
                fr: "Implémentation et comparaison d'un SGD personnalisé et de Keras ; la meilleure configuration enregistrée atteint 95,39 % d'accuracy test."
              },
              tags: ["Python", "SGD", "Keras", "MNIST"]
            }
          ]
        },
        {
          name: "Machine Learning",
          items: [
            {
              id: "svm-pca",
              area: "ml",
              level: "compact",
              kind: { es: "Laboratorio individual", en: "Individual lab", fr: "TP individuel" },
              title: { es: "SVM: kernels, sobreajuste y PCA", en: "SVMs: Kernels, Overfitting, and PCA", fr: "SVM : noyaux, surapprentissage et ACP" },
              dateLabel: { es: "Mar. 2025", en: "Mar 2025", fr: "Mars 2025" },
              intro: {
                es: "Comparación de SVM lineal/RBF, regularización y curvas de aprendizaje; en LFW, PCA mantuvo 93,4 % de accuracy y redujo el ajuste de 307,7 s a 2,48 s.",
                en: "Comparison of linear/RBF SVMs, regularization, and learning curves; on LFW, PCA retained 93.4% accuracy while reducing fit time from 307.7 s to 2.48 s.",
                fr: "Comparaison de SVM linéaires/RBF, régularisation et courbes d'apprentissage ; sur LFW, l'ACP conserve 93,4 % d'accuracy en réduisant l'ajustement de 307,7 s à 2,48 s."
              },
              tags: ["Scikit-learn", "SVM", "PCA"]
            },
            {
              id: "mnist-autoencoders",
              area: "ml",
              level: "compact",
              kind: { es: "Laboratorio individual", en: "Individual lab", fr: "TP individuel" },
              title: { es: "MNIST: clasificador lineal y autoencoders", en: "MNIST: Linear Classifier and Autoencoders", fr: "MNIST : classifieur linéaire et autoencodeurs" },
              dateLabel: { es: "Abr. 2025", en: "Apr 2025", fr: "Avr. 2025" },
              intro: {
                es: "Clasificador softmax en NumPy con 88,42 % de accuracy de prueba, seguido de PCA, autoencoders y denoising autoencoders en Keras.",
                en: "A NumPy softmax classifier with 88.42% test accuracy, followed by PCA, autoencoders, and denoising autoencoders in Keras.",
                fr: "Classifieur softmax en NumPy avec 88,42 % d'accuracy test, suivi d'expériences avec ACP, autoencodeurs et autoencodeurs débruiteurs sous Keras."
              },
              tags: ["NumPy", "Keras", "Autoencoders", "MNIST"]
            }
          ]
        }
      ]
    },
    {
      id: "dauphine-iren",
      institution: "Dauphine–PSL",
      photo: "assets/img/institutions/dauphine-psl.jpg",
      description: {
        es: "Proyectos de economía digital, regulación, plataformas y ciencia de datos realizados en el doble diploma M2 IREN.",
        en: "Digital economics, regulation, platform, and data-science projects completed in the M2 IREN double-degree track.",
        fr: "Projets d'économie numérique, de régulation, de plateformes et de data science réalisés dans le double diplôme M2 IREN."
      },
      courses: [
        {
          name: "Tutorat FL_02 · LLM Social Simulation",
          items: [
            {
              id: "dma-multi-agent-simulation",
              area: "ml",
              level: "featured",
              kind: { es: "Proyecto individual · Simulación heurística", en: "Individual project · Heuristic simulation", fr: "Projet individuel · Simulation heuristique" },
              title: { es: "Simulación multiagente del Digital Markets Act", en: "Multi-Agent Simulation of the Digital Markets Act", fr: "Simulation multi-agents du Digital Markets Act" },
              dateLabel: { es: "Mar. 2026", en: "Mar 2026", fr: "Mars 2026" },
              intro: {
                es: "Arquitectura compatible con AG2/AutoGen para explorar deliberación regulatoria con cinco stakeholders, un moderador, cuatro rondas y análisis de sensibilidad Monte Carlo.",
                en: "An AG2/AutoGen-compatible architecture for exploring regulatory deliberation with five stakeholders, one moderator, four rounds, and Monte Carlo sensitivity analysis.",
                fr: "Architecture compatible AG2/AutoGen pour explorer la délibération réglementaire avec cinq parties prenantes, un modérateur, quatre tours et une analyse de sensibilité Monte Carlo."
              },
              stats: [
                {
                  num: "3.62→4.07",
                  label: { es: "Soporte medio", en: "Mean support", fr: "Soutien moyen" }
                },
                {
                  num: "1.05→0.82",
                  label: { es: "Dispersión", en: "Dispersion", fr: "Dispersion" }
                },
                {
                  num: "12",
                  label: { es: "Papers revisados", en: "Papers reviewed", fr: "Articles étudiés" }
                }
              ],
              bullets: {
                es: [
                  "El informe define roles, turnos, scoring y descomposición; la revisión adjunta cubre arquitectura, escala, validación, interpretabilidad y gobernanza.",
                  "Los cambios de actitud son resultados sintéticos del piloto: sirven para estudiar el método, no para inferir efectos reales del DMA."
                ],
                en: [
                  "The report defines roles, turns, scoring, and decomposition; the attached review covers architecture, scale, validation, interpretability, and governance.",
                  "Attitude shifts are synthetic pilot outputs: they inform the method, not real-world DMA effects."
                ],
                fr: [
                  "Le rapport définit rôles, tours, scoring et décomposition ; la revue jointe couvre architecture, passage à l'échelle, validation, interprétabilité et gouvernance.",
                  "Les évolutions d'attitude sont des résultats synthétiques du pilote : elles éclairent la méthode, pas les effets réels du DMA."
                ]
              },
              documents: [
                {
                  href: "assets/files/projects/dauphine/llm-social-simulation/dma-multi-agent-simulation-report.pdf",
                  label: { es: "Informe de simulación", en: "Simulation report", fr: "Rapport de simulation" }
                },
                {
                  href: "assets/files/projects/dauphine/llm-social-simulation/llm-social-simulation-literature-review.pdf",
                  label: { es: "Revisión de literatura", en: "Literature review", fr: "Revue de littérature" }
                }
              ],
              tags: ["Python", "AG2 / AutoGen", "LLM", "Multi-Agent Systems", "Monte Carlo", "DMA"]
            }
          ]
        },
        {
          name: "Advanced Data Science",
          items: [
            {
              id: "loan-default-risk",
              area: "ml",
              level: "featured",
              kind: { es: "Proyecto individual · Diagnóstico reproducible", en: "Individual project · Reproducible diagnosis", fr: "Projet individuel · Diagnostic reproductible" },
              title: { es: "Riesgo de impago: señal, leakage y calibración", en: "Loan Default Risk: Signal, Leakage, and Calibration", fr: "Risque de défaut : signal, fuite de données et calibration" },
              dateLabel: { es: "Ene. 2026", en: "Jan 2026", fr: "Janv. 2026" },
              intro: {
                es: "Evaluación honesta de un problema con señal predictiva moderada, centrada en evitar leakage, calibrar probabilidades y comparar contra la prevalencia base.",
                en: "An honest assessment of a moderate-signal prediction problem, focused on leakage prevention, probability calibration, and comparison against base prevalence.",
                fr: "Évaluation transparente d'un problème à signal prédictif modéré, centrée sur la prévention des fuites, la calibration des probabilités et la comparaison à la prévalence de base."
              },
              stats: [
                {
                  num: "96,376",
                  label: { es: "Filas · train + test", en: "Rows · train + test", fr: "Lignes · train + test" }
                },
                {
                  num: "0.63",
                  label: { es: "ROC-AUC SAFE", en: "SAFE ROC-AUC", fr: "ROC-AUC SAFE" }
                },
                {
                  num: "0.17",
                  label: { es: "PR-AUC", en: "PR-AUC", fr: "PR-AUC" }
                }
              ],
              note: {
                es: "El valor del estudio es diagnosticar las limitaciones de señal; no se presenta como un modelo productivo de alto rendimiento.",
                en: "The study's value is diagnosing signal limitations; it is not presented as a high-performing production model.",
                fr: "L'intérêt de l'étude est le diagnostic des limites du signal ; elle n'est pas présentée comme un modèle de production performant."
              },
              tags: ["Scikit-learn", "CatBoost", "Calibration", "Leakage Control", "ROC / PR"]
            }
          ]
        },
        {
          name: "Information Systems & Organization",
          items: [
            {
              id: "vinted-agentic-ai",
              area: "econ",
              level: "standard",
              kind: { es: "Proyecto en equipo · con Perla Aouad", en: "Team project · with Perla Aouad", fr: "Projet en équipe · avec Perla Aouad" },
              title: { es: "Vinted 2030: IA agéntica, confianza y gobernanza", en: "Vinted 2030: Agentic AI, Trust, and Governance", fr: "Vinted 2030 : IA agentique, confiance et gouvernance" },
              dateLabel: { es: "Ene. 2026", en: "Jan 2026", fr: "Janv. 2026" },
              intro: {
                es: "Diagnóstico de plataforma, matriz 2×2 de escenarios y análisis regulatorio europeo para proponer una apertura controlada a agentes certificados.",
                en: "Platform diagnosis, a 2×2 scenario matrix, and EU regulatory analysis supporting controlled access for certified agents.",
                fr: "Diagnostic de plateforme, matrice de scénarios 2×2 et analyse de la réglementation européenne en faveur d'une ouverture contrôlée aux agents certifiés."
              },
              note: {
                es: "Análisis estratégico cualitativo; no contiene métricas originales de impacto.",
                en: "Qualitative strategy analysis; it contains no original impact metrics.",
                fr: "Analyse stratégique qualitative ; elle ne contient pas de métriques d'impact originales."
              },
              documents: [
                {
                  href: "assets/files/projects/dauphine/information-systems/vinted-agentic-ai-platform-strategy.pdf",
                  label: { es: "Informe coautor", en: "Co-authored report", fr: "Rapport coécrit" }
                }
              ],
              tags: ["Platform Strategy", "Agentic AI", "EU Regulation", "Governance"]
            }
          ]
        },
        {
          name: { es: "Economía política de las instituciones y la regulación", en: "Political Economy of Institutions and Regulation", fr: "Économie politique des institutions et de la régulation" },
          items: [
            {
              id: "telecom-regulation-europe",
              area: "econ",
              level: "standard",
              kind: { es: "Proyecto en equipo · con Perla Aouad", en: "Team project · with Perla Aouad", fr: "Projet en équipe · avec Perla Aouad" },
              title: { es: "Regulación de comunicaciones electrónicas en Europa", en: "Electronic Communications Regulation in Europe", fr: "Régulation des communications électroniques en Europe" },
              dateLabel: { es: "Mar. 2026", en: "Mar 2026", fr: "Mars 2026" },
              intro: {
                es: "Comparación institucional de Alemania, Italia y España basada en reguladores, Comisión Europea y OCDE: organización, inversión, despliegue y competencia.",
                en: "An institutional comparison of Germany, Italy, and Spain using regulators, the European Commission, and OECD sources: organization, investment, deployment, and competition.",
                fr: "Comparaison institutionnelle de l'Allemagne, de l'Italie et de l'Espagne à partir des régulateurs, de la Commission européenne et de l'OCDE : organisation, investissement, déploiement et concurrence."
              },
              note: {
                es: "Los indicadores son descriptivos y provienen de fuentes externas; no son estimaciones propias.",
                en: "Indicators are descriptive and sourced externally; they are not original estimates.",
                fr: "Les indicateurs sont descriptifs et issus de sources externes ; ce ne sont pas des estimations originales."
              },
              documents: [
                {
                  href: "assets/files/projects/dauphine/institutions-regulation/electronic-communications-regulation-europe.pdf",
                  label: { es: "Estudio comparativo", en: "Comparative study", fr: "Étude comparative" }
                }
              ],
              tags: ["Telecom Regulation", "OECD", "Comparative Analysis", "EU"]
            }
          ]
        },
        {
          name: { es: "Sistemas nacionales de innovación · IPE", en: "National Innovation Systems · IPE", fr: "Systèmes nationaux d'innovation · IPE" },
          items: [
            {
              id: "biotech-innovation-systems",
              area: "econ",
              level: "compact",
              kind: { es: "Proyecto en equipo · con Perla Aouad", en: "Team project · with Perla Aouad", fr: "Projet en équipe · avec Perla Aouad" },
              title: { es: "Biotecnología: sistemas de innovación de Dinamarca y Suiza", en: "Biotech Innovation Systems: Denmark and Switzerland", fr: "Biotechnologie : systèmes d'innovation du Danemark et de la Suisse" },
              dateLabel: { es: "Dic. 2025", en: "Dec 2025", fr: "Déc. 2025" },
              intro: {
                es: "Comparación documental con el marco Lundvall–Nelson: modelo danés concentrado y especializado frente a un sistema suizo más diversificado.",
                en: "A documentary comparison using the Lundvall–Nelson framework: a concentrated, specialized Danish model versus a more diversified Swiss system.",
                fr: "Comparaison documentaire selon le cadre Lundvall–Nelson : modèle danois concentré et spécialisé face à un système suisse plus diversifié."
              },
              documents: [
                {
                  href: "assets/files/projects/dauphine/innovation-systems/biotech-innovation-denmark-switzerland.pdf",
                  label: { es: "Informe coautor", en: "Co-authored report", fr: "Rapport coécrit" }
                }
              ],
              tags: ["Innovation Systems", "Biotechnology", "Comparative Analysis"]
            }
          ]
        },
        {
          name: { es: "Econometría", en: "Econometrics", fr: "Économétrie" },
          items: [
            {
              id: "veligo-research-proposal",
              area: "econ",
              level: "compact",
              kind: { es: "Propuesta de investigación · No ejecutada", en: "Research proposal · Not executed", fr: "Proposition de recherche · Non exécutée" },
              title: { es: "Evaluación causal propuesta para el programa Véligo", en: "Proposed Causal Evaluation of the Véligo Programme", fr: "Proposition d'évaluation causale du programme Véligo" },
              dateLabel: { es: "Ene. 2026", en: "Jan 2026", fr: "Janv. 2026" },
              intro: {
                es: "Diseño individual con diferencias-en-diferencias, efectos fijos, event study y placebos. Define datos y estrategia, pero todavía no contiene estimaciones ni resultados.",
                en: "An individual design using difference-in-differences, fixed effects, an event study, and placebos. It defines data and strategy but contains no estimates or results yet.",
                fr: "Protocole individuel avec différences de différences, effets fixes, event study et placebos. Il définit les données et la stratégie, mais ne contient pas encore d'estimations ni de résultats."
              },
              documents: [
                {
                  href: "assets/files/projects/veligo-causal-research-proposal.pdf",
                  label: { es: "Propuesta", en: "Proposal", fr: "Proposition" }
                }
              ],
              tags: ["Difference-in-Differences", "Event Study", "Causal Inference"]
            }
          ]
        }
      ]
    },
    {
      id: "unal",
      institution: "Universidad Nacional de Colombia",
      photo: "assets/img/institutions/unal.jpg?v=2",
      description: {
        es: "Proyectos de pregrado en lenguajes, ingeniería y arquitectura de software, con contribuciones y autorías claramente delimitadas.",
        en: "Undergraduate projects in programming languages, software engineering, and architecture, with contributions and authorship clearly scoped.",
        fr: "Projets de premier cycle en langages, ingénierie et architecture logicielle, avec des contributions et des attributions clairement délimitées."
      },
      courses: [
        {
          name: { es: "Arquitectura de Software", en: "Software Architecture", fr: "Architecture logicielle" },
          items: [
            {
              id: "tiendaun-microservices",
              area: "software",
              level: "featured",
              kind: { es: "Proyecto académico en equipo", en: "Academic team project", fr: "Projet académique en équipe" },
              title: { es: "TiendaUN: comercio electrónico basado en microservicios", en: "TiendaUN: Microservices-Based E-commerce", fr: "TiendaUN : e-commerce fondé sur des microservices" },
              dateLabel: { es: "2023", en: "2023", fr: "2023" },
              intro: {
                es: "Plataforma de comercio electrónico desarrollada en equipo con servicios separados por dominio. Desarrollé el microservicio de autenticación y gestión de usuarios y roles, integrado en una arquitectura con API Gateway GraphQL y despliegue en Google Cloud.",
                en: "Team-built e-commerce platform with domain-oriented services. Developed the authentication and user/role management microservice, integrated into an architecture with a GraphQL API Gateway and deployment on Google Cloud.",
                fr: "Plateforme e-commerce développée en équipe avec des services séparés par domaine. Développement du microservice d'authentification et de gestion des utilisateurs et rôles, intégré dans une architecture avec API Gateway GraphQL et déploiement sur Google Cloud."
              },
              bullets: {
                es: [
                  "API REST de registro, inicio de sesión y gestión de usuarios y roles con TypeScript, Express, MongoDB/Mongoose, bcrypt y JWT.",
                  "Integración del equipo mediante un API Gateway GraphQL para conectar la interfaz web con los servicios de usuarios, catálogo y carrito.",
                  "Arquitectura de despliegue con Docker y Kubernetes en Google Kubernetes Engine: réplicas de servicios y balanceo para el escalado horizontal."
                ],
                en: [
                  "REST APIs for registration, sign-in and user/role management with TypeScript, Express, MongoDB/Mongoose, bcrypt and JWT.",
                  "Team integration through a GraphQL API Gateway connecting the web interface to user, catalogue and cart services.",
                  "Deployment architecture with Docker and Kubernetes on Google Kubernetes Engine: service replicas and load balancing for horizontal scaling."
                ],
                fr: [
                  "API REST d'inscription, de connexion et de gestion des utilisateurs et rôles avec TypeScript, Express, MongoDB/Mongoose, bcrypt et JWT.",
                  "Intégration en équipe via une API Gateway GraphQL reliant l'interface web aux services utilisateurs, catalogue et panier.",
                  "Architecture de déploiement avec Docker et Kubernetes sur Google Kubernetes Engine : réplication des services et équilibrage de charge pour la montée en charge horizontale."
                ]
              },
              links: [
                {
                  href: "https://github.com/orgs/Arquitectura-de-Software-2023i/repositories",
                  label: { es: "Repositorios del equipo", en: "Team repositories", fr: "Dépôts de l'équipe" }
                }
              ],
              tags: ["TypeScript", "Node.js", "Express", "GraphQL", "MongoDB", "JWT", "Microservices", "Docker", "Kubernetes", "GKE", "JMeter"]
            }
          ]
        },
        {
          name: { es: "Lenguajes de Programación", en: "Programming Languages", fr: "Langages de programmation" },
          items: [
            {
              id: "small-basic-python-translator",
              area: "software",
              level: "standard",
              kind: { es: "Prototipo académico en equipo · con Ángel Peñarredonda y Nicol Guerrero", en: "Academic team prototype · with Ángel Peñarredonda and Nicol Guerrero", fr: "Prototype académique en équipe · avec Ángel Peñarredonda et Nicol Guerrero" },
              title: { es: "Traductor de Small Basic a Python", en: "Small Basic-to-Python Translator", fr: "Traducteur de Small Basic vers Python" },
              dateLabel: { es: "May. 2023", en: "May 2023", fr: "Mai 2023" },
              intro: {
                es: "Prototipo que traduce un subconjunto de Small Basic a Python mediante una gramática ANTLR y un recorrido del árbol sintáctico implementado en Java.",
                en: "A prototype that translates a subset of Small Basic into Python through an ANTLR grammar and a Java parse-tree traversal.",
                fr: "Prototype traduisant un sous-ensemble de Small Basic vers Python grâce à une grammaire ANTLR et au parcours de l’arbre syntaxique en Java."
              },
              bullets: {
                es: [
                  "Contribuí al desarrollo de la gramática léxica y sintáctica y de la capa de generación de código.",
                  "El equipo cubrió asignaciones, expresiones, condicionales, bucles, subrutinas, arreglos y operaciones seleccionadas de TextWindow y Stack."
                ],
                en: ["Contributed to the lexical and syntactic grammar and to the code-generation layer.", "The team covered assignments, expressions, conditionals, loops, subroutines, arrays, and selected TextWindow and Stack operations."],
                fr: [
                  "Contribution à la grammaire lexicale et syntaxique ainsi qu’à la couche de génération de code.",
                  "L’équipe a couvert les affectations, expressions, conditions, boucles, sous-routines, tableaux et certaines opérations TextWindow et Stack."
                ]
              },
              note: {
                es: "Prototipo de curso con cobertura parcial: requiere JDK y ANTLR, no incluye pruebas automatizadas ni un build reproducible y no se presenta como listo para producción.",
                en: "Course prototype with partial coverage: it requires the JDK and ANTLR, has no automated test suite or reproducible build, and is not presented as production-ready.",
                fr: "Prototype de cours à couverture partielle : il nécessite le JDK et ANTLR, ne dispose ni de tests automatisés ni d’un build reproductible, et n’est pas présenté comme prêt pour la production."
              },
              tags: ["Java", "ANTLR 4", "Parsing", "Compilers", "Python"]
            }
          ]
        },
        {
          name: { es: "Ingeniería de Software II", en: "Software Engineering II", fr: "Génie logiciel II" },
          items: [
            {
              id: "payphone-supermarket-platform",
              area: "software",
              level: "standard",
              kind: { es: "Prototipo académico · equipo de 4", en: "Academic prototype · team of 4", fr: "Prototype académique · équipe de 4" },
              title: { es: "PayPhone: comparación y compra en supermercados", en: "PayPhone: Supermarket Comparison and Shopping", fr: "PayPhone : comparaison et achat en supermarché" },
              dateLabel: { es: "2022-II", en: "2022-II", fr: "2022-II" },
              intro: {
                es: "Aplicación web full-stack para explorar productos por supermercado, administrar cuentas y ventas y completar un flujo de compra.",
                en: "A full-stack web application for exploring products by supermarket, managing accounts and sales, and completing a purchase flow.",
                fr: "Application web full-stack permettant d’explorer les produits par supermarché, de gérer les comptes et les ventes et de finaliser un parcours d’achat."
              },
              bullets: {
                es: [
                  "Contribuí a autenticación y registro, vistas administrativas, navegación, selección de supermercado, ventas e integración del flujo de PayPal.",
                  "El equipo conectó un frontend React con una API Node/Express y persistencia MySQL/Sequelize; también integró Google OAuth y correo transaccional."
                ],
                en: [
                  "Contributed to authentication and registration, admin views, navigation, supermarket selection, sales, and the PayPal flow.",
                  "The team connected a React frontend to a Node/Express API and MySQL/Sequelize persistence, with Google OAuth and transactional email integrations."
                ],
                fr: [
                  "Contribution à l’authentification et l’inscription, aux vues d’administration, à la navigation, au choix du supermarché, aux ventes et au parcours PayPal.",
                  "L’équipe a relié un frontend React à une API Node/Express et à MySQL/Sequelize, avec Google OAuth et l’envoi d’e-mails transactionnels."
                ]
              },
              note: {
                es: "Trabajo con Nicol Guerrero, Diego Rubiano y Maicol Peña. No se enlaza el código porque el prototipo conserva configuración sensible y no se presenta como listo para producción.",
                en: "Built with Nicol Guerrero, Diego Rubiano, and Maicol Peña. The code is not linked because the prototype retains sensitive configuration and is not presented as production-ready.",
                fr: "Réalisé avec Nicol Guerrero, Diego Rubiano et Maicol Peña. Le code n’est pas lié, car le prototype conserve une configuration sensible et n’est pas présenté comme prêt pour la production."
              },
              tags: ["React", "Node.js", "Express", "MySQL", "Sequelize", "JWT", "PayPal"]
            }
          ]
        },
        {
          name: { es: "Ingeniería de Software I", en: "Software Engineering I", fr: "Génie logiciel I" },
          items: [
            {
              id: "home-health-care-requirements",
              area: "software",
              level: "compact",
              kind: { es: "Proyecto Scrum en equipo · contribución en requisitos", en: "Team Scrum project · requirements contribution", fr: "Projet Scrum en équipe · contribution aux exigences" },
              title: { es: "Home Health Care: agenda de atención médica", en: "Home Health Care: Medical Appointment Scheduling", fr: "Home Health Care : gestion des rendez-vous médicaux" },
              dateLabel: { es: "2021-II · Feb. 2022", en: "2021-II · Feb 2022", fr: "2021-II · Févr. 2022" },
              intro: {
                es: "Proyecto de gestión clínica desarrollado por un equipo de cinco personas. Mi aporte verificable se concentró en requisitos y casos de uso del módulo de agendas médicas.",
                en: "A clinical-management project developed by a five-person team. My verifiable contribution focused on requirements and use cases for the medical scheduling module.",
                fr: "Projet de gestion clinique réalisé par une équipe de cinq personnes. Ma contribution vérifiable porte sur les exigences et cas d’usage du module de planification médicale."
              },
              bullets: {
                es: [
                  "Participé en la definición del alcance funcional de creación, cancelación y reprogramación de citas dentro del proceso Scrum.",
                  "El sistema del equipo incluyó roles, historias clínicas y paneles con Spring Boot, Thymeleaf, JPA y PostgreSQL."
                ],
                en: [
                  "Participated in defining the functional scope for creating, canceling, and rescheduling appointments within the Scrum process.",
                  "The team system included roles, clinical records, and dashboards built with Spring Boot, Thymeleaf, JPA, and PostgreSQL."
                ],
                fr: [
                  "Participation à la définition du périmètre fonctionnel de création, annulation et reprogrammation des rendez-vous dans le processus Scrum.",
                  "Le système de l’équipe comprenait rôles, dossiers médicaux et tableaux de bord avec Spring Boot, Thymeleaf, JPA et PostgreSQL."
                ]
              },
              note: {
                es: "Trabajo con Brayan Aponte, Daniel Echeverri, Juan Sánchez y Maicol Peña. La implementación full-stack se acredita al equipo, no como desarrollo individual.",
                en: "Built with Brayan Aponte, Daniel Echeverri, Juan Sánchez, and Maicol Peña. Full-stack implementation is credited to the team, not claimed as individual development.",
                fr: "Réalisé avec Brayan Aponte, Daniel Echeverri, Juan Sánchez et Maicol Peña. L’implémentation full-stack est attribuée à l’équipe, pas revendiquée comme développement individuel."
              },
              tags: ["Requirements", "Scrum", "UML", "Spring Boot", "PostgreSQL"]
            }
          ]
        }
      ]
    }
  ],

  skills: [
    {
      icon: "code",
      name: { es: "Lenguajes de programación", en: "Programming Languages", fr: "Langages de programmation" },
      items: ["Python", "TypeScript", "JavaScript", "SQL", "Java", "Go", "Scala", "C#", "C", "C++", "Rust", "R"]
    },
    {
      icon: "server",
      name: { es: "Backend, web y APIs", en: "Backend, Web & APIs", fr: "Backend, web et API" },
      items: ["Django", "FastAPI", "Flask", "Node.js", "Express", "Spring Boot", "React", "Tailwind CSS", "REST", "GraphQL", "gRPC", "SOAP", "API Gateway", "OIDC / SSO", "JWT", "LDAP", "HTTP/HTTPS"]
    },
    {
      icon: "layers",
      name: { es: "Ingeniería de datos", en: "Data Engineering", fr: "Data engineering" },
      items: ["Databricks Lakehouse", "Delta Lake", "Lakeflow", "Databricks Workflows", "PySpark", "Spark Streaming", "Apache Kafka", "RabbitMQ", "Hue", "ETL", "Medallion Architecture", "Pandas", "NumPy"]
    },
    {
      icon: "brain",
      name: { es: "IA y machine learning", en: "AI & Machine Learning", fr: "IA et machine learning" },
      items: ["RAG", "Azure OpenAI Service", "Azure AI Search", "Ollama", "ChromaDB", "RAG Evaluation", "Qdrant", "PyTorch", "TensorFlow", "Scikit-learn"]
    },
    {
      icon: "database",
      name: { es: "Bases de datos", en: "Databases", fr: "Bases de données" },
      items: ["PostgreSQL", "MySQL", "Oracle DB", "MongoDB", "Azure Cosmos DB"]
    },
    {
      icon: "cloud",
      name: { es: "Nube y plataformas", en: "Cloud & Platforms", fr: "Cloud et plateformes" },
      items: ["Microsoft Azure", "Google Cloud", "AWS", "Databricks", "Azure AI", "AWS S3", "Blob Storage", "Cloud Run", "Cloud Storage", "Google Kubernetes Engine"]
    },
    {
      icon: "wrench",
      name: { es: "DevOps y herramientas", en: "DevOps & Tools", fr: "DevOps et outils" },
      items: ["Docker", "Kubernetes", "CI/CD", "Git", "Linux", "Virtualization", "Apache Tika", "Selenium", "JMeter", "Fuzzing"]
    },
    {
      icon: "chart",
      name: { es: "BI y visualización", en: "BI & Visualization", fr: "BI et visualisation" },
      items: ["Power BI", "Tableau", "Azure Synapse Analytics"]
    },
    {
      icon: "users",
      name: { es: "Prácticas de ingeniería", en: "Engineering Practices", fr: "Pratiques d'ingénierie" },
      items: ["Software Architecture", "Microservices", "Distributed Systems", "Design Patterns", "Automated Testing", "Observability", "Scalability", "Technical Documentation", "Scrum", "Jira"]
    }
  ],

  certifications: {
    linkedinUrl: "https://www.linkedin.com/in/manueldmaya/",
    groups: [
      {
        issuer: "Databricks",
        icon: "database",
        items: [
          { title: "SQL Programming and Procedural Logic", image: "assets/img/certifications/114655b7-9efe-4409-af7e-087469b34727.png", date: { y: 2026, m: 7, d: 3 }, id: "114655b7-9efe-4409-af7e-087469b34727", url: "https://credentials.databricks.com/114655b7-9efe-4409-af7e-087469b34727#acc.6xX8T4uG", skills: ["SQL", "Procedural Logic"], more: 3, type: "knowledge" },
          { title: "Data Modeling Strategies", image: "assets/img/certifications/9b2ce181-f0c0-4cf0-ac5f-451a8e49c4a3.png", date: { y: 2026, m: 7, d: 3 }, id: "9b2ce181-f0c0-4cf0-ac5f-451a8e49c4a3", url: "https://credentials.databricks.com/9b2ce181-f0c0-4cf0-ac5f-451a8e49c4a3#acc.1bSHqWf7", skills: ["Data Modeling", "Databricks Lakehouse"], more: 3, type: "knowledge" },
          { title: "SQL Analytics on Databricks", image: "assets/img/certifications/354cc497-d8d8-4b93-969a-9d5844f6d3d6.png", date: { y: 2026, m: 6, d: 30 }, id: "354cc497-d8d8-4b93-969a-9d5844f6d3d6", url: "https://credentials.databricks.com/354cc497-d8d8-4b93-969a-9d5844f6d3d6#acc.3ZDBMp4i", skills: ["Data Analytics", "SQL"], more: 2, type: "knowledge" },
          { title: "AI/BI for Data Analysts", image: "assets/img/certifications/0bc96eac-b205-4fc9-9708-a46feb37d0e8.png", date: { y: 2026, m: 6, d: 22 }, id: "0bc96eac-b205-4fc9-9708-a46feb37d0e8", url: "https://credentials.databricks.com/0bc96eac-b205-4fc9-9708-a46feb37d0e8#acc.1BaIqtSN", skills: ["Data Analysis", "Dashboards"], more: 3, type: "knowledge" },
          { title: "Advanced Techniques with Spark Declarative Pipeline", image: "assets/img/certifications/2dc6c100-66ba-4c32-8336-ef714a39aeee.png", date: { y: 2026, m: 5, d: 28 }, id: "2dc6c100-66ba-4c32-8336-ef714a39aeee", url: "https://credentials.databricks.com/2dc6c100-66ba-4c32-8336-ef714a39aeee#acc.UZDW0eLS", skills: ["Data Ingestion", "Change Data Capture"], more: 3, type: "knowledge" },
          { title: "DevOps Essentials for Data Engineering", image: "assets/img/certifications/85084cc6-3680-41d9-ae9b-8816537b438e.png", date: { y: 2026, m: 5, d: 25 }, id: "85084cc6-3680-41d9-ae9b-8816537b438e", url: "https://credentials.databricks.com/85084cc6-3680-41d9-ae9b-8816537b438e#acc.hN2ygt6I", skills: ["Code Quality", "Version Control"], more: 3, type: "knowledge" },
          { title: "Build Data Pipelines with Lakeflow Spark Declarative Pipelines", image: "assets/img/certifications/073feb06-c9a6-47a6-80b1-4d0a9e091225.png", date: { y: 2026, m: 5, d: 20 }, id: "073feb06-c9a6-47a6-80b1-4d0a9e091225", url: "https://credentials.databricks.com/073feb06-c9a6-47a6-80b1-4d0a9e091225#acc.8YsUEZh3", skills: ["Data Pipeline Development", "Incremental Processing"], more: 3, type: "knowledge" },
          { title: "Deploy Workloads with Lakeflow Jobs", image: "assets/img/certifications/1725cc92-c4d4-4979-8cf5-18db72f3d579.png", date: { y: 2026, m: 5, d: 12 }, id: "1725cc92-c4d4-4979-8cf5-18db72f3d579", url: "https://credentials.databricks.com/1725cc92-c4d4-4979-8cf5-18db72f3d579#acc.Sn1JxDBZ", skills: ["Data Workflow Orchestration", "Directed Acyclic Graphs (DAGs)"], more: 3, type: "knowledge" },
          { title: "Data Ingestion with Lakeflow Connect", image: "assets/img/certifications/15f63aa7-68df-4357-a75b-7f5f3110522a.png", date: { y: 2026, m: 4, d: 23 }, id: "15f63aa7-68df-4357-a75b-7f5f3110522a", url: "https://credentials.databricks.com/15f63aa7-68df-4357-a75b-7f5f3110522a#acc.HnzS7hyi", skills: ["Data Ingestion", "Batch Processing"], more: 3, type: "knowledge" },
          { title: "Databricks Fundamentals", image: "assets/img/certifications/a771c437-6f8c-4f1e-aaba-0e619149f339.png", date: { y: 2026, m: 4, d: 22 }, id: "a771c437-6f8c-4f1e-aaba-0e619149f339", url: "https://credentials.databricks.com/a771c437-6f8c-4f1e-aaba-0e619149f339#acc.P3Q1bIMv", skills: ["Databricks Products", "Data Intelligence Platform"], more: 1, type: "knowledge" }
        ]
      },
      {
        issuer: "Google Cloud Skills Boost",
        icon: "cloud",
        items: [
          { title: "Deploy Multi-Agent Architectures", image: "assets/img/certifications/daef43b2-a398-4cbb-a286-42c7536c7e5a.png", date: { y: 2026, m: 6, d: 1 }, id: "daef43b2-a398-4cbb-a286-42c7536c7e5a", url: "https://www.credly.com/badges/daef43b2-a398-4cbb-a286-42c7536c7e5a/public_url", skills: ["AI Agents", "Authentication Protocols"], more: 2, type: "micro" },
          { title: "Build a Data Mesh with Dataplex", image: "assets/img/certifications/2be5d2be-1584-49ba-a831-72ddb22ef5c8.png", date: { y: 2026, m: 6, d: 1 }, id: "2be5d2be-1584-49ba-a831-72ddb22ef5c8", url: "https://www.credly.com/badges/2be5d2be-1584-49ba-a831-72ddb22ef5c8/public_url", skills: ["Data Governance", "Data Security"], more: 2, type: "micro" },
          { title: "Build Infrastructure with Terraform on Google Cloud", image: "assets/img/certifications/2f7449ce-a5a4-481f-9b68-b1b69b432314.png", date: { y: 2026, m: 5, d: 29 }, id: "2f7449ce-a5a4-481f-9b68-b1b69b432314", url: "https://www.credly.com/badges/2f7449ce-a5a4-481f-9b68-b1b69b432314/public_url", skills: ["Google Cloud Platform (GCP)", "Infrastructure as Code (IaC)"], more: 1, type: "micro" },
          { title: "Build a Data Warehouse with BigQuery", image: "assets/img/certifications/23c64912-0e53-4e1c-a10e-0acacf2b245b.png", date: { y: 2026, m: 5, d: 29 }, id: "23c64912-0e53-4e1c-a10e-0acacf2b245b", url: "https://www.credly.com/badges/23c64912-0e53-4e1c-a10e-0acacf2b245b/public_url", skills: ["Data Ingestion", "Google BigQuery"], more: 2, type: "micro" }
        ]
      },
      {
        issuer: "Amazon Web Services",
        icon: "layers",
        items: [
          { title: "AWS Knowledge: Events and Workflows", image: "assets/img/certifications/2164b5fb-3039-4144-b774-44e15b46616d.png", date: { y: 2026, m: 6, d: 2 }, id: "2164b5fb-3039-4144-b774-44e15b46616d", url: "https://www.credly.com/badges/2164b5fb-3039-4144-b774-44e15b46616d/public_url", skills: ["Amazon Web Services (AWS)", "Amazon Simple Notification Service (SNS)"], more: 5, type: "knowledge" },
          { title: "AWS Data Streaming Demonstrated", image: "assets/img/certifications/aaee56f9-279f-4536-bf48-f86186a41f00.png", date: { y: 2026, m: 8 }, expires: { y: 2027, m: 8 }, id: "aaee56f9-279f-4536-bf48-f86186a41f00", url: "https://www.credly.com/badges/aaee56f9-279f-4536-bf48-f86186a41f00/public_url", skills: ["Data Streaming", "Data Analytics"], more: 5, type: "micro" },
          { title: "AWS Application Networking Demonstrated", image: "assets/img/certifications/7de83ced-bc4d-4d0a-9914-9a5c1d5d2619.png", date: { y: 2026, m: 8 }, expires: { y: 2027, m: 8 }, id: "7de83ced-bc4d-4d0a-9914-9a5c1d5d2619", url: "https://www.credly.com/badges/7de83ced-bc4d-4d0a-9914-9a5c1d5d2619/public_url", skills: ["Application Deployment", "Application Planning"], more: 8, type: "micro" },
          { title: "AWS Data Lakehouse Demonstrated", image: "assets/img/certifications/9714fc7c-2b08-47fa-b6f6-01a1240f5526.png", date: { y: 2026, m: 8 }, expires: { y: 2027, m: 8 }, id: "9714fc7c-2b08-47fa-b6f6-01a1240f5526", url: "https://www.credly.com/badges/9714fc7c-2b08-47fa-b6f6-01a1240f5526/public_url", skills: ["Amazon Web Services (AWS)", "Business Simulation"], more: 4, type: "micro" },
          { title: "AWS Serverless Demonstrated", image: "assets/img/certifications/0ff238fc-3873-49c0-8f63-84d0fc849289.png", date: { y: 2026, m: 6, d: 2 }, expires: { y: 2027, m: 6, d: 2 }, id: "0ff238fc-3873-49c0-8f63-84d0fc849289", url: "https://www.credly.com/badges/0ff238fc-3873-49c0-8f63-84d0fc849289/public_url", skills: ["Serverless Architecture", "Amazon Web Services (AWS)"], more: 10, type: "micro" }
        ]
      },
      {
        issuer: "Microsoft",
        icon: "wrench",
        items: [
          { title: "Microsoft Certified: Azure Databricks Data Engineer Associate", image: "assets/img/certifications/7876D68B7A1A1662-associate.png", date: { y: 2026, m: 8, d: 8 }, expires: { y: 2027, m: 8, d: 9 }, id: "7876D68B7A1A1662", number: "V999C6-2F54E2", url: "https://learn.microsoft.com/api/credentials/share/en-us/ManuelDavidMayaRosero-0838/7876D68B7A1A1662?sharingId=FCD4C3BA1908034B", skills: ["Azure Databricks", "Data Engineering"], more: 0, type: "certification" },
          { title: "Implement a Real-Time Intelligence solution with Microsoft Fabric", image: "assets/img/certifications/2BA2378B50BBFAD6-enhanced.png", date: { y: 2026, m: 6 }, id: "2BA2378B50BBFAD6", url: "https://learn.microsoft.com/api/credentials/share/en-us/ManuelDavidMayaRosero-0838/2BA2378B50BBFAD6?sharingId=FCD4C3BA1908034B", skills: ["Microsoft Fabric", "Data Streaming"], more: 3, type: "applied" }
        ]
      },
      {
        issuer: "Cognitive Class",
        icon: "code",
        items: [
          { title: "Data Visualization with Python", image: "assets/img/certifications/53f53dae04674ad4ac3e741edc44d0d7.png", date: { y: 2022, m: 9, d: 4 }, id: "53f53dae04674ad4ac3e741edc44d0d7", url: "https://courses.cognitiveclass.ai/certificates/53f53dae04674ad4ac3e741edc44d0d7", skills: ["Python", "Data Visualization"], more: 0, type: "knowledge" },
          { title: "Data Analysis with Python", image: "assets/img/certifications/35f212d48511469e956f4140b937e380.png", date: { y: 2022, m: 9 }, id: "35f212d48511469e956f4140b937e380", url: "https://courses.cognitiveclass.ai/certificates/35f212d48511469e956f4140b937e380", skills: ["Python", "Data Analysis"], more: 0, type: "knowledge" },
          { title: "Python for Data Science", image: "assets/img/certifications/ee33a8cf64f54cae8db02705747e0b0b.png", date: { y: 2022, m: 9 }, id: "ee33a8cf64f54cae8db02705747e0b0b", url: "https://courses.cognitiveclass.ai/certificates/ee33a8cf64f54cae8db02705747e0b0b", skills: ["Python", "Data Science"], more: 0, type: "knowledge" }
        ]
      }
    ]
  },

  languages: [
    { name: { es: "Español", en: "Spanish", fr: "Espagnol" }, level: { es: "Nativo", en: "Native", fr: "Natif" }, fill: 5 },
    { name: { es: "Inglés", en: "English", fr: "Anglais" }, level: { es: "C1", en: "C1", fr: "C1" }, fill: 4 },
    { name: { es: "Francés", en: "French", fr: "Français" }, level: { es: "C1", en: "C1", fr: "C1" }, fill: 4 }
  ]
};
