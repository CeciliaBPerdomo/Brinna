import React from "react";
import { FaSquarePhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import Image from "next/image";
import instagram from "../../../public/images/instagram.ico";

// CSS para celulares
import "../LandingPage/Footer/footer.css"
import Link from "next/link";

const FooterHome = () => {
  const enlaces = [
    { "nombre": "Catálogo", "link": "/catalogo" },
    { "nombre": "Sobre nosotros", "link": "/nosotros" },
    { "nombre": "Contacto", "link": "/contacto" }
  ];

  const datos = [
    { nombre: "¿Como comprar?", linkTo: "/comprar" },
    { nombre: "¿Como vender?", linkTo: "/vender" },
    { nombre: "Términos y condiciones", linkTo: "/terminos" }
  ];

  const contactanos = [
    { logo: <FaSquarePhone />, contact: "099 000 000", link: "" },
    { logo: <IoIosMail />, contact: "BrinnaMail", link: "mailto:brinnaropasegundamano@gmail.com" },
  ];

  return (
    <footer className="fondo_footer">
      <div className="grid place-content-center md:grid md:grid-cols-3 xl:flex xl:flex-row xl:justify-evenly xl:mx-5 text-norpe-green xl:text-left text-center text-muted-blue divPrincipalFooter">
        <div className="m-10 p-5">
          <div className="px-5 enlaces_footer">
            <p className="font-bold text-brinna enlaces_texto_footer">Enlaces rápidos</p>
            <div className="my-5 enlacesrapidos_footer">
              {enlaces.map((enlace, id) => (
                <p className="my-3 enlacesrapidos_footer" key={id}>
                  <Link href={enlace.link} >
                    {enlace.nombre}
                  </Link>
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="m-10 p-5 datosutiles_footer">
          <div className="px-5">
            <p className="font-bold text-brinna enlaces_texto_footer">Datos útiles</p>
            <div className="my-5 enlacesrapidos_footer">
              {datos.map((enlace, id) => (
                <p className="my-3 enlacesrapidos_footer" key={id}>
                  <Link href={enlace.linkTo}>
                    {enlace.nombre}
                  </Link>
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="m-10 p-5 contacto_footer">
          <div className="px-5">
            <p className="font-bold text-brinna enlaces_texto_footer">Contáctanos</p>
            <div className="my-5 contactanos_footer">
              {contactanos.map((enlace, id) => (
                <div className="my-3 flex" key={id}>
                  <span className="text-brinna text-2xl mr-2 ">
                    {enlace.logo}
                  </span>
                  <div className="enlacesrapidos_footer">
                    <Link href={enlace.link}>
                    {enlace.contact}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="py-5 flex justify-center text-center font-bold text-brinna text-2xl sumate_footer">
        <a className="flex" href="https://www.instagram.com/Brinna">
          <Image src={instagram} alt="Instagram" />
          &nbsp;Súmate a nuestro Instagram
        </a>
      </div>
      <div className="py-5 flex justify-center text-center bg-muted-cyan cyan">
        <p className="equipo_footer">
          <b>Equipo de desarrollo</b> 
          <br/>
          Diseño UX/UI:  <Link href="mailto:noelia.perdomo88@gmail.com" >Noelia Perdomo</Link>
          <br/> 
          Desarrollo web: <Link href="mailto:cecilia.perdomo@gmail.com" >Cecilia Perdomo</Link> • 
          <Link href="mailto:rdjmartinez95@gmail.com"> Daniel Martinez</Link>
        </p>
      </div>
    </footer>
  );
};

export default FooterHome;
