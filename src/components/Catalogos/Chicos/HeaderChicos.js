import React from "react";

// CSS
import "../Chicos/headerchicos.css"

// Componentes
import LogoWhatsappCatalogos from "@/components/LandingPage/Navbar/what";
import MenuCatalogos from "../menu";
import MenuOpciones from "../MenuOpciones";

const HeaderParaChicos = () => {
    return (
        <>
            <header className="bg-bannerchicos principal_catalogo_chicos">

                {/* Menu de opciones */}
                <div className="barraBotones_menuBotones">
                    <div className="botonera_menuBotones">
                        <MenuOpciones />
                    </div>
                </div>

                {/* Menu de navegacion */}
                <MenuCatalogos />

                {/* WhatsApp */}
                <LogoWhatsappCatalogos />
            </header>
        </>
    )
}

export default HeaderParaChicos