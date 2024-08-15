import React from 'react'
import Image from 'next/image'

//CSS 
import "../Registro/formRegistro.css"



function FormRegistro() {
    return (
        <div>
            <div className="fixed inset-0 flex justify-center items-center bg-opacity-50">
                <div className='div_formulario_registro_principal flex'>
                    <div className="w-1/2 div_formulario_registro_imagen">
                        <Image
                            src={"/images/registro.png"}
                            layout="fill"
                            objectFit="cover"
                            alt='Registro'
                            className='formulario_registro_imagen'
                        />
                    </div>
                    <div className="w-1/2 p-6 div_formulario_registro">
                        <h2 className={`crea_tu_cuenta`}>Creá tu cuenta.</h2>
                        <p className={`completa_tus_datos`}>Completa tus datos para continuar.</p>
                        <form onSubmit={""}>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormRegistro