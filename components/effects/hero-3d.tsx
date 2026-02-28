"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Environment, Sparkles } from "@react-three/drei";
import * as THREE from "three";

function FloatingShapes() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <mesh position={[-2, 1, -2]} scale={0.8}>
          <icosahedronGeometry args={[1, 0]} />
          <MeshDistortMaterial
            color="#DC2626"
            emissive="#DC2626"
            emissiveIntensity={0.3}
            distort={0.4}
            speed={2}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
      </Float>

      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
        <mesh position={[2.5, -0.5, -1]} scale={0.6}>
          <octahedronGeometry args={[1, 0]} />
          <MeshDistortMaterial
            color="#2563EB"
            emissive="#2563EB"
            emissiveIntensity={0.3}
            distort={0.3}
            speed={1.5}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
      </Float>

      <Float speed={2.5} rotationIntensity={0.6} floatIntensity={1.2}>
        <mesh position={[0, 2, -3]} scale={0.5}>
          <torusGeometry args={[0.8, 0.3, 16, 32]} />
          <MeshDistortMaterial
            color="#10B981"
            emissive="#10B981"
            emissiveIntensity={0.3}
            distort={0.5}
            speed={2}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
      </Float>

      <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.6}>
        <mesh position={[-1.5, -1.5, -2]} scale={0.4}>
          <dodecahedronGeometry args={[1, 0]} />
          <MeshDistortMaterial
            color="#F59E0B"
            emissive="#F59E0B"
            emissiveIntensity={0.3}
            distort={0.35}
            speed={1.8}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
      </Float>

      <Float speed={2.2} rotationIntensity={0.5} floatIntensity={0.9}>
        <mesh position={[1.8, 1.5, -2.5]} scale={0.35}>
          <tetrahedronGeometry args={[1, 0]} />
          <MeshDistortMaterial
            color="#8B5CF6"
            emissive="#8B5CF6"
            emissiveIntensity={0.3}
            distort={0.45}
            speed={2.2}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
      </Float>
    </group>
  );
}

function CentralSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.3}>
      <mesh ref={meshRef} position={[0, 0, 0]} scale={1.2}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial
          color="#1e293b"
          emissive="#DC2626"
          emissiveIntensity={0.15}
          distort={0.3}
          speed={1.5}
          roughness={0.1}
          metalness={0.9}
          wireframe={false}
        />
      </mesh>
    </Float>
  );
}

function Particles() {
  return (
    <Sparkles
      count={150}
      scale={10}
      size={2}
      speed={0.4}
      opacity={0.5}
      color="#DC2626"
    />
  );
}

export function Hero3D() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#DC2626" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#2563EB" />
        <spotLight
          position={[0, 10, 0]}
          angle={0.3}
          penumbra={1}
          intensity={1}
          color="#ffffff"
        />

        <FloatingShapes />
        <CentralSphere />
        <Particles />

        <Environment preset="night" />
      </Canvas>
    </div>
  );
}
