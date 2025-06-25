import Barra from "@/components/LandingPage/Busqueda/barraBusqueda";
import RopaParaElla from "./ropaElla";

// Tipografía
import { Jost } from "next/font/google"
const h1_jost = Jost({
    weight: "700",
    subsets: ['latin'],
})


const jost = Jost({
    weight: "400",
    subsets: ['latin'],
})

const sub_jost = Jost({
    weight: "600",
    subsets: ['latin'],
})


const ContenedorEllas = () => {
    return (
        <div className="mt-6">
            <h1
                className={`sm:text-4xl, md:text-5xl font-bold text-center ${h1_jost.className}`}
                style={{ color: "#CA4E3C" }} >
                Ropa para ella
            </h1>

            {/* Barra de busqueda */}
            <div className="mt-6 mb-8">
                <Barra />
            </div>

            <div className="mt-6 mb-8">
                <RopaParaElla />
            </div>

            {/* Info de mas catalogos */}
            <section className="w-full py-12 px-3">
                <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">

                    {/* Columna 1 - Texto */}
                    <div className="text-center md:text-left bg-[#DAEBEB] p-8 flex flex-col justify-center">
                        <h2
                            className={`text-3xl md:text-4xl font-extrabold mb-4 ${jost.className}`}
                            style={{ color: "#CA4E3C" }}
                        >
                            ¡Mirá otros catálogos!
                        </h2>
                        <p
                            className={`text-gray-600 mb-4 text-lg md:text-xl ${sub_jost.className}`}
                        >
                            Explora en otras categorías.
                        </p>
                    </div>

                    {/* Columna 2 */}
                    <div
                        className="relative h-[720px] bg-cover bg-center overflow-hidden"
                        style={{ backgroundImage: "url('/images/fondos/el.png')" }}
                    >
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-4">
                            <p className="text-white text-2xl font-bold">Ropa para él</p>
                            <a
                                href="/catalogo-el"
                                className="px-4 py-2 border border-white text-white hover:bg-white hover:text-[#CA4E3C] transition"
                            >
                                Ver catálogo
                            </a>
                        </div>
                    </div>

                    {/* Columna 3 */}
                    <div
                        className="relative h-[720px] bg-cover bg-center overflow-hidden"
                        style={{ backgroundImage: "url('/images/fondos/chicos.png')" }}
                    >
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-4">
                            <p className="text-white text-xl md:text-2xl font-bold w-full max-w-[90%] text-center break-words mx-auto">
                                Ropa para los más chicos
                            </p>
                            <a
                                href="/catalogo-chicos"
                                className="px-4 py-2 border border-white text-white hover:bg-white hover:text-[#CA4E3C] transition"
                            >
                                Ver catálogo
                            </a>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default ContenedorEllas