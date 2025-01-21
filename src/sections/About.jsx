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
            <img src="portafolio/public/assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Buenas Ak Sebastian</p>
              <p className="grid-subtext">
                Simple desarrollador apasionado por crear aplicaciones web
                completas, combinando tecnologías frontend y
                backend para ofrecer soluciones dinámicas y funcionales.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <Habilidades/>

            <div>
              <p className="grid-headtext">Habilidades</p>
              <p className="grid-subtext">
                Cuento
                con experiencia en desarrollo con React y Django, integración de
                APIs personalizadas.
              </p>
            </div>
          </div>
        </div>

        <section id="Contacto" className="xl:col-span-1 xl:row-span-2 h-[104%]">
          <div className="w-full h-full border border-black-300 bg-black-200 rounded-lg sm:p-2 flex flex-col gap-5 items-start">

            <div className=' bg-zinc-800 rounded px-1 py-1'>
              <div className="space-y-2">
                <p className="grid-subtext text-center">Contactame</p>
              </div>

              <div className="space-y-2 px-1">
                <div className="flex gap-1" onClick={handleCopy}>
                  <img src={hasCopied ? 'portafolio/public/assets/tick.svg' : 'portafolio/public/assets/copy.svg'} alt="copy" className='cursor-pointer z-50'/>
                  <p className="lg:text-lg md:text-lg font-medium text-gray_gradient text-white">sebastian.acuna.oy23@gmail.com</p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-3 pl-2">
                  <img src={'portafolio/public/assets/iconochile.png'} alt="iconchile" className='w-[32px] h-[20px] rounded' />
                  <p className="lg:text-lg md:text-lg font-medium text-gray_gradient text-white">Chileno</p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex gap-3 pl-2 pt-1">
                  <img src={'portafolio/public/assets/globo-terraqueo.png'} alt="iconchile" className='h-[5%] rounded' />
                  <p className="lg:text-lg md:text-xl font-medium text-gray_gradient text-white">Estación Central | Región Metropolitana de Santiago</p>
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
