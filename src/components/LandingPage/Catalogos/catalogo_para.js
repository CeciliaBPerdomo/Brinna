"use client"
import { useRouter } from 'next/navigation';
import "../Catalogos/catalogo.css"

//Fuente
import { Jost } from "next/font/google"

const jost = Jost({
    weight: "500",
    subsets: ['latin'],
})

const CatalagoPara = ({ para, targetPage }) => {
    const router = useRouter();

    const handleClick = () => {
        router.push(targetPage);
    };

    return (
        <div className="fondo_catalogo">
            <p className={`ropa_catalogo ${jost}`}>
                Ropa para {para}
            </p>

            <div className="divBoton_catalogo">
                <button className={`boton_catalogo border border-1 ${jost}`}
                    onClick={handleClick}>
                    Ver catálogo
                </button>
            </div>
        </div>
    )
}

export default CatalagoPara