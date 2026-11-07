import type { LucideIcon } from 'lucide-react'

export interface Profile {
  name: string
  initial: string
  suffix: string
  availability: string
  career: string
  heroImage: string
  badge: { title: string; subtitle: string }
  cvUrl: string
  cvFileName: string
  year: number
}

export interface NavLink {
  href: string
  label: string
}

export interface Highlight {
  value: string
  label: string
}

export interface Pillar {
  icon: LucideIcon
  title: string
  text: string
}

export interface AboutData {
  title: string
  text: string
  points: { title: string; text: string }[]
  education: { period: string; degree: string; school: string }
  hardSkills: string[]
  softSkills: string[]
}

export interface Project {
  id: string
  category: string
  eyebrow: string
  title: string
  summary: string
  image: string
  role: string
  description: string
  results: string[]
}

export interface Certification {
  id: string
  title: string
  /** Quién lo emite, ej. "Microsoft", "DataCamp" */
  issuer: string
  /** Fecha o estado, ej. "Sep 2024" o "Vigente" */
  date: string
  /** Descripción corta (opcional) */
  text?: string
  /** Imagen del certificado, ej. "/certificates/excel.webp" (poner en /public) */
  image?: string
  /** Enlace para verificarlo (opcional) */
  url?: string
  /** Se muestra mientras no haya imagen */
  icon: LucideIcon
}

export interface CertificationLabels {
  verify: string
  zoom: string
}

export interface Shot {
  src: string
  alt: string
}

export interface ContactData {
  title: string
  text: string
  email: string
  linkedin: { label: string; url: string }
  whatsapp: { label: string; url: string }
}
