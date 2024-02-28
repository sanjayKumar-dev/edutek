import { useEffect, useState } from 'react'
import './App.css'
import Header from './component/header/Header'
import Sidenav from './component/sidenav/Sidenav'
import { Outlet, RouterProvider } from 'react-router-dom'
import appRoutes from './utils/routes'

function App() {
  const [isSidenavOpen, setIsSidenavOpen] = useState(false)
  const handleSidenavOpen = () => {
    setIsSidenavOpen(!isSidenavOpen)
  }

  useEffect(() => {
    setIsSidenavOpen(window.innerWidth >= 768)
  }, [])

  return (
    <div className="app flex">
      <div className={isSidenavOpen ? "sidenav open" : "sidenav"}>
        <Sidenav />
      </div>
      <div className="content-wrapper">
        <div>
          <Header handleSidenav={handleSidenavOpen} />
        </div>
        <div className='m-6'>
          <RouterProvider router={appRoutes}>
            <Outlet />
          </RouterProvider>
        </div>
      </div>
    </div>
  )
}

export default App
