import { useEffect } from 'react'
import { BrowserRouter, Outlet, Route, Routes, useLocation } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import Products from './pages/Products'
import Events from './pages/Events'
import Contact from './pages/Contact'

function Layout() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [location.pathname])

  return (
    <>
      <NavBar />
      <Outlet />
      <Footer bordered={isHome} />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="products" element={<Products />} />
          <Route path="events" element={<Events />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
