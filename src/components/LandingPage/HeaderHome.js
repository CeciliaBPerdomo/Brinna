import React from 'react'

import Menu from './Navbar/menu';
import BotonesSesion from './Navbar/botones';
import LogoWhatsapp from './Navbar/what';

const HeaderHome = () => {

    return (
        <div className="bannerHome">

            {/* Registro e inicio de sesion */}
            <BotonesSesion />

            {/* Menu de navegacion */}
            <Menu />

            {/* Logo de whatsapp */}
           <LogoWhatsapp />

        </div>
    )
}

export default HeaderHome