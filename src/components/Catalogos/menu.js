"use client"
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'

// CSS
import "../Catalogos/menu.css"

const MenuCatalogos = () => {
    const pathname = usePathname()
    const links = [
        {
            label: "CONTACTO",
            href: "/contacto"
        }, 
        {
            label: "NOSOTROS",
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
        <div className='menuHeader_menuCatalogo'>
        <nav className="menuNav_menuCatalogo">
            {links.map(link => {
                return (
                    <Link
                        key={link.label}
                        href={link.href}
                        className={`${pathname === link.href ?
                            'font-bold underline underline-offset-8 decoration-red-600' : ''} 
                                        text-base p-3 menuInicio_menuCatalogo`}>
                        {link.label}
                    </Link>
                )
            })}
        </nav>
        </div>
    )
}

export default MenuCatalogos