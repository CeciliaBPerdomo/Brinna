"use client"
import React, { useEffect, useState } from "react";

//Componentes
import Card from "./CardElla";

const RopaParaElla = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
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

        fetchItems();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error loading products: {error}</p>;
    }

    if (items.length === 0) {
        return <p>No hay productos disponibles.</p>;
    }

    return (
        <div className="grid grid-cols-2 sm:grid md:grid-cols-4">
            {items.map((card) => (
                <Card key={card.id} imageSrc={card.file} text={card.nombre} />
            ))}
        </div>
    );
};
    


export default RopaParaElla