'use client';
import { useState } from 'react';
import Link from 'next/link';
import BotonesSesion from './botones';

const Menu = ({ pathname }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const links = [
        { label: 'Inicio', href: '/' },
        { label: 'Catálogo', href: '/catalogo' },
        { label: 'Nosotros', href: '/nosotros' },
        { label: 'Contacto', href: '/contacto' },
    ];

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
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
                    <button
                        type="button"
                        className="text-white text-3xl cursor-pointer focus:outline-none"
                        onClick={toggleMobileMenu}
                        aria-label="Abrir menú"
                    >
                        ☰
                    </button>
                    <BotonesSesion />
                </div>
            </nav>

            {/* Menú Mobile */}
            {isMobileMenuOpen && (
                <div className="absolute top-16 right-0 w-52 bg-[#CA4E3C] flex flex-col items-end py-4 px-4 rounded-lg z-30 md:hidden shadow-lg">
                    {links.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`w-full text-white text-base px-3 py-2 rounded-md transition-colors duration-200
                    ${pathname === link.href
                                    ? 'font-bold underline underline-offset-8 decoration-white'
                                    : 'hover:bg-[#a43c2a]'
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            )}


        </>
    );
};

export default Menu;
