import React from "react";
import Image from "next/image";
import { CiMail } from "react-icons/ci";
import { FaSquarePhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

const FooterHome = () => {
  const enlaces = ["Catálogo", "Sobre nosotros", " Contacto"];
  const datos = ["¿Como comprar?", "¿Como vender?", "Términos y condiciones"];
  const contactanos = [
    { logo: <FaSquarePhone />, contact: "099 000 000" },
    { logo: <IoIosMail />, contact: "info@brinna.com" },
  ];

  return (
    <footer>
      <div className="grid place-content-center md:grid md:grid-cols-3 xl:flex xl:flex-row xl:justify-evenly xl:mx-5 text-norpe-green xl:text-left text-center text-muted-blue">
        <div className="m-10 p-5">
          <div className="px-5">
            <p className="font-bold text-brinna">Enlaces rápidos </p>
            <div className="my-5">
              {enlaces.map((enlace, id) => (
                <p className="my-3" id={id}>
                  {enlace}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="m-10 p-5">
          <div className="px-5">
            <p className="font-bold text-brinna">Datos útiles </p>
            <div className="my-5">
              {datos.map((enlace, id) => (
                <p className="my-3" id={id}>
                  {enlace}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="m-10 p-5">
          <div className="px-5">
            <p className="font-bold text-brinna">Contáctanos </p>
            <div className="my-5">
              {contactanos.map((enlace, id) => (
                <div className="my-3 flex" id={id}>
                  <span className="text-brinna text-2xl mr-2">
                    {enlace.logo}
                  </span>
                  {enlace.contact}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="py-5 flex justify-center text-center font-bold text-brinna text-2xl">
        <a href="https://www.instagram.com/Brinna">
          Súmate a nuestro Instagram @Brinna
        </a>
      </div>
      <div className="py-5 flex justify-center text-center bg-muted-cyan cyan">
        <p className="font-bold">Equipo de desarrollo: &nbsp;</p>
        <p>
          Diseño Noelia Perdomo / Desarrollo Cecilia Perdomo • Daniel Martinez
        </p>
      </div>
    </footer>
  );
};

export default FooterHome;
