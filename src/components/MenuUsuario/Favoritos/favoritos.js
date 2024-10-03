//CSS
import "./favoritos.css"

//Fuente
import { Jost } from "next/font/google"
const jost = Jost({
    weight: "600",
    subsets: ['latin']
})


function Favoritos() {
    return (
        <div>
            <h1 className={`${jost} tus_favoritos_perfil`}>
                Favoritos
            </h1>
        </div>
    )
}

export default Favoritos