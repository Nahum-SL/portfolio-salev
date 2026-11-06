import Reveal from './Reveal'
import { certifications } from '../data/content'

export default function Certifications() {
  return (
    <section id="certificaciones" className="mx-auto max-w-7xl px-6 py-24 sm:px-8">
      <Reveal className="mb-12 flex flex-col justify-between md:flex-row md:items-end">
        <div>
          <span className="text-xs font-bold tracking-widest text-beige-500 uppercase">
            Respaldo Académico
          </span>
          <h2 className="mt-2 font-serif text-3xl text-charcoal-300 sm:text-4xl">
            Certificaciones &amp; Diplomas
          </h2>
        </div>
        <p className="mt-4 max-w-md text-sm text-charcoal-100 md:mt-0">
          Formación continua complementaria en herramientas tecnológicas, analítica de datos y
          metodologías ágiles.
        </p>
      </Reveal>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {certifications.map(({ icon: Icon, issuer, title, text, date }, i) => (
          <Reveal key={title} delay={i * 0.08} className="h-full">
            <div className="h-full space-y-4 rounded-2xl border border-beige-200 bg-cream-100/60 p-6 transition-all hover:border-beige-300">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-beige-200 bg-white text-beige-500 shadow-2xs">
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <span className="text-[10px] font-semibold tracking-wider text-beige-500 uppercase">
                  {issuer}
                </span>
                <h3 className="mt-0.5 font-serif text-base font-semibold text-charcoal-300">
                  {title}
                </h3>
                <p className="mt-2 text-xs text-charcoal-100">{text}</p>
              </div>
              <div className="border-t border-beige-200/60 pt-2 text-[11px] font-medium text-charcoal-200">
                {date}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
