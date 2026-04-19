import React, { useEffect, useRef, useState, useMemo } from 'react';
import './Carrusel.css';

// Carga automática de todas las imágenes en public/fotos/expositorias/carrusel/
const carruselContext = require.context('../../public/fotos/expositorias/carrusel', false, /\.(jpe?g|png|gif|webp|avif|bmp|svg)$/i);

function Carrusel() {
  const images = useMemo(() => {
    return carruselContext.keys().map(key => carruselContext(key));
  }, []);

  const columnRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const updateCarousel = (index) => {
    if (columnRef.current) {
      columnRef.current.style.transform = `translateX(-${index * 100}%)`;
    }
    setCurrentIndex(index);
  };

  const nextImage = () => {
    if (images.length === 0) return;
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % images.length;
      if (columnRef.current) {
        columnRef.current.style.transform = `translateX(-${newIndex * 100}%)`;
      }
      return newIndex;
    });
  };

  const prevImage = () => {
    if (images.length === 0) return;
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex - 1 + images.length) % images.length;
      if (columnRef.current) {
        columnRef.current.style.transform = `translateX(-${newIndex * 100}%)`;
      }
      return newIndex;
    });
  };

  useEffect(() => {
    if (images.length === 0) return;
    const randomStart = Math.floor(Math.random() * images.length);
    updateCarousel(randomStart);
  }, [images.length]);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(nextImage, 10000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="carrusel" className="carrusel-section">
      <button className="carrusel-nav carrusel-nav-prev" onClick={prevImage}>‹</button>
      <div className="carrusel-column-wrapper">
        <div className="carrusel-column" ref={columnRef}>
          {images.map((src, i) => (
            <img key={i} src={src} alt={`Imagen ${i + 1}`} className="carrusel-column-image" />
          ))}
        </div>
      </div>
      <button className="carrusel-nav carrusel-nav-next" onClick={nextImage}>›</button>
    </section>
  );
}

export default Carrusel;
