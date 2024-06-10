import React from "react";

// CSS
import "../Terminos/contenedorTerminos.css"

// Fuente
import { Jost } from "next/font/google"

const jost = Jost({
    weight: "500",
    subsets: ['latin'],
})

const subjost = Jost({
    weight: "600",
    subsets: ['latin'],
})


const ContenedorTerminos = () => {
    return (
        <div>
            <div className="contenedor_principal_terminos">
                <p className={`terminos_contenedor ${subjost}`}>Términos y condiciones</p>
            </div>

        </div>
    )
}

export default ContenedorTerminos