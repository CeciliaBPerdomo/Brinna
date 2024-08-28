import React from "react";
import Image from "next/image";

//CSS 
import "../ParaElla/cardella.css"

// Componentes
import NuevoEtiqueta from "../nuevoEtiqueta";
import FavoritosCorazon from "../favoritosCorazon";

const Card = ({ imageSrc, text, talle, precio, marca, esNuevoConEtiqueta, index }) => {
    return (
        <div className="mx-3 mt-6 flex flex-col text-surface shadow-secondary-1 
        dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0 
        border border-1 card_ella">


            {esNuevoConEtiqueta && <NuevoEtiqueta />}

            <FavoritosCorazon 
                index={index}
                claseCSS={"corazon_favoritos_cardCatalogos"}
            />
            
            <Image
                className="imagen_card_ella"
                height={50}
                width={420}
                src={imageSrc}
                alt={text} />

            <div className="p-6">
                <h5 className="mb-2 text-l font-medium leading-tight">{text} {marca}</h5>
                <p className="text-base">Talle: {talle} </p>
                <p className="mb-4 text-base"><b>${precio}</b></p>
            </div>
        </div>
    );
};

export default Card;

