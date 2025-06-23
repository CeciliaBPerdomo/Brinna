// CSS 
// import "../NewsLetter/newsLetter.css"
import { Jost } from "next/font/google"

const jost = Jost({
    weight: "700",
    subsets: ['latin'],
})

const sub_jost = Jost({
    weight: "500",
    subsets: ['latin'],
})

const News = () => {
    return (
                <section
            className="w-full bg-cover bg-center py-16 px-6"
            style={{ backgroundImage: "url('/images/fondos/newsletter.png')" }}
        >
            {/* Contenedor central */}
            <div className="max-w-6xl mx-auto rounded-lg p-8 text-white">
                {/* Texto principal */}
                <h2
                    className={`text-4xl font-extrabold mb-8 text-center ${jost.className}`}
                    style={{ color: "#CA4E3C" }}
                >
                    ¡Mantente al tanto!
                </h2>

                {/* Dos columnas responsive */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Columna 1 - texto */}
                    <div className="text-center md:text-right">
                       <p className={`text-gray-600 text-xl md:text-2xl lg:text-3xl ${sub_jost.className}`}>
                            Suscríbite a nuestro newsletter y entérate de las últimas
                            novedades.
                        </p>
                    </div>

                    {/* Columna 2 - formulario */}
                    <form className="flex flex-col gap-4 w-4/5 mx-auto md:mx-0 md:w-4/5">
                        <input
                            type="email"
                            placeholder="Tu correo electrónico"
                            className="px-4 py-3 rounded-full border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-[#CA4E3C]"
                            required
                        />
                        <button
    type="submit"
    className={`bg-[#CA4E3C] hover:bg-[#a73b2d] transition text-white font-semibold py-3 rounded-full w-1/2 mx-auto md:mx-0 ${sub_jost.className}`}
>
                            Suscribirme!
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default News