import React, { useEffect, useRef, useState } from 'react';
import './SobreNosotros.css';
import { getImagePath } from '../utils/imagePath';

function SobreNosotros() {
  const videos = [1, 2, 3, 4, 5].map((id) => getImagePath(`/sobrenosotros/videos/${id}.mp4`));
  const [videoActual, setVideoActual] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [fraseActual, setFraseActual] = useState('');
  const videoRef = useRef(null);

  useEffect(() => {
    let isMounted = true;

    const cargarFrase = async () => {
      try {
        const rutaFrase = getImagePath(`/sobrenosotros/frases/${videoActual + 1}.txt`);
        const response = await fetch(rutaFrase);
        const text = await response.text();
        const normalizada = text
          .trim()
          .replace(/^['"“”]+/, '')
          .replace(/['"“”]+$/, '');

        if (isMounted) {
          setFraseActual(normalizada);
        }
      } catch (error) {
        if (isMounted) {
          setFraseActual('');
        }
      }
    };

    cargarFrase();

    return () => {
      isMounted = false;
    };
  }, [videoActual]);

  const irVideoAnterior = () => {
    setVideoActual((prev) => (prev - 1 + videos.length) % videos.length);
    setIsPlaying(false);
  };

  const irVideoSiguiente = () => {
    setVideoActual((prev) => (prev + 1) % videos.length);
    setIsPlaying(false);
  };

  const reproducirVideo = async () => {
    if (!videoRef.current) return;

    try {
      await videoRef.current.play();
      setIsPlaying(true);
    } catch (error) {
      setIsPlaying(false);
    }
  };

  const pausarVideo = () => {
    if (!videoRef.current) return;
    videoRef.current.pause();
    setIsPlaying(false);
  };

  const equipo = [
    {
      id: 1,
      nombre: 'Magdalena Goddard',
      rol: 'Directora de Proyecto',
      foto: getImagePath('/fotos/personas/Magdalena.jpg'),
      especialidades: [
        'Socióloga, Posgrado en Cooperación para el Desarrollo',
        'Coach Newfield Network',
        'Practitioner PNL Impact',
        'Profesora Certificada de Yoga Integral',
        'Especialización en Yoga Terapia Motora',
        'Profesora Certificada Aero Yoga',
        'Diversos Cursos Yoga Iyengar'
      ],
      descripcion: 'Directora y fundadora con más de 20 años de experiencia en diseño e implementación de clases de yoga en diversos contextos.'
    },
    {
      id: 2,
      nombre: 'Claudia Zepeda',
      rol: 'Profesora de Yoga',
      foto: getImagePath('/fotos/personas/claudia.jpg'),
      especialidades: [
        'Profesora Certificada de Hatha Yoga',
        'Escuela Chilena de Yoga',
        'Profesora Certificada Aero Yoga',
        'Especialización en Yoga Nidra y Meditación'
      ],
      descripcion: 'Experta en técnicas de relajación y meditación, especializada en yoga nidra para el bienestar integral.'
    },
    {
      id: 3,
      nombre: 'Jandy Ruiz',
      rol: 'Profesora de Yoga',
      foto: getImagePath('/fotos/personas/handi.jpg'),
      especialidades: [
        'Profesora Certificada Dynamic Yoga',
        'Profesora Certificada Aero Yoga',
        'Especialización en Biometría del Yoga',
        'Especialización en Anatomía Aplicada al Yoga'
      ],
      descripcion: 'Especialista en biomecánica y movimiento, enfocada en la prevención de lesiones y optimización postural.'
    }
  ];

  return (
    <section id="sobre-nosotros" className="sobre-nosotros section">
      <div className="container">
        <h2 className="section-title">Sobre Nosotros</h2>

        <div className="testimonios-container">
          <p className="subsection-subtitle">Lo que dicen de la experiencia YogaTeamWorking.</p>

          <div className="testimonios-video-wrapper">
            <button
              type="button"
              className="testimonios-nav testimonios-nav-prev"
              onClick={irVideoAnterior}
              aria-label="Video anterior"
            >
              {'<'}
            </button>

            <div className="testimonio-video-frame">
              <video
                key={videos[videoActual]}
                ref={videoRef}
                className="testimonio-video"
                src={videos[videoActual]}
                playsInline
                preload="metadata"
                controls={isPlaying}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
              />

              {!isPlaying && (
                <button
                  type="button"
                  className="testimonio-play"
                  onClick={reproducirVideo}
                  aria-label="Reproducir video"
                >
                  <span className="play-icon" aria-hidden="true" />
                </button>
              )}

              {isPlaying && (
                <button
                  type="button"
                  className="testimonio-pause"
                  onClick={pausarVideo}
                  aria-label="Pausar video"
                >
                  ||
                </button>
              )}
            </div>

            <button
              type="button"
              className="testimonios-nav testimonios-nav-next"
              onClick={irVideoSiguiente}
              aria-label="Video siguiente"
            >
              {'>'}
            </button>
          </div>

          {fraseActual && (
            <p className="testimonio-frase">"{fraseActual}"</p>
          )}
        </div>

        <div className="equipo-container">
          <h3 className="subsection-title">Nuestro Equipo</h3>
          <div className="grid grid-3">
            {equipo.map((miembro) => (
              <div key={miembro.id} className="equipo-card">
                <img
                  src={miembro.foto}
                  alt={miembro.nombre}
                  className={`equipo-foto equipo-foto-${miembro.id}`}
                />
                <h4>{miembro.nombre}</h4>
                <p className="equipo-rol">{miembro.rol}</p>
                <p className="equipo-descripcion">{miembro.descripcion}</p>

                <div className="equipo-especialidades">
                  <h5>Especialidades:</h5>
                  <ul>
                    {miembro.especialidades.map((esp, index) => (
                      <li key={index}>{esp}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SobreNosotros;
