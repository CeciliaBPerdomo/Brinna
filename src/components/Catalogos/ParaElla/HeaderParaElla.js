import React from "react";

//CSS
import "../ParaElla/headerparaella.css"

// Componentes
import MenuCatalogos from "../menu";
import MenuOpciones from "../MenuOpciones";
import LogoWhatsappCatalogos from "@/components/LandingPage/Navbar/what";

const HeaderParaElla = () => {
    return (
        <>
            <header>
                <div className="bg-bannerella bannerella_principal">

                    {/* Menu de opciones */}
                    <div className="barraBotones_menuBotones_paraella">
                        <div className="botonera_menuBotones">
                            <MenuOpciones />
                        </div>
                    </div>

                    {/* Menu de navegacion */}
                    <MenuCatalogos />

                    {/* WhatsApp */}
                    <LogoWhatsappCatalogos />
                </div>
            </header>
        </>
    )
}

export default HeaderParaElla