# Portafolio – Administración

Vite + React + TypeScript + Tailwind CSS v4 + motion + lucide-react (pnpm).

## Primer arranque

```bash
pnpm add react react-dom motion lucide-react
pnpm add -D vite @vitejs/plugin-react tailwindcss @tailwindcss/vite typescript @types/react @types/react-dom
pnpm dev
```

## Estructura

- `src/data/content.ts`: todo el texto, proyectos, certificaciones y contacto. Es el único archivo que hay que tocar para cambiar contenido.
- `src/types.ts`: interfaces de los datos (`Project`, `Certification`, etc.).
- `src/components/`: una sección por componente (`Hero`, `About`, `Projects`, `Certifications`, `Contact`...).
- `src/index.css`: tema Tailwind (colores `cream`, `beige`, `charcoal` y fuentes) en el bloque `@theme`.

## Pendiente antes de publicar

- Reemplazar los datos de ejemplo por los reales (nombre, notas, proyectos, certificaciones, contacto).
- Cambiar las fotos de Unsplash por fotos propias (poner en `public/`).
- Subir el CV en PDF a `public/` y apuntar `profile.cvUrl`.
- Conectar el formulario de contacto a un servicio real (ahora solo simula el envío).
