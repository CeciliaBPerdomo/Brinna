import React from "react";

// Fuente
import { Jost } from "next/font/google"

// Componente
import CatalagoPara from "@/components/LandingPage/Catalogos/catalogo_para";

//CSS 
import "./masCatalogosChicos.css"

const jost = Jost({
    weight: "400",
    subsets: ['latin'],
})

const subjost = Jost({
    weight: "600",
    subsets: ['latin'],
})


const MasCatalogosChicos = () => {
    return (
        <div>
            <div className="w-full grid grid-cols-3 mas_catalogos_chicos">
                <div className="fondoPrincipal_catalogo mas_catalogos">
                    <p className={`mira_otros_catalogos ${jost}`}>¡Mirá otros catálogos!</p>
                    <p className={`explora_otros_catalogos ${subjost}`}>Explora en otras categorías.</p>
                </div>

                <div className="bg-el fondoPrincipal_catalogo">
                    <CatalagoPara para={"él"} targetPage="/catalogo-el" />
                </div>

                <div className="bg-ella fondoPrincipal_catalogo">
                    <CatalagoPara para={"ella"} targetPage="/catalogo-ella"  />
                </div>

            </div>
        </div>
    )
}

export default MasCatalogosChicos; 