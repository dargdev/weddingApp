import React from 'react';

function WhenWhereSection() {
  return (
    <div id="whenwhere" className="whenwhere section-padding bg-pink">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-30">
            <h2 className="oliven-title">¿CUÁNDO & DÓNDE?</h2>
          </div>
        </div>
        <div className="row">
          <div className="item col-md-4 col-sm-12">
            <div className="whenwhere-img">
              <img src={require("../images/whenwhere/3.jpg")} alt="" />
            </div>
            <div className="content">
              <h5>Ceremonia eclesiástica</h5>
              <p><i className="ti-location-pin"></i> Iglesia Católica Sagrado Corazón de Jesús - La Armenia</p>
              <p><i className="ti-time"></i> <span> 11:45 – 13:30</span></p>
              <span className="oliven-title-meta">
                <a href="https://goo.gl/maps/9P9qMkZwwrqA4nzY8" target="_blank" rel="noopener noreferrer">Ver dirección</a>
              </span>
            </div>
          </div>
          <div className="item col-md-4 col-sm-12">
            <div className="whenwhere-img">
              <img src={require("../images/whenwhere/1.jpg")} alt="" />
            </div>
            <div className="content">
              <h5>Recepción</h5>
              <p><i className="ti-location-pin"></i> Urbanización Los Chillos, Club "Los Chillos"</p>
              <p><i className="ti-time"></i> <span> 14:00 – 20:30</span></p>
              <span className="oliven-title-meta">
                <a href="https://g.page/clubloschillos?share" target="_blank" rel="noopener noreferrer">Ver dirección</a>
              </span>
            </div>
          </div>
          <div className="item col-md-4 col-sm-12">
            <div className="whenwhere-img">
              <img src={require("../images/whenwhere/2.jpg")} alt="" />
            </div>
            <div className="content">
              <h5>Luna de miel</h5>
              <p><i className="ti-direction-alt"></i> ¡¡Sorpresa!!</p>
              <p><i className="ti-direction"></i> 04/09 – 13/09</p>
              <br />
              <span className="oliven-title-meta">Próximamente</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhenWhereSection;