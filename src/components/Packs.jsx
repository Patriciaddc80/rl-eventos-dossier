import './Packs.css'

const Packs = () => {
  const packs = [
    {
      title: 'Pack Básico',
      features: [
        'Coordinación del día',
        'Supervisión de proveedores',
        'Control de tiempos'
      ],
      featured: false,
      whatsappMessage: 'Hola%2C%20me%20interesa%20el%20Pack%20B%C3%A1sico.%20Me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20sobre%20vuestros%20servicios%20y%20precios.'
    },
    {
      title: 'Pack Completo',
      features: [
        'Organización integral',
        'Diseño y decoración',
        'Coordinación del día',
        '2 Rincones especiales',
        'Decoración Floral'
      ],
      featured: false,
      whatsappMessage: 'Hola%2C%20me%20interesa%20el%20Pack%20Completo.%20Me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20sobre%20vuestros%20servicios%20y%20precios.'
    },
    {
      title: 'Pack Premium',
      features: [
        'Todo el Pack Completo',
        'Invitaciones personalizadas',
        'Noche para novios Deluxe',
        'Decoración Floral'
      ],
      featured: true,
      whatsappMessage: 'Hola%2C%20me%20interesa%20el%20Pack%20Premium.%20Me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20sobre%20vuestros%20servicios%20y%20precios.'
    }
  ]

  return (
    <section id="packs" className="section section-alt">
      <div className="container">
        <header className="section-header">
          <h2 className="section-title">NUESTROS PACKS</h2>
          <div className="section-divider"></div>
          <h3 className="section-subtitle">
            Packs especiales para hacer de tu evento una experiencia inolvidable
          </h3>
        </header>
        
        <div className="packs-container-inline">
          <div className="pack-grid-inline">
            {packs.map((pack, index) => (
              <div 
                key={index} 
                className={`pack-card-inline ${pack.featured ? 'pack-featured-inline' : ''}`}
              >
                {pack.featured && (
                  <div className="pack-badge-inline">Popular</div>
                )}
                <h3>{pack.title}</h3>
                <ul className="pricing-card-list">
                  {pack.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <a 
                  href={`https://wa.me/34657092014?text=${pack.whatsappMessage}`}
                  className="price-tag-inline consultar-btn" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <strong>CONSULTAR</strong>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Packs

