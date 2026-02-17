import { useEffect, useState } from "react"
import getFamiliasProfesionales from "../servicios/FamiliasProfesionales/getFamiliasProfesionales"

function useFamiliasProfesionales() {
  const [lista, setLista] = useState([])
  const [buscando, setBuscando] = useState(false)
  const [error, setError] = useState(null)

  function cargar() {
    setBuscando(true)
    setError(null)

    getFamiliasProfesionales().then((familias) => {
      if (familias === "Error") {
        setLista([])
        setError("No se pudieron cargar las familias")
      } else {
        setLista(familias)
      }
      setBuscando(false)
    })
  }

  useEffect(cargar, [])

  return { lista, buscando, error }
}

export default useFamiliasProfesionales
