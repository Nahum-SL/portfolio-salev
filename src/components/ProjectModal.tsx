import { useEffect } from 'react'
import { motion } from 'motion/react'
import { X } from 'lucide-react'
import type { Project } from '../types'

interface ProjectModalProps {
  project: Project
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [onClose])

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal-400/50 p-4 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.97 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-beige-200 bg-cream-50 p-6 shadow-2xl sm:p-8"
      >
        <button
          onClick={onClose}
          aria-label="Cerrar"
          className="absolute top-6 right-6 rounded-full bg-beige-100 p-2 text-charcoal-300 transition-colors hover:bg-beige-200"
        >
          <X className="h-5 w-5" />
        </button>

        <span className="pr-12 text-xs font-semibold tracking-wider text-beige-500 uppercase">
          {project.eyebrow}
        </span>
        <h3
          id="modal-title"
          className="mt-1 mb-4 font-serif text-2xl text-charcoal-300 sm:text-3xl"
        >
          {project.title}
        </h3>

        <img
          src={project.image}
          alt={project.title}
          className="mb-6 h-56 w-full rounded-2xl object-cover"
        />

        <div className="space-y-4 text-xs leading-relaxed text-charcoal-200">
          <div>
            <h4 className="mb-1 text-sm font-bold text-charcoal-300">Rol en el proyecto:</h4>
            <p className="text-charcoal-100">{project.role}</p>
          </div>
          <div>
            <h4 className="mb-1 text-sm font-bold text-charcoal-300">Descripción del Caso:</h4>
            <p className="text-charcoal-100">{project.description}</p>
          </div>
          <div>
            <h4 className="mb-1 text-sm font-bold text-charcoal-300">Resultados Obtenidos:</h4>
            <ul className="list-disc space-y-1 pl-5 text-charcoal-100">
              {project.results.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 flex justify-end border-t border-beige-200 pt-4">
          <button
            onClick={onClose}
            className="rounded-full bg-charcoal-300 px-6 py-2.5 text-xs font-semibold text-cream-50"
          >
            Cerrar
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}
