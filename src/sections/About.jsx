import { useState } from 'react';
import Button from '../components/Button.jsx';
import Habilidades from '../components/Habilidades.jsx';
import Projects from '../sections/Projects.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('sebastian.acuna.oy23@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space mt-[80px]" id="Acerca_mi">
      <div className="grid xl:grid-cols-3 xl:grid-rows-2 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src={`${import.meta.env.BASE_URL}assets/grid1.png`} alt="grid-1" className="" />
            <div>
              <p className="text-xl font-bold cursor-pointer text-gray-200 transition-colors">
                Buenas Ak Sebastian A.
              </p>
              <p className="grid-subtext">
                Desarrollador de aplicaciones web en lenguajes nativos como PHP, JavaScript y SQL. Con experiencia en frameworks de
                frontend React y Laravel, para el backend uso Django, Laravel o PHP nativo para el desarrollo de RestApis
                funcionales que ofrezcan soluciones.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
