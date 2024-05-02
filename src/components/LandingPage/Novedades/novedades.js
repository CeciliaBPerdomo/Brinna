"use client"
import "../Novedades/novedades.css"
import { Jost } from "next/font/google"
import Image from "next/image"

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
        "titulo": "Remera 1",
        "talle": "M",
        "precio": "300"
    },
    {
        "imagen": "https://firebasestorage.googleapis.com/v0/b/brinna-45fe0.appspot.com/o/remera3.jpg?alt=media&token=d0367ff2-5325-4efe-aead-b4e1b7893a45",
        "titulo": "Remera 3",
        "talle": "M",
        "precio": "300"
    },
    {
        "imagen": "https://firebasestorage.googleapis.com/v0/b/brinna-45fe0.appspot.com/o/remera4.jpg?alt=media&token=e4bd9de3-c453-4bcf-98c6-5bc77fb6f48d",
        "titulo": "Remera 4",
        "talle": "M",
        "precio": "300"
    },
    {
        "imagen": "https://firebasestorage.googleapis.com/v0/b/brinna-45fe0.appspot.com/o/remera1.jpg?alt=media&token=9787afb9-8ca8-4991-ad10-00625c137bb6",
        "titulo": "Remera 1",
        "talle": "M",
        "precio": "300"
    },
    {
        "imagen": "https://firebasestorage.googleapis.com/v0/b/brinna-45fe0.appspot.com/o/remera3.jpg?alt=media&token=d0367ff2-5325-4efe-aead-b4e1b7893a45",
        "titulo": "Remera 3",
        "talle": "M",
        "precio": "300"
    },
    {
        "imagen": "https://firebasestorage.googleapis.com/v0/b/brinna-45fe0.appspot.com/o/remera4.jpg?alt=media&token=e4bd9de3-c453-4bcf-98c6-5bc77fb6f48d",
        "titulo": "Remera 4",
        "talle": "M",
        "precio": "300"
    },
]

let settings = {
    className: "slider_novedades",
    arrows: true,
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
};

const Novedades = () => {

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
                        <div className="max-w-sm rounded overflow-hidden shadow-md mt-4 card_individual_novedades" key={index}>
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