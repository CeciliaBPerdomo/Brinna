import React from 'react'

//CSS
import "../Comprar/contenedor.css"

// Componentes
import HeaderComprar from './HeaderComprar'

//Fuente
import { Jost } from "next/font/google"

const jost = Jost({
  weight: "600",
  subsets: ['latin'],
})

const jost_p = Jost({
  weight: "500",
  subsets: ['latin'],
})


function ContendedorComprar() {
  return (
    <div>
      <HeaderComprar />

      <div className='div_comocomprar'>
        <h1 className={`comocomprar_h1 ${jost}`}>¿Como comprar?</h1>

        <p className={`comocomprar_p ${jost_p}`}>
          Nunc tempor interdum ex, sed cursus nunc egestas aliquet. Pellentesque interdum vulputate elementum. Donec erat diam, pharetra nec enim ut, bibendum pretium tellus. Vestibulum et turpis nibh. Cras vel ornare velit, ac pretium arcu. Cras justo augue, finibus id sollicitudin et, rutrum eget metus. Suspendisse ut mauris eu massa pulvinar sollicitudin vel sed enim. Pellentesque viverra arcu et dignissim vehicula. Integer nec diam a libero tincidunt varius sed vel odio. Donec rutrum dapibus massa, vel tempor nulla porta id. Suspendisse vulputate fermentum sem sollicitudin facilisis. Aliquam vehicula sapien nec ante auctor, quis mollis leo tincidunt.
        </p>
        <p className={`comocomprar_p ${jost_p}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
        </p>
      </div>
    </div>
  )
}

export default ContendedorComprar