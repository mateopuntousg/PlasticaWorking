import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './Contacto.css';

function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: ''
  });

  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState(false);
  const [cargando, setCargando] = useState(false);

  // Inicializar EmailJS (reemplaza con tu Public Key de EmailJS)
  useEffect(() => {
    emailjs.init('YOUR_PUBLIC_KEY_HERE'); // Lo cambiarás cuando crees la cuenta
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCargando(true);
    setError(false);

    // Parámetros del email que EmailJS enviará
    const templateParams = {
      to_email: 'tu_email@gmail.com', // Reemplaza con tu email
      from_name: formData.nombre,
      from_email: formData.email,
      phone: formData.telefono,
      subject: formData.asunto,
      message: formData.mensaje
    };

    emailjs.send(
      'YOUR_SERVICE_ID_HERE', // Lo cambiarás cuando crees la cuenta
      'YOUR_TEMPLATE_ID_HERE', // Lo cambiarás cuando crees la cuenta
      templateParams
    )
    .then((response) => {
      console.log('Email enviado:', response);
      setCargando(false);
      setEnviado(true);
      setFormData({ nombre: '', email: '', telefono: '', asunto: '', mensaje: '' });
      setTimeout(() => setEnviado(false), 5000);
    })
    .catch((error) => {
      console.error('Error al enviar email:', error);
      setCargando(false);
      setError(true);
      setTimeout(() => setError(false), 5000);
    });
  };

  return (
    <section id="contacto" className="contacto section">
      <div className="container">
        <h2 className="section-title">Contáctanos</h2>
        <div className="contacto-grid">
          <div className="contacto-info">
            <h3>¿Listo para Transformar tu Empresa?</h3>
            <p>Estamos aquí para responder tus preguntas y ayudarte a encontrar el programa perfecto para tu empresa.</p>
            
            <div className="info-item">
              <div className="info-icon">📧</div>
              <div className="info-content">
                <h4>Email</h4>
                <p>plasticaworking@gmail.com</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📱</div>
              <div className="info-content">
                <h4>Teléfono</h4>
                <p>+56 9 9178 0363</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📍</div>
              <div className="info-content">
                <h4>Ubicación</h4>
                <p>Santiago, Chile</p>
              </div>
            </div>

            <div className="info-item whatsapp-item">
              <a href="https://wa.me/56991780363" target="_blank" rel="noopener noreferrer" className="whatsapp-button">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor">
                  <path d="M20 2C10.06 2 2 10.06 2 20c0 3.15.79 6.13 2.19 8.72L2.69 38l9.8-2.5C15.26 37.31 17.59 38 20 38c9.94 0 18-8.06 18-18S29.94 2 20 2m0 33.5c-2.07 0-4.1-.53-5.88-1.54l-.42-.25-4.35 1.11 1.13-4.15-.26-.42C4.26 24.55 3.5 22.36 3.5 20 3.5 11.04 10.54 4 19.5 4s16 7.04 16 15.5S28.96 35.5 20 35.5m8.89-10.4c-.49-.24-2.89-1.43-3.34-1.59-.45-.16-.77-.24-1.1.25-.32.49-1.26 1.59-1.55 1.92-.29.33-.58.37-1.07.12-.49-.25-2.06-.76-3.93-2.42-1.45-1.29-2.43-2.89-2.71-3.38-.28-.49-.03-.76.21-1 .21-.21.49-.55.73-.82.24-.27.32-.46.48-.78.16-.32.08-.6-.04-.84-.12-.24-1.1-2.65-1.51-3.63-.39-.94-.8-.82-1.1-.83-.28-.01-.6-.01-.92-.01-.32 0-.84.12-1.28.58-.44.46-1.7 1.66-1.7 4.05s1.74 4.7 1.98 5.03c.24.33 3.36 5.14 8.14 7.21 1.14.5 2.03.8 2.72 1.02 1.14.37 2.18.31 3.01.19.92-.13 2.89-.99 3.3-1.94.4-.96.4-1.77.28-1.94-.12-.17-.44-.27-.93-.51z"/>
                </svg>
              </a>
              <div className="info-content">
                <h4>WhatsApp</h4>
                <a href="https://wa.me/56991780363" target="_blank" rel="noopener noreferrer" className="whatsapp-link">
                  +56 9 9178 0363
                </a>
              </div>
            </div>
          </div>

          <form className="contacto-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nombre">Nombre Completo</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="telefono">Teléfono</label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="asunto">Asunto</label>
              <input
                type="text"
                id="asunto"
                name="asunto"
                value={formData.asunto}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="mensaje">Mensaje</label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows="5"
                value={formData.mensaje}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary" disabled={cargando}>
              {cargando ? 'Enviando...' : 'Enviar Mensaje'}
            </button>
            {enviado && <div className="mensaje-exito">¡Mensaje enviado exitosamente!</div>}
            {error && <div className="mensaje-error">Error al enviar el mensaje. Intenta nuevamente.</div>}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contacto;
