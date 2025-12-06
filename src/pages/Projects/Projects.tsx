import { motion as m } from "framer-motion";
import { memo } from "react";
import {
  IconBrandGithub,
  IconRocket,
  IconExternalLink,
} from "@tabler/icons-react";
import Chip from "../../components/Chip";
import SectionHeader from "../../components/SectionHeader";

// Chip reutilizable importado desde components/Chip

type Project = {
  title: string;
  period: string;
  summary: string;
  bullets: string[];
  tech: string[];
  link?: string;
  webLink?: string;
};

const PROJECTS: Project[] = [
  {
    title: "PixFlow - Editor de imágenes (PWA)",
    period: "2025",
    summary:
      "Editor de imágenes ligero para cambiar formatos, recortar, redimensionar y aplicar ajustes. Funciona offline mediante service worker.",
    bullets: [
      "PWA completamente funcional con soporte offline.",
      "Procesamiento de imágenes en el cliente sin backend.",
      "Interfaz intuitiva y responsive.",
    ],
    tech: ["React", "TypeScript", "Vite", "PWA", "Service Worker"],
    link: "https://github.com/Bogdan-Andrei-Faur/PixFlow",
    webLink: "https://pixflow.andreifaur.dev",
  },
  {
    title: "Portfolio personal",
    period: "2025",
    summary:
      "SPA en React + TypeScript + TailwindCSS con animaciones, modelo 3D en Three.js y optimización SEO (100/100 Google Insights).",
    bullets: [
      "Diseño moderno con animaciones fluidas usando Framer Motion.",
      "Escena 3D interactiva en la página de inicio con Three.js.",
      "SEO optimizado con puntuación perfecta en Google Insights.",
    ],
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "TailwindCSS",
      "Framer Motion",
      "Three.js",
      "SEO",
    ],
    link: "https://github.com/Bogdan-Andrei-Faur/Bogdan-Andrei-Faur-Portfolio",
  },
  {
    title: "MindScan - Plataforma SaaS psicológica",
    period: "2025",
    summary:
      "Plataforma interna para diagnósticos psicológicos con panel de administración, informes, perfiles comparativos y control de roles.",
    bullets: [
      "Arquitectura full‑stack con autenticación JWT y roles de usuario.",
      "Panel de administración completo para gestión de tests y usuarios.",
      "Generación de informes descargables y perfiles comparativos.",
      "Métricas y gráficos interactivos con Chart.js.",
    ],
    tech: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "Chart.js",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "JWT",
    ],
  },
  {
    title: "Web corporativa Petroshore Compliance",
    period: "2024",
    summary:
      "Desarrollo en Astro + TailwindCSS, optimizada para rendimiento, mantenimiento y publicación de contenido.",
    bullets: [
      "Migración desde WordPress a Astro para mejor rendimiento.",
      "Optimización SEO y tiempos de carga reducidos.",
      "Sistema de internacionalización (i18n) multiidioma.",
      "Despliegue continuo y automatización con CI/CD.",
    ],
    tech: ["Astro", "React", "TailwindCSS", "i18n", "CI/CD", "Cloudinary"],
  },
  {
    title: "Proyecto Full Stack - Caravana Social (Bootcamp)",
    period: "2023",
    summary:
      "Proyecto real desarrollado para una ONG enfocada en inserción laboral. Coordiné parte del equipo (9 personas) y fui responsable principal del diseño visual y estilos.",
    bullets: [
      "Aplicación web completa con React y Redux para el frontend.",
      "Backend con Node.js, Express y PostgreSQL (Sequelize).",
      "Trabajo colaborativo en equipo de 9 personas.",
      "Responsable del diseño visual y arquitectura de estilos.",
    ],
    tech: [
      "React",
      "Redux",
      "CSS",
      "TailwindCSS",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Sequelize",
    ],
  },
];

const ProjectCard = memo(function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const p = project;
  return (
    <m.article
      key={p.title}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="bg-white/70 backdrop-blur-md border border-white/90 rounded-xl p-5 text-black shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:-translate-y-1 hover:shadow-[0_10px_24px_rgba(0,0,0,0.12)] transition"
    >
      <div className="text-sm text-black/70">{p.period}</div>
      <h3 className="text-xl font-semibold text-black/90">{p.title}</h3>
      <p className="text-black/75 mt-1">{p.summary}</p>
      <ul className="mt-2 mb-3 ml-5 grid gap-1 list-disc text-black/80">
        {p.bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        {p.tech.map((t) => (
          <Chip key={t} label={t} />
        ))}
      </div>
      {(p.link || p.webLink) && (
        <div className="flex flex-wrap gap-2 mt-3">
          {p.link && (
            <a
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-black/80 border border-black/10 rounded-full px-3 py-1 bg-white/85 hover:bg-white transition"
            >
              <IconBrandGithub size={16} /> Ver repositorio
            </a>
          )}
          {p.webLink && (
            <a
              href={p.webLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-black/80 border border-black/10 rounded-full px-3 py-1 bg-white/85 hover:bg-white transition"
            >
              <IconExternalLink size={16} /> Ver demo
            </a>
          )}
        </div>
      )}
    </m.article>
  );
});

export default function Projects() {
  return (
    <section className="relative bg-transparent py-24 px-4">
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader
          icon={<IconRocket size={28} color="#fff" />}
          title="Proyectos"
          subtitle="Casos de estudio seleccionados que reflejan mi trabajo end‑to‑end."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {PROJECTS.map((p, idx) => (
            <ProjectCard key={p.title} project={p} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
