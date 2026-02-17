import { useEffect, useState } from "react"
import { useUser } from "../contexts/UserContext"
import getRoles from "../servicios/Roles/getRoles"

function useRoles() {
  const { userName } = useUser()
  const [buscando, setBuscando] = useState(false)
  const [lista, setLista] = useState([])

  function obtenerRoles() {
    setBuscando(true)
    getRoles().then((data) => {
      const roles = data?.[userName]?.roles ?? []
      setLista(roles)
      setBuscando(false)
    })
  }

  useEffect(obtenerRoles, [userName])

  return { buscando, lista }
}

export default useRoles
