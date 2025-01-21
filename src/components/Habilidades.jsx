import { useState } from "react";

function Habilidades() {
    return (
        <div className="relative mx-auto w-full max-w-[320px] h-[300px] sm:max-w-[280px] sm:h-[260px] lg:max-w-[400px] lg:h-[220px]">
            {/* Círculo central */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 bg-gray-800 rounded-full flex items-center justify-center shadow-lg lg:w-16 lg:h-16">
                    <span className="text-white font-bold">PY</span>
                </div>
            </div>

            {/* Círculo superior */}
            <div className="absolute top-[22%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center shadow-lg lg:w-12 lg:h-12">
                    <span className="text-white">SQL</span>
                </div>
            </div>

            {/* Círculo inferior */}
            <div className="absolute bottom-[22%] left-1/2 transform -translate-x-1/2 translate-y-1/2">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center shadow-lg lg:w-12 lg:h-12">
                    <span className="text-white">JS</span>
                </div>
            </div>

            {/* Círculo superior derecho */}
            <div className="absolute top-[40%] right-[10%] transform translate-x-1/2 -translate-y-1/2">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center shadow-lg lg:w-12 lg:h-12">
                    <span className="text-white">T3</span>
                </div>
            </div>

            {/* Círculo superior izquierdo */}
            <div className="absolute top-[40%] left-[10%] transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center shadow-lg lg:w-12 lg:h-12">
                    <span className="text-white">CSS</span>
                </div>
            </div>

            {/* Círculo inferior derecho */}
            <div className="absolute bottom-[36%] right-[10%] transform translate-x-1/2 translate-y-1/2">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center shadow-lg lg:w-12 lg:h-12">
                    <span className="text-white">CTF</span>
                </div>
            </div>

            {/* Círculo inferior izquierdo */}
            <div className="absolute bottom-[36%] left-[10%] transform -translate-x-1/2 translate-y-1/2">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center shadow-lg lg:w-12 lg:h-12">
                    <span className="text-white">API</span>
                </div>
            </div>
        </div>
    );
}

export default Habilidades;