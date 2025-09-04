import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { 
  OrbitControls, 
  Sphere, 
  MeshDistortMaterial,
  Points,
  PointMaterial,
  Preload,
  Float,
  Trail,
  Box,
  Torus
} from '@react-three/drei';
import * as THREE from 'three';
import styles from './ThreeScene.module.css';

// Partículas eléctricas
const ElectricParticles = () => {
  const ref = useRef();
  const count = 5000;
  
  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = THREE.MathUtils.randFloatSpread(360);
      const phi = THREE.MathUtils.randFloatSpread(360);
      const distance = THREE.MathUtils.randFloat(5, 40);
      
      positions[i * 3] = distance * Math.sin(theta) * Math.cos(phi);
      positions[i * 3 + 1] = distance * Math.sin(theta) * Math.sin(phi);
      positions[i * 3 + 2] = distance * Math.cos(theta);
    }
    return positions;
  }, [count]);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta * 0.05;
      ref.current.rotation.y -= delta * 0.075;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00d4ff"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
};

// Esfera de energía central
const EnergySphere = ({ mousePosition }) => {
  const meshRef = useRef();
  const lightRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.01;
      
      // Reaccionar al mouse
      meshRef.current.position.x = mousePosition.x * 0.5;
      meshRef.current.position.y = mousePosition.y * 0.5;
    }
    
    if (lightRef.current) {
      const time = state.clock.getElapsedTime();
      lightRef.current.intensity = 2 + Math.sin(time * 2) * 0.5;
    }
  });

  return (
    <>
      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <ambientLight intensity={0.25} />
        <pointLight 
          ref={lightRef}
          position={[0, 0, 0]} 
          intensity={2} 
          color="#00d4ff"
        />
        
        {/* Esfera principal con distorsión */}
        <Sphere ref={meshRef} args={[1.5, 64, 64]}>
          <MeshDistortMaterial
            color="#00d4ff"
            attach="material"
            distort={0.3}
            speed={2}
            roughness={0.2}
            metalness={0.8}
            emissive="#003d5c"
            emissiveIntensity={0.5}
          />
        </Sphere>
        
        {/* Anillo orbital 1 */}
        <Torus 
          args={[2.5, 0.05, 16, 100]} 
          rotation={[Math.PI / 2, 0, 0]}
        >
          <meshStandardMaterial
            color="#7209b7"
            emissive="#7209b7"
            emissiveIntensity={2}
            toneMapped={false}
          />
        </Torus>
        
        {/* Anillo orbital 2 */}
        <Torus 
          args={[3, 0.03, 16, 100]} 
          rotation={[Math.PI / 3, Math.PI / 4, 0]}
        >
          <meshStandardMaterial
            color="#00f5ff"
            emissive="#00f5ff"
            emissiveIntensity={2}
            toneMapped={false}
          />
        </Torus>
      </Float>
    </>
  );
};

// Rayos eléctricos
const ElectricBolt = ({ start, end }) => {
  const ref = useRef();
  
  const points = useMemo(() => {
    const pts = [];
    const segments = 20;
    
    for (let i = 0; i <= segments; i++) {
      const t = i / segments;
      const x = start[0] + (end[0] - start[0]) * t + (Math.random() - 0.5) * 0.5;
      const y = start[1] + (end[1] - start[1]) * t + (Math.random() - 0.5) * 0.5;
      const z = start[2] + (end[2] - start[2]) * t + (Math.random() - 0.5) * 0.5;
      pts.push(new THREE.Vector3(x, y, z));
    }
    
    return pts;
  }, [start, end]);
  
  useFrame(() => {
    if (ref.current) {
      ref.current.material.opacity = 0.3 + Math.random() * 0.7;
    }
  });
  
  return (
    <Trail
      width={0.5}
      color="#00d4ff"
      length={10}
      decay={1}
      attenuation={(t) => t * t}
    >
      <mesh ref={ref}>
        <tubeGeometry args={[new THREE.CatmullRomCurve3(points), 20, 0.02, 8, false]} />
        <meshBasicMaterial color="#00f5ff" transparent opacity={0.8} />
      </mesh>
    </Trail>
  );
};

// Cubos flotantes de circuitos
const FloatingCube = ({ position, scale = 1 }) => {
  const ref = useRef();
  
  useFrame((state) => {
    if (ref.current) {
      const time = state.clock.getElapsedTime();
      ref.current.rotation.x = Math.sin(time * 0.3) * 0.5;
      ref.current.rotation.y = Math.cos(time * 0.2) * 0.5;
      ref.current.position.y = position[1] + Math.sin(time) * 0.5;
    }
  });
  
  return (
    <Box ref={ref} position={position} args={[scale, scale, scale]}>
      <meshStandardMaterial
        color="#1a1a2e"
        emissive="#00d4ff"
        emissiveIntensity={0.2}
        wireframe
      />
    </Box>
  );
};

// Componente principal de la escena
const ThreeSceneContent = ({ mousePosition }) => {
  return (
    <>
      <color attach="background" args={['#000814']} />
      <fog attach="fog" args={['#000814', 10, 50]} />
      
      {/* Iluminación */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={0.5} />
      
      {/* Elementos de la escena */}
      <ElectricParticles />
      <EnergySphere mousePosition={mousePosition} />
      
      {/* Rayos eléctricos */}
      <ElectricBolt start={[-5, 0, 0]} end={[5, 0, 0]} />
      <ElectricBolt start={[0, -5, 0]} end={[0, 5, 0]} />
      <ElectricBolt start={[0, 0, -5]} end={[0, 0, 5]} />
      
      {/* Cubos flotantes */}
      <FloatingCube position={[-4, 2, -3]} scale={0.5} />
      <FloatingCube position={[4, -2, -3]} scale={0.7} />
      <FloatingCube position={[-3, -3, 2]} scale={0.6} />
      <FloatingCube position={[3, 3, 2]} scale={0.8} />
      
      {/* Controles de órbita sutiles */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        autoRotate
        autoRotateSpeed={0.5}
      />
      
      <Preload all />
    </>
  );
};

// Componente de carga
const Loader = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.loaderSpinner}></div>
      <p className={styles.loaderText}>Cargando experiencia 3D...</p>
    </div>
  );
};

// Componente principal exportado
const ThreeScene = ({ mousePosition = { x: 0, y: 0 } }) => {
  return (
    <div className={styles.canvasContainer}>
      <Canvas
        camera={{ position: [0, 0, 15], fov: 75 }}
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: "high-performance"
        }}
      >
        <Suspense fallback={null}>
          <ThreeSceneContent mousePosition={mousePosition} />
        </Suspense>
      </Canvas>
      
      {/* Overlay de efecto de escaneo */}
      <div className={styles.scanline}></div>
    </div>
  );
};

export default ThreeScene;