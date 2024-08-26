import React from 'react'

//CSS 
import "./contenedorPrincipalContacto.css"

// Fuente
import { Jost } from "next/font/google"

const jost = Jost({
    weight: "600",
    subsets: ['latin'],
})

const jost_p = Jost({
    weight: "500",
    subsets: ['latin'],
})


function ContenedorPrincipalContacto() {
  return (
    <div>
        <h1 className={`contacto_h1 ${jost}`}>Contáctanos</h1>
        <p className={`contacto_p ${jost_p}`}>Si tienes alguna consulta no dudes en ponerte en contacto con nosotros vía teléfono al 099 000 000
        o por correo electrónico brinnaropadesegundamano@gmail.com</p>
        <h1 className={`contacto_h1 ${jost}`}>Envíanos un mensaje</h1>
    </div>
  )
}

export default ContenedorPrincipalContacto