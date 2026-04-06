import React, { useEffect, useRef, useState } from 'react';
import './Hero.css';

function Hero() {
  // Array de frases inspiradoras
  const frases = [
    "¡El yoga no es solo ejercicio, es medicina para el alma!",
    "La plasticidad neuronal demuestra que nunca es tarde para cambiar.",
    "Respira profundo: cada inhalación es una nueva oportunidad.",
    "El verdadero fortalecimiento comienza cuando te aceptas a ti mismo.",
    "La cooperación amplifica la fuerza individual en equipos poderosos.",
    "La mente sigue al cuerpo, y el cuerpo sigue a la respiración.",
    "En equipo somos más fuertes, en yoga somos más sabios.",
    "La salud mental es tan importante como la física, cultívala.",
    "Cada postura es una lección de paciencia y autocompasión.",
    "La bienestar no es un destino, es un viaje de transformación.",
    "Cuando te conectas con tu cuerpo, te conectas con tu propósito.",
    "El estrés es el enemigo silencioso, el yoga es tu aliado.",
    "Una mente calmada es una mente creativa y productiva.",
    "El movimiento consciente genera cambios inconscientes profundos.",
    "La flexibilidad no es solo física, es mental y emocional.",
    "Empresas conscientes generan empleados más felices y productivos.",
    "Medita como si fuera tu trabajo más importante.",
    "La gratitud y el yoga transforman vidas.",
    "El bienestar corporativo es inversión, no gasto.",
    "Tu cuerpo es tu primer hogar, cuídalo con amor.",
    "La respiración es el puente entre cuerpo y mente.",
    "La plasticidad neuronal significa que puedes reinventarte siempre.",
    "La pausa es tan importante como la acción.",
    "Un equipo que respira junto, crece junto.",
    "La postura correcta es la que siente bien en tu cuerpo.",
    "La meditación reduce cortisol y aumenta productividad.",
    "Cada sesión de yoga es un acto de amor hacia ti mismo.",
    "La conexión mente-cuerpo es el secreto de la longevidad.",
    "El trabajo en equipo + yoga = resultados extraordinarios.",
    "La salud es la verdadera riqueza, cultívala diariamente.",
    "Inhala calma, exhala estrés, repite.",
    "La neuroplasticidad es tu superpoder latente.",
    "En el silencio encuentras las respuestas que buscas.",
    "El cuerpo calmado crea una mente brillante.",
    "Juntos somos resilientes, solos somos vulnerables.",
    "La práctica constante es la clave del crecimiento.",
    "Yoga + cooperación = bienestar integral.",
    "Tu potencial es infinito, yoga te ayuda a descubrirlo.",
    "La alineación correcta empieza en la mente.",
    "El estrés se disuelve con cada respiración consciente.",
    "Una empresa sana comienza con personas sanas.",
    "La transformación es un proceso, no un evento.",
    "Somos guardianes de nuestra propia salud mental.",
    "El movimiento es medicina, la respiración es magia.",
    "La flexibilidad mental es más valiosa que la física.",
    "El yoga enseña lo que el dinero no puede comprar.",
    "Respeta tu cuerpo, es la única casa que tienes garantizada.",
    "La meditación es el mejor antídoto contra la ansiedad.",
    "Equipo + Yoga + Cooperación = Éxito Sostenible."
  ];

  const [frasaActual, setFrasaActual] = useState(() => {
    // Elegir una frase aleatoria una sola vez al cargar
    return frases[Math.floor(Math.random() * frases.length)];
  });

  // Cargar todas las imágenes de la carpeta hero/ dinámicamente
  const heroContext = require.context('../../fotos/expositorias/hero', false, /\.(jpg|jpeg|png)$/i);
  const heroFiles = heroContext.keys();
  const images = heroFiles.map(heroContext);

  const imageRef = useRef(null);

  useEffect(() => {
    let index = 0;
    const total = images.length * 2;
    const interval = setInterval(() => {
      index = (index + 1) % total;
      if (imageRef.current) {
        imageRef.current.style.transform = `translateX(-${index * 100}%)`;
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="inicio" className="hero">
      <div className="hero-gallery-wrapper">
        <div className="hero-gallery" ref={imageRef}>
          {[...images, ...images].map((src, i) => (
            <img key={i} src={src} alt={`Hero ${(i % images.length) + 1}`} className="hero-gallery-image" />
          ))}
        </div>
        <div className="hero-overlay"></div>
      </div>
      <div className="hero-content">
        <h1>Pertenencia • Cooperación • Bienestar</h1>
        <p>Somos una innovadora consultora motivada por promover una mejor calidad de vida para personas y organizaciones. Nuestro foco de acción es el aprendizaje experiencial, nuestro eje conceptual la plasticidad neuronal y nuestra herramienta la enseñanza del Yoga.</p>
        
        <div className="frase-mentor">
          <p>💡 {frasaActual}</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
