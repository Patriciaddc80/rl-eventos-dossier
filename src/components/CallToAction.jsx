import './CallToAction.css'

const CallToAction = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">¿Listos para hacer realidad vuestro día perfecto?</h2>
          <p className="cta-text">
            Contacta con nosotros y déjanos ayudarte a crear el evento de vuestros sueños
          </p>
          <a 
            href="https://wa.me/34657092014?text=Hola%2C%20me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20sobre%20vuestros%20servicios%20de%20organizaci%C3%B3n%20de%20bodas%20y%20eventos.%20Estamos%20interesados%20en%20hacer%20realidad%20nuestro%20d%C3%ADa%20perfecto." 
            className="cta-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>CONSULTAR AHORA</strong>
          </a>
        </div>
      </div>
    </section>
  )
}

export default CallToAction

