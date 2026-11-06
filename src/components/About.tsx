import { Check, Cpu, GraduationCap, Sparkles, type LucideIcon } from 'lucide-react'
import Reveal from './Reveal'
import { about } from '../data/content'

interface SkillGroupProps {
  icon: LucideIcon
  title: string
  items: string[]
  variant: 'hard' | 'soft'
}

function SkillGroup({ icon: Icon, title, items, variant }: SkillGroupProps) {
  const pill =
    variant === 'hard'
      ? 'border border-beige-200 bg-white text-charcoal-200 shadow-2xs'
      : 'bg-beige-200 text-charcoal-300'
  return (
    <div>
      <h3 className="mb-3 flex items-center gap-2 font-serif text-xl text-charcoal-300">
        <Icon className="h-5 w-5 text-beige-500" />
        <span>{title}</span>
      </h3>
      <div className="flex flex-wrap gap-2">
        {items.map((s) => (
          <span key={s} className={`rounded-full px-3 py-1.5 text-xs font-medium ${pill}`}>
            {s}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function About() {
  const { education } = about
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-24 sm:px-8">
      <div className="grid items-center gap-12 md:grid-cols-12">
        <Reveal className="space-y-4 md:col-span-5">
          <span className="text-xs font-bold tracking-widest text-beige-500 uppercase">
            Sobre Mí
          </span>
          <h2 className="font-serif text-3xl text-charcoal-300 sm:text-4xl">{about.title}</h2>
          <div className="h-0.5 w-16 bg-beige-300" />
          <p className="pt-2 text-sm leading-relaxed text-charcoal-100">{about.text}</p>

          <div className="space-y-3 pt-4">
            {about.points.map((p) => (
              <div key={p.title} className="flex items-start gap-3">
                <div className="mt-0.5 rounded-md bg-beige-200 p-1">
                  <Check className="h-4 w-4 text-charcoal-300" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-charcoal-300">{p.title}</h4>
                  <p className="text-xs text-charcoal-100">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15} className="md:col-span-7">
          <div className="space-y-8 rounded-3xl border border-beige-200 bg-cream-100/80 p-8 shadow-sm">
            <div>
              <h3 className="mb-4 flex items-center gap-2 font-serif text-xl text-charcoal-300">
                <GraduationCap className="h-5 w-5 text-beige-500" />
                <span>Educación</span>
              </h3>
              <div className="space-y-4 border-l-2 border-beige-200 pl-4">
                <div>
                  <span className="text-xs font-medium text-beige-500">{education.period}</span>
                  <h4 className="text-sm font-bold text-charcoal-300">{education.degree}</h4>
                  <p className="text-xs text-charcoal-100">{education.school}</p>
                </div>
              </div>
            </div>

            <SkillGroup
              icon={Cpu}
              title="Competencias Técnicas (Hard Skills)"
              items={about.hardSkills}
              variant="hard"
            />
            <SkillGroup
              icon={Sparkles}
              title="Habilidades Blandas (Soft Skills)"
              items={about.softSkills}
              variant="soft"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
