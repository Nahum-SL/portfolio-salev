import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Menu, Send, X } from 'lucide-react'
import { navLinks, profile } from '../data/content'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 z-40 w-full border-b border-beige-200/50 bg-cream-50/80 py-4 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 sm:px-8">
        <a href="#" className="group flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-beige-300 font-serif text-sm font-bold text-charcoal-300 shadow-sm transition-colors group-hover:bg-beige-400">
            {profile.initial}
          </span>
          <span className="font-serif text-xl font-semibold tracking-tight text-charcoal-300">
            {profile.name}
            <span className="font-normal text-beige-500">{profile.suffix}</span>
          </span>
        </a>

        <div className="hidden items-center space-x-8 text-sm font-medium text-charcoal-200 md:flex">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-beige-500">
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 rounded-full bg-charcoal-300 px-5 py-2.5 text-xs font-semibold tracking-wider text-cream-50 uppercase shadow-sm transition-all duration-300 hover:bg-charcoal-200 hover:shadow"
          >
            <Send className="h-3.5 w-3.5" />
            <span>Contactar</span>
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          className="rounded-lg p-2 text-charcoal-300 hover:bg-beige-100 focus:outline-none md:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-b border-beige-200 bg-cream-50 md:hidden"
          >
            <div className="flex flex-col space-y-4 px-6 py-6 font-medium text-charcoal-200">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-1 transition-colors hover:text-beige-500"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contacto"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-charcoal-300 px-5 py-3 text-xs font-semibold tracking-wider text-cream-50 uppercase"
              >
                <Send className="h-3.5 w-3.5" />
                <span>Contactar</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
