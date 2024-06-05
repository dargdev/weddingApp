import React from 'react';

function StorySection() {
  return (
    <div id="story" className="story section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-5 mb-30">
            <div className="story-img animate-box" data-animate-effect="fadeInLeft">
              <div className="img">
                <img src={require("../photos/friday.jpeg")} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
          <div className="col-md-7 animate-box" data-animate-effect="fadeInRight">
            <h4 className="oliven-story-subtitle">Nuestro amor.</h4>
            <h3 className="oliven-story-title">Nuestra Historia</h3>
            <p>Son ya 10 años desde que nos conocimos y es una alegría para nosotros contar nuestra historia. Todo empezó desde aquellas veces en las que coincidimos en nuestro camino al trabajo, donde poco cruzábamos palabras, pero la vida nos daba la oportunidad de estar.</p>
            <p>Un 20 de septiembre de 2020, fue desde cuando contestando una historia de Instagram, empezaba la conquista, aún estando separados por más de 3.000 km aunque de manera virtual, pero así comenzó nuestro acercamiento.</p>
            <p>Oficialmente, el 23 de noviembre de 2020, salimos por primera vez. Que lindo es mirar atrás y recordar tantos bellos momentos, porque ese fue el inicio de una mágica historia, que dio paso a iniciar nuestro noviazgo allá en la reserva Cayambe – Coca el 30 de enero de 2021.</p>
            <h3 className="oliven-story-title">10 Febrero 2024. Nos comprometimos</h3>
            <p>El 10 de febrero 2024, David buscando el momento especial y un bonito lugar una ocasión tal para recordarlo eternamente, preguntó si Luisa quería unir su vida para siempre junto a la de él… Y entonces, ha llegado el momento de celebrar con todos ustedes que forman parte de esta historia bajo la bendición de nuestros padres, Dios y los nuestros.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StorySection;
