import Navbar from './components/Navbar'
import Hero from './components/Hero'
import QuienesSomos from './components/QuienesSomos'
import Servicios from './components/Servicios'
import DecoracionFloral from './components/DecoracionFloral'
import Precios from './components/Precios'
import Rincones from './components/Rincones'
import Packs from './components/Packs'
import Testimonios from './components/Testimonios'
import Proceso from './components/Proceso'
import Galeria from './components/Galeria'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <main className="main-content">
        <QuienesSomos />
        <Servicios />
        <DecoracionFloral />
        <Precios />
        <Rincones />
        <Packs />
        <Testimonios />
        <Proceso />
        <Galeria />
      </main>
      <CallToAction />
      <Footer />
    </div>
  )
}

export default App

