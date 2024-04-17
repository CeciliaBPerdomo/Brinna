"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { usePathname } from 'next/navigation'

const HeaderHome = () => {
    const pathname = usePathname()
    const links = [
        {
            label: "INICIO",
            href: "/"
        },

        {
            label: "CATÁLOGO",
            href: "/catalogo"
        },

        {
            label: "SOBRE NOSOTROS",
            href: "/nosotros"
        },

        {
            label: "CONTACTO",
            href: "/contacto"
        }
    ]

    return (
        <div className="bannerHome">

            <div class="grid grid-cols-6 mr-4 pt-12 text-center justify-items-center barraBotones">

                {/* Registro e inicio de sesion */}
                <div></div>
                <div></div>
                <div></div>
                <div></div>

                <div >
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
            </div>

            
            <div class="grid grid-cols-6 mr-4 pt-12 text-center justify-items-center barraNavegacion">
                {/* Menu de navegacion */}
                <div></div>
                <div></div>
                {links.map(link => {
                    return (
                        <Link
                            key={link.label}
                            href={link.href}
                            className={`${pathname === link.href ?
                                'font-bold underline underline-offset-8 decoration-red-600' : ''} 
                                        text-base p-3 text-white menuInicio`}>
                            {link.label}
                        </Link>
                    )
                })}

            </div>

            <Link href={"https://api.whatsapp.com/send?phone=59899387921&text=Hola! ¿Qué%20tal? Te escribo desde la aplicación web de Brinna!"}>
                <div className='logoWhatsapp'>
                    <Image
                        src={"/images/icono_whatsapp.png"}
                        alt="Contacto whatsapp"
                        width={88}
                        height={88}
                    />
                </div>
            </Link>
        </div>
    )
}

export default HeaderHome