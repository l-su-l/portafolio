import { useState } from "react";

function Habilidades() {
    return (
        <div className="relative w-[280px] h-[200px] left-[8%] ">
            {/* Círculo central */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold">PY</span>
                </div>
            </div>

            {/* Círculo superior */}
            <div className="absolute top-[15%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white">SQL</span>
                </div>
            </div>

            {/* Círculo inferior */}
            <div className="absolute bottom-[15%] left-1/2 transform -translate-x-1/2 translate-y-1/2">
                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white">JS</span>
                </div>
            </div>

            {/* Círculo superior derecho */}
            <div className="absolute top-[30%] right-[10%] transform translate-x-1/2 -translate-y-1/2">
                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white">T3</span>
                </div>
            </div>

            {/* Círculo superior izquierdo */}
            <div className="absolute top-[30%] left-[10%] transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white">CSS</span>
                </div>
            </div>

            {/* Círculo inferior derecho */}
            <div className="absolute bottom-[30%] right-[10%] transform translate-x-1/2 translate-y-1/2">
                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white">CTF</span>
                </div>
            </div>

            {/* Círculo inferior izquierdo */}
            <div className="absolute bottom-[30%] left-[10%] transform -translate-x-1/2 translate-y-1/2">
                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white">API</span>
                </div>
            </div>
        </div>
    );
}

export default Habilidades;
