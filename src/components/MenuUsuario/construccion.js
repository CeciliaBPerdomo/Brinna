import Image from "next/image"

//Fuente
import { Jost } from "next/font/google"
const jost = Jost({
  weight: "600",
  subsets: ['latin']
})

function Construccion() {
  return (
    <div>
        <p className={`${jost} mt-3`}>Esta sección se encuentra en construcción, desarrollo y planificación.</p>
        <Image
          src={"/images/buscando.png"}
          width={350}
          height={50}
          alt="Working"
        />
    </div>
  )
}

export default Construccion