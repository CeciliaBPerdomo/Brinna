import React from 'react'

// CSS
import "../Comprar/HeaderCompar.css"

//Menus
import MenuOpciones from '@/components/Catalogos/MenuOpciones'
import MenuCatalogos from '@/components/Catalogos/menu'
import LogoWhatsappCompraVenta from '../LogoWhatsApp'

function HeaderComprar() {
    return (
        <div className="bg-bannercomocomprar bannerComoComprar_header">
            {/* Menu de opciones */}
            <MenuOpciones />

            {/* Menu de navegacion */}
            <MenuCatalogos />

            {/* Logo de whatsapp */}
            <LogoWhatsappCompraVenta />

        </div>
    )
}

export default HeaderComprar