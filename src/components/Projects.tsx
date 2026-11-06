import { useCallback, useState } from 'react'
import { AnimatePresence } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal'
import ProjectModal from './ProjectModal'
import { projects } from '../data/content'
import type { Project } from '../types'

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null)
  const close = useCallback(() => setActive(null), [])

  return (
    <section
      id="proyectos"
      className="border-t border-beige-200/80 bg-beige-100/60 px-6 py-24 sm:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto mb-16 max-w-2xl space-y-3 text-center">
          <span className="text-xs font-bold tracking-widest text-beige-500 uppercase">
            Portafolio Académico &amp; Práctico
          </span>
          <h2 className="font-serif text-3xl text-charcoal-300 sm:text-4xl">
            Proyectos Destacados
          </h2>
          <p className="text-sm text-charcoal-100">
            Haz clic en cualquier proyecto para explorar los detalles del caso, metodologías y
            resultados.
          </p>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.1} className="h-full">
              <button
                onClick={() => setActive(p)}
                className="group flex h-full w-full cursor-pointer flex-col justify-between overflow-hidden rounded-2xl border border-beige-200 bg-cream-50 text-left shadow-sm transition-all duration-300 hover:shadow-xl"
              >
                <div>
                  <div className="relative h-48 overflow-hidden bg-beige-200">
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3 rounded-full border border-beige-200 bg-cream-50/90 px-3 py-1 text-[11px] font-semibold text-charcoal-300">
                      {p.category}
                    </div>
                  </div>
                  <div className="space-y-3 p-6">
                    <h3 className="font-serif text-xl text-charcoal-300 transition-colors group-hover:text-beige-500">
                      {p.title}
                    </h3>
                    <p className="line-clamp-3 text-xs leading-relaxed text-charcoal-100">
                      {p.summary}
                    </p>
                  </div>
                </div>
                <div className="mx-6 mt-4 flex items-center justify-between border-t border-beige-100 pt-2 pb-6">
                  <span className="text-xs font-medium text-beige-500">Ver Detalle del Caso</span>
                  <ArrowRight className="h-4 w-4 text-charcoal-300 transition-transform group-hover:translate-x-1" />
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && <ProjectModal key={active.id} project={active} onClose={close} />}
      </AnimatePresence>
    </section>
  )
}
