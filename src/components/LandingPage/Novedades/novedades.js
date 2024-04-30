import "../Novedades/novedades.css"
import { Jost } from "next/font/google"


const jost = Jost({
    weight: "600",
    subsets: ['latin'],
})

const Novedades = () => {

    return (
        <div>
            <div className="encabezado_novedades">
                <h1 className={`titulo_novedades ${jost}`}>
                    ¡Descubre las novedades!
                </h1>
                <p className={`sub_novedades ${jost}`}>
                    Échale un vistazo a los últimos ingresos.
                </p>
            </div>
            <div>
                
            </div>
        </div>
    )
}

export default Novedades