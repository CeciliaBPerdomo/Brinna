"use client"
import React, { useEffect, useState } from "react";

//Componentes
import Card from "./CardElla";

//CSS
import "./ropaElla.css"

// Fuente
import { Jost } from "next/font/google"

const jost = Jost({
    weight: "600",
    subsets: ['latin'],
})

const RopaParaElla = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/productos/mujer`, {
                cache: "no-store",
                headers: { 'Content-Type': 'application/json' }
            });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            setItems(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div class="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3" role="alert">
                <p class="font-bold">Información</p>
                <p class="text-sm">El catálogo esta siendo cargado!</p>
            </div>
        )
    }

    if (error) {
        return (
            <div class="bg-red-100 border-t border-b border-red-500 text-red-700 px-4 py-3" role="alert">
                <p class="font-bold">Error al actualizar los productos</p>
                <p class="text-sm">El catálogo no se puede actualizar, {error}. Pruebe de nuevo en algunos minutos</p>
            </div>
        )
    }

    if (items.length === 0) {
        return (
            <>
                <div class="bg-red-100 border-t border-b border-red-500 text-red-700 px-4 py-3" role="alert">
                    <p class="font-bold">No hay productos disponibles</p>
                    <p class="text-sm">Este catálogo no tiene productos disponibles aún</p>
                </div>
                <br />
            </>
        )
    }

    return (
        <div>
            <div>
                <h1 className={`ropaElla_h1 ${jost}`}>Ropa para ella</h1>
            </div>
            <div className="grid grid-cols-2 sm:grid md:grid-cols-4 ropaElla_cardElla">
                {items.map((card) => (
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



export default RopaParaElla