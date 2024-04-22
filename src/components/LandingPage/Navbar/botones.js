{/* Registro e inicio de sesion */ }

import Image from 'next/image'
import Link from 'next/link';

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


            {/* <div class="grid grid-cols-6 mr-4 pt-12 barraBotones">

                <div></div>
                <div></div>
                <div></div>
                <div></div>

                <div className='flex justify-end mr-4'>
                    <Image
                        src={"/images/botones/inicio_sesion.png"}
                        alt="Iniciar sesion"
                        width={160}
                        height={50}
                    />
                </div>

                <div>
                    <Image
                        src={"/images/botones/registrarse.png"}
                        alt="Registrarse"
                        width={160}
                        height={50}
                    />
                </div>
            </div> */}
        </div>
    )
}

export default BotonesSesion