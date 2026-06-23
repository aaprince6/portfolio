"use client";

import { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

export default function ThreeScene({ theme }: { theme: string }) {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <Scene theme={theme} />
      </Canvas>
    </div>
  );
}

function MorphingTorus({ theme }: { theme: string }) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const { viewport } = useThree();
  const colors: Record<string, string> = {
    cyberpunk: "#00ff88", matrix: "#00ff41", synthwave: "#ff00ff",
  };
  const color = colors[theme] || "#00ff88";

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.x = Math.sin(t * 0.3) * 0.5;
    meshRef.current.rotation.y = Math.sin(t * 0.2) * 0.5;
    const geo = meshRef.current.geometry;
    const pos = geo.attributes.position;
    const arr = pos.array as Float32Array;
    for (let i = 0; i < arr.length / 3; i++) {
      const i3 = i * 3;
      const x = arr[i3], y = arr[i3 + 1], z = arr[i3 + 2];
      const dist = Math.sqrt(x * x + y * y + z * z);
      const wave = Math.sin(dist * 3 - t * 2) * 0.08;
      arr[i3] = x + (x / dist) * wave;
      arr[i3 + 1] = y + (y / dist) * wave;
      arr[i3 + 2] = z + (z / dist) * wave;
    }
    pos.needsUpdate = true;
    geo.computeVertexNormals();
  });

  return (
    <mesh ref={meshRef} scale={viewport.width < 5 ? 0.6 : 0.8}>
      <torusKnotGeometry args={[1, 0.3, 256, 32]} />
      <MeshDistortMaterial color={color} emissive={color} emissiveIntensity={0.5} roughness={0.2} metalness={0.8} distort={0.3} speed={2} wireframe />
    </mesh>
  );
}

function Scene({ theme }: { theme: string }) {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3a86ff" />
      <spotLight position={[0, 5, 5]} angle={0.3} penumbra={1} intensity={1} />
      <MorphingTorus theme={theme} />
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} autoRotate autoRotateSpeed={0.5} />
    </>
  );
}
