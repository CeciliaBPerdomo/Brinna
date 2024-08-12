// CSS 
import "../NewsLetter/newsLetter.css"
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
        <div className="bg-newsletter bannerNewsLetter">
            <div className="divMantente_newsLetter">
            <p className={`mantente_newsLetter ${jost.className}`}>
                ¡Mantente al tanto!
            </p>
            </div>

            <div className="flex mb-4 justify-center principal_newsLetter">
                <div className="w-1/2 suscribite_newsLetter">
                    <p className={`letraSuscribite_newsLetter ${sub_jost.className}`}>
                        Suscríbite a nuestro newsletter
                        y entérate de las últimas novedades.
                    </p>
                </div>

                <div className="my-auto">
                    <div className="w-1/2 inputDiv_newsLetter">
                        <input
                            type="text"
                            className="inputNews"
                            placeholder="Ingresa tu correo electrónico"
                        />
                    </div>
                    <div className="divBoton_news">
                        <button className={`botonSuscribite_newsLetter ${sub_jost}`}>
                            Suscribirme!
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default News