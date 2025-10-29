import {
  IconHome,
  IconUser,
  IconBriefcase2,
  IconSchool,
  IconNews,
  IconBrandGithub,
  IconAddressBook,
} from "@tabler/icons-react";
import { useCallback, useEffect, useState } from "react";

const Dock = () => {
  const buttons = [
    { id: "Home", label: <IconHome size={28} stroke={1.5} />, section: "home" },
    {
      id: "About",
      label: <IconUser size={28} stroke={1.5} />,
      section: "about",
    },
    {
      id: "Experience",
      label: <IconBriefcase2 size={28} stroke={1.5} />,
      section: "experience",
    },
    {
      id: "Education",
      label: <IconSchool size={28} stroke={1.5} />,
      section: "education",
    },
    {
      id: "Publications",
      label: <IconNews size={28} stroke={1.5} />,
      section: "publications",
    },
    {
      id: "Projects",
      label: <IconBrandGithub size={28} stroke={1.5} />,
      section: "projects",
    },
    {
      id: "Contact",
      label: <IconAddressBook size={28} stroke={1.5} />,
      section: "contact",
    },
  ];

  const [activeSection, setActiveSection] = useState<string>("home");

  // Observa qué sección está visible y marca activa
  useEffect(() => {
    const ids = buttons.map((b) => b.section);
    const observer = new IntersectionObserver(
      (entries) => {
        // Busca la sección más visible actualmente
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          const id = (visible.target as HTMLElement).id;
          setActiveSection(id);
        }
      },
      {
        threshold: [0.25, 0.5, 0.75],
        rootMargin: "0px 0px -20% 0px", // prioriza lo que está en la parte media-superior
      }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scrollToSection = useCallback((section: string) => {
    if (section === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveSection("home");
      return;
    }
    const el = document.getElementById(section);
    if (el) {
      setActiveSection(section);
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);
  return (
    <div className="z-40 scale-80 md:scale-100 fixed bottom-0 left-1/2 -translate-x-1/2 mb-2 flex w-fit rounded-full p-2.5 gap-2 backdrop-blur-xl bg-white/40 border border-white/60 shadow-lg transition-all duration-500">
      {buttons.map((button) => (
        <button
          key={button.id}
          onClick={() => scrollToSection(button.section)}
          className={`relative group p-3 rounded-full transition-all duration-300 flex items-center justify-center backdrop-blur-sm shadow-sm hover:shadow-md
            ${
              activeSection === button.section
                ? "bg-white/90 text-black ring-2 ring-black/75 shadow-md scale-105"
                : "bg-white/60 hover:bg-white/80 text-black/70 hover:text-black hover:scale-105"
            }
          `}
          aria-label={button.id}
          aria-current={activeSection === button.section ? "page" : undefined}
          type="button"
        >
          {button.label}
        </button>
      ))}
    </div>
  );
};

export default Dock;
