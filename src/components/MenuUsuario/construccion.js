import Image from "next/image"

function Construccion() {
  return (
    <div>
         <div> 
                <p>Esta sección se encuentra en construcción, desarrollo y planificación.</p>
                <Image 
                src={"/images/buscando.png"}
                width={350}
                height={50}
                alt="Working"
                />
            </div>
    </div>
  )
}

export default Construccion