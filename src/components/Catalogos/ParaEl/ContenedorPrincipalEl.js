import React from "react";

// Barra de busqueda
import MasCatalogosEl from "./masCatalogosEl";
import Barra from "@/components/LandingPage/Busqueda/barraBusqueda";
import RopaParaEl from "./ropaParaEl";

const ContenedorEl = () => {

    return (
        <div>
            {/* Barra de busqueda */}
            <Barra />

            <br />

            {/* Catalogos de él */}
            <RopaParaEl />

            {/* Mas catalogos */}
            <MasCatalogosEl />
        </div>
    )

}

export default ContenedorEl