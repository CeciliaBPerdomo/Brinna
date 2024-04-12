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
        <div className="w-full bannerHome"
            style={{ paddingTop: "35px" }}
        >
            <div className='flex justify-between items-center '>
                <nav className='flex justify-between gap-2 mt-12 ml-auto mr-10'>
                    {links.map(link => {
                        return (
                            <Link
                                key={link.label}
                                href={link.href}
                                className={`${pathname === link.href ?
                                    'font-bold underline underline-offset-8 decoration-red-600' : ''} 
                                        text-base p-3 text-white text-4xl`}>
                                {link.label}
                            </Link>
                        )
                    })}
                </nav>
            </div>

            <Link href={"https://api.whatsapp.com/send?phone=59899387921&text=Hola! ¿Qué%20tal? Te escribo desde la aplicación web de Brinna!"}>
                <Image
                    src={"/images/icono_whatsapp.png"}
                    alt="Contacto whatsapp"
                    width={130}
                    height={50}
                    className='float-right'
                    style={{ paddingTop: "1000px" }}
                />
            </Link>
        </div>
    )
}

export default HeaderHome