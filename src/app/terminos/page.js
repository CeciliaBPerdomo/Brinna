import React from "react";

// Componentes
import HeaderTerminos from "@/components/Terminos/HeaderTerminos";
import ContenedorTerminos from "@/components/Terminos/ContendorTerminos";

const Terminos = () => {
    return (
        <div>
            {/* Encabezado */}
            <HeaderTerminos />

            {/* Contenedor Principal */}
            <ContenedorTerminos />
        </div>
    )
}

export default Terminos