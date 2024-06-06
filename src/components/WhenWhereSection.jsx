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
              <img src={require('../images/whenwhere/ceremonia.jpeg')} alt="" />
            </div>
            <div className="content">
              <h5>Ceremonia eclesiástica</h5>
              <p>
                <i className="ti-location-pin"></i> Parroquia Nuestra Señora del
                Cisne{' '}
              </p>
              <p>
                <i className="ti-time"></i> <span> 10:45</span>
              </p>
              <span className="oliven-title-meta">
                <a
                  href="https://maps.app.goo.gl/YxbixZ9GBuJZMz9RA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver dirección
                </a>
              </span>
            </div>
          </div>
          <div className="item col-md-4 col-sm-12">
            <div className="whenwhere-img">
              <img
                src={require('../images/whenwhere/decoration.jpeg')}
                alt=""
              />
            </div>
            <div className="content">
              <h5>Recepción</h5>
              <p>
                <i className="ti-location-pin"></i> Villa Ana Lucía
              </p>
              <p>
                <i className="ti-time"></i> <span> 13:00</span>
              </p>
              <span className="oliven-title-meta">
                <a
                  href="https://maps.app.goo.gl/JafTybPKGVUfuJNm6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver dirección
                </a>
              </span>
            </div>
          </div>
          <div className="item col-md-4 col-sm-12">
            <div className="whenwhere-img">
              <img src={require('../images/whenwhere/2.jpg')} alt="" />
            </div>
            <div className="content">
              <h5>Luna de miel</h5>
              <p>
                <i className="ti-direction-alt"></i> ¡¡Sorpresa!!
              </p>
              <p>
                <i className="ti-direction"></i>{' '}
              </p>
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
