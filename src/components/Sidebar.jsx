import React, { useState } from 'react';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <button
        className={`js-oliven-nav-toggle oliven-nav-toggle ${isOpen ? 'active' : ''} menu-icon-button`}
        onClick={handleMenuToggle}
      >
        <div className="menu-icon"></div>
      </button>
      <div className={isOpen ? 'oliven-aside open' : 'oliven-aside'}>
        <div className="oliven-logo">
          <a href="index.html">
            <img src="images/logo.png" alt="" />
            <span>
              Ariana <small>y</small> David
            </span>
            <h6>17.08.2024</h6>
          </a>
        </div>
        <nav className="oliven-main-menu">
          <ul>
            <li>
              <a href="#home" onClick={handleMenuToggle}>
                Inicio
              </a>
            </li>
            <li>
              <a href="#couple" onClick={handleMenuToggle}>
                Pareja
              </a>
            </li>
            <li>
              <a href="#story" onClick={handleMenuToggle}>
                Nuestra Historia
              </a>
            </li>
            <li>
              <a href="#whenwhere" onClick={handleMenuToggle}>
                ¿Cuándo y Dónde?
              </a>
            </li>
            <li>
              <a href="#rsvp" onClick={handleMenuToggle}>
                Confirma tu asistencia
              </a>
            </li>
            <li>
              <a href="#gift" onClick={handleMenuToggle}>
                Agradecemos tu gentileza
              </a>
            </li>
            <li>
              <a href="#gallery" onClick={handleMenuToggle}>
                Galería
              </a>
            </li>
          </ul>
        </nav>
        <div className="footer1">
          <span className="separator"></span>
          <p>
            Boda de Ariana & David <br />
            17 Agosto 2024, Quito
          </p>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
