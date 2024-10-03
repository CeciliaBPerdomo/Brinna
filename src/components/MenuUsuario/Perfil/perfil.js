import "./perfil.css"

//Fuente
import { Jost } from "next/font/google"
const jost = Jost({
    weight: "600",
    subsets: ['latin']
})

function Perfil() {
  return (
    <div>
        <h1 className={`${jost} tu_info_perfil`}>
          Tu info
        </h1>
    </div>
  )
}

export default Perfil