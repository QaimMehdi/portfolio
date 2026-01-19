import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");

  return (
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  const [isInView, setIsInView] = React.useState(false);
  const containerRef = React.useRef();

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1, rootMargin: "200px" }
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
    <div ref={containerRef} className='w-full h-full relative'>
      {!isInView && (
        <div className='w-full h-full bg-[#151030] rounded-full opacity-20 absolute inset-0 m-auto' style={{ width: '80%', height: '80%' }} />
      )}
      {isInView && (
        <Canvas
          shadows
          frameloop='demand'
          dpr={[1, 1]}
          gl={{ preserveDrawingBuffer: true, powerPreference: "high-performance" }}
          camera={{
            fov: 45,
            near: 0.1,
            far: 200,
            position: [-4, 3, 6],
          }}
        >
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls
              autoRotate
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
            <Earth />

            <Preload all />
          </Suspense>
        </Canvas>
      )}
    </div>
  );
};

useGLTF.preload("./planet/scene.gltf");

export default EarthCanvas;
