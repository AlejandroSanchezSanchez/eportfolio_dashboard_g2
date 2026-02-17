import { useEffect, useState } from "react"
import { useUser } from "../contexts/UserContext"
import getModulosMatriculados from "../servicios/ModulosMatriculados/getModulosMatriculados"

function useMisModulosMatriculados() {
  const { userName } = useUser()
  const [buscando, setBuscando] = useState(false)
  const [lista, setLista] = useState([])

  function obtenerModulosMatriculados() {
    setBuscando(true)
    getModulosMatriculados().then((data) => {
      const modulos = data?.[userName]?.lista ?? []
      setLista(modulos)
      setBuscando(false)
    })
  }

  useEffect(obtenerModulosMatriculados, [userName])

  return { buscando, lista }
}

export default useMisModulosMatriculados
