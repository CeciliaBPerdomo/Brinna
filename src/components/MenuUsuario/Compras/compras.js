//CSS
import "./compras.css"

//Fuente
import { Jost } from "next/font/google"
const jost = Jost({
    weight: "600",
    subsets: ['latin']
})


function Compras() {
    return (
        <div>
            <h1 className={`${jost} tus_compras_perfil`}>
                Mis compras
            </h1>
        </div>
    )
}

export default Compras