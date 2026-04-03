import React, { Suspense, lazy, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works } from "./components";

const StarsCanvas = lazy(() => import("./components/canvas/Stars"));

const App = () => {
  // Implement smart 3D asset preloading strategy
  useEffect(() => {
    // Only preload on fast connections and idle time
    if ('requestIdleCallback' in window && 'connection' in navigator) {
      const connection = navigator.connection;
      
      // Only preload aggressively on fast 4G and wifi
      if (connection.effectiveType === '4g' || connection.effectiveType === 'wifi') {
        // Defer desktop model preload slightly to not block main content
        const tid = setTimeout(() => {
          if ('requestIdleCallback' in window) {
            requestIdleCallback(
              () => {
                import('@react-three/drei').then(({ useGLTF }) => {
                  useGLTF.preload("./desktop_pc/scene.gltf");
                });
              },
              { timeout: 5000 }
            );
          }
        }, 1000);

        return () => clearTimeout(tid);
      }
    }
  }, []);

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <Suspense fallback={null}>
            <StarsCanvas />
          </Suspense>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
