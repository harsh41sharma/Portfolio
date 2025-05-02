import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import Computer from "./Computer";

const ContactExperience = () => {
  return (
    <Canvas 
      shadows 
      camera={{ position: [0, 3, 7], fov: 45 }} 
      style={{ backgroundColor: "#FFFFFF" }} // White background
    >
      {/* Lighting for a white-themed background */}
      <ambientLight intensity={0.6} color="#FFFFFF" /> {/* Soft white ambient light */}
      
      <directionalLight position={[5, 5, 3]} intensity={2.5} color="#FFDD99" /> {/* Warm light */}
      
      <directionalLight
        position={[5, 9, 1]}
        castShadow
        intensity={2.5}
        color="#FFDD99"  // Keeping a warm tone
      />

      {/* Orbit controls */}
      <OrbitControls
        enableZoom={false}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      {/* Ground Plane */}
      <group scale={[1, 1, 1]}>
        <mesh
          receiveShadow
          position={[0, -1.5, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <planeGeometry args={[30, 30]} />
          <meshStandardMaterial color="#F0F0F0" /> {/* Lighter grey for subtle contrast */}
        </mesh>
      </group>

      {/* 3D Model (Computer) */}
      <group scale={0.03} position={[0, -1.49, -2]} castShadow>
        <Computer />
      </group>
    </Canvas>
  );
};

export default ContactExperience;
