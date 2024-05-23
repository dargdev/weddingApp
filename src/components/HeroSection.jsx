import React from 'react';
import anillo1 from '../photos/anillo-1.jpeg';
import anillo2 from '../photos/anillo-2.jpeg';
function HeroSection() {
  return (
    <div className="hero-section backgorund-image-ken-burns">
      <div className="slideshow">
        <div className="slideshow-image" style={{backgroundImage: `url(${anillo1})`}}></div>
        <div className="slideshow-image anillo2" style={{backgroundImage: `url(${anillo2})`}}></div>
      </div>
      <div className="container hero-inner h-100">
        <div className="row h-100">
          <div className="col-md-12 text-center">
            <h1 className="hero-title">Ariana Y David</h1>
            <p className="hero-subtitle">17 Agosto, 2024 – Quito</p>
            <div className="arrow bounce text-center">
              <a href="#couple"> <i className="ti-heart"></i> </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default HeroSection;
