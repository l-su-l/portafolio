import { useState } from 'react';
import Button from '../components/Button.jsx';
import Habilidades from '../components/Habilidades.jsx';

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
    <section className="c-space my-2 relative top-[130px]" id="Acerca_mi">
      <div className="grid xl:grid-cols-3 xl:grid-rows-2 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src={`${import.meta.env.BASE_URL}assets/grid1.png`} alt="grid-1" className="grid-image" />
            <div>
              <p className="grid-headtext">Buenas Ak Sebastian</p>
              <p className="grid-subtext">
                Desarrollador de aplicaciones web en lenguajes como PHP, JavaScript y SQL. Con experiencia en frameworks de
                frontend como React y Laravel, y en backend con Django o Laravel, para el desarrollo de APIs dinámicas y
                funcionales que ofrezcan soluciones efectivas.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <Habilidades />

            <div className="">
              <p className="grid-headtext">Herramientas de desarrollo</p>
              <p className="grid-subtext">Desarrollo en React y Django para integración de APIs personalizadas.</p>
              <p className="grid-subtext mt-1">
                Desarrollo de software web en Larabel para Analisis y programación, trabajos principalmente con base de
                datos MYSQL , lenguaje de desarrollo PHP, Framework Larabel
              </p>
            </div>
          </div>
        </div>

        <section id="Contacto" className="xl:col-span-1 xl:row-span-2 h-[104%]">
          <div className="w-full h- border border-black-300 bg-black-200 rounded-lg sm:p-1 flex flex-col gap-5 items-start">
            <div className=" bg-zinc-800 rounded px-1 py-1 w-full h-full">
              <div className="space-y-2">
                <p className="grid-subtext text-center">Contactame</p>
              </div>

              <div className="space-y-2 px-1">
                <div className="flex gap-1" onClick={handleCopy}>
                  <img
                    src={
                      hasCopied
                        ? `${import.meta.env.BASE_URL}assets/tick.svg`
                        : `${import.meta.env.BASE_URL}assets/copy.svg`
                    }
                    alt="copy"
                    className="cursor-pointer z-50"
                  />

                  <p className="lg:text-lg md:text-lg font-medium text-gray_gradient text-white">
                    sebastian.acuna.oy23@gmail.com
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-3 pl-2">
                  <img
                    src={`${import.meta.env.BASE_URL}assets/iconochile.png`}
                    alt="iconchile"
                    className="w-[32px] h-[20px] rounded"
                  />
                  <p className="lg:text-lg md:text-lg font-medium text-gray_gradient text-white">Chileno</p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex gap-3 pl-2 pt-1">
                  <img
                    src={`${import.meta.env.BASE_URL}assets/globo-terraqueo.png`}
                    alt="iconchile"
                    className="h-[5%] rounded"
                  />
                  <p className="lg:text-lg md:text-xl font-medium text-gray_gradient text-white">
                    Estación Central | Región Metropolitana de Santiago
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default About;
