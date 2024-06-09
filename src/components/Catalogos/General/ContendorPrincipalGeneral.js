import React from "react";

//Componentes
import Barra from "@/components/LandingPage/Busqueda/barraBusqueda";
import Catalago from "@/components/LandingPage/Catalogos/catalogos";

const ContendorPrincipalGeneral = () => {
    return (
        <div>

            {/* Barra de busqueda */}
            <Barra />

            <br />

            {/* Catalogos */}
            <Catalago />
        </div>
    )
}

export default ContendorPrincipalGeneral