import React from 'react';
import './RSVPSection.scss';

import iconList from '../../icons/lista.png'; // Adjust the path as needed

function RSVPSection() {
  const phoneNumber = '+593982826033'; // Reemplaza con tu número de teléfono
  const message = 'Hola, confirmo mi asistencia a la boda.'; // Mensaje predefinido

  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappLink, '_blank');
  };
  return (
    <div id="rsvp" className="rsvp section-padding bg-img bg-fixed">
      <div className="container">
        <div className="row">
          <div className="bg-blur">
            <span className="oliven-title-meta text-center">
              ¿Nos acompañas en nuestro
            </span>
            <span className="oliven-title-meta text-center">
              día más importante?
            </span>
            <br />
            <div className="confirm-buton" onClick={handleClick}>
              <span>Confirma tú asistencia</span>
              <img
                src={iconList}
                alt="Icon"
                style={{ width: '40px', height: '40px' }}
              />
            </div>

            {/* <form className="contact__form" method="post" action="mail.php">
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
            </form> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RSVPSection;
