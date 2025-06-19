import Menu from './Navbar/menu';
import BotonesSesion from './Navbar/botones';
import LogoWhatsapp from './Navbar/what';

// CSS
import "../LandingPage/Navbar/headerHome.css"

const HeaderHome = () => {

    return (
        <main className="headerHome">
            <section className="banner_portada">
                {/* Registro e inicio de sesion */}
                <BotonesSesion />

                {/* Menu de navegacion */}
                <Menu />

                {/* Logo de whatsapp */}
                {/* <LogoWhatsapp /> */}
            </section>
        </main>
    )
}

export default HeaderHome