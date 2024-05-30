{/* Registro e inicio de sesion */ }

import Image from 'next/image'
import Link from 'next/link';

// CSS
import "../Navbar/botones.css"

const BotonesSesion = () => {
    const botones = [
        {
            id: 1,
            srcImagen: "/images/botones/registrarse.png",
            altImagen: "Registrarse",
            widthImagen: 160,
            heightImagen: 50,
            linkImagen: "telodeboaun",
            clase: "images_botonRegistro_menuHeaderHome"
        },
        {
            id: 2,
            srcImagen: "/images/botones/inicio_sesion.png",
            altImagen: "Iniciar sesión",
            widthImagen: 160,
            heightImagen: 50,
            linkImagen: "/telodeboaun",
            clase: "images_botonInicio_menuHeaderHome"
        }
    ]

    return (
        <div className='barraBotones_menuHeaderHome'>
            <nav className="botonera_menuHeaderHome">
                {botones.map(boton => {
                    return (
                        <Link
                            key={boton.id}
                            href={boton.linkImagen}
                        >
                            <Image
                                src={boton.srcImagen}
                                alt={boton.altImagen}
                                width={boton.widthImagen}
                                height={boton.heightImagen}
                                className={boton.clase}
                            />
                        </Link>
                    )
                })}
            </nav>
        </div>
    )
}

export default BotonesSesion