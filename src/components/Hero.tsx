import { motion, type Variants } from 'motion/react'
import { ArrowUpRight, Award, Download } from 'lucide-react'
import { highlights, profile } from '../data/content'

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}
const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-32 pb-20 sm:px-8 md:pt-40 md:pb-28"
    >
      <div className="grid w-full items-center gap-12 md:grid-cols-12 lg:gap-16">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-6 text-left md:col-span-7"
        >
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-beige-200 bg-beige-100 px-3.5 py-1.5 text-xs font-medium tracking-wide text-charcoal-200"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            <span>{profile.availability}</span>
          </motion.div>

          <motion.h1
            variants={item}
            className="font-serif text-4xl leading-[1.15] font-normal text-charcoal-300 sm:text-5xl lg:text-6xl"
          >
            Estrategia, Optimización &amp;{' '}
            <span className="font-serif text-beige-500 italic">Liderazgo</span> Empresarial.
          </motion.h1>

          <motion.p
            variants={item}
            className="max-w-xl text-base leading-relaxed font-light text-charcoal-100 sm:text-lg"
          >
            Estudiante de 8º ciclo de {profile.career} apasionada por el análisis de datos, la
            eficiencia operativa y el diseño de modelos de negocio sostenibles.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#proyectos"
              className="inline-flex items-center gap-2.5 rounded-full bg-charcoal-300 px-7 py-3.5 text-sm font-medium text-cream-50 shadow-md transition-all duration-300 hover:bg-charcoal-200 hover:shadow-lg"
            >
              <span>Ver Portafolio</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href={profile.cvUrl}
              className="inline-flex items-center gap-2.5 rounded-full border border-beige-300 bg-beige-100 px-7 py-3.5 text-sm font-medium text-charcoal-300 transition-all duration-300 hover:bg-beige-200"
            >
              <Download className="h-4 w-4 text-beige-500" />
              <span>Descargar CV</span>
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="grid grid-cols-3 gap-4 border-t border-beige-200/80 pt-8 text-center sm:text-left"
          >
            {highlights.map((h) => (
              <div key={h.label}>
                <p className="font-serif text-2xl font-semibold text-charcoal-300">{h.value}</p>
                <p className="mt-1 text-xs text-charcoal-100">{h.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="flex justify-center md:col-span-5"
        >
          <div className="relative w-full max-w-sm">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-beige-300 to-beige-100 opacity-60 blur-lg" />
            <div className="relative overflow-hidden rounded-3xl border border-beige-200 bg-cream-100 p-3 shadow-xl">
              <img
                src={profile.heroImage}
                alt={`${profile.name} - Estudiante de ${profile.career}`}
                className="h-[420px] w-full rounded-2xl object-cover contrast-105 grayscale transition-all duration-700 hover:grayscale-0"
              />
              <div className="glass-card absolute right-6 bottom-6 left-6 flex items-center gap-3 rounded-xl border-white/80 p-4 shadow-lg">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-beige-200">
                  <Award className="h-5 w-5 text-charcoal-300" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-charcoal-300">{profile.badge.title}</p>
                  <p className="text-[11px] text-charcoal-100">{profile.badge.subtitle}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
