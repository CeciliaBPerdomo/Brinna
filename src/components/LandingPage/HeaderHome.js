'use client';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import LogoWhatsapp from './Navbar/what';
import Menu from './Navbar/menu'; 

const HeaderHome = () => {
    const pathname = usePathname();

    return (
        <div className="relative w-full">
            <Image
                src="/images/banner_home.png"
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
    );
};

export default HeaderHome;
