function Contact() {
  return (
    <div className="page contact">
      <section className="section">
        <h2 className="section-title">Contáctanos</h2>
        <p>
          Déjanos tus datos y un especialista se comunicará contigo dentro de
          las próximas 2 horas hábiles para ayudarte a elegir tu próximo
          vehículo.
        </p>
      </section>

      <section className="contact-grid">
        <div className="contact-card">
          <h3 className="section-subtitle">Canales de atención</h3>
          <ul className="contact-list">
            <li>Teléfono: +56 2 2789 0001</li>
            <li>WhatsApp: +56 9 8765 4432</li>
            <li>Email: contacto@novadrive.cl</li>
          </ul>
          <p className="contact-schedule">
            Lunes a viernes de 9:00 a 19:00 hrs. Sábados de 10:00 a 14:00 hrs.
          </p>
        </div>

        {/* Formulario simple para enviar la solicitud de asesoría. */}
        <form className="contact-form">
          <h3 className="section-subtitle">Solicitud de asesoría</h3>
          <label>
            Nombre y apellido
            <input type="text" name="name" placeholder="Ej. Camila Pérez" />
          </label>
          <label>
            Correo electrónico
            <input
              type="email"
              name="email"
              placeholder="Ej. camila@email.com"
            />
          </label>
          <label>
            Modelo de interés
            <input
              type="text"
              name="model"
              placeholder="SUV, Sedán, Pickup..."
            />
          </label>
          <label>
            Comentarios adicionales
            <textarea
              name="message"
              rows="4"
              placeholder="Cuéntanos en qué etapa del proceso te encuentras"
            />
          </label>
          <button type="submit">Enviar solicitud</button>
        </form>
      </section>
    </div>
  )
}

export default Contact
