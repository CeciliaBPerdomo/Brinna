import React from "react"
import HeaderParaEl from "@/components/Catalogos/ParaEl/HeaderParaEl"
import ContenedorEl from "@/components/Catalogos/ParaEl/ContenedorPrincipalEl"

export default function CatalogoEl() {
    return (
        <div>
            {/* Encabezado */}
            <HeaderParaEl />

            {/* Contenedor */}
            <main>
                <ContenedorEl />
            </main>
        </div>
    )
}