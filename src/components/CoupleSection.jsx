import React from 'react';

function CoupleSection() {
  return (
    <div id="couple" className="bridegroom clear section-padding bg-pink">
      <div className="container">
        <div className="row mb-60">
          <div className="col-md-6">
            <div
              className="item toright mb-30 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <div className="img">
                <img
                  src={require('../photos/ari-sola.jpeg')}
                  alt="Ariana"
                  style={{ height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div className="info valign">
                <div className="full-width">
                  <h6>
                    Ariana Michelle<i className="ti-heart"></i>
                  </h6>
                  <span>La novia</span>
                  <p>Mi Gatita,</p>
                  <p>
                    Dulce, tierna, correcta y llena de un sin número de virtudes
                    más, que hace de mis días, una alegría eterna.
                  </p>
                  <p>Con cariño: David.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div
              className="item mb-30 animate-box"
              data-animate-effect="fadeInRight"
            >
              <div className="img">
                <img
                  src={require('../photos/david-solo.jpeg')}
                  alt="David"
                  style={{ height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div className="info valign">
                <div className="full-width">
                  <h6>
                    David Alejandro <i className="ti-heart"></i>
                  </h6>
                  <span>El novio</span>
                  <p>
                    David es una persona con un corazón gigante, es muy noble,
                    inteligente, responsable y muy bondadoso. Me siento muy
                    afortunada por su presencia y amor en mi vida, y estoy
                    agradecida por cada momento que compartimos juntos. Su apoyo
                    constante y su cariño incondicional hacen que cada día a su
                    lado sea especial.
                  </p>
                  <p>Con cariño: Ari.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="col-md-12 text-center animate-box"
            data-animate-effect="fadeInUp"
          >
            <h3 className="oliven-couple-title">¡Nos casamos!</h3>
            <h4 className="oliven-title-meta">
              Estamos muy felices de invitarles a celebrar y compartir con
              nosotros el inicio de una vida juntos
            </h4>
            <h4 className="oliven-couple-subtitle">Agosto 17, 2024 — Quito</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoupleSection;
