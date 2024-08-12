"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductos } from '../../../lib/productosSlice';

//Slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// CSS
import "../Novedades/novedades.css"

//Fuentes
import { Jost } from "next/font/google"

const jost = Jost({
    weight: "500",
    subsets: ['latin'],
})

const sub_jost = Jost({
    weight: "400",
    subsets: ['latin'],
})

const precio_jost = Jost({
    weight: "600",
    subsets: ['latin'],
})


// Configuracion del slider
let settings = {
    className: "slider_novedades",
    arrows: true,
    centerMode: true,
    infinite: true,
    slidesToShow: 3, //1.5 para celulares, 3 para notebooks
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
        {
            breakpoint: 600, // Celulares
            settings: {
                slidesToShow: 1.5,
            },
        },
    ],
};

const Novedades = () => {
    const dispatch = useDispatch();
    const { items: productos, loading, error } = useSelector((state) => state.productos);
    const [corazon, setCorazon] = useState([])

    const cambiarCorazon = (index) => {
        //setCorazon(index)
        if (corazon.includes(index)) {
            setCorazon(corazon.filter((item) => item !== index));
        } else { // Si no está seleccionado, lo agregamos a la lista de corazones seleccionados
            setCorazon([...corazon, index]);
        }
    }

    useEffect(() => {
        dispatch(fetchProductos());
    }, [dispatch]);

    // Obtener los últimos 6 productos
    const productosRecientes = productos.slice(-6);


    // Mientras carga
    if (loading) {
        return (
            <div>
                <div className="encabezado_novedades">
                    <h1 className={`titulo_novedades ${jost}`}>
                        ¡Descubre las novedades!
                    </h1>
                    <p className={`sub_novedades ${jost}`}>
                        Échale un vistazo a los últimos ingresos.
                    </p>
                </div>
                <div class="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3 mt-6" role="alert">
                    <p class="font-bold">Información</p>
                    <p class="text-sm">Las últimas novedades están siendo cargadas!</p>
                </div>
            </div>
        )
    }

    // Si se produce algun error
    if (error) {
        return (
            <div>
                <div className="encabezado_novedades">
                    <h1 className={`titulo_novedades ${jost}`}>
                        ¡Descubre las novedades!
                    </h1>
                    <p className={`sub_novedades ${jost}`}>
                        Échale un vistazo a los últimos ingresos.
                    </p>
                </div>
                <div class="bg-red-100 border-t border-b border-red-500 text-red-700 px-4 py-3" role="alert">
                    <p class="font-bold">Error al actualizar los productos</p>
                    <p class="text-sm">Las novedades no se pueden actualizar, {error}. Pruebe de nuevo en algunos minutos</p>
                </div>
            </div>
        )
    }

    return (
        <div>
            <div className="encabezado_novedades">
                <h1 className={`titulo_novedades ${jost}`}>
                    ¡Descubre las novedades!
                </h1>
                <p className={`sub_novedades ${jost}`}>
                    Échale un vistazo a los últimos ingresos.
                </p>
            </div>

            <div className="tarjetas_novedades">
                <Slider {...settings}>
                    {productosRecientes.map((novedades, index) => (
                        <div className="max-w-sm rounded overflow-hidden shadow-md mt-4 card_individual_novedades"
                            key={index}>

                            {novedades.estado == "nuevo-con-etiqueta" ?
                                <button className="etiqueta_novedades">
                                    <p className={`nuevo_novedades ${precio_jost}`}>Nuevo ¡con etiqueta!</p>
                                </button>
                                : null
                            }

                            <button className="corazon_novedades"
                                onClick={() => cambiarCorazon(index)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    fill={corazon.includes(index) ? "currentColor" : "none"}
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-10 h-10">
                                    <path strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                </svg>
                            </button>

                            <Image
                                src={novedades.file}
                                alt={novedades.nombre}
                                width={420}
                                height={50}
                                className="imagen_novedades"
                            />
                            <div className="px-6 py-4">
                                <div className={`titulo_novedades_card mb-2 ${jost}`}>{novedades.nombre}</div>
                                <p className={`talle_novedades ${sub_jost}`}>
                                    Talle {novedades.talle}
                                </p>
                                <p className={`precio_novedades ${precio_jost}`}>
                                    $ {novedades.precio}
                                </p>
                            </div>
                        </div>

                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default Novedades