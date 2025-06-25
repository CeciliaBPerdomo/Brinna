import { Search } from "lucide-react";

// Tipografía
import { Jost } from "next/font/google"
const jost = Jost({
    weight: "700",
    subsets: ['latin'],
})

const jost_barra = Jost({
    weight: "500",
    subsets: ['latin'],
})

const Barra = () => {

    return (
        <div className="max-w-[90%] mx-auto py-8 flex flex-col gap-6 items-center">
            {/* Título */}
            <h2
                className={`md:text-3xl sm:text-2xl font-bold text-center ${jost.className}`}
                style={{ color: "#CA4E3C" }} >
                ¿Qué estás buscando?
            </h2>

            {/* Barra de búsqueda */}
            <div className="relative w-full max-w-xl">
                <input
                    type="text"
                    placeholder="Buscá una prenda"
                    disabled
                    style={{ color: "#757575" }}
                    className={`w-full rounded-full border border-gray-300 border-r-0 px-6 py-3 pr-14 text-lg focus:outline-none bg-gray-100 cursor-not-allowed ${jost_barra.className}`}
                />

                <button
                    className="absolute top-0 right-0 h-full w-12 rounded-r-full border border-gray-300 border-l-0 bg-[#CA4E3C] text-white flex items-center justify-center hover:bg-red-700"
                    disabled
                > <Search className="w-6 h-6" />
                </button>
            </div>
        </div>
    )
}

export default Barra