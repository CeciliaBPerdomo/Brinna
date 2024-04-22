import "../NewsLetter/newsLetter.css"
import { Jost } from "next/font/google"
import Image from "next/image"

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
            <p className={`mantente ${jost.className}`}>
                ¡Mantente al tanto!
            </p>

            <div className="flex mb-4 justify-center">
                <div className="w-1/2 suscribite">
                    <p className={`letraSuscribite ${sub_jost.className}`}>
                        Suscríbite a nuestro newsletter
                        y entérate de las últimas novedades.
                    </p>
                </div>

                <div className="my-auto">
                    <div className="w-1/2 inputDiv">
                        <input
                            type="text"
                            className="rounded inputNews"
                            placeholder="Ingresa tu correo electrónico"
                        />
                    </div>
                    <div className="w-1/2 divBoton">
                        <Image
                            src={"/images/botones/suscribirme.png"}
                            alt={"Suscribirme"}
                            width={122}
                            height={42}
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default News