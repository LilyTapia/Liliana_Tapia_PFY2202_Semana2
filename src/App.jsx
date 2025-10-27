import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import FooterNav from './components/FooterNav.jsx'
import bannerImage from './assets/img/Banner.png'
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="hero-banner">
        <picture>
          <source
            srcSet={bannerImage}
            media="(min-width: 769px)"
          />
          <img
            className="hero-banner__image"
            src={bannerImage}
            alt="SUV destacado en promoción NovaDrive"
          />
        </picture>
      </header>

      <main className="content">
        {/* Definición de las pantallas principales según los requisitos de la pauta. */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quienes-somos" element={<About />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </main>

      {/* Menú inferior persistente para permitir la navegación en todo momento. */}
      <FooterNav />
    </div>
  )
}

export default App
