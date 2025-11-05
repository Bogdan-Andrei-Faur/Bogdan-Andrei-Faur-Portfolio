import { motion as m } from "framer-motion";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
  memo,
  type CSSProperties,
  type ReactNode,
} from "react";
import {
  IconBriefcase2,
  IconCode,
  IconSettings,
  IconUsers,
  IconRocket,
  IconChevronDown,
  IconChevronUp,
} from "@tabler/icons-react";
import SectionHeader from "../../components/SectionHeader";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

import Chip from "../../components/Chip";

type ExperienceItem = {
  period: string;
  company: string;
  role: string;
  bullets: string[];
  tech: string[];
};

const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    period: "Mar 2024 — Actualidad",
    company: "PetroShore Compliance",
    role: "Responsable de IT & Desarrollo Web (Team Lead)",
    bullets: [
      "Liderazgo técnico del departamento de desarrollo web y coordinación de 2 programadores.",
      "Diseño de arquitecturas, BBDD y APIs con Node.js, Express y PostgreSQL (Prisma).",
      "Frontend con React y Astro: i18next, Redux Toolkit, gráficos (Chart.js).",
      "Integraciones: OpenAI API, Cloudinary, Nodemailer y automatizaciones con Puppeteer.",
      "CI/CD, despliegues y mantenimiento de entornos productivos; control de versiones con Git.",
      "Soporte IT general (sistemas, hardware y red) y cumplimiento legal en plataformas internas.",
      "Proyectos: Migración de WordPress a Astro (SEO y rendimiento), MindScan (diagnósticos y reporting)",
    ],
    tech: [
      "React",
      "Astro",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Redux",
      "i18n",
      "Chart.js",
      "OpenAI API",
      "Cloudinary",
      "Puppeteer",
      "CI/CD",
      "Git",
    ],
  },
  {
    period: "Ago 2023 — Sep 2023",
    company: "Caravana Social (ONG)",
    role: "Front‑end Developer",
    bullets: [
      "Bolsa de empleo y capacitación con foco en accesibilidad.",
      "Interfaces responsivas con React, CSS y JavaScript.",
      "Gestión de estado con Redux. Colaboración estrecha con diseño y backend.",
      "Apoyo en backend: Node.js/Express y PostgreSQL (Sequelize).",
    ],
    tech: [
      "React",
      "Redux",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Sequelize",
      "PWA",
    ],
  },
  {
    period: "Abr 2020 — Abr 2023",
    company: "Autónomo",
    role: "Transporte de mercancías ligeras",
    bullets: [
      "Gestión completa de rutas nacionales e internacionales.",
      "Atención al cliente y coordinación con múltiples stakeholders.",
      "Planificación, seguridad y entregas en tiempo.",
    ],
    tech: ["Logística", "Atención al cliente", "Planificación"],
  },
  {
    period: "May 2019 — Jun 2019",
    company: "Ecomputer S.L.",
    role: "Técnico de sistemas informáticos",
    bullets: [
      "Soporte a usuarios: hardware, software y redes.",
      "Mantenimiento preventivo y resolución de incidencias.",
      "Instalación y actualización de sistemas y periféricos.",
      "Administración básica de infraestructura y copias de seguridad.",
    ],
    tech: ["Soporte", "Redes", "Hardware", "Software"],
  },
];

type InfoCardItem = {
  icon: ReactNode;
  title: string;
  description: string;
};

const INFO_CARDS: InfoCardItem[] = [
  {
    icon: <IconSettings className="text-black/60" size={22} />,
    title: "Gestión + Desarrollo",
    description:
      "Combino responsabilidad de IT con ejecución técnica end‑to‑end.",
  },
  {
    icon: <IconCode className="text-black/60" size={22} />,
    title: "Stack moderno",
    description: "React, Astro, Node.js, Postgres, CI/CD, rendimiento y DX.",
  },
  {
    icon: <IconUsers className="text-black/60" size={22} />,
    title: "Trabajo en equipo",
    description: "Comunicación clara, ownership y foco en entregar valor.",
  },
];

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

