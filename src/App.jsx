import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Hero from './Hero'
import Ourwork from './Ourwork'
import Services from './Services'
import JoinTeam from './JoinTeam'
import Footer from './Footer'
import Popup from './Popup'

import Header from './Header'

function Layout() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/our-work" element={<Ourwork />} />
        <Route path="/services" element={<Services />} />
        <Route path="/join-team" element={<JoinTeam />} />
      </Routes>
      {/* Footer on every page */}
      <Footer />
    </>
  )
}

export default function App() {
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 1800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <BrowserRouter>
      <Layout />
      <Popup showPopup={showPopup} setShowPopup={setShowPopup} />
    </BrowserRouter>
  )
}
