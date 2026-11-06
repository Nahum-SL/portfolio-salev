import { useEffect, useState, type FormEvent, type ReactNode } from 'react'
import { Mail, MessageSquare } from 'lucide-react'
import Reveal from './Reveal'
import { contact } from '../data/content'

// lucide-react ya no incluye iconos de marca (LinkedIn), usamos un SVG propio.
function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  )
}

const inputClass =
  'w-full rounded-xl border border-beige-200 bg-white px-4 py-3 text-sm text-charcoal-300 transition-colors focus:border-beige-400 focus:outline-none'
const labelClass =
  'mb-2 block text-xs font-semibold tracking-wider text-charcoal-300 uppercase'

interface ContactLinkProps {
  href: string
  icon: ReactNode
  label: string
  value: string
  external?: boolean
}

function ContactLink({ href, icon, label, value, external }: ContactLinkProps) {
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
      className="flex items-center gap-4 rounded-xl border border-beige-200 bg-cream-50 p-4 transition-colors hover:border-beige-300"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-beige-200 text-charcoal-300">
        {icon}
      </div>
      <div>
        <p className="text-xs text-charcoal-100">{label}</p>
        <p className="text-sm font-semibold text-charcoal-300">{value}</p>
      </div>
    </a>
  )
}

export default function Contact() {
  const [sent, setSent] = useState(false)

  useEffect(() => {
    if (!sent) return
    const t = setTimeout(() => setSent(false), 4000)
    return () => clearTimeout(t)
  }, [sent])

  // TODO: conectar a un servicio real (Formspree, EmailJS, Web3Forms...).
  // Por ahora solo simula el envío, igual que el HTML original.
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    e.currentTarget.reset()
    setSent(true)
  }

  return (
    <section id="contacto" className="border-t border-beige-200 bg-beige-100 px-6 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-12">
          <Reveal className="space-y-6 md:col-span-5">
            <span className="text-xs font-bold tracking-widest text-beige-500 uppercase">
              Conectemos
            </span>
            <h2 className="font-serif text-3xl text-charcoal-300 sm:text-4xl">{contact.title}</h2>
            <p className="text-sm leading-relaxed text-charcoal-100">{contact.text}</p>

            <div className="space-y-4 pt-4">
              <ContactLink
                href={`mailto:${contact.email}`}
                icon={<Mail className="h-5 w-5" />}
                label="Correo Electrónico"
                value={contact.email}
              />
              <ContactLink
                href={contact.linkedin.url}
                icon={<LinkedinIcon className="h-5 w-5" />}
                label="LinkedIn"
                value={contact.linkedin.label}
                external
              />
              <ContactLink
                href={contact.whatsapp.url}
                icon={<MessageSquare className="h-5 w-5" />}
                label="WhatsApp Directo"
                value={contact.whatsapp.label}
                external
              />
            </div>
          </Reveal>

          <Reveal delay={0.15} className="md:col-span-7">
            <div className="rounded-3xl border border-beige-200 bg-cream-50 p-8 shadow-sm sm:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="nombre" className={labelClass}>
                      Nombre Completo
                    </label>
                    <input
                      id="nombre"
                      type="text"
                      required
                      placeholder="Ej: Maria García"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="empresa" className={labelClass}>
                      Empresa / Organización
                    </label>
                    <input
                      id="empresa"
                      type="text"
                      placeholder="Ej: Consultora XYZ"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="correo" className={labelClass}>
                    Correo de Contacto
                  </label>
                  <input
                    id="correo"
                    type="email"
                    required
                    placeholder="maria@empresa.com"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="mensaje" className={labelClass}>
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    rows={4}
                    required
                    placeholder="Escribe tu consulta o propuesta..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-charcoal-300 py-4 text-xs font-semibold tracking-widest text-cream-50 uppercase shadow-md transition-all hover:bg-charcoal-200"
                >
                  Enviar Mensaje
                </button>

                {sent && (
                  <div
                    role="status"
                    className="rounded-xl bg-emerald-100 p-3 text-center text-xs font-medium text-emerald-800"
                  >
                    ¡Gracias por tu mensaje! Me pondré en contacto muy pronto.
                  </div>
                )}
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
