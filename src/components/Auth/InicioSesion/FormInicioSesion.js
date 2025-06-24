"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation';

//Redux
import { useDispatch } from 'react-redux';
import { loginUsuario, loginWithGoogle } from '../../../lib/usuariosSlice';

// Alerts
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// CSS
import "../InicioSesion/formInicioSesion.css"

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

const olvidaste_jost = Jost({
    weight: "100",
    subsets: ['latin'],
})


function FormInicioSesion({ onClose }) {
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

    // Iniciar sesion
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

    // Iniciar sesion con google
    const handleGoogleLogin = async () => {
        setLoading(true);  // Activar el loader
        try {
            const userLoggedIn = await dispatch(loginWithGoogle()).unwrap();
            setLoading(false);
            router.push('/');  // Redirigir a la página principal después de iniciar sesión
        } catch (error) {
            setLoading(false);
            tostada(error);
        }
    }

    return (
        <>
            <div className="fixed inset-0 flex justify-center items-center z-50">
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

                    <div className="w-1/2 p-6 div_iniciosesion_registro relative">

                        {/* Botón de cerrar */}
                        <button
                            className="boton_cerrar_form"
                            aria-label="Cerrar formulario"
                            onClick={onClose}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
                                width="18"
                                height="18"
                                fill="#900"
                                style={{ display: "block" }}
                            >
                                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                            </svg>
                        </button>

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

                            {/* Olvidaste tu contraseña */}
                            <p className={`olvidaste_contra ${olvidaste_jost}`}>¿Olvidaste tu contraseña?</p>

                            {/* Boton de iniciar sesion */}
                            <div className='flex justify-center'>
                                <div className="flex items-center justify-center div_botonGuardar_ingresar">
                                    <button
                                        className="text-white font-bold py-2 px-4 rounded focus:outline-none 
                                    focus:shadow-outline botonGuardar_ingresar"
                                        type="submit"
                                    >
                                        Ingresar
                                    </button>
                                </div>
                            </div>
                        </form>

                        <div className='flex items-center justify-center'>
                            <button
                                type="button"
                                onClick={() => {
                                    onClose();
                                }}
                                className={`no_tengo_cuenta ${ya_jost}`}
                            >
                                Aún no tengo cuenta.
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