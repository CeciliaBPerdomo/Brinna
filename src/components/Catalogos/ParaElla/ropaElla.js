import React from "react";

//Componentes
import Card from "./CardElla";

const RopaParaElla = () => {

    const cardsData = [
        { id: 1, imageSrc: "https://firebasestorage.googleapis.com/v0/b/brinna-45fe0.appspot.com/o/remera1.jpg?alt=media&token=9787afb9-8ca8-4991-ad10-00625c137bb6", text: "Card 1" },
        { id: 2, imageSrc: "https://firebasestorage.googleapis.com/v0/b/brinna-45fe0.appspot.com/o/remera3.jpg?alt=media&token=d0367ff2-5325-4efe-aead-b4e1b7893a45", text: "Card 2" },
        { id: 3, imageSrc: "https://firebasestorage.googleapis.com/v0/b/brinna-45fe0.appspot.com/o/remera4.jpg?alt=media&token=e4bd9de3-c453-4bcf-98c6-5bc77fb6f48d", text: "Card 3" },
        { id: 4, imageSrc: "https://firebasestorage.googleapis.com/v0/b/brinna-45fe0.appspot.com/o/remera1.jpg?alt=media&token=9787afb9-8ca8-4991-ad10-00625c137bb6", text: "Card 4" },
        { id: 5, imageSrc: "https://firebasestorage.googleapis.com/v0/b/brinna-45fe0.appspot.com/o/remera3.jpg?alt=media&token=d0367ff2-5325-4efe-aead-b4e1b7893a45", text: "Card 1" },
        { id: 6, imageSrc: "https://firebasestorage.googleapis.com/v0/b/brinna-45fe0.appspot.com/o/remera4.jpg?alt=media&token=e4bd9de3-c453-4bcf-98c6-5bc77fb6f48d", text: "Card 2" },
        { id: 7, imageSrc: "https://firebasestorage.googleapis.com/v0/b/brinna-45fe0.appspot.com/o/remera1.jpg?alt=media&token=9787afb9-8ca8-4991-ad10-00625c137bb6", text: "Card 3" },
        { id: 8, imageSrc: "https://firebasestorage.googleapis.com/v0/b/brinna-45fe0.appspot.com/o/remera3.jpg?alt=media&token=d0367ff2-5325-4efe-aead-b4e1b7893a45", text: "Card 4" },
    ];

    return (
        <div class="grid-cols-2 sm:grid md:grid-cols-4 ">
            {cardsData.map(card => (
                <Card key={card.id} imageSrc={card.imageSrc} text={card.text} />
            ))}
        </div>
    )
}

export default RopaParaElla