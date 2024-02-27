import { useState } from 'react'
import './App.css'
import Header from './component/header/Header'
import Sidenav from './component/sidenav/Sidenav'
import Student from './component/student/Student'

function App() {
  const [isSidenavOpen, setIsSidenavOpen] = useState(false)
  const handleSidenavOpen = () => {
    setIsSidenavOpen(!isSidenavOpen)
  }

  return (
    <div className="app flex">
      <div className={isSidenavOpen ? "sidenav open" : "sidenav"}>
        <Sidenav />
      </div>
      <div className="content-wrapper">
        <div>
          <Header handleSidenav={handleSidenavOpen} />
        </div>
        <div>
          <Student />
        </div>
      </div>
    </div>
  )
}

export default App
