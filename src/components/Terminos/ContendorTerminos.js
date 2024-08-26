import React from "react";

// CSS
import "../Terminos/contenedorTerminos.css"

// Fuente
import { Jost } from "next/font/google"

const jost = Jost({
    weight: "500",
    subsets: ['latin'],
})

const subjost = Jost({
    weight: "600",
    subsets: ['latin'],
})


const ContenedorTerminos = () => {
    return (
        <div>
            <div className="contenedor_principal_terminos">
                <p className={`terminos_contenedor ${subjost}`}>Términos y condiciones</p>
            </div>
            <div className="contenedor_texto_terminos">
                <p className={`texto_contenedor_terminos ${jost}`}> 
                    Nunc tempor interdum ex, sed cursus nunc egestas aliquet. Pellentesque interdum vulputate elementum. Donec erat diam, pharetra nec enim ut, bibendum pretium tellus. Vestibulum et turpis nibh. Cras vel ornare velit, ac pretium arcu. Cras justo augue, finibus id sollicitudin et, rutrum eget metus. Suspendisse ut mauris eu massa pulvinar sollicitudin vel sed enim. Pellentesque viverra arcu et dignissim vehicula. Integer nec diam a libero tincidunt varius sed vel odio. Donec rutrum dapibus massa, vel tempor nulla porta id. Suspendisse vulputate fermentum sem sollicitudin facilisis. Aliquam vehicula sapien nec ante auctor, quis mollis leo tincidunt.
                </p>
                <p className={`texto_contenedor_terminos ${jost}`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
                </p>
            </div>
        </div>
    )
}

export default ContenedorTerminos