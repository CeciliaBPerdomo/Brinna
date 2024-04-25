import Catalago from "@/components/LandingPage/Catalogos/catalogos";
import ComprarVender from "@/components/LandingPage/ComprarVender/ComprarVender";
import News from "@/components/LandingPage/NewsLetter/news";

export default function Home() {
  return (
    <div>

      {/* Compra o venta */}
      <ComprarVender />

      {/* Catalogos de ropa */}
      <Catalago />

      {/* NewLetter */}
      <News />
    </div>
  );
}
