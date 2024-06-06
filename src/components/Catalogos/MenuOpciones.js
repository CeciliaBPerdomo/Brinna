import React from "react";
import { HeartIcon, ShoppingCartIcon, MailIcon, UserCircleIcon } from '@heroicons/react/solid';

//CSS
import "../Catalogos/menuOpciones.css"

// Fuente
import { Jost } from "next/font/google"

const jost = Jost({
    weight: "400",
    subsets: ['latin'],
})


const MenuOpciones = () => {
    return (
        <div className="menuopciones_catalogo">
            <p className={`holaNoelia ${jost}`}>¡Hola, Noelia!</p>

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