"use client"
import React, { useEffect } from "react";

//Componentes
import Card from "../ParaElla/CardElla";

//CSS
import "./ropaChicos.css"

// Redux
import { useSelector, useDispatch } from "react-redux";
import { fetchProductos } from "../../../lib/productosSlice";


// Fuente
import { Jost } from "next/font/google"
import LoadingWash from "../loading";

const jost = Jost({
    weight: "600",
    subsets: ['latin'],
})

const RopaParaChicos = () => {
    const dispatch = useDispatch();
    const { items: productos, loading, error } = useSelector((state) => state.productos);

    useEffect(() => {
        dispatch(fetchProductos());
    }, [dispatch]);

    // Filtrar productos para "chicos"
    const productosChicos = productos.filter((producto) => producto.categoria === "chicos");


    if (loading) {
        return (
            <>
                <LoadingWash />
            </>
        )
    }

    if (error) {
        return (
            <>
                <div className="bg-red-100 border-t border-b border-red-500 text-red-700 px-4 py-3" role="alert">
                    <p className="font-bold">Error al actualizar los productos</p>
                    <p className="text-sm">El catálogo no se puede actualizar, {error}. Pruebe de nuevo en algunos minutos</p>
                </div>
            </>
        )
    }

    if (productosChicos.length === 0) {
        return (
            <>
                <div className="bg-red-100 border-t border-b border-red-500 text-red-700 px-4 py-3" role="alert">
                    <p className="font-bold">No hay ropa para chicos disponibles</p>
                    <p className="text-sm">El catálogo de chicos aún no tiene ropa disponible.</p>
                    <p className="text-sm">Esperamos que a la brevedad tengamos disponible.</p>
                </div>
                <br />
            </>
        )
    }


    return (
        <div>
            <div className="grid grid-cols-1 sm:grid md:grid-cols-4 ropaChicos_cardChicos">
                {productosChicos.map((card) => (
                    <Card key={card.id}
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



export default RopaParaChicos