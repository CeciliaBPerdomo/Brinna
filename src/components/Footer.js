import React from "react";

const Footer = () => {
  return (
    <footer className="bg-light-gray">
      <div className="grid place-content-center md:grid md:grid-cols-3 xl:flex xl:flex-row xl:justify-between xl:mx-5 text-norpe-green xl:text-left text-center">
        <div className="text-center">
          <img src={logo} className="m-2 mt-2" />
          <p className="mt-5">Horario de atención: </p>
          <p>Lunes a Viernes 8:30 a 12:00 y de 14:00 a 18:30</p>
          <p>Sábados: 8:30 a 12:30</p>
          <div className="flex justify-center ml-6 mt-10">
            <p className="p-1">Seguinos en : </p>
            <img src={facebook} />
          </div>
        </div>
        <div className="py-2">
          <p className="text-2xl mb-6">Contacto</p>
          <div>
            <div className="text-2xl flex justify-center xl:float-left">
              <FaLocationDot />
            </div>
            <div className="text-lg px-10 xl:text-justify">
              <p>18 de Julio 509</p>
              <p>Colonia del Sacramento</p>
              <p>URUGUAY</p>
            </div>
          </div>
          <div className="mt-4">
            <div className="text-2xl flex justify-center xl:float-left">
              <AiOutlineMail />
            </div>
            <div className="text-lg underline px-10 xl:text-justify">
              <a href="mailto:info@seguridadnorpe.com.uy" target="_blank">
                info@seguridadnorpe.com.uy
              </a>
            </div>
          </div>
          <div className="mt-4">
            <div className="text-2xl flex justify-center xl:float-left">
              <LuPhone />
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
          <Iframe
            className="sm:w-full md:w-52 lg:w-96"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3289.245027100883!2d-57.84617262550477!3d-34.47130787300198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a31268a17c5017%3A0x6eea4e5c8f049afe!2s18%20de%20Julio%20509%2C%2070000%20Col.%20del%20Sacramento%2C%20Departamento%20de%20Colonia%2C%20Uruguai!5e0!3m2!1spt-BR!2sbr!4v1695840435992!5m2!1spt-BR!2sbr"
            // width="400"
            // height="170"
            // style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></Iframe>
        </div>
      </div>
      <div className="bg-norpe-green mt-10">&nbsp;</div>
    </footer>
  );
};

export default Footer;
