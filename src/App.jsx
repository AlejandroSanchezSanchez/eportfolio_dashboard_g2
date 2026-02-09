import { useState } from 'react'
import './App.css'
import Cabecera from './componentes/Cabecera'
import Dashboard from './componentes/Dashboard'
import Roles from './componentes/Roles'
import { TokenProvider } from './contexts/TokenContext'
import { UserProvider } from './contexts/UserContext'
import { BrowserRouter } from 'react-router-dom'

function App() {
  const [userName, setUserName] = useState('Victor');

  return (
      <UserProvider value={userName}>
        <TokenProvider>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-12 header'>
              <Cabecera />
            </div>
          </div>

          <div className='row rowMain'>
            <div className='col-4 roles'>
              <Roles />
            </div>
            <div className='col-8 dashboard'>
              <Dashboard />
            </div>
          </div>
        </div>
      </TokenProvider>
    </UserProvider>
  )
}

export default App
