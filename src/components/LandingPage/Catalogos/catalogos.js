import CatalagoPara from "./catalogo_para"
import "../Catalogos/catalogo.css"
import { Jost } from "next/font/google"

const jost = Jost({
    weight: "600",
    subsets: ['latin'],
})

const Catalago = () => {

    return (
        <div>
            <p className={`titulo ${jost}`}>
                ¡Mirá nuestro catálogo!
            </p>

            <p className={`subtitulo ${jost}`}>
                Explora en las diferentes categorías.
            </p>

            <div className="w-full grid grid-cols-3">
                <div className="bg-el fondoPrincipal">
                    <CatalagoPara para={"él"} />
                </div>

                <div className="bg-ella fondoPrincipal">
                    <CatalagoPara para={"ella"} />
                </div>

                <div className="bg-chicos fondoPrincipal">
                    <CatalagoPara para={"los más chicos"} />
                </div>
            </div>
        </div>
    )

}

export default Catalago