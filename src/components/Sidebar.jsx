import React from 'react';

function Sidebar() {
  return (
    <div className="oliven-aside">
      <div className="oliven-logo">
        <a href="index.html">
          <img src="images/logo.png" alt="" />
          <span>Ariana <small>y</small> David</span>
          <h6>17.08.2024</h6>
        </a>
      </div>
      <nav className="oliven-main-menu">
        <ul>
          <li><a href="#home">Inicio</a></li>
          <li><a href="#couple">Pareja</a></li>
          <li><a href="#story">Nuestra Historia</a></li>
          <li><a href="#whenwhere">¿Cuándo y Dónde?</a></li>
          <li><a href="#rsvp">Confirma tu asistencia</a></li>
          <li><a href="#gift">Agradecemos tu gentileza</a></li>
          <li><a href="#gallery">Galería</a></li>
        </ul>
      </nav>
      <div className="footer1">
        <span className="separator"></span>
        <p>Boda de Ariana & David <br />17 Agosto 2024, Quito</p>
      </div>
    </div>
  );
}

export default Sidebar;
