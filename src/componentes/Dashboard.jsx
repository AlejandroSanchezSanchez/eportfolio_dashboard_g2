import { useToken } from "../contexts/TokenContext"
import NuevaEvidencia from "./NuevaEvidencia"

function Dashboard() {
  const { token } = useToken()

  return (
    <main>
      <p>MAIN {token}</p>
      <NuevaEvidencia />
    </main>
  )
}
export default Dashboard