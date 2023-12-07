import { useState } from 'react'
import { Header } from './components/Header/Header'
import { Home } from './components/Home/Home'
import { Outlet } from 'react-router-dom'
import {MouldHeader} from './components/MouldHeader/MouldHeader'
function App() {


  return (
    <>
    <Header/>
    <MouldHeader/>
    <main>
     <Outlet/>
    </main>
     
    </>
  )
}

export default App
