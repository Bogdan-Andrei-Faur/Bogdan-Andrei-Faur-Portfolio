import {
  lazy,
  Suspense,
  useRef,
  useCallback,
  useState,
  useEffect,
} from "react";
import { motion as m, useScroll, useTransform } from "framer-motion";
import type { MotionValue } from "framer-motion";
import { IconChevronDown } from "@tabler/icons-react";
const ThreeScene = lazy(() => import("./ThreeScene"));

export default function Home() {
  const mouseRef = useRef({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [numStars] = useState(() =>
    typeof window !== "undefined" && window.innerWidth < 768 ? 60 : 120
  );
  const [shouldLoad3D, setShouldLoad3D] = useState(false);

  const { scrollYProgress: sectionProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const canvasOpacity = useTransform(sectionProgress, [0.2, 0.5], [1, 0]);
  const contentOpacity = useTransform(
    sectionProgress,
    [0, 0.06, 0.18],
    [1, 1, 0]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const mx = (e.clientX - rect.left) / rect.width;
      const my = (e.clientY - rect.top) / rect.height;
      mouseRef.current.x = (mx - 0.5) * 2;
      mouseRef.current.y = (0.5 - my) * 2;
      if (!shouldLoad3D) setShouldLoad3D(true);
    },
    [shouldLoad3D]
  );

  const scrollNext = useCallback(() => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  // Carga diferida del 3D tras idle o 1s
  useEffect(() => {
    let idleId: number | null = null;
    const timer = window.setTimeout(() => setShouldLoad3D(true), 1000);
    type WIdle = {
      requestIdleCallback?: (cb: () => void) => number;
      cancelIdleCallback?: (id: number) => void;
    };
    const w = window as unknown as WIdle;
    if (w.requestIdleCallback)
      idleId = w.requestIdleCallback(() => setShouldLoad3D(true));
    return () => {
      window.clearTimeout(timer);
      if (idleId && w.cancelIdleCallback) w.cancelIdleCallback(idleId);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative bg-transparent min-h-[110vh] h-[110vh]"
      onMouseMove={handleMouseMove}
    >
      <m.div
        className="fixed inset-0 z-0 transition-opacity duration-700 ease-out"
        style={{ opacity: canvasOpacity }}
      >
        {shouldLoad3D && (
          <Suspense fallback={null}>
            <ThreeScene
              mouseRef={mouseRef}
              sectionProgress={
                sectionProgress as unknown as MotionValue<number>
              }
              isVisible={isVisible}
              numStars={numStars}
            />
          </Suspense>
        )}
      </m.div>

      <m.div
        className="absolute bottom-[8%] sm:bottom-[6%] left-0 right-0 -translate-y-1/2 flex flex-col items-center justify-center p-8 z-10"
        style={{ opacity: contentOpacity }}
      >
        <m.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight text-center text-black/90"
        >
          Bogdan Andrei Faur
        </m.h1>
        <m.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="mt-4 text-center text-sm md:text-base lg:text-lg text-black/80 max-w-3xl px-4"
        >
          Responsable de IT & Full Stack Developer
        </m.p>
        <m.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
          className="mt-2 text-center text-sm md:text-base text-black/70 max-w-2xl px-4"
        >
          Gestión y desarrollo de soluciones digitales
        </m.p>

        <m.button
          onClick={scrollNext}
          initial={{ opacity: 0, y: -10 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: 0.4,
          }}
          className="bg-transparent border-0 cursor-pointer text-black/60 transition-all p-2 rounded-full hover:text-black/90 hover:scale-110"
          aria-label="Scroll para ver más"
        >
          <m.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <IconChevronDown size={32} stroke={2} />
          </m.div>
        </m.button>
      </m.div>
    </div>
  );
}
