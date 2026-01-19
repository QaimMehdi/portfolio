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
const BallCanvas = ({ icon, isMobile }) => {
  const [isInView, setIsInView] = React.useState(false);
  const containerRef = React.useRef();

  React.useEffect(() => {
    // On desktop, we want the balls to always be active for free movement
    if (!isMobile) {
      setIsInView(true);
      return;
    }

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
  }, [isMobile]);

  return (
    <div ref={containerRef} className='w-full h-full relative flex justify-center items-center'>
      {/* CSS-based 3D Placeholder - Perfectly transparent and lightweight */}
      <div className={`w-full h-full absolute flex justify-center items-center pointer-events-none transition-opacity duration-500 ${isInView ? "opacity-0" : "opacity-100"}`}>
        <div className='w-[90%] h-[90%] rounded-full bg-[#fff8eb] shadow-[inset_-10px_-10px_20px_rgba(0,0,0,0.2),10px_10px_20px_rgba(0,0,0,0.1)] flex justify-center items-center'>
          <img
            src={icon}
            alt='tech-icon'
            className='w-1/2 h-1/2 object-contain opacity-80'
          />
        </div>
      </div>

      {/* 3D Ball - Active only when needed on mobile, always on desktop */}
      {isInView && (
        <Canvas
          frameloop='demand'
          shadows={!isMobile}
          dpr={isMobile ? [1, 1] : [1, 2]}
          gl={{
            preserveDrawingBuffer: true,
            powerPreference: "high-performance",
            antialias: !isMobile
          }}
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
