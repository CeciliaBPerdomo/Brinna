"use client"
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../lib/usuariosSlice"

//CSS
import "../Catalogos/menuOpciones.css"

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

    // Acceder al estado de autenticación desde Redux
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
                    <p className={`holaNoelia ${jost.className}`}>
                        ¡Hola {currentUser.usuario || currentUser.userGoogle.usuario}!
                    </p>
                    <div className="menuopciones_catalogo_iconos">
                        {/* Corazon */}
                        <div className="icono-container">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                width="35" height="31"
                                viewBox="0 0 35 31" fill="none"
                                className="icono_corazon_menuopciones">
                                <path d="M33.0555 10.619C33.0555 13.0247 32.1318 15.3353 30.4823 17.0445C26.6853 20.9802 23.0025 25.0843 19.0637 28.8773C18.1608 29.7341 16.7286 29.7029 15.8647 28.8073L4.51685 17.0445C1.08683 13.489 1.08683 7.74903 4.51685 4.19355C7.98057 0.603144 13.6234 0.603144 17.087 4.19355L17.4996 4.6211L17.9118 4.1938C19.5725 2.47145 21.8343 1.5 24.197 1.5C26.5598 1.5 28.8214 2.47135 30.4823 4.19355C32.1319 5.90292 33.0555 8.21342 33.0555 10.619Z"
                                    stroke="white" strokeWidth="2" strokeLinejoin="round" />
                            </svg>
                        </div>

                        {/* Shopping cart */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none" className="icono_cart_menuopciones">
                            <path d="M26.2559 19.7L8.05586 19.7H5.57894C3.0809 19.7 1.75586 20.7937 1.75586 22.5C1.75586 24.2063 3.0809 25.3 5.57894 25.3L25.5559 25.3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M5.25566 4.3L29.0557 4.3L26.2557 19.7L8.05566 19.7L5.25566 4.3ZM5.25566 4.3C5.02233 3.36666 3.85566 1.5 1.05566 1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M11.5556 29.5C12.7153 29.5 13.6556 28.5597 13.6556 27.4C13.6556 26.2402 12.7153 25.3 11.5556 25.3C10.3958 25.3 9.45557 26.2402 9.45557 27.4C9.45557 28.5597 10.3958 29.5 11.5556 29.5Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M25.5556 29.5C26.7153 29.5 27.6556 28.5597 27.6556 27.4C27.6556 26.2402 26.7153 25.3 25.5556 25.3C24.3958 25.3 23.4556 26.2402 23.4556 27.4C23.4556 28.5597 24.3958 29.5 25.5556 29.5Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                        {/* Mensajes */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="31" viewBox="0 0 35 31" fill="none"
                            className="icono_mensajes_menuopciones">
                            <path d="M1.05566 8.5L17.0557 15.5L33.0557 8.5M8.36995 29.5H25.7414C28.3016 29.5 29.5817 29.5 30.5596 28.9914C31.4198 28.544 32.1191 27.83 32.5574 26.952C33.0557 25.9537 33.0557 24.6469 33.0557 22.0333V8.96667C33.0557 6.35309 33.0557 5.0463 32.5574 4.04804C32.1191 3.16995 31.4198 2.45605 30.5596 2.00864C29.5817 1.5 28.3016 1.5 25.7414 1.5H8.36995C5.80971 1.5 4.52959 1.5 3.55171 2.00864C2.69154 2.45605 1.9922 3.16995 1.55392 4.04804C1.05566 5.0463 1.05566 6.35309 1.05566 8.96667V22.0333C1.05566 24.6469 1.05566 25.9537 1.55392 26.952C1.9922 27.83 2.69154 28.544 3.55171 28.9914C4.52959 29.5 5.80971 29.5 8.36995 29.5Z" stroke="white" strokeWidth="2" strokeLinejoin="round" />
                        </svg>

                        {/* Perfil */}
                        <div className="foto_perfil_menuopciones">
                            <button
                                type="button"
                                id="perfil"
                                aria-expanded={menuOpen}
                                className="perfil-button"
                                onClick={toggleMenu}
                            >
                                <Image
                                    src={(currentUser && (currentUser.photoURL
                                        || currentUser.userGoogle?.photoURL))
                                        || '/images/default-image.png'
                                    }
                                    width={35}
                                    height={35}
                                    alt="Foto de perfil"
                                    className="foto-perfil"
                                />
                            </button>

                            <ul
                                aria-labelledby="perfil"
                                className={`perfil-menu ${menuOpen ? 'show' : 'hide'}`}
                            >
                                <Link href={"/admin/MenuUsuario"}>
                                    <li className={`perfil-menu-item ${jost}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                            <path d="M8.5 16C12.6421 16 16 12.6421 16 8.5C16 4.35786 12.6421 1 8.5 1C4.35786 1 1 4.35786 1 8.5C1 12.6421 4.35786 16 8.5 16Z" stroke="white" />
                                            <path d="M8.49951 8.5C9.74219 8.5 10.7495 7.49268 10.7495 6.25C10.7495 5.00736 9.74219 4 8.49951 4C7.25684 4 6.24951 5.00736 6.24951 6.25C6.24951 7.49268 7.25684 8.5 8.49951 8.5Z"
                                                stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M4.75 13V12.25C4.75 10.179 6.42893 8.5 8.5 8.5C10.571 8.5 12.25 10.179 12.25 12.25V13"
                                                stroke="white" strokeLinecap="round" />
                                        </svg>
                                        Mi cuenta
                                    </li>
                                </Link>
                                <li className="barra_menu_item">
                                    <hr />
                                </li>
                                <li className={`perfil-menu-item ${jost}`}
                                    onClick={handleLogout}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                        fill="none">
                                        <path d="M15 5.66667L15 1M15 1H10.3333M15 1L8.77778 7.22222M6.44444 2.55556H4.73333C3.42654 2.55556 2.77315 2.55556 2.27402 2.80987C1.83498 3.03358 1.47802 3.39053 1.25432 3.82958C1 4.32871 1 4.9821 1 6.28889V11.2667C1 12.5735 1 13.2269 1.25432 13.726C1.47802 14.165 1.83498 14.522 2.27402 14.7457C2.77315 15 3.42654 15 4.73333 15H9.71111C11.0179 15 11.6713 15 12.1704 14.7457C12.6095 14.522 12.9664 14.165 13.1901 13.726C13.4444 13.2269 13.4444 12.5735 13.4444 11.2667V9.55556"
                                            stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    Cerrar sesión
                                </li>
                            </ul>

                        </div>
                    </div>
                </>
            ) :
                <MenuBotones />
            }
        </div>
    )
}

export default MenuOpciones