import { useUser } from '../contexts/UserContext'

 function Cabecera() {
  const { userName } = useUser()
  return (
    <header>
        <h1>PÁGINA DE ALEJANDRO SÁNCHEZ</h1>
      <p>Usuario Autenticado: {userName}</p>
    </header>
  )
}
export default Cabecera
