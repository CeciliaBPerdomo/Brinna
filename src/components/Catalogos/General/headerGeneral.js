import React from "react";

//CSS
import "../General/headerGeneral.css"

//Componentes
import MenuOpciones from "../MenuOpciones";
import MenuCatalogos from "../menu";
import LogoWhatsappCatalogos from "../LogoWhatsApp";

const CatalogoGeneral = () => {
    return (
        <div className="principal_catalago_general">

            {/* Menu de opciones */}
            <MenuOpciones />

            {/* Menu de navegacion */}
            <MenuCatalogos />

            {/* LogoWhatsapp */}
            <LogoWhatsappCatalogos />
        </div>
    )
}

export default CatalogoGeneral