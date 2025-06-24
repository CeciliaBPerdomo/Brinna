'use client';
import BotonesSesion from './Navbar/botones';
import LogoWhatsapp from './Navbar/what';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const HeaderHome = () => {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

    const links = [
        { label: 'Inicio', href: '/' },
        { label: 'Catálogo', href: '/catalogo' },
        { label: 'Nosotros', href: '/nosotros' },
        { label: 'Contacto', href: '/contacto' },
    ];

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleUserMenu = () => {
        setIsUserMenuOpen(!isUserMenuOpen);
    };

    return (
        <div className="relative w-full">
            <Image
                src="/images/banner_home.png"
                alt="Banner de fondo"
                width={1920}
                height={1080}
                className="w-full h-auto"
                priority
            />

            {/* Navbar */}
            <nav className="absolute top-0 left-0 w-full flex flex-col px-6 py-4 z-20">
                {/* Primera fila: botones de sesión */}
                <div className="hidden md:flex w-full justify-end space-x-4 mb-2 mt-5">
                    <BotonesSesion />
                </div>

                {/* Segunda fila: menú desktop */}
                <div className="hidden md:flex w-full justify-end space-x-6 text-white text-lg">
                    {links.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className={`p-3 ${pathname === link.href
                                    ? 'font-bold underline underline-offset-8 decoration-red-600'
                                    : ''
                                } hover:text-gray-300`}
                        >
                            {link.label.toUpperCase()}
                        </Link>
                    ))}
                </div>

                {/* Mobile: hamburguesa + icono usuario */}
                <div className="md:hidden w-full flex justify-end items-center mt-2 gap-x-4">
                    {/* Botón hamburguesa */}
                    <button
                        type="button"
                        className="text-white text-3xl cursor-pointer focus:outline-none"
                        onClick={toggleMobileMenu}
                        aria-label="Abrir menú"
                    >
                        ☰
                    </button>

                    {/* Icono de usuario */}
                    <div className="relative">
                        <button
                            type="button"
                            className="flex items-center text-white text-sm font-medium space-x-2"
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
                            <span className="hidden sm:inline">Iniciar sesión / Regístrate</span>
                        </button>

                        {/* User menu desplegable */}
                        {isUserMenuOpen && (
                            <div className="absolute right-0 mt-2 w-40 bg-black bg-opacity-90 rounded-lg shadow-lg py-2 z-40">
                                <Link
                                    href="/admin/IniciarSesion"
                                    onClick={() => setIsUserMenuOpen(false)}
                                    className="block px-4 py-2 text-sm text-white hover:bg-gray-700 text-right uppercase"
                                >
                                    Iniciar sesión
                                </Link>
                                <Link
                                    href="/admin/Registro"
                                    onClick={() => setIsUserMenuOpen(false)}
                                    className="block px-4 py-2 text-sm text-white hover:bg-gray-700 text-right uppercase"
                                >
                                    Regístrate
                                </Link>
                            </div>

                        )}
                    </div>
                </div>
            </nav>

            {/* Menú Mobile */}
            {isMobileMenuOpen && (
                <div className="absolute top-16 right-4 w-52 bg-black bg-opacity-90 flex flex-col items-end py-4 px-4 rounded-lg z-30 md:hidden shadow-lg">
                    {links.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)} // cierra menú al clickear
                            className={`p-2 text-white text-base ${pathname === link.href
                                    ? 'font-bold underline underline-offset-8 decoration-red-600'
                                    : ''
                                } hover:text-gray-300`}
                        >
                            {link.label.toUpperCase()}
                        </Link>
                    ))}
                </div>
            )}

            
            {/* Ícono WhatsApp fijo abajo derecha */}
            <LogoWhatsapp />
        </div>
    );
};

export default HeaderHome;
