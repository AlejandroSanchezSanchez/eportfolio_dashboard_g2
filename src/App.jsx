import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cabecera from './componentes/Cabecera'
import Dashboard from './componentes/Dashboard'
import Roles from './componentes/Roles'
import { TokenProvider } from './contexts/TokenContext'
import { UserProvider } from './contexts/UserContext'
import NuevaEvidencia from './componentes/NuevaEvidencia'

function App() {
  const [user, setUser] = useState({nombre : 'Alejandro', rol : 'Estudiante'})
  const token = '001';
  const menu = 'BUENAS';




  return (
    <>
      <UserProvider>
        <TokenProvider>
          <div className='container-fluid'>

          <div className='row'>
            <div className='col-12 header'><Cabecera user={user}/></div>
          </div>

          <div className='row rowMain'>
            <div className='col-4 roles'><Roles menu={menu}/></div>
            <div className='col-8 dashboard'><Dashboard token={token}/>
              <NuevaEvidencia />
            </div>
          </div>

        </div>
      </TokenProvider>
      </UserProvider>
    </>
  )
}

export default App
