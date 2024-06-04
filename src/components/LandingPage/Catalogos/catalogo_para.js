import "../Catalogos/catalogo.css"
import { Jost } from "next/font/google"

const jost = Jost({
    weight: "500",
    subsets: ['latin'],
})

const CatalagoPara = ({ para }) => {

    return (
        <div className="fondo_catalogo">
            <p className={`ropa_catalogo ${jost}`}>
                Ropa para {para}
            </p>

            <div className="divBoton_catalogo">
                <button className={`boton_catalogo border border-1 ${jost}`}>
                    Ver catálogo
                </button>
            </div>
        </div>
    )
}

export default CatalagoPara