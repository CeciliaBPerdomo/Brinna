import Link from "next/link";

// Fuente
import { Jost } from "next/font/google";

const jost = Jost({
    weight: "500",
    subsets: ["latin"],
});

const ComprarVender = () => {
    return (
        <div className="max-w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
            {/* Imagen 1 con texto "COMPRAR" */}
            <div className="relative w-full h-72 md:h-96 overflow-hidden group rounded-lg">
                <img
                    src="/images/fondos/FondoComprar.png"
                    alt="Comprar"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <Link href="/comprar">
                    <div className="absolute inset-0 flex items-center justify-center rounded-lg cursor-pointer">
                        <span
                            style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
                            className={`border-4 border-white text-white uppercase px-6 py-3 text-3xl md:text-5xl font-extrabold ${jost.className}`}
                        >
                            Comprar
                        </span>
                    </div>
                </Link>
            </div>

            {/* Imagen 2 con texto "VENDER" */}
            <div className="relative w-full h-72 md:h-96 overflow-hidden group rounded-lg">
                <img
                    src="/images/fondos/FondoVender.png"
                    alt="Vender"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <Link href="/vender">
                    <div className="absolute inset-0 flex items-center justify-center rounded-lg cursor-pointer">
                        <span
                            style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
                            className={`border-4 border-white text-white uppercase px-6 py-3 text-3xl md:text-5xl font-extrabold ${jost.className}`}
                        >
                            Vender
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default ComprarVender;
