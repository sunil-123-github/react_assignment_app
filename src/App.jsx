import { useState } from 'react'
import { Header } from './components/Header/Header'
import { Home } from './components/Home/Home'
import { Outlet, useLocation } from 'react-router-dom'
import { MouldHeader } from './components/MouldHeader/MouldHeader'
import { useSelector } from 'react-redux'
// import { Home } from './components/Home/Home'

function App() {

  let location = useLocation()
  let currentURL = location.pathname;
  let Location = undefined;
  Location = currentURL === '/new-mould-mfg-tracking' || currentURL === '/assign-mould-(supplier&life)';
  Location = currentURL === '/';

  return (
    <>
      {Location ? null : <Header />}
      {Location ? null : <MouldHeader />}
      <main>
        <Outlet />
      </main>
    </>
  )

}

export default App
