import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { useRef, useLayoutEffect } from "react";
import { useTime, useTransform, type MotionValue } from "framer-motion";
import { degreesToRadians, progress as pmProgress, mix } from "popmotion";

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

function InnerScene({
  numStars = 120,
  mouseRef,
  sectionProgress,
  isVisible,
}: {
  numStars?: number;
  mouseRef: React.MutableRefObject<{ x: number; y: number }>;
  sectionProgress: MotionValue<number>;
  isVisible: boolean;
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
    if (!isVisible) return;

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
    gl.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  }, [gl]);

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

export default function ThreeScene({
  mouseRef,
  sectionProgress,
  isVisible,
  numStars,
}: {
  mouseRef: React.MutableRefObject<{ x: number; y: number }>;
  sectionProgress: MotionValue<number>;
  isVisible: boolean;
  numStars: number;
}) {
  return (
    <Canvas gl={{ antialias: false }}>
      <InnerScene
        mouseRef={mouseRef}
        sectionProgress={sectionProgress}
        isVisible={isVisible}
        numStars={numStars}
      />
    </Canvas>
  );
}
