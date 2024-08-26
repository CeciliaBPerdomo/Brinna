import React from 'react'

// Componentes
import ContenedorPrincipalContacto from '@/components/Contacto/contenedorPrincipalContacto'
import HeaderContacto from '@/components/Contacto/HeaderContacto'

function Contacto() {
  return (
    <div>
      <HeaderContacto />
      <ContenedorPrincipalContacto />
    </div>
  )
}

export default Contacto