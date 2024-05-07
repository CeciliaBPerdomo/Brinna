import React from "react";

const Footer = () => {
  return (
    <footer className="bg-light-gray">
      <div className="grid place-content-center md:grid md:grid-cols-3 xl:flex xl:flex-row xl:justify-between xl:mx-5 text-norpe-green xl:text-left text-center">
        <div className="text-center">
          {/* <img src={logo} className="m-2 mt-2" /> */}
          <p className="mt-5">Horario de atención: </p>
          <p>Lunes a Viernes 8:30 a 12:00 y de 14:00 a 18:30</p>
          <p>Sábados: 8:30 a 12:30</p>
          <div className="flex justify-center ml-6 mt-10">
            <p className="p-1">Seguinos en : </p>
            {/* <img src={facebook} /> */}
          </div>
        </div>
        <div className="py-2">
          <p className="text-2xl mb-6">Contacto</p>
          <div>
            <div className="text-2xl flex justify-center xl:float-left">
              {/* <FaLocationDot /> */}
            </div>
            <div className="text-lg px-10 xl:text-justify">
              <p>18 de Julio 509</p>
              <p>Colonia del Sacramento</p>
              <p>URUGUAY</p>
            </div>
          </div>
          <div className="mt-4">
            <div className="text-2xl flex justify-center xl:float-left">
              {/* <AiOutlineMail /> */}
            </div>
            <div className="text-lg underline px-10 xl:text-justify">
              <a href="mailto:info@seguridadnorpe.com.uy" target="_blank">
                info@seguridadnorpe.com.uy
              </a>
            </div>
          </div>
          <div className="mt-4">
            <div className="text-2xl flex justify-center xl:float-left">
              {/* <LuPhone /> */}
            </div>
            <div className="text-lg px-10 xl:text-justify">
              <a href="tel:+59845224413" target="_blank">
                +598 4522 4413
              </a>
            </div>
          </div>
        </div>
        <div className="">
          <p className="text-2xl mb-6">¿Donde estamos?</p>
        </div>
      </div>
      <div className="bg-norpe-green mt-10">&nbsp;</div>
    </footer>
  );
};

export default Footer;
