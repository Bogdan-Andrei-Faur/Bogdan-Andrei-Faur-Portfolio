import { useCallback, useEffect, useState } from "react";
import {
  IconHome,
  IconUser,
  IconBriefcase2,
  IconSchool,
  IconBrandGithub,
  IconAddressBook,
} from "@tabler/icons-react";

const BUTTONS = [
  { id: "Home", label: <IconHome size={28} stroke={1.5} />, section: "home" },
  { id: "About", label: <IconUser size={28} stroke={1.5} />, section: "about" },
  {
    id: "Experience",
    label: <IconBriefcase2 size={28} stroke={1.5} />,
    section: "experience",
  },
  {
    id: "Projects",
    label: <IconBrandGithub size={28} stroke={1.5} />,
    section: "projects",
  },
  {
    id: "Education",
    label: <IconSchool size={28} stroke={1.5} />,
    section: "education",
  },
  {
    id: "Contact",
    label: <IconAddressBook size={28} stroke={1.5} />,
    section: "contact",
  },
];

const Dock = () => {
  const buttons = BUTTONS;

  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const ids = buttons.map((b) => b.section);

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = ids.length - 1; i >= 0; i--) {
        const section = document.getElementById(ids[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveSection(ids[i]);
            return;
          }
        }
      }

      setActiveSection("home");
    };

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateActiveSection();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateActiveSection();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [buttons]);

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
    <div className="z-40 scale-90 sm:scale-100 fixed bottom-0 left-1/2 -translate-x-1/2 mb-2 flex w-fit rounded-full p-2.5 gap-2 backdrop-blur-xl bg-white/40 border border-white/60 shadow-lg transition-all duration-500">
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
