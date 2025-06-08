"use client";

import { useEffect } from 'react';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";

function GlobeModel(props) {
  const { scene } = useGLTF("/sps-globe.glb");
  return <primitive object={scene} {...props} />;
}

// to list all the objects inside the globe 3d model
function DumpSceneGraph() {
  const { scene } = useGLTF("/sps-globe.glb");

  useEffect(() => {
    function showObjects(obj, lines = [], isLast = true, prefix = '') {
      const localPrefix = isLast ? '|_' : '|-';
      lines.push(`${prefix ? localPrefix : ''}${obj.name || '*no-name*'} [${obj.type}]`);
      const newPrefix = prefix + (isLast ? '  ' : ' | ' );
      const lastNdx = obj.children.length - 1;
      obj.children.forEach((child, ndx) => {
        const isLast = ndx === lastNdx;
        showObjects(child, lines, isLast, newPrefix);
      });
      return lines;
    }

    const output = showObjects(scene);
    console.log(output.join('\n'));
  }, [scene]);

  return null;
}

function Rotator() {
  const groupRef = useRef();
  const { scene } = useGLTF("/sps-globe.glb");
  useFrame(() => {
    groupRef.current.traverse((obj) => {
      if ( obj.isMesh && obj.name !== "border" ) {
        obj.rotation.y -= 0.001;
      }
    });
  });
  return <group ref={groupRef}>
    <primitive object={scene}/>
  </group>
}

export default function HeroGlobe() {
  return (
    <div
      style={{
        width: "min(60vw, 750px)",
        height: "min(60vw, 750px)",
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
        orthographic
        camera={{ position: [0, 0, 4], zoom: 200 }}
        style={{ background: "transparent", width: "100%", height: "100%" }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <GlobeModel scale={1.0} />
        <DumpSceneGraph />
        <Rotator />
        <OrbitControls
          enablePan={false}
          enableZoom={false}
        />
        <Environment preset="sunset" />
      </Canvas>
    </div>
  );
}

// Required for GLTF loading
// @react-three/drei's useGLTF has an internal cache, so this is efficient
