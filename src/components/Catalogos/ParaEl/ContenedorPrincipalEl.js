import React from "react";

// Barra de busqueda
import MasCatalogosEl from "./masCatalogosEl";
import Barra from "@/components/LandingPage/Busqueda/barraBusqueda";

const ContenedorEl = () => {

    return (
        <div>
            {/* Barra de busqueda */}
            <Barra />

            <br />

            {/* Mas catalogos */}
            <MasCatalogosEl />
        </div>
    )

}

export default ContenedorEl