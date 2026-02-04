import { useUser } from '../contexts/UserContext'
import MenuLateral from './MenuLateral'

function Roles() {
  const { userName } = useUser()

  return (
    <aside>
      <p>NOMBRE: {userName}</p>
      <MenuLateral />
    </aside>
  )
}
export default Roles