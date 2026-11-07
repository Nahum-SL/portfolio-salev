import { useCallback, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ExternalLink, ZoomIn } from "lucide-react";
import Reveal from "./Reveal";
import Lightbox from "./LightBox";

import { certificationLabels as labels, certifications } from "../data/content";

import { fadeUp, inView, stagger } from "../lib/motion";
import type { Shot } from "../types";

export default function Certifications() {
  const [zoomed, setZoomed] = useState<Shot | null>(null);
  const closeZoom = useCallback(() => setZoomed(null), []);

  if (certifications.length === 0) return null;

  return (
    <section
      id="certificaciones"
      className="mx-auto max-w-7xl px-6 py-24 sm:px-8"
    >
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
          Formación continua complementaria en herramientas tecnológicas,
          analítica de datos y metodologías ágiles.
        </p>
      </Reveal>

      <motion.div
        variants={stagger(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={inView}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {certifications.map((cert) => {
          const Icon = cert.icon;
          return (
            <motion.article
              key={cert.id}
              variants={fadeUp}
              whileHover={{
                y: -6,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-beige-200 bg-cream-50 shadow-sm 
              transition-[border-color,box-shadow] duration-300 hover:border-beige-400 hover:shadow-xl"
            >
              {cert.image ? (
                <button
                  type="button"
                  onClick={() =>
                    setZoomed({ src: cert.image!, alt: cert.title })
                  }
                  aria-label={`${labels.zoom}: ${cert.title}`}
                  className="relative cursor-zoom-in overflow-hidden bg-cream-100 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-beige-500"
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    loading="lazy"
                    className="aspect-3/2 w-full object-cover object-top transition duration-500 group-hover:scale-105"
                  />
                  <span className="glass-card absolute right-3 bottom-3 rounded-full p-2 text-charcoal-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <ZoomIn className="h-4 w-4" />
                  </span>
                </button>
              ) : (
                // Sin imagen todavía: muestra el ícono sobre un fondo beige.
                <div className="flex aspect-3/2 items-center justify-center bg-linear-to-br from-beige-100 to-beige-200">
                  <Icon
                    className="h-12 w-12 text-beige-400"
                    strokeWidth={1.5}
                  />
                </div>
              )}

              <div className="flex flex-1 flex-col p-5">
                <p className="text-[10px] font-semibold tracking-wider text-beige-500 uppercase">
                  {cert.issuer} · {cert.date}
                </p>
                <h3 className="mt-2 font-serif text-lg leading-tight font-semibold text-charcoal-300">
                  {cert.title}
                </h3>
                {cert.text && (
                  <p className="mt-2 text-xs leading-relaxed text-charcoal-100">
                    {cert.text}
                  </p>
                )}
                {cert.url && (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-auto inline-flex items-center gap-1.5 pt-4 text-xs font-semibold text-beige-500 transition-colors hover:text-charcoal-300"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    {labels.verify}
                  </a>
                )}
              </div>
            </motion.article>
          );
        })}
      </motion.div>

      <AnimatePresence>
        {zoomed && <Lightbox shot={zoomed} onClose={closeZoom} />}
      </AnimatePresence>
    </section>
  );
}
