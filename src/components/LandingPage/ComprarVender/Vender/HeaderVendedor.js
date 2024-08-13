import React from 'react'

// CSS
import "../Vender/headerVendedor.css"

//Menus
import MenuOpciones from '@/components/Catalogos/MenuOpciones'
import MenuCatalogos from '@/components/Catalogos/menu'
import LogoWhatsappCompraVenta from '../LogoWhatsApp'

function HeaderVendedor() {
  return (
    <div className='bg-bannercomovender'>
            {/* Menu de opciones */}
            <MenuOpciones />

            {/* Menu de navegacion */}
            <MenuCatalogos />

            {/* Logo de whatsapp */}
            <LogoWhatsappCompraVenta />
    </div>
  )
}

export default HeaderVendedor