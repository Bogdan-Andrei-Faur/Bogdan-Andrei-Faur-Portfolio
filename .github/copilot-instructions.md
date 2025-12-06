# GitHub Copilot Instructions - Portfolio Bogdan Andrei Faur

## Información del Proyecto

Este es un portfolio personal profesional construido como una Single Page Application (SPA) con React, TypeScript y Vite. El objetivo principal es presentar las habilidades, experiencia, proyectos y educación de Bogdan Andrei Faur como Full Stack Developer.

### Stack Tecnológico Principal

- **Frontend Framework**: React 19.2.1
- **Lenguaje**: TypeScript 5.9.3
- **Build Tool**: Vite 7.1.7
- **Estilos**: TailwindCSS 4.1.16 (con plugin de Vite)
- **Animaciones**: Framer Motion (paquete `motion` 12.23.24)
- **3D Graphics**: Three.js 0.180.0 con @react-three/fiber 9.4.0
- **Routing**: React Router DOM 7.9.4
- **Iconos**: @tabler/icons-react 3.35.0
- **Linter**: ESLint 9 con TypeScript ESLint

### Arquitectura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── Chip.tsx        # Tag/badge para tecnologías
│   ├── Dock.tsx        # Navegación flotante inferior
│   └── SectionHeader.tsx # Encabezados de sección con icono
├── layouts/
│   └── MainLayout.tsx  # Layout principal con lazy loading de secciones
├── pages/
│   ├── Home/           # Hero con escena 3D (Three.js)
│   ├── About/          # Información personal y skills
│   ├── Experience/     # Historial laboral
│   ├── Projects/       # Proyectos destacados
│   ├── Education/      # Formación académica
│   └── Contact/        # Información de contacto
├── assets/             # Recursos estáticos
├── App.tsx             # Componente raíz con router
├── main.tsx            # Entry point
└── index.css           # Estilos globales + importación de Tailwind
```

## Convenciones de Código

### TypeScript

1. **Strict Mode**: El proyecto usa TypeScript en modo estricto
2. **Tipos explícitos**: Siempre define tipos para props de componentes
3. **Type vs Interface**: Preferir `type` para props de componentes, `interface` solo cuando se necesite extensión
4. **Naming**: 
   - Componentes: PascalCase (ej: `SectionHeader`)
   - Tipos: PascalCase con sufijo descriptivo si aplica (ej: `SectionHeaderProps`)
   - Variables/funciones: camelCase
   - Constantes: UPPER_SNAKE_CASE para arrays/objetos de datos estáticos

### React

1. **Componentes Funcionales**: Todos los componentes deben ser funcionales (no class components)
2. **Memo**: Usar `memo()` para componentes de tarjetas/items que se renderizan en listas (ej: `EducationCard`, `ProjectCard`)
3. **Lazy Loading**: Las páginas se cargan con `lazy()` en `MainLayout.tsx`
4. **Hooks**:
   - Preferir `useCallback` para funciones pasadas como props
   - Usar `useMemo` para cálculos costosos (ej: distribución en columnas)
   - `useRef` para referencias DOM o valores mutables sin re-render

### Estilos con TailwindCSS

1. **Utility-First**: Priorizar clases de utilidad de Tailwind
2. **Responsive Design**: Mobile-first con breakpoints (`sm:`, `md:`, `lg:`)
3. **Glassmorphism**: Patrón visual principal:
   ```tsx
   bg-white/70 backdrop-blur-md border border-white/90 rounded-xl shadow-[0_4px_16px_rgba(0,0,0,0.08)]
   ```
4. **Color Palette**: Fondo oscuro (#242424), contenido sobre vidrio blanco/transparente, texto negro con opacidad
5. **No CSS Modules**: Solo usar CSS modules cuando sea absolutamente necesario (ver `styles.module.css` en algunas páginas)

### Animaciones (Framer Motion)

1. **Import**: Usar `import { motion as m } from "framer-motion"`
2. **Componentes animados**: Prefijo `m.` (ej: `m.div`, `m.article`)
3. **Patrones comunes**:
   ```tsx
   // Fade up en scroll
   initial={{ opacity: 0, y: 20 }}
   whileInView={{ opacity: 1, y: 0 }}
   viewport={{ once: true, margin: "-60px" }}
   transition={{ duration: 0.5 }}
   
   // Stagger en listas
   transition={{ duration: 0.5, delay: index * 0.05 }}
   ```
4. **Performance**: Animar solo `opacity`, `scale`, `x`, `y` (propiedades que no causan reflow)

### Estructura de Datos

1. **Secciones principales** (Experience, Projects, Education):
   - Definir tipo de item (ej: `ExperienceItem`, `Project`)
   - Array constante en UPPER_SNAKE_CASE (ej: `EXPERIENCE_ITEMS`, `PROJECTS`)
   - Componente de tarjeta memoizado con props del item + index

2. **Skills/Tecnologías**: Array de objetos con `name` e `icon` (ReactNode de Tabler Icons)

### Accesibilidad

1. Siempre incluir `alt` en imágenes
2. Usar atributos ARIA cuando sea necesario (`aria-label`, `aria-expanded`)
3. Asegurar contraste de color adecuado (texto negro/blanco sobre fondos con opacidad)
4. Links externos con `target="_blank"` deben incluir `rel="noreferrer"`

### Rendimiento

1. **Lazy Loading**: 
   - Páginas: `lazy(() => import("./pages/..."))`
   - Three.js: Carga diferida tras idle o 1s en Home
2. **Code Splitting**: Automático con Vite + lazy imports
3. **Memoización**: `memo()` en componentes de lista, `useMemo`/`useCallback` donde aplique
4. **IntersectionObserver**: Para controlar visibilidad de secciones (ver Home, Dock)

### SEO (en `index.html`)

- Meta description actualizada
- Open Graph tags
- Twitter Cards
- Canonical URL
- `robots.txt`, `sitemap.xml` en `/public`

## Reglas Específicas para GitHub Copilot

### Al crear nuevos componentes:

```tsx
// ✅ CORRECTO
import { memo } from "react";
import { motion as m } from "framer-motion";
import type { ReactNode } from "react";

