import React from "react"
import HeaderParaChicos from "@/components/Catalogos/Chicos/HeaderChicos"
import ContenedorChicos from "@/components/Catalogos/Chicos/ContenedorPrincipalChicos"

export default function CatalogoChicos() {
    return (
        <div>
            {/* Encabezado */}
            <HeaderParaChicos />

            {/* Contenedor */}
            <main>
                <ContenedorChicos />
            </main>
        </div>
    )
}