import { Leva } from 'leva';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { PerspectiveCamera } from '@react-three/drei';

import Cube from '../components/Cube.jsx';
import Rings from '../components/Rings.jsx';
import ReactLogo from '../components/ReactLogo.jsx';
import Button from '../components/Button.jsx';
import Target from '../components/Target.jsx';
import CanvasLoader from '../components/Loading.jsx';
import HeroCamera from '../components/HeroCamera.jsx';
import { calculateSizes } from '../constants/index.js';
import { HackerRoom } from '../components/HackerRoom.jsx';
import { Center, OrbitControls } from '@react-three/drei';
import { Starts_rescale } from '../components/Starts_rescale.jsx';

const Hero = () => {
  // Use media queries to determine screen size
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  // Define dynamic styles for section
  const sectionStyle = {
    height: isSmall ? "70vh" : isMobile ? "60vh" : "50vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    zIndex: 10,
  };

  return (
    <section style={sectionStyle} id="home">
      <div className="w-full h-[455px] absolute inset-0">
        <Canvas className=" w-full h-full ">
          <Suspense fallback={<CanvasLoader />}>
            {/* To hide controller */}
            <Leva hidden />
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />

            <HeroCamera isMobile={isMobile}>
              <Starts_rescale position={[0, isMobile ? -30 : -38, 0]} scale={[2, 2, 2]} />
            </HeroCamera>

            <group>
              <Target position={sizes.targetPosition} />
              <ReactLogo position={sizes.reactLogoPosition} />
              <Rings position={sizes.ringPosition} />
              <Cube position={sizes.cubePosition} />
            </group>

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
            <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;

