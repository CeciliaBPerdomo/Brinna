'use client';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import LogoWhatsapp from "@/components/LandingPage/Navbar/what";
import Menu from '@/components/LandingPage/Navbar/menu';

const CatalogoGeneral = () => {
    const pathname = usePathname();
    return (
        <div className="relative w-full">
            <Image
                src="/images/fondos/Banner_ catalogo_vertodo_con_logo.jpg"
                alt="Banner de fondo"
                width={1920}
                height={1080}
                className="w-full h-auto"
                priority
            />

            {/* Navbar */}
            <Menu pathname={pathname} />

            {/* Ícono WhatsApp */}
            <LogoWhatsapp />
        </div>
    )
}

export default CatalogoGeneral