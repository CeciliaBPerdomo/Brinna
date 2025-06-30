// Componente Perfil completo con Tailwind sin sombra

import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actualizarUsuario, subirImagenPerfil } from "../../../lib/usuariosSlice";
import Image from 'next/image';
import { Jost } from "next/font/google";

const jost = Jost({ weight: "600", subsets: ['latin'] });
const p_jost = Jost({ weight: "500", subsets: ['latin'] });
const sub_jost = Jost({ weight: "400", subsets: ['latin'] });

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
    foto: currentUser?.userGoogle?.photoURL || currentUser?.foto || ''
  };

  const [formData, setFormData] = useState(initialValues);
  const [modalOpen, setModalOpen] = useState(false);
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) setFile(selectedFile);
  };

  const handleSubmit = () => {
    dispatch(actualizarUsuario(formData))
      .unwrap()
      .then(() => alert("Datos actualizados correctamente"))
      .catch(() => alert("Hubo un problema al actualizar los datos."));
  };

  const handleConfirmFile = () => {
    if (file) {
      dispatch(subirImagenPerfil(file))
        .unwrap()
        .then(() => setModalOpen(false))
        .catch((error) => console.error("Error al subir la imagen:", error));
    }
  };

  useEffect(() => {
    if (currentUser) setFormData(initialValues);
  }, [currentUser]);

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className={`${jost.className} text-[#CA4E3C] text-[30px] leading-[40px]`}>Tu info</h1>

      <div className="w-[140px] h-[140px] rounded-full border-2 border-[#CA4E3C] mt-4 p-1">
        <Image
          src={formData.foto ? formData.foto : "/images/default-image.png"}
          width={140}
          height={140}
          alt={formData.nombre}
          className="rounded-full"
        />
      </div>

      <p
        onClick={() => setModalOpen(true)}
        className={`${sub_jost.className} text-black text-center text-[12px] my-3 cursor-pointer`}
      >
        Cargar foto
      </p>

      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-md w-[300px] text-center">
            <h2 className={`${jost.className} text-lg mb-4`}>Seleccionar nueva imagen</h2>
            <input type="file" onChange={handleFileChange} />
            <div className="flex justify-between mt-4">
              <button
                onClick={handleConfirmFile}
                className={`${sub_jost.className} bg-green-600 text-white px-4 py-2 rounded`}
              >Confirmar</button>
              <button
                onClick={() => setModalOpen(false)}
                className={`${sub_jost.className} bg-red-600 text-white px-4 py-2 rounded`}
              >Cancelar</button>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-3xl mt-6">
        {["nombre","usuario","email","celular","cumpleanos","ciudad","direccion"].map((name) => (
          <div key={name} className="flex flex-col">
            <label htmlFor={name} className={`${p_jost.className} text-black text-lg mb-1 capitalize`}>
              {name === "cumpleanos" ? "Cumpleaños" : name.charAt(0).toUpperCase() + name.slice(1)}:
            </label>
            <input
              id={name}
              name={name}
              type={name === "cumpleanos" ? "date" : name === "email" ? "email" : "text"}
              value={formData[name]}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded"
            />
          </div>
        ))}

        <div className="flex flex-col">
          <label htmlFor="genero" className={`${p_jost.className} text-black text-lg mb-1`}>Género:</label>
          <select
            id="genero"
            name="genero"
            value={formData.genero}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded"
          >
            <option value="">Selecciona tu género</option>
            <option value="Mujer">Mujer</option>
            <option value="Hombre">Hombre</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="departamento" className={`${p_jost.className} text-black text-lg mb-1`}>Departamento:</label>
          <select
            id="departamento"
            name="departamento"
            value={formData.departamento}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded"
          >
            <option value="">Selecciona tu departamento</option>
            {["Artigas","Canelones","Cerro Largo","Colonia","Durazno","Flores","Florida","Lavalleja","Maldonado","Montevideo","Paysandú","Río Negro","Rivera","Rocha","Salto","San José","Soriano","Tacuarembó","Treinta y Tres"].map(dep => (
              <option key={dep} value={dep}>{dep}</option>
            ))}
          </select>
        </div>
      </div>

      <button
        onClick={handleSubmit}
        className={`${sub_jost.className} mt-8 bg-[#CA4E3C] text-white text-[20px] px-6 py-2 rounded-full`}
      >
        Actualizar datos
      </button>
    </div>
  );
}

export default Perfil;
