import { useState } from 'react';
import { Link } from 'react-scroll'; // Importamos Link de react-scroll
import { navLinks } from '../constants/index.js';

// Función de NavItems con un nuevo nombre para el onClick
const NavItems = ({ closeMenuOnClick, handleSectionBlink }) => (
  <ul className="nav-ul">
    {navLinks.map((item) => (
      <li key={item.id} className="nav-li">
        <Link
          to={item.href.slice(1)}  // Usamos el ID directamente
          smooth={true}             // Desplazamiento suave
          duration={500}            // Duración de desplazamiento (más adecuado)
          offset={-70}             // Ajuste para el navbar fijo
          className="nav-li_a cursor-pointer"      // Clase para el enlace
          onClick={() => {
            handleSectionBlink(item.href.slice(1));  // Parpadeo al hacer clic
            closeMenuOnClick();  // Cierra el menú después de hacer clic
          }}
        >
          {item.name}
        </Link>
      </li>
    ))}
  </ul>
);

// Componente Navbar
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Función para manejar el parpadeo
  const handleSectionBlink = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      // Agregar una clase de parpadeo al elemento sección de golpe
      section.classList.add('blink');

      // Eliminar la clase después de un tiempo
      setTimeout(() => {
        section.classList.remove('blink');
      }, 2889); // Duración del parpadeo
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent pt-1">
      <div className="max-w-7xl mx-auto py-1 border border-l-transparent border-r-transparent">
        <div className="flex justify-between items-center">
          <p className="text-neutral-400 font-bold hover:text-white transition-colors ">
            <p className="text-xl cursor-pointer">Sebastian Acuña</p>
            <p className="text-neutral-400">Desarrollador Full Stack | Backend Python | React Developer</p>
          </p>

          <nav className={`sm:flex ${isOpen ? 'block' : 'hidden'}`}>
            <NavItems
              closeMenuOnClick={() => setIsOpen(false)}
              handleSectionBlink={handleSectionBlink}
            />
          </nav>
        </div>
      </div>

      <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <nav className="p-5">
          <NavItems
            closeMenuOnClick={() => setIsOpen(false)}
            handleSectionBlink={handleSectionBlink}
          />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
