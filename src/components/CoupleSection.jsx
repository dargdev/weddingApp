import React from 'react';

function CoupleSection() {
  return (
    <div id="couple" className="bridegroom clear section-padding bg-pink">
      <div className="container">
        <div className="row mb-60">
          <div className="col-md-6">
            <div className="item toright mb-30 animate-box" data-animate-effect="fadeInLeft">
              <div className="img">
                <img src={require("../photos/ari-sola.jpg")} alt="Ariana" style={{ height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="info valign">
                <div className="full-width">
                  <h6>Ariana Michelle<i className="ti-heart"></i></h6>
                  <span>La novia</span>
                  <p>Encantadora, soñadora, perspicaz y sobre todo, con un corazón gigante y noble, al servicio de los demás.</p>
                  <p>Dulce, tierna, correcta y llena de un sin número de virtudes más, que hace de mis días, una alegría eterna.</p>
                  <p>Att: Tu futuro esposo.</p>
                  <div className="social">
                    <div className="full-width">
                      <a href="https://instagram.com/luisa.loyola?igshid=YmMyMTA2M2Y=" className="icon"><i className="ti-instagram"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="item mb-30 animate-box" data-animate-effect="fadeInRight">
              <div className="img">
                <img src={require("../photos/david-solo.jpeg")} alt="David" style={{ height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="info valign">
                <div className="full-width">
                  <h6>David Alejandro <i className="ti-heart"></i></h6>
                  <span>El novio</span>
                  <p>Inteligente, noble, servicial, justo, romántico, trabajador y un sinfín de cualidades que hicieron que de ti yo me enamore y sienta el amor más bonito y puro.</p>
                  <p>Ayrtiton, dicen que la vida se vive una sola vez y no puedo esperar a comenzar a vivir esta aventura a tu lado.</p>
                  <p>Att: Tu futura esposa.</p>
                  <div className="social">
                    <div className="full-width">
                      <a href="https://instagram.com/apazminol?igshid=YmMyMTA2M2Y=" className="icon"><i className="ti-instagram"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center animate-box" data-animate-effect="fadeInUp">
            <h3 className="oliven-couple-title">¡Nos casamos!</h3>
            <h4 className="oliven-couple-subtitle">Agosto 17, 2024 — Quito</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoupleSection;