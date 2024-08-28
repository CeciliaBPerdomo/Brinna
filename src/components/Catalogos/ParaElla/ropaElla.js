"use client"
import React, { useEffect } from "react";

//Componentes
import Card from "./CardElla";
import LoadingWash from "../loading";

//CSS
import "./ropaElla.css"

// Redux
import { useSelector, useDispatch } from "react-redux";
import { fetchProductos } from "../../../lib/productosSlice"; 

// Fuente
import { Jost } from "next/font/google"

const jost = Jost({
    weight: "600",
    subsets: ['latin'],
})

const RopaParaElla = () => {
    const dispatch = useDispatch();
    const { items: productos, loading, error } = useSelector((state) => state.productos);

    useEffect(() => {
        dispatch(fetchProductos());
    }, [dispatch]);

    // Filtrar productos para "mujer"
    const productosMujer = productos.filter((producto) => producto.categoria === "mujer");

    // Mientras carga
    if (loading) {
        return (
            <>
                <h1 className={`mb-4 ropaElla_h1 ${jost}`}>Ropa para ella</h1>
                <LoadingWash />
            </>
        )
    }

    //Si da errores
    if (error) {
        return (
            <>
                <h1 className={`mb-4 ropaElla_h1 ${jost}`}>Ropa para ella</h1>
                <div className="bg-red-100 border-t border-b border-red-500 text-red-700 px-4 py-3" role="alert">
                    <p className="font-bold">Error al actualizar los productos</p>
                    <p className="text-sm">El catálogo no se puede actualizar, {error}. Pruebe de nuevo en algunos minutos</p>
                </div>
            </>
        )
    }

    // Si no hay items
    if (productosMujer.length === 0) {
        return (
            <>
                <h1 className={`mb-4  ropaElla_h1 ${jost}`}>Ropa para ella</h1>
                <div className="bg-red-100 border-t border-b border-red-500 text-red-700 px-4 py-3" role="alert">
                    <p className="font-bold">No hay productos disponibles en este catálogo</p>
                    <p className="text-sm">El catálogo de ropa para ella aún no tiene ropa para mostrar.</p>
                    <p className="text-sm">Esperamos que a la brevedad tengamos para ofrecerte.</p>
                </div>
                <br />
            </>
        )
    }

    return (
        <div>
            <h1 className={`ropaElla_h1 ${jost}`}>Ropa para ella</h1>
            <div className="grid grid-cols-1 sm:grid md:grid-cols-4 ropaElla_cardElla">

                {productosMujer.map((card, index) => (
                    <Card 
                        key={card.id}
                        index={index}
                        imageSrc={card.file}
                        text={card.nombre}
                        talle={card.talle}
                        precio={card.precio}
                        marca={card.marca} 
                        esNuevoConEtiqueta={card.estado === "nuevo-con-etiqueta"} 
                    />
                ))}
            </div>
        </div>
    );
};

export default RopaParaElla