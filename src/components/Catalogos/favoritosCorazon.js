import React, { useState } from 'react'

import "../Catalogos/favoritosCorazon.css"

function FavoritosCorazon({ index, claseCSS }) {
    const [corazon, setCorazon] = useState([])

    const cambiarCorazon = (index) => {
        if (corazon.includes(index)) {
            setCorazon(corazon.filter((item) => item !== index));
        } else { // Si no está seleccionado, lo agregamos a la lista de corazones seleccionados
            setCorazon([...corazon, index]);
        }
    }


    return (
        <div className={claseCSS}>
            <button onClick={() => cambiarCorazon(index)}>
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
        </div>
    )
}

export default FavoritosCorazon