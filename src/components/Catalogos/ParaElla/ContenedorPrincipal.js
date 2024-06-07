import React from "react";
import MasCatalogos from "./masCatalogos";
import Barra from "@/components/LandingPage/Busqueda/barraBusqueda";

const ContenedorEllas = () => {
    return (
        <>

        {/* Barra de busqueda */}
        <Barra />

        <br />

        {/* Info de mas catalogos */}
        <MasCatalogos />
        </>
    )
}

export default ContenedorEllas