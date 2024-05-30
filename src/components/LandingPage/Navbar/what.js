import Image from 'next/image'
import Link from 'next/link';

// CSS
import "../Navbar/what.css"

const LogoWhatsapp = () => {
    return (
        <div>
            <Link href={"https://api.whatsapp.com/send?phone=59899387921&text=Hola! ¿Qué%20tal? Te escribo desde la aplicación web de Brinna!"}>
                <div className='logoWhatsapp'>
                    <Image
                        src={"/images/icono_whatsapp.png"}
                        alt="Contacto whatsapp"
                        width={88}
                        height={88}
                        
                    />
                </div>
            </Link>
        </div>
    )
}

export default LogoWhatsapp