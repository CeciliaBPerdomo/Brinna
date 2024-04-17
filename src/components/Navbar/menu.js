"use client"
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'

const Menu = () => {
    const pathname = usePathname()
    const links = [
        {
            label: "CONTACTO",
            href: "/contacto"
        }, 
        {
            label: "SOBRE NOSOTROS",
            href: "/nosotros"
        },
        {
            label: "CATÁLOGO",
            href: "/catalogo"
        },
        {
            label: "INICIO",
            href: "/"
        },    
    ]

    return (
        <div style={{marginRight: "100px"}}>
        <nav className="flex flex-row-reverse mt-8 gap-4 md:flex md:flex-grow">
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
        </nav>
        </div>
    )
}

export default Menu