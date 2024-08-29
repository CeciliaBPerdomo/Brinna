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
            <div className="barraBotones_menuBotones_comprar">
                <div className="botonera_menuBotones_comprar">
                    <MenuOpciones />
                </div>
            </div>

            {/* Menu de navegacion */}
            <MenuCatalogos />

            {/* Logo de whatsapp */}
            <div className='logoWA_comprarvender'>
                <LogoWhatsappCompraVenta />
            </div>

        </div>
    )
}

export default HeaderComprar