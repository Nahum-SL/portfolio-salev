import {
  TrendingUp,
  ChartColumn,
  Layers,
  Users,
  FileSpreadsheet,
  SquareKanban,
  ChartPie,
  Globe,
} from 'lucide-react'
import type {
  AboutData,
  Certification,
  ContactData,
  Highlight,
  NavLink,
  Pillar,
  Profile,
  Project,
} from '../types'

// ---------------------------------------------------------------
// Todo el contenido editable del portafolio vive en este archivo.
// OJO: los datos son de ejemplo (generados por Gemini). Reemplázalos
// por los reales de la alumna antes de publicar.
// ---------------------------------------------------------------

export const profile: Profile = {
  name: 'Marcia Salazar',
  initial: 'M',
  suffix: ' ° SL',
  availability: 'Disponible para Prácticas Pre-Profesionales',
  career: 'Administración de Empresas',
  heroImage:
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
  badge: { title: 'Quinto Superior', subtitle: 'Senati' },
  cvUrl: '#contacto', // cambiar por '/cv-marcia.pdf' (poner el PDF en /public)
  year: 2026,
}

export const navLinks: NavLink[] = [
  { href: '#hero', label: 'Inicio' },
  { href: '#about', label: 'Sobre Mí' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#certificaciones', label: 'Certificaciones' },
  { href: '#contacto', label: 'Contacto' },
]

export const highlights: Highlight[] = [
  { value: '9.4/10', label: 'Promedio Académico' },
  { value: '12+', label: 'Casos de Negocio' },
  { value: '4+', label: 'Certificaciones' },
]

export const pillars: Pillar[] = [
  { icon: TrendingUp, title: 'Planificación Estratégica', text: 'Diagnóstico & OKRs' },
  { icon: ChartColumn, title: 'Análisis Financiero', text: 'Valorización & Presupuestos' },
  { icon: Layers, title: 'Gestión de Procesos', text: 'Metodologías Ágiles & Lean' },
  { icon: Users, title: 'Liderazgo de Equipos', text: 'Gestión del Talento' },
]

export const about: AboutData = {
  title: 'Visión analítica enfocada en resultados sostenibles',
  text: 'Mi formación en Administración de Empresas combina sólidas competencias cuantitativas con una perspectiva orientada a las personas. Me apasiona identificar ineficiencias en procesos organizacionales y transformarlas en oportunidades de crecimiento rentable.',
  points: [
    {
      title: 'Enfoque Data-Driven',
      text: 'Toma de decisiones respaldada por tableros de Power BI y modelos financieros Excel.',
    },
    {
      title: 'Adaptabilidad & Agilidad',
      text: 'Experiencia en marcos Scrum y Kanban para proyectos universitarios e interinstitucionales.',
    },
  ],
  education: {
    period: '2021 - Actualidad (8º Ciclo)',
    degree: 'Licenciatura en Administración de Empresas',
    school: 'Universidad del Pacífico / Universidad de Lima • Tercio Superior',
  },
  hardSkills: [
    'Excel Avanzado (VBA & Macros)',
    'Power BI & Tableau',
    'SAP ERP (Módulos FI/CO Intro)',
    'Modelamiento Financiero',
    'SPSS & Estadística Aplicada',
    'Gestión de Proyectos (PMBOK)',
  ],
  softSkills: [
    'Pensamiento Crítico',
    'Comunicación Persuasiva',
    'Negociación',
    'Resolución de Problemas',
    'Trabajo Multidisciplinario',
  ],
}

export const projects: Project[] = [
  {
    id: 'ecopack',
    category: 'Plan de Negocios',
    eyebrow: 'Proyecto de Emprendimiento & Sostenibilidad',
    title: 'EcoPack Solutions: Reestructuración Estratégica',
    summary:
      'Diseño e implementación de un modelo de negocio sostenible enfocado en empaques biodegradables para el sector retail.',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    role: 'Líder de Estrategia Comercial y Valoración Financiera (Equipo de 4 integrantes).',
    description:
      'Desarrollo de un modelo de negocio orientado a sustituir empaques plásticos de un solo uso en cadenas de supermercados locales por alternativas de polímeros biodegradables.',
    results: [
      'VAN proyectado a 5 años positivo con TIR del 24.5%.',
      'Premio al Mejor Proyecto de Innovación Sostenible del semestre universitario.',
      'Estrategia de Go-To-Market validada mediante 150 encuestas a stakeholders clave.',
    ],
  },
  {
    id: 'supply-chain',
    category: 'Gestión de Operaciones',
    eyebrow: 'Gestión de Procesos & Operaciones',
    title: 'Optimización de Cadena de Suministro Pyme',
    summary:
      'Mapeo de procesos BPMN y reducción de tiempos de ciclo en un 22% mediante metodologías Lean Manufacturing.',
    image:
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800',
    role: 'Analista de Procesos Lean.',
    description:
      'Diagnóstico operativo utilizando diagramas SIPOC y VSM (Value Stream Mapping) para una distribuidora textil de 30 empleados.',
    results: [
      'Identificación de 3 cuellos de botella críticos en el proceso de almacenamiento.',
      'Reducción del lead time de despachos en un 22%.',
      'Propuesta de automatización de inventarios implementada mediante Excel VBA.',
    ],
  },
  {
    id: 'valoracion',
    category: 'Finanzas Corporativas',
    eyebrow: 'Análisis & Finanzas Corporativas',
    title: 'Valoración Financiera & Análisis de Riesgo',
    summary:
      'Modelo de flujos de caja descontados (DCF) y simulación Montecarlo para una empresa del sector agroindustrial.',
    image:
      'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800',
    role: 'Analista Financiero Individual.',
    description:
      'Construcción de un modelo integral de proyección de Estados Financieros y valoración por Flujo de Caja Libre Descontado (FCFF) para una empresa agroexportadora.',
    results: [
      'Cálculo del WACC ajustado según riesgo país y sectorial.',
      'Análisis de sensibilidad mediante tablas de doble entrada y escenarios probabilísticos.',
      'Calificación máxima (20/20) en la asignatura de Finanzas Corporativas II.',
    ],
  },
]

export const certifications: Certification[] = [
  {
    icon: FileSpreadsheet,
    issuer: 'Microsoft / LinkedIn',
    title: 'Excel Avanzado & Dashboards',
    text: 'Power Query, Tablas Dinámicas complejas y Macros VBA.',
    date: 'Emitido: Sep 2024',
  },
  {
    icon: SquareKanban,
    issuer: 'Scrum Alliance',
    title: 'Scrum Fundamentals Certified',
    text: 'Gestión de proyectos ágiles y facilidades de Sprints.',
    date: 'Emitido: Jun 2024',
  },
  {
    icon: ChartPie,
    issuer: 'DataCamp',
    title: 'Power BI Data Analyst',
    text: 'Modelamiento DAX y visualización estratégica de datos.',
    date: 'Emitido: Mar 2024',
  },
  {
    icon: Globe,
    issuer: 'Cambridge English',
    title: 'Inglés Avanzado C1',
    text: 'Competencia fluida profesional conversacional y escrita.',
    date: 'Vigente',
  },
]

export const contact: ContactData = {
  title: '¿Interesado en mi perfil para tus proyectos?',
  text: 'Estoy en búsqueda de oportunidades de prácticas pre-profesionales en las áreas de Planeamiento Estratégico, Operaciones o Analítica Financiera.',
  email: 'marcia.salazar@email.com',
  linkedin: { label: 'linkedin.com/in/marcia-salazar', url: 'https://linkedin.com' },
  whatsapp: { label: '+51 987 654 321', url: 'https://wa.me/51987654321' },
}
