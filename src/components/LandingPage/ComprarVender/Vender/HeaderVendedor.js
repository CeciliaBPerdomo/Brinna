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
      <div className="barraBotones_menuBotones_vender">
        <div className="botonera_menuBotones_vender">
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

export default HeaderVendedor