import "../Voces/voces.css"
import { Jost } from "next/font/google"

const jost = Jost({
    weight: "700",
    subsets: ['latin'],
})

const Voces = () => {

    return (
        <div>
            <div className="encabezado_voces">
                <h1 className={`titulo_voces ${jost}`}>Voces que nos inspiran.</h1>
                <p className={`sub_voces ${jost}`}>Descubre lo que dicen nuestros clientes sobre su experiencia con nosotros.</p>
            </div>
        </div>
    )
}

export default Voces