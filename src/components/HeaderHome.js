import React from 'react'
import Image from 'next/image'

const HeaderHome = () => {
    return (
        <div className="w-full border-b border-white banner-header">
            <div className='container m-auto flex justify-between items-center '>
                <p className='text-4xl text-bold text-slate-100 mt-2 mr-2 '>
                    <Image
                        src={"/LogoBrinnaNegro.png"}
                        alt="Logo"
                        width={160}
                        height={200}
                    />
                </p>
            </div>
        </div>
    )
}

export default HeaderHome