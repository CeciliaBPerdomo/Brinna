"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation';

//Redux
import { useDispatch } from 'react-redux';
import { agregarUsuario, loginUsuario } from '../../../lib/usuariosSlice';

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
    const router = useRouter();
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(false);

    // Para guardar la info
    const initialValues = {
        email: "",
        nombre: "",
        celular: "",
        usuario: "",
        password: ""
    }

    const [values, setValues] = useState(initialValues)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true);  // Activar el loader
        try {
            // Usuario agregado exitosamente
            await dispatch(agregarUsuario(values)).unwrap();
            console.info("Usuario creado exitosamente")

            // Disparar la acción de inicio de sesión
            await dispatch(loginUsuario(values)).unwrap();
            console.info("Usuario logueado exitosamente");

            setValues(initialValues)
            setLoading(false);  
            router.push('/')
        } catch (error) {
            console.error("Error al agregar usuario:", error);
            //alert(error); // Mostrar el error al usuario
        }
    }

    return (
        <div>
            <div className="fixed inset-0 flex justify-center items-center">
                <div className='div_formulario_registro_principal flex'>
                    <div className="w-1/2 div_formulario_registro_imagen">
                        <Image
                            src={"/images/registro.png"}
                            fill
                            alt='Registro'
                            className='formulario_registro_imagen'
                            style={{ objectFit: 'cover' }}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            priority
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
                                    name="password"
                                    value={values.password}
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
                                <Image
                                    src={"/images/icono_google.png"}
                                    width={29}
                                    height={33}
                                    alt="Google"
                                    className='icono_google_crearcuenta'
                                />
                                <span className='texto_crea_cuenta_google'>
                                    Crea una cuenta con Google
                                </span>
                            </button>
                        </div>

                    </div>
                </div>
            </div>

            {loading && (
            <div className="loader-overlay">
                <div className="loader"></div>
            </div>
        )}

        </div>
    )
}

export default FormRegistro