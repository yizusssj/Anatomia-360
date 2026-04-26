import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function TestCube() {
  return (
    <mesh rotation={[0.4, 0.6, 0]}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial color="#9ecbff" />
    </mesh>
  );
}

export default function ModelViewer() {
  return (
    <div className="w-full h-full rounded-2xl overflow-hidden">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[3, 3, 3]} intensity={1.5} />
        <TestCube />
        <OrbitControls enablePan enableZoom enableRotate />
      </Canvas>
    </div>
  );
}