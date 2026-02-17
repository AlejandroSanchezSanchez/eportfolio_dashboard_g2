import { useEffect, useState } from "react"
import { useUser } from "../contexts/UserContext"
import getModulosImpartidos from "../servicios/ModulosImpartidos/getModulosImpartidos"

function useMisModulosImpartidos() {
  const { userName } = useUser()
  const [buscando, setBuscando] = useState(false)
  const [lista, setLista] = useState([])

  function obtenerModulosImpartidos() {
    setBuscando(true)
    getModulosImpartidos().then((data) => {
      const modulos = data?.[userName]?.lista ?? []
      setLista(modulos)
      setBuscando(false)
    })
  }

  useEffect(obtenerModulosImpartidos, [userName])

  return { buscando, lista }
}

export default useMisModulosImpartidos
