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
            linkImagen: "telodeboaun"
        },
        {
            id: 2,
            srcImagen: "/images/botones/inicio_sesion.png",
            altImagen: "Iniciar sesión",
            widthImagen: 160,
            heightImagen: 50,
            linkImagen: "/telodeboaun"
        }
    ]

    return (
        <div className='barraBotones'>
            <nav className="botonera">
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
                            />
                        </Link>
                    )
                })}
            </nav>
        </div>
    )
}

export default BotonesSesion