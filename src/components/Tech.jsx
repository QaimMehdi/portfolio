import React from "react";
import { BallCanvas, StaticBall } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology, index) => (
        <div className='w-28 h-28' key={technology.name}>
          {isMobile && index >= 8 ? (
            <StaticBall icon={technology.icon} />
          ) : (
            <BallCanvas icon={technology.icon} isMobile={isMobile} />
          )}
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
