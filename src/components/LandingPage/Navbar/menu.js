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
        <div className='menuHeader'>
        <nav className="menuNav">
            {links.map(link => {
                return (
                    <Link
                        key={link.label}
                        href={link.href}
                        className={`${pathname === link.href ?
                            'font-bold underline underline-offset-8 decoration-red-600' : ''} 
                                        text-base p-3 menuInicio`}>
                        {link.label}
                    </Link>
                )
            })}
        </nav>
        </div>
    )
}

export default Menu