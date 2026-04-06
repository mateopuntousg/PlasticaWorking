import React, { useEffect, useRef, useState } from 'react';
import './Carrusel.css';

function Carrusel() {
  // Cargar todas las imágenes de la carpeta carrusel/ dinámicamente
  const carruselContext = require.context('../../fotos/expositorias/carrusel', false, /\.(jpg|jpeg|png)$/i);
  const carruselFiles = carruselContext.keys();
  const images = carruselFiles.map(carruselContext);

  const columnRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const updateCarousel = (index) => {
    if (columnRef.current) {
      columnRef.current.style.transform = `translateX(-${index * 100}%)`;
    }
    setCurrentIndex(index);
  };

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % images.length;
    updateCarousel(newIndex);
  };

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel(newIndex);
  };

  useEffect(() => {
    intervalRef.current = setInterval(nextImage, 10000);
    return () => clearInterval(intervalRef.current);
  }, [currentIndex, images.length]);

  return (
    <section id="carrusel" className="carrusel-section">
      <button className="carrusel-nav carrusel-nav-prev" onClick={prevImage}>
        ‹
      </button>
      <div className="carrusel-column-wrapper">
        <div className="carrusel-column" ref={columnRef}>
          {images.map((src, i) => (
            <img key={i} src={src} alt={`Imagen ${i + 1}`} className="carrusel-column-image" />
          ))}
        </div>
      </div>
      <button className="carrusel-nav carrusel-nav-next" onClick={nextImage}>
        ›
      </button>
    </section>
  );
}

export default Carrusel;