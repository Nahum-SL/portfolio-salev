import { useEffect } from "react";
import { motion } from "motion/react";
import { X } from "lucide-react";
import type { Shot } from "../types";

interface LightboxProps {
  shot: Shot;
  onClose: () => void;
}

// Visor de imagen a pantalla completa. Se cierra con Escape, clic fuera o la X.
export default function Lightbox({ shot, onClose }: LightboxProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={shot.alt}
      className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal-400/70 p-4 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
    >
      <button
        onClick={onClose}
        aria-label="Cerrar"
        className="absolute top-5 right-5 rounded-full bg-beige-100 p-2 text-charcoal-300 shadow-md transition-colors hover:bg-beige-200"
      >
        <X className="h-5 w-5" />
      </button>

      <motion.figure
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="flex max-h-full max-w-4xl flex-col items-center"
      >
        <img
          src={shot.src}
          alt={shot.alt}
          className="max-h-[80vh] w-auto max-w-full rounded-2xl border border-beige-200 bg-cream-50 object-contain shadow-2xl"
        />
        <figcaption className="mt-3 text-center text-xs font-medium text-cream-200">
          {shot.alt}
        </figcaption>
      </motion.figure>
    </motion.div>
  );
}
