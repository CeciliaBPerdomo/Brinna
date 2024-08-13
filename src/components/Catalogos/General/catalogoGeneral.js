"use client"
import React, { useEffect } from "react";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { fetchProductos } from "../../../lib/productosSlice";

//Componentes
import Card from "../ParaElla/CardElla";

//CSS
import "./catalogoGeneral.css"

// Fuente
import { Jost } from "next/font/google"

const jost = Jost({
    weight: "600",
    subsets: ['latin'],
})

const General = () => {
    const dispatch = useDispatch();
    const { items, loading, error } = useSelector((state) => state.productos);

    useEffect(() => {
        dispatch(fetchProductos());
    }, [dispatch]);


    // Mientras carga
    if (loading) {
        return (
            <>
            <h1 className={`ropa_para_Todos_h1 ${jost}`}>Todas las prendas</h1>
            <div class="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3" role="alert">
                <p class="font-bold">Información</p>
                <p class="text-sm">El catálogo esta siendo cargado!</p>
            </div>
            </>
        )
    }

    // Si sucede algun error
    if (error) {
        return (
            <>
            <h1 className={`ropa_para_Todos_h1 ${jost}`}>Todas las prendas</h1>
            <div class="bg-red-100 border-t border-b border-red-500 text-red-700 px-4 py-3" role="alert">
                <p class="font-bold">Error al actualizar los productos</p>
                <p class="text-sm">El catálogo no se puede actualizar, {error}. Pruebe de nuevo en algunos minutos</p>
            </div>
            </>
        )
    }

    // Si no hay articulos
    if (items.length === 0) {
        return (
            <>
            <h1 className={`ropa_para_Todos_h1 ${jost}`}>Todas las prendas</h1>
                <div class="bg-red-100 border-t border-b border-red-500 text-red-700 px-4 py-3" role="alert">
                <p class="font-bold">No hay ropadisponible</p>
                    <p class="text-sm">El catálogo aún no tiene ropa disponible.</p>
                    <p class="text-sm">Esperamos que a la brevedad tengamos disponible.</p>
                </div>
                <br />
            </>
        )
    }


    return (
        <div>
            <h1 className={`ropa_para_Todos_h1 ${jost}`}>Todas las prendas</h1>
            <div className="grid grid-cols-1 sm:grid md:grid-cols-4 ropaParaTodos_cardtodos">
                {items.map((card) => (
                    <Card 
                        key={card.id}
                        imageSrc={card.file}
                        text={card.nombre}
                        talle={card.talle}
                        precio={card.precio}
                        marca={card.marca} 
                    />
                ))}
            </div>
        </div>
    );
};



export default General