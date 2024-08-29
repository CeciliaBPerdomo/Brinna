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
                <div className="barraBotones_menuBotones_paraEl">
                    <div className="botonera_menuBotones">
                        <MenuOpciones />
                    </div>
                </div>

                {/* Menu */}
                <MenuCatalogos />

                {/* WhatsApp */}
                <div className="header_parael_logoWA">
                    <LogoWhatsappCatalogos />
                </div>
            </header>
        </>
    )
}

export default HeaderParaEl