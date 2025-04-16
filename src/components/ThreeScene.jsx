import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const Model = () => {
  const { scene } = useGLTF(import.meta.env.BASE_URL + 'models/drone.glb');

  return <primitive object={scene} scale={2} position={[0, -0.015, 0]}/>;
};

const Model2 = () => {
  const { scene } = useGLTF(import.meta.env.BASE_URL + 'models/human.glb'); // Change path for Model 2

  return <primitive object={scene} position={[0.35, 0.22, -1]} scale={0.055} rotation={[0, 3, 0]} />;
};

const ThreeScene = () => {
  return (
    <Canvas
      className="pointer-events-none inset-0 bg-gray-400"
      style={{ width: "95%", height: "95%" }}
      camera={{ position: [2, 1.5, -4], fov: 50, rotation: [0, 0, 0] }}
    >
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1}/>

      {/* GLB Model */}
      <Model />

      {/* GLB Model 2 */}
      <Model2 />

      <gridHelper args={[5, 10]} position={[0, 0, 0]} />

      {/* Camera Controls */}
      <OrbitControls maxDistance={10} minDistance={3} enablePan={false}/>
    </Canvas>
  );
};

export default ThreeScene;
