"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import Image from 'next/image';

// CSS
//import "../Navbar/menu.css"

const Menu = () => {
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
    // // <div className='menuHeader_menuHomePrincipal'>
    // //   <nav className="menuNav_menuHomePrincipal">
    // //     {links.map(link => {
    // //       return (
    // //         <Link
    // //           key={link.label}
    // //           href={link.href}
    // //           className={`${pathname === link.href ?
    // //             'font-bold underline underline-offset-8 decoration-red-600' : ''} text-base p-3 menuInicio_menuHomePrincipal`}>
    // //           {link.label}
    // //         </Link>
    // //       )
    // //     })}
    // //   </nav>
    // </div>
    <div className="relative h-screen w-full">
      {/* Imagen de fondo */}
      <Image
        src="/images/banner_home.png" // Reemplaza con tu imagen en /public o URL externa
        alt="Banner de fondo"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        priority
      />
    </div>
  )
}

export default Menu