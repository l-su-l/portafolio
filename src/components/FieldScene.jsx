import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { CSS2DRenderer, CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer';

const FieldScene = () => {
    const mountRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const rendererRef = useRef(null); // Mantener una referencia al renderer

    useEffect(() => {
        if (!mountRef.current) return;

        // Evitar múltiples renderers
        if (rendererRef.current) {
            console.warn('Renderer ya inicializado. Abortando reinicialización.');
            return;
        }

        // Configuración de escena, cámara y renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: false }); // Habilita transparencia
        rendererRef.current = renderer; // Guardar referencia

        const canvasWidth = 410; // Ancho del canvas
        const canvasHeight = 400; // Alto del canvas
        renderer.setSize(canvasWidth, canvasHeight);
        renderer.setPixelRatio(window.devicePixelRatio);

        // Montar el canvas en el DOM
        renderer.domElement.className = "rounded-full border border-black";
        mountRef.current.appendChild(renderer.domElement);

        // Luz ambiental y direccional
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(10, 10, 10);
        scene.add(directionalLight);

        // Crear un cubo
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        // Crear un plano
        const planoGeometry = new THREE.PlaneGeometry(5, 5, 1, 1);
        const planoMaterial = new THREE.MeshStandardMaterial({ color: 0x274ecf });
        const plano = new THREE.Mesh(planoGeometry, planoMaterial);
        plano.receiveShadow = true;
        plano.position.set(0, 0, 0);
        scene.add(plano);

        // Posición inicial de la cámara
        camera.position.set(0, 0, 5);

        // Configurar CSS2DRenderer
        const labelRenderer = new CSS2DRenderer();
        labelRenderer.setSize(window.innerWidth, window.innerHeight);
        labelRenderer.domElement.style.position = 'absolute';
        labelRenderer.domElement.style.top = '0px';
        labelRenderer.domElement.style.pointerEvents = 'none';
        mountRef.current.appendChild(labelRenderer.domElement); // Añadir al contenedor

        // Wrapper condicional
        const wrapper = document.createElement('wrapper');
        wrapper.className = 'wrapper';
        const blueDiv = document.createElement('div');
        blueDiv.className = 'color-picker';
        blueDiv.id = 'blue';
        blueDiv.style.backgroundColor = 'blue';

        wrapper.appendChild(blueDiv);
        const wrapperObject = new CSS2DObject(wrapper);
        scene.add(wrapperObject);
        wrapperObject.position.set(0, -2, 0);

        // Animación
        const animate = () => {
            cube.rotation.y = scrollPosition * 0.01;
            cube.position.y = Math.sin(scrollPosition * 0.01) * 0.5;

            labelRenderer.render(scene, camera);
            renderer.render(scene, camera);
        };
        renderer.setAnimationLoop(animate);

        // Cleanup
        return () => {
            console.log('Limpiando recursos...');
            if (renderer) {
                renderer.dispose();
                rendererRef.current = null;
            }
            if (mountRef.current) {
                while (mountRef.current.firstChild) {
                    mountRef.current.removeChild(mountRef.current.firstChild);
                }
            }
        };
    }, [scrollPosition]);

    // Manejo del scroll
    const handleScroll = () => {
        setScrollPosition(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
            {/* Canvas para la escena 3D */}
            <div
                ref={mountRef}
                style={{
                    position: 'fixed',
                    top: 10,
                    left: 10,
                    width: 'auto',
                    height: 'auto',
                    zIndex: 10,
                }}
            />
            {/* Contenido adicional para scroll */}
            <div style={{ position: 'relative', zIndex: 1 }}>
                {[...Array(10)].map((_, index) => (
                    <div
                        key={index}
                        className='flex h-[100vh] items-center justify-center'
                        style={{
                            backgroundColor: index % 2 === 0 ? '#f0f0f0' : '#ffffff',
                        }}
                    >
                        <p>Sección {index + 1}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FieldScene;
