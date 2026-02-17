import { useState } from 'react'
import mock_impartidos from '../mocks/mock-impartidos'
import { useUser } from '../contexts/UserContext'

function useMisModulosImpartidosMock() {
  const { userName } = useUser()

  const [buscando] = useState(false)
  const [lista] = useState(mock_impartidos[userName]?.lista ?? [])

  return { buscando, lista }
}
export default useMisModulosImpartidosMock