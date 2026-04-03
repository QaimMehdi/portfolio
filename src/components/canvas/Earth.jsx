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
  const [isMobile, setIsMobile] = React.useState(false);
  const [isPreloading, setIsPreloading] = React.useState(false);
  const containerRef = React.useRef();

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        
        // Preload model when user gets close (rootMargin triggers before visible)
        if (entry.isIntersecting && !isPreloading) {
          setIsPreloading(true);
          // Stagger preload to avoid network congestion
          setTimeout(() => {
            useGLTF.preload("./planet/scene.gltf").catch(() => {
              // Silently handle preload errors
            });
          }, 500);
        }
      },
      { threshold: 0.01, rootMargin: "300px" }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [isPreloading]);

  return (
    <div ref={containerRef} className='w-full h-full relative'>
      {!isInView && (
        <div className='w-full h-full bg-[#151030] rounded-full opacity-20 absolute inset-0 m-auto' style={{ width: '80%', height: '80%' }} />
      )}
      {isInView && (
        <Canvas
          shadows={!isMobile}
          frameloop='demand'
          dpr={isMobile ? [1, 1] : [1, 2]}
          gl={{
            preserveDrawingBuffer: true,
            powerPreference: "high-performance",
            antialias: !isMobile
          }}
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

export default EarthCanvas;
