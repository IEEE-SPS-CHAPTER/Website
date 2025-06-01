"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";

function GlobeModel(props) {
  const { scene } = useGLTF("/sps-globe.glb");
  return <primitive object={scene} {...props} />;
}

export default function HeroGlobe() {
  return (
    <div
      style={{
        width: "min(60vw, 500px)",
        height: "min(60vw, 500px)",
        aspectRatio: 1,
        overflow: "hidden",
        zIndex: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "transparent",
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        style={{ background: "transparent", width: "100%", height: "100%" }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <GlobeModel scale={1.2} />
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          autoRotate
          autoRotateSpeed={1.5}
        />
        <Environment preset="sunset" />
      </Canvas>
    </div>
  );
}

// Required for GLTF loading
// @react-three/drei's useGLTF has an internal cache, so this is efficient
