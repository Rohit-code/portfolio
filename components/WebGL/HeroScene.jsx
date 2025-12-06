import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere } from '@react-three/drei';
import * as THREE from 'three';

// Floating orb component
function FloatingOrb({ position, color, size = 1 }) {
  const meshRef = useRef();
  const lightRef = useRef();
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current && lightRef.current) {
      meshRef.current.position.y += Math.sin(time * 0.5) * 0.001;
      lightRef.current.intensity = 0.5 + Math.sin(time * 2) * 0.2;
    }
  });
  
  return (
    <Float
      speed={1.5}
      rotationIntensity={0.2}
      floatIntensity={0.5}
      floatingRange={[-0.5, 0.5]}
    >
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.5}
          transparent
          opacity={0.6}
          roughness={0.3}
          metalness={0.8}
        />
        <pointLight ref={lightRef} color={color} intensity={0.5} distance={5} />
      </mesh>
    </Float>
  );
}

// Particles component
function Particles({ count = 200 }) {
  const pointsRef = useRef();
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, [count]);
  
  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    }
  });
  
  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#8B5CF6"
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// Main scene
function Scene() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <FloatingOrb position={[-3, 1, -2]} color="#8B5CF6" size={0.8} />
      <FloatingOrb position={[3, -1, -3]} color="#06B6D4" size={0.6} />
      <FloatingOrb position={[0, 2, -4]} color="#6366F1" size={0.5} />
      <Particles count={200} />
    </>
  );
}

// Main component
export default function HeroScene() {
  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
    }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}

