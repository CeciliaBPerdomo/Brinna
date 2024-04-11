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
        <div className="w-full bannerHome">
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
        </div>
    )
}

export default HeaderHome