"use client"
import React, { useState } from "react"

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

    } catch (error) {
        console.log(error)
    }
}

const uploadFile = async (file) => {
    const storageRef = ref(storage, `productos/${file.name}`);
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);
    return url;
};

export default function AgregarProductos() {

    const [values, setValues] = useState({
        id: "",
        nombre: "",
        marca: "",
        descripcion: "",
        talle: "",
        color: "",
        estado: "usado",
        categoria: "",
        subcategoria: "",
        precio: ""
    })

    // Para guardar la imagen
    const [file, setFile] = useState(null)

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setValues({
            ...values,
            [name]: files ? files[0] : value
        });
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        const timestamp = Date.now().toString(); // Generate a unique ID using the current timestamp
        await agregarProductos({ ...values, id: timestamp, file });
    }

    return (
        <>
            <h1 className={`realiza_una_publicacion ${jost}`}>
                Realiza una nueva publicación
            </h1>

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

        </>
    )
}

