import CatalagoPara from "./catalogo_para"
import "../Catalogos/catalogo.css"
import { Jost } from "next/font/google"

const jost = Jost({
    weight: "600",
    subsets: ['latin'],
})

const Catalago = () => {

    return (
        <div className="catalogo">
            <p className={`titulo_catalogo ${jost}`}>
                ¡Mirá nuestro catálogo!
            </p>

            <p className={`subtitulo_catalogo ${jost}`}>
                Explora en las diferentes categorías.
            </p>

            <div className="w-full grid grid-cols-3">
                <div className="bg-el fondoPrincipal_catalogo">
                    <CatalagoPara para={"él"} targetPage="/catalogo-el"/>
                </div>

                <div className="bg-ella fondoPrincipal_catalogo">
                    <CatalagoPara para={"ella"} targetPage="/catalogo-ella"  />
                </div>

                <div className="bg-chicos fondoPrincipal_catalogo">
                    <CatalagoPara para={"los más chicos"} targetPage="/catalogo-chicos"/>
                </div>
            </div>
        </div>
    )

}

export default Catalago