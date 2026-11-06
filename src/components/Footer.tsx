import { profile } from '../data/content'

export default function Footer() {
  return (
    <footer className="border-t border-beige-200 bg-cream-50 py-8 text-center text-xs text-charcoal-100">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p>
          © {profile.year} {profile.name} — Todos los derechos reservados.
        </p>
        <p className="font-serif text-beige-500 italic">Administración &amp; Estrategia Empresarial</p>
      </div>
    </footer>
  )
}
