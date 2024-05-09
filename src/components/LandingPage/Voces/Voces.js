//"use client"
import "../Voces/voces.css"
import { Jost } from "next/font/google"

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
        mensaje: "Lorem ipsum dolor sit amet consectetur. Vivamus at lorem fermentum tortor neque purus purus. Ultricies aliquet nulla nunc malesuada pharetra lacus commodo. Aliquam convallis pellentesque."
    },
    {
        id: 2,
        nombre: "Pedro",
        estrellas: 4,
        mensaje: "Lorem ipsum dolor sit amet consectetur. Vivamus at lorem fermentum tortor neque purus purus."
    },
    {
        id: 3,
        nombre: "Roberto",
        estrellas: 5,
        mensaje: "Lorem ipsum dolor sit amet consectetur. Dictum neque dictum aenean mattis odio maecenas tincidunt. Accumsan maecenas auctor penatibus elit ut malesuada justo. Augue lectus et sit consectetur."
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
                    shadow hover:shadow-xl lg:p-8 lg:flex-row lg:space-y-0 lg:space-x-6">
                        <div className="flex-1" >
                            <h5 className="mb-3 text-xl font-bold lg:text-2xl">{item.nombre}</h5>
                            <p className="mb-6 text-lg text-gray-600">{item.mensaje}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Voces