import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function TestCube() {
  return (
    <mesh rotation={[0.4, 0.6, 0]}>
      <boxGeometry args={[1.55, 1.55, 1.55]} />
      <meshStandardMaterial color="#b9d4f0" metalness={0.12} roughness={0.45} />
    </mesh>
  );
}

export default function ModelViewer() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <color attach="background" args={["#0d131d"]} />
        <ambientLight intensity={1.15} />
        <directionalLight position={[3, 3, 3]} intensity={1.8} />
        <directionalLight position={[-2, 2, 4]} intensity={0.9} />
        <pointLight position={[0, -2, 3]} intensity={0.6} />

        <TestCube />

        <OrbitControls
          enablePan
          enableZoom
          enableRotate
          minDistance={2.5}
          maxDistance={8}
        />
      </Canvas>
    </div>
  );
}