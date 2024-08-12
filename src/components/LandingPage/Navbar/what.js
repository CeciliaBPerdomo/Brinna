import Link from 'next/link';

// CSS
import "../Navbar/what.css"

const LogoWhatsapp = () => {
    return (
        <div>
            <Link href={"https://api.whatsapp.com/send?phone=59899387921&text=Hola! ¿Qué%20tal? Te escribo desde la aplicación web de Brinna!"}>
                <div className='div_logoWhatsapp'>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        width="89"
                        height="89"
                        viewBox="0 0 89 89"
                        fill="none"
                        className='logoWhatsapp'
                        >
                        <path d="M61.8692 61.8692C71.9703 51.7681 71.9703 35.3909 61.8692 25.2897C51.7681 15.1886 35.3909 15.1886 25.2897 25.2897C15.1886 35.3909 15.1886 51.7681 25.2897 61.8692C35.3909 71.9703 51.768 71.9703 61.8692 61.8692Z" fill="#01E311" />
                        <path d="M54.3986 37.4258C52.2679 33.6188 48.2403 31.1478 43.8534 31.0063C39.4051 30.8647 34.8263 33.1295 32.489 37.458C30.3558 41.4041 30.5281 46.2516 32.9195 50.1083C32.6022 51.8665 32.2823 53.6248 31.9649 55.383C33.8274 55.0775 35.6899 54.7696 37.5524 54.4641C38.2216 54.8317 42.6872 57.1834 47.9032 55.239C48.5552 54.9956 53.5941 53.0163 55.4074 47.4238C57.0558 42.3354 54.7824 38.1037 54.4011 37.4233L54.3986 37.4258ZM53.5768 46.6738C52.1129 51.4022 47.8934 53.1306 47.3398 53.3466C42.4658 55.2439 38.2536 52.6488 37.8034 52.3607C36.6667 52.6066 35.53 52.8524 34.3958 53.0958L34.9321 49.6017C32.612 46.351 32.3094 42.0498 34.1522 38.5333C36.0885 34.8381 39.9267 32.8986 43.6591 32.9656C47.357 33.0352 50.7818 35.0715 52.6173 38.2577C52.9445 38.8264 54.9104 42.3652 53.5768 46.6738Z" fill="white" />
                        <path d="M40.7296 38C40.8659 38 40.9877 38.082 41.0291 38.2027C41.258 38.8451 42.1614 40.8155 42.0908 41.0273C42.0056 41.2825 40.9658 42.0273 40.9244 42.3895C40.883 42.7517 41.6573 43.7608 42.4658 44.5535C43.5665 45.631 45.31 46.3394 45.4512 46.3964C45.5949 46.4533 46.6761 44.9613 46.9001 44.8679C47.1241 44.7745 50 46.2255 50 46.4738C50 46.7221 49.776 47.574 49.2451 48.2483C48.875 48.7198 48.0617 48.9248 47.4578 49C47.4432 49 47.4285 49 47.4164 49C46.9586 48.9294 43.8027 48.5968 41.0875 46.0934C38.8789 44.0569 38.2165 41.738 38.0071 40.8155C38.0047 40.8018 38.0023 40.7904 38.0023 40.7768C37.9901 40.467 38.0023 39.549 38.7011 38.7472C38.9714 38.4351 39.4438 38.1435 39.6143 38.041C39.6557 38.0159 39.7044 38.0023 39.7555 38.0023H40.7296V38Z" fill="white" />
                    </svg>
                </div>
            </Link>
        </div>
    )
}

export default LogoWhatsapp