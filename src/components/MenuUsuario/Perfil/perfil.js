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
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className={`${jost} tu_info_perfil`}>
        Tu info
      </h1>
      <div className="foto_perfil mt-4"></div>
      <p className={`${sub_jost} cargar_foto_perfil m-3`}>Cargar foto</p>

      <div className="grid grid-cols-2 gap-4 m-2 grid_perfil">
        <label for="campo1" className={`${p_jost} text-right texto_etiqueta_perfil mt-2`}>
          Nombre completo:
        </label>
        <input id="campo1" type="text" className="border p-2 campo_mi_perfil" />

        <label for="campo2" className={`${p_jost} text-right texto_etiqueta_perfil mt-2`}>
          Usuario:
        </label>
        <input id="campo2" type="text" className="border p-2 campo_mi_perfil" />

        <label for="campo3" className={`${p_jost} text-right texto_etiqueta_perfil mt-2`}>
          Correo electrónico:
        </label>
        <input id="campo3" type="text" className="border p-2 campo_mi_perfil" />

        <label for="campo4" className={`${p_jost} text-right texto_etiqueta_perfil mt-2`}>
          Número de celular:
        </label>
        <input id="campo4" type="text" className="border p-2 campo_mi_perfil" />


        <label for="campo5" className={`${p_jost} text-right texto_etiqueta_perfil mt-2`}>
          Cumpleaños:
        </label>
        <input id="campo5" type="text" className="border p-2 campo_mi_perfil" />


        <label for="campo6" className={`${p_jost} text-right texto_etiqueta_perfil mt-2`}>
          Género:
        </label>
        <input id="campo6" type="text" className="border p-2 campo_mi_perfil" />


        <label for="campo7" className={`${p_jost} text-right texto_etiqueta_perfil mt-2`}>
          Departamento:
        </label>
        <input id="campo7" type="text" className="border p-2 campo_mi_perfil" />


        <label for="campo8" className={`${p_jost} text-right texto_etiqueta_perfil mt-2`}>
          Ciudad:
        </label>
        <input id="campo8" type="text" className="border p-2 campo_mi_perfil" />


        <label for="campo9" className={`${p_jost} text-right texto_etiqueta_perfil mt-2`}>
          Dirección:
        </label>
        <input id="campo9" type="text" className="border p-2 campo_mi_perfil" />
      </div>

      <button className={`${sub_jost} boton_perfil`}>Actualizar datos</button>

    </div>
  )
}

export default Perfil