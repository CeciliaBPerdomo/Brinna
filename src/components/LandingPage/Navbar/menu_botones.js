'use client';
import { useState } from 'react';
import FormInicioSesion from '../../Auth/InicioSesion/FormInicioSesion';
import FormRegistro from '../../Auth/Registro/FormRegistro';

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
                    className="flex items-center justify-center min-w-[180px] px-5 py-2 rounded-full bg-[#CA4E3C] hover:bg-[#b54332] text-white font-medium transition-colors"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 30 30"
                        fill="none"
                        className="mr-2"
                    >
                        <path d="M15 29C22.732 29 29 22.732 29 15C29 7.26801 22.732 1 15 1C7.26801 1 1 7.26801 1 15C1 22.732 7.26801 29 15 29Z"
                            stroke="white" strokeWidth="1.5" />
                        <path d="M15 15C17.3197 15 19.2 13.1196 19.2 10.8C19.2 8.48039 17.3197 6.59998 15 6.59998C12.6804 6.59998 10.8 8.48039 10.8 10.8C10.8 13.1196 12.6804 15 15 15Z"
                            stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M8 23.4V22C8 18.134 11.134 15 15 15C18.866 15 22 18.134 22 22V23.4"
                            stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
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
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 30 30"
                        fill="none"
                    >
                        <path
                            d="M15 29C22.732 29 29 22.732 29 15C29 7.26801 22.732 1 15 1C7.26801 1 1 7.26801 1 15C1 22.732 7.26801 29 15 29Z"
                            stroke="white"
                            strokeWidth="1.5"
                        />
                        <path
                            d="M15 15C17.3197 15 19.2 13.1196 19.2 10.8C19.2 8.48039 17.3197 6.59998 15 6.59998C12.6804 6.59998 10.8 8.48039 10.8 10.8C10.8 13.1196 12.6804 15 15 15Z"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M8 23.4V22C8 18.134 11.134 15 15 15C18.866 15 22 18.134 22 22V23.4"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                        />
                    </svg>
                </button>

                {isUserMenuOpen && (
                    <>
                        <div
                            className="fixed inset-0 bg-black bg-opacity-50 z-30"
                            onClick={() => setIsUserMenuOpen(false)}
                        ></div>
                        <div className="absolute right-0 mt-2 w-40 bg-black bg-opacity-90 rounded-lg shadow-lg py-2 z-40">
                            <button
                                onClick={() => openModal('login')}
                                className="block w-full px-4 py-2 text-sm text-white hover:bg-gray-700 text-right uppercase"
                            >
                                Iniciar sesión
                            </button>
                            <button
                                onClick={() => openModal('register')}
                                className="block w-full px-4 py-2 text-sm text-white hover:bg-gray-700 text-right uppercase"
                            >
                                Regístrate
                            </button>
                        </div>
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
