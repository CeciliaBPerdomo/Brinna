import { Jost } from "next/font/google";

const jost = Jost({
  weight: "600",
  subsets: ["latin"],
});

const Catalogo = () => {
  return (
    <section className="w-full">
      {/* Título y subtítulo */}
      <div className="text-center mb-10 px-4">
        <h2
          className={`text-4xl font-extrabold mb-2 ${jost.className}`}
          style={{ color: "#CA4E3C" }}
        >
          ¡Mirá nuestro catálogo!
        </h2>
        <p className={`text-lg text-gray-600 ${jost.className}`}>
          Explora en las diferentes categorías.
        </p>
      </div>

      {/* Grid de imágenes */}
      <div className="grid grid-cols-1 md:grid-cols-3 w-full md:px-0">

        {/* Imagen 2 - ella */}
        <div
          className="relative h-96 md:h-[720px] bg-contain bg-center bg-no-repeat mb-4 md:mb-0"
          style={{
            backgroundImage: "url('/images/fondos/ella.png')",
          }}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-4">
            <p className="text-white text-2xl font-bold">Ropa para ella</p>
            <a
              href="/catalogo-ella"
              className="px-4 py-2 border border-white text-white hover:bg-white hover:text-[#CA4E3C] transition"
            >
              Ver catálogo
            </a>
          </div>
        </div>

        {/* Imagen 1 - él */}
        <div className="relative h-96 md:h-[720px] bg-center mb-4 md:mb-0">
          <img
            src="/images/fondos/el.png"
            alt="Ropa para él"
            className="w-full h-full object-contain"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-4">
            <p className="text-white text-2xl font-bold">Ropa para él</p>
            <a
              href="/catalogo-el"
              className="px-4 py-2 border border-white text-white hover:bg-white hover:text-[#CA4E3C] transition"
            >
              Ver catálogo
            </a>
          </div>
        </div>


        {/* Imagen 3 - chicos */}
        <div
          className="relative h-96 md:h-[720px] bg-contain bg-center bg-no-repeat mb-4 md:mb-0"
          style={{ backgroundImage: "url('/images/fondos/chicos.png')" }}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-0">
            <p className="text-white text-xl md:text-2xl font-bold w-full max-w-[90%] text-center break-words mx-auto">
              Ropa para los más chicos
            </p>
            <a
              href="/catalogo-chicos"
              className="px-4 py-2 border border-white text-white hover:bg-white hover:text-[#CA4E3C] transition"
            >
              Ver catálogo
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Catalogo;
