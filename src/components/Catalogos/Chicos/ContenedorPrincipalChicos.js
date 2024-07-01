import React from "react";

// Componentes
import MasCatalogosChicos from "./MasCatalogosChicos";
import Barra from "@/components/LandingPage/Busqueda/barraBusqueda";
import RopaParaChicos from "./ropaChicos";

const ContenedorChicos = () => {
    return (
        <div>

            {/* Barra de busqueda */}
            <Barra />

            <br />

            {/* Ropa para chicos */}
            <RopaParaChicos />

            {/* Mas Catalogos */}
            <MasCatalogosChicos />
        </div>
    )
}

export default ContenedorChicos