import React from 'react'

//CSS 
import "../Catalogos/loading.css"

// Fuente
import { Jost } from "next/font/google"

const jost = Jost({
    weight: "600",
    subsets: ['latin'],
})


function LoadingWash() {
    return (
        /* From Uiverse.io by Shoh2008 */
        <div>
            <p className={`preparando_p ${jost}`}>Estamos preparando tu catálogo de ropa</p>
            <div className="loader">
            </div>
        </div>
    )
}

export default LoadingWash