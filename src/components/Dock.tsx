import {
  IconHome,
  IconUser,
  IconBriefcase2,
  IconSchool,
  IconBrandGithub,
  IconAddressBook,
} from "@tabler/icons-react";
import { useCallback, useEffect, useMemo, useState } from "react";

const Dock = () => {
  const buttons = useMemo(
    () => [
      {
        id: "Home",
        label: <IconHome size={28} stroke={1.5} />,
        section: "home",
      },
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
    ],
    []
  );

  const [activeSection, setActiveSection] = useState<string>("home");

  // Scroll spy basado en la línea media del viewport para evitar parpadeos
  useEffect(() => {
    const ids = buttons.map((b) => b.section);
    const els: HTMLElement[] = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    const tickingRef = { current: false } as { current: boolean };

    const computeActive = () => {
      const centerY = window.innerHeight / 2;
      let bestId = ids[0];
      let bestDist = Number.POSITIVE_INFINITY;

      els.forEach((el, idx) => {
        const rect = el.getBoundingClientRect();
        // Prioriza elementos visibles: si ninguno lo está, igualmente elegimos el más cercano
        const mid = rect.top + rect.height / 2;
        const dist = Math.abs(mid - centerY);
        if (dist < bestDist) {
          bestDist = dist;
          bestId = ids[idx];
        }
      });

      // Fallback: si estamos al final de la página, activa la última sección
      const nearBottom =
        window.innerHeight + window.scrollY >=
        (document.documentElement?.scrollHeight ?? 0) - 2;
      if (nearBottom) {
        bestId = ids[ids.length - 1];
      }

      setActiveSection(bestId);
    };

    const onScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;
      requestAnimationFrame(() => {
        computeActive();
        tickingRef.current = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    // Primer cálculo
    computeActive();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
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
