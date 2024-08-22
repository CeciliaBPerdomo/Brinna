"use client"
import React from "react";
import { HeartIcon, ShoppingCartIcon, MailIcon, UserCircleIcon } from '@heroicons/react/solid';

// Redux
import { useSelector } from "react-redux";

//CSS
import "../Catalogos/menuOpciones.css"

// Fuente
import { Jost } from "next/font/google"

const jost = Jost({
    weight: "400",
    subsets: ['latin'],
})


const MenuOpciones = () => {
    // Acceder al estado de autenticación desde Redux
    const currentUser = useSelector((state) => state.usuarios.currentUser);
    return (
        <div className="menuopciones_catalogo">
            {currentUser ? (
                <p className={`holaNoelia ${jost.className}`}>
                    ¡Hola {currentUser.usuario}!
                </p>
            ) :
                null
            }

            <div>
                <div className="menuopciones_catalogo_iconos">
                    <HeartIcon className="iconos_menuopciones" />
                    <ShoppingCartIcon className="iconos_menuopciones" />
                    <MailIcon className="iconos_menuopciones" />
                    <UserCircleIcon className="iconos_menuopciones" />
                </div>
            </div>
        </div>
    )
}

export default MenuOpciones