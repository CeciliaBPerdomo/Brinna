import React from "react";

// Componentes
import MasCatalogosChicos from "./MasCatalogosChicos";
import Barra from "@/components/LandingPage/Busqueda/barraBusqueda";

const ContenedorChicos = () => {
    return (
        <div>

            {/* Barra de busqueda */}
            <Barra />

            <br />

            {/* Mas Catalogos */}
            <MasCatalogosChicos />
        </div>
    )
}

export default ContenedorChicos