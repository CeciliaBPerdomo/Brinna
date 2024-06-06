import React from "react";

//CSS
import "../ParaElla/headerparaella.css"

// Componentes
import LogoWhatsapp from "../LogoWhatsApp"
import MenuCatalogos from "../menu";
import MenuOpciones from "../MenuOpciones";

const HeaderParaElla = () => {
    return (
        <>
            <header>
                <div className="bg-bannerella bannerella_principal">

                    {/* Menu de opciones */}
                    <MenuOpciones />

                    {/* Menu de navegacion */}
                    <MenuCatalogos />

                    {/* Logo de whatsapp */}
                    <LogoWhatsapp />

                </div>
            </header>
        </>
    )
}

export default HeaderParaElla