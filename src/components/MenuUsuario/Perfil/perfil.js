import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentUser, actualizarUsuario } from "../../../lib/usuariosSlice"
import Image from 'next/image';

// CSS
import "./perfil.css"

//Fuente
import { Jost } from "next/font/google"
const jost = Jost({
  weight: "600",
  subsets: ['latin']
})

const p_jost = Jost({
  weight: "500",
  subsets: ['latin']
})

const sub_jost = Jost({
  weight: "400",
  subsets: ['latin']
})

function Perfil() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.usuarios.currentUser);

  const initialValues = {
    nombre: currentUser?.userGoogle?.nombre || currentUser?.nombre || 'sin datos',
    usuario: currentUser?.userGoogle?.usuario || currentUser?.usuario || 'sin datos',
    password: currentUser?.userGoogle?.password || currentUser?.password || 'sin datos',
    email: currentUser?.userGoogle?.email || currentUser?.email || 'sin datos',
    celular: currentUser?.userGoogle?.celular || currentUser?.celular || 'sin datos',
    cumpleanos: currentUser?.userGoogle?.cumpleanos || currentUser?.cumpleanos || 'sin datos',
    genero: currentUser?.userGoogle?.genero || currentUser?.genero || 'sin datos',
    departamento: currentUser?.userGoogle?.departamento || currentUser?.departamento || 'sin datos',
    ciudad: currentUser?.userGoogle?.ciudad || currentUser?.ciudad || 'sin datos',
    direccion: currentUser?.userGoogle?.direccion || currentUser?.direccion || 'sin datos',
  }

  const [formData, setFormData] = useState(initialValues);
  const [foto, setFoto] = useState(currentUser?.userGoogle?.photoURL || currentUser?.foto || '')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  console.log(currentUser)

  const handleSubmit = () => {
    console.log(formData)
    dispatch(actualizarUsuario(formData))
    .unwrap()
    .then((updatedUser) => {
      console.log("Información actualizada exitosamente:", updatedUser);
      alert("Datos actualizados correctamente");
    })
    .catch((error) => {
      console.error("Error al actualizar la información:", error);
      alert("Hubo un problema al actualizar los datos.");
    });
  };


  useEffect(() => {
    if (currentUser) {
      setFormData({
        nombre: currentUser?.userGoogle?.nombre || currentUser?.nombre || 'sin datos',
        usuario: currentUser?.userGoogle?.usuario || currentUser?.usuario || 'sin datos',
        password: currentUser?.userGoogle?.password || currentUser?.password || 'sin datos',
        email: currentUser?.userGoogle?.email || currentUser?.email || 'sin datos',
        celular: currentUser?.userGoogle?.celular || currentUser?.celular || 'sin datos',
        cumpleanos: currentUser?.userGoogle?.cumpleanos || currentUser?.cumpleanos || 'sin datos',
        genero: currentUser?.userGoogle?.genero || currentUser?.genero || 'sin datos',
        departamento: currentUser?.userGoogle?.departamento || currentUser?.departamento || 'sin datos',
        ciudad: currentUser?.userGoogle?.ciudad || currentUser?.ciudad || 'sin datos',
        direccion: currentUser?.userGoogle?.direccion || currentUser?.direccion || 'sin datos',
      });
    }
  }, [currentUser]);

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className={`${jost} tu_info_perfil`}>
        Tu info
      </h1>
      <div className="foto_perfil mt-4 p-1">
        <Image
          src={foto ? foto : "/images/default-image.png"}
          width={160}
          height={140}
          alt={formData.nombre}
        />
      </div>
      <p className={`${sub_jost} cargar_foto_perfil m-3`}>Cargar foto</p>

      <div className="grid grid-cols-2 gap-4 m-2 grid_perfil">
        <label htmlFor="nombre" className={`${p_jost} text-right texto_etiqueta_perfil mt-2`}>Nombre completo:</label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          value={formData.nombre}
          onChange={handleChange}
          className="border p-2 campo_mi_perfil"
        />

        <label htmlFor="usuario" className={`${p_jost} text-right texto_etiqueta_perfil mt-2`}>Usuario:</label>
        <input
          id="usuario"
          name="usuario"
          type="text"
          value={formData.usuario}
          onChange={handleChange}
          className="border p-2 campo_mi_perfil"
        />

        {/* <label htmlFor="password" className={`${p_jost} text-right texto_etiqueta_perfil mt-2`}>Contraseña:</label>
        <input
          id="password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          className="border p-2 campo_mi_perfil"
        /> */}

        <label htmlFor="email" className={`${p_jost} text-right texto_etiqueta_perfil mt-2`}>Correo electrónico:</label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className="border p-2 campo_mi_perfil"
        />

        <label htmlFor="celular" className={`${p_jost} text-right texto_etiqueta_perfil mt-2`}>Número de celular:</label>
        <input
          id="celular"
          name="celular"
          type="text"
          value={formData.celular}
          onChange={handleChange}
          className="border p-2 campo_mi_perfil"
        />

        <label htmlFor="cumpleanos" className={`${p_jost} text-right texto_etiqueta_perfil mt-2`}>Cumpleaños:</label>
        <input
          id="cumpleanos"
          name="cumpleanos"
          type="date"
          value={formData.cumpleanos}
          onChange={handleChange}
          className="border p-2 campo_mi_perfil"
        />

        <label htmlFor="genero" className={`${p_jost} text-right texto_etiqueta_perfil mt-2`}>Género:</label>
        <select
          id="genero"
          name="genero"
          value={formData.genero}
          onChange={handleChange}
          className="border p-2 campo_mi_perfil"
        >
          <option value="">Selecciona tu género</option>
          <option value="Mujer">Mujer</option>
          <option value="Hombre">Hombre</option>
        </select>

        <label htmlFor="departamento" className={`${p_jost} text-right texto_etiqueta_perfil mt-2`}>Departamento:</label>
        <select
          id="departamento"
          name="departamento"
          value={formData.departamento}
          onChange={handleChange}
          className="border p-2 campo_mi_perfil"
        >
          <option value="">Selecciona tu departamento</option>
          <option value="Artigas">Artigas</option>
          <option value="Canelones">Canelones</option>
          <option value="Cerro Largo">Cerro Largo</option>
          <option value="Colonia">Colonia</option>
          <option value="Durazno">Durazno</option>
          <option value="Flores">Flores</option>
          <option value="Florida">Florida</option>
          <option value="Lavalleja">Lavalleja</option>
          <option value="Maldonado">Maldonado</option>
          <option value="Montevideo">Montevideo</option>
          <option value="Paysandú">Paysandú</option>
          <option value="Río Negro">Río Negro</option>
          <option value="Rivera">Rivera</option>
          <option value="Rocha">Rocha</option>
          <option value="Salto">Salto</option>
          <option value="San José">San José</option>
          <option value="Soriano">Soriano</option>
          <option value="Tacuarembó">Tacuarembó</option>
          <option value="Treinta y Tres">Treinta y Tres</option>
        </select>

        <label htmlFor="ciudad" className={`${p_jost} text-right texto_etiqueta_perfil mt-2`}>Ciudad:</label>
        <input
          id="ciudad"
          name="ciudad"
          type="text"
          value={formData.ciudad}
          onChange={handleChange}
          className="border p-2 campo_mi_perfil"
        />


        <label htmlFor="direccion" className={`${p_jost} text-right texto_etiqueta_perfil mt-2`}>Dirección:</label>
        <input
          id="direccion"
          name="direccion"
          type="text"
          value={formData.direccion}
          onChange={handleChange}
          className="border p-2 campo_mi_perfil"
        />
      </div>

      <button onClick={handleSubmit} className={`${sub_jost} boton_perfil`}>Actualizar datos</button>

    </div>
  )
}

export default Perfil