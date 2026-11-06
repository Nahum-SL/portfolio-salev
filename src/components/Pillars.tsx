import Reveal from './Reveal'
import { pillars } from '../data/content'

export default function Pillars() {
  return (
    <section className="border-y border-beige-200/80 bg-beige-100 py-12">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <Reveal>
          <div className="grid grid-cols-2 gap-8 divide-x divide-beige-200/60 text-center md:grid-cols-4">
            {pillars.map(({ icon: Icon, title, text }) => (
              <div key={title} className="px-4">
                <Icon className="mx-auto mb-2 h-6 w-6 text-beige-500" />
                <h3 className="font-serif text-lg font-semibold text-charcoal-300">{title}</h3>
                <p className="mt-1 text-xs text-charcoal-100">{text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
