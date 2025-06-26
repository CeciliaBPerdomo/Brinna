"use client"

import Image from "next/image"
import { useEffect, useState, useRef } from "react"
import { useRouter } from "next/navigation"
import { useSelector, useDispatch } from 'react-redux'
import { fetchProductos } from '../../../lib/productosSlice'

// Componentes extra
import NuevoEtiqueta from "@/components/Catalogos/nuevoEtiqueta"
import FavoritosCorazon from "@/components/Catalogos/favoritosCorazon"
import LoadingWash from "@/components/Catalogos/loading"
import EncabezadoNovedades from "./encabezadoNovedades"

// Fuentes
import { Jost } from "next/font/google"

const jost = Jost({ weight: "500", subsets: ['latin'] })
const sub_jost = Jost({ weight: "400", subsets: ['latin'] })
const precio_jost = Jost({ weight: "600", subsets: ['latin'] })

// Iconos facheros
import { ChevronLeft, ChevronRight } from "lucide-react"

const Novedades = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const { items: productos, loading, error } = useSelector((state) => state.productos)

    const carruselRef = useRef(null)
    const [index, setIndex] = useState(0)

    useEffect(() => {
        dispatch(fetchProductos())
    }, [dispatch])

    const productosRecientes = productos.slice(-6)

    // Autoplay
    useEffect(() => {
        const interval = setInterval(() => {
            if (carruselRef.current) {
                const nextIndex = (index + 1) % productosRecientes.length
                const childWidth = carruselRef.current.children[0]?.offsetWidth || 0
                carruselRef.current.scrollTo({
                    left: childWidth * nextIndex,
                    behavior: 'smooth',
                })
                setIndex(nextIndex)
            }
        }, 3000)

        return () => clearInterval(interval)
    }, [index, productosRecientes.length])

    const scrollLeft = () => {
        if (carruselRef.current) {
            carruselRef.current.scrollBy({ left: -300, behavior: 'smooth' })
        }
    }

    const scrollRight = () => {
        if (carruselRef.current) {
            carruselRef.current.scrollBy({ left: 300, behavior: 'smooth' })
        }
    }

    if (loading) {
        return (
            <div className="mt-10 px-6">
                <EncabezadoNovedades />
                <LoadingWash />
            </div>
        )
    }

    if (error) {
        return (
            <div className="mt-10 px-6">
                <EncabezadoNovedades />
                <div className="bg-red-100 border-t border-b border-red-500 text-red-700 px-4 py-3 mt-4">
                    <p className="font-bold">Error al actualizar los productos</p>
                    <p className="text-sm">Las novedades no se pueden actualizar, {error}. Prueba de nuevo en algunos minutos.</p>
                </div>
            </div>
        )
    }

    return (
        <div className="mt-10">
            <div className="px-6">
                <EncabezadoNovedades />
            </div>

            <div className="relative">
                {/* Flechas */}
                <button
                    onClick={scrollLeft}
                    className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:bg-gray-100"
                >
                    <ChevronLeft size={20} className="text-gray-700" />
                </button>

                <button
                    onClick={scrollRight}
                    className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:bg-gray-100"
                >
                    <ChevronRight size={20} className="text-gray-700" />
                </button>

                {/* Carrusel */}
                <div
                    ref={carruselRef}
                    className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-6 py-6 scrollbar-hide scroll-smooth"
                >
                    {productosRecientes.map((novedades, index) => (
                        <div
                            key={index}
                            className="snap-start shrink-0 w-60 sm:w-72 md:w-80 bg-[#DAEBEB] rounded-2xl shadow-md cursor-pointer relative"
                            onClick={() => router.push(`/detalle-ropa/${novedades.id}`)}
                        >
                            {novedades.estado === "nuevo-con-etiqueta" && <NuevoEtiqueta />}
                            <FavoritosCorazon index={index} claseCSS="absolute top-2 right-2" />
                            <Image
                                src={novedades.file}
                                alt={novedades.nombre}
                                width={420}
                                height={400}
                                className="rounded-t-2xl object-cover h-60 w-full"
                            />
                            <div className="p-4">
                                <h3 className={`text-lg mb-1 ${jost.className}`}>{novedades.nombre}</h3>
                                <p className={`text-sm ${sub_jost.className}`}>Talle {novedades.talle}</p>
                                <p className={`text-base font-bold ${precio_jost.className}`}>$ {novedades.precio}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Novedades
