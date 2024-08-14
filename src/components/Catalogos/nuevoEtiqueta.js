import React from 'react'

//CSS
import "../Catalogos/nuevoEtiqueta.css"

//Fuentes
import { Jost } from "next/font/google"

const precio_jost = Jost({
    weight: "600",
    subsets: ['latin'],
})

function NuevoEtiqueta() {
    return (
        <div>
            <button className="etiqueta_nuevo">
                <p className={`nuevo_etiqueta ${precio_jost}`}>
                    Nuevo ¡con etiqueta!
                </p>
            </button>
        </div>
    )
}

export default NuevoEtiqueta