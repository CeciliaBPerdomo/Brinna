'use client';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Menu from '@/components/LandingPage/Navbar/menu';
import LogoWhatsappCatalogos from "@/components/LandingPage/Navbar/what";

const HeaderNosotros = () => {
    const pathname = usePathname();

    return (
        <div className="relative w-full">
            <Image
                src="/images/fondos/banner_sobre_nosotros_con_logo.png"
                alt="Banner de fondo"
                width={1920}
                height={1080}
                className="w-full h-auto"
                priority
            />

            {/* Navbar */}
            <Menu pathname={pathname} />

            {/* Ícono WhatsApp */}
            <LogoWhatsappCatalogos />
        </div>
    )
}

export default HeaderNosotros