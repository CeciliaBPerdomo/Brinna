//"use client"
import "../Voces/voces.css"
import { Jost } from "next/font/google"
import Review from "./Review"

const jost = Jost({
    weight: "700",
    subsets: ['latin'],
})

const sub_jost = Jost({
    weight: "600",
    subsets: ['latin'],
})

const voces_inspiran = [
    {
        id: 1,
        nombre: "Julia",
        estrellas: 5,
        mensaje: "¡Excelente experiencia de compra! La selección de ropa usada es increíblemente variada y de gran calidad. Encontré piezas únicas que parecen prácticamente nuevas a precios muy razonables. Además, el servicio al cliente fue excepcional; respondieron rápidamente a mis preguntas y el envío fue rápido y eficiente. Definitivamente, recomendaría esta tienda a cualquier amante de la moda sostenible."
    },
    {
        id: 2,
        nombre: "Pedro",
        estrellas: 4,
        mensaje: "Muy satisfecho con mi compra. La ropa usada está en muy buen estado y hay una amplia gama de estilos para elegir. Los precios son bastante competitivos y el proceso de compra fue sencillo. Me gustaría ver una descripción más detallada de cada prenda, especialmente sobre las medidas exactas. A pesar de eso, es una excelente opción para comprar ropa usada de calidad."
    },
    {
        id: 3,
        nombre: "Roberto",
        estrellas: 3,
        mensaje: "La tienda de ropa usada ofrece una excelente variedad de prendas a precios justos. Me encantó la diversidad de estilos y la posibilidad de encontrar piezas vintage únicas. La mayoría de los artículos estaban en muy buen estado y llegaron bien empaquetados. Estoy contento con mi compra y seguramente volveré a comprar en el futuro."
    }
]


const Voces = () => {
    return (
        <div>
            <div className="encabezado_voces">
                <h1 className={`titulo_voces ${jost}`}>Voces que nos inspiran.</h1>
                <p className={`sub_voces ${jost}`}>Descubre lo que dicen nuestros clientes sobre su experiencia con nosotros.</p>
            </div>

            <div className="grid gap-8 md:grid-cols-3 lg:gap-12 p-6 md:p-10">
                {voces_inspiran.map((item) => (
                    <div key={item.id} className="flex flex-col p-6 space-y-2 
                    transition-all duration-500 bg-fondo_cards border border-indigo-100 rounded-lg 
                    shadow hover:shadow-xl lg:p-8 lg:flex-row lg:space-y-0 lg:space-x-6 card_voces">
                        <div className="flex-1" >
                            <Review rating={item.estrellas} />
                            <h5 className="mb-3 text-xl font-bold lg:text-2xl nombre_voces">{item.nombre}</h5>
                            <p className="mb-6 text-lg text-gray-600 mensajes_voces">{item.mensaje}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Voces