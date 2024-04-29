import Barra from "@/components/LandingPage/Busqueda/barraBusqueda";
import Catalago from "@/components/LandingPage/Catalogos/catalogos";
import ComprarVender from "@/components/LandingPage/ComprarVender/ComprarVender";
import News from "@/components/LandingPage/NewsLetter/news";

export default function Home() {
  return (
    <div>

      {/* Compra o venta */}
      <ComprarVender />

      {/* Barra de busqueda */}
      <Barra />

      {/* Catalogos de ropa */}
      <Catalago />

      {/* Novedades */}

      {/* Voces que inspiran */}

      {/* NewLetter */}
      <News />
    </div>
  );
}
