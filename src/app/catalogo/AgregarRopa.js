"use client"
import React, { useState, useEffect } from "react"

import { doc, setDoc } from "firebase/firestore"
import { db, storage } from "../firebase/config"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"

// CSS 
import "../catalogo/agregarRopa.css"

// Fuente
import { Jost } from "next/font/google"

const jost = Jost({
    weight: "600",
    subsets: ['latin'],
})

const jost_texto = Jost({
    weight: "500",
    subsets: ['latin'],
})

const agregarProductos = async (values) => {
    try {
        let fileURL = "";
        // Guarda la imagen en el storage
        if (values.file) {
            fileURL = await uploadFile(values.file);
        }

        const docRef = doc(db, "productos", values.id);
        await setDoc(docRef, { ...values, file: fileURL });
        console.info("Producto guardado");
        return "Tú producto ha sido guardado exitosamente"; // Retorna el mensaje de éxito
    } catch (error) {
        console.log(error);
        throw new Error("Algo ocurrio y hubo un error al guardar tú producto"); // Lanza un error en caso de falla
    }
}

const uploadFile = async (file) => {
    const storageRef = ref(storage, `productos/${file.name}`);
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);
    return url;
};

export default function AgregarProductos() {
    // Para guardar la info
    const initialValues = {
        id: "",
        nombre: "",
        marca: "",
        descripcion: "",
        talle: "",
        color: "",
        estado: "usado",
        categoria: "mujer",
        subcategoria: "buzo",
        precio: ""
    }
    const [values, setValues] = useState(initialValues)

    // Para guardar la imagen
    const [file, setFile] = useState(null)

    // Para manejar el estado de carga y los mensajes
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setValues({
            ...values,
            [name]: files ? files[0] : value
        });
    }


    // Guarda la info del nuevo producto
    const handleSubmit = async (e) => {
        e.preventDefault()
        const errorMessage = validateForm();
        if (errorMessage) {
            setMessage(errorMessage);
            window.scrollTo(0, 1200); // Desplaza al inicio de la página en caso de error
            return;
        }

        setIsLoading(true);
        setMessage("");
        const timestamp = Date.now().toString(); // Generate a unique ID using the current timestamp

        try {
            //console.log(values)
            const successMessage = await agregarProductos({ ...values, id: timestamp, file });
            //const successMessage = "exitosamente"
            setIsLoading(false);
            setMessage(successMessage);

            // Restablece los valores del formulario después de enviar
            setValues(initialValues);
            setFile(null);
            window.scrollTo(0, 1200); // Desplaza al inicio del formulario
        } catch (error) {
            console.error("Error en firebase: ", error)
            setIsLoading(false);
            setMessage(error.message);
            window.scrollTo(0, 1200); // Desplaza al inicio del formulario
        }
    }

    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => {
                setMessage("");
            }, 12000); // 12 segundos

            return () => clearTimeout(timer); // Limpia el temporizador si el componente se desmonta
        }
    }, [message]);


    // Controla que los campos hayan sido completados
    const validateForm = () => {
        for (let key in values) {
            if (values[key] === "" && key !== "id" && key !== "file") {
                return `El campo ${key} es obligatorio.`;
            }
        }
        if (!file) {
            return "La foto es obligatoria.";
        }
        return null;
    }

    return (
        <>
            <h1 className={`realiza_una_publicacion ${jost}`}>
                Realiza una nueva publicación
            </h1>

            {/* Mensaje de espera mientras guarda */}
            {isLoading &&
                <div class="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3" role="alert">
                    <p class="font-bold">Información</p>
                    <p class="text-sm">Tu producto está siendo guardado!</p>
                </div>
            }

            {/* Avisa si guarda correctamente o surgio algun problema */}
            {message && (
                <div className={`alert px-4 py-3 mb-4 rounded relative ${message.includes("exitosamente") ? "bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 shadow-md" : "bg-red-100 border border-red-400 text-red-700"}`}>
                    <div className="flex">
                        <div className="py-1">
                            <svg className="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                            </svg>
                        </div>
                        <div>
                            <p className="font-bold">{message.includes("exitosamente") ? "¡Producto guardado!" : "Error tu producto no pudo ser guardado"}</p>
                            <p className="text-sm">{message}</p>
                        </div>
                    </div>
                </div>
            )}

            <br />

            <form className="max-w-lg mx-auto">
                {/* Nombre */}
                <div className="mb-4 flex items-center">
                    <label
                        className={`block text-gray-700 text-sm font-bold mb-2 w-1/3 texto_guardarRopa ${jost_texto}`}
                        htmlFor="productName"
                    >
                        Nombre
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Buzo"
                        name="nombre"
                        value={values.nombre}
                        onChange={handleChange}
                    />
                </div>

                {/* Marca */}
                <div className="mb-4 flex items-center">
                    <label
                        className={`block text-gray-700 text-sm font-bold mb-2 w-1/3 texto_guardarRopa ${jost_texto}`}
                        htmlFor="marcaproducto"
                    >
                        Marca
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="marca"
                        type="text"
                        placeholder="Piece of cake"
                        name="marca"
                        value={values.marca}
                        onChange={handleChange}
                    />
                </div>

                {/* Descripcion del producto */}
                <div className="mb-4 flex items-center">
                    <label
                        className={`block text-gray-700 text-sm font-bold mb-2 w-1/3 texto_guardarRopa ${jost_texto}`}
                        htmlFor="productDescription"
                    >
                        Descripción
                    </label>
                    <textarea
                        className="shadow appearance-none border rounded w-2/3 py-2 px-3 
                        text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="productDescription"
                        placeholder="Es un buzo muy cómodo y práctico"
                        name="descripcion"
                        onChange={handleChange}
                        value={values.descripcion}
                    ></textarea>
                </div>

                {/* Talle */}
                <div className="mb-4 flex items-center">
                    <label
                        className={`block text-gray-700 text-sm font-bold mb-2 w-1/3 texto_guardarRopa ${jost_texto}`}
                        htmlFor="productTalle"
                    >
                        Talle
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="productTalle"
                        type="text"
                        placeholder="S"
                        name="talle"
                        value={values.talle}
                        onChange={handleChange}
                    />
                </div>

                {/* Color */}
                <div className="mb-4 flex items-center">
                    <label
                        className={`block text-gray-700 text-sm font-bold mb-2 w-1/3 texto_guardarRopa ${jost_texto}`}
                        htmlFor="color"
                    >
                        Color
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="color"
                        type="text"
                        placeholder="Gris"
                        name="color"
                        value={values.color}
                        onChange={handleChange}
                    />
                </div>

                {/* Estado */}
                <div className="mb-4 flex items-center">
                    <label
                        className={`block text-gray-700 text-sm font-bold mb-2 w-1/3 texto_guardarRopa ${jost_texto}`}
                        htmlFor="productCondition"
                    >
                        Estado
                    </label>
                    <select
                        className="shadow appearance-none border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="productCondition"
                        name="estado"
                        value={values.estado}
                        onChange={handleChange}
                    >
                        <option value="usado">Usado</option>
                        <option value="usado-como-nuevo">Usado pero como nuevo</option>
                        <option value="nuevo-con-etiqueta">Nuevo con Etiqueta</option>
                    </select>
                </div>

                {/* Categoria */}
                <div className="mb-4 flex items-center">
                    <label
                        className={`block text-gray-700 text-sm font-bold mb-2 w-1/3 texto_guardarRopa ${jost_texto}`}
                        htmlFor="categoria"
                    >
                        Categoria
                    </label>
                    <select
                        className="shadow appearance-none border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="categoria"
                        name="categoria"
                        value={values.categoria}
                        onChange={handleChange}
                    >
                        <option value="mujer">Mujer</option>
                        <option value="hombres">Hombres</option>
                        <option value="chicos">Chicos</option>
                    </select>
                </div>

                {/* Sub-Categoria */}
                <div className="mb-4 flex items-center">
                    <label
                        className={`block text-gray-700 text-sm font-bold mb-2 w-1/3 texto_guardarRopa ${jost_texto}`}
                        htmlFor="subcategoria"
                    >
                        Sub categoria
                    </label>
                    <select
                        className="shadow appearance-none border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="subcategoria"
                        name="subcategoria"
                        onChange={handleChange}
                    >
                        <option value="buzo">Buzo</option>
                        <option value="remera">Remera</option>
                        <option value="musculosa">Musculosa</option>
                        <option value="bluza">Bluza</option>
                        <option value="campera">Campera</option>
                        <option value="pantalones">Pantalones</option>
                        <option value="pantalones">Calzado</option>
                    </select>
                </div>

                {/* Foto */}
                <div className="mb-4 flex items-center">
                    <label
                        className={`block text-gray-700 text-sm font-bold mb-2 w-1/3 texto_guardarRopa ${jost_texto}`}
                        htmlFor="foto"
                    >
                        Fotos
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="Foto"
                        type="file"
                        placeholder="Foto"
                        name="file"
                        // value={file}
                        onChange={(e) => { setFile(e.target.files[0]) }}
                    />
                </div>

                {/* Precio */}
                <div className="mb-4 flex items-center">
                    <label
                        className={`block text-gray-700 text-sm font-bold mb-2 w-1/3 texto_guardarRopa ${jost_texto}`}
                        htmlFor="productPrice"
                    >
                        Precio
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="productPrice"
                        type="number"
                        placeholder="350"
                        name="precio"
                        value={values.precio}
                        onChange={handleChange}
                    />
                </div>

                {/* Boton de guardar */}
                <div className="flex items-center justify-center">
                    <button
                        className="text-white font-bold py-2 px-4 rounded 
                        focus:outline-none focus:shadow-outline botonGuardar_agregarRopa"
                        type="button"
                        onClick={(e) => handleSubmit(e)}
                    >
                        Publicar
                    </button>
                </div>
            </form>
            <br />
        </>
    )
}

