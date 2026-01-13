import { Suspense, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, Canvas } from "@react-three/fiber";

type Props = {};

const Scene = (props: Props) => {
  return (
    <Canvas
    shadows
      style={{ width: "100%", height: "100%" }}
      camera={{ position: [0, 0, 10], fov: 45 }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      <Suspense fallback={null}>
        <Model />
      </Suspense>
    </Canvas>
  );
};

export default Scene;

const Model = () => {
  const modelRef = useRef<any>(null);
  const { scene } = useGLTF("/webpage_ui.glb");

  useFrame((state) => {
    if (!modelRef.current) return;

    const time = state.clock.elapsedTime;
    const amplitude = 0.4;
    const speed = 1.4;

    modelRef.current.rotation.y = Math.sin(time * speed) * amplitude;
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      position={[-2, -18, -30]}
      rotation={[0, -1, 0]}
    ></primitive>
  );
};

useGLTF.preload("/webpage_ui.glb");
