import React from "react";

//Componentes
import Barra from "@/components/LandingPage/Busqueda/barraBusqueda";
import Catalago from "@/components/LandingPage/Catalogos/catalogos";
import General from "./catalogoGeneral";

const ContendorPrincipalGeneral = () => {
    return (
        <div>

            {/* Barra de busqueda */}
            <Barra />

            <br />

            {/* Catalogos */}
            <Catalago />

            {/* Todas las prendas disponibles */}
            <General />
        </div>
    )
}

export default ContendorPrincipalGeneral