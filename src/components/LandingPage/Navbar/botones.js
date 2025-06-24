"use client"
{/* Registro e inicio de sesion */ }
import { useEffect } from "react";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "@/lib/usuariosSlice";

// CSS
import "../Navbar/botones.css"

// Componente
import MenuOpciones from "@/components/Catalogos/MenuOpciones";
import MenuBotones from "./menu_botones";

const BotonesSesion = () => {
    const dispatch = useDispatch()
    // Acceder al estado de autenticación desde Redux
    const currentUser = useSelector((state) => state.usuarios.currentUser);

    useEffect(() => {
        const savedUser = localStorage.getItem('currentUser');
        if (savedUser) {
            dispatch(setCurrentUser(JSON.parse(savedUser)));
        }
    }, [dispatch]);

    return (
        <>
            {currentUser ? (
                // Mostrar el nombre del usuario autenticado
                <div>
                    <MenuOpciones />
                </div>
            ) : (
                // Mostrar botones de registro e inicio de sesión si no está autenticado
                <>
                    <MenuBotones />
                </>
            )}
        </>
    )
}

export default BotonesSesion