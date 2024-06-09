import React from "react";

// CSS
import "../Chicos/headerchicos.css"

// Componentes
import LogoWhatsappCatalogos from "../LogoWhatsApp";
import MenuCatalogos from "../menu";
import MenuOpciones from "../MenuOpciones";

const HeaderParaChicos = () => {
    return (
        <>
            <header className="bg-bannerchicos principal_catalogo_chicos">

                {/* Menu de opciones */}
                <MenuOpciones />

                {/* Menu de navegacion */}
                <MenuCatalogos/>

                {/* Logo de whataspp */}
                <LogoWhatsappCatalogos />
            </header>
        </>
    )
}

export default HeaderParaChicos