import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Footer from './sections/Footer.jsx';
import Navbar from './sections/Navbar.jsx';
import Projects from './sections/Projects.jsx';

const App = () => {
  return (
    <main className="max-w-7xl mx-auto relative flex flex-col">
      <Navbar />
      <Projects/>
      <Footer />
    </main>
  );
};

export default App;
