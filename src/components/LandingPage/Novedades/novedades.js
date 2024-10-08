"use client"

import Image from "next/image"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductos } from '../../../lib/productosSlice';

//Slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// CSS
import "../Novedades/novedades.css"

// Nuevo con etiqueta
import NuevoEtiqueta from "@/components/Catalogos/nuevoEtiqueta";

//Favorito corazon
import FavoritosCorazon from "@/components/Catalogos/favoritosCorazon";

// Loading
import LoadingWash from "@/components/Catalogos/loading";

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
    const router = useRouter();
    const { items: productos, loading, error } = useSelector((state) => state.productos);

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
                </div>

                <div className="loading_novedades">
                    <LoadingWash />
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
                <div className="bg-red-100 border-t border-b border-red-500 text-red-700 px-4 py-3" role="alert">
                    <p className="font-bold">Error al actualizar los productos</p>
                    <p className="text-sm">Las novedades no se pueden actualizar, {error}. Pruebe de nuevo en algunos minutos</p>
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
                            key={index}
                            onClick={() => router.push(`/detalle-ropa/${novedades.id}`)}

                        >

                            {novedades.estado == "nuevo-con-etiqueta" ? <NuevoEtiqueta /> : null}
                            <FavoritosCorazon
                                index={index}
                                claseCSS={"corazon_favoritos"}
                            />
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