type MyComponentProps = {
  title: string;
  icon: ReactNode;
  optional?: string;
};

export default function MyComponent({ title, icon, optional }: MyComponentProps) {
  return (
    <m.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="bg-white/70 backdrop-blur-md rounded-xl p-4"
    >
      {icon}
      <h2>{title}</h2>
    </m.div>
  );
}

// Si se renderiza en lista:
const MyCard = memo(function MyCard(props: MyComponentProps) {
  // ...
});
```

### Al modificar secciones de contenido:

1. **Experience**: Actualizar `EXPERIENCE_ITEMS` en `/src/pages/Experience/Experience.tsx`
2. **Projects**: Actualizar `PROJECTS` en `/src/pages/Projects/Projects.tsx`
3. **Education**: Actualizar `EDUCATION` en `/src/pages/Education/Education.tsx`
4. **About**: Actualizar `SKILLS`, `VALUES` en `/src/pages/About/About.tsx`

### Al añadir nuevas tecnologías/skills:

```tsx
// En About.tsx - SKILLS array
{ 
  name: "NombreTecnología", 
  icon: <IconNombre size={32} stroke={1.5} /> 
}

// Importar el icono desde @tabler/icons-react
import { IconNombre } from "@tabler/icons-react";
```

### Al trabajar con navegación (Dock):

- Mantener sincronizado `BUTTONS` en `Dock.tsx` con las secciones en `MainLayout.tsx`
- Cada sección debe tener `id` que coincida con `section` en BUTTONS
- El Dock usa IntersectionObserver para detectar sección activa

### Al agregar animaciones:

- Preferir `whileInView` sobre `animate` para elementos que aparecen en scroll
- Usar `viewport={{ once: true }}` para evitar re-animaciones
- Añadir `margin: "-60px"` para que empiece antes de ser visible
- Stagger delays: `index * 0.05` para listas pequeñas, `index * 0.02` para listas grandes

### Gestión de imágenes:

- Imágenes en Cloudinary (ver `About.tsx` - foto de perfil)
- SVG/WebP preferidos sobre PNG/JPG
- Siempre incluir `loading="lazy"` y `decoding="async"`
- Especificar `width` y `height` para evitar CLS

### Testing y Build:

```bash
# Desarrollo
npm run dev          # Inicia en http://localhost:5173 (con --host)

# Producción
npm run build        # TypeScript check + Vite build
npm run preview      # Preview del build

