import { motion as m } from "framer-motion";
import { IconSchool, IconCertificate, IconBook2 } from "@tabler/icons-react";

function Chip({ label }: { label: string }) {
  return (
    <span className="bg-white/90 border border-black/10 px-2 py-1 rounded-full text-xs text-black/75">
      {label}
    </span>
  );
}

export default function Education() {
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
            <IconSchool size={28} color="#fff" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Educación
            </h2>
          </div>
          <p className="mt-2 text-white/80 max-w-2xl mx-auto">
            Formación reglada y bootcamp intensivo, con foco en desarrollo web
            full‑stack y fundamentos técnicos.
          </p>
        </m.header>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
          {/* Henry */}
          <m.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="w-full bg-white/70 backdrop-blur-md border border-white/90 rounded-xl p-5 shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:-translate-y-1 hover:shadow-[0_10px_24px_rgba(0,0,0,0.12)] transition"
          >
            <div className="flex flex-col gap-1 mb-2">
              <div className="inline-flex items-center gap-1 text-[0.85rem] text-black/70">
                <IconBook2 size={18} />
                <span>Mayo 2023 — Sep 2023</span>
              </div>
              <h3 className="text-xl font-semibold text-black/90">Henry</h3>
              <p className="text-black/70">
                Full‑Stack Developer (Bootcamp +800h)
              </p>
            </div>
            <ul className="mt-2 mb-3 ml-5 grid gap-1 list-disc text-black/80">
              <li>Entrenamiento intensivo en desarrollo full‑stack.</li>
              <li>Prácticas con proyectos reales y trabajo colaborativo.</li>
              <li>Control de versiones: Git.</li>
              <li>Frontend: React, HTML, CSS, Redux.</li>
              <li>Backend: Node.js, Express.</li>
              <li>Bases de datos: PostgreSQL.</li>
            </ul>
            <div className="flex flex-wrap gap-2">
              {[
                "React",
                "HTML",
                "CSS",
                "Redux",
                "Node.js",
                "Express",
                "PostgreSQL",
                "Sequelize",
              ].map((t) => (
                <Chip key={t} label={t} />
              ))}
            </div>
          </m.article>

          {/* IES Pirámide */}
          <m.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="w-full bg-white/70 backdrop-blur-md border border-white/90 rounded-xl p-5 shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:-translate-y-1 hover:shadow-[0_10px_24px_rgba(0,0,0,0.12)] transition"
          >
            <div className="flex flex-col gap-1 mb-2">
              <div className="inline-flex items-center gap-1 text-[0.85rem] text-black/70">
                <IconBook2 size={18} />
                <span>Sep 2017 — Jun 2019</span>
              </div>
              <h3 className="text-xl font-semibold text-black/90">
                IES Pirámide
              </h3>
              <p className="text-black/70">
                FP Básica en Informática, Telecomunicaciones y Electricidad
              </p>
            </div>
            <ul className="mt-2 mb-3 ml-5 grid gap-1 list-disc text-black/80">
              <li>Fundamentos de hardware, redes y sistemas operativos.</li>
              <li>Mantenimiento de equipos.</li>
              <li>Instalación y configuración de sistemas operativos.</li>
              <li>Resolución de incidencias y soporte técnico.</li>
            </ul>
            <div className="flex flex-wrap gap-2">
              {["Sistemas", "Redes", "Hardware", "Seguridad"].map((t) => (
                <Chip key={t} label={t} />
              ))}
            </div>
          </m.article>
        </div>

        {/* Certificaciones */}
        <m.div
          className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-start gap-3 bg-white/70 border border-white/90 rounded-lg p-4 text-black">
            <IconCertificate className="text-black/60" size={22} />
            <div>
              <h4 className="font-medium text-black">Certificaciones</h4>
              <div className="mt-1 flex flex-wrap gap-2">
                <Chip label="Desarrollo Full‑Stack" />
                <Chip label="Inglés A2 / B1" />
              </div>
            </div>
          </div>
        </m.div>
      </div>
    </section>
  );
}
