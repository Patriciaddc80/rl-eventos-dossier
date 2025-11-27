import { useEffect } from 'react'
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
  // Preload global agresivo de TODAS las imágenes críticas al montar la app
  useEffect(() => {
    // Imágenes del Hero (máxima prioridad)
    const criticalImages = [
      '/assets/img/logo.png',
      '/assets/img/ring-wedding3.png',
      '/assets/deco-florales/1130.webp'
    ]
    
    criticalImages.forEach(src => {
      const img = new Image()
      img.src = src
    })

    // Prefetch masivo de todas las demás imágenes en segundo plano
    const prefetchImages = [
      '/assets/img/image36.jpeg',
      '/assets/img/testimonial1.jpeg',
      '/assets/img/testimonial2.jpeg',
      '/assets/img/testimonial3.jpeg',
      '/assets/material-img/619.jpg',
      '/assets/material-img/1521.jpg'
    ]

    // Prefetch después de un pequeño delay para no bloquear la carga crítica
    setTimeout(() => {
      prefetchImages.forEach(src => {
        const link = document.createElement('link')
        link.rel = 'prefetch'
        link.as = 'image'
        link.href = src
        document.head.appendChild(link)
      })
    }, 100)
  }, [])

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

