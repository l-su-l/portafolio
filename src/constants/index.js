export const navLinks = [
  {
    id: 0,
    name: 'Acerca de',
    href: '#Acerca_mi',
  },
  {
    id: 1,
    name: 'Proyectos',
    href: '#proyectos',
  },
  {
    id: 2,
    name: 'Contacto',
    href: '#Contacto',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'SafeWorkPlace: La Plataforma para un Entorno Laboral Seguro',
    desc: 'SafeWorkPlace es un servicio de Software diseñado para prevenir y gestionar el acoso laboral. Su objetivo es ayudar a las empresas a cumplir con la Ley Karin en Chile para un ambiente de trabajo respetuoso. Con interfaces web de denuncias anónimas, análisis proactivo basado en Machine Learning y herramientas de gestión de casos, SafeWorkPlace trata de agiliza la forma de como aplican la ley karin en Chile.',
    subdesc:
      'Desarrollada con React.js, Django, y bases de datos MySQL.',
    href: 'https://www.youtube.com/watch?v=zfAb95tJvZQ',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/38.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/logodjango.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/logothreejs.png',
      },
    ],
  },
  {
    title: '•» ᴘᴏʀᴛᴀꜰᴏʟɪᴏ | ꜱᴇʙᴀꜱᴛɪᴀɴ ᴀᴄᴜɴᴀ ᴅᴇꜱᴀʀʀᴏʟʟᴀᴅᴏʀ ꜰᴜʟʟ ꜱᴛᴀᴄᴋ | ʙᴀᴄᴋᴇɴᴅ ᴘʏᴛʜᴏɴ | ʀᴇᴀᴄᴛ ᴅᴇᴠᴇʟᴏᴘᴇʀ «•',
    desc: 'Proyecto desarrollado con React.js, es un portafolio interactivo diseñado para mostrar experiencia, habilidades y proyectos especificos.',
    subdesc:
      'Incluye una experiencia inmersiva con modelos 3D y animaciones aplicando tecnologías avanzadas en el desarrollo web. El diseño es completamente responsivo y gratuito, dando una visualización óptima en dispositivos',
    href: 'https://www.youtube.com/watch?v=y5vE8y_f_OM',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/SA.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/nodejs.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/logothreejs.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Framer',
    pos: 'Lead Web Developer',
    duration: '2022 - Present',
    title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
    icon: '/assets/framer.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Figma',
    pos: 'Web Developer',
    duration: '2020 - 2022',
    title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
    icon: '/assets/figma.svg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Notion',
    pos: 'Junior Web Developer',
    duration: '2019 - 2020',
    title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
    icon: '/assets/notion.svg',
    animation: 'salute',
  },
];
