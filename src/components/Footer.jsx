import React from 'react';

function Footer() {
  return (
    <div className="footer2">
      <div className="oliven-narrow-content">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2>
              <a href="index.html">
                <img src={require("../images/logo.png")} alt="" />
                <span>Ariana <small>&</small> David</span>
              </a>
            </h2>
            <p className="copyright">17 Agosto, 2024 – Quito</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
