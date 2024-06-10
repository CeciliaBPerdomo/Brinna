import React from "react";

// Componenetes
import MenuOpciones from "../Catalogos/MenuOpciones";
import MenuCatalogos from "../Catalogos/menu";
import LogoWhatsapp from "../LandingPage/Navbar/what";

// CSS
import "../Terminos/headerTerminos.css"

const HeaderTerminos = () => {
    return (
        <header className="bg-bannerterminos banner_terminos_principal ">
            {/* Menu de opciones */}
            <MenuOpciones />

            {/* Menu de navegacion */}
            <MenuCatalogos />

            {/* Logo de whatsapp */}
            <LogoWhatsapp />

        </header>
    )
}

export default HeaderTerminos