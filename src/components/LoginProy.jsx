import React, { useState } from 'react';
import axios from 'axios';
import ThreeDModel from './ThreeDModel';
import '../cosa.css';

function LoginProy() {
    const [emails, setEmail] = useState('');
    const [nombrecompleto, setNombre] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [datAdata, setDatad] = useState('');
    const [apagado, setApagado] = useState(true);

    const handleLogin = async (event) => {
        event.preventDefault();
        setError('');
        setSuccess('');

        const dataUser = {
            nombre_completo: nombrecompleto,
            email: emails
        }

        try {
            const response = await axios.post('http://192.168.10.12:8000/api/login/', dataUser);

            if (response.status === 200) {
                setSuccess('Inicio de sesión exitoso.');

                localStorage.setItem('usuario', JSON.stringify(response.data));

                setDatad(response.data[0]['rol']);

            }

        } catch (err) {
            if (err.response && err.response.status === 401) {
                setError('Credenciales incorrectas.');
            } else {
                setError('Hubo un error al iniciar sesión. Inténtalo nuevamente.');

                // Ocultar el mensaje de error después de 3 segundos
                setTimeout(() => {
                    setError('');
                }, 5000);
            }
        }
    };

    function condicional() {

        if (datAdata === "RRHH") {
            setTimeout(() => {

                setApagado(true)

                console.log('pase por el timeout')

                window.location.href = '/DenunciasRRHH';

            }, 5000)
        }
        else {

            console.log('no pesco')


            setTimeout(() => {
                window.location.href = '/workspace';
            }, 5000);
        }

    };

    return (
        <div className="flex flex-col items-center h-screen bg-sky-900 gap-2 px-5 py-1">
            <form onSubmit={handleLogin} className="bg-gray- p-6 rounded shadow-2xl">
                <ThreeDModel />
                <h2 className="text-2xl font-bold text-center text-blue-600 mb-4 w-[300px]">
                    Bienvenido a SafeWorkPlace
                </h2>
                <h2 className="text-xl font-semibold mb-4 text-center text-white">
                    Inicio de Sesión
                </h2>

                {error && (
                    <div className="bg-red-100 text-red-700 p-2 mb-4 rounded">
                        {error}
                    </div>
                )}

                {success ? (
                    <div>{condicional()}</div>
                ) : (
                    <div className='absolute text-transparent'>Error al ejecutar la funcion</div>
                )}

                {success === 'Inicio de sesión exitoso.' && (
                    <div className="overlay pt-[40%] pr-[15%]">
                    <span className="loader"></span>
                </div>
                )}

                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-white">Correo Electrónico</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={emails}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="mt-1 block w-full border rounded p-2"
                        placeholder="Ingresa tu correo"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-medium text-white">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={nombrecompleto}
                        onChange={(e) => setNombre(e.target.value)}
                        required
                        className="mt-1 block w-full border rounded p-2"
                        placeholder="Ingresa tu password"
                    />
                </div>

                <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                    Iniciar Sesión
                </button>
                <button
                    onClick={() => window.location.href = '/capacitar'}
                    className="w-full bg-green-600 text-white py-2 px-4 mt-4 rounded-lg shadow-lg hover:bg-green-700 transition"
                >
                    Capacitaciónes
                </button>
            </form>

            <p className="text-gray-500 text-sm text-center">
                &copy; 2024 SafeWorkPlace. Todos los derechos reservados.
            </p>
        </div>
    );
}

export default LoginProy;
