import {
  TrendingUp,
  ChartColumn,
  Layers,
  Users,
  Presentation,
  Target,
} from "lucide-react";
import type {
  AboutData,
  Certification,
  ContactData,
  Highlight,
  NavLink,
  Pillar,
  Profile,
  Project,
  CertificationLabels,
} from "../types";

// ---------------------------------------------------------------
// Todo el contenido editable del portafolio vive en este archivo.
// OJO: los datos son de ejemplo (generados por Gemini). Reemplázalos
// por los reales de la alumna antes de publicar.
// ---------------------------------------------------------------

export const profile: Profile = {
  name: "Marcia Salazar",
  initial: "M",
  suffix: " ° SL",
  availability: "Disponible para Prácticas Pre-Profesionales",
  career: "Administración de Empresas",
  heroImage:"/marcia-foto.webp",
  badge: { title: "Quinto Semestre", subtitle: "Senati" },
  cvUrl: "/cv.pdf", // cambiar por '/cv-marcia.pdf' (poner el PDF en /public)
  cvFileName: "CV-Marcia.pdf",
  year: 2026,
};

export const navLinks: NavLink[] = [
  { href: "#hero", label: "Inicio" },
  { href: "#about", label: "Sobre Mí" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#certificaciones", label: "Certificaciones" },
  { href: "#contacto", label: "Contacto" },
];

export const highlights: Highlight[] = [
  { value: "17.5/20", label: "Promedio Académico" },
  { value: "1+", label: "Casos de Negocio" },
  { value: "3+", label: "Certificaciones" },
];

export const pillars: Pillar[] = [
  {
    icon: TrendingUp,
    title: "Planificación Estratégica",
    text: "Diagnóstico & OKRs",
  },
  {
    icon: ChartColumn,
    title: "Análisis Financiero",
    text: "Valorización & Presupuestos",
  },
  {
    icon: Layers,
    title: "Gestión de Procesos",
    text: "Metodologías Ágiles & Lean",
  },
  { icon: Users, title: "Liderazgo de Equipos", text: "Gestión del Talento" },
];

export const about: AboutData = {
  title: "Visión analítica enfocada en resultados sostenibles",
  text: `
  Mi formación en Administración de Empresas combina sólidas competencias 
  cuantitativas con una perspectiva orientada a las personas. Me apasiona identificar 
  ineficiencias en procesos organizacionales y transformarlas en oportunidades de crecimiento rentable.
  `,
  points: [
    {
      title: "Gestion de macros y sistemas en Excel",
      text: "Toma de decisiones respaldada por modelos financieros Excel.",
    },
  ],
  education: {
    period: "2024 - Actualidad (5º Semestre)",
    degree: "Profesional en Administración de Empresas",
    school: "Universidad del Pacífico / Universidad de Lima • Tercio Superior",
  },
  hardSkills: [
    "Excel Avanzado (Macros)",
    "Power BI & Tableau",
    "SAP ERP (Módulos FI/CO Intro)",
    "Modelamiento Financiero",
    "SPSS & Estadística Aplicada",
    "Gestión de Proyectos (PMBOK)",
  ],
  softSkills: [
    "Pensamiento Crítico",
    "Comunicación Persuasiva",
    "Negociación",
    "Resolución de Problemas",
    "Trabajo Multidisciplinario",
  ],
};

export const projects: Project[] = [
  {
    id: "ecopack",
    category: "Plan de Negocios",
    eyebrow: "Proyecto de Emprendimiento & Sostenibilidad",
    title: "EcoPack Solutions: Reestructuración Estratégica",
    summary:
      "Diseño e implementación de un modelo de negocio sostenible enfocado en empaques biodegradables para el sector retail.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    role: "Líder de Estrategia Comercial y Valoración Financiera (Equipo de 4 integrantes).",
    description:
      "Desarrollo de un modelo de negocio orientado a sustituir empaques plásticos de un solo uso en cadenas de supermercados locales por alternativas de polímeros biodegradables.",
    results: [
      "VAN proyectado a 5 años positivo con TIR del 24.5%.",
      "Premio al Mejor Proyecto de Innovación Sostenible del semestre universitario.",
      "Estrategia de Go-To-Market validada mediante 150 encuestas a stakeholders clave.",
    ],
  },
];

export const certificationLabels: CertificationLabels = {
  verify: 'Verificar',
  zoom: 'Ampliar',
}

// Para mostrar el certificado real: guardar la imagen (.webp) en /public/certificates
// y agregar `image: '/certificates/excel.webp'`. Opcional: `url` para el enlace "Verificar".
export const certifications: Certification[] = [
  // ... tus certificaciones anteriores (Excel, Scrum, PowerBI) si deseas mantenerlas ...
  {
    id: 'recursos-humanos',
    icon: Users,
    issuer: 'Fundación Romero / UPC',
    title: 'Recursos Humanos',
    text: 'Curso especializado de 06 horas académicas avalado por la UPC.',
    date: '2024 - 2026', // Reemplaza por la fecha exacta de emisión de tu certificado
    image: "/cert-1.webp", // Ajusta la ruta de tu imagen en /public
  },
  {
    id: 'estrategias-motivacion',
    icon: Target,
    issuer: 'Fundación Romero',
    title: 'Estrategias de motivación del personal',
    text: 'Capacitación en técnicas y enfoques para potenciar el compromiso (09 horas académicas).',
    date: '2024 - 2026',
    image: "/cert-2.webp",
  },
  {
    id: 'aprendizaje-virtual',
    icon: Presentation,
    issuer: 'Becas Grupo Romero / Fundación Romero',
    title: 'Aumenta el compromiso con programas de aprendizaje virtual',
    text: 'Optimización de metodologías de enseñanza y engagement digital (07 horas académicas).',
    date: '2024 - 2026',
    image: "/cert-3.webp",
  },
]

export const contact: ContactData = {
  title: "¿Interesado en mi perfil para tus proyectos?",
  text: "Estoy en búsqueda de oportunidades de prácticas pre-profesionales en las áreas de Planeamiento Estratégico, Operaciones o Analítica Financiera.",
  email: "marciasalazarlevano15@gmail.com",
  linkedin: {
    label: "linkedin.com/in/marcia-salazar",
    url: "https://linkedin.com",
  },
  whatsapp: { label: "+51 997 252 758", url: "https://wa.me/51987654321" },
};
