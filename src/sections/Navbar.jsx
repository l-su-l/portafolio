import { useState } from 'react';
import { Link } from 'react-scroll'; // Importamos Link de react-scroll
import { navLinks } from '../constants/index.js';

// Función de NavItems
const NavItems = ({ closeMenuOnClick, handleSectionBlink }) => (
  <ul className="nav-ul flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 text-center">
    {navLinks.map((item) => (
      <li key={item.id} className="nav-li">
        <Link
          to={item.href.slice(1)} // Usamos el ID directamente
          smooth={true} // Desplazamiento suave
          duration={500} // Duración de desplazamiento
          offset={-70} // Ajuste para el navbar fijo
          className="nav-li_a cursor-pointer text-lg font-medium text-neutral-400 hover:text-white transition-colors"
          onClick={() => {
            handleSectionBlink(item.href.slice(1)); // Parpadeo al hacer clic
            closeMenuOnClick(); // Cierra el menú después de hacer clic
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
      section.classList.add('blink');
      setTimeout(() => {
        section.classList.remove('blink');
      }, 300); // Duración del parpadeo
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-80 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center border-b border-neutral-700">
        {/* Título y descripción */}
        <div className="text-neutral-400">
          <img src={`${import.meta.env.BASE_URL}assets/SA.png`} alt="grid-1" className="w-[50px]" />
        </div>

        {/* Menú principal */}
        <nav className="hidden sm:flex">
          <NavItems closeMenuOnClick={closeMenu} handleSectionBlink={handleSectionBlink} />
        </nav>

        {/* Botón del menú hamburguesa */}
        <button
          onClick={toggleMenu}
          className="sm:hidden text-neutral-400 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Menú lateral para pantallas pequeñas */}
      <div
        className={`fixed top-0 right-0 h-full w-[40%] bg-black opacity-50 backdrop-blur-lg transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 sm:hidden`}
      >
        {/* Botón de "Cerrar" */}
        <button
          onClick={closeMenu}
          className="absolute top-4 right-4 text-neutral-400 hover:text-white transition-colors"
          aria-label="Close menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <nav className="p-6 mt-10">
          <NavItems closeMenuOnClick={closeMenu} handleSectionBlink={handleSectionBlink} />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
