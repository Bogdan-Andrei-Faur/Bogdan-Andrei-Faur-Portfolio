import { motion as m } from "framer-motion";
import { IconBrandGithub, IconRocket } from "@tabler/icons-react";
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
};

const PROJECTS: Project[] = [
  {
    title: "MindScan",
    period: "2025",
    summary: "Plataforma web de análisis psicológico, reporting y exportación.",
    bullets: [
      "Arquitectura full‑stack, autenticación y roles.",
      "Métricas y paneles con Chart.js; reporting descargable.",
      "Entrega en producción con CI/CD y control de calidad.",
    ],
    tech: [
      "React",
      "Tailwind CSS",
      "Chart.js",
      "Framer Motion",
      "Node.js",
      "Express",
      "Jest",
      "PostgreSQL",
      "Prisma",
      "CI/CD",
    ],
  },
  {
    title: "Web corporativa en Astro",
    period: "2024",
    summary:
      "Migración completa desde WordPress a Astro con mejoras de SEO y performance.",
    bullets: [
      "Reducción de tiempo de carga y mejor puntuación en Lighthouse.",
      "Contenido estático optimizado y despliegue continuo.",
      "Automatización básica de imágenes con Cloudinary.",
    ],
    tech: ["Astro", "React", "i18n", "CI/CD", "Cloudinary"],
  },
  {
    title: "PWA para evento corporativo",
    period: "2024",
    summary:
      "Transmisión en vivo, comentarios, descarga de certificados y agenda interactiva.",
    bullets: [
      "Streaming embebido con comentarios moderados en tiempo real.",
      "Agenda interactiva con recordatorios para charlas y paneles.",
      "Generación y descarga de certificados personalizados para asistentes.",
    ],
    tech: ["PWA", "Streaming", "Automatizaciones", "Certificados"],
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
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
      {p.link && (
        <a
          href={p.link}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 mt-3 text-sm text-black/80 border border-black/10 rounded-full px-3 py-1 bg-white/85 hover:bg-white transition"
        >
          <IconBrandGithub size={16} /> Ver repositorio
        </a>
      )}
    </m.article>
  );
}

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
