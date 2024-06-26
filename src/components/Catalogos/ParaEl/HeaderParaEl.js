import React from "react";

// CSS
import "../ParaEl/headerparael.css"

// Componentes
import MenuOpciones from "../MenuOpciones";
import MenuCatalogos from "../menu";
import LogoWhatsappCatalogos from "../LogoWhatsApp";

const HeaderParaEl = () => {
    return (
        <> 
        <header className="bg-bannerel principal_catalago_el">

            {/* Menu de opciones */}
            <MenuOpciones />

            {/* Menu */}
            <MenuCatalogos />

            {/* WhatsApp */}
            <LogoWhatsappCatalogos />
        </header>
        </>
    )
}

export default HeaderParaEl