//CSS
import "./ventas.css"

//Fuente
import { Jost } from "next/font/google"
const jost = Jost({
    weight: "600",
    subsets: ['latin']
})


function Ventas() {
    return (
        <div>
            <h1 className={`${jost} tus_ventas_perfil`}>
                Productos vendidos
            </h1>
        </div>
    )
}

export default Ventas