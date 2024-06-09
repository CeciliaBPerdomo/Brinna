import React from "react";
import Image from "next/image";

//CSS 
import "../ParaElla/cardella.css"

const Card = ({ imageSrc, text }) => {
    return (
        <div className="mx-3 mt-6 flex flex-col text-surface shadow-secondary-1 
        dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0 
        border border-1 card_ella">
            <Image
                class="imagen_card_ella"
                height={50}
                width={420}
                src={imageSrc}
                alt="Los Angeles Skyscrapers" />

            <div class="p-6">
                <h5 class="mb-2 text-xl font-medium leading-tight">{text}</h5>
                <p class="mb-4 text-base">
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                </p>
            </div>
        </div>
    );
};

export default Card;

