// CSS
import "../admin/menuLateral.css"

//Fuente
import { Jost } from "next/font/google"
const jost = Jost({
    weight: "400",
    subsets: ['latin']
})


const MenuLateral = ({ selectedMenu, setSelectedMenu }) => {
    //   const [selectedMenu, setSelectedMenu] = useState('Menu 2');

    const handleMenuClick = (menu) => {
        setSelectedMenu(menu);
    };

    return (
        <div className="menu_lateral_admin">
            <div className="mb-4 pt-2 pb-4">

                {/* Perfil */}
                <button
                    className={`block w-full p-2 mb-2 ${jost}
                        ${selectedMenu === 'Menu 1' ? 'botones_menu_lateral_activo' : 'botones_menu_lateral'}`}
                    onClick={() => handleMenuClick('Menu 1')} >
                    Perfil
                </button>

                {/* Publicar producto */}
                <button
                    className={`block w-full p-2 mb-2 ${jost}
                        ${selectedMenu === 'Menu 2' ? 'botones_menu_lateral_activo' : 'botones_menu_lateral'}`}
                    onClick={() => handleMenuClick('Menu 2')}>
                    Publicar una prenda
                </button>

                {/* Tus productos */}
                <button
                    className={`block w-full p-2 mb-2 ${jost}
                        ${selectedMenu === 'Menu 3' ? 'botones_menu_lateral_activo' : 'botones_menu_lateral'}`}
                    onClick={() => handleMenuClick('Menu 3')}>
                    Tus prendas
                </button>

                {/* Mis ventas */}
                <button
                    className={`block w-full p-2 mb-2 ${jost}
                        ${selectedMenu === 'Menu 4' ? 'botones_menu_lateral_activo' : 'botones_menu_lateral'}`}
                    onClick={() => handleMenuClick('Menu 4')}>
                    Mis ventas
                </button>

                {/* Favoritos */}
                <button
                    className={`block w-full p-2 mb-2 ${jost}
                        ${selectedMenu === 'Menu 5' ? 'botones_menu_lateral_activo' : 'botones_menu_lateral'}`}
                    onClick={() => handleMenuClick('Menu 5')}>
                    Tus favoritos
                </button>

                {/* Carrito */}
                <button
                    className={`block w-full p-2 mb-2 ${jost}
                        ${selectedMenu === 'Menu 6' ? 'botones_menu_lateral_activo' : 'botones_menu_lateral'}`}
                    onClick={() => handleMenuClick('Menu 6')}>
                    Carrito
                </button>


                {/* Mis compras */}
                <button
                    className={`block w-full p-2 mb-2 ${jost}
                        ${selectedMenu === 'Menu 7' ? 'botones_menu_lateral_activo' : 'botones_menu_lateral'}`}
                    onClick={() => handleMenuClick('Menu 7')}>
                    Mis compras
                </button>

                {/* Mensajes nuevos */}
                <button
                    className={`block w-full p-2 mb-2 ${jost}
                        ${selectedMenu === 'Menu 8' ? 'botones_menu_lateral_activo' : 'botones_menu_lateral'}`}
                    onClick={() => handleMenuClick('Menu 8')}>
                    Mensajes nuevos
                </button>
            </div>
        </div>

    )
}

export default MenuLateral