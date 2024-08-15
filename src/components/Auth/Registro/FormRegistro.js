"use client"
import React, { useState } from 'react'
import Image from 'next/image'

//CSS 
import "../Registro/formRegistro.css"

// Fuente
import { Jost } from "next/font/google"

const jost = Jost({
    weight: "600",
    subsets: ['latin'],
})

const ya_jost = Jost({
    weight: "500",
    subsets: ['latin'],
})



function FormRegistro() {
    // Para guardar la info
    const initialValues = {
        email: "",
        nombre: "",
        celular: "",
        usuario: "",
        clave: ""
    }

    const [values, setValues] = useState(initialValues)

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    }

    const handleSubmit = async (e) => {
        console.log(values)
    }

    return (
        <div>
            <div className="fixed inset-0 flex justify-center items-center">
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
                        <h2 className={`crea_tu_cuenta ${jost}`}>Creá tu cuenta.</h2>
                        <p className={`completa_tus_datos ${jost}`}>Completa tus datos para continuar.</p>

                        <form
                            className='formulario_registro_inputs'
                            onSubmit={handleSubmit}
                        >
                            {/* Email */}
                            <div className="flex items-center">
                                <input
                                    className="shadow appearance-none border focus:outline-none focus:shadow-outline registro_inputs"
                                    type="email"
                                    placeholder="Correo electrónico"
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Nombre completo */}
                            <div className="flex items-center">
                                <input
                                    className="shadow appearance-none border focus:outline-none focus:shadow-outline registro_inputs"
                                    type="text"
                                    placeholder="Nombre completo"
                                    name="nombre"
                                    value={values.nombre}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Celular */}
                            <div className="flex items-center">
                                <input
                                    className="shadow appearance-none border focus:outline-none focus:shadow-outline registro_inputs"
                                    type="text"
                                    placeholder="Celular"
                                    name="celular"
                                    value={values.celular}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Usuario */}
                            <div className="flex items-center">
                                <input
                                    className="shadow appearance-none border focus:outline-none focus:shadow-outline registro_inputs"
                                    type="text"
                                    placeholder="Usuario"
                                    name="usuario"
                                    value={values.usuario}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Contraseña */}
                            <div className="flex items-center">
                                <input
                                    className="shadow appearance-none border focus:outline-none focus:shadow-outline registro_inputs"
                                    type="password"
                                    placeholder="Contraseña"
                                    name="clave"
                                    value={values.clave}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Boton de guardar */}
                            <div className="flex items-center justify-center div_botonGuardar_crearcuenta">
                                <button
                                    className="text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline botonGuardar_crearcuenta"
                                    type="button"
                                    onClick={(e) => handleSubmit(e)}
                                >
                                    Crear cuenta
                                </button>
                            </div>
                        </form>

                        <div className='flex items-center justify-center'>
                            <p className={`ya_tengo_cuenta ${ya_jost}`}>Ya tengo una cuenta.</p>
                        </div>

                        <div className='flex items-center justify-center div_crear_cuenta_con_google'>
                            <button className='boton_crear_cuenta_con_google'>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    className={`icono_google_crearcuenta ${ya_jost}`}
                                    width="33" height="34" viewBox="0 0 33 34" fill="none">
                                    <path d="M16.8296 14.0001V20.3901H25.7095C25.3196 22.4451 24.1495 24.1852 22.3945 25.3552L27.7495 29.5102C30.8695 26.6303 32.6695 22.4003 32.6695 17.3753C32.6695 16.2053 32.5645 15.0802 32.3694 14.0003L16.8296 14.0001Z" fill="#4285F4" />
                                    <path d="M7.58291 20.1407L6.37516 21.0653L2.1001 24.3952C4.81509 29.7801 10.3797 33.5002 16.8296 33.5002C21.2845 33.5002 25.0194 32.0302 27.7495 29.5103L22.3945 25.3552C20.9245 26.3452 19.0495 26.9453 16.8296 26.9453C12.5396 26.9453 8.89475 24.0503 7.58965 20.1503L7.58291 20.1407Z" fill="#34A853" />
                                    <path d="M2.09995 9.60516C0.97501 11.8251 0.330078 14.3301 0.330078 17C0.330078 19.67 0.97501 22.175 2.09995 24.3949C2.09995 24.4098 7.59003 20.1349 7.59003 20.1349C7.26003 19.145 7.06498 18.095 7.06498 16.9999C7.06498 15.9047 7.26003 14.8548 7.59003 13.8648L2.09995 9.60516Z" fill="#FBBC05" />
                                    <path d="M16.8299 7.07017C19.26 7.07017 21.4199 7.91014 23.1449 9.53016L27.8699 4.80523C25.0049 2.13528 21.285 0.500183 16.8299 0.500183C10.38 0.500183 4.81509 4.20517 2.1001 9.60518L7.59001 13.8652C8.89493 9.96514 12.54 7.07017 16.8299 7.07017Z" fill="#EA4335" />
                                </svg>
                                Crea una cuenta con Google
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormRegistro