import React from "react";

//CSS
import "../General/headerGeneral.css"

//Componentes
import MenuOpciones from "../MenuOpciones";
import MenuCatalogos from "../menu";
import LogoWhatsapp from "@/components/LandingPage/Navbar/what";

const CatalogoGeneral = () => {
    return (
        <div className="bg-bannertodoscatalogos principal_catalago_general">

            {/* Menu de opciones */}
            <div className="barraBotones_menuBotones_headergeneral">
                <div className="botonera_menuBotones_headerGeneral">
                    <MenuOpciones />
                </div>
            </div>

            {/* Menu de navegacion */}
            <MenuCatalogos />

            {/* LogoWhatsapp */}
            <LogoWhatsapp />
        </div>
    )
}

export default CatalogoGeneral