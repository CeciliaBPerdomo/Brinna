import React from "react"

// Componentes
import HeaderParaElla from "@/components/Catalogos/ParaElla/HeaderParaElla"
import ContenedorEllas from "@/components/Catalogos/ParaElla/ContenedorPrincipal"

export default function CatalogoElla() {
    return (
        <div>
            {/* Header */}
            <HeaderParaElla />

            {/* Contenido */}
            <main>
                <ContenedorEllas />
            </main>
        </div>
    )
}