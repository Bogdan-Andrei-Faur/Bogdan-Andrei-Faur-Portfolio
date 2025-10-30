import { motion as m } from "framer-motion";
import { IconBrandGithub, IconRocket } from "@tabler/icons-react";

function Chip({ label }: { label: string }) {
  return (
    <span className="bg-white/90 border border-black/10 px-2 py-1 rounded-full text-xs text-black/75">
      {label}
    </span>
  );
}

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

export default function Projects() {
  return (
    <section className="relative bg-transparent py-24 px-4">
      <div className="max-w-[1200px] mx-auto">
        <m.header
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <div className="inline-flex items-center gap-2 justify-center text-white">
            <IconRocket size={28} color="#fff" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Proyectos
            </h2>
          </div>
          <p className="mt-2 text-white/80 max-w-2xl mx-auto">
            Casos de estudio seleccionados que reflejan mi trabajo end‑to‑end.
          </p>
        </m.header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {PROJECTS.map((p, idx) => (
            <m.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
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
          ))}
        </div>
      </div>
    </section>
  );
}
