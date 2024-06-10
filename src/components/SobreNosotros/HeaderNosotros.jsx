import React from "react";

// CSS
import "../SobreNosotros/headernosotros.css"

// Componentes
import MenuOpciones from "../Catalogos/MenuOpciones";
import MenuCatalogos from "../Catalogos/menu";
import LogoWhatsappCatalogos from "../Catalogos/LogoWhatsApp";

const HeaderNosotros = () => {
    return (
        <header className="bg-bannernosotros banner_nosotros_principal">
            {/* Menu de opciones */}
            <MenuOpciones />

            {/* Menu de navegacion */}
            <MenuCatalogos />

            {/* Logo de whataspp */}
            <LogoWhatsappCatalogos />
        </header>
    )
}

export default HeaderNosotros