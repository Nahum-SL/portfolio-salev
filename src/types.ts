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
  icon: LucideIcon
  issuer: string
  title: string
  text: string
  date: string
}

export interface ContactData {
  title: string
  text: string
  email: string
  linkedin: { label: string; url: string }
  whatsapp: { label: string; url: string }
}
