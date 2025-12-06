import { motion as m } from "framer-motion";
import { IconSchool, IconCertificate, IconBook2 } from "@tabler/icons-react";
import { memo } from "react";
import Chip from "../../components/Chip";
import SectionHeader from "../../components/SectionHeader";

// Chip reutilizable importado desde components/Chip

export default function Education() {
  return (
    <section className="relative bg-transparent py-24 px-4">
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader
          icon={<IconSchool size={28} color="#fff" />}
          title="Educación"
          subtitle="Formación reglada y bootcamp intensivo, con foco en desarrollo web full‑stack y fundamentos técnicos."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
          {EDUCATION.map((item, idx) => (
            <EducationCard key={item.title} item={item} index={idx} />
          ))}
        </div>

        <m.div
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-start gap-3 bg-white/70 border border-white/90 rounded-lg p-4 text-black">
            <IconCertificate className="text-black/60" size={22} />
            <div>
              <h4 className="font-medium text-black mb-2">Certificaciones</h4>
              <div className="flex flex-wrap gap-2">
                <Chip label="Desarrollo Full Stack – Henry (2023)" />
              </div>
            </div>
          </div>
        </m.div>
      </div>
    </section>
  );
}

type EducationItem = {
  period: string;
  title: string;
  subtitle: string;
  bullets: string[];
  tags: string[];
};

const EDUCATION: EducationItem[] = [
  {
    period: "2017 — 2019",
    title: "IES Pirámide",
    subtitle: "FP Básica – Informática, Telecomunicaciones y Electricidad",
    bullets: [
      "Fundamentos de hardware, redes y sistemas operativos.",
      "Mantenimiento y reparación de equipos informáticos.",
      "Instalación y configuración de sistemas operativos.",
      "Resolución de incidencias y soporte técnico a usuarios.",
    ],
    tags: ["Sistemas", "Redes", "Hardware", "Soporte técnico"],
  },
  {
    period: "2023",
    title: "Henry",
    subtitle: "Full Stack Developer (Bootcamp +800h)",
    bullets: [
      "Entrenamiento intensivo en desarrollo web full‑stack.",
      "Metodologías ágiles y trabajo colaborativo en equipos.",
      "Proyecto final real para ONG (Caravana Social).",
      "Frontend: React, Redux, HTML, CSS, JavaScript.",
      "Backend: Node.js, Express, PostgreSQL, Sequelize.",
      "Control de versiones con Git y GitHub.",
    ],
    tags: [
      "React",
      "Redux",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Sequelize",
      "Git",
    ],
  },
];

const EducationCard = memo(function EducationCard({
  item,
  index,
}: {
  item: EducationItem;
  index: number;
}) {
  return (
    <m.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="w-full bg-white/70 backdrop-blur-md border border-white/90 rounded-xl p-5 shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:-translate-y-1 hover:shadow-[0_10px_24px_rgba(0,0,0,0.12)] transition"
    >
      <div className="flex flex-col gap-1 mb-2">
        <div className="inline-flex items-center gap-1 text-[0.85rem] text-black/70">
          <IconBook2 size={18} />
          <span>{item.period}</span>
        </div>
        <h3 className="text-xl font-semibold text-black/90">{item.title}</h3>
        <p className="text-black/70">{item.subtitle}</p>
      </div>
      <ul className="mt-2 mb-3 ml-5 grid gap-1 list-disc text-black/80">
        {item.bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        {item.tags.map((t) => (
          <Chip key={t} label={t} />
        ))}
      </div>
    </m.article>
  );
});
