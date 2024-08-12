"use client"
import React, { useEffect } from "react";

//Componentes
import Card from "../ParaElla/CardElla";

//CSS
import "./ropaEl.css"

// Redux
import { useSelector, useDispatch } from "react-redux";
import { fetchProductos } from "../../../lib/productosSlice";

// Fuente
import { Jost } from "next/font/google"

const jost = Jost({
    weight: "600",
    subsets: ['latin'],
})

const RopaParaEl = () => {
    const dispatch = useDispatch();
    const { items: productos, loading, error } = useSelector((state) => state.productos);

    useEffect(() => {
        dispatch(fetchProductos());
    }, [dispatch]);

    // Filtrar productos para "hombres"
    const productosHombres = productos.filter((producto) => producto.categoria === "hombres");


    if (loading) {
        return (
            <>
                <h1 className={`mb-4  ropaEl_h1 ${jost}`}>Ropa para él</h1>
                <div class="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3" role="alert">
                    <p class="font-bold">Información</p>
                    <p class="text-sm">El catálogo esta siendo cargado!</p>
                </div>
            </>
        )
    }

    if (error) {
        return (
            <>
                <h1 className={`mb-4 ropaEl_h1 ${jost}`}>Ropa para él</h1>
                <div class="bg-red-100 border-t border-b border-red-500 text-red-700 px-4 py-3" role="alert">
                    <p class="font-bold">Error al actualizar los productos</p>
                    <p class="text-sm">El catálogo no se puede actualizar, {error}. Pruebe de nuevo en algunos minutos</p>
                </div>
            </>
        )
    }

    if (productosHombres.length === 0) {
        return (
            <>
                <h1 className={`mb-4 ropaEl_h1 ${jost}`}>Ropa para él</h1>
                <div class="bg-red-100 border-t border-b border-red-500 text-red-700 px-4 py-3" role="alert">
                    <p class="font-bold">No hay ropa para hombres disponible</p>
                    <p class="text-sm">El catálogo de ropa para él aún no tiene ropa para mostrar.</p>
                    <p class="text-sm">Esperamos que a la brevedad tengamos para ofrecerte.</p>
                </div>
                <br />
            </>
        )
    }


    return (
        <div>
            <h1 className={`ropaEl_h1 ${jost}`}>Ropa para él</h1>
            <div className="grid grid-cols-2 sm:grid md:grid-cols-4 ropaEl_cardEl">
                {productosHombres.map((card) => (
                    <Card key={card.id}
                        imageSrc={card.file}
                        text={card.nombre}
                        talle={card.talle}
                        precio={card.precio}
                        marca={card.marca} />
                ))}
            </div>
        </div>
    );
};



export default RopaParaEl