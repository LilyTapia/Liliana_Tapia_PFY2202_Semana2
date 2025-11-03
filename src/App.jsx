import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Inventory from './pages/Inventory.jsx'
import AddVehicle from './pages/AddVehicle.jsx'
import FooterNav from './components/FooterNav.jsx'
import HeaderNav from './components/HeaderNav.jsx'

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <HeaderNav />

      <main className="flex-1 px-4 py-10 md:px-6 lg:px-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quienes-somos" element={<About />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/inventario" element={<Inventory />} />
            <Route path="/ingresar-vehiculo" element={<AddVehicle />} />
          </Routes>
        </div>
      </main>

      <FooterNav />
    </div>
  )
}

export default App
