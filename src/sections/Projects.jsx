import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls } from '@react-three/drei';

import { myProjects } from '../constants/index.js';
import CanvasLoader from '../components/Loading.jsx';
import DemoComputer from '../components/DemoComputer.jsx';

const projectCount = myProjects.length;

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === 'previous') {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  useGSAP(() => {
    gsap.fromTo(`.animatedText`, { opacity: 0 }, { opacity: 1, duration: 1, stagger: 0.2, ease: 'power2.inOut' });
  }, [selectedProjectIndex]);

  const currentProject = myProjects[selectedProjectIndex];

  return (
    <section id="proyectos" className="c-space mb-1 mx-1 mt-[14%]">

      <div className="grid lg:grid-cols-2 grid-cols-1 mt-1 gap-1 w-full">
        <div className="flex flex-col gap-5 relative sm:p-10 pb-1 px-5 shadow-2xl shadow-black-200">

          <div className="flex justify-between items-center">
            <button className="arrow-btn" onClick={() => handleNavigation('previous')}>
              <img src={`${import.meta.env.BASE_URL}assets/left-arrow.png`} alt="left arrow" />
            </button>

            <div className='flex items-center gap-1'>
              <img className='w-[40px]' src={`${import.meta.env.BASE_URL}assets/porta.png`} alt="icono" />
              <p className="head-text">Proyectos</p>
            </div>

            <button className="arrow-btn" onClick={() => handleNavigation('next')}>
              <img src={`${import.meta.env.BASE_URL}assets/right-arrow.png`} alt="right arrow" className="w-4 h-4 z-20" />
            </button>
          </div>
        </div>

        <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
          <Canvas>
            <ambientLight intensity={Math.PI} />
            <directionalLight position={[10, 10, 5]} />
            <Center>
              <Suspense fallback={<CanvasLoader />}>
                <group scale={2.3} position={[-0.2, -4, -1]} rotation={[0, -0.1, 0]}>
                  <DemoComputer texture={currentProject.texture} />
                </group>
              </Suspense>
            </Center>
            <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={true}  minDistance={2} maxDistance={10} />
          </Canvas>
        </div>

        <div>

          <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg" style={currentProject.logoStyle}>
            <img className="w-[120px] h-[80px] shadow-sm" src={currentProject.logo} alt="logo" />
          </div>

          <div className="flex flex-col gap-5 text-white-600 my-5">
            <p className="text-white text-2xl font-semibold animatedText">{currentProject.title}</p>

            <p className="animatedText">{currentProject.desc}</p>
          </div>

          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3">
              {currentProject.tags.map((tag, index) => (
                <div key={index} className="tech-logo">
                  <img src={tag.path} alt={tag.name} className="rounded " />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
