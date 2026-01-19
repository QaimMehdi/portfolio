import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  const [isInView, setIsInView] = React.useState(false);
  const containerRef = React.useRef();

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className='w-full h-full relative flex justify-center items-center'>
      {/* Background Placeholder - Always visible to prevent white boxes */}
      <img
        src={icon}
        alt='tech'
        className={`w-full h-full object-contain absolute transition-opacity duration-500 ${isInView ? "opacity-20" : "opacity-100"
          }`}
      />

      {/* 3D Ball - Only active when in view to save WebGL contexts */}
      {isInView && (
        <Canvas
          frameloop='demand'
          dpr={[1, 1]}
          gl={{ preserveDrawingBuffer: true, powerPreference: "high-performance" }}
          className='w-full h-full'
        >
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls enableZoom={false} />
            <Ball imgUrl={icon} />
          </Suspense>

          <Preload all />
        </Canvas>
      )}
    </div>
  );
};

export default BallCanvas;
