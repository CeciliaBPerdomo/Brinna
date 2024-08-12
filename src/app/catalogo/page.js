
import React from "react";

//Componenetes
import CatalogoGeneral from "@/components/Catalogos/General/headerGeneral";
import ContendorPrincipalGeneral from "@/components/Catalogos/General/ContendorPrincipalGeneral";

const Catalogos = () => {
    return (
        <div>
            {/* Header */}
            <CatalogoGeneral />

            {/* Contenedor general */}
            <ContendorPrincipalGeneral />
        </div>
    )
}

export default Catalogos;