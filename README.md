# Portfolio — Bogdan Andrei Faur

Portfolio personal construido con React + TypeScript y Vite. UI moderna con Tailwind CSS, animaciones sutiles y una escena 3D diferida para que cargue rápido. Desplegado automáticamente en GitHub Pages con dominio propio.

- Demo: https://andreifaur.dev
- Código: https://github.com/Bogdan-Andrei-Faur/Bogdan-Andrei-Faur-Portfolio

## Características

- React 19 + Vite + TypeScript
- Tailwind CSS 4 para estilos utilitarios
- Animaciones con Framer Motion
- Hero 3D con Three.js (@react-three/fiber), cargado bajo demanda (lazy)
- Componentes reutilizables (Chip, SectionHeader) y memoización en tarjetas
- Optimización de rendimiento: lazy loading, code splitting, IntersectionObserver, reducción de JS no usado
- SEO listo: meta description, Open Graph, Twitter Cards, `robots.txt`, `sitemap.xml`, canonical
- CI/CD con GitHub Actions → GitHub Pages
- Health check: `GET /health.json`

## Requisitos

- Node.js 20+
- npm 10+ (o pnpm/yarn si lo prefieres)

## Inicio rápido

```bash
git clone https://github.com/Bogdan-Andrei-Faur/Bogdan-Andrei-Faur-Portfolio.git
cd Bogdan-Andrei-Faur-Portfolio
npm ci
npm run dev
```

Build de producción y previsualización local:

```bash
npm run build
npm run preview
```

## Estructura (resumen)

```
public/
  CNAME              # dominio personalizado
  robots.txt
  sitemap.xml
  health.json
src/
  components/
    Dock.tsx
  pages/
    Home/
      Home.tsx
      ThreeScene.tsx
    About/
    Experience/
    Projects/
    Education/
    Contact/
```

## Despliegue

El repositorio incluye un workflow (`.github/workflows/deploy.yml`) que:

- Instala dependencias y compila
- Sube `dist/` como artifact
- Despliega a GitHub Pages
- Añade `CNAME` con `andreifaur.dev`

Si reutilizas este repositorio:

- Cambia o elimina `public/CNAME` y/o el paso "Add CNAME" del workflow
- Actualiza URLs en `index.html` (canonical, og:url, twitter:url)
- Actualiza `robots.txt` y `sitemap.xml` con tu dominio
- Revisa `public/health.json` (nombre del servicio)

## SEO y rendimiento

- Metas completas en `index.html` (description, OG/Twitter, canonical)
- `robots.txt` + `sitemap.xml` servidos desde `public/`
- La escena 3D se carga de forma diferida tras idle/interacción
- Intersecciones y memoización para evitar renders innecesarios

## Licencia

- Código: MIT (consulta `LICENSE`).
- Contenido (textos, imágenes, logotipo, CV, recursos gráficos): CC BY-NC-ND 4.0 (consulta `LICENSE-CONTENT`).
- Terceros: React, Vite, Tailwind CSS, Three.js y Tabler Icons (todas MIT).

## Contacto

- Web: https://andreifaur.dev
- Email: bogdan.andrei.faur@gmail.com
