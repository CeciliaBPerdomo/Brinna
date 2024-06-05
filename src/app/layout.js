import "./globals.css";
import { Inter } from 'next/font/google'
 
// If loading a variable font, you don't need to specify the font weight
/* La propiedad subsets especifica los subconjuntos de caracteres que se incluirán en el tipo de letra. 
En este caso, el subconjunto latin incluye todos los caracteres del alfabeto latino */
const inter = Inter({ subsets: ['latin'] })

// Encabezado y pie de pagina
import HeaderHome from "../components/LandingPage/HeaderHome";
import FooterHome from "../components/LandingPage/Footer";

export const metadata = {
  title: "Brinna",
  description: "Realizado con 💛 por Cecilia, Daniel, Noelia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <HeaderHome /> */}
          {children}
        <FooterHome />
        </body>
    </html>
  );
}
