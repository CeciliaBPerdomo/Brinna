import React from 'react'
import Image from 'next/image'

const HeaderHome = () => {

    return (
        <>
            <header className="w-full border-b border-white">
                <div>
                    <p>
                        <Image
                            src={"/images/banner_home.png"}
                            alt="Logo"
                            width={1800}
                            height={2000}
                        />
                    </p>
                </div>
            </header>
        </>
    )
}

export default HeaderHome