# Linting
npm run lint         # ESLint
```

## Información de Contenido (NO MODIFICAR sin consultar)

### Datos Personales

- **Nombre**: Bogdan Andrei Faur
- **Rol actual**: Full Stack Developer (ex-Responsable de IT en Petroshore Compliance)
- **Email**: bogdan.andrei.faur@gmail.com
- **LinkedIn**: https://www.linkedin.com/in/bogdan-andrei-faur/
- **GitHub**: https://github.com/Bogdan-Andrei-Faur
- **Portfolio Web**: https://andreifaur.dev
- **Ubicación**: Huesca, España
- **Idiomas**: Español (nativo), Rumano (nativo), Inglés (B1)

### Experiencia Laboral Actual (última actualización: 6 dic 2025)

1. **Petroshore Compliance** (Mar 2024 — Dic 2025) - Responsable de IT & Full Stack Developer (Team Lead)
2. **Caravana Social (ONG)** (Ago 2023 — Sep 2023) - Full Frontend Developer (Bootcamp +800h)
3. **Autónomo** (Abr 2020 — Abr 2023) - Transporte de mercancías ligeras
4. **Ecomputer S.L.** (May 2019 — Jun 2019) - Técnico de sistemas informáticos (Prácticas)

### Proyectos Destacados

1. **PixFlow** - Editor de imágenes PWA
2. **Portfolio personal** - Este sitio
3. **MindScan** - Plataforma SaaS psicológica
4. **Web corporativa Petroshore Compliance** - Astro + TailwindCSS
5. **Proyecto Full Stack - Caravana Social** - React + Node.js (Bootcamp)

### Stack Tecnológico Completo

**Frontend**: HTML, CSS, JavaScript, TypeScript, React, React Native, Astro, Redux, TailwindCSS, i18n, Chart.js, Framer Motion, Three.js

**Backend**: Node.js, Express, PostgreSQL, Prisma, Sequelize, JWT, Puppeteer

**DevOps/Infraestructura**: Git, GitHub, CI/CD, GitHub Actions, NGINX, PM2, Ubuntu, VPS, Cloudinary, OpenAI API

**IA/Python**: Python, FastAPI, Transformers (Hugging Face), PyTorch, Scikit-learn, Unicorn, PIL/Pillow

## Patrones de Diseño Específicos del Proyecto

### Sistema de Columnas Responsivas (Experience/Projects)

```tsx
// Hook personalizado para columnas adaptativas
function useResponsiveColumns() {
  const [cols, setCols] = useState(1);
  useEffect(() => {
    const update = () => {
      const lg = window.matchMedia("(min-width: 1024px)").matches;
      const sm = window.matchMedia("(min-width: 640px)").matches;
      setCols(lg ? 3 : sm ? 2 : 1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return cols;
}

// Distribución de items en columnas
const columns: Item[][] = useMemo(() => {
  const arr: Item[][] = Array.from({ length: numCols }, () => []);
  ITEMS.forEach((item, idx) => {
    arr[idx % numCols].push(item);
  });
  return arr;
}, [numCols]);
```

### Tarjetas Expandibles (Experience)

- Estado `expanded` con `useState`
- Detección de overflow con `useRef` + `useEffect`
- Botón "Ver más/menos" condicional
- Máscara CSS gradient cuando está colapsado

### Escena 3D (Home/ThreeScene)

- Lazy loading del componente Three.js
- Carga diferida con `requestIdleCallback` o timeout 1s
- Control de visibilidad con IntersectionObserver
- Opacidad controlada por scroll (useScroll + useTransform)

### Dock de Navegación

- Posición fija en bottom center
- Detección de sección activa con scroll + requestAnimationFrame
- Smooth scroll a secciones con `scrollIntoView`
- Glassmorphism con backdrop-blur

## Comandos Git/GitHub

El proyecto usa GitHub Actions para deploy automático a GitHub Pages:

```bash
# Workflow: .github/workflows/deploy.yml
# Trigger: push a main
# Output: https://andreifaur.dev (via CNAME)
```

## Mejores Prácticas al Generar Código

1. **Siempre usar TypeScript estricto** - No `any`, definir todos los tipos
2. **Componentes puros** - Evitar side effects innecesarios
3. **Accesibilidad** - Atributos semánticos y ARIA cuando aplique
4. **Performance** - Lazy loading, memo, código limpio
5. **Consistencia** - Seguir patrones existentes en el proyecto
6. **Responsive** - Mobile-first, probar en diferentes viewports
7. **Animaciones sutiles** - No exagerar, mantener UX fluida
8. **SEO-friendly** - Meta tags, textos descriptivos, estructura semántica

## Debugging y Troubleshooting

### Build errors comunes:

- **TypeScript errors**: Verificar tipos, imports, versión de TS
- **Vite config**: Asegurar plugins correctos (react, tailwindcss)
- **Missing dependencies**: Ejecutar `npm ci` para instalación limpia

### Runtime errors comunes:

- **Three.js**: Verificar que se cargue lazy y con Suspense
- **Router**: Verificar rutas y BrowserRouter
- **Animations**: Verificar importación correcta de framer-motion

### Performance issues:

- **Bundle size**: Revisar imports, usar lazy loading
- **Render loops**: Verificar dependencias de useEffect/useMemo
- **Memory leaks**: Limpiar listeners en cleanup functions

---

**Última actualización**: 6 de diciembre de 2025  
**Versión del proyecto**: 1.0.0  
**Mantenedor**: Bogdan Andrei Faur
