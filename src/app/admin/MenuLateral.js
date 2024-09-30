"use client"
import React, { useState } from "react"

// CSS
import "../admin/menuLateral.css"

//Fuente
import { Jost } from "next/font/google"
const jost = Jost({
    weight: "400",
    subsets: ['latin']
})


const MenuLateral = () => {
    const [selectedMenu, setSelectedMenu] = useState('Menu 2');

    const handleMenuClick = (menu) => {
        setSelectedMenu(menu);
    };

    return (
        <div className="menu_lateral_admin">
            <div className="mb-4">
                <button
                    className={`block w-full p-2 mb-2 ${jost}
                        ${selectedMenu === 'Menu 1' ?'botones_menu_lateral_activo' : 'botones_menu_lateral'}`}
                    onClick={() => handleMenuClick('Menu 1')}
                >
                    Perfil
                </button>
                <button
                    className={`block w-full p-2 mb-2 ${jost}
                        ${selectedMenu === 'Menu 2' ? 'botones_menu_lateral_activo' : 'botones_menu_lateral'}`}
                    onClick={() => handleMenuClick('Menu 2')}
                >
                    Publicar un producto
                </button>

                <button
                    className={`block w-full p-2 mb-2 ${jost}
                        ${selectedMenu === 'Menu 3' ? 'botones_menu_lateral_activo' : 'botones_menu_lateral'}`}
                    onClick={() => handleMenuClick('Menu 3')}
                >
                    Productos
                </button>

                <button
                    className={`block w-full p-2 mb-2 ${jost}
                        ${selectedMenu === 'Menu 4' ? 'botones_menu_lateral_activo' : 'botones_menu_lateral'}`}
                    onClick={() => handleMenuClick('Menu 4')}
                >
                    Mis ventas
                </button>

                <button
                    className={`block w-full p-2 mb-2 ${jost}
                        ${selectedMenu === 'Menu 5' ? 'botones_menu_lateral_activo' : 'botones_menu_lateral'}`}
                    onClick={() => handleMenuClick('Menu 5')}
                >
                    Favoritos
                </button>
                <button
                    className={`block w-full p-2 mb-2 ${jost}
                        ${selectedMenu === 'Menu 6' ? 'botones_menu_lateral_activo' : 'botones_menu_lateral'}`}
                    onClick={() => handleMenuClick('Menu 6')}
                >
                    Carrito
                </button>

                <button
                    className={`block w-full p-2 mb-2 ${jost}
                        ${selectedMenu === 'Menu 7' ? 'botones_menu_lateral_activo' : 'botones_menu_lateral'}`}
                    onClick={() => handleMenuClick('Menu 7')}
                >
                    Mis compras
                </button>

                <button
                    className={`block w-full p-2 mb-2 ${jost}
                        ${selectedMenu === 'Menu 8' ? 'botones_menu_lateral_activo' : 'botones_menu_lateral'}`}
                    onClick={() => handleMenuClick('Menu 8')}
                >
                    Mensajes nuevos
                </button>
            </div>
           
            <div>
                {selectedMenu === 'Menu 1' && <div>Perfil</div>}
                {selectedMenu === 'Menu 2' && <div>Publicar un producto</div>}
                {selectedMenu === 'Menu 3' && <div>Productos</div>}
                {selectedMenu === 'Menu 4' && <div>Mis Ventas</div>}
                {selectedMenu === 'Menu 5' && <div>Favoritos</div>}
                {selectedMenu === 'Menu 6' && <div>Carrito</div>}
                {selectedMenu === 'Menu 7' && <div>Mis compras</div>}
                {selectedMenu === 'Menu 8' && <div>Mensajes nuevos</div>}
            </div>
       
        </div>

    )
}

export default MenuLateral