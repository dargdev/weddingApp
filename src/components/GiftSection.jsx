import React from 'react';

function GiftSection() {
  return (
    <div id="gift" className="gift-section gift">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-30">
            <br />
            <span className="oliven-title-meta" style={{ textAlign: 'center' }}>Agradecemos tu gentileza</span>
            <br />
            <div className="row" style={{ justifyContent: 'center', alignItems: 'center' }}>
              <p className="agradecemos">Tu presencia es el mejor regalo pero si quieres tener un detalle con nosotros nos puedes apoyar a esta cuenta:</p>
            </div>
            <div className="oliven-logo">
              <img src={require("../images/logo.png")} alt="" />
            </div>
            <div style={{ fontFamily: 'Alex Brush, cursive' }}>
              <p className="bank-info"><b>Banco:</b> Pichincha</p>
              <p className="bank-info"><b>Cuenta:</b> Ahorros</p>
              <p className="bank-info"><b>Número:</b> 2206811798</p>
              <p className="bank-info"><b>Cédula de identidad:</b> 1719033639</p>
              <p className="bank-info"><b>Correo electrónico:</b> apazminol@hotmail.com</p>
              <p className="bank-info"><b>Nombre:</b> David Ruano</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GiftSection;
