import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';


const GameScene = () => {
    const mountRef = useRef(null);
    const modelRef = useRef(null); // Referencia para almacenar el modelo cargado

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true }); // Habilita transparencia

        const canvasWidth = 1000; // Define el tamaño en píxeles
        const canvasHeight = 600; // Define el tamaño en píxeles

        renderer.setSize(canvasWidth, canvasHeight); // Ajusta el tamaño del canvas

        // Cambiar el color de fondo
        scene.background = null;
        //scene.background = new THREE.Color(0xffffff); // Blanco
        // scene.background = new THREE.Color(0xff0000); // Rojo
        // scene.background = new THREE.Color(0x0000ff); // Azul
        // scene.background = new THREE.Color(0x00ff00); // Verde

        mountRef.current.appendChild(renderer.domElement);

        const light = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(light);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(5, 5, 5).normalize();
        scene.add(directionalLight);

        const loaderx = new FBXLoader();


        const loader = new GLTFLoader();
        loader.load('/portafolio/public/models/NUEVOXXX/NUEVOXXX.gltf', (gltf) => {
            const model = gltf.scene;

            // Ajusta el tamaño del modelo
            model.scale.set(15, 15, 15); // Escala el modelo a la mitad de su tamaño original
            model.position.set(0, -0.5, 0); // Coloca el modelo en el centro de la escena

            scene.add(model);

            // Guarda el modelo en la referencia
            modelRef.current = model;

            console.log('Modelo cargado correctamente');
        }, undefined, (error) => {
            console.error('Error al cargar el modelo:', error);
        });

        // Montar el canvas en el DOM
        if (mountRef.current) {
            renderer.domElement.className = " border border-black"; // Clases de Tailwind
            mountRef.current.appendChild(renderer.domElement);
        }

        // ajuste de tamano del plano
        const planoGeometry = new THREE.PlaneGeometry(13, 12, 1, 1);
        const planoMaterial = new THREE.MeshStandardMaterial({ color: 0xff000 });
        const plano = new THREE.Mesh(planoGeometry, planoMaterial);
        plano.receiveShadow = true;
        plano.position.set(0, 2, 0);
        scene.add(plano)

        const luz = new THREE.DirectionalLight(0xffffff, 1, 100);
        luz.position.set(-1, 1, 1);
        luz.castShadow = true;
        luz.shadow.mapSize.width = 1024;
        luz.shadow.mapSize.height = 1024;
        luz.shadow.camera.near = 0.5;
        luz.shadow.camera.far = 500;
        scene.add(luz);

        camera.position.z = 12;
        camera.position.y = 2;
        camera.rotation.x = 0;

        // Función de animación
        function animate() {
            requestAnimationFrame(animate);

            // Haz que el modelo rote si está disponible
            if (modelRef.current) {
                modelRef.current.rotation.y += 0.008; // Rota el modelo en el eje Y
                //modelRef.current.rotation.x -= 0.005; // También puedes rotarlo en X
            }

            renderer.render(scene, camera);
        }
        animate();

        // Limpieza al desmontar el componente
        return () => {
            while (scene.children.length > 0) {
                scene.remove(scene.children[0]); // Elimina todos los hijos de la escena
            }
            renderer.dispose(); // Libera los recursos del renderer
            if (renderer.domElement) {
                mountRef.current.removeChild(renderer.domElement); // Elimina el canvas del DOM
            }
        };
    }, []);

    return <div className='flex rounded px-2 py- justify-center'>

        <div>
            hola
        </div>

        <div className='flex rounded' ref={mountRef} />

    </div>;
};

export default GameScene;
