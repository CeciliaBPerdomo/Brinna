import React from "react";

// Componenetes
import MenuOpciones from "../Catalogos/MenuOpciones";
import MenuCatalogos from "../Catalogos/menu";
import LogoWhatsappCatalogos from "../Catalogos/LogoWhatsApp";

// CSS
import "../Terminos/headerTerminos.css"

const HeaderTerminos = () => {
    return (
        <header className="bg-bannerterminos banner_terminos_principal ">
            {/* Menu de opciones */}
            <div className="barraBotones_menuBotones_terminos">
                <div className="botonera_menuBotones">
                    <MenuOpciones />
                </div>
            </div>

            {/* Menu de navegacion */}
            <MenuCatalogos />

            {/* Logo de whatsapp */}
            <LogoWhatsappCatalogos/>

        </header>
    )
}

export default HeaderTerminos