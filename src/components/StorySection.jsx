import React from 'react';

function StorySection() {
  return (
    <div id="story" className="story section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-5 mb-30">
            <div
              className="story-img animate-box"
              data-animate-effect="fadeInLeft"
            >
              <div className="img">
                <img
                  src={require('../photos/friday.jpeg')}
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div
            className="col-md-6 animate-box"
            data-animate-effect="fadeInRight"
          >
            <h4 className="oliven-story-subtitle">Nuestro amor.</h4>
            <h3 className="oliven-story-title">Nuestra Historia</h3>
            <p className="story-text">
              Nos conocimos mientras estudiabamos nuestra carrera universitaria
              en el año 2014, compartimos algunas clases juntos, durante algunos
              meses nos conocimos y en el 2015 iniciamos nuestra relación. Hemos
              estado juntos durante 8 años, disfrutando cada momento y superando
              cada desafío, apoyándonos mutuamente y siendo el mayor soporte el
              uno para el otro, hemos aprendido a superar las adversidades, y a
              construir una bonita relación con confianza, respeto y amor
              incondicional.
            </p>
            <h3 className="oliven-story-title">Nos comprometimos</h3>
            <p className="story-text">
              El 10 de febrero de 2024, durante un viaje inolvidable a las Islas
              Galápagos, David preparó una sorpresa que cambiaría nuestras vidas
              para siempre. En un hermoso mirador, David se arrodilló y me pidió
              que pasara el resto de mi vida a su lado. Con lágrimas de
              felicidad dije ¡sí!, y así comenzó nuestro emocionante camino
              hacia unir nuestras vidas. Desde ese momento, hemos estado
              planificando nuestro futuro juntos, llenos de amor y expectativas
              por todo lo que vendrá. Cada día nos sentimos más afortunados de
              habernos encontrado y de poder compartir esta aventura juntos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StorySection;
