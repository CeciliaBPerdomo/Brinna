"use client"
import { useEffect } from "react";
import "./globals.css";
import { Inter } from 'next/font/google'

// Redux
import { Provider } from 'react-redux';
import store from '../lib/store';


// If loading a variable font, you don't need to specify the font weight
/* La propiedad subsets especifica los subconjuntos de caracteres que se incluirán en el tipo de letra. 
En este caso, el subconjunto latin incluye todos los caracteres del alfabeto latino */
const inter = Inter({ subsets: ['latin'] })

// Encabezado y pie de pagina
import FooterHome from "../components/LandingPage/Footer";
import AuthProvider from "@/components/Auth/Registro/AuthProvider";

export default function RootLayout({ children }) {

  return (
    <Provider store={store}>
      <AuthProvider >
        <html lang="en">
          <head>
            <title>Brinna</title>
          </head>
          <body className={inter.className}>
            {children}
            <FooterHome />
          </body>
        </html>
      </AuthProvider>
    </Provider>
  );
}
