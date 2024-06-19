"use client"
import React, { useState } from "react"

const MenuLateral = () => {

    const [selectedMenu, setSelectedMenu] = useState('Menu 2');

    const handleMenuClick = (menu) => {
        setSelectedMenu(menu);
    };

    return (
        <div>

            <div className="mb-4">
                <button
                    className={`block w-full p-2 mb-2 ${selectedMenu === 'Menu 1' ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}
                    onClick={() => handleMenuClick('Menu 1')}
                >
                    Perfil
                </button>
                <button
                    className={`block w-full p-2 mb-2 ${selectedMenu === 'Menu 2' ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}
                    onClick={() => handleMenuClick('Menu 2')}
                >
                    Publicar un producto
                </button>
            </div>
            <div>
                {selectedMenu === 'Menu 1' && <div>Perfil</div>}
                {selectedMenu === 'Menu 2' && <div>Publicar un producto</div>}
            </div>
        </div>
        //     </div>
        // </div>
    )
}

export default MenuLateral