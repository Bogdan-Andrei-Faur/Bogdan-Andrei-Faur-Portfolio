import styles from "./styles.module.css";
import { motion as m } from "framer-motion";
import profile from "../../assets/profile.webp";
import {
  IconCode,
  IconDatabase,
  IconBrandReact,
  IconBrandNodejs,
  IconBrandAstro,
  IconUsers,
  IconRocket,
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconGitBranch,
  IconShieldCheck,
  IconCloud,
  IconWorld,
  IconChartBar,
  IconDownload,
} from "@tabler/icons-react";

const About = () => {
  const skills = [
    { name: "React", icon: <IconBrandReact size={32} stroke={1.5} /> },
    { name: "Node.js", icon: <IconBrandNodejs size={32} stroke={1.5} /> },
    { name: "PostgreSQL", icon: <IconDatabase size={32} stroke={1.5} /> },
    { name: "Astro", icon: <IconBrandAstro size={32} stroke={1.5} /> },
    { name: "CI/CD", icon: <IconCode size={32} stroke={1.5} /> },
  ];

  const values = [
    {
      title: "Desarrollo Full Stack",
      description:
        "Experiencia end-to-end desde el frontend hasta la base de datos, creando soluciones completas y escalables.",
      icon: <IconCode size={40} stroke={1.5} />,
    },
    {
      title: "Gestión de IT",
      description:
        "Liderazgo técnico y gestión de infraestructura, asegurando sistemas robustos y eficientes.",
      icon: <IconUsers size={40} stroke={1.5} />,
    },
    {
      title: "Innovación Continua",
      description:
        "Apasionado por adoptar nuevas tecnologías y metodologías para mejorar procesos y resultados.",
      icon: <IconRocket size={40} stroke={1.5} />,
    },
  ];

  return (
    <div className={styles.about}>
      <div className={styles.container}>
        {/* Hero Section */}
        <m.section
          className={styles.hero}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className={styles.heroContent}>
            <m.div
              className={styles.avatar}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <img
                src={profile}
                alt="Bogdan Andrei Faur"
                className={styles.avatarImage}
                loading="eager"
                decoding="async"
              />
            </m.div>
            <div className={styles.heroText}>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Sobre mí</h1>
              <p className="text-lg md:text-xl text-black/80 leading-relaxed">
                Soy <strong>Bogdan Andrei Faur</strong>, Responsable de IT y
                Full Stack Developer. +2 años programando activamente y +1 año
                liderando el área técnica en la sede española de una consultora.
                Diseñé y desplegué soluciones web end‑to‑end combinando{" "}
                <em>React, Node.js, PostgreSQL, Astro</em> y flujos{" "}
                <em>CI/CD</em>, con foco en rendimiento, cumplimiento normativo
                y experiencia de usuario.
              </p>
              <div className="mt-4 flex items-center gap-3 flex-wrap">
                <a
                  href="mailto:bogdan.andrei.faur@gmail.com"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/70 hover:bg-white/90 text-black transition shadow-sm"
                >
                  <IconMail size={18} /> <span className="text-sm">Email</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/bogdan-andrei-faur/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/70 hover:bg-white/90 text-black transition shadow-sm"
                >
                  <IconBrandLinkedin size={18} />{" "}
                  <span className="text-sm">LinkedIn</span>
                </a>
                <a
                  href="https://github.com/Bogdan-Andrei-Faur"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/70 hover:bg-white/90 text-black transition shadow-sm"
                >
                  <IconBrandGithub size={18} />{" "}
                  <span className="text-sm">GitHub</span>
                </a>
                <a
                  href="https://drive.google.com/uc?export=download&id=19Si4TiAYfGwLMF_FD26eMiwcffaedvXK"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-black text-white hover:bg-black/80 transition shadow-sm"
                >
                  <IconDownload size={18} />
                  <span className="text-sm">Descargar CV</span>
                </a>
              </div>
            </div>
          </div>
        </m.section>

        {/* Tech Stack Section */}
        <m.section
          className={styles.section}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl font-bold mb-6 text-center">
            Stack Tecnológico
          </h2>
          <div className={styles.skillsGrid}>
            {skills.map((skill, index) => (
              <m.div
                key={skill.name}
                className={styles.skillCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
              >
                <div className={styles.skillIcon}>{skill.icon}</div>
                <p className="text-base font-medium mt-2 text-black/80">
                  {skill.name}
                </p>
              </m.div>
            ))}
          </div>
        </m.section>

        {/* Experience Section */}
        <m.section
          className={styles.section}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Experiencia</h2>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <div className="flex items-center gap-3 mb-2 text-black">
                <IconShieldCheck />
                <h3 className="text-xl font-semibold">
                  Responsable de IT & Desarrollo — PetroShore Compliance
                </h3>
              </div>
              <p className="text-sm text-black/60 mb-3">
                Mar 2024 — Actualidad · Huesca, España
              </p>
              <ul className="list-disc pl-5 text-black/80 space-y-1">
                <li>Liderazgo técnico de un equipo de 2 desarrolladores.</li>
                <li>
                  Diseño de arquitecturas, APIs y BBDD con Node.js, Express y
                  PostgreSQL.
                </li>
                <li>
                  Frontend con React/Astro, i18n, gráficos y accesibilidad.
                </li>
                <li>Integraciones: OpenAI API, Cloudinary, Nodemailer.</li>
                <li>CI/CD y despliegues; cumplimiento legal y QA.</li>
                <li>Soporte IT e infraestructura interna.</li>
              </ul>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full text-xs bg-white/80 text-black inline-flex items-center gap-1">
                  <IconBrandReact size={14} />
                  React
                </span>
                <span className="px-3 py-1 rounded-full text-xs bg-white/80 text-black inline-flex items-center gap-1">
                  <IconBrandNodejs size={14} />
                  Node.js
                </span>
                <span className="px-3 py-1 rounded-full text-xs bg-white/80 text-black inline-flex items-center gap-1">
                  <IconDatabase size={14} />
                  PostgreSQL
                </span>
                <span className="px-3 py-1 rounded-full text-xs bg-white/80 text-black inline-flex items-center gap-1">
                  <IconBrandAstro size={14} />
                  Astro
                </span>
                <span className="px-3 py-1 rounded-full text-xs bg-white/80 text-black inline-flex items-center gap-1">
                  <IconGitBranch size={14} />
                  CI/CD
                </span>
              </div>
            </div>
            <div className={styles.valueCard}>
              <div className="flex items-center gap-3 mb-2 text-black">
                <IconCode />
                <h3 className="text-xl font-semibold">
                  Front-end Developer — Caravana Social
                </h3>
              </div>
              <p className="text-sm text-black/60 mb-3">Ago 2023 — Sep 2023</p>
              <p className="text-black/80">
                Participación en bolsa de empleo accesible: React, Redux,
                Node/Express y PostgreSQL.
              </p>
            </div>
          </div>
        </m.section>

        {/* Featured Projects */}
        <m.section
          className={styles.section}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl font-bold mb-6 text-center">
            Proyectos destacados
          </h2>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <div className="flex items-center gap-3 mb-2 text-black">
                <IconRocket />
                <h3 className="text-xl font-semibold">
                  Migración corporativa a Astro
                </h3>
              </div>
              <p className="text-black/80">
                Sustitución de WordPress por Astro con mejora notable de SEO y
                rendimiento.
              </p>
            </div>
            <div className={styles.valueCard}>
              <div className="flex items-center gap-3 mb-2 text-black">
                <IconCloud />
                <h3 className="text-xl font-semibold">PWA para eventos</h3>
              </div>
              <p className="text-black/80">
                Agenda interactiva, streaming y certificados. Construida como
                PWA.
              </p>
            </div>
            <div className={styles.valueCard}>
              <div className="flex items-center gap-3 mb-2 text-black">
                <IconChartBar />
                <h3 className="text-xl font-semibold">MindScan</h3>
              </div>
              <p className="text-black/80">
                Plataforma de análisis psicológico, comparación y exportación de
                resultados.
              </p>
            </div>
          </div>
        </m.section>

        {/* Languages */}
        <m.section
          className={styles.section}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Idiomas</h2>
          <div className="flex flex-wrap gap-2 justify-center">
            <span className="px-3 py-1 rounded-full bg-white/80 text-black inline-flex items-center gap-2 text-sm">
              <IconWorld size={16} /> Español (nativo)
            </span>
            <span className="px-3 py-1 rounded-full bg-white/80 text-black inline-flex items-center gap-2 text-sm">
              <IconWorld size={16} /> Rumano (nativo)
            </span>
            <span className="px-3 py-1 rounded-full bg-white/80 text-black inline-flex items-center gap-2 text-sm">
              <IconWorld size={16} /> Inglés (B1)
            </span>
          </div>
        </m.section>
        {/* Values Section */}
        <m.section
          className={styles.section}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Mi Enfoque</h2>
          <div className={styles.valuesGrid}>
            {values.map((value, index) => (
              <m.div
                key={value.title}
                className={styles.valueCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className={styles.valueIcon}>{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-black">
                  {value.title}
                </h3>
                <p className="text-black/70 leading-relaxed">
                  {value.description}
                </p>
              </m.div>
            ))}
          </div>
        </m.section>
      </div>
    </div>
  );
};

export default About;
