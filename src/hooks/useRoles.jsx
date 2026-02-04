import { useState } from 'react'
import rolesMock from '../mocks/mock-roles'
import { useUser } from '../contexts/UserContext'

function useRoles() {
  const { userName } = useUser()

  const [buscando] = useState(false)
  const [lista] = useState(rolesMock[userName]?.roles ?? [])

  return { buscando, lista }
}
export default useRoles