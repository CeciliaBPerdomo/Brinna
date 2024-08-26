"use client"
import React, { useState } from 'react'

// CSS 
import "./formularioContacto.css"

// Envio de mails
import emailjs from '@emailjs/browser';

import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function FormularioContacto() {
    // Para guardar la info
    const initialValues = {
        email: "",
        nombre: "",
        asunto: "",
        mensaje: ""
    }

    const [values, setValues] = useState(initialValues)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    }

    // Manejo de errores
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

    // Envio de mail de registro / bienvenida
    const sendEmail = (e) => {
        e.preventDefault();

        const emailParams = {
            nombre_usuario: values.nombre,
            reply_to: values.email,
            asunto: `${values.asunto}, desde Brinna!!`,
            mensaje: values.mensaje
        };

        emailjs
            .send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_CONTACTO,
                emailParams,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
            )
            .then((response) => {
                toast.success("Correo enviado con éxito", {
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
            })
            .catch((error) => {
                tostada("Hubo un problema al enviar el correo. Inténtalo nuevamente.")
            });
    };

     // Chequea que se ingresen los datos
     const handleChequeo = () => {
        // Verificar si los campos están completos
        if (!values.nombre) {
            tostada("Por favor ingresa tu nombre completo.")
            return false
        }

        if (!values.email) {
            tostada("Por favor ingresa tu correo electrónico.")
            return false
        }

        if (!values.asunto) {
            tostada("Por favor ingresa el asunto.")
            return false
        }

        if (!values.mensaje) {
            tostada("Por favor ingresa tu mensaje.")
            return false
        }

        return true
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        let resp = handleChequeo()
        if (resp) {
            sendEmail(e)
            setValues(initialValues)
        }
    }

    return (
        <div className='formulario_contacto'>
            <form
                className='formulario_contacto_inputs'
                onSubmit={handleSubmit}
            >

                {/* Nombre completo */}
                <div className="flex items-center">
                    <input
                        className="shadow appearance-none border focus:outline-none focus:shadow-outline contacto_inputs"
                        type="text"
                        placeholder="Nombre"
                        name="nombre"
                        value={values.nombre}
                        onChange={handleChange}
                    />
                </div>

                {/* Email */}
                <div className="flex items-center">
                    <input
                        className="shadow appearance-none border focus:outline-none focus:shadow-outline contacto_inputs"
                        type="email"
                        placeholder="Correo electrónico"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                    />
                </div>

                {/* Asunto */}
                <div className="flex items-center">
                    <input
                        className="shadow appearance-none border focus:outline-none focus:shadow-outline contacto_inputs"
                        type="text"
                        placeholder="Asunto"
                        name="asunto"
                        value={values.asunto}
                        onChange={handleChange}
                    />
                </div>

                {/* Mensaje */}
                <div className="flex items-center">
                    <textarea
                        rows={4}
                        className="shadow appearance-none border focus:outline-none focus:shadow-outline contacto_inputs"
                        type="text"
                        placeholder="Mensaje"
                        name="mensaje"
                        value={values.mensaje}
                        onChange={handleChange}
                    />
                </div>

                {/* Boton de enviar */}
                <div className="div_botonenviar_formContacto">
                    <button
                        className="text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline 
                        botonenviar_formContacto"
                        type="submit"
                    >
                        Enviar
                    </button>
                </div>
            </form>
            <ToastContainer />
        </div>
    )
}

export default FormularioContacto