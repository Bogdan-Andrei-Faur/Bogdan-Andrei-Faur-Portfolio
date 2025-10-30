// Tailwind-first: CSS mínimo en esta página
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
  IconCloud,
  IconWorld,
  IconDownload,
  IconLanguage,
  IconBrandRedux,
  IconChartBar,
  IconBrandOpenai,
} from "@tabler/icons-react";

const About = () => {
  const skills = [
    { name: "React", icon: <IconBrandReact size={32} stroke={1.5} /> },
    { name: "Node.js", icon: <IconBrandNodejs size={32} stroke={1.5} /> },
    { name: "Express", icon: <IconCode size={32} stroke={1.5} /> },
    { name: "PostgreSQL", icon: <IconDatabase size={32} stroke={1.5} /> },
    { name: "Prisma", icon: <IconDatabase size={32} stroke={1.5} /> },
    { name: "Astro", icon: <IconBrandAstro size={32} stroke={1.5} /> },
    { name: "Redux", icon: <IconBrandRedux size={32} stroke={1.5} /> },
    { name: "i18n", icon: <IconLanguage size={32} stroke={1.5} /> },
    { name: "Chart.js", icon: <IconChartBar size={32} stroke={1.5} /> },
    { name: "Cloudinary", icon: <IconCloud size={32} stroke={1.5} /> },
    { name: "OpenAI API", icon: <IconBrandOpenai size={32} stroke={1.5} /> },
    { name: "CI/CD", icon: <IconGitBranch size={32} stroke={1.5} /> },
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
    <div className="min-h-screen relative bg-transparent py-24 px-4">
      <div className="max-w-[1200px] mx-auto">
        {/* Hero Section */}
        <m.section
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex flex-col items-center gap-8 text-center md:flex-row md:text-left md:gap-12">
            <m.div
              className="shrink-0"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <img
                src={profile}
                alt="Bogdan Andrei Faur"
                className="w-[200px] h-[200px] rounded-full object-cover border-2 border-white/85 shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
                loading="eager"
                decoding="async"
              />
            </m.div>
            <div className="flex-1 max-w-[600px]">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-start">
                Sobre mí
              </h1>
              <p className="text-lg md:text-xl text-black/80 text-start">
                Soy <strong>Bogdan Andrei Faur</strong>, Responsable de IT y
                Full Stack Developer. Llevo más de{" "}
                <strong>2 años programando</strong> y más de{" "}
                <strong>1 año liderando</strong> proyectos y equipos técnicos.
                Actualmente dirijo el área de IT en una consultora
                internacional, donde he diseñado y desarrollado desde cero
                nuestras principales soluciones digitales.
              </p>
              <p className="mt-3 text-black/75 text-start">
                Mi enfoque combina <em>desarrollo práctico</em> (React, Node.js,
                Express, PostgreSQL, Prisma, Astro, CI/CD) con{" "}
                <em>gestión técnica</em> de proyectos, soporte IT interno y{" "}
                <em>cumplimiento normativo</em>. Me apasiona aprender, enseñar y
                resolver problemas.
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
                {/* Enlace a Web eliminado por redundante si ya estamos en la misma web */}
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

        {/* Aptitudes principales eliminado a petición del usuario */}

        {/* Tech Stack Section */}
        <m.section
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl font-bold mb-6 text-center">
            Stack Tecnológico
          </h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-6 max-w-[800px] mx-auto">
            {skills.map((skill, index) => (
              <m.div
                key={skill.name}
                className="bg-white/70 backdrop-blur-md border border-white/90 rounded-xl p-6 flex flex-col items-center justify-center text-center text-black/85 shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:bg-white/80 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
              >
                <div className="text-black/70">{skill.icon}</div>
                <p className="text-base font-medium mt-2 text-black/80">
                  {skill.name}
                </p>
              </m.div>
            ))}
          </div>
        </m.section>

        {/* Experiencia: se ha movido a sección propia */}

        {/* Proyectos: tendrá su propia sección más adelante */}

        {/* Intereses profesionales eliminado a petición del usuario */}

        {/* Languages */}
        <m.section
          className="mb-16"
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
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Mi Enfoque</h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8">
            {values.map((value, index) => (
              <m.div
                key={value.title}
                className="bg-white/70 backdrop-blur-md border border-white/90 rounded-2xl p-8 text-black/85 shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition hover:shadow-[0_12px_32px_rgba(0,0,0,0.12)] hover:bg-white/75"
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
                <div className="text-black/70 mb-4">{value.icon}</div>
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
