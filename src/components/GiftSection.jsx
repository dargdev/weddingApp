import React from 'react';

function GiftSection() {
  return (
    <div id="gift" className="gift-section gift">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-30">
            <br />
            <span className="oliven-title-meta" style={{ textAlign: 'center' }}>
              Agradecemos su gentileza
            </span>
            <br />
            <div
              className="row"
              style={{ justifyContent: 'center', alignItems: 'center' }}
            >
              <p className="agradecemos">
                Tú presencia es el mejor regalo pero si quieres tener un detalle
                con nosotros nos puedes apoyar a esta cuenta
              </p>
            </div>
            <div className="oliven-logo">
              <img src={require('../images/logo.png')} alt="" />
            </div>
            <div style={{ fontFamily: 'Alex Brush, cursive' }}>
              <p className="bank-info">
                <b>Banco:</b> Pichincha
              </p>
              <p className="bank-info">
                <b>Cuenta:</b> Ahorros
              </p>
              <p className="bank-info">
                <b>Número:</b> 2211819036
              </p>
              <p className="bank-info">
                <b>Cédula de identidad:</b> 0401872288
              </p>
              <p className="bank-info">
                <b>Correo electrónico:</b> arimera14@gmail.com
              </p>
              <p className="bank-info">
                <b>Nombre:</b> Ariana Mera
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GiftSection;
