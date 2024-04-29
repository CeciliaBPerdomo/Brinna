import "../Busqueda/barra.css"
import { Jost } from "next/font/google"


const jost = Jost({
    weight: "700",
    subsets: ['latin'],
})

const jost_barra = Jost({
    weight: "500",
    subsets: ['latin'],
})

const Barra = () => {

    return (
        <div>

            {/* Encabezado */}
            <div className="texto_barra">
                <h1 className={`titulo_barra ${jost}`}>¿Qué estás buscando?</h1>
            </div>

            {/* Barra de busqueda */}
            <div className="barra_busqueda">
                <div className="input_container_barra">
                    <input
                        type="text"
                        placeholder="Busca una prenda"
                        className={`input_barra ${jost_barra}`}
                    />
                    <button className="boton_lupa_barra">
                        <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Barra