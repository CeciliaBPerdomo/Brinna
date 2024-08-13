import React from 'react'

// CSS
import "../Comprar/HeaderCompar.css"

//Menus
import MenuOpciones from '@/components/Catalogos/MenuOpciones'
import MenuCatalogos from '@/components/Catalogos/menu'
import LogoWhatsappCatalogos from '@/components/Catalogos/LogoWhatsApp'

function HeaderComprar() {
    return (
        <div className="bg-bannercomocomprar bannerComoComprar_header">
            {/* Menu de opciones */}
            <MenuOpciones />

            {/* Menu de navegacion */}
            <MenuCatalogos />

            {/* Logo de whatsapp */}
            <LogoWhatsappCatalogos />

        </div>
    )
}

export default HeaderComprar