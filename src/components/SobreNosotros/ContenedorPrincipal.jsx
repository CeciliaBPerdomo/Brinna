import React from "react";

// CSS
import "../SobreNosotros/contenedorNosotros.css"

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


const ContenedorNosotros = () => {
    return (
        <div>

            <div className="contenedor_principal_nosotros">
                <p className={`nosotros_contenedor ${subjost}`}>Sobre Nosotros</p>
            </div>

            <div className="contenedor_texto_nosotros">
                <p className={`texto_contenedor_nosotros ${jost}`}>
                    Para nosotros en un emocionante esfuerzo por reinventar la moda sostenible y ofrecer soluciones económicas a los consumidores,
                    estamos orgullosos de anunciar <b>Brinna</b>, la plataforma dedicada exclusivamente a la venta de ropa usada.
                    Tenemos la misión de transformar la percepción y el acceso a la ropa de segunda mano.
                </p>

                <p className={`texto_contenedor_nosotros ${jost}`}>
                    Este equipo tiene como objetivo principal promover la moda circular y reducir el impacto ambiental de
                    la industria textil. Al dar una segunda oportunidad a las prendas, no solo estamos ayudamos a disminuir los
                    residuos textiles, sino que también proporcionamos a nuestros clientes una opción asequible y
                    estilosa para renovar su guardarropa.
                </p>

                <p className={`texto_contenedor_nosotros ${jost}`}>
                    Nuestro equipo esta conformado por:
                </p>
                <p className={`texto_contenedor_nosotros ${jost}`} style={{paddingLeft: "15px"}}>
                    - Equipo de diseño UX/UI:
                    <p className={`${jost}`} style={{paddingLeft: "20px"}}><b>Noelia Perdomo</b></p>
                </p>

                <p className={`texto_contenedor_nosotros ${jost}`} style={{paddingLeft: "15px"}}>
                    - Equipo de desarrollo web:
                    <p className={`${jost}`} style={{paddingLeft: "20px"}}><b>Daniel Martinez</b></p>
                    <p className={`${jost}`} style={{paddingLeft: "20px"}}><b>Cecilia Perdomo</b></p>
                </p>
            
        </div>
            <hr />
        </div>

    )
}

export default ContenedorNosotros