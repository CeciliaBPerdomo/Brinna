import { useState } from "react";
import { Jost } from "next/font/google";
import { Menu as MenuIcon, X } from "lucide-react";

const jost = Jost({
    weight: "400",
    subsets: ["latin"],
});

const MenuLateral = ({ selectedMenu, setSelectedMenu }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleMenuClick = (menu) => {
        setSelectedMenu(menu);
        setIsOpen(false);
    };

    const botones = [
        { id: "Menu 1", label: "Perfil" },
        { id: "Menu 2", label: "Publicar una prenda" },
        { id: "Menu 3", label: "Tus prendas" },
        { id: "Menu 4", label: "Mis ventas" },
        { id: "Menu 5", label: "Tus favoritos" },
        { id: "Menu 6", label: "Carrito" },
        { id: "Menu 7", label: "Mis compras" },
        { id: "Menu 8", label: "Mensajes nuevos" },
    ];

    return (
        <>
            {/* BOTÓN HAMBURGUESA (posicionado dentro del flujo) */}
            <div className="md:hidden w-screen flex justify-end pr-6 pt-4 absolute top-[bannerHeight] z-30">
                <button onClick={() => setIsOpen(true)}>
                    <MenuIcon className="w-8 h-8 text-black hover:text-[#CA4E3C] transition-colors duration-200" />
                </button>
            </div>



            {/* MENÚ DESKTOP */}
            <div className="hidden md:block w-full md:w-[330px] bg-[#DAEBEB] border border-gray-600 shadow-md pt-4 rounded-tr-[20px]">
                <div className="flex flex-col">
                    {botones.map(({ id, label }) => (
                        <button
                            key={id}
                            onClick={() => handleMenuClick(id)}
                            className={`
                text-left w-full px-10 py-3 text-[20px]
                ${jost.className}
                ${selectedMenu === id
                                    ? "bg-[#CA4E3C] text-black border-b border-[#8D8D8D]"
                                    : "bg-[#DAEBEB] text-black border-b border-[#8D8D8D] hover:bg-[#f3f3f3] transition-all duration-150"
                                }
              `}
                        >
                            {label}
                        </button>
                    ))}
                </div>
            </div>

            {/* FONDO OSCURO DETRÁS DEL MENÚ MOBILE */}
            {isOpen && (
                <div
                    className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 z-30"
                    onClick={() => setIsOpen(false)}
                />
            )}


            {/* MENÚ MOBILE DESDE LA DERECHA */}
            <div
                className={`
    absolute top-0 right-0 h-screen w-[80%] max-w-[320px]
    bg-[#DAEBEB] z-40 border-l border-gray-300 shadow-lg
    transform transition-transform duration-300
    ${isOpen ? "translate-x-0" : "translate-x-full"}
    md:hidden
  `}
            >

                <div className="flex justify-end px-4 py-4">
                    <button onClick={() => setIsOpen(false)}>
                        <X className="w-7 h-7 text-black" />
                    </button>
                </div>
                <div className="flex flex-col">
                    {botones.map(({ id, label }) => (
                        <button
                            key={id}
                            onClick={() => handleMenuClick(id)}
                            className={`
                text-left w-full px-6 py-3 text-[18px]
                ${jost.className}
                ${selectedMenu === id
                                    ? "bg-[#CA4E3C] text-black border-b border-[#8D8D8D]"
                                    : "bg-[#DAEBEB] text-black border-b border-[#8D8D8D] hover:bg-[#f3f3f3] transition-all duration-150"
                                }
              `}
                        >
                            {label}
                        </button>
                    ))}
                </div>
            </div>
        </>
    );
};

export default MenuLateral;
