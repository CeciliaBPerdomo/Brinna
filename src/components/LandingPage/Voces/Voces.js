"use client"
import Review from "./Review"

import { Jost } from "next/font/google"
const jost = Jost({ weight: "700", subsets: ['latin'] })
const sub_jost = Jost({ weight: "600", subsets: ['latin'] })

const voces_inspiran = [
    {
        id: 1,
        nombre: "Julia",
        estrellas: 5,
        mensaje: "¡Excelente experiencia de compra! La selección de ropa usada es increíblemente variada y de gran calidad. Encontré piezas únicas que parecen prácticamente nuevas a precios muy razonables. Además, el servicio al cliente fue excepcional; respondieron rápidamente a mis preguntas y el envío fue rápido y eficiente. Definitivamente, recomendaría esta tienda a cualquier amante de la moda sostenible.",
    },
    {
        id: 2,
        nombre: "Pedro",
        estrellas: 4,
        mensaje: "Muy satisfecho con mi compra. La ropa usada está en muy buen estado y hay una amplia gama de estilos para elegir. Los precios son bastante competitivos y el proceso de compra fue sencillo. Me gustaría ver una descripción más detallada de cada prenda, especialmente sobre las medidas exactas. A pesar de eso, es una excelente opción para comprar ropa usada de calidad.",
    },
    {
        id: 3,
        nombre: "Roberto",
        estrellas: 3,
        mensaje: "La tienda de ropa usada ofrece una excelente variedad de prendas a precios justos. Me encantó la diversidad de estilos y la posibilidad de encontrar piezas vintage únicas. La mayoría de los artículos estaban en muy buen estado y llegaron bien empaquetados. Estoy contento con mi compra y seguramente volveré a comprar en el futuro.",
    },
]

const Voces = () => {
    return (
        <div className="py-10 px-4 md:px-10">
            {/* Encabezado centrado */}
            <div className="text-center mb-10">
                <h1 className={`text-2xl sm:text-3xl text-[#CA4E3C] ${jost.className}`}>
                    Voces que nos inspiran.
                </h1>
                <p className={`text-[#5D717C] text-lg sm:text-xl mt-2 ${sub_jost.className}`}>
                    Descubre lo que dicen nuestros clientes sobre su experiencia con nosotros.
                </p>
            </div>

            {/* Grid de reviews */}
            <div className="grid gap-8 md:grid-cols-3 lg:gap-12">
                {voces_inspiran.map((item) => (
                    <div
                        key={item.id}
                        className="flex flex-col p-6 space-y-2 bg-[#F4F9F9] border border-indigo-100 rounded-lg shadow hover:shadow-xl transition-all duration-500"
                    >
                        <div className="flex justify-between items-center my-1">
                            <h5 className="text-lg sm:text-xl font-bold text-black">{item.nombre}</h5>
                            <Review rating={item.estrellas} />
                        </div>

                        <p className="text-sm sm:text-base text-gray-600 leading-snug">{item.mensaje}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Voces