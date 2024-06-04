"use client"
import "../Novedades/novedades.css"
import { Jost } from "next/font/google"
import Image from "next/image"
import { useState } from "react"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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


const nov = [
    {
        "imagen": "https://firebasestorage.googleapis.com/v0/b/brinna-45fe0.appspot.com/o/remera1.jpg?alt=media&token=9787afb9-8ca8-4991-ad10-00625c137bb6",
        "titulo": "Remera Indian",
        "talle": "L",
        "precio": "350",
        "etiqueta": "si"
    },
    {
        "imagen": "https://firebasestorage.googleapis.com/v0/b/brinna-45fe0.appspot.com/o/remera3.jpg?alt=media&token=d0367ff2-5325-4efe-aead-b4e1b7893a45",
        "titulo": "Remera Rosada",
        "talle": "M",
        "precio": "300",
        "etiqueta": "si"
    },
    {
        "imagen": "https://firebasestorage.googleapis.com/v0/b/brinna-45fe0.appspot.com/o/remera4.jpg?alt=media&token=e4bd9de3-c453-4bcf-98c6-5bc77fb6f48d",
        "titulo": "Musculosa Amarilla con flores",
        "talle": "M",
        "precio": "300",
        "etiqueta": "no"
    },
    {
        "imagen": "https://firebasestorage.googleapis.com/v0/b/brinna-45fe0.appspot.com/o/remera1.jpg?alt=media&token=9787afb9-8ca8-4991-ad10-00625c137bb6",
        "titulo": "Remera 1",
        "talle": "M",
        "precio": "300",
        "etiqueta": "no"
    },
    {
        "imagen": "https://firebasestorage.googleapis.com/v0/b/brinna-45fe0.appspot.com/o/remera3.jpg?alt=media&token=d0367ff2-5325-4efe-aead-b4e1b7893a45",
        "titulo": "Remera 3",
        "talle": "M",
        "precio": "300",
        "etiqueta": "no"
    },
    {
        "imagen": "https://firebasestorage.googleapis.com/v0/b/brinna-45fe0.appspot.com/o/remera4.jpg?alt=media&token=e4bd9de3-c453-4bcf-98c6-5bc77fb6f48d",
        "titulo": "Remera 4",
        "talle": "M",
        "precio": "300",
        "etiqueta": "si"
    },
]

let settings = {
    className: "slider_novedades",
    arrows: true,
    centerMode: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
};

const Novedades = () => {
    const [corazon, setCorazon] = useState([])

    const cambiarCorazon = (index) => {
        //setCorazon(index)
        if (corazon.includes(index)) {
            setCorazon(corazon.filter((item) => item !== index));
        } else { // Si no está seleccionado, lo agregamos a la lista de corazones seleccionados
            setCorazon([...corazon, index]);
        }
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
                    {nov.map((novedades, index) => (
                        <div className="max-w-sm rounded overflow-hidden shadow-md mt-4 card_individual_novedades"
                            key={index}>
                            
                            {novedades.etiqueta == "si" ? 
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
                                src={novedades.imagen}
                                alt={novedades.titulo}
                                width={420}
                                height={50}
                                className="imagen_novedades"
                            />
                            <div className="px-6 py-4">
                                <div className={`titulo_novedades_card mb-2 ${jost}`}>{novedades.titulo}</div>
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