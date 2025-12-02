'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

// Animated Panda Model
function PandaModel() {
  const groupRef = useRef<THREE.Group>(null);
  const armRef = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Mesh>(null);
  const leftEarRef = useRef<THREE.Mesh>(null);
  const rightEarRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    
    // Gentle body sway
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t * 0.5) * 0.1;
      groupRef.current.position.y = Math.sin(t * 1.5) * 0.05;
    }
    
    // Arm waving with bottle
    if (armRef.current) {
      armRef.current.rotation.z = Math.sin(t * 2) * 0.15 - 0.3;
    }
    
    // Head tilt
    if (headRef.current) {
      headRef.current.rotation.z = Math.sin(t * 0.8) * 0.05;
      headRef.current.rotation.x = Math.sin(t * 0.6) * 0.03;
    }
    
    // Ear wiggle
    if (leftEarRef.current) {
      leftEarRef.current.rotation.z = Math.sin(t * 3) * 0.1;
    }
    if (rightEarRef.current) {
      rightEarRef.current.rotation.z = -Math.sin(t * 3 + 0.5) * 0.1;
    }
  });

  const darkColor = '#2D2420';
  const lightColor = '#FAF7F2';
  const bottleColor = '#9C7B5C';
  const blushColor = '#E8B4A0';

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
      <group ref={groupRef} position={[0, -0.5, 0]}>
        {/* Body */}
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.8, 32, 32]} />
          <meshStandardMaterial color={lightColor} roughness={0.5} />
        </mesh>
        
        {/* Belly spot */}
        <mesh position={[0, 0, 0.7]}>
          <sphereGeometry args={[0.4, 32, 32]} />
          <meshStandardMaterial color={lightColor} roughness={0.6} />
        </mesh>

        {/* Head */}
        <mesh ref={headRef} position={[0, 1.1, 0]}>
          <sphereGeometry args={[0.65, 32, 32]} />
          <meshStandardMaterial color={lightColor} roughness={0.5} />
          
          {/* Left Ear */}
          <mesh ref={leftEarRef} position={[-0.45, 0.5, 0]}>
            <sphereGeometry args={[0.22, 32, 32]} />
            <meshStandardMaterial color={darkColor} roughness={0.6} />
          </mesh>
          
          {/* Right Ear */}
          <mesh ref={rightEarRef} position={[0.45, 0.5, 0]}>
            <sphereGeometry args={[0.22, 32, 32]} />
            <meshStandardMaterial color={darkColor} roughness={0.6} />
          </mesh>

          {/* Left Eye Patch */}
          <mesh position={[-0.22, 0.05, 0.5]} rotation={[0, 0, 0.3]}>
            <sphereGeometry args={[0.18, 32, 32]} />
            <meshStandardMaterial color={darkColor} roughness={0.6} />
          </mesh>
          
          {/* Right Eye Patch */}
          <mesh position={[0.22, 0.05, 0.5]} rotation={[0, 0, -0.3]}>
            <sphereGeometry args={[0.18, 32, 32]} />
            <meshStandardMaterial color={darkColor} roughness={0.6} />
          </mesh>

          {/* Left Eye White */}
          <mesh position={[-0.2, 0.08, 0.58]}>
            <sphereGeometry args={[0.08, 32, 32]} />
            <meshStandardMaterial color={lightColor} roughness={0.3} />
          </mesh>
          
          {/* Right Eye White */}
          <mesh position={[0.2, 0.08, 0.58]}>
            <sphereGeometry args={[0.08, 32, 32]} />
            <meshStandardMaterial color={lightColor} roughness={0.3} />
          </mesh>

          {/* Left Pupil */}
          <mesh position={[-0.18, 0.08, 0.65]}>
            <sphereGeometry args={[0.04, 32, 32]} />
            <meshStandardMaterial color={darkColor} roughness={0.2} />
          </mesh>
          
          {/* Right Pupil */}
          <mesh position={[0.22, 0.08, 0.65]}>
            <sphereGeometry args={[0.04, 32, 32]} />
            <meshStandardMaterial color={darkColor} roughness={0.2} />
          </mesh>

          {/* Eye Highlights */}
          <mesh position={[-0.16, 0.1, 0.67]}>
            <sphereGeometry args={[0.015, 16, 16]} />
            <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.5} />
          </mesh>
          <mesh position={[0.24, 0.1, 0.67]}>
            <sphereGeometry args={[0.015, 16, 16]} />
            <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.5} />
          </mesh>

          {/* Nose */}
          <mesh position={[0, -0.1, 0.6]}>
            <sphereGeometry args={[0.08, 32, 32]} />
            <meshStandardMaterial color={darkColor} roughness={0.3} />
          </mesh>

          {/* Mouth/Smile */}
          <mesh position={[0, -0.2, 0.55]} rotation={[0.2, 0, 0]}>
            <torusGeometry args={[0.08, 0.02, 16, 32, Math.PI]} />
            <meshStandardMaterial color={darkColor} roughness={0.5} />
          </mesh>

          {/* Left Cheek Blush */}
          <mesh position={[-0.38, -0.05, 0.45]}>
            <sphereGeometry args={[0.1, 32, 32]} />
            <meshStandardMaterial color={blushColor} transparent opacity={0.4} roughness={0.8} />
          </mesh>
          
          {/* Right Cheek Blush */}
          <mesh position={[0.38, -0.05, 0.45]}>
            <sphereGeometry args={[0.1, 32, 32]} />
            <meshStandardMaterial color={blushColor} transparent opacity={0.4} roughness={0.8} />
          </mesh>
        </mesh>

        {/* Left Arm (static) */}
        <mesh position={[-0.7, 0.2, 0.2]} rotation={[0, 0, 0.5]}>
          <capsuleGeometry args={[0.15, 0.4, 16, 32]} />
          <meshStandardMaterial color={darkColor} roughness={0.6} />
        </mesh>

        {/* Right Arm (holding bottle) */}
        <group ref={armRef} position={[0.7, 0.3, 0.2]}>
          <mesh rotation={[0, 0, -0.5]}>
            <capsuleGeometry args={[0.15, 0.4, 16, 32]} />
            <meshStandardMaterial color={darkColor} roughness={0.6} />
          </mesh>
          
          {/* Bottle */}
          <group position={[0.3, 0.4, 0]}>
            {/* Bottle Body */}
            <mesh position={[0, 0, 0]}>
              <cylinderGeometry args={[0.08, 0.1, 0.35, 32]} />
              <meshStandardMaterial color={bottleColor} roughness={0.3} metalness={0.2} />
            </mesh>
            
            {/* Bottle Neck */}
            <mesh position={[0, 0.22, 0]}>
              <cylinderGeometry args={[0.05, 0.06, 0.1, 32]} />
              <meshStandardMaterial color={bottleColor} roughness={0.3} metalness={0.3} />
            </mesh>
            
            {/* Bottle Cap */}
            <mesh position={[0, 0.3, 0]}>
              <cylinderGeometry args={[0.055, 0.055, 0.05, 32]} />
              <meshStandardMaterial color="#6B5344" roughness={0.4} />
            </mesh>

            {/* Bottle Label */}
            <mesh position={[0, -0.02, 0.085]}>
              <planeGeometry args={[0.12, 0.08]} />
              <meshStandardMaterial color={lightColor} roughness={0.8} />
            </mesh>

            {/* Bubbles inside bottle */}
            <mesh position={[0.02, -0.05, 0.02]}>
              <sphereGeometry args={[0.015, 16, 16]} />
              <meshStandardMaterial color={lightColor} transparent opacity={0.6} />
            </mesh>
            <mesh position={[-0.02, 0.02, -0.02]}>
              <sphereGeometry args={[0.01, 16, 16]} />
              <meshStandardMaterial color={lightColor} transparent opacity={0.5} />
            </mesh>
            <mesh position={[0, 0.08, 0.03]}>
              <sphereGeometry args={[0.012, 16, 16]} />
              <meshStandardMaterial color={lightColor} transparent opacity={0.4} />
            </mesh>
          </group>
        </group>

        {/* Left Leg */}
        <mesh position={[-0.35, -0.7, 0.3]} rotation={[0.5, 0, 0]}>
          <capsuleGeometry args={[0.18, 0.25, 16, 32]} />
          <meshStandardMaterial color={darkColor} roughness={0.6} />
        </mesh>
        
        {/* Right Leg */}
        <mesh position={[0.35, -0.7, 0.3]} rotation={[0.5, 0, 0]}>
          <capsuleGeometry args={[0.18, 0.25, 16, 32]} />
          <meshStandardMaterial color={darkColor} roughness={0.6} />
        </mesh>
      </group>
    </Float>
  );
}

// Main Panda3D Component
export default function Panda3D({ className = '' }: { className?: string }) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 4], fov: 45 }}
        style={{ background: 'transparent' }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <directionalLight position={[-3, 3, 2]} intensity={0.5} color="#9C7B5C" />
        <pointLight position={[0, 2, 3]} intensity={0.4} color="#E8B4A0" />
        
        <PandaModel />
      </Canvas>
    </div>
  );
}
