//CSS
import "./carrito.css"

//Fuente
import { Jost } from "next/font/google"
const jost = Jost({
    weight: "600",
    subsets: ['latin']
})


function Carrito() {
    return (
        <div>
            <h1 className={`${jost} tu_carrito_perfil`}>
                Carrito de compras
            </h1>
        </div>
    )
}

export default Carrito