import { useState } from 'react'
import mock_matriculados from '../mocks/mock-matriculados'
import { useUser } from '../contexts/UserContext'

function useMisModulosMatriculados() {
  const { userName } = useUser()

  const [buscando] = useState(false)
  const [lista] = useState(mock_matriculados[userName]?.lista ?? [])

  return { buscando, lista }
}
export default useMisModulosMatriculados