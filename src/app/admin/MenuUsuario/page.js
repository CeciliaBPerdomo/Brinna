'use client'
import { useState } from "react";

// Componentes
import HeaderHome from "@/components/LandingPage/HeaderHome";
import MenuLateral from "../MenuLateral";

// Opciones del menú lateral
import AgregarProductos from "@/app/catalogo/AgregarRopa";
import Perfil from "@/components/MenuUsuario/Perfil/perfil";
import Prendas from "@/components/MenuUsuario/TusPrendas/Prendas";
import Ventas from "@/components/MenuUsuario/Ventas/ventas";
import Favoritos from "@/components/MenuUsuario/Favoritos/favoritos";
import Carrito from "@/components/MenuUsuario/Carrito/Carrito";
import Compras from "@/components/MenuUsuario/Compras/compras";
import Mensajes from "@/components/MenuUsuario/Mensajes/mensajes";

const MenuUsuario = () => {
    const [selectedMenu, setSelectedMenu] = useState('Menu 1');

    return (
        <div className="w-full">
            {/* Encabezado */}
            <HeaderHome />

            {/* Contenido principal */}
            <div className="flex flex-col md:flex-row w-full pt-4 gap-4">
                {/* Menú lateral */}
                <div className="w-full md:w-[330px]">
                    <MenuLateral
                        selectedMenu={selectedMenu}
                        setSelectedMenu={setSelectedMenu}
                    />
                </div>

                {/* Contenido dinámico */}
                <div className="flex-1 bg-white p-4 rounded-lg">
                    {selectedMenu === 'Menu 1' && <Perfil />}
                    {selectedMenu === 'Menu 2' && <AgregarProductos />}
                    {selectedMenu === 'Menu 3' && <Prendas />}
                    {selectedMenu === 'Menu 4' && <Ventas />}
                    {selectedMenu === 'Menu 5' && <Favoritos />}
                    {selectedMenu === 'Menu 6' && <Carrito />}
                    {selectedMenu === 'Menu 7' && <Compras />}
                    {selectedMenu === 'Menu 8' && <Mensajes />}
                </div>
            </div>
        </div>
    );
};

export default MenuUsuario;
