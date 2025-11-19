import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cabecera from './componentes/Cabecera'
import Dashboard from './componentes/Dashboard'
import Roles from './componentes/Roles'

function App() {
  const usuario = 'ALEJANDRO';
  const token = '001';
  const menu = 'BUENAS';


  return (
    <>
      <div className='container-fluid'>

        <div className='row'>
          <div className='col-12 header'><Cabecera usuario={usuario}/></div>
        </div>

        <div className='row rowMain'>
          <div className='col-4 roles'><Roles menu={menu}/></div>
          <div className='col-8 dashboard'><Dashboard token={token}/></div>
        </div>

      </div>
    </>
  )
}

export default App
