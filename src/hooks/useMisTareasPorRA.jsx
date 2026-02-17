import { useEffect, useState } from "react"
import getTareasPorRA from "../servicios/Tareas/getTareasPorRA"

function useTareasPorRA() {
  const [buscando, setBuscando] = useState(false)
  const [lista, setLista] = useState([])

  function obtenerTareasPorRA() {
    setBuscando(true)
    getTareasPorRA().then((data) => {
      const tareas = Array.isArray(data) ? data : data?.["RA1"] ?? []
      setLista(tareas)
      setBuscando(false)
    })
  }

  useEffect(obtenerTareasPorRA, [])

  return { buscando, lista }
}

export default useTareasPorRA
