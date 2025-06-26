// components/Catalogos/EncabezadoNovedades.jsx

import { Jost } from "next/font/google"

const jost = Jost({ weight: "700", subsets: ['latin'] })
const sub_jost = Jost({ weight: "400", subsets: ['latin'] })

const EncabezadoNovedades = () => {
  return (
    <div className="text-center mt-10 px-4">
      <h1 className={`text-2xl sm:text-3xl text-[#CA4E3C] ${jost.className}`}>
        ¡Descubre las novedades!
      </h1>
      <p className={`text-[#5D717C] text-lg ${sub_jost.className}`}>
        Échale un vistazo a los últimos ingresos.
      </p>
    </div>
  )
}

export default EncabezadoNovedades
