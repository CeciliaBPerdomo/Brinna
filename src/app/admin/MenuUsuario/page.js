import React from "react";

// Componentes
import HeaderHome from "@/components/LandingPage/HeaderHome";
import AgregarProductos from "@/app/catalogo/AgregarRopa";
import MenuLateral from "../MenuLateral";

// CSS
import "../MenuUsuario/menuUsuario.css"

const MenuUsuario = () => {
    return (
        <div>
            {/* Encabezado */}
            <HeaderHome />

            <div className="flex">
                <div className="pt-4 contenedor_menu_lateral">
                    {/* Menu vertical */}
                    <MenuLateral />
                </div>

                <div className="bg-white p-2 menuUsuario_agregarproductos w-1/2" >
                    {/* Agregar productos */}
                    <AgregarProductos />
                </div>
            </div>
        </div>
    )
}

export default MenuUsuario