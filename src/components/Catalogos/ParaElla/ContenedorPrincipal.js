import React from "react";
import MasCatalogos from "./masCatalogos";
import Barra from "@/components/LandingPage/Busqueda/barraBusqueda";
import RopaParaElla from "./ropaElla";

const ContenedorEllas = () => {
    return (
        <>

        {/* Barra de busqueda */}
        <Barra />

        <br />

        <RopaParaElla />

        <br/>

        {/* Info de mas catalogos */}
        <MasCatalogos />
        </>
    )
}

export default ContenedorEllas