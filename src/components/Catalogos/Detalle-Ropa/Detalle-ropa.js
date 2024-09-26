"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

import { useRouter } from 'next/router';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductos, selectProductoById } from "../../../lib/productosSlice"

// CSS
import "../Detalle-Ropa/detalleRopa.css"


// Fuente
import { Jost } from "next/font/google"

const jost = Jost({
    weight: "600",
    subsets: ['latin'],
})

const b_jost = Jost({
    weight: "500",
    subsets: ['latin'],
})

const p_jost = Jost({
    weight: "400",
    subsets: ['latin'],
})


function DetalleRopa() {
    // const router = useRouter();
    // const { isReady, query } = router; // Obtenemos isReady para saber cuándo el router está montado
    // const [id, setId] = useState(null);

    const dispatch = useDispatch();

    // Obtener los productos desde el estado de Redux
    const { items: productos, loading } = useSelector((state) => state.productos);

    // Cuando el router esté listo, guarda el id de la query
    // useEffect(() => {
    //     if (isReady && query.id) {
    //         setId(query.id); // Guardamos el ID del producto una vez que el router esté listo
    //     }
    // }, [isReady, query.id]);


    // Cargar los productos si no están cargados
    useEffect(() => {
        if (productos.length === 0) {
            dispatch(fetchProductos());
        }
    }, [dispatch, productos.length]);

    let id = "1718804160009"

    // Usar el selector para obtener el producto por su ID
    const producto = useSelector((state) => selectProductoById(state, id));
    console.log(producto)

    // Si el producto no está disponible o si aún se están cargando los productos
    if (loading) {
        return (
            <div>
                Cargando...
            </div>
        );
    }

    if (!producto) {
        return (
            <div>
                Producto no encontrado
            </div>
        );
    }



    return (
        <div className='principal-ropa-detalle mt-4 mb-4'>

            {/* Imagen */}
            <div
                className="flex flex-row items-center bg-white p-2 
                card-ropa-detalle"
            >
                <div>
                    <Image
                        className="object-cover w-full p-2"
                        src={producto.file}
                        alt="Producto sin imagen"
                        width={300}
                        height={600}
                    />
                </div>

                {/* Info de la ropa */}
                <div className='ml-8'>
                    <div className="flex flex-col detalle-ropa-info">
                        <h5 className={`mb-2 titulo-detalle-ropa ${jost}`}>
                            {producto.nombre}
                        </h5>
                        <p className={`${p_jost} info-ropa`}>
                            <b>Marca</b>: {producto.marca}
                        </p>
                        <p className={`${p_jost} info-ropa`}>
                            <b>Color</b>: {producto.color}
                        </p>
                        <p className={`${p_jost} info-ropa`}>
                            <b>Talle</b>: {producto.talle}
                        </p>
                        <p className={`${p_jost} info-ropa`}>
                            <b>Estado</b>: {producto.estado}
                        </p>
                        <br />
                        <p className={`${p_jost} info-ropa`}>
                            {producto.descripcion}
                        </p>
                        <br />
                        <p className={`${p_jost} info-ropa`}>
                            <b>Precio</b>: ${producto.precio}
                        </p>
                    </div>

                    <div className='flex mt-8'>

                        <button className={`mr-4 agregar_favoritos_detalle_ropa ${b_jost}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="30" viewBox="0 0 35 30" fill="none">
                                <path d="M33.0555 10.119C33.0555 12.5247 32.1318 14.8353 30.4823 16.5445C26.6853 20.4802 23.0025 24.5843 19.0637 28.3773C18.1608 29.2341 16.7286 29.2029 15.8647 28.3073L4.51685 16.5445C1.08683 12.989 1.08683 7.24903 4.51685 3.69355C7.98057 0.103144 13.6234 0.103144 17.087 3.69355L17.4996 4.1211L17.9118 3.6938C19.5725 1.97145 21.8343 1 24.197 1C26.5598 1 28.8214 1.97135 30.4823 3.69355C32.1319 5.40292 33.0555 7.71342 33.0555 10.119Z" stroke="#CA4E3C" stroke-width="2" stroke-linejoin="round" />
                            </svg>
                            Agregar a favoritos
                        </button>

                        <button className={`agregar_favoritos_detalle_ropa ${b_jost}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
                                <path d="M26.7002 19.2L8.5002 19.2H6.02327C3.52524 19.2 2.2002 20.2936 2.2002 22C2.2002 23.7063 3.52524 24.8 6.02327 24.8L26.0002 24.8" stroke="#CA4E3C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M5.7 3.8L29.5 3.8L26.7 19.2L8.5 19.2L5.7 3.8ZM5.7 3.8C5.46666 2.86666 4.3 1 1.5 1" stroke="#CA4E3C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12.0004 29C13.1602 29 14.1004 28.0598 14.1004 26.9C14.1004 25.7403 13.1602 24.8 12.0004 24.8C10.8406 24.8 9.90039 25.7403 9.90039 26.9C9.90039 28.0598 10.8406 29 12.0004 29Z" stroke="#CA4E3C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M26.0004 29C27.1602 29 28.1004 28.0598 28.1004 26.9C28.1004 25.7403 27.1602 24.8 26.0004 24.8C24.8406 24.8 23.9004 25.7403 23.9004 26.9C23.9004 28.0598 24.8406 29 26.0004 29Z" stroke="#CA4E3C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            Agregar al Carrito
                        </button>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default DetalleRopa