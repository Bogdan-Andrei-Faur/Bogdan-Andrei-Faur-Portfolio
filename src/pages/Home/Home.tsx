import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { useRef, useLayoutEffect, useCallback } from "react";
import { motion as m, useTime, useScroll, useTransform } from "framer-motion";
import type { MotionValue } from "framer-motion";
import { degreesToRadians, progress as pmProgress, mix } from "popmotion";
import { IconChevronDown } from "@tabler/icons-react";

const color = "#111111";

type SphericalPositionable = {
  position: {
    setFromSphericalCoords: (
      radius: number,
      phi: number,
      theta: number
    ) => void;
  };
};

type Rotatable = { rotation: { x: number; y: number } };

const Icosahedron = () => (
  <mesh rotation-x={0.35}>
    <icosahedronGeometry args={[1, 0]} />
    <meshBasicMaterial wireframe color={color} />
  </mesh>
);

const Star = ({ p }: { p: number }) => {
  const ref = useRef<SphericalPositionable | null>(null);

  useLayoutEffect(() => {
    const distance = mix(2, 3.5, Math.random());
    const yAngle = mix(
      degreesToRadians(80),
      degreesToRadians(100),
      Math.random()
    );
    const xAngle = degreesToRadians(360) * p;
    ref.current!.position.setFromSphericalCoords(distance, yAngle, xAngle);
  });

  return (
    <mesh ref={ref}>
      <boxGeometry args={[0.05, 0.05, 0.05]} />
      <meshBasicMaterial wireframe color={color} />
    </mesh>
  );
};

function Scene({
  numStars = 140,
  mouseRef,
  sectionProgress,
}: {
  numStars?: number;
  mouseRef: React.MutableRefObject<{ x: number; y: number }>;
  sectionProgress: MotionValue<number>;
}) {
  const gl = useThree((state) => state.gl);
  const group = useRef<Rotatable | null>(null);
  const yAngle = useTransform(
    sectionProgress,
    [0, 0.4],
    [0.001, degreesToRadians(180)]
  );
  const distance = useTransform(sectionProgress, [0, 0.4], [10, 3]);
  const time = useTime();

  useFrame(({ camera }) => {
    const p = sectionProgress.get();
    if (p <= 0.4) {
      camera.position.setFromSphericalCoords(
        distance.get(),
        yAngle.get(),
        time.get() * 0.0005
      );
    } else {
      camera.position.setFromSphericalCoords(
        3,
        degreesToRadians(180),
        time.get() * 0.0005
      );
    }
    camera.updateProjectionMatrix();
    camera.lookAt(0, 1.8, 0);

    if (group.current) {
      const targetX = mouseRef.current.x * 0.25;
      const targetY = mouseRef.current.y * 0.15;
      group.current.rotation.y = mix(group.current.rotation.y, targetX, 0.05);
      group.current.rotation.x = mix(group.current.rotation.x, targetY, 0.05);
    }
  });

  useLayoutEffect(() => {
    gl.setPixelRatio(window.devicePixelRatio);
  });

  const stars = Array.from({ length: numStars }, (_, i) => (
    <Star key={i} p={pmProgress(0, numStars, i)} />
  ));

  return (
    <group ref={group}>
      <Icosahedron />
      {stars}
    </group>
  );
}

export default function Home() {
  const mouseRef = useRef({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLDivElement | null>(null);
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

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mx = (e.clientX - rect.left) / rect.width; // 0..1
    const my = (e.clientY - rect.top) / rect.height; // 0..1
    mouseRef.current.x = (mx - 0.5) * 2; // -1..1
    mouseRef.current.y = (0.5 - my) * 2; // -1..1 (invertido)
  }, []);

  const scrollNext = useCallback(() => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
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
        <Canvas gl={{ antialias: false }}>
          <Scene mouseRef={mouseRef} sectionProgress={sectionProgress} />
        </Canvas>
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
