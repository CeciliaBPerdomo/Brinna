'use client';
import { useState } from 'react';
import FormInicioSesion from '../../Auth/InicioSesion/FormInicioSesion';
import FormRegistro from '../../Auth/Registro/FormRegistro';

import { User, UserCircle } from "lucide-react";

// Fuente
import { Jost } from "next/font/google";
const jost = Jost({
    weight: "400",
    subsets: ['latin']
});


function MenuBotones() {
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType, setModalType] = useState(null);

    const toggleUserMenu = () => {
        setIsUserMenuOpen(!isUserMenuOpen);
    };

    const openModal = (type) => {
        setModalType(type);
        setIsModalOpen(true);
        setIsUserMenuOpen(false);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalType(null);
    };

    return (
        <div className={`flex gap-4 items-center ${jost.className}`}>
            {/* Versión desktop */}
            <div className="hidden md:flex gap-4">
                <button
                    type="button"
                    onClick={() => openModal('login')}
                    className="flex items-center justify-center min-w-[180px] px-5 py-2 rounded-full bg-[#CA4E3C] hover:bg-[#a43c2a] text-white font-medium transition-colors"
                >
                    <User className="mr-2 w-5 h-5 stroke-white" />
                    Iniciar sesión
                </button>

                <button
                    type="button"
                    onClick={() => openModal('register')}
                    className="min-w-[180px] px-5 py-2 rounded-full border border-white text-white font-medium bg-transparent transition-colors hover:border-[#CA4E3C] hover:text-[#CA4E3C]"
                >
                    Regístrate
                </button>
            </div>

            {/* Versión mobile */}
            <div className="relative md:hidden">
                <button
                    type="button"
                    className="flex items-center text-white text-sm font-medium"
                    onClick={toggleUserMenu}
                    aria-label="Abrir menú usuario"
                >
                    <UserCircle className="w-7 h-7 stroke-white" />
                </button>

                {isUserMenuOpen && (
                    <>
                        <div
                            className="fixed inset-0 bg-black bg-opacity-50 z-30"
                            onClick={() => setIsUserMenuOpen(false)}
                        ></div>
                        <ul
                            className="fixed right-0 top-12 w-52 bg-[#CA4E3C] rounded-lg shadow-lg py-2 z-40 flex flex-col text-white"
                        >
                            <li
                                onClick={() => openModal('login')}
                                className="px-4 py-3 cursor-pointer hover:bg-[#a43c2a] transition-colors text-md flex items-center gap-2 font-semibold"
                            >
                                Iniciar sesión
                            </li>
                            <li
                                onClick={() => openModal('register')}
                                className="px-4 py-3 cursor-pointer hover:bg-[#a43c2a] transition-colors text-md flex items-center gap-2 font-semibold"
                            >
                                Regístrate
                            </li>
                        </ul>
                    </>
                )}

            </div>

            {/* Modal */}
            {isModalOpen && (
                <>
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-40"
                        onClick={closeModal}
                    ></div>
                    <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
                        <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl relative">
                            <button
                                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                                onClick={closeModal}
                            >
                                ✕
                            </button>

                            {modalType === 'login' && (
                                <FormInicioSesion onClose={closeModal} />
                            )}

                            {modalType === 'register' && (
                                <FormRegistro onClose={closeModal} />
                            )}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default MenuBotones;
