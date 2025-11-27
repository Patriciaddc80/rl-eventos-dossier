import { useState, useEffect } from 'react'
import './Navbar.css'

const menuItems = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'quienes-somos', label: 'Quiénes Somos' },
  { id: 'servicios', label: 'Servicios' },
  { id: 'decoracion-floral', label: 'Decoración Floral' },
  { id: 'precios', label: 'Precios' },
  { id: 'rincones', label: 'Rincones' },
  { id: 'packs', label: 'Packs' },
  { id: 'testimonios', label: 'Testimonios' },
  { id: 'proceso', label: 'Proceso' },
  { id: 'galeria', label: 'Galería' },
  { id: 'contacto', label: 'Contacto' }
]

// Enlaces permitidos solo en el menú hamburguesa móvil
const mobileMenuItems = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'quienes-somos', label: 'Quiénes Somos' },
  { id: 'servicios', label: 'Servicios' },
  { id: 'galeria', label: 'Galería' },
  { id: 'contacto', label: 'Contacto' }
]

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVerticalPanelOpen, setIsVerticalPanelOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      
      const sections = menuItems.map(item => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && sections[i].offsetTop <= scrollPosition) {
          setActiveSection(menuItems[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Llamar una vez al montar
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (id) => {
    setIsMenuOpen(false)
    
    // Si es contacto, hacer scroll al footer
    if (id === 'contacto') {
      const footer = document.querySelector('footer')
      if (footer) {
        const offset = 70
        const footerPosition = footer.getBoundingClientRect().top
        const offsetPosition = footerPosition + window.pageYOffset - offset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
        return
      }
    }
    
    const element = document.getElementById(id)
    if (element) {
      const offset = 70
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    } else {
      // Si la sección no existe, hacer scroll al inicio
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }

  return (
    <>
      <nav 
        className={`navbar mobile-only ${isScrolled ? 'scrolled' : ''}`} 
        role="navigation" 
        aria-label="Navegación principal"
      >
        <div className="nav-brand">
          <a 
            href="#inicio" 
            className="nav-logo-link" 
            aria-label="Ir al inicio"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('inicio')
            }}
          >
            <img 
              src="/assets/img/logo.png" 
              alt="Logo Rocío López" 
              className="nav-logo" 
              width="50" 
              height="50"
              fetchPriority="high"
              decoding="async"
            />
          </a>
        </div>
        
        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          id="hamburger"
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div 
          className={`nav-menu-overlay ${isMenuOpen ? 'active' : ''}`} 
          onClick={() => setIsMenuOpen(false)}
          onKeyDown={(e) => {
            if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
              setIsMenuOpen(false)
            }
          }}
          role="button"
          tabIndex={0}
          aria-label="Cerrar menú"
        ></div>
        
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`} id="navMenu" role="menu">
          {mobileMenuItems.map((item) => (
            <li key={item.id} role="menuitem">
              <a
                href={`#${item.id}`}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(item.id)
                }}
              >
                <span className="nav-link-text">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Header vertical con pestañas en el lado derecho */}
      <aside className="vertical-header desktop-only" role="navigation" aria-label="Navegación vertical">
        {/* Botón Inicio para abrir panel */}
        <button
          className={`vertical-header-toggle ${isVerticalPanelOpen ? 'active' : ''}`}
          onClick={() => setIsVerticalPanelOpen(!isVerticalPanelOpen)}
          aria-label={isVerticalPanelOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isVerticalPanelOpen}
        >
          <span className="vertical-header-toggle-text">INICIO</span>
          <span className={`vertical-header-toggle-icon ${isVerticalPanelOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>

        {/* Panel con enlaces */}
        <div className={`vertical-nav-panel ${isVerticalPanelOpen ? 'open' : ''}`}>
          <ul className="vertical-nav-tabs">
            {menuItems.map((item) => (
              <li key={item.id} className="vertical-nav-tab">
                <a
                  href={`#${item.id}`}
                  className={`vertical-nav-link ${activeSection === item.id ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(item.id)
                    setIsVerticalPanelOpen(false)
                  }}
                  aria-label={`Ir a ${item.label}`}
                >
                  <span className="vertical-nav-label">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  )
}

export default Navbar

