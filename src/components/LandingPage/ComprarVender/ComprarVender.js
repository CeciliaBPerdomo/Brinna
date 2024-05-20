import "../ComprarVender/comprarvender.css"
import { Jost } from "next/font/google"
import Image from "next/image"

const jost = Jost({
    weight: "800",
    subsets: ['latin'],
})


const ComprarVender = () => {

    return (
        <div className="principal_cv">
            <div className="bg-comprar fondo_cv">
                <div className="boton_cv">
                    <button className={`titulo_cv ${jost}`}>
                        COMPRAR
                    </button>
                </div>
            </div>

            <div className="bg-vender fondo_cv">
                <div className="boton_cv">
                    <button className={`titulo_cv ${jost}`}>
                        VENDER
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ComprarVender