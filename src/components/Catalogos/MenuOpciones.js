"use client"
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

// Iconos
import { Heart, ShoppingCart, Mail, UserCircle, LogOut } from "lucide-react";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../lib/usuariosSlice"

// Componentes
import MenuBotones from "../LandingPage/Navbar/menu_botones";

// Fuente
import { Jost } from "next/font/google"

const jost = Jost({
    weight: "400",
    subsets: ['latin'],
})

const MenuOpciones = () => {
    const dispatch = useDispatch();
    const [menuOpen, setMenuOpen] = useState(false);

    const currentUser = useSelector((state) => state.usuarios.currentUser);

    const handleLogout = () => {
        dispatch(logout());
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div>
            {currentUser ? (
                <>
                    {/* Saludo y íconos visibles solo en md+ */}
                    <div className="hidden md:flex md:items-center md:justify-end md:gap-6 md:pr-5">
                        <p className={`text-white text-2xl pb-4 pr-5 ${jost.className}`}>
                            ¡Hola {currentUser.usuario || currentUser.userGoogle.usuario}!
                        </p>

                        <Heart className="w-8 h-8 text-white hover:text-[#CA4E3C] transition-colors duration-200 cursor-pointer" />
                        <ShoppingCart className="w-8 h-8 text-white hover:text-[#CA4E3C] transition-colors duration-200 cursor-pointer" />
                        <Mail className="w-8 h-8 text-white hover:text-[#CA4E3C] transition-colors duration-200 cursor-pointer" />

                        {/* Perfil - botón */}
                        <div className="relative">
                            <button
                                type="button"
                                aria-expanded={menuOpen}
                                onClick={toggleMenu}
                                className="w-8 h-8 rounded-full border-2 border-white hover:border-[#CA4E3C] transition-colors duration-200 overflow-hidden"
                            >
                                <Image
                                    src={
                                        (currentUser && (currentUser.photoURL || currentUser.userGoogle?.photoURL))
                                        || "/images/default-image.png"
                                    }
                                    width={32}
                                    height={32}
                                    alt="Foto de perfil"
                                    className="w-full h-full object-cover"
                                />
                            </button>

                            <ul
                                aria-labelledby="perfil"
                                className={`absolute top-12 right-0 flex flex-col items-start w-[180px] pt-4 pl-2 rounded-[10px] bg-[#CA4E3C] shadow ${menuOpen ? "block" : "hidden"
                                    }`}
                            >
                                <Link href={"/admin/MenuUsuario"}>
                                    <li
                                        className={`text-white text-[18px] py-3 flex items-center gap-2 cursor-pointer ${jost.className}`}
                                    >
                                        <UserCircle className="w-5 h-5 text-white" />
                                        Mi cuenta
                                    </li>
                                </Link>

                                <li className="w-full">
                                    <hr className="border-white" />
                                </li>

                                <li
                                    onClick={handleLogout}
                                    className={`text-white text-[18px] py-3 flex items-center gap-2 cursor-pointer ${jost.className}`}
                                >
                                    <LogOut className="w-5 h-5 text-white" />
                                    Cerrar sesión
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* En pantallas pequeñas: solo ícono perfil */}
                    <div className="md:hidden flex justify-end pr-5 relative">
                        <div className="relative">
                            <button
                                type="button"
                                aria-expanded={menuOpen}
                                onClick={toggleMenu}
                                className="w-8 h-8 rounded-full border-2 border-white hover:border-[#CA4E3C] transition-colors duration-200 overflow-hidden"
                            >
                                <Image
                                    src={
                                        (currentUser && (currentUser.photoURL || currentUser.userGoogle?.photoURL))
                                        || "/images/default-image.png"
                                    }
                                    width={32}
                                    height={32}
                                    alt="Foto de perfil"
                                    className="w-full h-full object-cover"
                                />
                            </button>

                            <ul
                                aria-labelledby="perfil"
                                className={`fixed top-16 right-0 flex flex-col items-start w-[200px] pt-4 pl-4 rounded-[10px] bg-[#CA4E3C] shadow z-50 ${menuOpen ? "block" : "hidden"
                                    }`}
                            >
                                <Link href={"/admin/MenuUsuario"}>
                                    <li
                                        className={`text-white text-[16px] py-3 flex items-center gap-3 cursor-pointer ${jost.className}`}
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        <UserCircle className="w-6 h-6 text-white" />
                                        Mi cuenta
                                    </li>
                                </Link>

                                <li
                                    className={`text-white text-[16px] py-3 flex items-center gap-3 cursor-pointer ${jost.className}`}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    <Heart className="w-6 h-6 text-white" />
                                    Mis favoritos
                                </li>

                                <li
                                    className={`text-white text-[16px] py-3 flex items-center gap-3 cursor-pointer ${jost.className}`}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    <ShoppingCart className="w-6 h-6 text-white" />
                                    Mi carrito
                                </li>

                                <li
                                    className={`text-white text-[16px] py-3 flex items-center gap-3 cursor-pointer ${jost.className}`}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    <Mail className="w-6 h-6 text-white" />
                                    Mis mensajes
                                </li>

                                <li className="w-full">
                                    <hr className="border-white" />
                                </li>

                                <li
                                    onClick={() => {
                                        setMenuOpen(false);
                                        handleLogout();
                                    }}
                                    className={`text-white text-[16px] py-3 flex items-center gap-3 cursor-pointer ${jost.className}`}
                                >
                                    <LogOut className="w-6 h-6 text-white" />
                                    Cerrar sesión
                                </li>
                            </ul>
                        </div>
                    </div>
                </>
            ) : (
                <MenuBotones />
            )}
        </div>
    )
}

export default MenuOpciones;
