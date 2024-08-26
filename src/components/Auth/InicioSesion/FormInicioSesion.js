"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation';

//Redux
import { useDispatch } from 'react-redux';
import { loginUsuario } from '../../../lib/usuariosSlice';

// Alerts
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// CSS
import "../InicioSesion/formInicioSesion.css"

// Fuente
import { Jost } from "next/font/google"
import Link from 'next/link';

const jost = Jost({
    weight: "600",
    subsets: ['latin'],
})

const ya_jost = Jost({
    weight: "500",
    subsets: ['latin'],
})

const olvidaste_jost = Jost({
    weight: "100",
    subsets: ['latin'],
})


function FormInicioSesion() {
    const router = useRouter();
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(false);

    // Para guardar la info
    const initialValues = {
        email: "",
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

    // Chequea que se ingresen los datos
    const handleChequeo = () => {
        // Verificar si los campos están completos
        if (!values.email) {
            setLoading(false);
            tostada("Por favor ingresa tu correo electrónico.")
            return false
        }

        if (!values.password) {
            setLoading(false);
            tostada("Por favor ingresa tu contraseña.")
            return false
        }
        return true
    }

    // Mensaje de error
    function tostada(mensaje) {
        toast.error(mensaje, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true);  // Activar el loader
        let resp = handleChequeo()

        try {
            if (resp) {
                // Disparar la acción de inicio de sesión
                const userLoggedIn = await dispatch(loginUsuario(values)).unwrap();

                setValues(initialValues)
                setLoading(false);
                router.push('/')
            }
        } catch (error) {
            setLoading(false);
            tostada(error)
        }
    }

    return (
        <>
            <div className="fixed inset-0 flex justify-center items-center">
                <div className='div_formulario_iniciosesion_principal flex'>
                    {/* Imagen logueo */}
                    <div className="w-1/2 div_formulario_iniciosesion_imagen">
                        <Image
                            src={"/images/registro.png"}
                            fill
                            alt='Registro'
                            className='formulario_iniciosesion_imagen'
                            style={{ objectFit: 'cover' }}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            priority
                        />
                    </div>

                    <div className="w-1/2 p-6 div_iniciosesion_registro">
                        <h2 className={`iniciar_sesion ${jost}`}>Iniciar sesión</h2>
                        <p className={`completa_tus_datos_sesion ${jost}`}>Completa tus datos para ingresar a tu cuenta.</p>

                        <form
                            className='formulario_iniciarsesion_inputs'
                            onSubmit={handleSubmit}
                        >
                            {/* Email */}
                            <div className="flex items-center">
                                <input
                                    className="shadow appearance-none border focus:outline-none focus:shadow-outline 
                                    iniciosesion_inputs"
                                    type="email"
                                    placeholder="Correo electrónico"
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Contraseña */}
                            <div className="flex items-center">
                                <input
                                    className="shadow appearance-none border focus:outline-none focus:shadow-outline 
                                    iniciosesion_inputs"
                                    type="password"
                                    placeholder="Contraseña"
                                    name="password"
                                    value={values.password}
                                    onChange={handleChange}
                                />
                            </div>

                            <p className={`olvidaste_contra ${olvidaste_jost}`}>¿Olvidaste tu contraseña?</p>

                            {/* Boton de iniciar sesion */}
                            <div className='flex justify-center'>
                                <div className="flex items-center justify-center div_botonGuardar_ingresar">
                                    <button
                                        className="text-white font-bold py-2 px-4 rounded focus:outline-none 
                                    focus:shadow-outline botonGuardar_ingresar"
                                        type="submit"
                                        // onClick={(e) => handleSubmit(e)}
                                    >
                                        Ingresar
                                    </button>
                                </div>
                            </div>
                        </form>

                        <div className='flex items-center justify-center'>
                            <Link href="/admin/Registro">
                                <p className={`no_tengo_cuenta ${ya_jost}`}>Aún no tengo cuenta.</p>
                            </Link>
                        </div>

                        <div className='flex items-center justify-center'>
                            <p className={`ingresar_o ${jost}`}> ______________ o ______________ </p>
                        </div>

                        <div className='flex items-center justify-center div_iniciar_con_google'>
                            <button className='boton_iniciarsesion_con_google'>
                                <Image
                                    src={"/images/icono_google.png"}
                                    width={29}
                                    height={33}
                                    alt="Google"
                                    className='icono_google_iniciarsesion'
                                />
                                <span className='texto_iniciarsesion_google'>
                                    Iniciar sesión con Google
                                </span>
                            </button>
                        </div>

                    </div>
                </div>

                {loading && (
                    <div className="loader-overlay">
                        <div className="loader"></div>
                    </div>
                )}

                <ToastContainer />
            </div>
        </>
    )
}

export default FormInicioSesion