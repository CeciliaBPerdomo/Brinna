import "../NewsLetter/newsLetter.css"
import { Jost } from "next/font/google"

const jost = Jost({
    weight: "700",
    subsets: ['latin'],
})

const News = () => {
    return (
        <div className="bg-newsletter bannerNewsLetter">
            <p className={`mantente ${jost.className}`}>
                ¡Mantente al tanto!
            </p>
        </div>
    )
}

export default News