const ExperienceCard = memo(function ExperienceCard({
  period,
  company,
  role,
  bullets,
  tech,
}: ExperienceItem) {
  const [expanded, setExpanded] = useState(false);
  const [overflowing, setOverflowing] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const check = () => {
      const el = contentRef.current;
      if (!el) return;
      setOverflowing(el.scrollHeight > el.clientHeight + 2);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [expanded, bullets.length, tech.length]);

  const maskStyle: CSSProperties | undefined = useMemo(() => {
    if (expanded || !overflowing) return undefined;
    const gradient =
      "linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,1) 48px)";
    return {
      WebkitMaskImage: gradient,
      maskImage: gradient,
    } as CSSProperties;
  }, [expanded, overflowing]);

  return (
    <m.article
      className={`relative w-full bg-white/70 backdrop-blur-md border border-white/90 rounded-xl p-5 shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition hover:-translate-y-1 hover:shadow-[0_10px_24px_rgba(0,0,0,0.12)] flex flex-col ${
        expanded ? "h-auto" : "h-[420px] sm:h-[460px] lg:h-[500px]"
      }`}
      {...fadeUp}
    >
      <div className="flex flex-col gap-1 mb-2">
        <div className="inline-flex items-center gap-1 text-[0.85rem] text-black/70">
          <IconBriefcase2 size={18} />
          <span>{period}</span>
        </div>
        <h3 className="text-xl font-semibold text-black/90">{company}</h3>
        <p className="text-black/70">{role}</p>
      </div>
      <div
        ref={contentRef}
        className={`relative overflow-hidden transition-[max-height] duration-300 flex-1 pb-6 ${
          expanded ? "max-h-[9999px]" : "max-h-72 sm:max-h-80 lg:max-h-96"
        }`}
        style={maskStyle}
      >
        <ul className="mt-2 mb-3 ml-5 grid gap-1 list-disc text-black/80">
          {bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          {tech.map((t) => (
            <Chip key={t} label={t} />
          ))}
        </div>
      </div>
      {overflowing && (
        <button
          onClick={() => setExpanded((v) => !v)}
          className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-black/80 border border-black/10 rounded-full px-3 py-1 bg-white/85 hover:bg-white transition"
          aria-expanded={expanded}
          aria-label={expanded ? "Ver menos" : "Ver más"}
        >
          {expanded ? (
            <>
              Ver menos <IconChevronUp size={16} />
            </>
          ) : (
            <>
              Ver más <IconChevronDown size={16} />
            </>
          )}
        </button>
      )}
    </m.article>
  );
});

export default function Experience() {
  const numCols = useResponsiveColumns();

  const columns: ExperienceItem[][] = useMemo(() => {
    const arr: ExperienceItem[][] = Array.from({ length: numCols }, () => []);
    EXPERIENCE_ITEMS.forEach((item, idx) => {
      arr[idx % numCols].push(item);
    });
    return arr;
  }, [numCols]);

  return (
    <section className="relative bg-transparent py-24 px-4">
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader
          icon={<IconRocket size={28} color="#fff" />}
          title="Experiencia laboral"
          subtitle="Un resumen de mis últimos roles, responsabilidades y tecnologías con las que he trabajado."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {columns.map((col, idx) => (
            <div key={idx} className="flex flex-col gap-5 md:gap-6">
              {col.map((item) => (
                <ExperienceCard
                  key={`${item.company}-${item.period}`}
                  {...item}
                />
              ))}
            </div>
          ))}
        </div>

        <m.div
          className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          {INFO_CARDS.map((c) => (
            <InfoCard key={c.title} {...c} />
          ))}
        </m.div>
      </div>
    </section>
  );
}

const InfoCard = memo(function InfoCard({
  icon,
  title,
  description,
}: InfoCardItem) {
  return (
    <div className="flex items-start gap-3 bg-white/70 border border-white/90 rounded-lg p-4 text-black">
      {icon}
      <div>
        <h4 className="font-medium text-black">{title}</h4>
        <p className="text-black/70">{description}</p>
      </div>
    </div>
  );
});
