'use client'
import { useState } from "react";

// Componentes
import HeaderHome from "@/components/LandingPage/HeaderHome";
import MenuLateral from "../MenuLateral";

// Opciones del menu lateral
import AgregarProductos from "@/app/catalogo/AgregarRopa";
import Perfil from "@/components/MenuUsuario/Perfil/perfil";

// CSS
import "../MenuUsuario/menuUsuario.css"
import Prendas from "@/components/MenuUsuario/TusPrendas/Prendas";
import Ventas from "@/components/MenuUsuario/Ventas/ventas";
import Favoritos from "@/components/MenuUsuario/Favoritos/favoritos";
import Carrito from "@/components/MenuUsuario/Carrito/Carrito";
import Compras from "@/components/MenuUsuario/Compras/compras";
import Mensajes from "@/components/MenuUsuario/Mensajes/mensajes";

const MenuUsuario = () => {
    const [selectedMenu, setSelectedMenu] = useState('Menu 1');
    return (
        <div>
            {/* Encabezado */}
            <HeaderHome />

            <div className="flex">
                <div className="pt-4 contenedor_menu_lateral">
                    {/* Menu vertical */}
                    <MenuLateral selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />
                    <br/>
                </div>

                <div className="bg-white p-2 menuUsuario_agregarproductos w-1/2" >
                    {/* Mostrar contenido dinámico basado en el menú seleccionado */}
                    {selectedMenu === 'Menu 1' && <Perfil />}
                    {selectedMenu === 'Menu 2' && <AgregarProductos />}
                    {selectedMenu === 'Menu 3' && <div><Prendas/></div>}
                    {selectedMenu === 'Menu 4' && <div><Ventas /></div>}
                    {selectedMenu === 'Menu 5' && <div><Favoritos /></div>}
                    {selectedMenu === 'Menu 6' && <div><Carrito /></div>}
                    {selectedMenu === 'Menu 7' && <div><Compras /></div>}
                    {selectedMenu === 'Menu 8' && <div><Mensajes /></div>}
                </div>
            </div>
        </div>
    )
}

export default MenuUsuario