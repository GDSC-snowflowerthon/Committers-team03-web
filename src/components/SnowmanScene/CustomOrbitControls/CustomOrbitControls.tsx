import { useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

export default function CustomOrbitControls() {
  const {
    camera,
    gl: { domElement },
  } = useThree();

  return (
    <OrbitControls
      args={[camera, domElement]}
      enablePan={true}
      enableZoom={false}
      enableRotate={true}
      minPolarAngle={Math.PI / 2}
      maxPolarAngle={Math.PI / 2}
    />
  );
}