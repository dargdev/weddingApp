import React from 'react';

function RSVPSection() {
  return (
    <div id="rsvp" className="section-padding bg-img bg-fixed" data-background="images/banner-2.jpg">
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 bg-white p-40">
            <span className="oliven-title-meta text-center">¿Nos acompañas en nuestro</span>
            <span className="oliven-title-meta text-center">día más importante?</span>
            <br />
            <form className="contact__form" method="post" action="mail.php">
              <div className="row">
                <div className="col-12">
                  <div className="alert alert-success contact__msg" style={{ display: 'none' }} role="alert" id="alert-message">
                    Se han guardado tus datos!.
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <input name="nombre" type="text" className="form-control" placeholder="Nombre" required id="invitadoNombre" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <textarea name="comment" id="comment" cols="30" rows="4" className="form-control" placeholder="Escríbenos tu mensaje de felicitaciones "></textarea>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <textarea name="song" id="song" cols="30" rows="3" className="form-control" placeholder="Sugiérenos una linda canción que te gustaría escuchar el día de la boda"></textarea>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <input name="submit" type="button" className="btn buttono" value="Registrar datos" id="agregar" />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RSVPSection;
