import React, { useState } from 'react';
import './Programas.css';
import { getImagePath } from '../utils/imagePath';

function Programas() {
  const [programaExpandido, setProgramaExpandido] = useState(null);

  const programas = [
    {
      id: 1,
      titulo: 'Yoga para Equipos',
      subtitulo: 'Cooperación y Confianza en el entorno laboral',
      descripcion: 'Fortalece los vínculos dentro de tu equipo de trabajo',
      objetivos: [
        'Aumentar la cohesión y la sensación de bienestar del equipo',
        'Fomentar una atmósfera grupal de pertenencia y cooperación',
        'Ofrecer una herramienta para enfrentar desafíos personales y laborales'
      ],
      detalles: 'La misión de este programa es fortalecer los vínculos dentro del equipo, apoyar el bienestar personal y mejorar la productividad.',
      fotos: [
        getImagePath('/fotos/programas/programa-1/foto-1.jpg'),
        getImagePath('/fotos/programas/programa-1/foto-2.jpg'),
        getImagePath('/fotos/programas/programa-1/foto-3.jpg')
      ]
    },
    {
      id: 2,
      titulo: 'Coaching y Yoga para Líderes',
      subtitulo: 'Equilibrio y Claridad para un Liderazgo Efectivo',
      descripcion: 'Desarrolla un liderazgo consciente y resiliente',
      objetivos: [
        'Potenciar la Autodeterminación',
        'Fomentar la Seguridad',
        'Desarrollar la Autoconfianza',
        'Incrementar la Fuerza de Voluntad',
        'Fortalecer la Resistencia al Estrés'
      ],
      detalles: 'Ofrecemos una experiencia personalizada de Coaching, utilizando como herramienta la experiencia física y sicológica que ofrece el aprendizaje de las posturas de Yoga.',
      fotos: [
        getImagePath('/fotos/programas/programa-2/foto-1.jpg'),
        getImagePath('/fotos/programas/programa-2/foto-2.jpg'),
        getImagePath('/fotos/programas/programa-2/foto-3.jpg')
      ]
    },
    {
      id: 3,
      titulo: 'Yoga para ocupaciones de mediana y alta exigencia física',
      subtitulo: 'Biomecánica y Relajación',
      descripcion: 'Optimiza postura y bienestar en trabajos exigentes',
      objetivos: [
        'Optimizar la postura y el movimiento',
        'Reducir la fatiga',
        'Mejorar el estado anímico',
        'Reducir la tensión muscular',
        'Promover la relajación',
        'Prevenir lesiones'
      ],
      detalles: 'La práctica de Yoga permite reducir molestias físicas y equilibrar aspectos mentales y emocionales.',
      fotos: [
        getImagePath('/fotos/programas/programa-3/foto-1.jpg'),
        getImagePath('/fotos/programas/programa-3/foto-2.jpg'),
        getImagePath('/fotos/programas/programa-3/foto-3.jpg')
      ]
    }
  ];

  const toggleExpandir = (id) => {
    setProgramaExpandido(programaExpandido === id ? null : id);
  };

  return (
    <section id="programas" className="programas section">
      <div className="container">
        <h2 className="section-title">Nuestros Programas</h2>
        <p className="section-subtitle">Diseñamos programas para organizaciones y empresas que buscan mejorar el bienestar y productividad de sus equipos.</p>
        
        <div className="grid">
          {programaExpandido ? (
            // Mostrar solo el programa expandido
            programas
              .filter(p => p.id === programaExpandido)
              .map((programa) => (
                <div 
                  key={programa.id} 
                  className={`card programa-card expandido`}
                >
                  <div className="programa-header">
                    <div className="programa-titulo-grupo">
                      <h3>{programa.titulo}</h3>
                      <p className="subtitulo">{programa.subtitulo}</p>
                    </div>
                    <div className="programa-logo">
                      <img src={getImagePath('/fotos/logo/Logo Plastica Working (1).png')} alt="Plástica Working Logo" />
                    </div>
                  </div>
                  
                  <div className="programa-contenido">
                    <div className="programa-columna-izquierda">
                      <p className="detalles-texto">{programa.detalles}</p>
                      <div className="objetivos">
                        <h4>Objetivos</h4>
                        <ul>
                          {programa.objetivos.map((obj, idx) => (
                            <li key={idx}>{obj}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="programa-columna-derecha">
                      <div className="programa-galeria">
                        {programa.fotos.map((foto, idx) => (
                          <img
                            key={idx}
                            src={foto}
                            alt={`${programa.titulo} ${idx + 1}`}
                            className={
                              programa.id === 2 && idx === 1
                                ? 'programa2-foto2-ajustada'
                                : programa.id === 2 && idx === 2
                                  ? 'programa2-foto3-ajustada'
                                : programa.id === 1 && idx === 2
                                  ? 'programa1-foto3-ajustada'
                                  : ''
                            }
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <button 
                    className="btn btn-primary"
                    onClick={() => toggleExpandir(programa.id)}
                  >
                    ← Volver
                  </button>
                </div>
              ))
          ) : (
            // Mostrar todos los programas
            programas.map((programa) => (
              <div key={programa.id} className="card programa-card">
                <h3>{programa.titulo}</h3>
                <p className="subtitulo">{programa.subtitulo}</p>
                <p>{programa.descripcion}</p>
                
                <button 
                  className="btn btn-primary"
                  onClick={() => toggleExpandir(programa.id)}
                >
                  Conocer Más →
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

export default Programas;
