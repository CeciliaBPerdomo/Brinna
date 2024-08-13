import Link from "next/link"

//CSS
import "../ComprarVender/comprarvender.css"

//Fuente
import { Jost } from "next/font/google"

const jost = Jost({
    weight: "800",
    subsets: ['latin'],
})

const ComprarVender = () => {
    return (
        <div className="principal_cv">
            <div class="grid grid-cols-2 gap-2">
                <div className="bg-comprar fondo_cv fondo_comprar_cv">
                    <div className="boton_cv">
                        <Link href={"/comprar"}>
                            <button className={`titulo_cv ${jost}`}>
                                COMPRAR
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="bg-vender fondo_cv">
                    <div className="boton_cv">
                        <Link href={"/vender"}>
                            <button className={`titulo_cv ${jost}`}>
                                VENDER
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ComprarVender