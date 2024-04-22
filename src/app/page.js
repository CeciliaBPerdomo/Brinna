import Catalago from "@/components/LandingPage/Catalogos/catalogos";
import News from "@/components/LandingPage/NewsLetter/news";

export default function Home() {
  return (
    <div>

      {/* Catalogos de ropa */}
      <Catalago />

      {/* NewLetter */}
      <News />
    </div>
  );
}
