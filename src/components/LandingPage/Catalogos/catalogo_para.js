import "../Catalogos/catalogo.css"
import { Jost } from "next/font/google"

const jost = Jost({
    weight: "500",
    subsets: ['latin'],
})

const CatalagoPara = ({ para }) => {

    return (
        <div className="fondo">
            <p className={`ropa ${jost}`}>
                Ropa para {para}
            </p>

            <div className="divBoton">
                <button className={`boton border border-1 ${jost}`}>
                    Ver catálogo
                </button>
            </div>
        </div>
    )
}

export default CatalagoPara