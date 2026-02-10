import { useUser } from '../contexts/UserContext'
import Menu from './Menu/Menu'

function Roles() {
  const { userName } = useUser()

  return (
    <aside>
      <p>NOMBRE: {userName}</p>
      <Menu />
    </aside>
  )
}

export default Roles
