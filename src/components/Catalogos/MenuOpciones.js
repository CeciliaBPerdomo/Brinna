"use client"
import React, {useEffect} from "react";
import { HeartIcon, ShoppingCartIcon, MailIcon, UserCircleIcon } from '@heroicons/react/solid';

// Redux
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from '../../lib/usuariosSlice';

//CSS
import "../Catalogos/menuOpciones.css"

// Fuente
import { Jost } from "next/font/google"

const jost = Jost({
    weight: "400",
    subsets: ['latin'],
})


const MenuOpciones = () => {
    const dispatch = useDispatch();
    // Acceder al estado de autenticación desde Redux
    const currentUser = useSelector((state) => state.usuarios.currentUser);

    useEffect(() => {
        // Recuperar el usuario desde localStorage cuando el componente se monte
        const storedUser = localStorage.getItem('currentUser');
        if (storedUser) {
            dispatch(setCurrentUser(JSON.parse(storedUser)));
        }
    }, [dispatch]);


    return (
        <div className="menuopciones_catalogo">
            {currentUser ? (
                <p className={`holaNoelia ${jost.className}`}>
                    ¡Hola {currentUser.usuario}!
                </p>
            ) :
                null
            }

            <div>
                <div className="menuopciones_catalogo_iconos">
                    <HeartIcon className="iconos_menuopciones" />
                    <ShoppingCartIcon className="iconos_menuopciones" />
                    <MailIcon className="iconos_menuopciones" />
                    <UserCircleIcon className="iconos_menuopciones" />
                </div>
            </div>
        </div>
    )
}

export default MenuOpciones