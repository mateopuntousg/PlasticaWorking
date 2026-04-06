import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Valores from './components/Valores';
import Carrusel from './components/Carrusel';
import Desafio from './components/Desafio';
import Programas from './components/Programas';
import SobreNosotros from './components/SobreNosotros';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Desafio />
      <Valores />
      <Carrusel />
      <Programas />
      <SobreNosotros />
      <Footer />
    </div>
  );
}

export default App;
