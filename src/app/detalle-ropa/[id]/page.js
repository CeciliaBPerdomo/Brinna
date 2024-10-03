'use client'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductos, selectProductoById } from "../../../lib/productosSlice"

// Componentes
import DetalleRopa from '@/components/Catalogos/Detalle-Ropa/Detalle-ropa'
import LoadingWash from '@/components/Catalogos/loading';

// Headers segun categoria
import HeaderParaElla from '@/components/Catalogos/ParaElla/HeaderParaElla';
import HeaderParaEl from '@/components/Catalogos/ParaEl/HeaderParaEl';
import HeaderParaChicos from '@/components/Catalogos/Chicos/HeaderChicos';

// Mas catalogos segun categorias
import MasCatalogosChicos from '@/components/Catalogos/Chicos/MasCatalogosChicos';
import MasCatalogos from '@/components/Catalogos/ParaElla/masCatalogos';
import MasCatalogosEl from '@/components/Catalogos/ParaEl/masCatalogosEl';

// Barra de busqueda
import Barra from '@/components/LandingPage/Busqueda/barraBusqueda';

import ContenedorChicos from '@/components/Catalogos/Chicos/ContenedorPrincipalChicos';
import ContenedorEllas from '@/components/Catalogos/ParaElla/ContenedorPrincipal';
import ContenedorEl from '@/components/Catalogos/ParaEl/ContenedorPrincipalEl';

function RopaIndividual() {
  const { id } = useParams()
  const dispatch = useDispatch();
  const [categoria, setCategoria] = useState('');

  const { items: productos, loading, error } = useSelector((state) => state.productos);

  useEffect(() => {
    dispatch(fetchProductos());
  }, [dispatch]);

  const producto = productos.find((producto) => producto.id === id);


  // useEffect para actualizar la categoría cuando el producto cambia
  useEffect(() => {
    if (producto) {
      setCategoria(producto.categoria);
    }
  }, [producto]);

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


      {/* {categoria == "mujer" ? (
        <ContenedorEllas />
      ) : categoria === "hombre" ? (
        <ContenedorEl />
      ) : categoria === "chicos" ? (
        <ContenedorChicos />
      ) : (
        null
      )} */}


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