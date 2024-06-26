import React from 'react'

import Menu from './Navbar/menu';
import BotonesSesion from './Navbar/botones';
import LogoWhatsapp from './Navbar/what';

// CSS
import "../LandingPage/Navbar/navbar.css"

const HeaderHome = () => {

    return (
        <div className="bg-portada bannerHome_header">

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