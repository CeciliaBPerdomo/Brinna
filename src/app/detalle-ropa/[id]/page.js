'use client'
import { useParams } from 'next/navigation'
import { useEffect } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductos, selectProductoById } from "../../../lib/productosSlice"

// Componentes
import DetalleRopa from '@/components/Catalogos/Detalle-Ropa/Detalle-ropa'
import LoadingWash from '@/components/Catalogos/loading';
import HeaderParaElla from '@/components/Catalogos/ParaElla/HeaderParaElla';
import HeaderParaEl from '@/components/Catalogos/ParaEl/HeaderParaEl';
import HeaderParaChicos from '@/components/Catalogos/Chicos/HeaderChicos';
import MasCatalogosChicos from '@/components/Catalogos/Chicos/MasCatalogosChicos';
import MasCatalogos from '@/components/Catalogos/ParaElla/masCatalogos';
import MasCatalogosEl from '@/components/Catalogos/ParaEl/masCatalogosEl';
import Barra from '@/components/LandingPage/Busqueda/barraBusqueda';
import ContenedorChicos from '@/components/Catalogos/Chicos/ContenedorPrincipalChicos';
import ContenedorEllas from '@/components/Catalogos/ParaElla/ContenedorPrincipal';
import ContenedorEl from '@/components/Catalogos/ParaEl/ContenedorPrincipalEl';

function RopaIndividual() {
  const { id } = useParams()
  const dispatch = useDispatch();

  // Obtener los productos desde el estado de Redux
  const { items: productos, loading } = useSelector((state) => state.productos);

  // Cargar los productos si no están cargados
  useEffect(() => {
    if (productos.length === 0) {
      dispatch(fetchProductos());
    }
  }, [dispatch, productos.length]);


  // Usar el selector para obtener el producto por su ID
  const producto = useSelector((state) => (id ? selectProductoById(state, id) : null));
  console.log(producto?.categoria)
  console.log(loading)

  // Si el producto no está disponible o si aún se están cargando los productos
  if (loading) {
    return (
      <div>
        <LoadingWash />
      </div>
    );
  }


  if (!producto) {
    return (
      <div>
        Producto no encontrado
      </div>
    );
  }

  let categoria = producto?.categoria

  return (
    <div>

      {/* Selecciona el encabezado que le corresponde segun la prenda */}
      {categoria == "mujer" ? (
        <HeaderParaElla />
      ) : categoria === "hombre" ? (
        <HeaderParaEl />
      ) : categoria === "chicos" ? (
        <HeaderParaChicos />
      ) : (
        null
      )}

      {/* Muestra la info del producto */}
      <DetalleRopa producto={producto} />

      {/* Muestra la barra de busqueda de productos */}
      <Barra />


      {categoria == "mujer" ? (
        <ContenedorEllas />
      ) : categoria === "hombre" ? (
        <ContenedorEl />
      ) : categoria === "chicos" ? (
        <ContenedorChicos />
      ) : (
        null
      )}


      {/* Muestra los demas catalagos segun el producto que se selecciono */}
      {categoria == "mujer" ? (
        <MasCatalogos />
      ) : categoria === "hombre" ? (
        <MasCatalogosEl />
      ) : categoria === "chicos" ? (
        <MasCatalogosChicos />
      ) : (
        null
      )}
    </div>
  )
}

export default RopaIndividual