//CSS
import Construccion from "../construccion"
import "./mensajes.css"

//Fuente
import { Jost } from "next/font/google"
const jost = Jost({
    weight: "600",
    subsets: ['latin']
})


function Mensajes() {
    return (
        <div>
            <h1 className={`${jost} tus_compras_perfil`}>
                Mensajes nuevos
            </h1>

           <Construccion />
        </div>
    )
}

export default Mensajes