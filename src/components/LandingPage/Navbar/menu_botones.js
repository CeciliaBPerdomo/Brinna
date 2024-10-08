import React from 'react'
import Link from 'next/link'

// CSS
import "../Navbar/botones.css"

//Fuente
import { Jost } from "next/font/google"
const jost = Jost({
    weight: "400",
    subsets: ['latin']
})

function MenuBotones() {
    return (
        <div className="menuopciones_navbar_generico">
            {/* Registro */}
            <Link href={"/admin/Registro"}>
                <button className={`botones_registro ${jost}`}>Registrarte</button>
            </Link>

            {/* Inicio de sesion */}
            <Link href={"/admin/IniciarSesion"}>
                <button className={`botones_iniciar_sesion ${jost}`}>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        className="icono_botones_iniciar_sesion"
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
            </Link>
        </div>
    )
}

export default MenuBotones