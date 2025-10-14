'use client';

import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { 
  OrbitControls, 
  Environment, 
  Float, 
  MeshDistortMaterial,
  Sparkles
} from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';

// Composant pour un modèle 3D stylisé représentant un coach
const CoachFigure = ({ scale = 2, position = [0, 0, 0] }) => {
  const group = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  
  // Animation de rotation plus fluide
  useFrame(({ clock }) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.3) * 0.2;
      group.current.position.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.1;
    }
  });

  return (
    <group 
      ref={group} 
      position={position as [number, number, number]} 
      scale={scale}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
        {/* Tête avec effet de distortion */}
        <mesh position={[0, 0.8, 0]} castShadow>
          <sphereGeometry args={[0.5, 64, 64]} />
          <MeshDistortMaterial 
            color="#0A3A67" 
            speed={3} 
            distort={hovered ? 0.3 : 0.2} 
            radius={1}
          />
        </mesh>
        
        {/* Corps avec effet de distortion */}
        <mesh position={[0, 0, 0]} castShadow>
          <capsuleGeometry args={[0.3, 1, 32, 64]} />
          <MeshDistortMaterial 
            color="#0AB9A6" 
            speed={2}
            distort={hovered ? 0.2 : 0.1}
          />
        </mesh>
        
        {/* Bras gauche */}
        <mesh position={[-0.5, 0.2, 0]} rotation={[0, 0, -Math.PI / 4]} castShadow>
          <capsuleGeometry args={[0.1, 0.6, 32, 64]} />
          <meshStandardMaterial color="#1261AC" />
        </mesh>
        
        {/* Bras droit */}
        <mesh position={[0.5, 0.2, 0]} rotation={[0, 0, Math.PI / 4]} castShadow>
          <capsuleGeometry args={[0.1, 0.6, 32, 64]} />
          <meshStandardMaterial color="#1261AC" />
        </mesh>
        
        {/* Ordinateur portable interactif */}
        <group position={[0, -0.1, 0.4]} rotation={[Math.PI / 6, 0, 0]}>
          <mesh castShadow>
            <boxGeometry args={[0.6, 0.05, 0.4]} />
            <meshStandardMaterial color="#FFFFFF" metalness={0.5} roughness={0.2} />
          </mesh>
          
          {/* Écran de l'ordinateur avec logo simple */}
          <mesh position={[0, 0.025, 0]} rotation={[0, 0, 0]} castShadow>
            <planeGeometry args={[0.55, 0.35]} />
            <meshBasicMaterial color={hovered ? "#E6F7F6" : "#CCDEF1"} />
          </mesh>
          
          {/* Texte simplifié comme un rectangle */}
          <mesh position={[0, 0.025, 0.01]}>
            <planeGeometry args={[0.3, 0.1]} />
            <meshBasicMaterial color="#0A3A67" />
          </mesh>
        </group>
        
        {/* Particules autour */}
        <Sparkles 
          count={30} 
          scale={3} 
          size={0.4} 
          speed={0.3} 
          color={hovered ? "#0AB9A6" : "#1261AC"} 
        />
      </Float>
    </group>
  );
};

// Composant principal à exporter
const CoachModel = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Attendre le montage pour éviter les problèmes SSR
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-[350px] w-full bg-gradient-to-br from-turquoise-50 to-blue-50 rounded-2xl flex items-center justify-center">
        <div className="text-2xl font-bold text-turquoise">COACH 3D</div>
      </div>
    );
  }

  return (
    <motion.div 
      className="h-[350px] w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Canvas shadows camera={{ position: [0, 0, 5], fov: 45 }}>
        <color attach="background" args={['transparent']} />
        <ambientLight intensity={0.6} />
        <spotLight position={[5, 10, 10]} angle={0.15} penumbra={1} intensity={0.8} castShadow />
        <spotLight position={[-5, 10, -10]} angle={0.15} penumbra={1} intensity={0.4} castShadow color="#0AB9A6" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <CoachFigure />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          minPolarAngle={Math.PI / 3} 
          maxPolarAngle={Math.PI / 1.5}
          rotateSpeed={0.5}
        />
        <Environment preset="city" />
      </Canvas>
    </motion.div>
  );
};

export default CoachModel; 