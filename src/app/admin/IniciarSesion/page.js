import React from 'react'

//Componentes
import FormInicioSesion from '@/components/Auth/InicioSesion/FormInicioSesion'
import HeaderHome from '@/components/LandingPage/HeaderHome'

function IniciarSesion() {
  return (
    <div>
        <HeaderHome />
        <FormInicioSesion />
    </div>
  )
}

export default IniciarSesion