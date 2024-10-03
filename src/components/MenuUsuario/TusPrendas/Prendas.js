//CSS
import "./prendas.css"

//Fuente
import { Jost } from "next/font/google"
const jost = Jost({
    weight: "600",
    subsets: ['latin']
})


function Prendas() {
    return (
        <div>
            <h1 className={`${jost} tus_prendas_perfil`}>
                Prendas en venta
            </h1>
        </div>
    )
}

export default Prendas