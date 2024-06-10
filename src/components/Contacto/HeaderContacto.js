import React from "react";

//CSS 
import "../Contacto/headercontacto.css"

//Componenetes
import MenuOpciones from "../Catalogos/MenuOpciones";
import MenuCatalogos from "../Catalogos/menu";
import LogoWhatsapp from "../LandingPage/Navbar/what";


const HeaderContacto = () => {
    return (
        <header className="bg-bannercontacto contacto_header_principal">
            {/* Menu de opciones */}
            <MenuOpciones />

            {/* Menu de navegacion */}
            <MenuCatalogos />

            {/* Logo de whatsapp */}
            <LogoWhatsapp />

        </header>
    )
}

export default HeaderContacto